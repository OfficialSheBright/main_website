export default function CapstoneProjectDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">

      <h1 className="text-4xl font-bold mb-6">Capstone Project Development</h1>
      <p>
        The capstone project is where you combine everything you learned into a full,
        production-ready AI system. This includes ideation, dataset creation, model
        training, evaluation, deployment, and presentation. This topic guides you
        through every phase step-by-step.
      </p>

      {/* Overview */}
      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6">
        <p className="font-semibold">In this topic, you will learn:</p>
        <ul className="list-disc ml-6">
          <li>How to select a capstone project idea</li>
          <li>Define problem statements & success metrics</li>
          <li>Build datasets & data pipelines</li>
          <li>Train and evaluate models</li>
          <li>Build end-to-end AI applications</li>
          <li>Deployment strategies & documentation</li>
        </ul>
      </div>

      {/* Section 1 */}
      <h2 className="text-3xl font-semibold mt-10">1. Choosing the Right Project</h2>
      <p>
        A good capstone project is impactful, feasible, and showcases your abilities.
        It should solve a real problem using AI — not just a toy demo.
      </p>

      <h3 className="text-2xl font-semibold mt-6">How to Choose a Project</h3>
      <ul className="list-disc ml-6">
        <li>Pick a problem you genuinely care about.</li>
        <li>Choose something with measurable outcomes.</li>
        <li>Ensure data is available or collectable.</li>
        <li>Consider feasibility given your compute resources.</li>
        <li>Focus on end-to-end solutions, not just model-building.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Examples of Capstone Projects</h3>
      <ul className="list-disc ml-6">
        <li>Chatbot for mental health support</li>
        <li>AI-powered résumé screening system</li>
        <li>Object detection for traffic surveillance</li>
        <li>LLM-powered interview prep assistant</li>
        <li>Automated news summarization system</li>
        <li>Personalized learning recommendation engine</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-3xl font-semibold mt-10">2. Writing the Problem Statement</h2>
      <p>A clear problem statement makes the entire project easier.</p>

      <h3 className="text-2xl font-semibold mt-6">A Good Problem Statement Includes:</h3>
      <ul className="list-disc ml-6">
        <li><strong>Context:</strong> Why the problem matters.</li>
        <li><strong>Goal:</strong> What your AI system must do.</li>
        <li><strong>Constraints:</strong> Time, compute, or data limitations.</li>
        <li><strong>Metrics:</strong> How success is measured.</li>
      </ul>

      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`Example Problem Statement:

Build an LLM-based assistant that generates personalized course recommendations
for students based on interests, skills, and career goals.
Success Metric: Achieve at least 80% accuracy compared to human advisors.
`}
        </pre>
      </div>

      {/* Section 3 */}
      <h2 className="text-3xl font-semibold mt-10">3. Dataset Collection & Preparation</h2>
      <p>
        Data is the foundation of your project. Your model can never outperform the quality
        of the data it learns from.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Ways to Source Data</h3>
      <ul className="list-disc ml-6">
        <li>Public datasets (Kaggle, HuggingFace, UCI)</li>
        <li>APIs and web scraping</li>
        <li>Manually labeled datasets</li>
        <li>Synthetic dataset generation using LLMs</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Important Data Steps</h3>
      <ul className="list-disc ml-6">
        <li>Cleaning: Remove noise, duplicates, errors</li>
        <li>Labeling: Manual or automated</li>
        <li>Splitting: Train/validation/test</li>
        <li>Balancing: Avoid bias and imbalance</li>
        <li>Preprocessing: Tokenization, normalization, feature engineering</li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-3xl font-semibold mt-10">4. Model Development & Training</h2>
      <p>
        This is where the AI part happens — selecting the right model, training,
        tuning, and evaluating.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Model Selection</h3>
      <ul className="list-disc ml-6">
        <li><strong>LLMs:</strong> GPT, Llama, Mistral, Gemma</li>
        <li><strong>Vision Models:</strong> YOLO, ViT, EfficientNet</li>
        <li><strong>NLP Models:</strong> BERT, T5, RoBERTa</li>
        <li><strong>Classical ML:</strong> SVM, Random Forests, XGBoost</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Training Process</h3>
      <ul className="list-disc ml-6">
        <li>Choose loss function</li>
        <li>Train on dataset</li>
        <li>Validate regularly</li>
        <li>Hyperparameter tuning</li>
        <li>Checkpointing</li>
      </ul>

      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`# Example training loop (pseudo-code)

for epoch in range(epochs):
    for batch in train_data:
        loss = model.train(batch)
    val_score = model.validate(val_data)
    save_checkpoint(model)
`}
        </pre>
      </div>

      {/* Section 5 */}
      <h2 className="text-3xl font-semibold mt-10">5. Building the End-to-End System</h2>
      <p>
        A great project is not just a model — it’s a complete product with a user-facing interface.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Components of an End-to-End AI Application</h3>
      <ul className="list-disc ml-6">
        <li>Frontend UI (React, Next.js, Swift, Android)</li>
        <li>Backend API (Node.js, Python, FastAPI)</li>
        <li>Database (MongoDB, PostgreSQL, Firebase)</li>
        <li>Model serving layer</li>
        <li>Hosting (AWS, GCP, Vercel)</li>
      </ul>

      {/* Section 6 */}
      <h2 className="text-3xl font-semibold mt-10">6. Deployment & Optimization</h2>
      <p>
        Deployment makes your project accessible in real-world conditions.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Deployment Methods</h3>
      <ul className="list-disc ml-6">
        <li>Run model on cloud GPUs</li>
        <li>Use serverless inference APIs</li>
        <li>Quantize model for faster inference</li>
        <li>Optimize with ONNX, TensorRT, or vLLM</li>
        <li>Deploy using Docker containers</li>
      </ul>

      {/* Section 7 */}
      <h2 className="text-3xl font-semibold mt-10">7. Documentation & Final Presentation</h2>
      <p>
        Your project is incomplete without proper documentation and a clear presentation.
      </p>

      <h3 className="text-2xl font-semibold mt-6">What to Document</h3>
      <ul className="list-disc ml-6">
        <li>Project overview</li>
        <li>Dataset & preprocessing steps</li>
        <li>Model selection & training details</li>
        <li>Evaluation results</li>
        <li>Architecture diagram</li>
        <li>Limitations & future improvements</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Final Presentation Should Include</h3>
      <ul className="list-disc ml-6">
        <li>Problem statement</li>
        <li>Demo of your system</li>
        <li>Key insights from training & evaluation</li>
        <li>Impact & use cases</li>
        <li>Next steps</li>
      </ul>

      {/* Summary */}
      <div className="border-l-4 border-green-600 bg-green-50 p-4 my-10">
        <h3 className="text-2xl font-semibold">Summary</h3>
        <p>
          The capstone project is your opportunity to build something real and impactful.
          By following a structured pipeline — problem definition, dataset creation,
          model development, deployment, and documentation — you create a project that
          showcases your abilities as a full-stack AI engineer.
        </p>
      </div>

    </div>
  );
}
