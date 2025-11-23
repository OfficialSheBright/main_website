export default function MlopsFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">MLOps Fundamentals</h2>
      <p className="text-gray-600">
        MLOps (Machine Learning Operations) is the discipline of managing the lifecycle of ML models, from development to deployment and monitoring.  
        It ensures reproducibility, scalability, and reliability in production ML systems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why MLOps?</h3>
        <p className="text-blue-700">
          MLOps bridges the gap between data science and IT operations, enabling faster delivery and robust management of ML solutions.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Why MLOps Matters</h3>
      <ul>
        <li>Streamlines model development and deployment</li>
        <li>Reduces manual errors and increases automation</li>
        <li>Improves collaboration between teams</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Reproducibility</h3>
      <p>
        Ensures that experiments and results can be consistently reproduced by tracking code, data, and environment versions.
      </p>
      <ul>
        <li>Version control for code and data</li>
        <li>Environment management (Docker, Conda)</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Model Lifecycle Management</h3>
      <p>
        Covers all stages from model training to deployment and monitoring.
      </p>
      <ul>
        <li>Experiment tracking</li>
        <li>Model registry</li>
        <li>Continuous integration and delivery (CI/CD)</li>
        <li>Monitoring and retraining</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Tracking ML experiments with MLflow (Python)
import mlflow

with mlflow.start_run():
    mlflow.log_param("model_type", "RandomForest")
    mlflow.log_metric("accuracy", 0.92)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of MLOps</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated model deployment</li>
          <li>Real-time model monitoring</li>
          <li>Scalable ML pipelines</li>
          <li>Collaboration and governance</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        MLOps is essential for building reliable, scalable, and maintainable ML systems.  
        Mastering these fundamentals enables successful production AI deployments.
      </p>
    </div>
  );
}