"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "cybersecurity",
      module: "project-submission",
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-8">
        
        {/* Module Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📚 Final Assessment
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrate your mastery of cybersecurity by submitting a comprehensive project that showcases your skills in securing systems, identifying vulnerabilities, and implementing best practices.
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🎯 What You&apos;ll Accomplish
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Goals:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Apply cybersecurity principles and frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Identify, assess, and mitigate security risks
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in security tools and techniques
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Create a portfolio-worthy security project
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Criteria:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  Security analysis and risk assessment (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🛡️</span>
                  Implementation of security controls (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🧪</span>
                  Testing and validation (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Documentation and presentation (25%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Requirements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🔧 Project Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Security Analysis</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Threat modeling and risk assessment</li>
                <li>• Vulnerability scanning or penetration testing</li>
                <li>• Security policy and compliance review</li>
                <li>• Documentation of findings</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Implementation</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Secure configuration and hardening</li>
                <li>• Access control and authentication</li>
                <li>• Encryption and data protection</li>
                <li>• Incident response plan (optional)</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Testing & Reporting</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Security testing and validation</li>
                <li>• Remediation of vulnerabilities</li>
                <li>• Final report with recommendations</li>
                <li>• Presentation or demo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            💡 Project Ideas & Inspiration
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vulnerability Assessment Report",
                description: "Perform a security assessment of a web application or network and document findings.",
                difficulty: "Intermediate",
                color: "blue"
              },
              {
                title: "Penetration Testing Toolkit",
                description: "Develop or use tools to identify and exploit vulnerabilities in a test environment.",
                difficulty: "Advanced", 
                color: "green"
              },
              {
                title: "Security Awareness Training Module",
                description: "Create an interactive training module for end-user security best practices.",
                difficulty: "Intermediate",
                color: "purple"
              },
              {
                title: "Incident Response Simulation",
                description: "Design and document a response plan for a simulated security incident.",
                difficulty: "Advanced",
                color: "orange"
              },
              {
                title: "Secure File Transfer System",
                description: "Build a system for encrypted file sharing and access control.",
                difficulty: "Advanced",
                color: "red"
              },
              {
                title: "Cloud Security Audit", 
                description: "Assess and improve the security posture of a cloud deployment.",
                difficulty: "Intermediate",
                color: "indigo"
              }
            ].map((idea, index) => (
              <div key={index} className={`bg-${idea.color}-50 border border-${idea.color}-200 rounded-lg p-6`}>
                <h3 className={`text-lg font-semibold text-${idea.color}-900 mb-2`}>{idea.title}</h3>
                <p className={`text-${idea.color}-700 text-sm mb-3`}>{idea.description}</p>
                <span className={`inline-block bg-${idea.color}-100 text-${idea.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                  {idea.difficulty}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>💡 Pro Tip:</strong> Choose a project that aligns with your interests and demonstrates your ability to secure real-world systems!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="cybersecurity"
          courseName="Cybersecurity"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Tools & Platforms:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://www.kali.org/" className="text-blue-600 hover:underline">Kali Linux</a> - Penetration testing OS</li>
                <li>• <a href="https://www.owasp.org/" className="text-blue-600 hover:underline">OWASP</a> - Security resources & tools</li>
                <li>• <a href="https://nmap.org/" className="text-blue-600 hover:underline">Nmap</a> - Network scanning</li>
                <li>• <a href="https://www.metasploit.com/" className="text-blue-600 hover:underline">Metasploit</a> - Exploitation framework</li>
                <li>• <a href="https://www.wireshark.org/" className="text-blue-600 hover:underline">Wireshark</a> - Network analysis</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning & Documentation:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://www.cybrary.it/" className="text-blue-600 hover:underline">Cybrary</a> - Cybersecurity courses</li>
                <li>• <a href="https://www.hackerone.com/" className="text-blue-600 hover:underline">HackerOne</a> - Bug bounty platform</li>
                <li>• <a href="https://www.sans.org/" className="text-blue-600 hover:underline">SANS Institute</a> - Security training</li>
                <li>• <a href="https://www.cisa.gov/" className="text-blue-600 hover:underline">CISA</a> - Security advisories</li>
                <li>• <a href="https://www.nist.gov/cyberframework" className="text-blue-600 hover:underline">NIST Cybersecurity Framework</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}