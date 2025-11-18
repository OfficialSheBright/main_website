"use client";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Lab Setup & Modern Infrastructure",
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

  const serviceImages = [
    {
      src: "/lab-setup.jpg",
      alt: "Modern Lab Setup",
      title: "AI & Robotics Labs"
    },
    {
      src: "/trainers.jpg",
      alt: "Certified Trainers",
      title: "Expert Training"
    },
    {
      src: "/certification.jpg",
      alt: "Certification Programs",
      title: "Skill Certification"
    },
    {
      src: "/workshops.jpg",
      alt: "Workshops and Events",
      title: "Interactive Learning"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fef0fc] to-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#aa6182] mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            At SheBright, we collaborate with private and government colleges to build future-ready institutions by bridging the gap between education and industry. Our solutions empower colleges with modern infrastructure, certified trainers, and real-world learning experiences.
          </p>
        </div>
      </section>

      {/* Overview Section with 4-Image Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 4 Image Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {serviceImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-[#fef0fc] to-[#f3e8f0] rounded-2xl border border-[#daabc3]/30">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-2xl">
                    <h4 className="text-white font-semibold text-sm">{image.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#aa6182] mb-6">
                Transforming Education Through Innovation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SheBright bridges the gap between traditional education and modern industry demands by providing comprehensive solutions that prepare students for the future workforce.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From setting up cutting-edge labs to deploying certified trainers, we ensure that every institution we partner with becomes a hub of innovation and practical learning.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-[#fef0fc] to-white rounded-xl border border-[#daabc3]/20">
                <div className="text-3xl font-bold text-[#ca5b8e] mb-2">50+</div>
                <div className="text-sm text-gray-600">Labs Installed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#fef0fc] to-white rounded-xl border border-[#daabc3]/20">
                <div className="text-3xl font-bold text-[#ca5b8e] mb-2">100+</div>
                <div className="text-sm text-gray-600">Certified Trainers</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#fef0fc] to-white rounded-xl border border-[#daabc3]/20">
                <div className="text-3xl font-bold text-[#ca5b8e] mb-2">10K+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#fef0fc] to-white rounded-xl border border-[#daabc3]/20">
                <div className="text-3xl font-bold text-[#ca5b8e] mb-2">25+</div>
                <div className="text-sm text-gray-600">Partner Colleges</div>
              </div>
            </div>

            {/* Key Points */}
            {/* <div>
              <h3 className="text-2xl font-bold text-[#aa6182] mb-4">Why Choose SheBright?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Industry-aligned curriculum and cutting-edge technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Certified trainers with real-world industry experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">End-to-end support from setup to maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Government-recognized certifications and partnerships</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#aa6182] mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of solutions designed to modernize educational institutions and empower students with future-ready skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-[#daabc3]/30 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                      {service.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#aa6182] mb-3">{service.title}</h3>
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#aa6182] mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Simple steps to transform your institution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Consultation & Planning</h3>
              <p className="text-gray-600">We analyze your institution&apos;s needs and create a customized plan for modernization.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Implementation & Setup</h3>
              <p className="text-gray-600">Our expert team handles the complete setup of labs, deployment of trainers, and system integration.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Support & Growth</h3>
              <p className="text-gray-600">Ongoing maintenance, updates, and support to ensure continuous growth and success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Partner with SheBright to modernize your institution, enhance student learning outcomes, and prepare your campus for the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[#ca5b8e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
            <Link 
              href="/team" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#ca5b8e] transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}