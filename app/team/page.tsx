import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Somya Sharma",
    role: "Founder & CEO",
    bio: "A visionary entrepreneur leading SheBright's mission to bridge education and industry gaps. With expertise in community building and strategic partnerships, she drives skill development across India's emerging regions.",
    img: "/Founder.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/somyaasharma0244",
      twitter: "https://x.com/0xsomya",
      email: "somyaasharma3@gmail.com"
    }
  },
  {
    name: "Laxmi Prajapati",
    role: "Co-Founder",
    bio: "Brings operational excellence and deep understanding of educational ecosystems. She ensures seamless program execution and partnerships, empowering institutions with modern learning solutions.",
    img: "/CoFounder.jpeg",
    social: {
      linkedin: "linkedin.com/in/laxmiprajapati2707",
      twitter: "https://x.com/LogixCraft1",
      email: "prajapatilaxmi2707@gmail.com"
    }
  },
  {
    name: "Ghanshyam Singh",
    role: "Developer",
    bio: "SheBright's tech backbone, responsible for building digital infrastructure. With expertise in modern frameworks, he transforms ideas into scalable solutions for learning platforms.",
    img: "/team3.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/ghanshyam-singh-b014232b2/",
      github: "https://github.com/ghanshyam2005singh",
      email: "ghanshyam2005singh@gmail.com"
    }
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fef0fc] to-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#aa6182] mb-6">Our Team</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto px-4">
            Meet the innovators shaping SheBright&#39;s mission to empower Tier-II & Tier-III India through education, technology, and community.
          </p>
        </div>
      </section>

      {/* Team Members Section - Single Soft Box */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Side - Team Introduction */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-white">
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our SheBright Team</h2>
                </div>
                <p className="text-base sm:text-lg leading-relaxed opacity-95 mb-3 sm:mb-4 text-center lg:text-left">
                  Meet the innovators, builders, and visionaries transforming education across India.
                </p>
                <p className="text-sm sm:text-base opacity-90 text-center lg:text-left">
                  From strategic leadership to technical excellence, our team brings expertise and commitment to making quality education accessible.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm opacity-80">Empowering through collaboration</span>
                </div>
              </div>
            </div>

            {/* Right Side - Team Member Details */}
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
              <div className="space-y-4 sm:space-y-6">
                {team.map((member, idx) => (
                  <div key={idx} className="group">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 p-3 sm:p-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#fef0fc] hover:to-white transition-all duration-300 hover:shadow-lg">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={70}
                          height={70}
                          className="rounded-2xl border-3 border-[#ca5b8e]/20 shadow-md group-hover:border-[#ca5b8e]/40 transition-all duration-300 w-16 h-16 sm:w-18 sm:h-18"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        {/* Name and Role */}
                        <div className="mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-[#aa6182] group-hover:text-[#ca5b8e] transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-[#ca5b8e] font-semibold text-sm sm:text-base">{member.role}</p>
                        </div>
                        
                        {/* Bio */}
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm mb-3">
                          {member.bio}
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex justify-center sm:justify-start space-x-2">
                          {member.social.linkedin && (
                            <a 
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-7 h-7 bg-[#0077b5] text-white rounded-lg flex items-center justify-center hover:bg-[#005885] transition-colors duration-200"
                              aria-label={`${member.name} LinkedIn`}
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.twitter && (
                            <a 
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-7 h-7 bg-[#1da1f2] text-white rounded-lg flex items-center justify-center hover:bg-[#0d8bd9] transition-colors duration-200"
                              aria-label={`${member.name} Twitter`}
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.github && (
                            <a 
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-7 h-7 bg-[#333] text-white rounded-lg flex items-center justify-center hover:bg-[#24292e] transition-colors duration-200"
                              aria-label={`${member.name} GitHub`}
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.email && (
                            <a 
                              href={`mailto:${member.social.email}`}
                              className="w-7 h-7 bg-[#ca5b8e] text-white rounded-lg flex items-center justify-center hover:bg-[#b84c7a] transition-colors duration-200"
                              aria-label={`Email ${member.name}`}
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Subtle separator between team members */}
                    {idx < team.length - 1 && (
                      <div className="mx-3 sm:mx-4 mt-3 sm:mt-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Join Our Team</h2>
          </div>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto px-4">
            Do you share our vision of empowering education and technology in Tier-II & Tier-III India? 
            We&#39;re always looking for passionate innovators, mentors, and builders to join our journey.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[#ca5b8e] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#fef0fc] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#aa6182] text-center mb-8 sm:mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#aa6182] mb-3">Innovation</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                We constantly innovate to bridge the gap between traditional education and modern industry needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#aa6182] mb-3">Collaboration</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                We believe in the power of partnerships to create meaningful impact in education and community development.
              </p>
            </div>
            <div className="text-center p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#aa6182] mb-3">Empowerment</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our mission is to empower individuals and institutions with the tools and knowledge they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}