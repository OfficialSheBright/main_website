import FundamentalsSoftwareEngineeringContent from "./fundamentals-software-engineering";
import SoftwareArchitectureContent from "./software-architecture";
import DesignPatternsContent from "./design-patterns";
import TestingQualityAssuranceContent from "./testing-quality-assurance";
import DesktopDevelopmentOverviewContent from "./desktop-development-overview";
import PythonGuiFrameworksContent from "./python-gui-frameworks";
import PythonDataApisContent from "./python-data-apis";
import PythonPackagingDeploymentContent from "./python-packaging-deployment";
import DotnetFrameworksContent from "./dotnet-frameworks";
import DotnetAdvancedTopicsContent from "./dotnet-advanced-topics";
import ElectronJsContent from "./electron-js";
import TauriRustContent from "./tauri-rust";
import SystemProgrammingFoundationsContent from "./system-programming-foundations";
import CFoundationsContent from "./c-foundations";
import OsLevelProgrammingCContent from "./os-level-programming-c";
import OopCppContent from "./oop-cpp";
import ModernCppContent from "./modern-cpp";
import CppSystemsWorkContent from "./cpp-systems-work";
import RustFundamentalsContent from "./rust-fundamentals";
import RustSystemsContent from "./rust-systems";
import EmbeddedFoundationsContent from "./embedded-foundations";
import MicrocontrollerProgrammingContent from "./microcontroller-programming";
import RealTimeSystemsRtosContent from "./real-time-systems-rtos";
import ArmCortexBareMetalContent from "./arm-cortex-bare-metal";
import IotSystemDevelopmentContent from "./iot-system-development";
import ApiFundamentalsContent from "./api-fundamentals";
import BackendFrameworksContent from "./backend-frameworks";
import DatabaseIntegrationsContent from "./database-integrations";
import ApiSecurityContent from "./api-security";
import AdvancedApiConceptsContent from "./advanced-api-concepts";
import ScriptingLanguagesContent from "./scripting-languages";
import FileSystemAutomationContent from "./file-system-automation";
import NetworkAutomationContent from "./network-automation";
import DevopsCicdAutomationContent from "./devops-cicd-automation";
import WebAutomationContent from "./web-automation";
import PerformanceOptimizationContent from "./performance-optimization";
import TestingContent from "./testing";
import SecurityContent from "./security";
import CapstoneProjectDevelopmentContent from "./capstone-project-development";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements - exactly matching your course config
export const softwareEngineeringContent: Record<string, React.ComponentType<ContentComponentProps>> = {
  // Module 1: Core Software Engineering Foundations
  "fundamentals-software-engineering": FundamentalsSoftwareEngineeringContent,
  "software-architecture": SoftwareArchitectureContent,
  "design-patterns": DesignPatternsContent,
  "testing-quality-assurance": TestingQualityAssuranceContent,

  // Module 2: Desktop App Development
  "desktop-development-overview": DesktopDevelopmentOverviewContent,
  "python-gui-frameworks": PythonGuiFrameworksContent,
  "python-data-apis": PythonDataApisContent,
  "python-packaging-deployment": PythonPackagingDeploymentContent,
  "dotnet-frameworks": DotnetFrameworksContent,
  "dotnet-advanced-topics": DotnetAdvancedTopicsContent,
  "electron-js": ElectronJsContent,
  "tauri-rust": TauriRustContent,

  // Module 3: System Programming (C / C++ / Rust)
  "system-programming-foundations": SystemProgrammingFoundationsContent,
  "c-foundations": CFoundationsContent,
  "os-level-programming-c": OsLevelProgrammingCContent,
  "oop-cpp": OopCppContent,
  "modern-cpp": ModernCppContent,
  "cpp-systems-work": CppSystemsWorkContent,
  "rust-fundamentals": RustFundamentalsContent,
  "rust-systems": RustSystemsContent,

  // Module 4: Embedded Systems Development
  "embedded-foundations": EmbeddedFoundationsContent,
  "microcontroller-programming": MicrocontrollerProgrammingContent,
  "real-time-systems-rtos": RealTimeSystemsRtosContent,
  "arm-cortex-bare-metal": ArmCortexBareMetalContent,
  "iot-system-development": IotSystemDevelopmentContent,

  // Module 5: API Development
  "api-fundamentals": ApiFundamentalsContent,
  "backend-frameworks": BackendFrameworksContent,
  "database-integrations": DatabaseIntegrationsContent,
  "api-security": ApiSecurityContent,
  "advanced-api-concepts": AdvancedApiConceptsContent,

  // Module 6: Automation & Scripting
  "scripting-languages": ScriptingLanguagesContent,
  "file-system-automation": FileSystemAutomationContent,
  "network-automation": NetworkAutomationContent,
  "devops-cicd-automation": DevopsCicdAutomationContent,
  "web-automation": WebAutomationContent,

  // Module 7: Performance, Testing & Security
  "performance-optimization": PerformanceOptimizationContent,
  "testing": TestingContent,
  "security": SecurityContent,

  // Module 8: Capstone Projects
  "capstone-project-development": CapstoneProjectDevelopmentContent,

  // Module 9: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return softwareEngineeringContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in softwareEngineeringContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(softwareEngineeringContent);

// Module groupings for easier content management (matching your course config)
export const moduleGroups = {
  "core-software-engineering-foundations": [
    "fundamentals-software-engineering",
    "software-architecture",
    "design-patterns",
    "testing-quality-assurance"
  ],
  "desktop-app-development": [
    "desktop-development-overview",
    "python-gui-frameworks",
    "python-data-apis",
    "python-packaging-deployment",
    "dotnet-frameworks",
    "dotnet-advanced-topics",
    "electron-js",
    "tauri-rust"
  ],
  "system-programming": [
    "system-programming-foundations",
    "c-foundations",
    "os-level-programming-c",
    "oop-cpp",
    "modern-cpp",
    "cpp-systems-work",
    "rust-fundamentals",
    "rust-systems"
  ],
  "embedded-systems-development": [
    "embedded-foundations",
    "microcontroller-programming",
    "real-time-systems-rtos",
    "arm-cortex-bare-metal",
    "iot-system-development"
  ],
  "api-development": [
    "api-fundamentals",
    "backend-frameworks",
    "database-integrations",
    "api-security",
    "advanced-api-concepts"
  ],
  "automation-scripting": [
    "scripting-languages",
    "file-system-automation",
    "network-automation",
    "devops-cicd-automation",
    "web-automation"
  ],
  "performance-testing-security": [
    "performance-optimization",
    "testing",
    "security"
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
  return moduleGroups[moduleId] ? Array.from(moduleGroups[moduleId]) : [];
};

// Course statistics
export const getCourseStats = () => {
  const totalTopics = Object.keys(softwareEngineeringContent).length;
  const moduleCount = Object.keys(moduleGroups).length;
  
  return {
    totalTopics,
    moduleCount,
    averageTopicsPerModule: Math.round(totalTopics / moduleCount),
    estimatedHours: 200,
    mainModules: 9,
    skillLevel: "Beginner to Advanced"
  };
};