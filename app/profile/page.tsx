"use client";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import Link from "next/link";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Profile</h2>
        <p className="text-purple-700 mb-4">You are not logged in.</p>
        <Link href="/login" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition">
          Login
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-md mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-purple-900 mb-6">Your Profile</h2>
      <div className="bg-white rounded-xl shadow p-6 border border-purple-100 mb-6">
        <p className="text-purple-800 font-semibold mb-2">Email:</p>
        <p className="text-purple-700 mb-4">{user.email}</p>
        <p className="text-purple-800 font-semibold mb-2">Enrolled Courses:</p>
        <ul className="list-disc pl-6 text-purple-700">
          <li>Coming soon...</li>
        </ul>
      </div>
      <Link href="/courses" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition">
        Explore Courses
      </Link>
    </section>
  );
}