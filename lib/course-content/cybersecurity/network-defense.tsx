export default function NetworkDefenseContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Network Defense</h2>
      <p className="text-gray-600">
        Network defense involves implementing strategies and technologies to protect networks from attacks and unauthorized access.  
        Effective defense mechanisms help organizations detect, prevent, and respond to threats in real time.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Network Defense?</h3>
        <p className="text-blue-700">
          Proactive network defense reduces risk, limits damage from breaches, and ensures business continuity.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Network Segmentation</h3>
      <ul>
        <li>Dividing networks into isolated segments to limit lateral movement</li>
        <li>Protects sensitive resources and reduces attack surface</li>
        <li>Common methods: VLANs, firewalls, access controls</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. SIEM Systems (Splunk, ELK, QRadar)</h3>
      <ul>
        <li>Security Information and Event Management platforms aggregate and analyze logs</li>
        <li>Enable real-time threat detection and incident response</li>
        <li>Automate alerts and reporting for suspicious activities</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Zero Trust Architecture</h3>
      <ul>
        <li>Assumes no implicit trust within the network</li>
        <li>Requires continuous verification of users and devices</li>
        <li>Limits access based on identity, context, and risk</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Endpoint Security (EDR/XDR)</h3>
      <ul>
        <li>Endpoint Detection and Response (EDR) monitors and protects devices</li>
        <li>Extended Detection and Response (XDR) integrates data across endpoints, networks, and cloud</li>
        <li>Helps detect, investigate, and remediate threats</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Viewing network segmentation with VLANs (Linux)
ip link show
# Use VLAN configuration tools to segment traffic
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Network Defense</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enterprise network protection</li>
          <li>Incident detection and response</li>
          <li>Compliance with security standards</li>
          <li>Reducing risk of lateral movement</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Network defense is essential for maintaining secure and resilient IT environments.  
        Master these strategies to protect assets and respond effectively to cyber threats.
      </p>
    </div>
  );
}