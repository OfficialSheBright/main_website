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

export const productProjectConfig: CourseConfig = {
  id: "product-project",
  title: "Complete Product & Project Management Course",
  description: "Master product management, technical program management, and business analysis from foundations to executive leadership with industry-level projects",
  totalHours: 220,
  difficulty: "Beginner to Advanced",
  skillLevel: "Beginner",
  targetAudience: [
    "Aspiring product managers",
    "Software engineers transitioning to PM/TPM roles",
    "Business analysts seeking advancement",
    "Consultants and project managers"
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
      id: "foundations-product-project",
      title: "MODULE 1 — Foundations of Product & Project",
      topics: [
        {
          id: "introduction-disciplines",
          title: "1.1 Introduction to Product & Project Disciplines",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Product vs Project vs Program",
            "What makes a good PM/TPM/BA",
            "Stakeholder alignment",
            "Lifecycle models: SDLC, PDLC, PLC"
          ]
        },
        {
          id: "business-technology-fundamentals",
          title: "1.2 Business & Technology Fundamentals",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Business models",
            "Revenue streams",
            "Market structure",
            "Technical literacy (APIs, Cloud, Databases, Architecture basics)"
          ]
        },
        {
          id: "tools-workflows",
          title: "1.3 Tools & Workflows",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Jira, Trello, Asana, Notion",
            "Confluence documentation",
            "Slack workflows",
            "Figma for collaboration"
          ]
        }
      ]
    },
    {
      id: "product-management",
      title: "MODULE 2 — Product Management",
      topics: [
        {
          id: "product-strategy",
          title: "2.1 Product Strategy",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Identifying problems vs solutions",
            "Product vision & mission",
            "Market & competitive analysis",
            "Product-market fit"
          ]
        },
        {
          id: "user-market-research",
          title: "2.2 User & Market Research",
          duration: "140 min",
          completed: false,
          subtopics: [
            "User personas",
            "Jobs-to-be-done (JTBD)",
            "Customer journey mapping",
            "Feedback loops",
            "Surveys & interviews"
          ]
        },
        {
          id: "product-planning",
          title: "2.3 Product Planning",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Roadmaps",
            "Prioritization frameworks",
            "RICE",
            "MoSCoW",
            "Kano model",
            "Feature specs & PRDs",
            "OKRs for product"
          ]
        },
        {
          id: "product-design-ux-collaboration",
          title: "2.4 Product Design & UX Collaboration",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Wireflows",
            "Design systems",
            "User stories",
            "Acceptance criteria (AC)"
          ]
        },
        {
          id: "product-execution",
          title: "2.5 Product Execution",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Working with engineering",
            "Agile ceremonies",
            "Sprint planning & grooming",
            "Tracking KPIs"
          ]
        },
        {
          id: "product-growth-analytics",
          title: "2.6 Product Growth & Analytics",
          duration: "145 min",
          completed: false,
          subtopics: [
            "Metrics (DAU, MAU, Churn, Activation, Retention)",
            "Funnel analysis",
            "A/B testing",
            "Cohort analysis",
            "Experimentation frameworks"
          ]
        },
        {
          id: "go-to-market",
          title: "2.7 Go-To-Market (GTM)",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Launch planning",
            "Positioning & messaging",
            "Pricing frameworks",
            "Product lifecycle & sunset strategies"
          ]
        }
      ]
    },
    {
      id: "technical-program-management",
      title: "MODULE 3 — Technical Program Management (TPM)",
      topics: [
        {
          id: "tpm-core-responsibilities",
          title: "3.1 TPM Core Responsibilities",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Engineering program ownership",
            "Cross-team alignment",
            "Technical scoping",
            "Risk management"
          ]
        },
        {
          id: "technical-architecture-basics",
          title: "3.2 Technical Architecture Basics",
          duration: "140 min",
          completed: false,
          subtopics: [
            "System design fundamentals",
            "APIs & microservices",
            "Cloud basics (AWS/GCP/Azure)",
            "Databases & caching",
            "Observability basics"
          ]
        },
        {
          id: "planning-complex-programs",
          title: "3.3 Planning Complex Programs",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Requirement breakdown",
            "Technical specs",
            "Dependency mapping",
            "Program roadmaps",
            "Creating technical PRDs"
          ]
        },
        {
          id: "execution-excellence",
          title: "3.4 Execution Excellence",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Sprint & long-cycle planning",
            "Engineering productivity tracking",
            "Running technical reviews",
            "Escalation management"
          ]
        },
        {
          id: "large-scale-systems",
          title: "3.5 Large-Scale Systems",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Distributed systems basics",
            "Performance constraints",
            "Reliability (SLO/SLI/SLA)",
            "Security basics"
          ]
        }
      ]
    },
    {
      id: "project-management-agile-scrum",
      title: "MODULE 4 — Project Management (Agile, Scrum, PMBOK)",
      topics: [
        {
          id: "pm-foundations",
          title: "4.1 PM Foundations",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Project lifecycle",
            "Triple constraint: Scope, Time, Cost",
            "Risk & issue management",
            "Stakeholder management"
          ]
        },
        {
          id: "agile-project-management",
          title: "4.2 Agile Project Management",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Agile principles",
            "Scrum roles (PO, SM, dev team)",
            "Ceremonies:",
            "Standups",
            "Sprint planning",
            "Retrospectives",
            "Reviews",
            "Backlog management",
            "Velocity & capacity planning"
          ]
        },
        {
          id: "scrum-kanban",
          title: "4.3 Scrum & Kanban",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Scrum artifacts",
            "Kanban boards",
            "Limiting WIP",
            "Continuous improvement"
          ]
        },
        {
          id: "traditional-hybrid-pm",
          title: "4.4 Traditional & Hybrid PM",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Waterfall methodologies",
            "Hybrid project models",
            "Gantt charts",
            "PMBOK knowledge areas"
          ]
        },
        {
          id: "pm-tools-software",
          title: "4.5 PM Tools & Software",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Jira advanced workflows",
            "MS Project",
            "Smartsheet",
            "ClickUp"
          ]
        }
      ]
    },
    {
      id: "business-analysis",
      title: "MODULE 5 — Business Analysis (BA)",
      topics: [
        {
          id: "ba-foundations",
          title: "5.1 BA Foundations",
          duration: "110 min",
          completed: false,
          subtopics: [
            "What is Business Analysis?",
            "Stakeholder engagement",
            "Business case creation"
          ]
        },
        {
          id: "requirements-engineering",
          title: "5.2 Requirements Engineering",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Requirements elicitation techniques",
            "User stories vs Use cases",
            "Functional vs Non-functional requirements",
            "Acceptance criteria"
          ]
        },
        {
          id: "modeling-documentation",
          title: "5.3 Modeling & Documentation",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Process modeling (BPMN)",
            "Flowcharts & system diagrams",
            "Wireframes & prototypes",
            "Requirement traceability matrix"
          ]
        },
        {
          id: "solution-evaluation",
          title: "5.4 Solution Evaluation",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Gap analysis",
            "Impact analysis",
            "Cost-benefit analysis",
            "Feasibility studies"
          ]
        },
        {
          id: "ba-in-agile",
          title: "5.5 BA in Agile",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Agile requirement cycles",
            "Story mapping",
            "Backlog refinement"
          ]
        }
      ]
    },
    {
      id: "tech-consulting",
      title: "MODULE 6 — Tech Consulting",
      topics: [
        {
          id: "consulting-basics",
          title: "6.1 Consulting Basics",
          duration: "120 min",
          completed: false,
          subtopics: [
            "How consulting firms work",
            "Delivery models (onsite/offshore/hybrid)",
            "Client management fundamentals",
            "Writing proposals & SOWs"
          ]
        },
        {
          id: "problem-solving-frameworks",
          title: "6.2 Problem-Solving Frameworks",
          duration: "130 min",
          completed: false,
          subtopics: [
            "MECE principle",
            "5 Whys",
            "Root cause analysis",
            "Porter's 5 forces",
            "SWOT analysis"
          ]
        },
        {
          id: "technical-discovery",
          title: "6.3 Technical Discovery",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Requirement workshops",
            "Business interviews",
            "Architecture assessments",
            "System audits"
          ]
        },
        {
          id: "solution-blueprinting",
          title: "6.4 Solution Blueprinting",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Architecture diagrams",
            "Data flow diagrams",
            "Technology recommendations",
            "Integration strategy"
          ]
        },
        {
          id: "communication-presentation",
          title: "6.5 Communication & Presentation",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Executive communication",
            "Stakeholder presentations",
            "Creating pitch decks",
            "Documentation best practices"
          ]
        }
      ]
    },
    {
      id: "tools-frameworks-certifications",
      title: "MODULE 7 — Tools, Frameworks & Certifications",
      topics: [
        {
          id: "product-tools",
          title: "7.1 Product Tools",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Figma",
            "Mixpanel / Amplitude",
            "Notion",
            "Productboard"
          ]
        },
        {
          id: "pm-tools-advanced",
          title: "7.2 PM Tools",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Jira advanced",
            "MS Project",
            "Gantt tools"
          ]
        },
        {
          id: "certifications-optional",
          title: "7.3 Certifications (Optional)",
          duration: "120 min",
          completed: false,
          subtopics: [
            "PMP",
            "CSM / PSM",
            "SAFe",
            "PMI-ACP",
            "CBAP",
            "AIPMM",
            "Strategy PM certifications"
          ]
        }
      ]
    },
    {
      id: "leadership-communication",
      title: "MODULE 8 — Leadership & Communication",
      topics: [
        {
          id: "soft-skills-pm-tpm-ba",
          title: "8.1 Soft Skills for PM/TPM/BA",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Leadership styles",
            "Negotiation",
            "Conflict resolution",
            "Stakeholder handling"
          ]
        },
        {
          id: "communication-mastery",
          title: "8.2 Communication Mastery",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Writing clear specs",
            "Storytelling for technical audiences",
            "Executive reporting",
            "Running meetings effectively"
          ]
        }
      ]
    },
    {
      id: "capstone-projects",
      title: "MODULE 9 — Capstone Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "9.1 Capstone Project Development",
          duration: "400 min",
          completed: false,
          subtopics: [
            "Full Product Case Study (Research → PRD → Design → Metrics)",
            "Complete Agile Project Plan (Jira setup + roadmap + Sprints)",
            "Technical Program Execution Plan",
            "Business Requirements Document (BRD)",
            "Solution Architecture Proposal",
            "Strategy & Consulting Presentation Deck",
            "Product analytics dashboard with experiments",
            "GTM launch strategy",
            "Discovery",
            "Documentation",
            "Planning",
            "Execution",
            "Presentation"
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
            "Submit your product & project management projects for review",
            "Ensure all business and technical requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 20, // 20% weight
    practicalExercises: 40, // 40% weight
    capstoneProjects: 40 // 40% weight
  },
  
  careerOutcomes: [
    "Product Manager",
    "Technical Program Manager",
    "Business Analyst",
    "Project Manager",
    "Scrum Master",
    "Product Owner",
    "Strategy Consultant",
    "Program Manager",
    "Solutions Architect"
  ],
  
  technologiesCovered: [
    "Jira", "Confluence", "Figma", "Notion", "Trello", "Asana",
    "Microsoft Project", "Smartsheet", "ClickUp", "Mixpanel",
    "Amplitude", "Google Analytics", "Productboard", "Slack",
    "Miro", "Lucidchart", "Balsamiq", "InVision", "Tableau"
  ]
};