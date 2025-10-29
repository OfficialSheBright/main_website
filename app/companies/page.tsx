import Link from "next/link";

const companies = [
  { id: "microsoft", name: "Microsoft", desc: "Leading technology company, empowering innovation." },
  { id: "google", name: "Google", desc: "Global leader in search, cloud, and AI." },
  { id: "amazon", name: "Amazon", desc: "E-commerce and cloud computing giant." },
];

export default function Companies() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8">Companies</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {companies.map(company => (
          <div key={company.id} className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border border-purple-100">
            <h3 className="text-xl font-semibold text-purple-800">{company.name}</h3>
            <p className="text-purple-700">{company.desc}</p>
            <Link href={`/companies/${company.id}`} className="mt-2 bg-purple-700 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-800 transition w-fit">
              Explore Company
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}