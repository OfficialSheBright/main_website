export default function EndToEndMlPipelinesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">End-to-End ML Pipelines</h2>
      <p className="text-gray-600">
        End-to-end ML pipelines automate the process of data preparation, model training, deployment, and monitoring.  
        Building robust pipelines is essential for scalable and reliable machine learning in production.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why ML Pipelines?</h3>
        <p className="text-blue-700">
          ML pipelines streamline workflows, reduce manual errors, and enable rapid iteration from data to deployed models.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Dataset Creation</h3>
      <ul>
        <li>Collect, clean, and preprocess data for training</li>
        <li>Split data into training, validation, and test sets</li>
        <li>Automate feature engineering and transformation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Model Deployment (Flask/FastAPI)</h3>
      <ul>
        <li>Serve trained models as APIs using Flask or FastAPI</li>
        <li>Containerize deployments for scalability (Docker, Kubernetes)</li>
        <li>Integrate with CI/CD for automated releases</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Monitoring</h3>
      <ul>
        <li>Track model performance and data drift</li>
        <li>Set up alerts for anomalies and failures</li>
        <li>Automate retraining and updates as needed</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Serving a model with FastAPI
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
        <h3 className="font-semibold text-green-800">Applications of ML Pipelines</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated machine learning workflows</li>
          <li>Scalable model deployment and serving</li>
          <li>Continuous monitoring and improvement</li>
          <li>Integration with business applications</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        End-to-end ML pipelines are essential for production-grade machine learning.  
        Master these concepts to automate, deploy, and monitor models efficiently.
      </p>
    </div>
  );
}