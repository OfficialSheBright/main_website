export default function DataStorageSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Data Storage Systems</h2>
      <p className="text-gray-600">
        Data storage systems are the backbone of modern data platforms, enabling reliable, scalable, and secure storage for structured and unstructured data.  
        Choosing the right storage solution is critical for performance, cost, and data management.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data Storage Systems?</h3>
        <p className="text-blue-700">
          Proper storage systems ensure data durability, accessibility, and scalability for analytics, applications, and business operations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. SQL Databases</h3>
      <ul>
        <li>Relational databases (MySQL, PostgreSQL, SQL Server)</li>
        <li>Structured schema, ACID compliance, strong consistency</li>
        <li>Ideal for transactional workloads and complex queries</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. NoSQL Stores</h3>
      <ul>
        <li>Non-relational databases (MongoDB, Cassandra, DynamoDB)</li>
        <li>Flexible schema, horizontal scalability, eventual consistency</li>
        <li>Best for large-scale, high-velocity, and semi-structured data</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Object Storage (S3, GCS, Azure Blob)</h3>
      <ul>
        <li>Store files, images, backups, and big data in scalable buckets</li>
        <li>Highly durable, available, and cost-effective</li>
        <li>Supports lifecycle management, versioning, and access control</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Uploading a file to AWS S3 with CLI
aws s3 cp data.csv s3://my-bucket/data.csv
# Use similar commands for GCS (gsutil) and Azure Blob (az storage)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data Storage Systems</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Transactional applications and analytics</li>
          <li>Big data platforms and data lakes</li>
          <li>Backup, archiving, and disaster recovery</li>
          <li>Machine learning and reporting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Data storage systems are essential for managing and scaling data.  
        Master these technologies to support robust, flexible, and secure data platforms.
      </p>
    </div>
  );
}