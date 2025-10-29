import { notFound } from "next/navigation";

const companies = {
  microsoft: {
    name: "Microsoft",
    desc: "Empowering every person and organization on the planet to achieve more.",
    details: "Microsoft offers opportunities in software engineering, cloud computing, AI, and more. Join a global leader in technology and innovation.",
  },
  google: {
    name: "Google",
    desc: "Organizing the world’s information and making it universally accessible and useful.",
    details: "Google provides roles in search, cloud, AI, and product development. Be part of a company shaping the future.",
  },
  amazon: {
    name: "Amazon",
    desc: "Customer-centric company revolutionizing e-commerce and cloud services.",
    details: "Amazon offers careers in operations, cloud, logistics, and software development. Innovate at scale.",
  },
};

export default function CompanyDetail({ params }: { params: { id: string } }) {
  const company = companies[params.id];
  if (!company) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-purple-900 mb-4">{company.name}</h2>
      <p className="text-purple-800 mb-2">{company.desc}</p>
      <p className="text-purple-700">{company.details}</p>
    </section>
  );
}