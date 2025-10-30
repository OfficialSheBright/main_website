"use client";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#fef0fc] to-white pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#aa6182] mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 mb-8">
            SheBright delivers future-ready solutions for institutions and learners. Explore our core services designed to bridge education and industry.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Infrastructure Solutions */}
        <div className="bg-white border border-[#daabc3] rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">1</div>
          <h2 className="text-xl font-bold text-[#aa6182] mb-4">Infrastructure Solutions</h2>
          <p className="text-gray-700 mb-6">
            Set up advanced Computer, AI, Robotics, and Data Labs. We design, install, and maintain modern learning environments for colleges and institutions.
          </p>
          <Link href="/contact" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold">
            Explore Infrastructure →
          </Link>
        </div>

        {/* Certified Trainers */}
        <div className="bg-white border border-[#daabc3] rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">2</div>
          <h2 className="text-xl font-bold text-[#aa6182] mb-4">Certified Trainers</h2>
          <p className="text-gray-700 mb-6">
            Access industry-certified trainers who deliver hands-on, real-world learning aligned with the latest tech and business needs.
          </p>
          <Link href="/team" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold">
            Meet Our Trainers →
          </Link>
        </div>

        {/* Maintenance & Support */}
        <div className="bg-white border border-[#daabc3] rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#ca5b8e] text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">3</div>
          <h2 className="text-xl font-bold text-[#aa6182] mb-4">Maintenance & Support</h2>
          <p className="text-gray-700 mb-6">
            Keep your labs and tech facilities running smoothly with regular updates, technical support, and expert maintenance from SheBright.
          </p>
          <Link href="/contact" className="text-[#ca5b8e] hover:text-[#cc6594] font-semibold">
            Learn About Maintenance →
          </Link>
        </div>
      </section>

      <section className="bg-[#fef0fc] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#aa6182] mb-4">Ready to Transform Your Institution?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Partner with SheBright for seamless infrastructure, expert trainers, and ongoing support. Let’s build the future of education together.
          </p>
          <Link href="/contact" className="bg-[#ca5b8e] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#cc6594] transition-colors shadow">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}