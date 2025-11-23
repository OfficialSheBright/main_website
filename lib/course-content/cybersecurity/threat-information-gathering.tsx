export default function ThreatInformationGatheringContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Threat Information Gathering</h2>
      <p className="text-gray-600">
        Threat information gathering is the process of collecting data about potential adversaries, attack methods, and vulnerabilities.  
        This phase is crucial for building situational awareness and preparing effective defense strategies.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Gather Threat Information?</h3>
        <p className="text-blue-700">
          Gathering threat intelligence enables organizations to anticipate attacks, understand adversary tactics, and respond proactively.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Intelligence Sources</h3>
      <ul>
        <li>Open source feeds (OSINT)</li>
        <li>Commercial threat intelligence platforms</li>
        <li>Government and industry sharing groups (ISACs)</li>
        <li>Internal logs and telemetry</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Indicators of Compromise (IOCs)</h3>
      <ul>
        <li>Artifacts observed on networks or endpoints (IP addresses, hashes, domains)</li>
        <li>Used to detect and block malicious activity</li>
        <li>Regularly updated and shared among defenders</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. TTPs (Tactics, Techniques, Procedures)</h3>
      <ul>
        <li>Patterns of adversary behavior</li>
        <li>Mapped using frameworks like MITRE ATT&CK</li>
        <li>Help predict and counter future attacks</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Automated Collection Tools</h3>
      <ul>
        <li>Tools: MISP, OpenCTI, TheHive, ThreatConnect</li>
        <li>Automate ingestion, enrichment, and sharing of threat data</li>
        <li>Integrate with SIEM and SOAR platforms</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Fetching threat intelligence feeds with curl (terminal)
curl https://threat-feed.example.com/iocs.json
# Parse and integrate IOCs into detection systems
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Threat Information Gathering</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Threat hunting and detection</li>
          <li>Incident response</li>
          <li>Security operations center (SOC) workflows</li>
          <li>Risk assessment and reporting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Threat information gathering is foundational for proactive cybersecurity.  
        Master these techniques to improve detection, response, and overall security posture.
      </p>
    </div>
  );
}