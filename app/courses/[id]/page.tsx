import { notFound } from "next/navigation";

const courses = {
  "web-dev": {
    title: "Web Development",
    desc: "Master modern web technologies and frameworks.",
    details: "This course covers HTML, CSS, JavaScript, React, and deployment best practices. Suitable for beginners and intermediates.",
  },
  "data-science": {
    title: "Data Science",
    desc: "Dive into data analysis, machine learning, and AI.",
    details: "Learn Python, data visualization, machine learning algorithms, and real-world projects.",
  },
  "cloud": {
    title: "Cloud Computing",
    desc: "Understand cloud platforms and architectures.",
    details: "Get hands-on with AWS, Azure, GCP, and cloud security essentials.",
  },
};

export default function CourseDetail({ params }: { params: { id: string } }) {
  const course = courses[params.id];
  if (!course) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-purple-900 mb-4">{course.title}</h2>
      <p className="text-purple-800 mb-2">{course.desc}</p>
      <p className="text-purple-700">{course.details}</p>
    </section>
  );
}