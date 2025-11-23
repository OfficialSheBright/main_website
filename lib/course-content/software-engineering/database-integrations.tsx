export default function DatabaseIntegrationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Database Integrations</h2>
      <p className="text-gray-600">
        Database integration is a core skill for backend and full-stack engineers.  
        It enables applications to store, retrieve, and manage data efficiently using SQL and NoSQL databases.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Database Integrations?</h3>
        <p className="text-blue-700">
          Integrating with databases allows your applications to persist data, support transactions, and scale to handle real-world workloads.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. SQL Databases (MySQL/Postgres)</h3>
      <ul>
        <li>Relational model with tables, rows, and columns</li>
        <li>Structured Query Language (SQL) for data manipulation</li>
        <li>Transactions, joins, indexing, and ACID compliance</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. NoSQL Databases (MongoDB, Redis)</h3>
      <ul>
        <li>Flexible schemas for unstructured or semi-structured data</li>
        <li>Document (MongoDB), key-value (Redis), and other models</li>
        <li>High performance, scalability, and caching use cases</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Indexing & Queries</h3>
      <ul>
        <li>Indexes speed up data retrieval for large datasets</li>
        <li>Write efficient queries to minimize resource usage</li>
        <li>Understand query optimization and explain plans</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Caching Layers</h3>
      <ul>
        <li>Use in-memory stores (like Redis) to cache frequent queries</li>
        <li>Reduce database load and improve response times</li>
        <li>Implement cache invalidation strategies</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple SQL query (Node.js with PostgreSQL)
const { Client } = require('pg');
const client = new Client();
await client.connect();
const res = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
await client.end();
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Database Integrations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building CRUD APIs and data-driven applications</li>
          <li>Implementing authentication and user management</li>
          <li>Scaling systems with caching and optimized queries</li>
          <li>Supporting analytics and reporting features</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Database integrations are essential for robust, scalable applications.  
        Master these concepts to build reliable, high-performance backend systems.
      </p>
    </div>
  );
}