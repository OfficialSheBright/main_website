export default function ScalableDataSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Scalable Data Systems</h2>
      <p className="text-gray-600">
        Scalable data systems are designed to handle increasing volumes of data, users, and workloads efficiently.  
        They are essential for modern analytics, machine learning, and business applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Scalability?</h3>
        <p className="text-blue-700">
          Scalability ensures your systems can grow with demand, maintain performance, and support business growth without costly redesigns.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Horizontal vs Vertical Scaling</h3>
      <ul>
        <li>Horizontal: Add more machines/nodes to distribute load</li>
        <li>Vertical: Increase resources (CPU, RAM) on existing machines</li>
        <li>Horizontal scaling is preferred for cloud-native architectures</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Distributed Architectures</h3>
      <ul>
        <li>Data and computation spread across multiple servers</li>
        <li>Improves fault tolerance and throughput</li>
        <li>Examples: Hadoop, Spark, Cassandra, Kafka</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Partitioning & Sharding</h3>
      <ul>
        <li>Split data into smaller, manageable segments</li>
        <li>Partitioning: divide tables or datasets by key or range</li>
        <li>Sharding: distribute data across multiple databases or clusters</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Caching & Load Balancing</h3>
      <ul>
        <li>Use caches (Redis, Memcached) to reduce database load</li>
        <li>Load balancers distribute requests for high availability</li>
        <li>Edge caching with CDNs for global performance</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Scaling a web app with Docker Compose
version: '3'
services:
  web:
    image: myapp
    deploy:
      replicas: 4
    ports:
      - "80:80"
# Add more replicas to scale horizontally
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Scalable Data Systems</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Big data analytics platforms</li>
          <li>Real-time streaming and event processing</li>
          <li>Global SaaS and web applications</li>
          <li>Machine learning and AI workloads</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Scalable data systems are essential for modern cloud and data engineering.  
        Master these concepts to build robust, high-performance platforms that grow with your needs.
      </p>
    </div>
  );
}