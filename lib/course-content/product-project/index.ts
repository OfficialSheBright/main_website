import IntroductionDisciplinesContent from "./introduction-disciplines";
import BusinessTechnologyFundamentalsContent from "./business-technology-fundamentals";
import ToolsWorkflowsContent from "./tools-workflows";
import ProductStrategyContent from "./product-strategy";
import UserMarketResearchContent from "./user-market-research";
import ProductPlanningContent from "./product-planning";
import ProductDesignUxCollaborationContent from "./product-design-ux-collaboration";
import ProductExecutionContent from "./product-execution";
import ProductGrowthAnalyticsContent from "./product-growth-analytics";
import GoToMarketContent from "./go-to-market";
import TpmCoreResponsibilitiesContent from "./tpm-core-responsibilities";
import TechnicalArchitectureBasicsContent from "./technical-architecture-basics";
import PlanningComplexProgramsContent from "./planning-complex-programs";
import ExecutionExcellenceContent from "./execution-excellence";
import LargeScaleSystemsContent from "./large-scale-systems";
import PmFoundationsContent from "./pm-foundations";
import AgileProjectManagementContent from "./agile-project-management";
import ScrumKanbanContent from "./scrum-kanban";
import TraditionalHybridPmContent from "./traditional-hybrid-pm";
import PmToolsSoftwareContent from "./pm-tools-software";
import BaFoundationsContent from "./ba-foundations";
import RequirementsEngineeringContent from "./requirements-engineering";
import ModelingDocumentationContent from "./modeling-documentation";
import SolutionEvaluationContent from "./solution-evaluation";
import BaInAgileContent from "./ba-in-agile";
import ConsultingBasicsContent from "./consulting-basics";
import ProblemSolvingFrameworksContent from "./problem-solving-frameworks";
import TechnicalDiscoveryContent from "./technical-discovery";
import SolutionBlueprintingContent from "./solution-blueprinting";
import CommunicationPresentationContent from "./communication-presentation";
import ProductToolsContent from "./product-tools";
import PmToolsAdvancedContent from "./pm-tools-advanced";
import CertificationsOptionalContent from "./certifications-optional";
import SoftSkillsPmTpmBaContent from "./soft-skills-pm-tpm-ba";
import CommunicationMasteryContent from "./communication-mastery";
import CapstoneProjectsContent from "./capstone-projects";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements
export const productProjectContent: Record<string, React.ComponentType> = {
  // Module 1: Foundations of Product & Project
  "introduction-disciplines": IntroductionDisciplinesContent,
  "business-technology-fundamentals": BusinessTechnologyFundamentalsContent,
  "tools-workflows": ToolsWorkflowsContent,
  
  // Module 2: Product Management
  "product-strategy": ProductStrategyContent,
  "user-market-research": UserMarketResearchContent,
  "product-planning": ProductPlanningContent,
  "product-design-ux-collaboration": ProductDesignUxCollaborationContent,
  "product-execution": ProductExecutionContent,
  "product-growth-analytics": ProductGrowthAnalyticsContent,
  "go-to-market": GoToMarketContent,
  
  // Module 3: Technical Program Management (TPM)
  "tpm-core-responsibilities": TpmCoreResponsibilitiesContent,
  "technical-architecture-basics": TechnicalArchitectureBasicsContent,
  "planning-complex-programs": PlanningComplexProgramsContent,
  "execution-excellence": ExecutionExcellenceContent,
  "large-scale-systems": LargeScaleSystemsContent,
  
  // Module 4: Project Management (Agile, Scrum, PMBOK)
  "pm-foundations": PmFoundationsContent,
  "agile-project-management": AgileProjectManagementContent,
  "scrum-kanban": ScrumKanbanContent,
  "traditional-hybrid-pm": TraditionalHybridPmContent,
  "pm-tools-software": PmToolsSoftwareContent,
  
  // Module 5: Business Analysis (BA)
  "ba-foundations": BaFoundationsContent,
  "requirements-engineering": RequirementsEngineeringContent,
  "modeling-documentation": ModelingDocumentationContent,
  "solution-evaluation": SolutionEvaluationContent,
  "ba-in-agile": BaInAgileContent,
  
  // Module 6: Tech Consulting
  "consulting-basics": ConsultingBasicsContent,
  "problem-solving-frameworks": ProblemSolvingFrameworksContent,
  "technical-discovery": TechnicalDiscoveryContent,
  "solution-blueprinting": SolutionBlueprintingContent,
  "communication-presentation": CommunicationPresentationContent,
  
  // Module 7: Tools, Frameworks & Certifications
  "product-tools": ProductToolsContent,
  "pm-tools-advanced": PmToolsAdvancedContent,
  "certifications-optional": CertificationsOptionalContent,
  
  // Module 8: Leadership & Communication
  "soft-skills-pm-tpm-ba": SoftSkillsPmTpmBaContent,
  "communication-mastery": CommunicationMasteryContent,
  
  // Module 9: Capstone Projects
  "capstone-projects": CapstoneProjectsContent,
  
  // Module 10: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return productProjectContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in productProjectContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(productProjectContent);