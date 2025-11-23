export default function PythonForAiContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Python for AI</h2>
      <p className="text-gray-600">
        Python is the most popular programming language for artificial intelligence and machine learning.  
        Its simplicity, rich ecosystem, and powerful libraries make it ideal for building AI solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Python for AI?</h3>
        <p className="text-blue-700">
          Python offers easy syntax, extensive documentation, and a vibrant community, making it accessible for beginners and experts alike.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Essential Libraries</h3>
      <ul>
        <li><strong>NumPy:</strong> Fast numerical computations</li>
        <li><strong>Pandas:</strong> Data manipulation and analysis</li>
        <li><strong>Matplotlib & Seaborn:</strong> Data visualization</li>
        <li><strong>Scikit-learn:</strong> Machine learning algorithms</li>
        <li><strong>TensorFlow & PyTorch:</strong> Deep learning frameworks</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Data Handling & Preprocessing</h3>
      <p>
        Python makes it easy to load, clean, and preprocess data for AI tasks.
      </p>
      <ul>
        <li>Reading CSV, Excel, and JSON files</li>
        <li>Handling missing values</li>
        <li>Feature scaling and encoding</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Building ML Models</h3>
      <p>
        Scikit-learn provides simple APIs for training, evaluating, and deploying machine learning models.
      </p>
      <ul>
        <li>Classification and regression</li>
        <li>Model evaluation metrics</li>
        <li>Pipeline creation</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Deep Learning with TensorFlow & PyTorch</h3>
      <p>
        Python supports state-of-the-art deep learning with TensorFlow and PyTorch, enabling neural network design and training.
      </p>
      <ul>
        <li>Custom neural network architectures</li>
        <li>GPU acceleration</li>
        <li>Model saving and loading</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Loading data and training a simple classifier (Python)
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

df = pd.read_csv("data.csv")
X = df.drop("target", axis=1)
y = df["target"]

model = RandomForestClassifier()
model.fit(X, y)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Python in AI</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Data analysis and visualization</li>
          <li>Machine learning and deep learning</li>
          <li>Natural language processing</li>
          <li>Computer vision</li>
          <li>Automation and scripting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Python is the foundation of modern AI development.  
        Mastering its libraries and tools is essential for building effective AI solutions.
      </p>
    </div>
  );
}