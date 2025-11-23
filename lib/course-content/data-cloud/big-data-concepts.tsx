export default function BigDataConceptsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Big Data Concepts</h2>
      <p className="text-gray-600">
        Big data concepts form the foundation for scalable data processing and analytics.  
        Understanding these principles is essential for building distributed systems that handle massive datasets efficiently.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Big Data?</h3>
        <p className="text-blue-700">
          Big data enables organizations to extract insights, drive innovation, and make data-driven decisions at scale.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Distributed Computing</h3>
      <ul>
        <li>Process data across multiple machines for scalability and fault tolerance</li>
        <li>Key frameworks: Hadoop, Spark, Flink</li>
        <li>Challenges: data consistency, network latency, resource management</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. CAP Theorem</h3>
      <ul>
        <li>Consistency, Availability, Partition Tolerance—choose two in distributed systems</li>
        <li>Trade-offs impact system design and reliability</li>
        <li>Examples: CP (MongoDB), AP (Cassandra)</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. MapReduce Paradigm</h3>
      <ul>
        <li>Programming model for processing large datasets in parallel</li>
        <li>Map step: transform and filter data</li>
        <li>Reduce step: aggregate results</li>
        <li>Used in Hadoop and other big data frameworks</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple MapReduce in Python
data = [1, 2, 3, 4, 5]
mapped = map(lambda x: x * x, data)  # Map step
result = sum(mapped)                 # Reduce step
print(result)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Big Data Concepts</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Large-scale data analytics</li>
          <li>Real-time data processing</li>
          <li>Machine learning pipelines</li>
          <li>Business intelligence and reporting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Big data concepts are essential for designing and operating scalable data systems.  
        Master these principles to unlock the power of distributed analytics and processing.
      </p>
    </div>
  );
}