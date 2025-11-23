export default function CoreMlConceptsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Core Machine Learning Concepts</h2>
      <p className="text-gray-600">
        Machine Learning (ML) is a subset of AI focused on building systems that learn from data.  
        Understanding the core concepts is essential for designing, training, and evaluating ML models.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn ML Concepts?</h3>
        <p className="text-blue-700">
          Grasping the fundamentals helps you choose the right algorithms, avoid common pitfalls, and build robust models.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Supervised Learning</h3>
      <p>
        Models learn from labeled data to predict outcomes.  
        Examples: classification (spam detection), regression (house price prediction).
      </p>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Unsupervised Learning</h3>
      <p>
        Models find patterns in unlabeled data.  
        Examples: clustering (customer segmentation), dimensionality reduction (PCA).
      </p>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Reinforcement Learning Basics</h3>
      <p>
        Agents learn by interacting with an environment and receiving rewards or penalties.  
        Used in robotics, games, and autonomous systems.
      </p>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Bias-Variance Tradeoff</h3>
      <ul>
        <li><strong>Bias:</strong> Error from incorrect assumptions in the learning algorithm.</li>
        <li><strong>Variance:</strong> Error from sensitivity to small fluctuations in the training set.</li>
        <li>Goal: Find a balance for optimal model performance.</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Model Evaluation & Metrics</h3>
      <ul>
        <li>Accuracy, precision, recall, F1-score (classification)</li>
        <li>Mean squared error, R² (regression)</li>
        <li>Confusion matrix, ROC curve, AUC</li>
      </ul>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Core ML concepts form the foundation for all machine learning workflows.  
        Mastering these ideas enables you to build, evaluate, and improve intelligent systems.
      </p>
    </div>
  );
}