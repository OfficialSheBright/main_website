export default function TechnicalArchitectureBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Technical Architecture Basics</h2>
      <p className="text-gray-600">
        Technical architecture basics provide a foundation for understanding how modern systems are designed, built, and maintained.  
        Mastering these concepts helps product managers, technical program managers, and business analysts communicate effectively with engineering teams and make informed decisions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Technical Architecture?</h3>
        <p className="text-blue-700">
          Understanding architecture enables you to evaluate solutions, identify risks, and ensure scalability, reliability, and maintainability in your products.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. System Design Fundamentals</h3>
      <ul>
        <li>Components: frontend, backend, databases, APIs, services</li>
        <li>Client-server and microservices architectures</li>
        <li>Separation of concerns and modular design</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. APIs (Application Programming Interfaces)</h3>
      <ul>
        <li>Enable communication between different systems and services</li>
        <li>REST, GraphQL, and SOAP as common API styles</li>
        <li>Authentication, versioning, and documentation best practices</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Cloud Basics</h3>
      <ul>
        <li>On-demand, scalable infrastructure (AWS, Azure, GCP)</li>
        <li>Key concepts: IaaS, PaaS, SaaS</li>
        <li>Benefits: scalability, reliability, cost efficiency</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Databases</h3>
      <ul>
        <li>Relational (SQL) vs. non-relational (NoSQL) databases</li>
        <li>Choosing the right database for your use case</li>
        <li>Basic concepts: tables, indexes, queries, transactions</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple REST API endpoint (Node.js/Express)
app.get('/api/products', (req, res) => {
  // Fetch products from database
  res.json(products);
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Technical Architecture Basics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Communicating requirements with engineering teams</li>
          <li>Evaluating solution designs and trade-offs</li>
          <li>Supporting scalable and maintainable product development</li>
          <li>Understanding integration and data flow in complex systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Technical architecture basics are essential for anyone involved in building or managing technology products.  
        Master these concepts to bridge the gap between business and engineering, and deliver robust, scalable solutions.
      </p>
    </div>
  );
}