const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    bio: "Visionary leader passionate about education and technology.",
    img: "/team1.png",
  },
  {
    name: "Priya Singh",
    role: "Lead Developer",
    bio: "Expert in web development and cloud solutions.",
    img: "/team2.png",
  },
  {
    name: "Rahul Verma",
    role: "Community Manager",
    bio: "Connecting learners and companies for growth.",
    img: "/team3.png",
  },
];

import Image from "next/image";

export default function Team() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8">Meet the Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-purple-100">
            <Image
              src={member.img}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-800">{member.name}</h3>
            <p className="text-purple-700 font-medium mb-2">{member.role}</p>
            <p className="text-purple-600 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}