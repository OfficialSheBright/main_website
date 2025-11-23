export default function MlAlgorithmsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Machine Learning Algorithms</h2>
      <p className="text-gray-600">
        Machine learning algorithms are the core tools for building predictive models.  
        They enable tasks like regression, classification, clustering, and dimensionality reduction.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn ML Algorithms?</h3>
        <p className="text-blue-700">
          Understanding different algorithms helps you select the right approach for your data and problem, improving model accuracy and efficiency.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Regression Models</h3>
      <ul>
        <li>Linear Regression</li>
        <li>Ridge and Lasso Regression</li>
        <li>Polynomial Regression</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Decision Trees & Random Forests</h3>
      <ul>
        <li>Decision Trees: Tree-based models for classification and regression</li>
        <li>Random Forests: Ensemble of decision trees for improved accuracy</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Ensemble Methods</h3>
      <ul>
        <li>XGBoost</li>
        <li>LightGBM</li>
        <li>CatBoost</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Naive Bayes</h3>
      <ul>
        <li>Probabilistic classifier based on Bayes&apos; theorem</li>
        <li>Works well for text classification</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Support Vector Machines (SVM)</h3>
      <ul>
        <li>Finds optimal hyperplane for classification</li>
        <li>Effective for high-dimensional data</li>
      </ul>

      {/* SECTION 6 */}
      <h3 className="text-2xl font-bold text-gray-800">6. K-Nearest Neighbors (KNN)</h3>
      <ul>
        <li>Instance-based learning</li>
        <li>Classifies based on closest data points</li>
      </ul>

      {/* SECTION 7 */}
      <h3 className="text-2xl font-bold text-gray-800">7. Clustering Algorithms</h3>
      <ul>
        <li>K-means: Partition data into clusters</li>
        <li>DBSCAN: Density-based clustering</li>
      </ul>

      {/* SECTION 8 */}
      <h3 className="text-2xl font-bold text-gray-800">8. Dimensionality Reduction</h3>
      <ul>
        <li>PCA (Principal Component Analysis)</li>
        <li>t-SNE</li>
        <li>UMAP</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Training a Random Forest with scikit-learn (Python)
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
predictions = model.predict(X_test)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of ML Algorithms</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Fraud detection</li>
          <li>Customer segmentation</li>
          <li>Recommendation systems</li>
          <li>Medical diagnosis</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Mastering ML algorithms is essential for building effective predictive models.  
        Choose the right algorithm based on your data and problem requirements.
      </p>
    </div>
  );
}