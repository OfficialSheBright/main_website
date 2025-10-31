"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [protrackOpen, setProtrackOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Only initialize Firebase on the client side
    if (typeof window !== 'undefined') {
      import('../lib/firebase').then(({ auth }) => {
        import('firebase/auth').then(({ onAuthStateChanged }) => {
          const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
          return () => unsubscribe();
        });
      });
    }
  }, []);

  const handleSignOut = async () => {
    if (typeof window !== 'undefined') {
      const { auth } = await import('../lib/firebase');
      const { signOut } = await import('firebase/auth');
      await signOut(auth);
    }
  };

  const protrackMenuItems = [
    { href: "/protrack/dashboard", label: "Dashboard" },
    { href: "/protrack/courses", label: "Course Progress" },
    { href: "/protrack/skills", label: "Skill Assessment" },
    { href: "/protrack/certificates", label: "Certificates" },
    { href: "/protrack/analytics", label: "Learning Analytics" }
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-[#aa6182] tracking-tight">SheBright</h1>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors">
              Team
            </Link>
            
            {/* ProTrack Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProtrackOpen(!protrackOpen)}
                className="flex items-center text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors"
              >
                ProTrack
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {protrackOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {protrackMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-[#ca5b8e] hover:bg-[#fef0fc] transition-colors"
                      onClick={() => setProtrackOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/services" className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors">
              Contact
            </Link>
          </div>
            
          {/* Auth Buttons - Right */}
          <div className="hidden md:flex items-center">
            {isClient && !user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-[#ca5b8e] text-white px-6 py-2 rounded-full hover:bg-[#cc6594] transition-colors font-medium shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            ) : isClient && user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/profile" 
                  className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium"
                >
                  Sign out
                </button>
              </div>
            ) : (
              // Show loading state or default buttons during SSR
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-[#ca5b8e] text-white px-6 py-2 rounded-full hover:bg-[#cc6594] transition-colors font-medium shadow-sm"
                >
                  Sign Up
                </Link>
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
                href="/about" 
                className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/team" 
                className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Team
              </Link>
              
              {/* Mobile ProTrack Section */}
              <div className="px-4">
                <div className="text-gray-700 font-medium py-2">ProTrack</div>
                <div className="ml-4 space-y-2">
                  {protrackMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-600 hover:text-[#ca5b8e] transition-colors py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/services" 
                className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-100">
                {isClient && user ? (
                  <div className="flex flex-col space-y-3">
                    <Link 
                      href="/profile" 
                      className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setMenuOpen(false);
                      }}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium mx-4 text-left"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link 
                      href="/login" 
                      className="text-gray-700 hover:text-[#ca5b8e] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      href="/signup" 
                      className="bg-[#ca5b8e] text-white px-4 py-2 rounded-lg hover:bg-[#cc6594] transition-colors font-medium text-center mx-4"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
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