"use client";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <section className="max-w-md mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-purple-900 mb-6">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 bg-white rounded-xl shadow p-6 border border-purple-100">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          className="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          className="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition w-fit"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-purple-700">
        Already have an account? <a href="/login" className="underline">Login</a>
      </p>
    </section>
  );
}