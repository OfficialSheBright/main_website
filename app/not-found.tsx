"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 ml-35">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-4">
            4<span className="text-red-500">0</span>4
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Oops! Page Not Found
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Looks like our robot broke something while exploring the web. 
            The page you're looking for seems to have vanished into the digital void.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Go to Home Page
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-gray-50"
            >
              Go Back
            </button>
          </div>
        </div>
        
        {/* Right Side - Broken Robot */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative">
            {/* Main Robot SVG */}
            <svg width="280" height="280" viewBox="0 0 280 280" className="drop-shadow-2xl">
              {/* Robot body */}
              <rect x="90" y="120" width="100" height="110" rx="15" fill="#374151" className="animate-pulse"/>
              
              {/* Robot head */}
              <rect x="100" y="80" width="80" height="65" rx="12" fill="#6B7280"/>
              
              {/* Eyes - one normal, one X (broken) */}
              <circle cx="120" cy="105" r="8" fill="#3B82F6"/>
              <g stroke="#EF4444" strokeWidth="3" strokeLinecap="round">
                <line x1="155" y1="98" x2="168" y2="111"/>
                <line x1="168" y1="98" x2="155" y2="111"/>
              </g>
              
              {/* Mouth - sad/broken */}
              <path d="M 120 125 Q 140 140 160 125" stroke="#9CA3AF" strokeWidth="3" fill="none"/>
              
              {/* Arms - one detached */}
              <rect x="60" y="130" width="30" height="50" rx="8" fill="#9CA3AF"/>
              <rect x="190" y="145" width="30" height="35" rx="8" fill="#9CA3AF" className="animate-bounce"/>
              
              {/* Legs */}
              <rect x="110" y="230" width="20" height="35" rx="6" fill="#6B7280"/>
              <rect x="150" y="230" width="20" height="35" rx="6" fill="#6B7280"/>
              
              {/* Antenna with sparks */}
              <rect x="137" y="60" width="8" height="25" rx="4" fill="#9CA3AF"/>
              <circle cx="141" cy="55" r="6" fill="#EF4444" className="animate-ping"/>
              
              {/* Sparks and error symbols */}
              <g className="animate-bounce">
                <polygon points="70,90 75,100 65,100" fill="#F59E0B"/>
                <text x="60" y="85" fontSize="16" fill="#EF4444">!</text>
              </g>
              
              <g className="animate-pulse" style={{animationDelay: '0.5s'}}>
                <text x="200" y="100" fontSize="18" fill="#F59E0B">?</text>
              </g>
              
              <g className="animate-bounce" style={{animationDelay: '1s'}}>
                <text x="80" y="200" fontSize="20" fill="#EF4444">×</text>
              </g>
              
              {/* Broken parts on ground */}
              <rect x="220" y="250" width="15" height="8" rx="2" fill="#9CA3AF" transform="rotate(25 220 250)"/>
              <rect x="65" y="245" width="12" height="6" rx="2" fill="#6B7280" transform="rotate(-15 65 245)"/>
            </svg>
          </div>
          
          {/* "404 BROKEN" text below robot */}
          <div className="mt-8 text-center">
            <div className="bg-red-100 border-2 border-red-300 rounded-xl px-6 py-3 inline-block">
              <span className="text-2xl font-bold text-red-600">404 BROKEN</span>
            </div>
            <p className="text-gray-500 mt-2 text-sm">System malfunction detected</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}