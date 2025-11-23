export default function ArchitecturalPatternsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Architectural Patterns</h2>
      <p className="text-gray-600">
        Architectural patterns define proven approaches for designing scalable, resilient, and maintainable systems in the cloud.  
        Understanding these patterns helps you choose the right strategy for your application&apos;s needs.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Architectural Patterns?</h3>
        <p className="text-blue-700">
          Patterns provide reusable solutions to common design challenges, improving reliability, scalability, and agility.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Microservices</h3>
      <ul>
        <li>Decompose applications into small, independent services</li>
        <li>Enable independent deployment and scaling</li>
        <li>Improve fault isolation and maintainability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Event-Driven Architecture</h3>
      <ul>
        <li>Use events to trigger and communicate between services</li>
        <li>Supports real-time processing and decoupling</li>
        <li>Common tools: Kafka, Event Hub, Pub/Sub</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Data Mesh</h3>
      <ul>
        <li>Decentralize data ownership and architecture</li>
        <li>Domain-oriented data products</li>
        <li>Promotes scalability and agility for large organizations</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Multi-Cloud & Hybrid Cloud</h3>
      <ul>
        <li>Distribute workloads across multiple cloud providers or on-premises systems</li>
        <li>Increase resilience, avoid vendor lock-in, optimize costs</li>
        <li>Requires unified monitoring, security, and data integration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Event-driven microservice with Python and Kafka
from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:9092')
producer.send('events', b'{"type": "user_signup", "user_id": 123}')
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Architectural Patterns</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Scalable cloud-native applications</li>
          <li>Real-time analytics platforms</li>
          <li>Enterprise data platforms</li>
          <li>Global, resilient infrastructure</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Architectural patterns are essential for designing modern cloud systems.  
        Master these patterns to build scalable, resilient, and future-proof solutions.
      </p>
    </div>
  );
}