import IntroWebDevelopmentContent from "./intro-web-development";
import CoreToolsSetupContent from "./core-tools-setup";
import ProgrammingFundamentalsContent from "./programming-fundamentals";
import HTMLSemanticMarkupContent from "./html-semantic-markup";
import CSSStylingContent from "./css-styling";
import JavaScriptFrontendContent from "./javascript-frontend";
import ModernFrontendFrameworksContent from "./modern-frontend-frameworks";
import UIUXComponentLibrariesContent from "./ui-ux-component-libraries";
import StateManagementContent from "./state-management";
// Backend Development imports
import BackendFundamentalsContent from "./backend-fundamentals";
import NodejsExpressContent from "./nodejs-express";
import DatabasesContent from "./databases";
import AuthenticationSystemsContent from "./authentication-systems";
import BackendToolsContent from "./backend-tools";
// Full-Stack Development imports
import FullStackArchitectureContent from "./fullstack-architecture";
import MernPernStackContent from "./mern-pern-stack";
import FullStackAuthenticationContent from "./fullstack-authentication";
import ThirdPartyServicesContent from "./third-party-services";
import RealWorldProjectsContent from "./real-world-projects";
// Responsive Design imports
import ResponsiveFoundationsContent from "./responsive-foundations";
import AdvancedResponsiveContent from "./advanced-responsive";
import TestingResponsivenessContent from "./testing-responsiveness";
// PWA imports
import PWAEssentialsContent from "./pwa-essentials";
import ServiceWorkersContent from "./service-workers";
import AdvancedPWAConceptsContent from "./advanced-pwa-concepts";
import PublishingPWAContent from "./publishing-pwa";

import PerformanceBasicsContent from "./performance-basic";
import FrontendOptimizationContent from "./frontend-optimization";
import BackendPerformanceContent from "./backend-performance";
import MonitoringToolsContent from "./monitoring-tools";

// Web Security Engineering imports
import WebSecurityFundamentalsContent from "./web-security-fundamentals";
import ApplicationSecurityContent from "./application-security";
import AuthenticationSecurityContent from "./authentication-security";
import ServerInfrastructureSecurityContent from "./server-infrastructure-security";
import ComplianceStandardsContent from "./compliance-standards";

// Deployment & DevOps imports
import DeploymentFundamentalsContent from "./deployment-fundamentals";
import CICDGitHubActionsContent from "./cicd-github-actions";
import CloudEssentialsContent from "./cloud-essentials";

import CapstoneProjectsContent from "./capstone-projects";


// ADD NEW PROJECT SUBMISSION MODULE
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements
export const webDevelopmentContent: Record<string, React.ComponentType> = {
  // Frontend Topics
  "intro-web-development": IntroWebDevelopmentContent,
  "core-tools-setup": CoreToolsSetupContent,
  "programming-fundamentals": ProgrammingFundamentalsContent,
  "html-semantic-markup": HTMLSemanticMarkupContent,
  "css-styling": CSSStylingContent,
  "javascript-frontend": JavaScriptFrontendContent,
  "modern-frontend-frameworks": ModernFrontendFrameworksContent,
  "ui-ux-component-libraries": UIUXComponentLibrariesContent,
  "state-management": StateManagementContent,
  
  // Backend Topics
  "backend-fundamentals": BackendFundamentalsContent,
  "nodejs-express": NodejsExpressContent,
  "databases": DatabasesContent,
  "authentication-systems": AuthenticationSystemsContent,
  "backend-tools": BackendToolsContent,
  
  // Full-Stack Topics
  "fullstack-architecture": FullStackArchitectureContent,
  "mern-pern-stack": MernPernStackContent,
  "fullstack-authentication": FullStackAuthenticationContent,
  "third-party-services": ThirdPartyServicesContent,
  "real-world-projects": RealWorldProjectsContent,
  
  // Responsive Design Topics
  "responsive-foundations": ResponsiveFoundationsContent,
  "advanced-responsive": AdvancedResponsiveContent,
  "testing-responsiveness": TestingResponsivenessContent,
  
  // PWA Topics
  "pwa-essentials": PWAEssentialsContent,
  "service-workers": ServiceWorkersContent,
  "advanced-pwa-concepts": AdvancedPWAConceptsContent,
  "publishing-pwa": PublishingPWAContent,

  // Performance Optimization Topics
  "performance-basics": PerformanceBasicsContent,
  "frontend-optimization": FrontendOptimizationContent,
  "backend-performance": BackendPerformanceContent,
  "monitoring-tools": MonitoringToolsContent,
  
  // Web Security Engineering Topics
  "web-security-fundamentals": WebSecurityFundamentalsContent,
  "application-security": ApplicationSecurityContent,
    "authentication-security": AuthenticationSecurityContent,
      "server-infrastructure-security": ServerInfrastructureSecurityContent,
        "compliance-standards": ComplianceStandardsContent,
  
          // Deployment & DevOps Topics
  "cicd-github-actions": CICDGitHubActionsContent,
  "deployment-fundamentals": DeploymentFundamentalsContent,
  "cloud-essentials": CloudEssentialsContent,

    
  // Capstone Projects
  "capstone-projects": CapstoneProjectsContent,

    // MODULE 9: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return webDevelopmentContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in webDevelopmentContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(webDevelopmentContent);