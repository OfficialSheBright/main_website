export default function HadoopEcosystemContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Hadoop Ecosystem</h2>
      <p className="text-gray-600">
        The Hadoop ecosystem is a suite of open-source tools for distributed storage and processing of big data.  
        It enables scalable analytics, ETL, and data warehousing across clusters of commodity hardware.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Hadoop?</h3>
        <p className="text-blue-700">
          Hadoop provides fault-tolerant, cost-effective storage and processing for massive datasets, powering modern big data platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. HDFS (Hadoop Distributed File System)</h3>
      <ul>
        <li>Distributed, scalable file storage across cluster nodes</li>
        <li>High fault tolerance and throughput</li>
        <li>Stores large files and supports parallel processing</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. YARN (Yet Another Resource Negotiator)</h3>
      <ul>
        <li>Cluster resource management and job scheduling</li>
        <li>Supports multiple processing engines (MapReduce, Spark, etc.)</li>
        <li>Improves scalability and resource utilization</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Hive</h3>
      <ul>
        <li>Data warehouse infrastructure built on Hadoop</li>
        <li>SQL-like query language (HiveQL) for big data analytics</li>
        <li>Integrates with HDFS and other Hadoop components</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. HBase</h3>
      <ul>
        <li>NoSQL database for real-time read/write access to big data</li>
        <li>Column-oriented storage, scalable and distributed</li>
        <li>Ideal for sparse datasets and low-latency applications</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Sqoop</h3>
      <ul>
        <li>Tool for transferring data between Hadoop and relational databases</li>
        <li>Automates import/export of large datasets</li>
        <li>Supports incremental loads and parallel processing</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Importing data from MySQL to HDFS with Sqoop
sqoop import --connect jdbc:mysql://localhost/db --table users --target-dir /hdfs/users
# Query data in Hive
hive -e "SELECT COUNT(*) FROM users;"
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Hadoop Ecosystem</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Big data analytics and ETL</li>
          <li>Data warehousing and reporting</li>
          <li>Real-time and batch processing</li>
          <li>Data integration across platforms</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        The Hadoop ecosystem is essential for scalable big data solutions.  
        Master these tools to store, process, and analyze massive datasets efficiently.
      </p>
    </div>
  );
}