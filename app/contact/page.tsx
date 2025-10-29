export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Contact Us</h2>
      <p className="text-lg text-purple-800 mb-4">
        Have questions or want to collaborate? Reach out to us!
      </p>
      <form className="flex flex-col gap-4 bg-white rounded-xl shadow p-6 border border-purple-100">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition w-fit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}