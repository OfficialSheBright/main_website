export default function GcpCoreServicesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">GCP Core Services</h2>
      <p className="text-gray-600">
        GCP Core Services provide the foundation for building scalable, secure, and flexible cloud solutions on Google Cloud Platform.  
        Mastering these services is essential for cloud engineers, architects, and developers.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why GCP Core Services?</h3>
        <p className="text-blue-700">
          Core GCP services enable compute, storage, database, and messaging for a wide range of cloud applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Compute Engine</h3>
      <ul>
        <li>Scalable virtual machines for running applications</li>
        <li>Flexible machine types and pricing models</li>
        <li>Supports auto-scaling and load balancing</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Cloud Storage</h3>
      <ul>
        <li>Object storage for files, backups, and data lakes</li>
        <li>Highly durable and available</li>
        <li>Supports lifecycle management and versioning</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. BigQuery</h3>
      <ul>
        <li>Serverless, highly scalable data warehouse</li>
        <li>Run fast SQL queries on large datasets</li>
        <li>Integrates with analytics and visualization tools</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Cloud Functions</h3>
      <ul>
        <li>Serverless compute for event-driven applications</li>
        <li>Automatic scaling and pay-per-use pricing</li>
        <li>Integrates with Pub/Sub, Cloud Storage, and more</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Pub/Sub</h3>
      <ul>
        <li>Managed messaging service for event-driven architectures</li>
        <li>Supports real-time data streaming and decoupling of services</li>
        <li>Integrates with Dataflow, Cloud Functions, and BigQuery</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Creating a VM with gcloud CLI
gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-medium
# Monitor VM status in GCP Console
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of GCP Core Services</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Web and mobile application hosting</li>
          <li>Data storage and analytics</li>
          <li>Serverless and event-driven architectures</li>
          <li>Real-time messaging and integration</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        GCP Core Services are the building blocks of cloud infrastructure.  
        Master these services to design, deploy, and manage scalable cloud solutions.
      </p>
    </div>
  );
}