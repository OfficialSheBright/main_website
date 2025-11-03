export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fef0fc] to-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#aa6182] mb-6">About SheBright</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Empowering Tier-II & Tier-III institutions by bridging the gap between education and industry
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-[#aa6182] mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At SheBright, we believe every student deserves access to quality technical education, no matter where they come from. Our vision is to work hand-in-hand with villages and government technical colleges to bring industry-ready learning to young minds.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide certified trainers who not only teach but also mentor students, helping them build strong technical skills and confidence. By bridging the gap between classroom learning and real-world applications, SheBright is preparing the next generation of innovators and professionals.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Focus Areas</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Computing & Software Development
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Robotics & IoT
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Data Analytics & AI
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Web3 & Blockchain
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Digital Innovation
              </li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#fef0fc] rounded-2xl p-8 border border-[#daabc3]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#ca5b8e] text-white rounded-xl flex items-center justify-center text-xl font-bold mr-4">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-[#aa6182]">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower students in Tier II & Tier III regions, especially in villages, with access to quality education, modern technology, and industry-ready skills. We aim to bridge the gap between traditional learning and future-ready opportunities by providing certified trainers, advanced labs, and exposure to emerging fields like Web3, AI, and digital innovation.
            </p>
          </div>

          <div className="bg-[#fef0fc] rounded-2xl p-8 border border-[#daabc3]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#ca5b8e] text-white rounded-xl flex items-center justify-center text-xl font-bold mr-4">
                🌟
              </div>
              <h3 className="text-2xl font-bold text-[#aa6182]">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to become a leading force in democratizing education by making advanced technical learning accessible to every student, regardless of their location or background. SheBright envisions a future where students from Tier II & Tier III regions are empowered with world-class skills, modern infrastructure, and exposure to cutting-edge technologies.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#aa6182] text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                🏫
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Partner with Colleges</h3>
              <p className="text-gray-700">
                We collaborate with government and private colleges through our B2B partnership model to enhance their educational infrastructure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                👩‍🏫
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Provide Certified Trainers</h3>
              <p className="text-gray-700">
                Our industry-certified trainers deliver quality education and mentorship, ensuring students gain both theoretical knowledge and practical skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                🔬
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Build Modern Labs</h3>
              <p className="text-gray-700">
                We design and install state-of-the-art labs for computing, robotics, data analytics, and other emerging technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Our Certifications & Recognition</h2>
          <p className="text-center text-lg mb-8 opacity-90">
            SheBright is certified by leading government bodies, ensuring credibility, quality, and impact in delivering innovative education.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2">🏛️</div>
              <h4 className="font-semibold">MSME Certified</h4>
              <p className="text-sm opacity-80">Ministry of Micro, Small and Medium Enterprises</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold">Startup India</h4>
              <p className="text-sm opacity-80">Government of India Initiative</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold">Skilled India</h4>
              <p className="text-sm opacity-80">Skill Development Initiative</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2">📜</div>
              <h4 className="font-semibold">PMKVY</h4>
              <p className="text-sm opacity-80">Pradhan Mantri Kaushal Vikas Yojana</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2">🎓</div>
              <h4 className="font-semibold">NSDC</h4>
              <p className="text-sm opacity-80">National Skill Development Corporation</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2">🏆</div>
              <h4 className="font-semibold">RSDM</h4>
              <p className="text-sm opacity-80">Rajasthan Skill Development Mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#fef0fc] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#aa6182] mb-6">Ready to Transform Education Together?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join us in our mission to democratize quality technical education and empower the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#ca5b8e] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#cc6594] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Partner With Us
            </a>
            <a 
              href="/services" 
              className="border-2 border-[#ca5b8e] text-[#ca5b8e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ca5b8e] hover:text-white transition-colors inline-block"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}