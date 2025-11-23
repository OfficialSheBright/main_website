export default function MlFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">ML Foundations</h2>
      <p className="text-gray-600">
        Machine Learning (ML) foundations cover the core concepts, algorithms, and workflows for building predictive models from data.  
        Understanding these basics is essential for data science, analytics, and AI engineering.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why ML Foundations?</h3>
        <p className="text-blue-700">
          ML enables automation, prediction, and data-driven decision making across industries and applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Supervised Learning</h3>
      <ul>
        <li>Train models using labeled data (features + target)</li>
        <li>Common algorithms: linear regression, decision trees, SVM, neural networks</li>
        <li>Applications: classification, regression, forecasting</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Unsupervised Learning</h3>
      <ul>
        <li>Discover patterns in unlabeled data</li>
        <li>Common algorithms: k-means clustering, PCA, hierarchical clustering</li>
        <li>Applications: segmentation, anomaly detection, dimensionality reduction</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Model Evaluation</h3>
      <ul>
        <li>Assess model performance using metrics (accuracy, precision, recall, RMSE)</li>
        <li>Cross-validation and train/test splits</li>
        <li>Prevent overfitting and underfitting</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Feature Engineering</h3>
      <ul>
        <li>Transform raw data into informative features</li>
        <li>Handle missing values, encode categorical variables, scale/normalize data</li>
        <li>Improve model accuracy and generalization</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Training a simple classifier with scikit-learn
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestClassifier().fit(X_train, y_train)
print("Accuracy:", model.score(X_test, y_test))
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of ML Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Predictive analytics and forecasting</li>
          <li>Image and text classification</li>
          <li>Recommendation systems</li>
          <li>Fraud detection and anomaly monitoring</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        ML foundations are essential for building intelligent systems.  
        Master these concepts to create, evaluate, and deploy effective machine learning models.
      </p>
    </div>
  );
}