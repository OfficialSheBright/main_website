import { CourseConfig } from "./index";

export interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked?: boolean;
  subtopics: string[];
  prerequisites?: string[];
  learningObjectives?: string[];
  resources?: {
    videos?: string[];
    articles?: string[];
    exercises?: string[];
    quizzes?: string[];
  };
}

export const aiMLConfig: CourseConfig = {
  id: "ai-ml",
  title: "Complete AI & Machine Learning Course",
  description: "Master artificial intelligence and machine learning from foundations to advanced generative AI with industry-level projects",
  totalHours: 220,
  difficulty: "Intermediate",
  skillLevel: "Intermediate",
  targetAudience: [
    "Data scientists and analysts",
    "Software engineers transitioning to AI/ML",
    "Students pursuing AI/ML specialization",
    "Professionals seeking advanced AI skills"
  ],
  certification: {
    available: true,
    requirements: {
      minProgressPercentage: 85,
      capstoneProjectRequired: true,
      minProjectScore: 80
    }
  },
  modules: [
    {
      id: "foundations-ai-ml",
      title: "MODULE 1 — Foundations of AI & ML",
      topics: [
        {
          id: "introduction-ai",
          title: "1.1 Introduction to AI",
          duration: "100 min",
          completed: false,
          subtopics: [
            "History & evolution of AI",
            "Types of AI: ANI, AGI, ASI",
            "Symbolic AI vs Machine Learning",
            "AI applications across industries"
          ]
        },
        {
          id: "math-for-ai",
          title: "1.2 Math for AI",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Linear algebra (vectors, matrices, eigenvalues)",
            "Probability & statistics",
            "Optimization & calculus",
            "Gradient descent & variations"
          ]
        },
        {
          id: "python-for-ai",
          title: "1.3 Python for AI",
          duration: "130 min",
          completed: false,
          subtopics: [
            "NumPy",
            "Pandas",
            "Matplotlib / Seaborn",
            "Scikit-learn basics",
            "Data handling & preprocessing"
          ]
        },
        {
          id: "data-engineering-basics",
          title: "1.4 Data Engineering Basics",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Data collection",
            "Data pipelines",
            "Data cleaning & wrangling",
            "Handling missing data",
            "Feature engineering"
          ]
        }
      ]
    },
    {
      id: "machine-learning-engineering",
      title: "MODULE 2 — Machine Learning Engineering",
      topics: [
        {
          id: "core-ml-concepts",
          title: "2.1 Core ML Concepts",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Supervised learning",
            "Unsupervised learning",
            "Reinforcement learning basics",
            "Bias-variance tradeoff",
            "Model evaluation & metrics"
          ]
        },
        {
          id: "ml-algorithms",
          title: "2.2 Algorithms",
          duration: "180 min",
          completed: false,
          subtopics: [
            "Regression models",
            "Decision trees & random forests",
            "Ensemble methods (XGBoost, LightGBM, CatBoost)",
            "Naive Bayes",
            "SVM",
            "KNN",
            "Clustering: K-means, DBSCAN",
            "Dimensionality reduction (PCA, t-SNE, UMAP)"
          ]
        },
        {
          id: "feature-engineering",
          title: "2.3 Feature Engineering",
          duration: "90 min",
          completed: false,
          subtopics: [
            "Encoding categorical data",
            "Scaling & normalization",
            "Feature selection techniques"
          ]
        },
        {
          id: "production-ml-pipelines",
          title: "2.4 Production ML Pipelines",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Data versioning (DVC)",
            "ML pipelines with Sklearn Pipeline",
            "Hyperparameter tuning",
            "Model tracking (MLflow, Weights & Biases)"
          ]
        },
        {
          id: "real-world-ml",
          title: "2.5 Real-World ML",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Imbalanced datasets",
            "Drift detection",
            "Deployment strategies",
            "ML monitoring"
          ]
        }
      ]
    },
    {
      id: "deep-learning",
      title: "MODULE 3 — Deep Learning (DL)",
      topics: [
        {
          id: "intro-neural-networks",
          title: "3.1 Introduction to Neural Networks",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Perceptron",
            "Activation functions",
            "Loss functions",
            "Backpropagation"
          ]
        },
        {
          id: "modern-dl-architectures",
          title: "3.2 Modern DL Architectures",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Feedforward networks",
            "CNNs",
            "RNNs, LSTMs, GRUs",
            "Transformers intro"
          ]
        },
        {
          id: "dl-frameworks",
          title: "3.3 Frameworks",
          duration: "130 min",
          completed: false,
          subtopics: [
            "PyTorch",
            "TensorFlow & Keras",
            "JAX basics"
          ]
        },
        {
          id: "training-deep-models",
          title: "3.4 Training Deep Models",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Optimizers (Adam, RMSprop, SGD)",
            "Regularization (dropout, batch norm)",
            "Data augmentation",
            "Transfer learning"
          ]
        },
        {
          id: "advanced-topics",
          title: "3.5 Advanced Topics",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Attention mechanisms",
            "Self-supervised learning",
            "Contrastive learning",
            "Distributed training"
          ]
        }
      ]
    },
    {
      id: "natural-language-processing",
      title: "MODULE 4 — Natural Language Processing (NLP)",
      topics: [
        {
          id: "nlp-fundamentals",
          title: "4.1 NLP Fundamentals",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Text preprocessing",
            "Tokenization & sentence segmentation",
            "POS tagging",
            "Named entity recognition",
            "Vectorization: Bag-of-Words, TF-IDF, Word2Vec, GloVe"
          ]
        },
        {
          id: "deep-nlp",
          title: "4.2 Deep NLP",
          duration: "120 min",
          completed: false,
          subtopics: [
            "RNN/LSTM models",
            "Seq2seq architectures",
            "Encoder-decoder models"
          ]
        },
        {
          id: "transformers-nlp",
          title: "4.3 Transformers in NLP",
          duration: "150 min",
          completed: false,
          subtopics: [
            "BERT, RoBERTa, DistilBERT",
            "GPT family",
            "T5",
            "Semantic similarity",
            "Fine-tuning transformer models"
          ]
        },
        {
          id: "advanced-nlp-applications",
          title: "4.4 Advanced NLP Applications",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Chatbots & conversational AI",
            "Question answering",
            "Summarization",
            "Sentiment analysis",
            "Information extraction"
          ]
        }
      ]
    },
    {
      id: "computer-vision",
      title: "MODULE 5 — Computer Vision",
      topics: [
        {
          id: "cv-foundations",
          title: "5.1 CV Foundations",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Image formation",
            "Color spaces",
            "Image filtering (OpenCV)"
          ]
        },
        {
          id: "imaging-techniques",
          title: "5.2 Imaging Techniques",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Edge detection",
            "Segmentation",
            "Feature extraction (SIFT, ORB)"
          ]
        },
        {
          id: "cnn-based-vision",
          title: "5.3 CNN-Based Vision",
          duration: "150 min",
          completed: false,
          subtopics: [
            "VGG, ResNet, MobileNet",
            "Object detection: YOLO, SSD, Faster R-CNN",
            "Instance segmentation: Mask R-CNN"
          ]
        },
        {
          id: "advanced-cv",
          title: "5.4 Advanced CV",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Vision Transformers (ViT)",
            "SAM (Segment Anything)",
            "Multi-modal models (CLIP)"
          ]
        },
        {
          id: "specialized-cv-fields",
          title: "5.5 Specialized CV Fields",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Face recognition systems",
            "OCR systems",
            "Medical imaging",
            "Autonomous systems (self-driving, drones)"
          ]
        }
      ]
    },
    {
      id: "ai-infrastructure-mlops",
      title: "MODULE 6 — AI Infrastructure & MLOps",
      topics: [
        {
          id: "mlops-fundamentals",
          title: "6.1 MLOps Fundamentals",
          duration: "90 min",
          completed: false,
          subtopics: [
            "Why MLOps matters",
            "Reproducibility",
            "Model lifecycle management"
          ]
        },
        {
          id: "data-experiment-management",
          title: "6.2 Data & Experiment Management",
          duration: "110 min",
          completed: false,
          subtopics: [
            "DVC",
            "MLflow",
            "Weights & Biases"
          ]
        },
        {
          id: "ml-deployment",
          title: "6.3 Deployment",
          duration: "130 min",
          completed: false,
          subtopics: [
            "REST API deployment",
            "ONNX",
            "FastAPI / Flask",
            "TensorRT optimization",
            "GPU/TPU utilization"
          ]
        },
        {
          id: "cicd-for-ml",
          title: "6.4 CI/CD for ML",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Automated model training pipelines",
            "GitHub Actions / GitLab CI",
            "Canary and shadow deployments"
          ]
        },
        {
          id: "monitoring-scaling",
          title: "6.5 Monitoring & Scaling",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Monitoring drift",
            "Logging & alerts",
            "Scaling on cloud (AWS, GCP, Azure)",
            "Serving frameworks (TensorFlow Serving, TorchServe)"
          ]
        }
      ]
    },
    {
      id: "generative-ai-llm-development",
      title: "MODULE 7 — Generative AI / LLM Development",
      topics: [
        {
          id: "generative-ai-foundations",
          title: "7.1 Generative AI Foundations",
          duration: "120 min",
          completed: false,
          subtopics: [
            "What is generative modeling?",
            "Autoencoders",
            "GANs (DCGAN, StyleGAN)",
            "Diffusion models (Stable Diffusion)"
          ]
        },
        {
          id: "llm-architecture",
          title: "7.2 LLM Architecture",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Transformer architecture in-depth",
            "Attention mechanisms",
            "Positional encoding",
            "Training objectives (causal LM, MLM)"
          ]
        },
        {
          id: "building-training-llms",
          title: "7.3 Building & Training LLMs",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Tokenizers (BPE, SentencePiece)",
            "Data preprocessing for LLMs",
            "Training small LLMs from scratch",
            "Distributed training",
            "FP8/Quantization"
          ]
        },
        {
          id: "llm-fine-tuning",
          title: "7.4 LLM Fine-Tuning",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Instruction tuning",
            "LoRA",
            "QLoRA",
            "Parameter-efficient fine-tuning (PEFT)"
          ]
        },
        {
          id: "llm-deployment",
          title: "7.5 LLM Deployment",
          duration: "145 min",
          completed: false,
          subtopics: [
            "Serving LLMs with vLLM/TensorRT-LLM",
            "RAG (Retrieval Augmented Generation)",
            "Vector databases (FAISS, Pinecone, Weaviate)",
            "Multi-agent systems"
          ]
        },
        {
          id: "safety-alignment",
          title: "7.6 Safety & Alignment",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Bias detection",
            "Safety fine-tuning",
            "Reinforcement Learning from Human Feedback (RLHF)",
            "Constitutional AI"
          ]
        }
      ]
    },
    {
      id: "capstone-ai-projects",
      title: "MODULE 8 — Capstone AI Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "8.1 Capstone Project Development",
          duration: "450 min",
          completed: false,
          subtopics: [
            "Fraud detection ML system",
            "Recommendation engine",
            "Text summarization using transformers",
            "Image classifier with CNN + augmentation",
            "Speech-to-text model using Wav2Vec",
            "YOLO-based object detection system",
            "RAG chatbot with vector database",
            "Finetune your own LLM on a dataset",
            "Deploy ML model with CI/CD pipeline",
            "Data engineering",
            "Model selection & training",
            "Experiment tracking",
            "Deployment",
            "Documentation"
          ]
        }
      ]
    },
    {
      id: "project-submission",
      title: "MODULE 9 — Final Assessment: Project Submission",
      topics: [
        {
          id: "project-submission",
          title: "Final Project Submission",
          duration: "N/A",
          completed: false,
          subtopics: [
            "Submit your AI/ML projects for review",
            "Ensure all technical and ethical requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 20, // 20% weight
    practicalExercises: 50, // 50% weight
    capstoneProjects: 30 // 30% weight
  },
  
  careerOutcomes: [
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Research Engineer",
    "Deep Learning Engineer",
    "NLP Engineer",
    "Computer Vision Engineer",
    "MLOps Engineer",
    "AI Product Manager"
  ],
  
  technologiesCovered: [
    "Python", "NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow",
    "Keras", "OpenCV", "NLTK", "spaCy", "Hugging Face Transformers",
    "MLflow", "Weights & Biases", "DVC", "Docker", "Kubernetes",
    "FastAPI", "Flask", "AWS", "GCP", "Azure", "CUDA", "TensorRT",
    "ONNX", "Git", "Linux", "Jupyter", "Google Colab"
  ]
};