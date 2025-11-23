export default function SoftwareArchitectureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Software Architecture</h2>
      <p className="text-gray-600">
        Software architecture defines the high-level structure of a software system, guiding its organization, scalability, and maintainability.  
        Mastering architectural principles is essential for building robust, flexible, and long-lasting applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Software Architecture?</h3>
        <p className="text-blue-700">
          Good architecture enables teams to manage complexity, adapt to change, and deliver reliable software at scale.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Monolithic vs Microservices</h3>
      <ul>
        <li><strong>Monolithic:</strong> Single, unified codebase; simple to deploy but harder to scale and maintain as it grows</li>
        <li><strong>Microservices:</strong> Decompose systems into independent services; enables scalability, flexibility, and independent deployments</li>
        <li>Choose based on team size, project complexity, and scaling needs</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Layered Architecture</h3>
      <ul>
        <li>Organize code into layers: presentation, business logic, data access, etc.</li>
        <li>Improves separation of concerns and testability</li>
        <li>Common in enterprise and web applications</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Event-Driven & Message Queues</h3>
      <ul>
        <li>Use events and message queues (e.g., RabbitMQ, Kafka) for decoupled communication</li>
        <li>Enables scalability, fault tolerance, and asynchronous processing</li>
        <li>Ideal for distributed and real-time systems</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Domain-Driven Design (DDD)</h3>
      <ul>
        <li>Model software based on real-world domains and business logic</li>
        <li>Emphasizes clear boundaries (bounded contexts) and ubiquitous language</li>
        <li>Improves code clarity and maintainability</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Architectural Patterns</h3>
      <ul>
        <li>MVC (Model-View-Controller), MVVM, CQRS, Hexagonal/Ports & Adapters</li>
        <li>Choose patterns based on project requirements and team expertise</li>
        <li>Patterns help solve recurring design problems efficiently</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple layered architecture (Node.js)
app.get('/users', async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});
// userService handles business logic, data access is separated
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Software Architecture</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing scalable web and enterprise systems</li>
          <li>Building maintainable and testable codebases</li>
          <li>Enabling team collaboration and parallel development</li>
          <li>Supporting future growth and technology changes</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Software architecture is the foundation of successful software projects.  
        Master these concepts to design systems that are robust, scalable, and adaptable to change.
      </p>
    </div>
  );
}