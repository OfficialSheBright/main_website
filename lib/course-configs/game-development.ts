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

export const gameDevelopmentConfig: CourseConfig = {
  id: "game-development",
  title: "Complete Game Development Course",
  description: "Master game development from fundamentals to professional production with Unity, Unreal Engine, 3D modeling, and industry-level game projects",
  totalHours: 300,
  difficulty: "Beginner to Advanced",
  skillLevel: "Beginner",
  targetAudience: [
    "Aspiring game developers",
    "Software developers entering game industry",
    "Artists transitioning to game development",
    "Students pursuing game development careers"
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
      id: "fundamentals-game-development",
      title: "MODULE 1 — Fundamentals of Game Development",
      topics: [
        {
          id: "game-design-basics",
          title: "1.1 Game Design Basics",
          duration: "140 min",
          completed: false,
          subtopics: [
            "What makes games fun (gameplay loops)",
            "Player psychology & motivation",
            "Game mechanics vs dynamics vs aesthetics",
            "Interaction patterns",
            "Narrative & worldbuilding"
          ]
        },
        {
          id: "game-development-foundations",
          title: "1.2 Game Development Foundations",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Game engines overview (Unity, Unreal, Godot)",
            "2D vs 3D",
            "Scenes, assets, prefabs",
            "Physics basics",
            "Rendering basics"
          ]
        },
        {
          id: "programming-for-games",
          title: "1.3 Programming for Games",
          duration: "150 min",
          completed: false,
          subtopics: [
            "C# for Unity",
            "C++ for Unreal",
            "OOP concepts in game dev",
            "Event systems & scripting patterns",
            "Coroutines, async tasks"
          ]
        }
      ]
    },
    {
      id: "unity-game-development",
      title: "MODULE 2 — Unity Game Development",
      topics: [
        {
          id: "unity-essentials",
          title: "2.1 Unity Essentials",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Unity Editor interface",
            "GameObjects & components",
            "Prefabs",
            "Scenes & transitions",
            "Lighting & shadows"
          ]
        },
        {
          id: "csharp-scripting",
          title: "2.2 C# Scripting",
          duration: "160 min",
          completed: false,
          subtopics: [
            "MonoBehaviour lifecycle",
            "Input handling",
            "Physics & collisions",
            "ScriptableObjects",
            "Animation scripting"
          ]
        },
        {
          id: "2d-game-development",
          title: "2.3 2D Game Development",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Sprite animation",
            "Tilemaps",
            "2D physics",
            "Parallax scrolling",
            "UI overlays for 2D games"
          ]
        },
        {
          id: "3d-game-development-unity",
          title: "2.4 3D Game Development",
          duration: "170 min",
          completed: false,
          subtopics: [
            "3D models & materials",
            "Rigidbodies, colliders",
            "Navigation mesh & AI",
            "Character controllers",
            "Cinemachine camera systems"
          ]
        },
        {
          id: "graphics-optimization-unity",
          title: "2.5 Graphics & Optimization",
          duration: "140 min",
          completed: false,
          subtopics: [
            "URP / HDRP pipelines",
            "Post-processing effects",
            "Shader basics (Shader Graph)",
            "Profiling & optimization"
          ]
        },
        {
          id: "multiplayer-networking-unity",
          title: "2.6 Multiplayer & Networking",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Unity Netcode",
            "Mirror / Photon",
            "Matchmaking",
            "Real-time synchronization",
            "Server-authoritative architecture"
          ]
        },
        {
          id: "unity-deployment",
          title: "2.7 Unity Deployment",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Windows, Mac",
            "iOS, Android",
            "WebGL",
            "Console deploy basics"
          ]
        }
      ]
    },
    {
      id: "unreal-engine-development",
      title: "MODULE 3 — Unreal Engine Development",
      topics: [
        {
          id: "unreal-engine-essentials",
          title: "3.1 Unreal Engine Essentials",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Editor overview",
            "Blueprints visual scripting",
            "Actors, components, Pawns, Controllers",
            "World Outliner & Level Editor"
          ]
        },
        {
          id: "cpp-unreal-engine",
          title: "3.2 C++ for Unreal Engine",
          duration: "160 min",
          completed: false,
          subtopics: [
            "UE class structure",
            "UObject system",
            "Memory management",
            "Gameplay framework"
          ]
        },
        {
          id: "3d-game-development-unreal",
          title: "3.3 3D Game Development",
          duration: "170 min",
          completed: false,
          subtopics: [
            "Materials & shaders",
            "Niagara VFX",
            "Physics simulation",
            "Lighting systems",
            "High-end rendering"
          ]
        },
        {
          id: "animation-systems-unreal",
          title: "3.4 Animation Systems",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Animation Blueprint",
            "Blend spaces",
            "Control rigs",
            "Skeletal mesh animation"
          ]
        },
        {
          id: "ai-behavior-trees",
          title: "3.5 AI & Behavior Trees",
          duration: "140 min",
          completed: false,
          subtopics: [
            "NavMesh",
            "Behavior tree nodes",
            "AI perception system"
          ]
        },
        {
          id: "multiplayer-networking-unreal",
          title: "3.6 Multiplayer & Networking",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Replication",
            "RPC calls",
            "Session management",
            "Server-client setup"
          ]
        },
        {
          id: "unreal-deployment",
          title: "3.7 Unreal Deployment",
          duration: "130 min",
          completed: false,
          subtopics: [
            "PC",
            "Mobile",
            "Console builds",
            "Virtual production workflows"
          ]
        }
      ]
    },
    {
      id: "metaverse-development",
      title: "MODULE 4 — Metaverse Development",
      topics: [
        {
          id: "metaverse-foundations",
          title: "4.1 Metaverse Foundations",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Definitions (virtual worlds, persistent identity)",
            "Blockchain integration (NFTs, tokens)",
            "Interoperability"
          ]
        },
        {
          id: "world-building",
          title: "4.2 World-Building",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Creating open virtual environments",
            "Multiplayer worlds",
            "Social interaction design"
          ]
        },
        {
          id: "avatar-systems",
          title: "4.3 Avatar Systems",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Customization systems",
            "Motion capture basics",
            "Expression & gesture tracking"
          ]
        },
        {
          id: "networking-realtime-systems",
          title: "4.4 Networking & Real-Time Systems",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Low-latency architecture",
            "Voice chat integration",
            "Physics sync",
            "Spatial audio"
          ]
        },
        {
          id: "metaverse-tools-frameworks",
          title: "4.5 Tools & Frameworks",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Unity Metaverse SDKs",
            "Unreal Metaverse workflows",
            "Web-based metaverse (Three.js, WebXR)",
            "Spatial.io, VRChat SDK"
          ]
        },
        {
          id: "vr-ar-development",
          title: "4.6 VR/AR Development",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Oculus SDK",
            "OpenXR",
            "ARKit / ARCore",
            "XR interaction toolkit"
          ]
        }
      ]
    },
    {
      id: "3d-modeling-animation",
      title: "MODULE 5 — 3D Modeling & Animation (Blender, Maya)",
      topics: [
        {
          id: "blender-basics",
          title: "5.1 Blender Basics",
          duration: "140 min",
          completed: false,
          subtopics: [
            "UI & navigation",
            "Mesh editing",
            "Modifiers",
            "Sculpting basics"
          ]
        },
        {
          id: "3d-modeling-blender",
          title: "5.2 3D Modeling",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Hard-surface modeling",
            "Organic modeling",
            "Topology & retopology",
            "UV unwrapping"
          ]
        },
        {
          id: "texturing-materials-blender",
          title: "5.3 Texturing & Materials",
          duration: "130 min",
          completed: false,
          subtopics: [
            "PBR workflows",
            "Substance Painter integration",
            "Node-based material creation"
          ]
        },
        {
          id: "animation-blender",
          title: "5.4 Animation",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Keyframing",
            "Rigging",
            "Weight painting",
            "Inverse kinematics",
            "Camera animation"
          ]
        },
        {
          id: "rendering-blender",
          title: "5.5 Rendering",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Cycles vs Eevee",
            "Lighting setups",
            "Render optimization"
          ]
        },
        {
          id: "maya-essentials",
          title: "5.6 Maya Essentials",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Modeling tools",
            "NURBS modeling",
            "Animation & rigging",
            "FX & dynamics (fluids, cloth, particles)"
          ]
        },
        {
          id: "professional-pipeline-maya",
          title: "5.7 Professional Pipeline",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Retargeting",
            "Motion capture",
            "Game-ready asset export"
          ]
        }
      ]
    },
    {
      id: "game-audio-design",
      title: "MODULE 6 — Game Audio Design",
      topics: [
        {
          id: "audio-fundamentals",
          title: "6.1 Audio Fundamentals",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Sound design",
            "Music selection",
            "Audio mixing"
          ]
        },
        {
          id: "audio-implementation",
          title: "6.2 Implementation",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Unity Audio Mixer",
            "Unreal Sound Cues",
            "Spatial audio for VR/AR"
          ]
        }
      ]
    },
    {
      id: "game-production-publishing",
      title: "MODULE 7 — Game Production & Publishing",
      topics: [
        {
          id: "production-workflow",
          title: "7.1 Production Workflow",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Agile for game teams",
            "Level design documentation",
            "Asset management"
          ]
        },
        {
          id: "monetization",
          title: "7.2 Monetization",
          duration: "120 min",
          completed: false,
          subtopics: [
            "In-app purchase systems",
            "Ads integration",
            "Battle pass systems"
          ]
        },
        {
          id: "game-marketing",
          title: "7.3 Game Marketing",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Trailer creation",
            "Community building",
            "Steam, Play Store, App Store publishing"
          ]
        }
      ]
    },
    {
      id: "optimization-performance",
      title: "MODULE 8 — Optimization & Performance",
      topics: [
        {
          id: "rendering-optimization",
          title: "8.1 Rendering Optimization",
          duration: "120 min",
          completed: false,
          subtopics: [
            "LOD systems",
            "Occlusion culling",
            "GPU profiling"
          ]
        },
        {
          id: "cpu-optimization",
          title: "8.2 CPU Optimization",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Physics budget",
            "Multi-threading",
            "Memory management"
          ]
        }
      ]
    },
    {
      id: "capstone-game-projects",
      title: "MODULE 9 — Capstone Game Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "9.1 Capstone Project Development",
          duration: "600 min",
          completed: false,
          subtopics: [
            "2D platformer",
            "3D action RPG",
            "Open-world exploration game",
            "Multiplayer FPS",
            "Unreal cinematic experience",
            "Full metaverse environment",
            "VR/AR immersive experience",
            "Game with custom character animations",
            "3D modeling + playable demo project",
            "Game design document (GDD)",
            "Mechanics implementation",
            "Art + animation",
            "Sound design",
            "Testing & optimization",
            "Publishing"
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
            "Submit your game development projects for review",
            "Ensure all gameplay and technical requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 10, // 10% weight
    practicalExercises: 40, // 40% weight
    capstoneProjects: 50 // 50% weight
  },
  
  careerOutcomes: [
    "Game Developer",
    "Unity Developer",
    "Unreal Engine Developer",
    "3D Artist",
    "Game Designer",
    "Technical Artist",
    "VR/AR Developer",
    "Metaverse Developer",
    "Game Audio Designer",
    "Indie Game Developer"
  ],
  
  technologiesCovered: [
    "Unity", "Unreal Engine", "C#", "C++", "Blender", "Maya",
    "Substance Painter", "Photoshop", "Visual Studio", "Git",
    "Unity Netcode", "Photon", "Mirror", "Oculus SDK", "ARKit",
    "ARCore", "Three.js", "WebXR", "Steam SDK", "Mobile SDKs"
  ]
};