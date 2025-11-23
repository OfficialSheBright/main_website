export default function ApacheSparkContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Apache Spark</h2>
      <p className="text-gray-600">
        Apache Spark is a powerful open-source engine for distributed data processing and analytics.  
        It supports large-scale batch and streaming workloads, making it a core tool for modern data engineering.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Apache Spark?</h3>
        <p className="text-blue-700">
          Spark enables fast, scalable data processing across clusters, supporting ETL, machine learning, and real-time analytics.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. RDDs (Resilient Distributed Datasets)</h3>
      <ul>
        <li>Core abstraction for distributed data in Spark</li>
        <li>Immutable, fault-tolerant collections partitioned across nodes</li>
        <li>Support transformations (map, filter) and actions (collect, count)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. DataFrames</h3>
      <ul>
        <li>High-level API for structured data processing</li>
        <li>Optimized execution via Catalyst query engine</li>
        <li>Supports SQL queries and complex analytics</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Spark SQL</h3>
      <ul>
        <li>Module for querying structured data using SQL syntax</li>
        <li>Integrates with Hive, JDBC, and external data sources</li>
        <li>Enables interactive analytics and reporting</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Spark Streaming</h3>
      <ul>
        <li>Real-time processing of data streams (Kafka, Flume, sockets)</li>
        <li>Windowed computations and stateful processing</li>
        <li>Scalable for high-throughput event analytics</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Writing Distributed Pipelines</h3>
      <ul>
        <li>Build ETL and ML pipelines using Spark APIs</li>
        <li>Parallelize data transformations and aggregations</li>
        <li>Integrate with Hadoop, cloud storage, and databases</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Spark DataFrame operations in Python
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("example").getOrCreate()
df = spark.read.csv("data.csv", header=True, inferSchema=True)
df.groupBy("category").count().show()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Apache Spark</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Big data ETL pipelines</li>
          <li>Real-time analytics and monitoring</li>
          <li>Machine learning at scale</li>
          <li>Data warehousing and reporting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Apache Spark is essential for scalable data engineering and analytics.  
        Master Spark to process, analyze, and transform large datasets efficiently.
      </p>
    </div>
  );
}