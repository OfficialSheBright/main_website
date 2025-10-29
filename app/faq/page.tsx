const faqs = [
  {
    question: "What is EduConnect?",
    answer: "EduConnect is a platform that connects learners with top courses and leading companies, fostering growth and collaboration.",
  },
  {
    question: "How do I enroll in a course?",
    answer: "Visit the Courses page, select your desired course, and follow the instructions to enroll.",
  },
  {
    question: "Can companies post job opportunities?",
    answer: "Yes, companies can showcase opportunities and connect with talented learners through our platform.",
  },
  {
    question: "Is EduConnect free to use?",
    answer: "Yes, exploring courses and companies is free. Some advanced features may require registration.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">{faq.question}</h3>
            <p className="text-purple-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}