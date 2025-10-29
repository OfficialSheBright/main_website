"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-white border-b sticky border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">EduConnect</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Courses
            </Link>
            <Link href="/companies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Companies
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Team
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            
            {/* Auth Buttons */}
            {!user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Sign in
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-sm"
                >
                  Get started
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/profile" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut(auth)}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/courses" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/companies" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Companies
              </Link>
              <Link 
                href="/team" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-100">
                {!user ? (
                  <div className="flex flex-col space-y-3">
                    <Link 
                      href="/login" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                    <Link 
                      href="/signup" 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center mx-4"
                      onClick={() => setMenuOpen(false)}
                    >
                      Get started
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link 
                      href="/profile" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        signOut(auth);
                        setMenuOpen(false);
                      }}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium mx-4 text-left"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}