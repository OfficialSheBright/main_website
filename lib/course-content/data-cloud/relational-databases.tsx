export default function RelationalDatabasesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Relational Databases</h2>
      <p className="text-gray-600">
        Relational databases organize data into structured tables with defined relationships.  
        They are widely used for transactional systems, analytics, and business applications due to their reliability and consistency.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Relational Databases?</h3>
        <p className="text-blue-700">
          Relational databases ensure data integrity, support complex queries, and provide strong consistency through ACID properties.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Table Structure & Schema</h3>
      <ul>
        <li>Data stored in rows and columns (tables)</li>
        <li>Schema defines table structure, data types, and constraints</li>
        <li>Primary keys uniquely identify records</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Relationships</h3>
      <ul>
        <li>Foreign keys link tables and enforce referential integrity</li>
        <li>Types: one-to-one, one-to-many, many-to-many</li>
        <li>Joins combine data across tables for queries</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. SQL (Structured Query Language)</h3>
      <ul>
        <li>Standard language for querying and manipulating relational data</li>
        <li>Supports SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, etc.</li>
        <li>Widely used in MySQL, PostgreSQL, SQL Server, Oracle</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. ACID Properties</h3>
      <ul>
        <li>Atomicity, Consistency, Isolation, Durability</li>
        <li>Guarantee reliable transactions and data integrity</li>
        <li>Critical for financial, healthcare, and enterprise systems</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`-- Example: Creating tables and relationships in PostgreSQL
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  amount DECIMAL
);

-- Query: Get all orders for a customer
SELECT customers.name, orders.amount
FROM customers
JOIN orders ON customers.id = orders.customer_id;
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Relational Databases</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Transactional business systems</li>
          <li>Analytics and reporting platforms</li>
          <li>Data warehousing</li>
          <li>Enterprise resource planning (ERP)</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Relational databases are essential for structured, reliable data management.  
        Master these concepts to design, query, and optimize robust data systems.
      </p>
    </div>
  );
}