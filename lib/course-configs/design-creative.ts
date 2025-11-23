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

export const designCreativeConfig: CourseConfig = {
  id: "design-creative",
  title: "Complete Design & Creative Course",
  description: "Master design from foundations to advanced creative skills with UI/UX, product design, motion graphics, and industry-level portfolio projects",
  totalHours: 240,
  difficulty: "Beginner to Advanced",
  skillLevel: "Beginner",
  targetAudience: [
    "Aspiring designers and creative professionals",
    "Developers seeking design skills",
    "Career changers entering design field",
    "Students pursuing creative careers"
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
      id: "foundations-design",
      title: "MODULE 1 — Foundations of Design",
      topics: [
        {
          id: "design-principles",
          title: "1.1 Design Principles",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Principles: Balance, Hierarchy, Contrast, Alignment",
            "Visual language & semiotics",
            "Gestalt principles",
            "Design ethics & accessibility"
          ]
        },
        {
          id: "tools-of-trade",
          title: "1.2 Tools of the Trade",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Figma",
            "Adobe XD",
            "Adobe CC (Illustrator, Photoshop, After Effects)",
            "Blender (for 3D)",
            "Prototyping tools (ProtoPie, Framer)"
          ]
        },
        {
          id: "creative-process",
          title: "1.3 Creative Process",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Design thinking",
            "Double Diamond process",
            "Empathy mapping",
            "Creative brainstorming methods"
          ]
        }
      ]
    },
    {
      id: "ui-ux-design",
      title: "MODULE 2 — UI/UX Design",
      topics: [
        {
          id: "ux-research",
          title: "2.1 UX Research",
          duration: "140 min",
          completed: false,
          subtopics: [
            "User interviews",
            "Surveys",
            "Competitor analysis",
            "User personas",
            "User journey maps"
          ]
        },
        {
          id: "ux-strategy",
          title: "2.2 UX Strategy",
          duration: "130 min",
          completed: false,
          subtopics: [
            "IA (Information Architecture)",
            "User flows",
            "Sitemap creation",
            "Experience mapping"
          ]
        },
        {
          id: "ui-design",
          title: "2.3 UI Design",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Layout & composition",
            "Color theory",
            "Typography",
            "Icons & illustration sets",
            "Responsive design systems"
          ]
        },
        {
          id: "prototyping",
          title: "2.4 Prototyping",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Low-fidelity wireframes",
            "High-fidelity mockups",
            "Interactive prototyping (Figma/Framer)"
          ]
        },
        {
          id: "usability-testing",
          title: "2.5 Usability Testing",
          duration: "125 min",
          completed: false,
          subtopics: [
            "A/B testing",
            "Heuristic evaluation",
            "Accessibility testing (WCAG)",
            "User feedback cycles"
          ]
        },
        {
          id: "ui-ux-documentation",
          title: "2.6 UI/UX Documentation",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Style guides",
            "Design systems",
            "Pattern libraries",
            "Developer handoff"
          ]
        }
      ]
    },
    {
      id: "product-design",
      title: "MODULE 3 — Product Design",
      topics: [
        {
          id: "product-strategy",
          title: "3.1 Product Strategy",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Market research",
            "Product-market fit",
            "Defining MVP",
            "Business model basics"
          ]
        },
        {
          id: "product-thinking",
          title: "3.2 Product Thinking",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Problem framing",
            "Value proposition",
            "Feature prioritization",
            "Roadmapping"
          ]
        },
        {
          id: "design-for-product",
          title: "3.3 Design for Product",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Requirement documents",
            "Feature specs",
            "Wireflows",
            "Interactive prototypes"
          ]
        },
        {
          id: "data-product-decisions",
          title: "3.4 Data & Product Decisions",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Metrics (DAU, MAU, conversion, churn)",
            "Product analytics tools (Mixpanel, GA4, Amplitude)",
            "Experimentation frameworks"
          ]
        },
        {
          id: "collaboration",
          title: "3.5 Collaboration",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Working with product managers",
            "Engineers & cross-functional teams",
            "Agile design workflows"
          ]
        }
      ]
    },
    {
      id: "interaction-design",
      title: "MODULE 4 — Interaction Design (IxD)",
      topics: [
        {
          id: "ixd-principles",
          title: "4.1 IxD Principles",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Affordances",
            "Feedback & response",
            "Mapping",
            "Mental models",
            "Microinteractions"
          ]
        },
        {
          id: "motion-in-interaction",
          title: "4.2 Motion in Interaction",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Easing & timing",
            "Transitions",
            "Loading states",
            "Gesture-based interaction"
          ]
        },
        {
          id: "designing-for-platforms",
          title: "4.3 Designing for Platforms",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Web interactions",
            "Mobile gestures",
            "AR/VR interactions",
            "Voice UI"
          ]
        },
        {
          id: "interaction-tooling",
          title: "4.4 Tooling",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Framer interactions",
            "ProtoPie interactions",
            "Lottie animations"
          ]
        }
      ]
    },
    {
      id: "graphic-visual-design",
      title: "MODULE 5 — Graphic & Visual Design",
      topics: [
        {
          id: "visual-design-essentials",
          title: "5.1 Visual Design Essentials",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Color psychology",
            "Layout grids",
            "Advanced typography",
            "Visual hierarchy"
          ]
        },
        {
          id: "branding-identity",
          title: "5.2 Branding & Identity",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Logo design",
            "Brand guidelines",
            "Visual identity systems",
            "Brand storytelling"
          ]
        },
        {
          id: "digital-print-media",
          title: "5.3 Digital & Print Media",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Posters, banners",
            "Social media creatives",
            "Packaging design",
            "Business cards, brochures"
          ]
        },
        {
          id: "illustration-iconography",
          title: "5.4 Illustration & Iconography",
          duration: "145 min",
          completed: false,
          subtopics: [
            "Vector illustration",
            "Icon sets",
            "Character design basics",
            "Composition & storytelling"
          ]
        },
        {
          id: "advanced-graphic-tools",
          title: "5.5 Advanced Graphic Tools",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Adobe Illustrator",
            "Photoshop",
            "Procreate"
          ]
        }
      ]
    },
    {
      id: "motion-design",
      title: "MODULE 6 — Motion Design",
      topics: [
        {
          id: "motion-principles",
          title: "6.1 Motion Principles",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Timing & spacing",
            "Ease-in, ease-out",
            "Anticipation, squash & stretch",
            "Visual rhythm"
          ]
        },
        {
          id: "motion-tools",
          title: "6.2 Tools",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Adobe After Effects",
            "Lottie animations",
            "Blender (3D motion)",
            "Cinema4D (optional)"
          ]
        },
        {
          id: "types-motion-design",
          title: "6.3 Types of Motion Design",
          duration: "130 min",
          completed: false,
          subtopics: [
            "UI animations",
            "Explainer videos",
            "Logo animations",
            "Social media motion graphics"
          ]
        },
        {
          id: "motion-workflow",
          title: "6.4 Workflow",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Storyboarding",
            "Asset preparation",
            "Scene composition",
            "Rendering & optimization"
          ]
        }
      ]
    },
    {
      id: "game-design",
      title: "MODULE 7 — Game Design",
      topics: [
        {
          id: "game-design-fundamentals",
          title: "7.1 Game Design Fundamentals",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Game design principles",
            "Player psychology",
            "Game loops",
            "Difficulty curves",
            "Feedback mechanics"
          ]
        },
        {
          id: "narrative-worldbuilding",
          title: "7.2 Narrative & Worldbuilding",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Story arcs",
            "Character development",
            "World design",
            "Dialogue & scripts"
          ]
        },
        {
          id: "level-design",
          title: "7.3 Level Design",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Environment layout",
            "Pacing",
            "Interaction zones",
            "Visual storytelling"
          ]
        },
        {
          id: "game-ui-ux",
          title: "7.4 Game UI/UX",
          duration: "125 min",
          completed: false,
          subtopics: [
            "HUD design",
            "Menus & navigation",
            "Player feedback",
            "Accessibility in games"
          ]
        },
        {
          id: "game-tools-engines",
          title: "7.5 Tools & Engines",
          duration: "145 min",
          completed: false,
          subtopics: [
            "Unity",
            "Unreal Engine",
            "Godot (optional)",
            "Figma for game UI"
          ]
        },
        {
          id: "2d-3d-asset-design",
          title: "7.6 2D/3D Asset Design (Intro)",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Sprites",
            "Textures",
            "3D modeling basics (Blender)"
          ]
        }
      ]
    },
    {
      id: "portfolio-career-development",
      title: "MODULE 8 — Portfolio & Career Development",
      topics: [
        {
          id: "design-portfolio",
          title: "8.1 Design Portfolio",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Case studies",
            "Process documentation",
            "Visual presentation"
          ]
        },
        {
          id: "professional-branding",
          title: "8.2 Professional Branding",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Resume for designers",
            "LinkedIn optimization",
            "Behance/Dribbble strategy"
          ]
        },
        {
          id: "freelance-employment-skills",
          title: "8.3 Freelance & Employment Skills",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Scoping projects",
            "Design contracts",
            "Communication & client management"
          ]
        }
      ]
    },
    {
      id: "capstone-creative-projects",
      title: "MODULE 9 — Capstone Creative Projects",
      topics: [
        {
          id: "capstone-creative-projects",
          title: "9.1 Capstone Project Development",
          duration: "480 min",
          completed: false,
          subtopics: [
            "Complete UI/UX case study (web/mobile app)",
            "Full design system",
            "Branding + identity package",
            "Motion graphics video",
            "Interactive prototype with microinteractions",
            "Game UI + level design concept",
            "Social media visual pack",
            "3D motion animation",
            "Research",
            "Concept & ideation",
            "Visual execution",
            "Usability improvements",
            "Documentation & presentation"
          ]
        }
      ]
    },
    {
      id: "project-submission",
      title: "MODULE 10 — Final Assessment: Project Submission",
      topics: [
        {
          id: "project-submission",
          title: "Final Project Submission",
          duration: "N/A",
          completed: false,
          subtopics: [
            "Submit your design & creative projects for review",
            "Ensure all design principles and accessibility requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 15, // 15% weight
    practicalExercises: 45, // 45% weight
    capstoneProjects: 40 // 40% weight
  },
  
  careerOutcomes: [
    "UI/UX Designer",
    "Product Designer",
    "Visual Designer",
    "Interaction Designer",
    "Motion Graphics Designer",
    "Game Designer",
    "Brand Designer",
    "Creative Director",
    "Design Systems Designer"
  ],
  
  technologiesCovered: [
    "Figma", "Adobe XD", "Adobe Creative Suite", "Photoshop", "Illustrator",
    "After Effects", "Blender", "Framer", "ProtoPie", "Sketch",
    "Procreate", "Unity", "Unreal Engine", "Cinema4D", "Lottie",
    "InVision", "Principle", "Mixpanel", "Google Analytics", "Amplitude"
  ]
};