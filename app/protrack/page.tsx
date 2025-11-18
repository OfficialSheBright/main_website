"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

const learningPaths = [
  {
    id: "web-development",
    title: "Complete Web Development",
    description: "Master frontend and backend development with hands-on projects",
    duration: "30 hours",
    modules: 6,
    topics: 24,
    difficulty: "Beginner",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases"],
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "mobile-development", 
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications",
    duration: "35 hours",
    modules: 8,
    topics: 32,
    difficulty: "Intermediate",
    skills: ["Android", "iOS", "React Native", "Flutter", "Kotlin"],
    color: "from-green-600 to-emerald-700"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning fundamentals",
    duration: "40 hours", 
    modules: 10,
    topics: 40,
    difficulty: "Advanced",
    skills: ["Python", "TensorFlow", "Neural Networks", "Data Science"],
    color: "from-purple-600 to-violet-700"
  },
  {
    id: "data-cloud",
    title: "Data & Cloud Engineering", 
    description: "Big data processing and cloud infrastructure",
    duration: "38 hours",
    modules: 9,
    topics: 36,
    difficulty: "Intermediate",
    skills: ["AWS", "Azure", "Big Data", "Kubernetes", "Data Pipelines"],
    color: "from-orange-600 to-red-700"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Engineering",
    description: "Security engineering and ethical hacking",
    duration: "32 hours",
    modules: 7, 
    topics: 28,
    difficulty: "Advanced",
    skills: ["Network Security", "Penetration Testing", "Cryptography"],
    color: "from-red-600 to-pink-700"
  },
  {
    id: "blockchain-web3",
    title: "Blockchain & Web3",
    description: "Decentralized applications and smart contracts", 
    duration: "36 hours",
    modules: 8,
    topics: 32,
    difficulty: "Advanced",
    skills: ["Solidity", "DeFi", "Smart Contracts", "dApps"],
    color: "from-yellow-600 to-amber-700"
  }
];

export default function ProTrackDashboard() {
  const [ loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Learning Paths
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Master comprehensive tech skills across all major domains with industry-expert guidance
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-lg opacity-90">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Learning Paths</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Learning Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each path is designed to take you from beginner to job-ready professional with hands-on projects and real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path) => (
            <div key={path.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${path.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    path.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    path.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  } bg-opacity-20 text-white`}>
                    {path.difficulty}
                  </span>
                  <span className="text-sm opacity-90">{path.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-sm opacity-90">{path.description}</p>
              </div>

              {/* Course Details */}
              <div className="p-6">
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{path.modules}</div>
                    <div className="text-sm text-gray-600">Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{path.topics}</div>
                    <div className="text-sm text-gray-600">Topics</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Skills You&apos;ll Learn</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href={`/protrack/${path.id}`}
                  className={`w-full bg-gradient-to-r ${path.color} text-white py-3 px-6 rounded-lg font-semibold text-center block hover:shadow-lg transition-all duration-200 group-hover:scale-105`}
                >
                  Start Learning Path
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Path to Choose?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Take our free skills assessment to get personalized learning recommendations based on your goals and experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/protrack/assessment"
              className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Take Free Assessment
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-200"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}