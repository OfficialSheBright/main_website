import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Somya Sharma",
    role: "Founder & CEO",
    emoji: "👩‍💼",
    bio: "A visionary entrepreneur and passionate advocate for women in technology, Somya leads SheBright with a mission to bridge the gap between education and industry. With her background in community building and strategic partnerships, she has built SheBright into a fast-growing EduTech platform driving skill development and innovation across India's emerging regions.",
    img: "/Founder.jpeg",
  },
  {
    name: "Laxmi Prajapati",
    role: "Co-Founder",
    emoji: "👩‍💻",
    bio: "Laxmi brings operational excellence and a deep understanding of educational ecosystems to SheBright. She ensures seamless execution of programs and partnerships, empowering institutions and students alike to embrace modern learning through innovation, mentorship, and hands-on experience.",
    img: "/CoFounder.jpeg",
  },
  {
    name: "Ghanshyam Singh",
    role: "Developer",
    emoji: "💻",
    bio: "As SheBright's tech backbone, Ghanshyam is responsible for building and maintaining the company's digital infrastructure. With expertise in modern development frameworks, he transforms ideas into scalable solutions, powering SheBright's online learning platforms and digital community tools.",
    img: "/team3.jpg",
  },
  // {
  //   name: "Lakshya",
  //   role: "Community Manager",
  //   emoji: "🌐",
  //   bio: "Lakshya connects vision with people. He drives SheBright's growing network of students, mentors, and partners, ensuring every member experiences growth, collaboration, and support. His leadership in community engagement fuels the heart of SheBright's mission — empowering through connection.",
  //   img: "/team4.png",
  // },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fef0fc] to-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#aa6182] mb-6">Our Team</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Meet the innovators shaping SheBright&#39;s mission to empower Tier-II & Tier-III India through education, technology, and community.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white border border-[#daabc3] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-2xl border-4 border-[#ca5b8e] shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-3xl">{member.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-[#aa6182]">{member.name}</h3>
                      <p className="text-[#ca5b8e] font-semibold text-lg">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="bg-gradient-to-r from-[#ca5b8e] to-[#cc6594] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-4xl">💫</span>
            <h2 className="text-4xl font-bold">Join Our Team</h2>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Do you share our vision of empowering education and technology in Tier-II & Tier-III India? 
            We&#39;re always looking for passionate innovators, mentors, and builders to join our journey.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[#ca5b8e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#fef0fc] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#aa6182] text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                🎯
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Innovation</h3>
              <p className="text-gray-700">
                We constantly innovate to bridge the gap between traditional education and modern industry needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                🤝
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of partnerships to create meaningful impact in education and community development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                🌟
              </div>
              <h3 className="text-xl font-bold text-[#aa6182] mb-3">Empowerment</h3>
              <p className="text-gray-700">
                Our mission is to empower individuals and institutions with the tools and knowledge they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}