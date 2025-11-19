"use client";
import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/protrack"); // Redirect to main dashboard instead of profile
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to ProTrack dashboard after successful login
      router.push("/protrack");
    } catch (err: unknown) {
      if (err instanceof Error) {
        // More user-friendly error messages
        const errorMessage = err.message;
        if (errorMessage.includes("user-not-found")) {
          setError("No account found with this email address.");
        } else if (errorMessage.includes("wrong-password")) {
          setError("Incorrect password. Please try again.");
        } else if (errorMessage.includes("invalid-email")) {
          setError("Please enter a valid email address.");
        } else if (errorMessage.includes("too-many-requests")) {
          setError("Too many failed attempts. Please try again later.");
        } else {
          setError("Failed to sign in. Please check your credentials and try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fef0fc] to-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-25">
        {/* Left Side - Form */}
        <div className="flex-1 max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to continue your learning journey</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent transition-all duration-200"
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
              disabled={loading}
              className="w-full mt-6 bg-[#ca5b8e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cc6594] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="mt-4 text-center">
              <Link href="/forgot-password" className="text-[#ca5b8e] hover:text-[#cc6594] font-medium text-sm transition-colors duration-200">
                Forgot your password?
              </Link>
            </div>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold transition-colors duration-200">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Right Side - Image/GIF - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex flex-1 justify-center items-center pr-0">
          <Image
            src="/login.gif"
            alt="Login illustration"
            width={500}
            height={500}
            unoptimized
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}