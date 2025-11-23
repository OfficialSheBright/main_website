export default function AdvancedGcpContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced GCP</h2>
      <p className="text-gray-600">
        Advanced GCP covers scalable cloud architectures, orchestration, and analytics using Google Cloud Platform.  
        Mastering these services enables robust, automated, and observable cloud solutions for enterprise workloads.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced GCP?</h3>
        <p className="text-blue-700">
          Advanced GCP skills help you build resilient, scalable, and cost-effective cloud applications for real-world business needs.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Dataflow</h3>
      <ul>
        <li>Managed service for stream and batch data processing</li>
        <li>Build ETL pipelines with Apache Beam</li>
        <li>Integrate with BigQuery, Pub/Sub, and Cloud Storage</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Dataproc</h3>
      <ul>
        <li>Managed Spark and Hadoop clusters for big data workloads</li>
        <li>Automate cluster creation, scaling, and termination</li>
        <li>Run distributed data processing jobs efficiently</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Vertex AI</h3>
      <ul>
        <li>Unified platform for building, deploying, and scaling ML models</li>
        <li>Automate training, hyperparameter tuning, and model deployment</li>
        <li>Monitor and manage models in production</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Spanner</h3>
      <ul>
        <li>Globally distributed, strongly consistent SQL database</li>
        <li>Scale horizontally with high availability</li>
        <li>Ideal for mission-critical applications</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Submitting a Dataflow job with gcloud (terminal)
gcloud dataflow jobs run my-job --gcs-location gs://my-bucket/templates/my-template
# Monitor job status in GCP Console
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced GCP</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enterprise cloud architecture</li>
          <li>Automated infrastructure provisioning</li>
          <li>Big data analytics and streaming</li>
          <li>Machine learning model deployment</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced GCP services empower you to build, automate, and monitor scalable cloud solutions.  
        Master these tools to deliver production-grade cloud applications and analytics.
      </p>
    </div>
  );
}