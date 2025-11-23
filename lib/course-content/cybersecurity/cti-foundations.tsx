export default function CtiFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">CTI Foundations</h2>
      <p className="text-gray-600">
        Cyber Threat Intelligence (CTI) foundations introduce the key concepts, actors, and frameworks used to understand and defend against cyber threats.  
        Mastering CTI helps organizations anticipate, detect, and respond to evolving attacks.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why CTI?</h3>
        <p className="text-blue-700">
          CTI enables proactive defense by identifying threat actors, their tactics, and the tools they use.  
          It supports decision-making and improves incident response.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Threat Actors</h3>
      <ul>
        <li>State-sponsored groups</li>
        <li>Cybercriminals</li>
        <li>Hacktivists</li>
        <li>Insider threats</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. MITRE ATT&CK Framework</h3>
      <ul>
        <li>Standardized knowledge base of adversary tactics and techniques</li>
        <li>Helps map attack patterns and improve detection</li>
        <li>Widely used for threat modeling and defense planning</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. TTPs (Tactics, Techniques & Procedures)</h3>
      <ul>
        <li>Tactics: high-level goals of an attack (e.g., initial access)</li>
        <li>Techniques: specific methods used (e.g., phishing, malware)</li>
        <li>Procedures: detailed steps and tools employed by attackers</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Mapping an attack to MITRE ATT&CK (Python)
attack = {
    "tactic": "Initial Access",
    "technique": "Phishing",
    "procedure": "Spear-phishing email with malicious attachment"
}
print(attack)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of CTI Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Threat hunting</li>
          <li>Incident response</li>
          <li>Security operations</li>
          <li>Risk assessment</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        CTI foundations are essential for understanding the threat landscape and building effective cyber defenses.  
        Master these concepts to anticipate and counter advanced attacks.
      </p>
    </div>
  );
}