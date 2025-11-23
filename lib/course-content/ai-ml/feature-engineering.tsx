export default function FeatureEngineeringContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Feature Engineering</h2>
      <p className="text-gray-600">
        Feature engineering is the process of transforming raw data into meaningful inputs for machine learning models.  
        Well-crafted features can significantly improve model accuracy and performance.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Feature Engineering?</h3>
        <p className="text-blue-700">
          Good features help models learn relevant patterns, reduce noise, and generalize better to new data.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Encoding Categorical Data</h3>
      <p>
        Categorical variables must be converted to numerical form for ML algorithms.
      </p>
      <ul>
        <li>One-hot encoding</li>
        <li>Label encoding</li>
        <li>Ordinal encoding</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Scaling & Normalization</h3>
      <p>
        Scaling ensures features have similar ranges, improving model convergence and performance.
      </p>
      <ul>
        <li>Min-max scaling</li>
        <li>Standardization (z-score)</li>
        <li>Robust scaling</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Feature Selection Techniques</h3>
      <p>
        Selecting the most relevant features reduces overfitting and improves model interpretability.
      </p>
      <ul>
        <li>Filter methods (correlation, chi-square)</li>
        <li>Wrapper methods (recursive feature elimination)</li>
        <li>Embedded methods (Lasso, tree-based importance)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: One-hot encoding with pandas (Python)
import pandas as pd
df = pd.DataFrame({'color': ['red', 'blue', 'green']})
encoded = pd.get_dummies(df['color'])
print(encoded)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Feature Engineering</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Improving ML model accuracy</li>
          <li>Reducing model complexity</li>
          <li>Enhancing interpretability</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Feature engineering is a critical step in the ML pipeline.  
        Mastering these techniques helps you build robust and high-performing models.
      </p>
    </div>
  );
}