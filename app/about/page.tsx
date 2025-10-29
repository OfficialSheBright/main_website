export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">About EduConnect</h2>
      <p className="text-lg text-purple-800 mb-4">
        EduConnect is dedicated to bridging the gap between learners and industry leaders. Our mission is to empower students and professionals by providing access to top courses, connecting them with leading companies, and fostering a collaborative community.
      </p>
      <ul className="list-disc pl-6 text-purple-700 space-y-2">
        <li>Curated courses for every skill level</li>
        <li>Direct connections to hiring companies</li>
        <li>Supportive community and mentorship</li>
        <li>Events, workshops, and networking opportunities</li>
      </ul>
    </section>
  );
}