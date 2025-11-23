export default function MonitoringScalingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Monitoring & Scaling</h2>
      <p className="text-gray-600">
        Monitoring and scaling are critical for maintaining reliable, high-performance machine learning systems in production.  
        These practices help detect issues, manage resources, and ensure models serve predictions efficiently at scale.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Monitor & Scale?</h3>
        <p className="text-blue-700">
          Continuous monitoring detects data drift, model degradation, and system failures.  
          Scaling ensures your ML services can handle increased demand and large datasets.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Monitoring Drift</h3>
      <p>
        Track changes in data distribution and model performance over time to prevent unexpected drops in accuracy.
      </p>
      <ul>
        <li>Data drift detection</li>
        <li>Model drift detection</li>
        <li>Automated alerts for anomalies</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Logging & Alerts</h3>
      <p>
        Implement robust logging and alerting to capture errors, latency issues, and prediction anomalies.
      </p>
      <ul>
        <li>Centralized log management (ELK stack, Prometheus)</li>
        <li>Custom alerts for critical events</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Scaling on Cloud Platforms</h3>
      <p>
        Use cloud infrastructure to scale ML workloads dynamically based on demand.
      </p>
      <ul>
        <li>AWS SageMaker, GCP AI Platform, Azure ML</li>
        <li>Auto-scaling and load balancing</li>
        <li>Distributed training and inference</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Serving Frameworks</h3>
      <p>
        Deploy models using specialized serving frameworks for reliability and scalability.
      </p>
      <ul>
        <li>TensorFlow Serving</li>
        <li>TorchServe</li>
        <li>FastAPI for custom endpoints</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Setting up a Prometheus alert for high latency
- alert: HighLatency
  expr: request_latency_seconds > 1
  for: 5m
  labels:
    severity: critical
  annotations:
    summary: "High request latency detected"
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Monitoring & Scaling</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Real-time fraud detection</li>
          <li>Healthcare diagnostics</li>
          <li>Recommendation engines</li>
          <li>Autonomous systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Monitoring and scaling are essential for robust, production-grade ML systems.  
        Mastering these practices ensures your models deliver reliable and efficient predictions at any scale.
      </p>
    </div>
  );
}