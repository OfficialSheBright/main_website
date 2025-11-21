import GameDesignBasicsContent from "./game-design-basics";
import GameDevelopmentFoundationsContent from "./game-development-foundations";
import ProgrammingForGamesContent from "./programming-for-games";
import UnityEssentialsContent from "./unity-essentials";
import CsharpScriptingContent from "./csharp-scripting";
import TwoDGameDevelopmentContent from "./2d-game-development";
import ThreeDGameDevelopmentUnityContent from "./3d-game-development-unity";
import GraphicsOptimizationUnityContent from "./graphics-optimization-unity";
import MultiplayerNetworkingUnityContent from "./multiplayer-networking-unity";
import UnityDeploymentContent from "./unity-deployment";
import UnrealEngineEssentialsContent from "./unreal-engine-essentials";
import CppUnrealEngineContent from "./cpp-unreal-engine";
import ThreeDGameDevelopmentUnrealContent from "./3d-game-development-unreal";
import AnimationSystemsUnrealContent from "./animation-systems-unreal";
import AiBehaviorTreesContent from "./ai-behavior-trees";
import MultiplayerNetworkingUnrealContent from "./multiplayer-networking-unreal";
import UnrealDeploymentContent from "./unreal-deployment";
import MetaverseFoundationsContent from "./metaverse-foundations";
import WorldBuildingContent from "./world-building";
import AvatarSystemsContent from "./avatar-systems";
import NetworkingRealtimeSystemsContent from "./networking-realtime-systems";
import MetaverseToolsFrameworksContent from "./metaverse-tools-frameworks";
import VrArDevelopmentContent from "./vr-ar-development";
import BlenderBasicsContent from "./blender-basics";
import ThreeDModelingBlenderContent from "./3d-modeling-blender";
import TexturingMaterialsBlenderContent from "./texturing-materials-blender";
import AnimationBlenderContent from "./animation-blender";
import RenderingBlenderContent from "./rendering-blender";
import MayaEssentialsContent from "./maya-essentials";
import ProfessionalPipelineMayaContent from "./professional-pipeline-maya";
import AudioFundamentalsContent from "./audio-fundamentals";
import AudioImplementationContent from "./audio-implementation";
import ProductionWorkflowContent from "./production-workflow";
import MonetizationContent from "./monetization";
import GameMarketingContent from "./game-marketing";
import RenderingOptimizationContent from "./rendering-optimization";
import CpuOptimizationContent from "./cpu-optimization";
import CapstoneGameProjectsContent from "./capstone-game-projects";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements
export const gameDevelopmentContent: Record<string, React.ComponentType> = {
  // Module 1: Fundamentals of Game Development
  "game-design-basics": GameDesignBasicsContent,
  "game-development-foundations": GameDevelopmentFoundationsContent,
  "programming-for-games": ProgrammingForGamesContent,
  
  // Module 2: Unity Game Development
  "unity-essentials": UnityEssentialsContent,
  "csharp-scripting": CsharpScriptingContent,
  "2d-game-development": TwoDGameDevelopmentContent,
  "3d-game-development-unity": ThreeDGameDevelopmentUnityContent,
  "graphics-optimization-unity": GraphicsOptimizationUnityContent,
  "multiplayer-networking-unity": MultiplayerNetworkingUnityContent,
  "unity-deployment": UnityDeploymentContent,
  
  // Module 3: Unreal Engine Development
  "unreal-engine-essentials": UnrealEngineEssentialsContent,
  "cpp-unreal-engine": CppUnrealEngineContent,
  "3d-game-development-unreal": ThreeDGameDevelopmentUnrealContent,
  "animation-systems-unreal": AnimationSystemsUnrealContent,
  "ai-behavior-trees": AiBehaviorTreesContent,
  "multiplayer-networking-unreal": MultiplayerNetworkingUnrealContent,
  "unreal-deployment": UnrealDeploymentContent,
  
  // Module 4: Metaverse Development
  "metaverse-foundations": MetaverseFoundationsContent,
  "world-building": WorldBuildingContent,
  "avatar-systems": AvatarSystemsContent,
  "networking-realtime-systems": NetworkingRealtimeSystemsContent,
  "metaverse-tools-frameworks": MetaverseToolsFrameworksContent,
  "vr-ar-development": VrArDevelopmentContent,
  
  // Module 5: 3D Modeling & Animation (Blender, Maya)
  "blender-basics": BlenderBasicsContent,
  "3d-modeling-blender": ThreeDModelingBlenderContent,
  "texturing-materials-blender": TexturingMaterialsBlenderContent,
  "animation-blender": AnimationBlenderContent,
  "rendering-blender": RenderingBlenderContent,
  "maya-essentials": MayaEssentialsContent,
  "professional-pipeline-maya": ProfessionalPipelineMayaContent,
  
  // Module 6: Game Audio Design
  "audio-fundamentals": AudioFundamentalsContent,
  "audio-implementation": AudioImplementationContent,
  
  // Module 7: Game Production & Publishing
  "production-workflow": ProductionWorkflowContent,
  "monetization": MonetizationContent,
  "game-marketing": GameMarketingContent,
  
  // Module 8: Optimization & Performance
  "rendering-optimization": RenderingOptimizationContent,
  "cpu-optimization": CpuOptimizationContent,
  
  // Module 9: Capstone Game Projects
  "capstone-game-projects": CapstoneGameProjectsContent,
  
  // Module 10: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return gameDevelopmentContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in gameDevelopmentContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(gameDevelopmentContent);