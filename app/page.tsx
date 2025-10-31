"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'b2b' | 'b2c'>('b2b');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Learn, Build</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                and Shine. Together.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Empowering institutions and learners to innovate, collaborate, and excel in the digital age. We bridge education and industry, creating future-ready learning experiences that transform lives and careers.
            </p>
            
            <Link 
              href="/contact" 
              className="bg-[#ca5b8e] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block mb-16"
            >
              Get in Touch
            </Link>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl shadow-md hover:shadow-lg transition-shadow"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by 10K+ learners and recognized by Government
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <span className="bg-blue-50 text-[#ca5b8e] px-4 py-2 rounded-lg font-semibold border border-blue-200">MSME</span>
            <span className="bg-green-50 text-[#ca5b8e] px-4 py-2 rounded-lg font-semibold border border-green-200">Startup India</span>
            <span className="bg-indigo-50 text-[#ca5b8e] px-4 py-2 rounded-lg font-semibold border border-indigo-200">Skilled India</span>
            <span className="bg-purple-50 text-[#ca5b8e] px-4 py-2 rounded-lg font-semibold border border-purple-200">PMKVY</span>
            <span className="bg-blue-50 text-[#ca5b8e] px-4 py-2 rounded-lg font-semibold border border-blue-200">NSDC</span>
            <span className="bg-gray-50 text-[#ca5b8e] px-4 py-2 rounded-lg font-semibold border border-gray-200">RSDM</span>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Good questions, smarter growth.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              With SheBright&apos;s real-time insights, certified trainers, and modern tech infrastructure, institutions turn challenges into opportunities — building the future of education and business together.
            </p>
          </div>

          {/* Interactive Three-Step Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Steps */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovate with Purpose</h3>
                  <p className="text-gray-600 mb-4">
                    SheBright empowers government and private colleges with modern tech infrastructure, AI-driven labs, and hands-on learning environments designed for real-world impact.
                  </p>
                  <Link href="/services" className="text-[#ca5b8e] font-semibold transition-colors">
                    Explore Infrastructure Solutions →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Train with Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Our certified trainers and industry-aligned programs bridge the gap between education and employment, ensuring students are ready for the future workforce.
                  </p>
                  <Link href="/team" className="text-[#ca5b8e] font-semibold transition-colors">
                    Meet Our Trainers →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborate for Growth</h3>
                  <p className="text-gray-600 mb-4">
                    As a trusted B2B partner, SheBright works with institutions to drive innovation, enhance skill development, and build a sustainable educational ecosystem.
                  </p>
                  <Link href="/contact" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold transition-colors">
                    Partner with SheBright →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:pl-8">
              <div className="aspect-square bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-200 shadow-lg">
                <div className="text-blue-600 text-center">
                  <div className="w-16 h-16 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-[#ca5b8e]">Dynamic Content Changes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-blue-50 rounded-2xl border border-blue-200 shadow-lg"></div>
            </div>

            {/* Right Side - Quote */}
            <div className="order-1 lg:order-2">
              <blockquote className="text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                &quot;I know classrooms are alive, and education is creating real change.&quot;
              </blockquote>
              <cite className="text-[#ca5b8e] font-semibold text-lg">
                Laxmi Prajapati<br />
                <span className="text-gray-600 font-normal">Co-Founder & COO</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* B2B/B2C Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smarter Learning, Stronger Connections.
            </h2>
            <p className="text-xl text-gray-600 mb-2">Empowering colleges and learners every day.</p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              SheBright bridges education and industry by making learning interactive, insightful, and impactful — for institutions, trainers, and students alike.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
              <button
                onClick={() => setSelectedTab('b2b')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedTab === 'b2b'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                For Institutions (B2B)
              </button>
              <button
                onClick={() => setSelectedTab('b2c')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedTab === 'b2c'
                    ? 'bg-[#ca5b8e] text-white shadow-md'
                    : 'text-gray-700 hover:text-[#ca5b8e]'
                }`}
              >
                For Students (B2C)
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            {selectedTab === 'b2b' ? (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#ca5b8e] rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Build Future-Ready Campuses</h4>
                    <p className="text-gray-600">Partner with SheBright to modernize your college with AI, Robotics, and Data Labs, ensuring every student gets hands-on experience aligned with industry needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#ca5b8e] rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Train with Certified Experts</h4>
                    <p className="text-gray-600">Access certified trainers and structured programs designed to upskill students and improve institutional performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#ca5b8e] rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Upgrade Infrastructure</h4>
                    <p className="text-gray-600">Transform your classrooms into innovation hubs equipped with advanced labs and smart learning systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#ca5b8e] rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Track Growth in Real Time</h4>
                    <p className="text-gray-600">Monitor student engagement, learning progress, and outcomes with data-driven insights and reports.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#ca5b8e] rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Collaborate & Expand</h4>
                    <p className="text-gray-600">Connect with industry partners and skill development bodies to unlock new growth opportunities.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#ca5b8e] rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Learn from Industry Experts</h4>
                    <p className="text-gray-600">Gain practical skills from certified mentors and professionals working in real-world tech domains.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Get Certified. Get Ahead.</h4>
                    <p className="text-gray-600">Earn recognized certifications from SheBright, MSME, NSDC, and other national bodies — boosting your employability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Engage & Explore</h4>
                    <p className="text-gray-600">Participate in hands-on workshops, projects, and innovation challenges designed to build confidence and creativity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Build Your Future</h4>
                    <p className="text-gray-600">From coding to robotics, explore modern learning paths that prepare you for a fast-evolving job market.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Stay Connected</h4>
                    <p className="text-gray-600">Be part of the SheBright community — a network of learners, innovators, and change-makers shaping tomorrow.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Easy to Start. Simple to Grow.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Whether you&apos;re a government or private college, partnering with SheBright is seamless. Choose the model that fits your institution&apos;s goals — we&apos;ll handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200 bg-white hover:border-blue-300">
              <div className="w-12 h-12 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Set up modern Computer, AI, Robotics, and Data Labs with SheBright&apos;s end-to-end infrastructure solutions — designed to make your campus future-ready.
              </p>
              <Link 
                href="/services" 
                className="text-[#ca5b8e] font-semibold transition-colors"
              >
                Explore Infrastructure Model →
              </Link>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200 bg-white hover:border-indigo-300">
              <div className="w-12 h-12 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Provide Certified Trainers</h3>
              <p className="text-gray-600 mb-6">
                Access industry-certified trainers who deliver real-world, industry-aligned learning experiences to empower your students.
              </p>
              <Link 
                href="/team" 
                className="text-[#ca5b8e] font-semibold transition-colors"
              >
                View Trainer Model →
              </Link>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200 bg-white hover:border-purple-300">
              <div className="w-12 h-12 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maintain Tech Facilities</h3>
              <p className="text-gray-600 mb-6">
                Keep your labs and learning spaces running smoothly with regular updates, maintenance, and technical support from our expert team.
              </p>
              <Link 
                href="/services" 
                className="text-[#ca5b8e] font-semibold transition-colors"
              >
                Learn About Maintenance Model →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Power of Collaboration.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              SheBright makes it simple for institutions, communities, and government bodies to connect, learn, and grow together — creating a cycle of innovation, skill development, and progress across India.
            </p>
          </div>

          {/* Scrollable Cards */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-8 min-w-max">
              <div className="bg-white rounded-2xl p-8 shadow-lg min-w-[400px] border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Colleges in Touch</h3>
                <h4 className="text-lg font-semibold text-[#ca5b8e] mb-4">Building Future-Ready Campuses</h4>
                <p className="text-gray-600 mb-6">
                  Partner colleges experience higher student engagement, improved placement readiness, and a modern learning ecosystem powered by AI and hands-on labs.
                </p>
                <p className="text-sm text-[#ca5b8e] font-semibold mb-4">Read Case: XYZ Engineering College</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-[#ca5b8e] font-bold">→ 3x</span>
                    <span className="text-gray-600 ml-2">improvement in student participation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#ca5b8e] font-bold">→ 2x</span>
                    <span className="text-gray-600 ml-2">increase in employability outcomes</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg min-w-[400px] border-l-4 border-green-500 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Communities in Touch</h3>
                <h4 className="text-lg font-semibold text-green-600 mb-4">Empowering Local Talent</h4>
                <p className="text-gray-600 mb-6">
                  Through SheBright&apos;s workshops and learning programs, communities gain access to modern tech education, mentorship, and opportunities to collaborate and innovate.
                </p>
                <p className="text-sm text-green-600 font-semibold mb-4">Read Case: SheBright Community Program</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold">→ 5x</span>
                    <span className="text-gray-600 ml-2">growth in community engagement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold">→ 4x</span>
                    <span className="text-gray-600 ml-2">increase in skill certification rate</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg min-w-[400px] border-l-4 border-[#ca5b8e] hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <span className="text-[#ca5b8e]">♀</span> Trained Students & Programs
                </h3>
                <p className="text-gray-600 mb-6">
                  At SheBright, we&apos;re shaping the next generation of innovators and professionals through hands-on learning and real-world exposure. Our certified trainers and structured programs ensure every student learns, builds, and grows with purpose.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center">
                    <span className="text-[#ca5b8e] font-bold">→ 10,000+</span>
                    <span className="text-gray-600 ml-2">Students Trained</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#ca5b8e] font-bold">→ 50+</span>
                    <span className="text-gray-600 ml-2">Colleges Impacted</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  From AI and Robotics to Data Analytics and Web Development, our programs are designed to make students job-ready and institutions future-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Learn, Build, and Lead with <span className="text-[#ca5b8e]">SheBright</span>.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Empowering institutions and learners to ask, explore, and innovate every day. Start your journey toward smarter education and future-ready skills.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Quick Links</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200 hover:border-blue-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-4">Ready-to-Use Programs</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Access certified learning modules and workshops designed for modern education.
              </p>
              <Link 
                href="/services" 
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Explore Programs →
              </Link>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200 hover:border-indigo-300">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-4">Trainer Support & Resources</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Find answers, guidance, and onboarding materials for trainers and institutions.
              </p>
              <Link 
                href="/contact" 
                className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              >
                Get Help & Answers →
              </Link>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200 hover:border-purple-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-4">Institutional Solutions</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Discover customized B2B models for government and private colleges — from lab setup to trainer deployment.
              </p>
              <Link 
                href="/services" 
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                View Enterprise Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}