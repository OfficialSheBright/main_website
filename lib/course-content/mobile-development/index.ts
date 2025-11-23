import MobileEcosystemIntroContent from "./mobile-ecosystem-intro";
import ToolsDevelopmentSetupContent from "./tools-development-setup";
import ProgrammingEssentialsMobileContent from "./programming-essentials-mobile";
import AndroidFundamentalsContent from "./android-fundamentals";
import AndroidUiLayoutsContent from "./android-ui-layouts";
import KotlinAndroidContent from "./kotlin-android";
import JavaAndroidOptionalContent from "./java-android-optional";
import AndroidApiIntegrationContent from "./android-api-integration";
import AdvancedAndroidContent from "./advanced-android";
import IosFundamentalsContent from "./ios-fundamentals";
import SwiftProgrammingContent from "./swift-programming";
import ObjectiveCBasicsContent from "./objective-c-basics";
import IosUiLayoutsContent from "./ios-ui-layouts";
import IosDataHandlingContent from "./ios-data-handling";
import IosIntegrationsAdvancedContent from "./ios-integrations-advanced";
import FlutterFundamentalsContent from "./flutter-fundamentals";
import FlutterStateManagementContent from "./flutter-state-management";
import FlutterDataApisContent from "./flutter-data-apis";
import AdvancedFlutterContent from "./advanced-flutter";
import ReactNativeCoreContent from "./react-native-core";
import ReactNativeDataApisContent from "./react-native-data-apis";
import ReactNativeModulesContent from "./react-native-modules";
import AdvancedReactNativeContent from "./advanced-react-native";
import GameFoundationsContent from "./game-foundations";
import UnityDevelopmentContent from "./unity-development";
import UnrealEngineOptionalContent from "./unreal-engine-optional";
import MobileGameOptimizationContent from "./mobile-game-optimization";
import GameMonetizationContent from "./game-monetization";
import AndroidWearOsContent from "./android-wear-os";
import AppleWatchosContent from "./apple-watchos";
import CrossDeviceExperiencesContent from "./cross-device-experiences";
import AppStartupOptimizationContent from "./app-startup-optimization";
import MemoryStorageOptimizationContent from "./memory-storage-optimization";
import BatteryEfficiencyContent from "./battery-efficiency";
import NetworkOptimizationContent from "./network-optimization";
import DebuggingProfilingToolsContent from "./debugging-profiling-tools";
import SecureStorageContent from "./secure-storage";
import ProtectingApiKeysContent from "./protecting-api-keys";
import NetworkSecurityContent from "./network-security";
import AppHardeningContent from "./app-hardening";
import OwaspMobileTop10Content from "./owasp-mobile-top-10";
import AndroidDeploymentContent from "./android-deployment";
import IosDeploymentContent from "./ios-deployment";
import MaintenanceUpdatesContent from "./maintenance-updates";
import CapstoneProjectDevelopmentContent from "./capstone-project-development";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements - exactly matching your course config
export const mobileDevelopmentContent: Record<string, React.ComponentType<ContentComponentProps>> = {
  // Module 1: Foundations of Mobile App Development
  "mobile-ecosystem-intro": MobileEcosystemIntroContent,
  "tools-development-setup": ToolsDevelopmentSetupContent,
  "programming-essentials-mobile": ProgrammingEssentialsMobileContent,

  // Module 2: Android Development (Kotlin + Java Track)
  "android-fundamentals": AndroidFundamentalsContent,
  "android-ui-layouts": AndroidUiLayoutsContent,
  "kotlin-android": KotlinAndroidContent,
  "java-android-optional": JavaAndroidOptionalContent,
  "android-api-integration": AndroidApiIntegrationContent,
  "advanced-android": AdvancedAndroidContent,

  // Module 3: iOS Development (Swift + Objective-C Track)
  "ios-fundamentals": IosFundamentalsContent,
  "swift-programming": SwiftProgrammingContent,
  "objective-c-basics": ObjectiveCBasicsContent,
  "ios-ui-layouts": IosUiLayoutsContent,
  "ios-data-handling": IosDataHandlingContent,
  "ios-integrations-advanced": IosIntegrationsAdvancedContent,

  // Module 4: Cross-Platform Development
  "flutter-fundamentals": FlutterFundamentalsContent,
  "flutter-state-management": FlutterStateManagementContent,
  "flutter-data-apis": FlutterDataApisContent,
  "advanced-flutter": AdvancedFlutterContent,
  "react-native-core": ReactNativeCoreContent,
  "react-native-data-apis": ReactNativeDataApisContent,
  "react-native-modules": ReactNativeModulesContent,
  "advanced-react-native": AdvancedReactNativeContent,

  // Module 5: Mobile Game Development
  "game-foundations": GameFoundationsContent,
  "unity-development": UnityDevelopmentContent,
  "unreal-engine-optional": UnrealEngineOptionalContent,
  "mobile-game-optimization": MobileGameOptimizationContent,
  "game-monetization": GameMonetizationContent,

  // Module 6: Wearable App Development
  "android-wear-os": AndroidWearOsContent,
  "apple-watchos": AppleWatchosContent,
  "cross-device-experiences": CrossDeviceExperiencesContent,

  // Module 7: Mobile Performance Optimization
  "app-startup-optimization": AppStartupOptimizationContent,
  "memory-storage-optimization": MemoryStorageOptimizationContent,
  "battery-efficiency": BatteryEfficiencyContent,
  "network-optimization": NetworkOptimizationContent,
  "debugging-profiling-tools": DebuggingProfilingToolsContent,

  // Module 8: Mobile App Security
  "secure-storage": SecureStorageContent,
  "protecting-api-keys": ProtectingApiKeysContent,
  "network-security": NetworkSecurityContent,
  "app-hardening": AppHardeningContent,
  "owasp-mobile-top-10": OwaspMobileTop10Content,

  // Module 9: Deployment & Publishing
  "android-deployment": AndroidDeploymentContent,
  "ios-deployment": IosDeploymentContent,
  "maintenance-updates": MaintenanceUpdatesContent,

  // Module 10: Capstone Projects
  "capstone-project-development": CapstoneProjectDevelopmentContent,

  // Module 11: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return mobileDevelopmentContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in mobileDevelopmentContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(mobileDevelopmentContent);

// Module groupings for easier content management (matching your course config)
export const moduleGroups = {
  "foundations-mobile-development": [
    "mobile-ecosystem-intro",
    "tools-development-setup",
    "programming-essentials-mobile"
  ],
  "android-development": [
    "android-fundamentals",
    "android-ui-layouts",
    "kotlin-android",
    "java-android-optional",
    "android-api-integration",
    "advanced-android"
  ],
  "ios-development": [
    "ios-fundamentals",
    "swift-programming",
    "objective-c-basics",
    "ios-ui-layouts",
    "ios-data-handling",
    "ios-integrations-advanced"
  ],
  "cross-platform-development": [
    "flutter-fundamentals",
    "flutter-state-management",
    "flutter-data-apis",
    "advanced-flutter",
    "react-native-core",
    "react-native-data-apis",
    "react-native-modules",
    "advanced-react-native"
  ],
  "mobile-game-development": [
    "game-foundations",
    "unity-development",
    "unreal-engine-optional",
    "mobile-game-optimization",
    "game-monetization"
  ],
  "wearable-app-development": [
    "android-wear-os",
    "apple-watchos",
    "cross-device-experiences"
  ],
  "mobile-performance-optimization": [
    "app-startup-optimization",
    "memory-storage-optimization",
    "battery-efficiency",
    "network-optimization",
    "debugging-profiling-tools"
  ],
  "mobile-app-security": [
    "secure-storage",
    "protecting-api-keys",
    "network-security",
    "app-hardening",
    "owasp-mobile-top-10"
  ],
  "deployment-publishing": [
    "android-deployment",
    "ios-deployment",
    "maintenance-updates"
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
  const totalTopics = Object.keys(mobileDevelopmentContent).length;
  const moduleCount = Object.keys(moduleGroups).length;
  
  return {
    totalTopics,
    moduleCount,
    averageTopicsPerModule: Math.round(totalTopics / moduleCount),
    estimatedHours: 180,
    mainModules: 11,
    skillLevel: "Beginner to Advanced",
    platforms: ["Android", "iOS", "Cross-Platform"]
  };
};