"use client";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Lab Setup & Modern Infrastructure",
      icon: "🔬",
      description: "We design and install state-of-the-art technical labs built to industry standards, providing students with hands-on exposure to emerging technologies.",
      features: [
        "AI & Data Science Labs",
        "Robotics & IoT Labs", 
        "Web3 & Blockchain Labs",
        "Computer & Coding Labs"
      ],
      link: "/contact",
      linkText: "Setup Your Lab"
    },
    {
      id: 2,
      title: "Certified Trainers Deployment",
      icon: "👩‍🏫",
      description: "We provide highly qualified and industry-certified trainers who ensure students gain both theoretical knowledge and practical skills.",
      features: [
        "Artificial Intelligence",
        "Development",
        "Data Science",
        "Robotics",
        "Blockchain & Cloud Computing"
      ],
      link: "/team",
      linkText: "Meet Our Trainers"
    },
    {
      id: 3,
      title: "Certification & Skill Development",
      icon: "🎓",
      description: "Industry-recognized certification programs aligned with NSDC, PMKVY, and Startup India standards to enhance employability.",
      features: [
        "NSDC Aligned Programs",
        "PMKVY Certifications",
        "Startup India Standards",
        "Real-world Skill Development"
      ],
      link: "/contact",
      linkText: "View Programs"
    },
    {
      id: 4,
      title: "Workshops, Seminars & Hackathons",
      icon: "🚀",
      description: "Interactive workshops, seminars, and hackathons in partnership with industry experts to encourage innovation and practical learning.",
      features: [
        "Industry Expert Sessions",
        "Innovation Workshops",
        "Team Collaboration Events",
        "Practical Learning Activities"
      ],
      link: "/contact",
      linkText: "Schedule Event"
    },
    {
      id: 5,
      title: "Lab Maintenance & AMC Support",
      icon: "🔧",
      description: "End-to-end maintenance and support for all labs with regular upgrades, inspections, and continuous technical assistance.",
      features: [
        "Software & Hardware Upgrades",
        "Regular Inspections",
        "AMC Plans",
        "24/7 Technical Support"
      ],
      link: "/contact",
      linkText: "Get Support"
    },
    {
      id: 6,
      title: "Industry Collaborations & Placement",
      icon: "🤝",
      description: "Connect colleges with industry leaders and startups to facilitate real opportunities for students and institutions.",
      features: [
        "Internship Opportunities",
        "Job Placement Support",
        "Industry Mentorship",
        "Live Projects & Collaborations"
      ],
      link: "/contact",
      linkText: "Partner With Us"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fef0fc] to-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#aa6182] mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            At SheBright, we collaborate with private and government colleges to build future-ready institutions by bridging the gap between education and industry. Our solutions empower colleges with modern infrastructure, certified trainers, and real-world learning experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-[#daabc3] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    {service.id}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-3xl">{service.icon}</span>
                    <h2 className="text-2xl font-bold text-[#aa6182]">{service.title}</h2>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#aa6182] mb-3 uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#ca5b8e] rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-[#ca5b8e] hover:text-[#cc6594] font-semibold transition-colors group"
                  >
                    {service.linkText}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Labs Installed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Certified Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Partner Colleges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#fef0fc] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#aa6182] mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            💡 Partner with SheBright to modernize your institution, enhance student learning outcomes, and prepare your campus for the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#ca5b8e] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#cc6594] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-[#ca5b8e] text-[#ca5b8e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ca5b8e] hover:text-white transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}