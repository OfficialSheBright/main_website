"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-purple-700 text-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          EduConnect
        </Link>
        <button
          className="xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="text-3xl">&#9776;</span>
        </button>
        <ul
          className={`flex-col xl:flex-row xl:flex gap-8 font-medium xl:static absolute top-16 left-0 w-full bg-purple-700 xl:bg-transparent xl:w-auto transition-all ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/companies">Companies</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          {!user && (
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/signup">Signup</Link></li>
            </>
          )}
          {user && (
            <>
              <li><Link href="/profile">Profile</Link></li>
              <li>
                <button
                  onClick={() => signOut(auth)}
                  className="bg-white text-purple-700 px-4 py-1 rounded-full font-semibold hover:bg-purple-100 transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}