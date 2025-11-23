export default function DataEngineeringFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Data Engineering Fundamentals</h2>
      <p className="text-gray-600">
        Data engineering fundamentals cover the core concepts and architectures for building scalable, reliable, and efficient data systems.  
        Mastering these basics is essential for designing modern data pipelines and platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data Engineering?</h3>
        <p className="text-blue-700">
          Data engineering enables organizations to collect, process, and deliver data for analytics, machine learning, and business intelligence.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Data Lakes vs Data Warehouses</h3>
      <ul>
        <li>Data lakes store raw, unstructured, and structured data at scale</li>
        <li>Data warehouses store cleaned, structured data for analytics</li>
        <li>Choose based on use case: flexibility vs performance</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Batch vs Streaming Pipelines</h3>
      <ul>
        <li>Batch pipelines process data in large chunks at scheduled intervals</li>
        <li>Streaming pipelines process data in real time as it arrives</li>
        <li>Tools: Apache Spark, Kafka, Flink, Airflow</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Data Ingestion Patterns</h3>
      <ul>
        <li>Collect data from sources: databases, APIs, files, streams</li>
        <li>Patterns: batch ingestion, change data capture (CDC), real-time streaming</li>
        <li>Ensure reliability, scalability, and fault tolerance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Orchestration Basics</h3>
      <ul>
        <li>Automate and schedule data workflows</li>
        <li>Monitor, retry, and manage dependencies</li>
        <li>Tools: Apache Airflow, Prefect, Luigi</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple Airflow DAG for batch pipeline
from airflow import DAG
from airflow.operators.bash import BashOperator
from datetime import datetime

with DAG("batch_pipeline", start_date=datetime(2023, 1, 1), schedule_interval="@daily") as dag:
    extract = BashOperator(task_id="extract", bash_command="python extract.py")
    transform = BashOperator(task_id="transform", bash_command="python transform.py")
    load = BashOperator(task_id="load", bash_command="python load.py")
    extract >> transform >> load
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data Engineering Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building scalable data pipelines</li>
          <li>Supporting analytics and machine learning</li>
          <li>Data integration and transformation</li>
          <li>Automating data workflows</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Data engineering fundamentals are the backbone of modern data platforms.  
        Master these concepts to design, build, and operate robust data systems.
      </p>
    </div>
  );
}