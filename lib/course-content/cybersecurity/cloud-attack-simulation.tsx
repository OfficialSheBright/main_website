export default function CloudAttackSimulationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Cloud Attack Simulation</h2>
      <p className="text-gray-600">
        Cloud attack simulation involves testing cloud environments for vulnerabilities and misconfigurations.  
        These exercises help organizations identify weaknesses and improve their cloud security posture.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Simulate Cloud Attacks?</h3>
        <p className="text-blue-700">
          Simulations reveal real-world risks, validate defenses, and prepare teams for incident response in cloud platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Cloud Pentesting</h3>
      <ul>
        <li>Assess cloud infrastructure for vulnerabilities</li>
        <li>Test access controls, network segmentation, and exposed services</li>
        <li>Use tools like ScoutSuite, Prowler, and Pacu</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. SSRF in Cloud Environments</h3>
      <ul>
        <li>Server-Side Request Forgery can exploit cloud metadata services</li>
        <li>Attackers may access sensitive credentials and configuration data</li>
        <li>Mitigate by restricting outbound requests and validating inputs</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Metadata Service Exploitation</h3>
      <ul>
        <li>Cloud platforms expose metadata endpoints for instance management</li>
        <li>Unprotected endpoints can leak tokens, keys, and secrets</li>
        <li>Secure by enforcing network policies and IAM roles</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Testing AWS metadata service access (Linux)
curl http://169.254.169.254/latest/meta-data/
# Review the output for sensitive information exposure
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Cloud Attack Simulation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cloud security assessments</li>
          <li>Incident response preparation</li>
          <li>Compliance validation</li>
          <li>Continuous security improvement</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Cloud attack simulation is vital for identifying and mitigating risks in cloud environments.  
        Master these techniques to ensure robust cloud security and resilience.
      </p>
    </div>
  );
}