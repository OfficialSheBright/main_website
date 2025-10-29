export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <span className="font-semibold text-lg">© 2025 EduConnect</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}