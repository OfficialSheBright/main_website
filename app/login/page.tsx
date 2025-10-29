"use client";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

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
    <section className="max-w-md mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-purple-900 mb-6">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-white rounded-xl shadow p-6 border border-purple-100">
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
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
      <p className="mt-4 text-purple-700">
        Don&#39;t have an account? <a href="/signup" className="underline">Sign Up</a>
      </p>
    </section>
  );
}