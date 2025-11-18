"use client";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fef0fc] to-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-25">
        {/* Left Side - Form */}
        <div className="flex-1 max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your SheBright account</p>
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent"
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
              className="w-full mt-6 bg-[#ca5b8e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cc6594] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <div className="mt-4 text-center">
              <Link href="/forgot-password" className="text-[#ca5b8e] hover:text-[#cc6594] font-medium text-sm">
                Forgot your password?
              </Link>
            </div>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Right Side - Image/GIF - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex flex-1 justify-center items-center pr-0">
          <Image
            src="/login.gif"
            alt="Login"
            width={500}
            height={500}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}