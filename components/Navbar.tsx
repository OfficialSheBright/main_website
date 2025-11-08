"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { UserCircleIcon } from "@heroicons/react/24/outline";

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

  // Comprehensive ProTrack learning paths with proper categorization
  const protrackCategories = [
    {
      title: "Core Development Fields",
      items: [
        { 
          href: "/protrack/web-development", 
          label: "Web Development",
          description: "Complete web development mastery",
          skills: [
            "Frontend Development",
            "Backend Development", 
            "Full-Stack Development",
            "Web Performance Optimization",
            "Web Security Engineering",
            "Progressive Web Apps (PWA)",
            "Responsive & Mobile-First Design"
          ]
        },
        { 
          href: "/protrack/mobile-development", 
          label: "Mobile App Development",
          description: "Native and cross-platform mobile apps",
          skills: [
            "Android Development (Kotlin/Java)",
            "iOS Development (Swift/Objective-C)",
            "Cross-Platform Development (Flutter, React Native)",
            "Mobile Game Development",
            "Wearable App Development"
          ]
        },
        { 
          href: "/protrack/software-engineering", 
          label: "Software Engineering",
          description: "System-level programming and architecture",
          skills: [
            "Desktop App Development",
            "System Programming (C/C++/Rust)",
            "Embedded Systems Development",
            "API Development",
            "Automation & Scripting"
          ]
        }
      ]
    },
    {
      title: "Advanced & Emerging Tech Fields",
      items: [
        { 
          href: "/protrack/ai-ml", 
          label: "AI & Machine Learning",
          description: "Artificial intelligence and ML systems",
          skills: [
            "Machine Learning Engineering",
            "Deep Learning",
            "Natural Language Processing (NLP)",
            "Computer Vision", 
            "AI Infrastructure / MLOps",
            "Generative AI / LLM Development"
          ]
        },
        { 
          href: "/protrack/data-cloud", 
          label: "Data & Cloud",
          description: "Data engineering and cloud infrastructure",
          skills: [
            "Data Science",
            "Data Engineering", 
            "Big Data Development",
            "Database Administration (DBA)",
            "Cloud Engineering (AWS/GCP/Azure)",
            "DevOps / SRE (Site Reliability Engineering)",
            "Cloud Architecture"
          ]
        },
        { 
          href: "/protrack/cybersecurity", 
          label: "Cybersecurity",
          description: "Security engineering and ethical hacking",
          skills: [
            "Application Security",
            "Network Security",
            "Blockchain Security",
            "Smart Contract Security (Audits)",
            "Cyber Threat Intelligence",
            "Penetration Testing / Ethical Hacking"
          ]
        },
        { 
          href: "/protrack/blockchain-web3", 
          label: "Blockchain & Web3",
          description: "Decentralized applications and protocols",
          skills: [
            "Smart Contract Development (Solidity, Rust)",
            "Full-Stack Web3 Development",
            "DeFi Development",
            "NFT & dApp Development",
            "Layer-2 / Zero-Knowledge (ZK) Development",
            "Crypto Infrastructure Engineering",
            "Blockchain Protocol Development"
          ]
        }
      ]
    },
    {
      title: "User Experience & Creative Tech",
      items: [
        { 
          href: "/protrack/design-creative", 
          label: "Design & Creative",
          description: "User experience and visual design",
          skills: [
            "UI/UX Design",
            "Product Design",
            "Interaction Design",
            "Graphic & Visual Design",
            "Motion Design",
            "Game Design"
          ]
        },
        { 
          href: "/protrack/game-development", 
          label: "Game Development",
          description: "Game engines and interactive media",
          skills: [
            "Unity Development",
            "Unreal Engine Development", 
            "Metaverse Development",
            "3D Modeling & Animation (Blender, Maya)"
          ]
        }
      ]
    },
    {
      title: "Management & Hardware",
      items: [
        { 
          href: "/protrack/product-management", 
          label: "Product & Project Management",
          description: "Strategic leadership and project delivery",
          skills: [
            "Product Management",
            "Technical Program Management",
            "Project Management (Agile, Scrum)",
            "Business Analysis",
            "Tech Consulting"
          ]
        },
        { 
          href: "/protrack/hardware-networking", 
          label: "Hardware & Networking",
          description: "IoT, robotics and network engineering",
          skills: [
            "IoT Development",
            "Robotics Engineering",
            "VLSI / Chip Design",
            "Network Engineering"
          ]
        }
      ]
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
             
            {/* ProTrack Dropdown - Full Width Mega Menu */}
            <div 
              className="relative protrack-dropdown"
              onMouseEnter={handleProtrackMouseEnter}
              onMouseLeave={handleProtrackMouseLeave}
            >
              <div className="flex items-center">
                {/* Clickable ProTrack Text */}
                <Link 
                  href="/protrack"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold hover:from-blue-500 hover:to-blue-700 transition-all duration-200 hover:scale-105 transform"
                >
                  ProTrack
                </Link>
                
                {/* Dropdown Arrow Button */}
                <button
                  onClick={() => setProtrackOpen(!protrackOpen)}
                  className="flex items-center text-gray-700 hover:text-[#ca5b8e] font-semibold transition-all duration-200 hover:scale-105 transform group ml-2"
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${protrackOpen ? 'rotate-180' : 'rotate-0'} group-hover:text-blue-500`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Full Width Mega Menu Dropdown - Now with scrollable content */}
              <div className={`fixed left-0 right-0 top-16 bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ${
                protrackOpen 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 translate-y-4 invisible'
              } max-h-[calc(100vh-4rem)] overflow-y-auto`}>
                <div className="max-w-7xl mx-auto px-6 py-12">
                  
                  {/* Header Section */}
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Professional Learning Paths
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Master comprehensive tech skills across all major domains with industry-expert guidance
                    </p>
                  </div>

                  {/* Learning Paths Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {protrackCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-6">
                        
                        {/* Category Header */}
                        <div className="pb-4 border-b-2 border-blue-100">
                          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                            {category.title}
                          </h3>
                        </div>
                        
                        {/* Category Items */}
                        <div className="space-y-4">
                          {category.items.map((item, itemIndex) => (
                            <Link 
                              key={itemIndex} 
                              href={item.href} 
                              onClick={() => setProtrackOpen(false)}
                              className="block group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200"
                            >
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                                {item.label}
                              </h4>
                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {item.description}
                              </p>
                              
                              {/* All Skills as bullet points - Show ALL skills */}
                              <div className="space-y-1">
                                {item.skills.map((skill, skillIndex) => (
                                  <div key={skillIndex} className="flex items-start text-xs text-gray-700">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    <span className="leading-relaxed">{skill}</span>
                                  </div>
                                ))}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Section */}
                  <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                        <div className="text-gray-700 font-medium">Students Trained</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                        <div className="text-gray-700 font-medium">Job Placement Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                        <div className="text-gray-700 font-medium">Learning Paths</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
                        <div className="text-gray-700 font-medium">Learning Support</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Transform Your Career?
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                      Join thousands of women advancing their tech careers across all major technology domains
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link 
                        href="/protrack/assessment"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        onClick={() => setProtrackOpen(false)}
                      >
                        Take Free Skills Assessment
                      </Link>
                      <Link 
                        href="/protrack/dashboard"
                        className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                        onClick={() => setProtrackOpen(false)}
                      >
                        Explore All Programs
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <Link href="/services" className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 hover:scale-105 transform">
              Services
            </Link>
            {/* POTD Coming Soon */}
            <span className="text-gray-400 font-semibold flex items-center cursor-not-allowed">
              POTD
              <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Coming Soon</span>
            </span>
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
                  className="text-gray-700 hover:text-[#ca5b8e] transition-all duration-200 hover:scale-105 transform flex items-center"
                  title="Profile"
                >
                  <UserCircleIcon className="w-6 h-6" />
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
                <div className="flex items-center justify-between">
                  {/* Clickable ProTrack Link */}
                  <Link 
                    href="/protrack"
                    className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold py-3 hover:from-blue-500 hover:to-blue-700 transition-all duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    ProTrack
                  </Link>
                  
                  {/* Dropdown Toggle Button */}
                  <button 
                    onClick={() => setProtrackOpen(!protrackOpen)}
                    className="flex items-center justify-center p-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${protrackOpen ? 'rotate-180' : 'rotate-0'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  protrackOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 pt-2 space-y-4 max-h-96 overflow-y-auto">
                    {protrackCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="border-l-2 border-blue-100 pl-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide py-2 sticky top-0 bg-white">
                          {category.title}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <Link 
                              key={itemIndex}
                              href={item.href} 
                              className="block group p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200"
                              onClick={() => {
                                setMenuOpen(false);
                                setProtrackOpen(false);
                              }}
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {item.label}
                              </div>
                              <div className="text-xs text-gray-600 mt-1 mb-2">
                                {item.description}
                              </div>
                              
                              {/* Mobile bullet points - Show all skills */}
                              <div className="space-y-1">
                                {item.skills.map((skill, skillIndex) => (
                                  <div key={skillIndex} className="flex items-start text-xs text-gray-700">
                                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    <span className="leading-relaxed">{skill}</span>
                                  </div>
                                ))}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {/* Mobile CTA */}
                    <div className="pt-4 border-t border-gray-200 mt-4">
                      <Link 
                        href="/protrack/assessment"
                        className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold text-center mb-2 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                        onClick={() => {
                          setMenuOpen(false);
                          setProtrackOpen(false);
                        }}
                      >
                        Take Free Assessment
                      </Link>
                      <Link 
                        href="/protrack/dashboard"
                        className="block bg-white text-blue-600 border-2 border-blue-600 px-4 py-3 rounded-lg font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-200"
                        onClick={() => {
                          setMenuOpen(false);
                          setProtrackOpen(false);
                        }}
                      >
                        Explore All Programs
                      </Link>
                    </div>
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
              <span className="text-gray-400 font-semibold flex items-center px-4 py-3 rounded-lg cursor-not-allowed">
                POTD
                <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Coming Soon</span>
              </span>
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
                      className="text-gray-700 hover:text-[#ca5b8e] font-semibold transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center"
                      onClick={() => setMenuOpen(false)}
                    >
                      <UserCircleIcon className="w-5 h-5 mr-2" />
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
    </nav>
  );
}