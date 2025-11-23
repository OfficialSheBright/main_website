export default function CapstoneProjectDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Capstone Project Development</h2>
      <p className="text-gray-600">
        The capstone project is your opportunity to apply everything you've learned in this course to a real-world software engineering challenge.  
        You&apos;ll design, implement, test, and document a complete system, demonstrating your mastery of software engineering principles and best practices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why a Capstone Project?</h3>
        <p className="text-blue-700">
          Capstone projects showcase your ability to solve complex problems, work independently, and deliver production-quality software—key skills for any software engineer.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Project Ideas</h3>
      <ul>
        <li>Desktop password manager</li>
        <li>File synchronization tool</li>
        <li>IoT home automation system</li>
        <li>High-performance C++ networking server</li>
        <li>Rust CLI tools</li>
        <li>Microservice-based API system</li>
        <li>Automation scripts suite</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Project Phases</h3>
      <ul>
        <li><strong>Requirement analysis:</strong> Define goals, features, and constraints</li>
        <li><strong>Design documentation:</strong> Create architecture diagrams, data models, and UI mockups</li>
        <li><strong>Architecture planning:</strong> Choose frameworks, languages, and tools</li>
        <li><strong>Implementation:</strong> Develop the core functionality and features</li>
        <li><strong>Testing:</strong> Write and run unit, integration, and system tests</li>
        <li><strong>Deployment & documentation:</strong> Package your project and write clear usage instructions</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Best Practices</h3>
      <ul>
        <li>Use version control (Git) for all code and documentation</li>
        <li>Follow clean code and design principles (SOLID, DRY, KISS)</li>
        <li>Write clear, maintainable, and well-documented code</li>
        <li>Test thoroughly and automate where possible</li>
        <li>Document your design, decisions, and usage</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Capstone project folder structure
capstone-project/
├── src/
├── tests/
├── docs/
├── README.md
├── .gitignore
└── package.json (or equivalent)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Capstone Project Development</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Demonstrating your skills to employers or clients</li>
          <li>Building a portfolio-ready software project</li>
          <li>Practicing the full software development lifecycle</li>
          <li>Applying best practices in a real-world context</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        The capstone project is the culmination of your software engineering journey.  
        Approach it with creativity, discipline, and attention to detail to produce a project you can be proud of.
      </p>
    </div>
  );
}