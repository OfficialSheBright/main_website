import IntroductionDataEcosystemContent from "./introduction-data-ecosystem";
import ToolsProgrammingContent from "./tools-programming";
import MathStatisticsContent from "./math-statistics";
import DataAnalysisContent from "./data-analysis";
import MlFoundationsContent from "./ml-foundations";
import MlInProductionContent from "./ml-in-production";
import PythonMlToolsContent from "./python-ml-tools";
import EndToEndMlPipelinesContent from "./end-to-end-ml-pipelines";
import DataEngineeringFundamentalsContent from "./data-engineering-fundamentals";
import DataPipelinesContent from "./data-pipelines";
import EtlEltToolsContent from "./etl-elt-tools";
import WorkflowAutomationContent from "./workflow-automation";
import DataStorageSystemsContent from "./data-storage-systems";
import BigDataConceptsContent from "./big-data-concepts";
import HadoopEcosystemContent from "./hadoop-ecosystem";
import ApacheSparkContent from "./apache-spark";
import KafkaStreamingSystemsContent from "./kafka-streaming-systems";
import ScalableDataSystemsContent from "./scalable-data-systems";
import RelationalDatabasesContent from "./relational-databases";
import DatabaseInternalsContent from "./database-internals";
import DatabaseSecurityContent from "./database-security";
import BackupRecoveryContent from "./backup-recovery";
import NosqlDatabasesContent from "./nosql-databases";
import AwsCoreServicesContent from "./aws-core-services";
import AwsNetworkingContent from "./aws-networking";
import AdvancedAwsContent from "./advanced-aws";
import GcpCoreServicesContent from "./gcp-core-services";
import AdvancedGcpContent from "./advanced-gcp";
import AzureCoreServicesContent from "./azure-core-services";
import AdvancedAzureContent from "./advanced-azure";
import DevopsFoundationsContent from "./devops-foundations";
import DevopsToolsContent from "./devops-tools";
import ObservabilityContent from "./observability";
import SrePracticesContent from "./sre-practices";
import ArchitecturalPrinciplesContent from "./architectural-principles";
import ArchitecturalPatternsContent from "./architectural-patterns";
import SecurityGovernanceContent from "./security-governance";
import DesigningSystemsContent from "./designing-systems";
import CapstoneProjectDevelopmentContent from "./capstone-project-development";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements - exactly matching your course config
export const dataCloudContent: Record<string, React.ComponentType<ContentComponentProps>> = {
  // Module 1: Foundations of Data & Cloud
  "introduction-data-ecosystem": IntroductionDataEcosystemContent,
  "tools-programming": ToolsProgrammingContent,
  "math-statistics": MathStatisticsContent,

  // Module 2: Data Science
  "data-analysis": DataAnalysisContent,
  "ml-foundations": MlFoundationsContent,
  "ml-in-production": MlInProductionContent,
  "python-ml-tools": PythonMlToolsContent,
  "end-to-end-ml-pipelines": EndToEndMlPipelinesContent,

  // Module 3: Data Engineering
  "data-engineering-fundamentals": DataEngineeringFundamentalsContent,
  "data-pipelines": DataPipelinesContent,
  "etl-elt-tools": EtlEltToolsContent,
  "workflow-automation": WorkflowAutomationContent,
  "data-storage-systems": DataStorageSystemsContent,

  // Module 4: Big Data Development
  "big-data-concepts": BigDataConceptsContent,
  "hadoop-ecosystem": HadoopEcosystemContent,
  "apache-spark": ApacheSparkContent,
  "kafka-streaming-systems": KafkaStreamingSystemsContent,
  "scalable-data-systems": ScalableDataSystemsContent,

  // Module 5: Database Administration (DBA)
  "relational-databases": RelationalDatabasesContent,
  "database-internals": DatabaseInternalsContent,
  "database-security": DatabaseSecurityContent,
  "backup-recovery": BackupRecoveryContent,
  "nosql-databases": NosqlDatabasesContent,

  // Module 6: Cloud Engineering (AWS / GCP / Azure)
  "aws-core-services": AwsCoreServicesContent,
  "aws-networking": AwsNetworkingContent,
  "advanced-aws": AdvancedAwsContent,
  "gcp-core-services": GcpCoreServicesContent,
  "advanced-gcp": AdvancedGcpContent,
  "azure-core-services": AzureCoreServicesContent,
  "advanced-azure": AdvancedAzureContent,

  // Module 7: DevOps & Site Reliability Engineering (SRE)
  "devops-foundations": DevopsFoundationsContent,
  "devops-tools": DevopsToolsContent,
  "observability": ObservabilityContent,
  "sre-practices": SrePracticesContent,

  // Module 8: Cloud Architecture
  "architectural-principles": ArchitecturalPrinciplesContent,
  "architectural-patterns": ArchitecturalPatternsContent,
  "security-governance": SecurityGovernanceContent,
  "designing-systems": DesigningSystemsContent,

  // Module 9: Capstone Projects
  "capstone-project-development": CapstoneProjectDevelopmentContent,

  // Module 10: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return dataCloudContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in dataCloudContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(dataCloudContent);

// Module groupings for easier content management (matching your course config)
export const moduleGroups = {
  "foundations-data-cloud": [
    "introduction-data-ecosystem",
    "tools-programming",
    "math-statistics"
  ],
  "data-science": [
    "data-analysis",
    "ml-foundations",
    "ml-in-production",
    "python-ml-tools",
    "end-to-end-ml-pipelines"
  ],
  "data-engineering": [
    "data-engineering-fundamentals",
    "data-pipelines",
    "etl-elt-tools",
    "workflow-automation",
    "data-storage-systems"
  ],
  "big-data-development": [
    "big-data-concepts",
    "hadoop-ecosystem",
    "apache-spark",
    "kafka-streaming-systems",
    "scalable-data-systems"
  ],
  "database-administration": [
    "relational-databases",
    "database-internals",
    "database-security",
    "backup-recovery",
    "nosql-databases"
  ],
  "cloud-engineering": [
    "aws-core-services",
    "aws-networking",
    "advanced-aws",
    "gcp-core-services",
    "advanced-gcp",
    "azure-core-services",
    "advanced-azure"
  ],
  "devops-sre": [
    "devops-foundations",
    "devops-tools",
    "observability",
    "sre-practices"
  ],
  "cloud-architecture": [
    "architectural-principles",
    "architectural-patterns",
    "security-governance",
    "designing-systems"
  ],
  "capstone-projects": [
    "capstone-project-development"
  ],
  "project-submission": [
    "project-submission"
  ]
} as const;

// Get topics by module helper
export const getTopicsByModule = (moduleId: keyof typeof moduleGroups): string[] => {
  return [...(moduleGroups[moduleId] || [])];
};

// Course statistics
export const getCourseStats = () => {
  const totalTopics = Object.keys(dataCloudContent).length;
  const moduleCount = Object.keys(moduleGroups).length;
  
  return {
    totalTopics,
    moduleCount,
    averageTopicsPerModule: Math.round(totalTopics / moduleCount),
    estimatedHours: 250,
    mainModules: 10
  };
};