export default function ThreatAnalysisContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Threat Analysis</h2>
      <p className="text-gray-600">
        Threat analysis is the process of identifying, evaluating, and prioritizing potential threats to information systems.  
        It helps organizations understand their risk landscape and develop effective defense strategies.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Threat Analysis?</h3>
        <p className="text-blue-700">
          Proactive threat analysis enables early detection, informed decision-making, and targeted mitigation of cyber risks.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Threat Modeling</h3>
      <ul>
        <li>Systematic approach to identifying threats and vulnerabilities</li>
        <li>Popular frameworks: STRIDE, DREAD, PASTA</li>
        <li>Helps prioritize security controls and remediation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Attack Surface Analysis</h3>
      <ul>
        <li>Mapping all possible entry points for attackers</li>
        <li>Includes network interfaces, APIs, user inputs, and third-party integrations</li>
        <li>Reduces risk by minimizing exposed assets</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Threat Intelligence Sources</h3>
      <ul>
        <li>Feeds from CTI platforms, security vendors, and open-source communities</li>
        <li>Indicators of compromise (IOCs), tactics, techniques, and procedures (TTPs)</li>
        <li>Enables timely response to emerging threats</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Risk Prioritization</h3>
      <ul>
        <li>Assess likelihood and impact of each threat</li>
        <li>Focus resources on high-risk areas</li>
        <li>Use risk matrices and scoring models</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple risk matrix in Python
threats = [
  {"name": "Phishing", "likelihood": 4, "impact": 5},
  {"name": "DDoS", "likelihood": 3, "impact": 4}
]
for t in threats:
  print(f"{t['name']}: Risk Score = {t['likelihood'] * t['impact']}")
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Threat Analysis</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Security architecture design</li>
          <li>Incident response planning</li>
          <li>Compliance and risk management</li>
          <li>Continuous security improvement</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Threat analysis is essential for understanding and mitigating cyber risks.  
        Master these techniques to build resilient systems and respond effectively to evolving threats.
      </p>
    </div>
  );
}