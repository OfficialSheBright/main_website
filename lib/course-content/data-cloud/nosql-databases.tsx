export default function NosqlDatabasesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">NoSQL Databases</h2>
      <p className="text-gray-600">
        NoSQL databases provide flexible, scalable solutions for storing and retrieving large volumes of semi-structured and unstructured data.  
        They are ideal for modern applications requiring high availability, horizontal scaling, and rapid development.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why NoSQL?</h3>
        <p className="text-blue-700">
          NoSQL databases support diverse data models, scale out easily, and handle high-velocity workloads that traditional SQL databases struggle with.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Types of NoSQL Databases</h3>
      <ul>
        <li><strong>Document Stores:</strong> MongoDB, CouchDB (JSON-like documents)</li>
        <li><strong>Key-Value Stores:</strong> Redis, DynamoDB (simple key-value pairs)</li>
        <li><strong>Column Stores:</strong> Cassandra, HBase (wide-column tables)</li>
        <li><strong>Graph Databases:</strong> Neo4j, Amazon Neptune (nodes and relationships)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Schema Flexibility</h3>
      <ul>
        <li>Store data without a fixed schema</li>
        <li>Easily evolve data models as requirements change</li>
        <li>Ideal for agile development and rapid prototyping</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Scalability & Availability</h3>
      <ul>
        <li>Horizontal scaling across distributed clusters</li>
        <li>Replication and sharding for high availability</li>
        <li>Eventual consistency models for performance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Use Cases</h3>
      <ul>
        <li>Real-time analytics and caching</li>
        <li>Content management and personalization</li>
        <li>IoT, social networks, and recommendation engines</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Insert and query in MongoDB (Python)
from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")
db = client["mydb"]
db.users.insert_one({"name": "Alice", "age": 30})
user = db.users.find_one({"name": "Alice"})
print(user)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of NoSQL Databases</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Big data and real-time analytics</li>
          <li>Flexible content and user data storage</li>
          <li>Scalable web and mobile applications</li>
          <li>Graph-based search and recommendation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        NoSQL databases are essential for modern, scalable data platforms.  
        Master these technologies to build flexible, high-performance applications.
      </p>
    </div>
  );
}