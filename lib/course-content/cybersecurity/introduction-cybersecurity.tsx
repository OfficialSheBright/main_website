export default function IntroductionCybersecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Introduction to Cybersecurity</h2>
      <p className="text-gray-600">
        Cybersecurity is the practice of protecting systems, networks, and data from digital attacks.  
        Understanding the core principles and threat landscape is essential for building secure environments and defending against evolving risks.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Cybersecurity?</h3>
        <p className="text-blue-700">
          Cybersecurity safeguards sensitive information, ensures business continuity, and protects against financial and reputational damage.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. CIA Triad (Confidentiality, Integrity, Availability)</h3>
      <ul>
        <li><strong>Confidentiality:</strong> Ensuring only authorized users can access sensitive data</li>
        <li><strong>Integrity:</strong> Maintaining accuracy and trustworthiness of information</li>
        <li><strong>Availability:</strong> Guaranteeing reliable access to resources when needed</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Threats, Vulnerabilities, Exploits</h3>
      <ul>
        <li><strong>Threats:</strong> Potential causes of unwanted impact (e.g., hackers, malware)</li>
        <li><strong>Vulnerabilities:</strong> Weaknesses that can be exploited (e.g., outdated software)</li>
        <li><strong>Exploits:</strong> Methods attackers use to take advantage of vulnerabilities</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Attack Lifecycle (Kill Chain)</h3>
      <ul>
        <li>Stages: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command & Control, Actions on Objectives</li>
        <li>Understanding the lifecycle helps in detecting and disrupting attacks</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Cybersecurity Roles & Domains</h3>
      <ul>
        <li>Roles: Analyst, Engineer, Penetration Tester, Auditor, Incident Responder</li>
        <li>Domains: Network Security, Application Security, Cloud Security, Threat Intelligence, Governance & Compliance</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Checking file integrity with SHA-256 (Linux)
sha256sum important_document.pdf
# Compare the output hash to verify integrity
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Cybersecurity</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting personal and business data</li>
          <li>Securing online transactions</li>
          <li>Defending critical infrastructure</li>
          <li>Ensuring regulatory compliance</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Cybersecurity is foundational for safe digital operations.  
        Mastering its principles prepares you to defend against threats and build resilient systems.
      </p>
    </div>
  );
}