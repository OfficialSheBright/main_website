export default function BackendFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Backend Frameworks</h2>
      <p className="text-gray-600">
        Backend frameworks provide the foundation for building robust, scalable, and maintainable server-side applications.  
        Mastering these frameworks is essential for modern API and systems development.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Backend Frameworks?</h3>
        <p className="text-blue-700">
          Frameworks accelerate development, enforce best practices, and offer built-in solutions for routing, security, and data management.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Node.js (Express / Fastify)</h3>
      <ul>
        <li>JavaScript runtime for building fast, scalable APIs</li>
        <li>Express: minimal, flexible, middleware-based</li>
        <li>Fastify: high performance, schema-based validation</li>
        <li>Routing, controllers, and middleware patterns</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Python (Flask / Django)</h3>
      <ul>
        <li>Flask: lightweight, micro-framework, easy to extend</li>
        <li>Django: batteries-included, ORM, admin, authentication</li>
        <li>Request/response cycle and middleware</li>
        <li>Background tasks with Celery</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Go Lang APIs (Optional)</h3>
      <ul>
        <li>Fast API creation with strong typing</li>
        <li>goroutines for concurrency</li>
        <li>Popular frameworks: Fiber, Gin</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Common Patterns</h3>
      <ul>
        <li>Routing and controllers</li>
        <li>Authentication with JWT</li>
        <li>Error handling and validation</li>
        <li>ORMs for database access (Django ORM, SQLAlchemy)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Express.js route
app.post('/api/login', (req, res) => {
  // Authenticate user and return JWT
  res.json({ token: "..." });
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Backend Frameworks</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building RESTful and real-time APIs</li>
          <li>Managing authentication and authorization</li>
          <li>Integrating with databases and background tasks</li>
          <li>Scaling applications for production workloads</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Backend frameworks are essential for efficient, secure, and scalable server-side development.  
        Master these tools to build modern APIs and backend systems.
      </p>
    </div>
  );
}