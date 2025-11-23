export default function MathStatisticsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Math & Statistics</h2>
      <p className="text-gray-600">
        Math and statistics are the foundation of data analysis, machine learning, and scientific research.  
        Understanding these concepts is essential for extracting insights and building predictive models.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Math & Statistics?</h3>
        <p className="text-blue-700">
          Math and statistics help you interpret data, validate results, and make informed decisions based on evidence.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Probability</h3>
      <ul>
        <li>Measure likelihood of events</li>
        <li>Random variables, distributions, expected value</li>
        <li>Applications in risk analysis and predictions</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Hypothesis Testing</h3>
      <ul>
        <li>Test assumptions about data</li>
        <li>p-values, confidence intervals, significance</li>
        <li>Common tests: t-test, chi-square, ANOVA</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Linear Algebra Basics</h3>
      <ul>
        <li>Vectors, matrices, and operations</li>
        <li>Matrix multiplication, eigenvalues, eigenvectors</li>
        <li>Applications in machine learning and data transformations</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Statistical Modeling</h3>
      <ul>
        <li>Regression, classification, clustering</li>
        <li>Model fitting, evaluation, and interpretation</li>
        <li>Use statistical models to make predictions and infer relationships</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Linear regression with scikit-learn
from sklearn.linear_model import LinearRegression
import numpy as np
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])
model = LinearRegression().fit(X, y)
print(model.coef_, model.intercept_)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Math & Statistics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Data analysis and visualization</li>
          <li>Machine learning and AI</li>
          <li>Business intelligence and forecasting</li>
          <li>Scientific research and experimentation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Math and statistics are essential for understanding and modeling data.  
        Master these concepts to analyze, interpret, and predict outcomes effectively.
      </p>
    </div>
  );
}