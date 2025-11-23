export default function LargeScaleSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Large-Scale Systems</h2>
      <p className="text-gray-600">
        Large-scale systems are complex, distributed architectures designed to handle high volumes of data, users, and transactions.  
        Understanding their fundamentals is essential for technical program managers, architects, and product leaders working on mission-critical platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Large-Scale Systems?</h3>
        <p className="text-blue-700">
          Mastering large-scale systems enables you to design, manage, and scale products that are reliable, performant, and secure—even under heavy load.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Distributed Systems Basics</h3>
      <ul>
        <li>Multiple components/services running on different machines</li>
        <li>Communication via APIs, message queues, or event streams</li>
        <li>Challenges: consistency, partition tolerance, latency, and coordination</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Performance Constraints</h3>
      <ul>
        <li>Scalability: horizontal vs vertical scaling</li>
        <li>Throughput, latency, and bottleneck analysis</li>
        <li>Load balancing and caching strategies</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Reliability (SLO/SLI/SLA)</h3>
      <ul>
        <li>Service Level Objectives (SLO), Indicators (SLI), and Agreements (SLA)</li>
        <li>Redundancy, failover, and disaster recovery</li>
        <li>Monitoring, alerting, and incident response</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Security Basics</h3>
      <ul>
        <li>Authentication and authorization for distributed services</li>
        <li>Data encryption in transit and at rest</li>
        <li>Vulnerability management and regular security reviews</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Load balancing architecture (pseudocode)
Client Requests
      |
   [Load Balancer]
   /      |      \\
[App1] [App2] [App3]
      |
   [Database Cluster]
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Large-Scale Systems</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cloud platforms and SaaS products</li>
          <li>Global e-commerce and payment systems</li>
          <li>Social networks and streaming services</li>
          <li>Enterprise and mission-critical applications</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Large-scale systems are the backbone of modern digital products.  
        Master these concepts to design, manage, and scale reliable, high-performance platforms.
      </p>
    </div>
  );
}