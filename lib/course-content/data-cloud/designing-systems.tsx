export default function DesigningSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Designing Systems</h2>
      <p className="text-gray-600">
        Designing cloud systems involves architecting scalable, resilient, and globally distributed solutions.  
        Applying best practices ensures performance, reliability, and cost efficiency for modern applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why System Design?</h3>
        <p className="text-blue-700">
          Good system design enables applications to scale, recover from failures, and deliver consistent user experiences worldwide.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Load Balancing Designs</h3>
      <ul>
        <li>Distribute traffic across multiple servers or regions</li>
        <li>Types: Layer 4 (TCP/UDP), Layer 7 (HTTP/HTTPS)</li>
        <li>Improve availability, scalability, and fault tolerance</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Distributed Systems</h3>
      <ul>
        <li>Coordinate resources and data across multiple nodes</li>
        <li>Handle failures, latency, and consistency challenges</li>
        <li>Use consensus algorithms and partitioning strategies</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Caching Layers</h3>
      <ul>
        <li>Reduce latency and load on backend systems</li>
        <li>In-memory caches: Redis, Memcached</li>
        <li>Edge caching with CDNs for global performance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Global Distribution</h3>
      <ul>
        <li>Deploy applications and data across multiple regions</li>
        <li>Use replication, failover, and geo-routing</li>
        <li>Ensure compliance and low-latency access for global users</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Setting up a Redis cache (Linux)
sudo apt update
sudo apt install redis-server
redis-cli set key "value"
redis-cli get key
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of System Design</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Scalable web and mobile applications</li>
          <li>Global SaaS platforms</li>
          <li>Real-time analytics and streaming</li>
          <li>Disaster recovery and business continuity</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Designing systems is essential for robust cloud solutions.  
        Master these concepts to architect scalable, resilient, and high-performance applications.
      </p>
    </div>
  );
}