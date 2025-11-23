export default function DataExperimentManagementContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Data & Experiment Management</h2>
      <p className="text-gray-600">
        Effective data and experiment management is crucial for reproducible and scalable machine learning workflows.  
        Tools like DVC, MLflow, and Weights & Biases help track datasets, models, and experiments throughout the ML lifecycle.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Manage Data & Experiments?</h3>
        <p className="text-blue-700">
          Proper management ensures reproducibility, collaboration, and transparency in ML projects, making it easier to track progress and share results.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. DVC (Data Version Control)</h3>
      <p>
        DVC is an open-source tool for versioning datasets and models.  
        It integrates with Git to track changes in data and pipelines.
      </p>
      <ul>
        <li>Version control for large files</li>
        <li>Pipeline management</li>
        <li>Collaboration across teams</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. MLflow</h3>
      <p>
        MLflow is a platform for managing the ML lifecycle, including experimentation, reproducibility, deployment, and model registry.
      </p>
      <ul>
        <li>Track experiments and parameters</li>
        <li>Log metrics and artifacts</li>
        <li>Register and deploy models</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Weights & Biases (W&B)</h3>
      <p>
        W&B provides tools for experiment tracking, dataset versioning, and collaborative reporting.
      </p>
      <ul>
        <li>Visualize training runs</li>
        <li>Compare model performance</li>
        <li>Share results with teams</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Tracking an experiment with MLflow (Python)
import mlflow

with mlflow.start_run():
    mlflow.log_param("learning_rate", 0.01)
    mlflow.log_metric("accuracy", 0.95)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Reproducible research</li>
          <li>Team collaboration</li>
          <li>Model comparison and selection</li>
          <li>Audit trails for ML projects</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Data and experiment management tools are essential for building reliable and collaborative ML systems.  
        Mastering these tools improves productivity and ensures the integrity of your machine learning workflows.
      </p>
    </div>
  );
}