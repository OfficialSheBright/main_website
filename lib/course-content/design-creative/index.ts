import DesignPrinciplesContent from "./design-principles";
import ToolsOfTradeContent from "./tools-of-trade";
import CreativeProcessContent from "./creative-process";
import UxResearchContent from "./ux-research";
import UxStrategyContent from "./ux-strategy";
import UiDesignContent from "./ui-design";
import PrototypingContent from "./prototyping";
import UsabilityTestingContent from "./usability-testing";
import UiUxDocumentationContent from "./ui-ux-documentation";
import ProductStrategyContent from "./product-strategy";
import ProductThinkingContent from "./product-thinking";
import DesignForProductContent from "./design-for-product";
import DataProductDecisionsContent from "./data-product-decisions";
import CollaborationContent from "./collaboration";
import IxdPrinciplesContent from "./ixd-principles";
import MotionInInteractionContent from "./motion-in-interaction";
import DesigningForPlatformsContent from "./designing-for-platforms";
import InteractionToolingContent from "./interaction-tooling";
import VisualDesignEssentialsContent from "./visual-design-essentials";
import BrandingIdentityContent from "./branding-identity";
import DigitalPrintMediaContent from "./digital-print-media";
import IllustrationIconographyContent from "./illustration-iconography";
import AdvancedGraphicToolsContent from "./advanced-graphic-tools";
import MotionPrinciplesContent from "./motion-principles";
import MotionToolsContent from "./motion-tools";
import TypesMotionDesignContent from "./types-motion-design";
import MotionWorkflowContent from "./motion-workflow";
import GameDesignFundamentalsContent from "./game-design-fundamentals";
import NarrativeWorldbuildingContent from "./narrative-worldbuilding";
import LevelDesignContent from "./level-design";
import GameUiUxContent from "./game-ui-ux";
import GameToolsEnginesContent from "./game-tools-engines";
import TwoDThreeDAssetDesignContent from "./2d-3d-asset-design";
import DesignPortfolioContent from "./design-portfolio";
import ProfessionalBrandingContent from "./professional-branding";
import FreelanceEmploymentSkillsContent from "./freelance-employment-skills";
import CapstoneCreativeProjectsContent from "./capstone-creative-projects";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements
export const designCreativeContent: Record<string, React.ComponentType> = {
  // Module 1: Foundations of Design
  "design-principles": DesignPrinciplesContent,
  "tools-of-trade": ToolsOfTradeContent,
  "creative-process": CreativeProcessContent,
  
  // Module 2: UI/UX Design
  "ux-research": UxResearchContent,
  "ux-strategy": UxStrategyContent,
  "ui-design": UiDesignContent,
  "prototyping": PrototypingContent,
  "usability-testing": UsabilityTestingContent,
  "ui-ux-documentation": UiUxDocumentationContent,
  
  // Module 3: Product Design
  "product-strategy": ProductStrategyContent,
  "product-thinking": ProductThinkingContent,
  "design-for-product": DesignForProductContent,
  "data-product-decisions": DataProductDecisionsContent,
  "collaboration": CollaborationContent,
  
  // Module 4: Interaction Design (IxD)
  "ixd-principles": IxdPrinciplesContent,
  "motion-in-interaction": MotionInInteractionContent,
  "designing-for-platforms": DesigningForPlatformsContent,
  "interaction-tooling": InteractionToolingContent,
  
  // Module 5: Graphic & Visual Design
  "visual-design-essentials": VisualDesignEssentialsContent,
  "branding-identity": BrandingIdentityContent,
  "digital-print-media": DigitalPrintMediaContent,
  "illustration-iconography": IllustrationIconographyContent,
  "advanced-graphic-tools": AdvancedGraphicToolsContent,
  
  // Module 6: Motion Design
  "motion-principles": MotionPrinciplesContent,
  "motion-tools": MotionToolsContent,
  "types-motion-design": TypesMotionDesignContent,
  "motion-workflow": MotionWorkflowContent,
  
  // Module 7: Game Design
  "game-design-fundamentals": GameDesignFundamentalsContent,
  "narrative-worldbuilding": NarrativeWorldbuildingContent,
  "level-design": LevelDesignContent,
  "game-ui-ux": GameUiUxContent,
  "game-tools-engines": GameToolsEnginesContent,
  "2d-3d-asset-design": TwoDThreeDAssetDesignContent,
  
  // Module 8: Portfolio & Career Development
  "design-portfolio": DesignPortfolioContent,
  "professional-branding": ProfessionalBrandingContent,
  "freelance-employment-skills": FreelanceEmploymentSkillsContent,
  
  // Module 9: Capstone Creative Projects
  "capstone-creative-projects": CapstoneCreativeProjectsContent,
  
  // Module 10: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return designCreativeContent[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in designCreativeContent;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(designCreativeContent);