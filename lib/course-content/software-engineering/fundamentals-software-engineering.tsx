export default function FundamentalsSoftwareEngineeringContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Fundamentals of Software Engineering</h2>
      <p className="text-gray-600">
        Software engineering is the discipline of designing, building, and maintaining reliable software systems.  
        Mastering the fundamentals is essential for every aspiring developer and engineer.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Software Engineering Fundamentals?</h3>
        <p className="text-blue-700">
          Understanding the basics ensures you can build scalable, maintainable, and high-quality software that meets user needs and business goals.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. What is Software Engineering?</h3>
      <ul>
        <li>Application of engineering principles to software development</li>
        <li>Focus on process, quality, and maintainability</li>
        <li>Collaboration between teams and stakeholders</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. SDLC Models (Agile, Waterfall, Spiral, DevOps)</h3>
      <ul>
        <li><strong>Agile:</strong> Iterative, adaptive, and collaborative approach</li>
        <li><strong>Waterfall:</strong> Linear, sequential phases (requirements, design, implementation, testing, deployment)</li>
        <li><strong>Spiral:</strong> Combines iterative development with risk analysis</li>
        <li><strong>DevOps:</strong> Integrates development and operations for continuous delivery</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Requirements Gathering & Analysis</h3>
      <ul>
        <li>Identify user needs and system constraints</li>
        <li>Document functional and non-functional requirements</li>
        <li>Use interviews, surveys, and workshops for discovery</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. UML Diagrams</h3>
      <ul>
        <li>Use case diagrams: capture system interactions</li>
        <li>Class diagrams: show system structure and relationships</li>
        <li>Sequence diagrams: model object interactions over time</li>
        <li>Activity diagrams: represent workflows and processes</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Version Control (Git, GitHub, GitLab, Bitbucket)</h3>
      <ul>
        <li>Track changes to code and collaborate with teams</li>
        <li>Popular tools: Git, GitHub, GitLab, Bitbucket</li>
        <li>Branching, merging, and pull requests for workflow management</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Basic Git workflow
git clone <repo-url>
git checkout -b feature/my-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/my-feature
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Software Engineering Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building scalable and maintainable software</li>
          <li>Collaborating effectively in teams</li>
          <li>Managing software projects from idea to deployment</li>
          <li>Ensuring software quality and user satisfaction</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Software engineering fundamentals are the foundation of every successful project.  
        Master these concepts to build robust, high-quality software systems.
      </p>
    </div>
  );
}