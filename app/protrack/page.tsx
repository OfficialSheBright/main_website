import Link from "next/link";

const courses = [
  { id: "web-dev", title: "Web Development", desc: "Learn HTML, CSS, JS, React & more." },
  { id: "data-science", title: "Data Science", desc: "Python, ML, AI, and analytics." },
  { id: "cloud", title: "Cloud Computing", desc: "AWS, Azure, GCP fundamentals." },
];

export default function Courses() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8">Courses</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border border-purple-100">
            <h3 className="text-xl font-semibold text-purple-800">{course.title}</h3>
            <p className="text-purple-700">{course.desc}</p>
            <Link href={`/courses/${course.id}`} className="mt-2 bg-purple-700 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-800 transition w-fit">
              Explore Course
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}