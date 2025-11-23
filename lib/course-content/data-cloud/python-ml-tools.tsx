export default function PythonMlToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Python ML Tools</h2>
      <p className="text-gray-600">
        Python offers a rich ecosystem of machine learning tools and libraries for data analysis, modeling, and deployment.  
        Mastering these tools is essential for building scalable and effective ML solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Python ML Tools?</h3>
        <p className="text-blue-700">
          Python ML tools accelerate development, support reproducible workflows, and integrate easily with data engineering platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. scikit-learn</h3>
      <ul>
        <li>Popular library for classical ML algorithms</li>
        <li>Supports classification, regression, clustering, and preprocessing</li>
        <li>Easy-to-use API for rapid prototyping</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. TensorFlow & PyTorch</h3>
      <ul>
        <li>Deep learning frameworks for neural networks</li>
        <li>TensorFlow: Production-ready, scalable, supports Keras API</li>
        <li>PyTorch: Flexible, research-friendly, dynamic computation graphs</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. XGBoost & LightGBM</h3>
      <ul>
        <li>High-performance libraries for gradient boosting</li>
        <li>Widely used in ML competitions and tabular data problems</li>
        <li>Support feature importance and model interpretation</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. MLflow</h3>
      <ul>
        <li>Platform for tracking experiments, packaging models, and managing deployments</li>
        <li>Integrates with scikit-learn, TensorFlow, PyTorch, and more</li>
        <li>Supports reproducibility and collaboration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Training and tracking a model with scikit-learn and MLflow
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
model = RandomForestClassifier().fit(X, y)
mlflow.sklearn.log_model(model, "model")
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Python ML Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Predictive analytics and forecasting</li>
          <li>Image, text, and speech recognition</li>
          <li>Automated ML pipelines and deployment</li>
          <li>Experiment tracking and reproducibility</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Python ML tools are essential for modern machine learning workflows.  
        Master these libraries to build, track, and deploy scalable ML solutions.
      </p>
    </div>
  );
}