export default function DataPipelinesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Data Pipelines</h2>
      <p className="text-gray-600">
        Data pipelines automate the movement, transformation, and integration of data across systems.  
        They are essential for scalable analytics, machine learning, and business intelligence workflows.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data Pipelines?</h3>
        <p className="text-blue-700">
          Data pipelines ensure reliable, repeatable, and efficient data flow from source to destination, supporting real-time and batch processing.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Apache Airflow</h3>
      <ul>
        <li>Open-source workflow orchestration platform</li>
        <li>Define, schedule, and monitor complex data workflows (DAGs)</li>
        <li>Integrate with cloud, databases, and APIs</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Apache NiFi</h3>
      <ul>
        <li>Visual data flow automation tool</li>
        <li>Drag-and-drop interface for building pipelines</li>
        <li>Supports real-time streaming and batch processing</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Prefect</h3>
      <ul>
        <li>Modern workflow orchestration for Python data pipelines</li>
        <li>Declarative API for building, scheduling, and monitoring flows</li>
        <li>Cloud and on-premises deployment options</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple Prefect pipeline in Python
from prefect import flow, task

@task
def extract():
    return [1, 2, 3]

@task
def transform(data):
    return [x * 2 for x in data]

@task
def load(data):
    print(data)

@flow
def etl():
    data = extract()
    transformed = transform(data)
    load(transformed)

etl()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data Pipelines</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>ETL/ELT workflows for analytics</li>
          <li>Real-time data streaming</li>
          <li>Machine learning model deployment</li>
          <li>Data integration across platforms</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Data pipelines are the backbone of modern data engineering.  
        Master pipeline tools and patterns to automate, scale, and optimize data workflows.
      </p>
    </div>
  );
}