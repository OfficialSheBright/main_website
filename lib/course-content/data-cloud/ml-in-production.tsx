export default function MlInProductionContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">ML in Production</h2>
      <p className="text-gray-600">
        Deploying machine learning models in production involves serving, monitoring, and maintaining models at scale.  
        Robust production workflows ensure reliability, scalability, and continuous improvement.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why ML in Production?</h3>
        <p className="text-blue-700">
          Production ML enables real-time predictions, automation, and business value from trained models.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Model Serving</h3>
      <ul>
        <li>Serve models via REST APIs (Flask, FastAPI, TensorFlow Serving)</li>
        <li>Containerize deployments with Docker and orchestrate with Kubernetes</li>
        <li>Ensure low latency and high availability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Monitoring & Logging</h3>
      <ul>
        <li>Track model performance, latency, and errors</li>
        <li>Detect data drift and model degradation</li>
        <li>Set up alerts and dashboards for incidents</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. CI/CD for ML</h3>
      <ul>
        <li>Automate model training, testing, and deployment</li>
        <li>Use pipelines for reproducibility and rollback</li>
        <li>Integrate with version control and cloud platforms</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Retraining & Updates</h3>
      <ul>
        <li>Schedule or trigger retraining on new data</li>
        <li>Automate deployment of updated models</li>
        <li>Monitor impact and roll back if needed</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Dockerizing a FastAPI ML service
FROM python:3.10
WORKDIR /app
COPY . .
RUN pip install fastapi uvicorn joblib
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of ML in Production</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Real-time predictions and automation</li>
          <li>Business intelligence and analytics</li>
          <li>Continuous model improvement</li>
          <li>Scalable AI-powered applications</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        ML in production is essential for delivering business value from models.  
        Master these workflows to deploy, monitor, and improve ML solutions at scale.
      </p>
    </div>
  );
}