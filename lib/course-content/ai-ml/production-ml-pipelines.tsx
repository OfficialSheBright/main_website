export default function ProductionMlPipelinesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Production ML Pipelines</h2>
      <p className="text-gray-600">
        Production ML pipelines automate the process of data preparation, model training, evaluation, and deployment.  
        They ensure reproducibility, scalability, and maintainability for real-world machine learning systems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Production Pipelines?</h3>
        <p className="text-blue-700">
          Automated pipelines reduce manual errors, enable continuous integration, and make it easier to track and reproduce experiments.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Data Versioning (DVC)</h3>
      <p>
        DVC (Data Version Control) tracks changes in datasets and models, enabling reproducible experiments and collaboration.
      </p>
      <ul>
        <li>Version control for large files</li>
        <li>Pipeline management</li>
        <li>Integration with Git</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. ML Pipelines with Scikit-learn</h3>
      <p>
        Scikit-learn pipelines automate data preprocessing, feature engineering, and model training in a single workflow.
      </p>
      <ul>
        <li>Combine multiple steps into one object</li>
        <li>Ensure consistent transformations</li>
        <li>Easy hyperparameter tuning</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Hyperparameter Tuning</h3>
      <p>
        Systematic search for optimal model parameters using grid search, random search, or Bayesian optimization.
      </p>
      <ul>
        <li>Improves model performance</li>
        <li>Automated with tools like Optuna, GridSearchCV</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Model Tracking (MLflow, Weights & Biases)</h3>
      <p>
        Track experiments, metrics, and model versions for reproducibility and collaboration.
      </p>
      <ul>
        <li>MLflow: Experiment tracking, model registry</li>
        <li>Weights & Biases: Visualization, reporting, collaboration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Building a pipeline with scikit-learn (Python)
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier())
])
pipeline.fit(X_train, y_train)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Production ML Pipelines</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated model retraining</li>
          <li>Continuous integration and deployment (CI/CD)</li>
          <li>Experiment reproducibility</li>
          <li>Collaboration across teams</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Production ML pipelines are essential for scaling machine learning workflows.  
        Mastering these tools and practices enables robust, reliable, and maintainable AI systems.
      </p>
    </div>
  );
}