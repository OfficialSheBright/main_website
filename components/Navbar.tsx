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

  // Close ProTrack dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.protrack-dropdown')) {
        setProtrackOpen(false);
      }
    };

    if (protrackOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [protrackOpen]);

  const handleSignOut = async () => {
    if (typeof window !== 'undefined') {
      const { auth } = await import('../lib/firebase');
      const { signOut } = await import('firebase/auth');
      await signOut(auth);
    }
  };

  // Handle mouse enter/leave for ProTrack dropdown
  const handleProtrackMouseEnter = () => {
    setProtrackOpen(true);
  };

  const handleProtrackMouseLeave = () => {
    setProtrackOpen(false);
  };

  const protrackMenuItems = [
    { 
      href: "/protrack/dashboard", 
      label: "Dashboard",
      icon: "📊",
      description: "View your learning progress"
    },
    { 
      href: "/protrack/courses", 
      label: "Course Progress",
      icon: "📚",
      description: "Track course completion"
    },
    { 
      href: "/protrack/skills", 
      label: "Skill Assessment",
      icon: "🎯",
      description: "Test your knowledge"
    },
    { 
      href: "/protrack/certificates", 
      label: "Certificates",
      icon: "🏆",
      description: "View earned certificates"
    },
    { 
      href: "/protrack/analytics", 
      label: "Learning Analytics",
      icon: "📈",
      description: "Detailed performance insights"
    },
    { 
      href: "/protrack/projects", 
      label: "Projects",
      icon: "💼",
      description: "Hands-on project work"
    },
    { 
      href: "/protrack/mentorship", 
      label: "Mentorship",
      icon: "👥",
      description: "Connect with mentors"
    },
    { 
      href: "/protrack/community", 
      label: "Community",
      icon: "🌐",
      description: "Join study groups"
    }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center group">
            <h1 className="text-2xl font-bold text-[#aa6182] tracking-tight group-hover:text-[#ca5b8e] transition-colors duration-200">
              SheBright
            </h1>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 hover:scale-105 transform">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 hover:scale-105 transform">
              Team
            </Link>
            
            {/* ProTrack Dropdown with Hover */}
            <div 
              className="relative protrack-dropdown"
              onMouseEnter={handleProtrackMouseEnter}
              onMouseLeave={handleProtrackMouseLeave}
            >
              <button
                onClick={() => setProtrackOpen(!protrackOpen)}
                className="flex items-center text-gray-700 hover:text-[#ca5b8e] font-semibold transition-all duration-200 hover:scale-105 transform group"
              >
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold">
                  ProTrack
                </span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${protrackOpen ? 'rotate-180' : 'rotate-0'} group-hover:text-blue-500`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Enhanced Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform ${
                protrackOpen 
                  ? 'opacity-100 translate-y-0 scale-100 visible' 
                  : 'opacity-0 translate-y-2 scale-95 invisible'
              }`}>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-blue-100">
                  <h3 className="text-sm font-bold text-blue-800">Learning Management System</h3>
                  <p className="text-xs text-blue-600">Track your educational journey</p>
                </div>
                
                <div className="max-h-80 overflow-y-auto custom-scrollbar">
                  {protrackMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-start px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border-b border-gray-50 last:border-b-0 group"
                      onClick={() => setProtrackOpen(false)}
                    >
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <div>
                        <div className="font-semibold text-sm group-hover:text-blue-800">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-blue-600">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-t border-blue-100">
                  <Link 
                    href="/protrack"
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                    onClick={() => setProtrackOpen(false)}
                  >
                    View All Features 
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/services" className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 hover:scale-105 transform">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 hover:scale-105 transform">
              Contact
            </Link>
          </div>
            
          {/* Auth Buttons - Right */}
          <div className="hidden md:flex items-center">
            {isClient && !user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-all duration-200 hover:scale-105 transform"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] text-white px-6 py-2 rounded-full hover:from-[#cc6594] hover:to-[#ca5b8e] transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            ) : isClient && user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/profile" 
                  className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-all duration-200 hover:scale-105 transform"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 font-semibold shadow-sm hover:shadow-md transform hover:scale-105"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-all duration-200 hover:scale-105 transform"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] text-white px-6 py-2 rounded-full hover:from-[#cc6594] hover:to-[#ca5b8e] transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
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
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/team" 
                className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Team
              </Link>
              
              {/* Mobile ProTrack Section */}
              <div className="px-4">
                <button 
                  onClick={() => setProtrackOpen(!protrackOpen)}
                  className="flex items-center justify-between w-full text-left py-3 font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold">
                    ProTrack
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${protrackOpen ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  protrackOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                    {protrackMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 text-sm font-medium"
                        onClick={() => {
                          setMenuOpen(false);
                          setProtrackOpen(false);
                        }}
                      >
                        <span className="text-base mr-3">{item.icon}</span>
                        <div>
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                href="/services" 
                className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                {isClient && user ? (
                  <div className="flex flex-col space-y-3">
                    <Link 
                      href="/profile" 
                      className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setMenuOpen(false);
                      }}
                      className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-semibold mx-4 text-left"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link 
                      href="/login" 
                      className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      href="/signup" 
                      className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] text-white px-4 py-3 rounded-lg hover:from-[#cc6594] hover:to-[#ca5b8e] transition-all duration-200 font-semibold text-center mx-4 shadow-md"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </nav>
  );
}