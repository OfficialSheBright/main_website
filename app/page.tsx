import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-purple-100 to-purple-300 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-20">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-2">
            Empowering Learners & Connecting Companies
          </h1>
          <p className="text-lg text-purple-800">
            EduConnect is a vibrant platform for students and professionals to explore courses, connect with top companies, and grow together.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <Link href="/about" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition text-center">About</Link>
            <Link href="/courses" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition text-center">Courses</Link>
            <Link href="/companies" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition text-center">Companies</Link>
            <Link href="/team" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition text-center">Team</Link>
            <Link href="/faq" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition text-center">FAQ</Link>
            <Link href="/contact" className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-800 transition text-center">Contact</Link>
            <Link href="/login" className="bg-white text-purple-700 border border-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition text-center">Login</Link>
            <Link href="/signup" className="bg-white text-purple-700 border border-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition text-center">Signup</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/hero-img.png"
            alt="Hero"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}