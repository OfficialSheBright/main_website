export default function AdvancedApiConceptsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced API Concepts</h2>
      <p className="text-gray-600">
        Advanced API concepts enable you to build high-performance, scalable, and flexible services.  
        Mastering these topics is essential for modern backend and systems engineers.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Advanced API Concepts?</h3>
        <p className="text-blue-700">
          These concepts help you design APIs that support real-time communication, high throughput, and complex integrations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. GraphQL APIs</h3>
      <ul>
        <li>Flexible queries and schema-based design</li>
        <li>Single endpoint for multiple resources</li>
        <li>Efficient data fetching and reduced over-fetching</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. WebSockets (Real-Time APIs)</h3>
      <ul>
        <li>Full-duplex, persistent connections</li>
        <li>Real-time updates for chat, notifications, and live data</li>
        <li>Handling connection lifecycle and scaling</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. gRPC for High-Performance Services</h3>
      <ul>
        <li>Protocol Buffers for efficient serialization</li>
        <li>Strongly-typed contracts and code generation</li>
        <li>Streaming and bi-directional communication</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Microservices Fundamentals</h3>
      <ul>
        <li>Decoupled, independently deployable services</li>
        <li>Service discovery, API gateways, and load balancing</li>
        <li>Inter-service communication patterns (REST, gRPC, messaging)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple GraphQL query
query {
  user(id: "123") {
    name
    email
    posts {
      title
      createdAt
    }
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced API Concepts</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building real-time apps (chat, dashboards, games)</li>
          <li>Designing scalable microservices architectures</li>
          <li>Integrating heterogeneous systems efficiently</li>
          <li>Optimizing API performance and developer experience</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced API concepts are crucial for modern backend development.  
        Master these to deliver robust, scalable, and high-performance services.
      </p>
    </div>
  );
}