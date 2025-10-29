import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">EduConnect</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering learners and connecting companies worldwide through interactive education.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Platform</h4>
            <div className="space-y-2">
              <Link href="/courses" className="block text-gray-400 hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="/companies" className="block text-gray-400 hover:text-white transition-colors">
                Companies
              </Link>
              <Link href="/features" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/team" className="block text-gray-400 hover:text-white transition-colors">
                Team
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/careers" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <div className="space-y-2">
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EduConnect. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.322c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.322 1.297c.928.874 1.418 2.025 1.418 3.322s-.49 2.448-1.418 3.322c-.874.807-2.025 1.241-3.322 1.241zm7.138 0c-1.297 0-2.448-.49-3.322-1.297-.928-.874-1.418-2.025-1.418-3.322s.49-2.448 1.418-3.322c.874-.807 2.025-1.297 3.322-1.297s2.448.49 3.323 1.297c.928.874 1.417 2.025 1.417 3.322s-.489 2.448-1.417 3.322c-.875.807-2.026 1.241-3.323 1.241z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}