import IntroductionAiContent from "./introduction-ai";
import MathForAiContent from "./math-for-ai";
import PythonForAiContent from "./python-for-ai";
import DataEngineeringBasicsContent from "./data-engineering-basics";
import CoreMlConceptsContent from "./core-ml-concepts";
import MlAlgorithmsContent from "./ml-algorithms";
import FeatureEngineeringContent from "./feature-engineering";
import ProductionMlPipelinesContent from "./production-ml-pipelines";
import RealWorldMlContent from "./real-world-ml";
import IntroNeuralNetworksContent from "./intro-neural-networks";
import ModernDlArchitecturesContent from "./modern-dl-architectures";
import DlFrameworksContent from "./dl-frameworks";
import TrainingDeepModelsContent from "./training-deep-models";
import AdvancedTopicsContent from "./advanced-topics";
import NlpFundamentalsContent from "./nlp-fundamentals";
import DeepNlpContent from "./deep-nlp";
import TransformersNlpContent from "./transformers-nlp";
import AdvancedNlpApplicationsContent from "./advanced-nlp-applications";
import CvFoundationsContent from "./cv-foundations";
import ImagingTechniquesContent from "./imaging-techniques";
import CnnBasedVisionContent from "./cnn-based-vision";
import AdvancedCvContent from "./advanced-cv";
import SpecializedCvFieldsContent from "./specialized-cv-fields";
import MlOpsFundamentalsContent from "./mlops-fundamentals";
import DataExperimentManagementContent from "./data-experiment-management";
import MlDeploymentContent from "./ml-deployment";
import CicdForMlContent from "./cicd-for-ml";
import MonitoringScalingContent from "./monitoring-scaling";
import GenerativeAiFoundationsContent from "./generative-ai-foundations";
import LlmArchitectureContent from "./llm-architecture";
import BuildingTrainingLlmsContent from "./building-training-llms";
import LlmFineTuningContent from "./llm-fine-tuning";
import LlmDeploymentContent from "./llm-deployment";
import SafetyAlignmentContent from "./safety-alignment";
import CapstoneProjectDevelopmentContent from "./capstone-project-development";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements - exactly matching your course config
export const aiMLContent: Record<string, React.ComponentType<ContentComponentProps>> = {
  // Module 1: Foundations of AI & ML
  "introduction-ai": IntroductionAiContent,
  "math-for-ai": MathForAiContent,
  "python-for-ai": PythonForAiContent,
  "data-engineering-basics": DataEngineeringBasicsContent,

  // Module 2: Machine Learning Engineering
  "core-ml-concepts": CoreMlConceptsContent,
  "ml-algorithms": MlAlgorithmsContent,
  "feature-engineering": FeatureEngineeringContent,
  "production-ml-pipelines": ProductionMlPipelinesContent,
  "real-world-ml": RealWorldMlContent,

  // Module 3: Deep Learning (DL)
  "intro-neural-networks": IntroNeuralNetworksContent,
  "modern-dl-architectures": ModernDlArchitecturesContent,
  "dl-frameworks": DlFrameworksContent,
  "training-deep-models": TrainingDeepModelsContent,
  "advanced-topics": AdvancedTopicsContent,

  // Module 4: Natural Language Processing (NLP)
  "nlp-fundamentals": NlpFundamentalsContent,
  "deep-nlp": DeepNlpContent,
  "transformers-nlp": TransformersNlpContent,
  "advanced-nlp-applications": AdvancedNlpApplicationsContent,

  // Module 5: Computer Vision
  "cv-foundations": CvFoundationsContent,
  "imaging-techniques": ImagingTechniquesContent,
  "cnn-based-vision": CnnBasedVisionContent,
  "advanced-cv": AdvancedCvContent,
  "specialized-cv-fields": SpecializedCvFieldsContent,

  // Module 6: AI Infrastructure & MLOps
  "mlops-fundamentals": MlOpsFundamentalsContent,
  "data-experiment-management": DataExperimentManagementContent,
  "ml-deployment": MlDeploymentContent,
  "cicd-for-ml": CicdForMlContent,
  "monitoring-scaling": MonitoringScalingContent,

  // Module 7: Generative AI / LLM Development
  "generative-ai-foundations": GenerativeAiFoundationsContent,
  "llm-architecture": LlmArchitectureContent,
  "building-training-llms": BuildingTrainingLlmsContent,
  "llm-fine-tuning": LlmFineTuningContent,
  "llm-deployment": LlmDeploymentContent,
  "safety-alignment": SafetyAlignmentContent,

  // Module 8: Capstone AI Projects
  "capstone-project-development": CapstoneProjectDevelopmentContent,

  // Module 9: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return aiMLContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in aiMLContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(aiMLContent);

// Module groupings for easier content management (matching your course config)
export const moduleGroups = {
  "foundations-ai-ml": [
    "introduction-ai",
    "math-for-ai",
    "python-for-ai",
    "data-engineering-basics"
  ],
  "machine-learning-engineering": [
    "core-ml-concepts",
    "ml-algorithms",
    "feature-engineering",
    "production-ml-pipelines",
    "real-world-ml"
  ],
  "deep-learning": [
    "intro-neural-networks",
    "modern-dl-architectures",
    "dl-frameworks",
    "training-deep-models",
    "advanced-topics"
  ],
  "natural-language-processing": [
    "nlp-fundamentals",
    "deep-nlp",
    "transformers-nlp",
    "advanced-nlp-applications"
  ],
  "computer-vision": [
    "cv-foundations",
    "imaging-techniques",
    "cnn-based-vision",
    "advanced-cv",
    "specialized-cv-fields"
  ],
  "ai-infrastructure-mlops": [
    "mlops-fundamentals",
    "data-experiment-management",
    "ml-deployment",
    "cicd-for-ml",
    "monitoring-scaling"
  ],
  "generative-ai-llm-development": [
    "generative-ai-foundations",
    "llm-architecture",
    "building-training-llms",
    "llm-fine-tuning",
    "llm-deployment",
    "safety-alignment"
  ],
  "capstone-ai-projects": [
    "capstone-project-development"
  ],
  "project-submission": [
    "project-submission"
  ]
} as const;

// Get topics by module helper
export const getTopicsByModule = (moduleId: keyof typeof moduleGroups): string[] => {
  return [...moduleGroups[moduleId]];
};

// Course statistics
export const getCourseStats = () => {
  const totalTopics = Object.keys(aiMLContent).length;
  const moduleCount = Object.keys(moduleGroups).length;
  
  return {
    totalTopics,
    moduleCount,
    averageTopicsPerModule: Math.round(totalTopics / moduleCount),
    estimatedHours: 220,
    mainModules: 9,
    skillLevel: "Intermediate to Advanced",
    specializations: ["ML Engineering", "Deep Learning", "NLP", "Computer Vision", "MLOps", "Generative AI"]
  };
};