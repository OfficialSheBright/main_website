export default function KafkaStreamingSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Kafka & Streaming Systems</h2>
      <p className="text-gray-600">
        Kafka and streaming systems enable real-time data processing, event-driven architectures, and scalable analytics.  
        Mastering these technologies is essential for building modern, responsive data platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Kafka & Streaming?</h3>
        <p className="text-blue-700">
          Streaming systems process data as it arrives, supporting low-latency analytics, monitoring, and automation.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Kafka Fundamentals</h3>
      <ul>
        <li>Distributed event streaming platform for high-throughput data</li>
        <li>Stores streams of records in topics</li>
        <li>Scalable, fault-tolerant, and durable</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Topics, Partitions, Offsets</h3>
      <ul>
        <li>Topics organize streams of data</li>
        <li>Partitions enable parallelism and scalability</li>
        <li>Offsets track position in the stream for consumers</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Consumer Groups</h3>
      <ul>
        <li>Multiple consumers can read from a topic in parallel</li>
        <li>Each partition is consumed by only one member in a group</li>
        <li>Supports load balancing and fault tolerance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Kafka Streams / ksqlDB</h3>
      <ul>
        <li>Kafka Streams: Java library for building stream processing apps</li>
        <li>ksqlDB: SQL-based stream processing on Kafka topics</li>
        <li>Real-time transformations, aggregations, and joins</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Flink / Storm Overview</h3>
      <ul>
        <li>Apache Flink: Distributed stream and batch processing engine</li>
        <li>Apache Storm: Real-time computation system for processing data streams</li>
        <li>Integrate with Kafka for scalable event-driven pipelines</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Consuming messages from Kafka with Python
from kafka import KafkaConsumer
consumer = KafkaConsumer('my-topic', bootstrap_servers='localhost:9092')
for msg in consumer:
    print(msg.value)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Streaming Systems</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Real-time analytics and monitoring</li>
          <li>Event-driven microservices</li>
          <li>Data integration and ETL pipelines</li>
          <li>Fraud detection and alerting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Kafka and streaming systems are essential for real-time data platforms.  
        Master these technologies to build scalable, responsive, and event-driven solutions.
      </p>
    </div>
  );
}