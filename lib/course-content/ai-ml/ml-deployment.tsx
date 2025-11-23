export default function MlDeploymentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">ML Deployment</h2>
      <p className="text-gray-600">
        Deploying machine learning models involves packaging, serving, and scaling models for real-world use.  
        Effective deployment strategies ensure reliable, fast, and secure access to ML predictions in production environments.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why ML Deployment?</h3>
        <p className="text-blue-700">
          Deployment bridges the gap between model development and practical impact, enabling AI-powered applications and services.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. REST API Deployment</h3>
      <p>
        Expose ML models as REST APIs for integration with web and mobile applications.
      </p>
      <ul>
        <li>Frameworks: FastAPI, Flask</li>
        <li>Easy to scale and manage</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. ONNX</h3>
      <p>
        Open Neural Network Exchange (ONNX) is a format for exporting models for cross-platform deployment.
      </p>
      <ul>
        <li>Supports models from PyTorch, TensorFlow, and more</li>
        <li>Optimized for inference on various hardware</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. FastAPI / Flask</h3>
      <p>
        FastAPI and Flask are popular Python frameworks for building ML model APIs.
      </p>
      <ul>
        <li>FastAPI: Modern, async, high performance</li>
        <li>Flask: Simple, flexible, widely used</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. TensorRT Optimization</h3>
      <p>
        TensorRT accelerates inference for deep learning models on NVIDIA GPUs.
      </p>
      <ul>
        <li>Reduces latency and increases throughput</li>
        <li>Supports FP16 and INT8 precision</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. GPU/TPU Utilization</h3>
      <p>
        Leveraging GPUs and TPUs enables scalable, high-performance model serving.
      </p>
      <ul>
        <li>Cloud platforms: AWS, GCP, Azure</li>
        <li>On-premise deployment for sensitive data</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Serving a model with FastAPI (Python)
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
def predict(data: dict):
    prediction = model.predict([data["features"]])
    return {"prediction": prediction.tolist()}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of ML Deployment</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Real-time fraud detection</li>
          <li>Recommendation engines</li>
          <li>Healthcare diagnostics</li>
          <li>Automated customer support</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        ML deployment brings models into production, powering intelligent applications and services.  
        Mastering deployment techniques is essential for delivering real-world AI solutions.
      </p>
    </div>
  );
}