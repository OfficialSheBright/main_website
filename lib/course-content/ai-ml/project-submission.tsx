"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "ai-ml",
      module: "project-submission",
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="max-w-6xl mx-auto p-8">
        
        {/* Module Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🧠 Module 11: Final Assessment
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrate your mastery of AI & Machine Learning by building and submitting a complete project that showcases everything you&apos;ve learned.
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🎯 What You&apos;ll Accomplish
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Goals:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Apply all concepts learned throughout the course
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Build a complete, production-ready AI/ML solution
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in data science and model development
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Create a portfolio-worthy project
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Criteria:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📊</span>
                  Data handling & preprocessing (20%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🤖</span>
                  Model development & evaluation (30%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚙️</span>
                  Technical implementation & reproducibility (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Deployment, documentation & presentation (25%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🔧 Technical Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Data & Preprocessing</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Data collection or selection</li>
                <li>• Cleaning & feature engineering</li>
                <li>• Exploratory data analysis (EDA)</li>
                <li>• Handling missing values & outliers</li>
                <li>• Data visualization</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Modeling & Evaluation</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Model selection (ML, DL, NLP, CV, etc.)</li>
                <li>• Training & validation</li>
                <li>• Hyperparameter tuning</li>
                <li>• Evaluation metrics & analysis</li>
                <li>• Comparison with baseline</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Deployment & Quality</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Model deployment (API, web app, notebook, etc.)</li>
                <li>• Reproducible code & environment</li>
                <li>• Version control (Git)</li>
                <li>• Documentation (README, comments)</li>
                <li>• Performance & error monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            💡 Project Ideas & Inspiration
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Image Classification",
                description: "Train a deep learning model to classify images (e.g., animals, vehicles, medical scans)",
                difficulty: "Intermediate",
                color: "blue"
              },
              {
                title: "Text Sentiment Analysis",
                description: "Build an NLP model to analyze and predict sentiment from text data",
                difficulty: "Intermediate", 
                color: "purple"
              },
              {
                title: "Fraud Detection System",
                description: "Use ML algorithms to detect fraudulent transactions or activities",
                difficulty: "Advanced",
                color: "green"
              },
              {
                title: "Recommendation Engine",
                description: "Create a system that suggests products, content, or friends based on user data",
                difficulty: "Advanced",
                color: "orange"
              },
              {
                title: "Time Series Forecasting",
                description: "Predict future values (e.g., stock prices, weather) using ML/DL models",
                difficulty: "Intermediate",
                color: "red"
              },
              {
                title: "Generative AI Project", 
                description: "Build a model that generates images, text, or music using GANs or transformers",
                difficulty: "Advanced",
                color: "indigo"
              }
            ].map((idea, index) => (
              <div key={index} className={`bg-${idea.color}-50 border border-${idea.color}-200 rounded-lg p-6`}>
                <h3 className={`text-lg font-semibold text-${idea.color}-900 mb-2`}>{idea.title}</h3>
                <p className={`text-${idea.color}-700 text-sm mb-3`}>{idea.description}</p>
                <span className={`inline-block bg-${idea.color}-100 text-${idea.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                  {idea.difficulty}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>💡 Pro Tip:</strong> Choose a project that genuinely interests you and solves a real problem. 
              This will keep you motivated and help you create something impactful for your portfolio!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="ai-ml"
          courseName="AI & Machine Learning"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Resources:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a> - Version control and project hosting</li>
                <li>• <a href="https://colab.research.google.com" className="text-blue-600 hover:underline">Google Colab</a> - Free cloud notebooks for ML</li>
                <li>• <a href="https://huggingface.co" className="text-blue-600 hover:underline">Hugging Face</a> - Pretrained models and datasets</li>
                <li>• <a href="https://wandb.ai" className="text-blue-600 hover:underline">Weights & Biases</a> - Experiment tracking</li>
                <li>• <a href="https://mlflow.org" className="text-blue-600 hover:underline">MLflow</a> - Model tracking and registry</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Datasets & Assets:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://www.kaggle.com/datasets" className="text-blue-600 hover:underline">Kaggle Datasets</a> - Public datasets for ML projects</li>
                <li>• <a href="https://paperswithcode.com/datasets" className="text-blue-600 hover:underline">Papers With Code</a> - Benchmark datasets</li>
                <li>• <a href="https://unsplash.com" className="text-blue-600 hover:underline">Unsplash</a> - Free images for CV projects</li>
                <li>• <a href="https://openml.org" className="text-blue-600 hover:underline">OpenML</a> - Collaborative ML datasets</li>
                <li>• <a href="https://scikit-learn.org/stable/datasets/index.html" className="text-blue-600 hover:underline">Scikit-learn Datasets</a> - Built-in datasets for practice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}