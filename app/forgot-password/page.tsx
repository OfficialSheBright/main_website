"use client";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox and spam folder.");
    } catch (err: unknown) {
      type FirebaseAuthError = Error & { code?: string };
      const firebaseErr = err as FirebaseAuthError;
      if (firebaseErr instanceof Error && typeof firebaseErr.code === "string") {
        switch (firebaseErr.code) {
          case "auth/user-not-found":
            setError("No account found with this email address.");
            break;
          case "auth/invalid-email":
            setError("Please enter a valid email address.");
            break;
          case "auth/too-many-requests":
            setError("Too many requests. Please try again later.");
            break;
          default:
            setError("An error occurred. Please try again.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fef0fc] to-white py-16">
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password</h2>
          <p className="text-gray-600">Enter your email to receive a password reset link</p>
        </div>

        <form onSubmit={handleResetPassword} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {message && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-green-700 text-sm font-medium">{message}</p>
                  <p className="text-green-600 text-xs mt-1">
                    <strong>Note:</strong> If you don&apos;t see the email in your inbox, please check your spam/junk folder.
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-[#ca5b8e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cc6594] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="mt-4 text-center">
            <Link href="/login" className="text-[#ca5b8e] hover:text-[#cc6594] font-medium text-sm">
              ← Back to Login
            </Link>
          </div>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Remember your password?{" "}
          <Link href="/login" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold">
            Sign in here
          </Link>
        </p>
      </div>
    </section>
  );
}