export default function MathForAiContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Mathematics for AI</h2>
      <p className="text-gray-600">
        Mathematics is the foundation of all Artificial Intelligence and Machine Learning.
        Algorithms, models, optimizations, and neural networks work purely on mathematical principles.
        In this topic, we will break down the essential math areas needed for AI: Linear Algebra,
        Calculus, Probability & Statistics.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Math is Important in AI?</h3>
        <p className="text-blue-700">
          Every ML model is basically math implemented using code.  
          Understanding math helps you build intuition, debug better, design better models,
          and understand exactly how AI algorithms learn.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-gray-800">1. Linear Algebra</h3>
      <p className="text-gray-600">
        Linear Algebra is the heart of Machine Learning. Data, weights, and neural network computations
        all happen using matrices and vectors.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Vectors</h4>
      <p>Vectors represent data points, inputs, features, and model parameters.</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example vector
x = [2, 5, 8]

# Dot Product example
a = [1, 2]
b = [3, 4]

dot = 1*3 + 2*4  # = 11`}
        </code>
      </pre>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Matrices</h4>
      <p>Matrices are used to represent large datasets and neural network weight layers.</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example matrix
A = [
  [1, 2],
  [3, 4]
]

# Matrix multiplication basics
Result = A * B
`}
        </code>
      </pre>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Key Linear Algebra Concepts</h4>
      <ul>
        <li>Dot Product</li>
        <li>Matrix Multiplication</li>
        <li>Transpose</li>
        <li>Determinant</li>
        <li>Eigenvalues & Eigenvectors</li>
      </ul>

      {/* HIGHLIGHT BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Where is Linear Algebra used?</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Neural networks forward & backward propagation</li>
          <li>Transformations in computer vision</li>
          <li>PCA (Dimensionality Reduction)</li>
          <li>Recommender systems</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800">2. Calculus</h3>
      <p className="text-gray-600">
        Calculus helps AI models learn. Optimization algorithms like Gradient Descent use derivatives
        to reduce error and improve predictions.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Derivatives</h4>
      <p>Derivatives measure how fast a function changes — essential for updating weights.</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Derivative of x^2
d/dx (x^2) = 2x

# Gradient Descent update rule:
weight = weight - learning_rate * derivative`}
        </code>
      </pre>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Partial Derivatives</h4>
      <p>Used in multivariable functions (common in ML models).</p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Chain Rule</h4>
      <p>
        Critical for backpropagation in neural networks to compute gradients layer-by-layer.
      </p>

      {/* EXAMPLE BOX */}
      <div className="p-4 border-l-4 border-purple-500 bg-purple-100 rounded">
        <h3 className="font-semibold text-purple-800">Chain Rule in Neural Networks</h3>
        <p className="text-purple-700">
          Neural networks apply chain rule to compute gradient of loss with respect to each weight.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-gray-800">3. Probability & Statistics</h3>
      <p className="text-gray-600">
        Statistics helps models understand data. Probability helps models handle uncertainty and
        predictions.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Key Concepts</h4>
      <ul>
        <li>Mean, Median, Mode</li>
        <li>Variance & Standard Deviation</li>
        <li>Probability Distributions</li>
        <li>Bayes Theorem</li>
        <li>Normal Distribution</li>
        <li>Random Variables</li>
      </ul>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Mean of data
numbers = [2, 4, 6, 8]
mean = sum(numbers) / len(numbers)  # = 5`}
        </code>
      </pre>

      <div className="p-4 border-l-4 border-orange-500 bg-orange-100 rounded">
        <h3 className="font-semibold text-orange-800">Where is Probability used in AI?</h3>
        <ul className="text-orange-700 list-disc ml-6">
          <li>Classification models</li>
          <li>Naive Bayes algorithm</li>
          <li>Markov chains</li>
          <li>LLM token predictions</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800">4. Summary</h3>
      <p>
        These math concepts form the core of ML & AI. You don’t need to master university-level math,
        but a working understanding will accelerate your learning and intuition.
      </p>

      <ul className="list-disc ml-6">
        <li>Linear Algebra → Data representation</li>
        <li>Calculus → Model learning (gradients)</li>
        <li>Probability → Predictions and uncertainty</li>
        <li>Statistics → Understanding datasets</li>
      </ul>
    </div>
  );
}
