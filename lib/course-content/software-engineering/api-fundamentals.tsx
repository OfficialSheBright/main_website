export default function ApiFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">API Fundamentals</h2>
      <p className="text-gray-600">
        API fundamentals are the building blocks for modern software integration.  
        Understanding these concepts is essential for backend, frontend, and full-stack engineers.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn API Fundamentals?</h3>
        <p className="text-blue-700">
          APIs enable communication between systems, power web and mobile apps, and are critical for scalable, maintainable software.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. REST Architecture</h3>
      <ul>
        <li>Stateless, resource-oriented design</li>
        <li>Standard HTTP methods (GET, POST, PUT, DELETE)</li>
        <li>Clear, predictable URLs and responses</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. HTTP Verbs & Status Codes</h3>
      <ul>
        <li>GET (retrieve), POST (create), PUT/PATCH (update), DELETE (remove)</li>
        <li>Common status codes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)</li>
        <li>Use status codes to communicate API results</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Data Formats: JSON, XML, Protobuf</h3>
      <ul>
        <li>JSON: lightweight, human-readable, widely used</li>
        <li>XML: verbose, supports complex structures, legacy systems</li>
        <li>Protobuf: compact, fast, used in high-performance APIs</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. API Design Guidelines</h3>
      <ul>
        <li>Consistent naming and versioning</li>
        <li>Clear documentation (OpenAPI/Swagger)</li>
        <li>Secure, predictable, and easy to use</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Versioning</h3>
      <ul>
        <li>Use versioning to manage breaking changes</li>
        <li>Common approaches: URI versioning (e.g., /v1/), header versioning</li>
        <li>Communicate deprecation and migration paths</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple REST API endpoint (Express.js)
app.get('/api/v1/products', (req, res) => {
  res.json([{ id: 1, name: "Laptop" }]);
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of API Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building web and mobile backends</li>
          <li>Integrating third-party services</li>
          <li>Designing scalable microservices</li>
          <li>Automating workflows and data exchange</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        API fundamentals are essential for modern software engineering.  
        Master these concepts to build robust, maintainable, and scalable systems.
      </p>
    </div>
  );
}