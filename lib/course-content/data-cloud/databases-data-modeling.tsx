export default function DatabasesDataModelingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Databases & Data Modeling</h2>
      <p className="text-gray-600">
        Databases and data modeling are fundamental for organizing, storing, and retrieving data efficiently.  
        Good data models enable scalable, reliable, and maintainable systems for analytics and applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data Modeling?</h3>
        <p className="text-blue-700">
          Proper data modeling ensures data integrity, reduces redundancy, and supports complex queries and analytics.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Relational vs NoSQL Databases</h3>
      <ul>
        <li>Relational: Structured schema, ACID compliance, SQL queries</li>
        <li>NoSQL: Flexible schema, horizontal scaling, various data models (document, key-value, graph)</li>
        <li>Choose based on use case: consistency vs scalability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Data Modeling Concepts</h3>
      <ul>
        <li>Entities, attributes, and relationships</li>
        <li>Normalization and denormalization</li>
        <li>Primary keys, foreign keys, indexes</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Schema Design Best Practices</h3>
      <ul>
        <li>Design for query patterns and scalability</li>
        <li>Balance normalization for integrity with denormalization for performance</li>
        <li>Document schema changes and migrations</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. ER Diagrams & Modeling Tools</h3>
      <ul>
        <li>Visualize entities and relationships with ER diagrams</li>
        <li>Use tools: dbdiagram.io, Lucidchart, ER/Studio</li>
        <li>Collaborate on schema design and documentation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`-- Example: Simple table and relationship in SQL
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  amount DECIMAL
);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data Modeling</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing transactional and analytical databases</li>
          <li>Supporting business intelligence and reporting</li>
          <li>Enabling scalable data platforms</li>
          <li>Facilitating data integration and migration</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Databases and data modeling are essential for robust data systems.  
        Master these concepts to design, build, and optimize scalable data architectures.
      </p>
    </div>
  );
}