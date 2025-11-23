export default function CapstoneProjectDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Capstone Project Development</h2>
      <p className="text-gray-600">
        The capstone project is your opportunity to apply cybersecurity skills in a real-world scenario.  
        You will select a project, conduct a full assessment, and deliver professional documentation and recommendations.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Capstone Projects?</h3>
        <p className="text-blue-700">
          Capstone projects demonstrate your ability to solve complex security problems, communicate findings, and deliver actionable solutions.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Project Options</h3>
      <ul>
        <li>Full web application penetration test</li>
        <li>Bug bounty write-up</li>
        <li>Smart contract audit report</li>
        <li>Build a secure API with OAuth</li>
        <li>Real-time threat detection using SIEM</li>
        <li>Blockchain node attack simulation</li>
        <li>Malware behavior analysis lab</li>
        <li>Network intrusion detection system (IDS)</li>
        <li>Wi-Fi pentesting toolkit</li>
        <li>Cloud misconfiguration exploitation lab</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Project Workflow</h3>
      <ul>
        <li>Reconnaissance and information gathering</li>
        <li>Vulnerability discovery and analysis</li>
        <li>Exploitation and proof of concept</li>
        <li>Remediation and fix recommendations</li>
        <li>Professional reporting and documentation</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Documentation & Reporting</h3>
      <ul>
        <li>Executive summary and technical details</li>
        <li>Risk ratings and impact analysis</li>
        <li>Step-by-step findings and evidence</li>
        <li>Clear remediation guidance</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Capstone project report structure
# Project Title
## Overview
## Methodology
## Findings
## Exploitation Details
## Remediation Recommendations
## Conclusion
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Benefits of Capstone Projects</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Showcase practical cybersecurity skills</li>
          <li>Build a portfolio for employers</li>
          <li>Prepare for real-world security challenges</li>
          <li>Receive feedback from experts</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Capstone projects are the culmination of your cybersecurity learning journey.  
        Deliver a thorough, well-documented project to demonstrate your expertise and readiness for industry roles.
      </p>
    </div>
  );
}