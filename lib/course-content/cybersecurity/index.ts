import IntroductionCybersecurityContent from "./introduction-cybersecurity";
import SecurityConceptsContent from "./security-concepts";
import ToolsEnvironmentSetupContent from "./tools-environment-setup";
import WebApplicationSecurityContent from "./web-application-security";
import SecureCodingPracticesContent from "./secure-coding-practices";
import ApiSecurityContent from "./api-security";
import MobileApplicationSecurityContent from "./mobile-application-security";
import NetworkFundamentalsContent from "./network-fundamentals";
import AttacksOnNetworksContent from "./attacks-on-networks";
import NetworkDefenseContent from "./network-defense";
import SecureNetworkDesignContent from "./secure-network-design";
import ReconnaissanceContent from "./reconnaissance";
import ScanningEnumerationContent from "./scanning-enumeration";
import ExploitationContent from "./exploitation";
import PostExploitationContent from "./post-exploitation";
import ReportingDocumentationContent from "./reporting-documentation";
import CtiFoundationsContent from "./cti-foundations";
import ThreatInformationGatheringContent from "./threat-information-gathering";
import ThreatAnalysisContent from "./threat-analysis";
import CtiToolsContent from "./cti-tools";
import BlockchainFundamentalsContent from "./blockchain-fundamentals";
import BlockchainAttacksContent from "./blockchain-attacks";
import ProtocolSecurityContent from "./protocol-security";
import SoliditySecurityBasicsContent from "./solidity-security-basics";
import SmartContractVulnerabilitiesContent from "./smart-contract-vulnerabilities";
import AuditingToolsContent from "./auditing-tools";
import AuditMethodologyContent from "./audit-methodology";
import CloudSecurityFundamentalsContent from "./cloud-security-fundamentals";
import MultiCloudSecurityContent from "./multi-cloud-security";
import CloudAttackSimulationContent from "./cloud-attack-simulation";
import MalwareAnalysisBasicsContent from "./malware-analysis-basics";
import ReverseEngineeringContent from "./reverse-engineering";
import ZeroDayResearchIntroContent from "./zero-day-research-intro";
import CapstoneProjectDevelopmentContent from "./capstone-project-development";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements - exactly matching your course config
export const cybersecurityContent: Record<string, React.ComponentType<ContentComponentProps>> = {
  // Module 1: Cybersecurity Foundations
  "introduction-cybersecurity": IntroductionCybersecurityContent,
  "security-concepts": SecurityConceptsContent,
  "tools-environment-setup": ToolsEnvironmentSetupContent,

  // Module 2: Application Security (AppSec)
  "web-application-security": WebApplicationSecurityContent,
  "secure-coding-practices": SecureCodingPracticesContent,
  "api-security": ApiSecurityContent,
  "mobile-application-security": MobileApplicationSecurityContent,

  // Module 3: Network Security
  "network-fundamentals": NetworkFundamentalsContent,
  "attacks-on-networks": AttacksOnNetworksContent,
  "network-defense": NetworkDefenseContent,
  "secure-network-design": SecureNetworkDesignContent,

  // Module 4: Penetration Testing / Ethical Hacking
  "reconnaissance": ReconnaissanceContent,
  "scanning-enumeration": ScanningEnumerationContent,
  "exploitation": ExploitationContent,
  "post-exploitation": PostExploitationContent,
  "reporting-documentation": ReportingDocumentationContent,

  // Module 5: Cyber Threat Intelligence (CTI)
  "cti-foundations": CtiFoundationsContent,
  "threat-information-gathering": ThreatInformationGatheringContent,
  "threat-analysis": ThreatAnalysisContent,
  "cti-tools": CtiToolsContent,

  // Module 6: Blockchain Security
  "blockchain-fundamentals": BlockchainFundamentalsContent,
  "blockchain-attacks": BlockchainAttacksContent,
  "protocol-security": ProtocolSecurityContent,

  // Module 7: Smart Contract Security (Audits)
  "solidity-security-basics": SoliditySecurityBasicsContent,
  "smart-contract-vulnerabilities": SmartContractVulnerabilitiesContent,
  "auditing-tools": AuditingToolsContent,
  "audit-methodology": AuditMethodologyContent,

  // Module 8: Cloud Security
  "cloud-security-fundamentals": CloudSecurityFundamentalsContent,
  "multi-cloud-security": MultiCloudSecurityContent,
  "cloud-attack-simulation": CloudAttackSimulationContent,

  // Module 9: Advanced Security Topics
  "malware-analysis-basics": MalwareAnalysisBasicsContent,
  "reverse-engineering": ReverseEngineeringContent,
  "zero-day-research-intro": ZeroDayResearchIntroContent,

  // Module 10: Capstone Projects
  "capstone-project-development": CapstoneProjectDevelopmentContent,

  // Module 11: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return cybersecurityContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in cybersecurityContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(cybersecurityContent);

// Module groupings for easier content management (matching your course config)
export const moduleGroups = {
  "cybersecurity-foundations": [
    "introduction-cybersecurity",
    "security-concepts",
    "tools-environment-setup"
  ],
  "application-security": [
    "web-application-security",
    "secure-coding-practices",
    "api-security",
    "mobile-application-security"
  ],
  "network-security": [
    "network-fundamentals",
    "attacks-on-networks",
    "network-defense",
    "secure-network-design"
  ],
  "penetration-testing": [
    "reconnaissance",
    "scanning-enumeration",
    "exploitation",
    "post-exploitation",
    "reporting-documentation"
  ],
  "cyber-threat-intelligence": [
    "cti-foundations",
    "threat-information-gathering",
    "threat-analysis",
    "cti-tools"
  ],
  "blockchain-security": [
    "blockchain-fundamentals",
    "blockchain-attacks",
    "protocol-security"
  ],
  "smart-contract-security": [
    "solidity-security-basics",
    "smart-contract-vulnerabilities",
    "auditing-tools",
    "audit-methodology"
  ],
  "cloud-security": [
    "cloud-security-fundamentals",
    "multi-cloud-security",
    "cloud-attack-simulation"
  ],
  "advanced-security-topics": [
    "malware-analysis-basics",
    "reverse-engineering",
    "zero-day-research-intro"
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
  const totalTopics = Object.keys(cybersecurityContent).length;
  const moduleCount = Object.keys(moduleGroups).length;
  
  return {
    totalTopics,
    moduleCount,
    averageTopicsPerModule: Math.round(totalTopics / moduleCount),
    estimatedHours: 280,
    mainModules: 11,
    skillLevel: "Intermediate to Advanced"
  };
};