"use client";
import { useState } from "react";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  college: string;
  course: string;
  year: string;
  phone: string;
}

interface UserProfile {
  name: string;
  email: string;
  dob: string;
  college: string;
  course: string;
  year: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    college: "",
    course: "",
    year: "",
    phone: ""
  });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const router = useRouter();

  // Calculate max date (13 years ago from today)
  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
    return maxDate.toISOString().split('T')[0];
  };

  // Calculate min date (reasonable minimum age - 100 years ago)
  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    return minDate.toISOString().split('T')[0];
  };

  // Validate password strength
  const validatePassword = (password: string): { isValid: boolean; message: string } => {
    if (password.length < 8) {
      return { isValid: false, message: "Password must be at least 8 characters long" };
    }
    if (!/(?=.*[a-zA-Z])/.test(password)) {
      return { isValid: false, message: "Password must contain at least one letter" };
    }
    if (!/(?=.*\d)/.test(password)) {
      return { isValid: false, message: "Password must contain at least one number" };
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      return { isValid: false, message: "Password must contain at least one special character (@$!%*?&)" };
    }
    return { isValid: true, message: "" };
  };

  // Validate age from DOB
  const validateAge = (dob: string): boolean => {
    if (!dob) return true;
    
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 13;
    }
    
    return age >= 13;
  };

  // Save user data to Firestore
  const saveUserData = async (userId: string, userData: UserProfile) => {
    try {
      await setDoc(doc(db, "users", userId), userData);
    } catch (error) {
      console.error("Error saving user data:", error);
      throw new Error("Failed to save user data");
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (error) setError("");
  };

  // Validate form data
  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      setError(passwordValidation.message);
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    
    if (formData.dob && !validateAge(formData.dob)) {
      setError("You must be at least 13 years old to register");
      return false;
    }
    
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }
    if (!formData.college.trim()) {
      setError("College name is required");
      return false;
    }
    return true;
  };

  // Send OTP using Resend
  const sendOTP = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otpCode);

      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          otp: otpCode
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      setStep(2);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    }
    setLoading(false);
  };

  // Verify OTP and create account
  const verifyOTPAndSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (otp !== generatedOtp) {
        setError("Invalid OTP. Please try again.");
        setLoading(false);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.name
      });

      const userData: UserProfile = {
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        college: formData.college,
        course: formData.course,
        year: formData.year,
        phone: formData.phone,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await saveUserData(userCredential.user.uid, userData);

      router.push("/profile");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
    setLoading(false);
  };

  // Resend OTP
  const resendOTP = async () => {
    await sendOTP();
  };

  // Get password strength indicator
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/(?=.*[a-zA-Z])/.test(password)) strength++;
    if (/(?=.*\d)/.test(password)) strength++;
    if (/(?=.*[@$!%*?&])/.test(password)) strength++;
    
    return {
      score: strength,
      label: strength === 0 ? '' : 
             strength <= 2 ? 'Weak' : 
             strength <= 3 ? 'Good' : 'Strong'
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fef0fc] to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Join SheBright</h2>
              <p className="text-gray-600">Create your account to start learning</p>
            </div>

            {step === 1 ? (
              // Step 1: User Information Form
              <form onSubmit={(e) => { e.preventDefault(); sendOTP(); }} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      max={getMaxDate()}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">You must be at least 13 years old</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">College/Institution *</label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="Enter your college name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      >
                        <option value="" className="text-gray-500">Select Course</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Civil">Civil</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      >
                        <option value="" className="text-gray-500">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      required
                    />
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${
                                passwordStrength.score <= 2 ? 'bg-red-500' :
                                passwordStrength.score <= 3 ? 'bg-blue-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                            ></div>
                          </div>
                          <span className={`text-xs font-medium ${
                            passwordStrength.score <= 2 ? 'text-red-500' :
                            passwordStrength.score <= 3 ? 'text-blue-500' : 'text-green-500'
                          }`}>
                            {passwordStrength.label}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Password must contain: letters, numbers, special character (@$!%*?&)
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      required
                    />
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                    )}
                  </div>
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 bg-[#ca5b8e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cc6594] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              </form>
            ) : (
              // Step 2: OTP Verification
              <form onSubmit={verifyOTPAndSignup} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Verify Your Email</h3>
                  <p className="text-gray-600 text-sm">
                    We&apos;ve sent a 6-digit code to<br />
                    <span className="font-medium">{formData.email}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="000000"
                      maxLength={6}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-center text-lg font-mono tracking-wider text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full mt-6 bg-[#ca5b8e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cc6594] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating Account..." : "Verify & Create Account"}
                </button>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={resendOTP}
                    disabled={loading}
                    className="text-[#ca5b8e] hover:text-[#cc6594] font-medium text-sm"
                  >
                    Didn&apos;t receive code? Resend OTP
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full mt-2 text-gray-600 hover:text-gray-800 font-medium text-sm"
                >
                  ← Back to form
                </button>
              </form>
            )}

            <p className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold">
                Login here
              </Link>
            </p>
          </div>

          {/* Right Side - Illustration & Content */}
          <div className=" hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center text-center mb-70 ml-20">
            {step === 1 ? (
              // Sign up benefits
              <>
                <div className="mb-8">
                  {/* Learning illustration */}
                  <div className="relative">
                    <svg width="300" height="300" viewBox="0 0 300 300" className="mx-auto">
                      <circle cx="150" cy="150" r="140" fill="#fef0fc" opacity="0.5"/>
                      <circle cx="150" cy="150" r="100" fill="#ca5b8e" opacity="0.1"/>
                      
                      {/* Books stack */}
                      <rect x="80" y="180" width="60" height="8" rx="2" fill="#ca5b8e"/>
                      <rect x="85" y="170" width="50" height="8" rx="2" fill="#e879b5"/>
                      <rect x="90" y="160" width="40" height="8" rx="2" fill="#f3a5c7"/>
                      
                      {/* Person studying */}
                      <circle cx="150" cy="120" r="25" fill="#fbbf70"/>
                      <rect x="130" y="145" width="40" height="45" rx="5" fill="#4f46e5"/>
                      <rect x="125" y="160" width="15" height="30" rx="3" fill="#fbbf70"/>
                      <rect x="160" y="160" width="15" height="30" rx="3" fill="#fbbf70"/>
                      
                      {/* Laptop */}
                      <rect x="170" y="175" width="50" height="30" rx="3" fill="#374151"/>
                      <rect x="172" y="177" width="46" height="20" rx="2" fill="#60a5fa"/>
                      
                      {/* Achievement stars */}
                      <g className="animate-pulse">
                        <polygon points="220,80 225,90 235,90 227,98 230,108 220,102 210,108 213,98 205,90 215,90" fill="#fbbf70"/>
                        <polygon points="80,100 85,110 95,110 87,118 90,128 80,122 70,128 73,118 65,110 75,110" fill="#fbbf70"/>
                        <polygon points="240,140 245,150 255,150 247,158 250,168 240,162 230,168 233,158 225,150 235,150" fill="#fbbf70"/>
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="space-y-6 max-w-lg">
                  <h3 className="text-3xl font-bold text-gray-900">Start Your Tech Journey</h3>
                  <p className="text-lg text-gray-600">
                    Join thousands of women empowering themselves with cutting-edge tech skills and building amazing careers.
                  </p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#ca5b8e] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expert-Led Courses</h4>
                        <p className="text-gray-600 text-sm">Learn from industry professionals with real-world experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#ca5b8e] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Hands-On Projects</h4>
                        <p className="text-gray-600 text-sm">Build a portfolio with real projects and practical experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#ca5b8e] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Career Support</h4>
                        <p className="text-gray-600 text-sm">Get job placement assistance and career guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // OTP verification content
              <>
                <div className="mb-8">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                    <circle cx="100" cy="100" r="90" fill="#fef0fc"/>
                    <circle cx="100" cy="100" r="60" fill="#ca5b8e" opacity="0.2"/>
                    
                    {/* Email icon */}
                    <rect x="60" y="80" width="80" height="50" rx="8" fill="#ca5b8e"/>
                    <path d="M60 85 L100 110 L140 85" stroke="#fff" strokeWidth="3" fill="none"/>
                    
                    {/* Checkmark */}
                    <circle cx="130" cy="70" r="15" fill="#10b981"/>
                    <path d="M123 70 L128 75 L137 65" stroke="#fff" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
                
                <div className="space-y-4 max-w-md">
                  <h3 className="text-2xl font-bold text-gray-900">Almost There!</h3>
                  <p className="text-gray-600">
                    We&apos;ve sent a verification code to your email. Enter it above to complete your registration and start learning.
                  </p>
                  
                  <div className="bg-[#fef0fc] border border-[#ca5b8e] rounded-lg p-4 mt-6">
                    <p className="text-[#ca5b8e] text-sm font-medium">
                      💡 Tip: Check your spam folder if you don&apos;t see the email in your inbox.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}