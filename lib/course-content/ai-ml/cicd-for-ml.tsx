export default function CicdForMlContent() {
  return (
    <div className="prose prose-lg max-w-none">

      <h1 className="text-4xl font-bold mb-6">CI/CD for Machine Learning (MLOps)</h1>
      <p>
        CI/CD (Continuous Integration and Continuous Deployment) for ML focuses on
        automating the end-to-end lifecycle of machine learning systems — from
        training to deployment. Unlike traditional CI/CD, ML systems involve data,
        experiments, retraining, drift monitoring, and complex infrastructure.
      </p>

      {/* Info Box */}
      <div className="border-l-4 border-purple-600 bg-purple-50 p-4 my-6">
        <p className="font-semibold">You will learn:</p>
        <ul className="list-disc ml-6">
          <li>How CI/CD differs for ML systems</li>
          <li>Automating training pipelines</li>
          <li>Versioning code, data, and models</li>
          <li>Using GitHub Actions / GitLab CI</li>
          <li>Deploying ML models safely (canary, shadow)</li>
          <li>Best practices for production ML</li>
        </ul>
      </div>

      {/* Section 1 */}
      <h2 className="text-3xl font-semibold mt-10">1. Why CI/CD is Different for ML</h2>
      <p>
        In software engineering, CI/CD only concerns code. In ML, you work with:
      </p>
      <ul className="list-disc ml-6">
        <li>Models</li>
        <li>Datasets</li>
        <li>Training pipelines</li>
        <li>Hyperparameters</li>
        <li>Evaluation metrics</li>
      </ul>

      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6">
        <p className="font-semibold">ML CI/CD must handle:</p>
        <ul className="list-disc ml-6">
          <li>Data versioning</li>
          <li>Model versioning</li>
          <li>Reproducible experiments</li>
          <li>Automated retraining</li>
          <li>Automated evaluation</li>
          <li>Safe model deployment</li>
        </ul>
      </div>

      {/* Section 2 */}
      <h2 className="text-3xl font-semibold mt-10">2. Building Automated Training Pipelines</h2>
      <p>
        A CI/CD ML pipeline automates fetching data, preprocessing, training,
        evaluation, and saving the model.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Typical ML Pipeline Stages</h3>
      <ul className="list-disc ml-6">
        <li>Data ingestion</li>
        <li>Data validation</li>
        <li>Feature engineering</li>
        <li>Model training</li>
        <li>Model evaluation</li>
        <li>Model packaging</li>
        <li>Deployment</li>
      </ul>

      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`# Example automated training pipeline (pseudo-code)

run_pipeline():
    data = load_data()
    clean = preprocess(data)
    features = feature_engineer(clean)
    model = train(features)
    metrics = evaluate(model)
    if metrics > threshold:
        register_model(model)
`}
        </pre>
      </div>

      {/* Section 3 */}
      <h2 className="text-3xl font-semibold mt-10">3. CI for ML: Continuous Integration</h2>
      <p>
        Continuous Integration ensures that every code/data change is tested and
        validated before merging.
      </p>

      <h3 className="text-2xl font-semibold mt-6">CI tasks include:</h3>
      <ul className="list-disc ml-6">
        <li>Linter checks (flake8, black)</li>
        <li>Unit tests for preprocessing and training code</li>
        <li>Data validation (schema checking)</li>
        <li>Model training on sample dataset</li>
        <li>Pipeline testing</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Example CI Workflow (GitHub Actions)</h3>

      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`name: CI Pipeline

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest
`}
        </pre>
      </div>

      {/* Section 4 */}
      <h2 className="text-3xl font-semibold mt-10">4. CD for ML: Continuous Deployment</h2>

      <p>Continuous Deployment ensures every approved model is automatically deployed.</p>

      <h3 className="text-2xl font-semibold mt-6">CD tasks include:</h3>
      <ul className="list-disc ml-6">
        <li>Fetch latest approved model</li>
        <li>Create API server (FastAPI / Flask)</li>
        <li>Build Docker image</li>
        <li>Push to cloud registry</li>
        <li>Deploy to cloud (AWS/GCP/Azure/Vercel)</li>
        <li>Run smoke tests</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Example CD Workflow (GitHub Actions)</h3>

      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`name: Deploy Model API

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker Image
        run: docker build -t model-api .
      - name: Push to Registry
        run: docker push myrepo/model-api
      - name: Deploy
        run: kubectl apply -f deployment.yaml
`}
        </pre>
      </div>

      {/* Section 5 */}
      <h2 className="text-3xl font-semibold mt-10">5. Safe Deployment Strategies for ML</h2>
      <p>
        Since ML models can fail silently, safe deployment is critical.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Recommended Deployment Methods</h3>
      <ul className="list-disc ml-6">
        <li><strong>Canary deployment:</strong> Send 1–5% traffic to new model first.</li>
        <li><strong>Shadow deployment:</strong> New model receives traffic but does not respond.</li>
        <li><strong>Blue–Green deployment:</strong> Maintain two production environments.</li>
        <li><strong>A/B testing:</strong> Compare model performance live.</li>
      </ul>

      <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 my-6">
        <p className="font-semibold">Why this matters:</p>
        <p>
          ML models may perform well offline but fail due to real-world distribution
          shifts. Safe deployments protect user experience.
        </p>
      </div>

      {/* Section 6 */}
      <h2 className="text-3xl font-semibold mt-10">6. Integrating Tools into CI/CD</h2>
      <p>Modern MLOps stacks use tools for automation and governance.</p>

      <h3 className="text-2xl font-semibold mt-6">Essential Tools</h3>
      <ul className="list-disc ml-6">
        <li><strong>DVC:</strong> Data & model versioning</li>
        <li><strong>MLflow:</strong> Experiment & model registry</li>
        <li><strong>Weights & Biases:</strong> Experiment tracking</li>
        <li><strong>Docker:</strong> Model packaging</li>
        <li><strong>Kubernetes:</strong> Scaling deployment</li>
        <li><strong>GitHub Actions/GitLab CI:</strong> Workflow automation</li>
      </ul>

      {/* Section 7 */}
      <h2 className="text-3xl font-semibold mt-10">7. Best Practices for ML CI/CD</h2>
      <ul className="list-disc ml-6">
        <li>Version everything — code, data, models</li>
        <li>Automate retraining pipelines</li>
        <li>Use feature stores for consistency</li>
        <li>Use model registries for governance</li>
        <li>Monitor data & model drift</li>
        <li>Use safe deployment strategies</li>
        <li>Keep infrastructure reproducible (IaC)</li>
      </ul>

      {/* Summary */}
      <div className="border-l-4 border-green-600 bg-green-50 p-4 mt-10">
        <h3 className="text-2xl font-semibold">Summary</h3>
        <p>
          CI/CD for ML is more than automating deployment — it governs data, models,
          experiments, training pipelines, and monitoring. With proper automation and
          safe deployment patterns, ML systems become reliable, scalable, and truly
          production-ready.
        </p>
      </div>

    </div>
  );
}
