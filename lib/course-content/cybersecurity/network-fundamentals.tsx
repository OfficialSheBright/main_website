export default function NetworkFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Network Fundamentals</h2>
      <p className="text-gray-600">
        Network fundamentals cover the essential concepts, protocols, and devices that enable digital communication.  
        Understanding these basics is crucial for building, securing, and troubleshooting modern networks.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Network Fundamentals?</h3>
        <p className="text-blue-700">
          A solid grasp of networking concepts is the foundation for effective cybersecurity, system administration, and IT operations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. OSI & TCP/IP Models</h3>
      <ul>
        <li>OSI Model: 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application)</li>
        <li>TCP/IP Model: 4 layers (Network Interface, Internet, Transport, Application)</li>
        <li>Helps understand how data moves through networks and where security controls apply</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Protocols</h3>
      <ul>
        <li>DNS: Domain Name System for resolving hostnames</li>
        <li>DHCP: Dynamic Host Configuration Protocol for IP assignment</li>
        <li>ARP: Address Resolution Protocol for mapping IP to MAC addresses</li>
        <li>HTTPS/SSH: Secure communication protocols</li>
        <li>VPN: Virtual Private Network for secure remote access</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Firewalls, IDS, IPS</h3>
      <ul>
        <li>Firewalls: Control incoming and outgoing network traffic</li>
        <li>IDS (Intrusion Detection System): Monitors for suspicious activity</li>
        <li>IPS (Intrusion Prevention System): Blocks detected threats in real time</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Checking network interfaces (Linux)
ip addr show
# Use this to view and troubleshoot network connections
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Network Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Network design and troubleshooting</li>
          <li>Implementing security controls</li>
          <li>Supporting secure communications</li>
          <li>Incident response and monitoring</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Network fundamentals are essential for anyone working in IT or cybersecurity.  
        Master these concepts to build, secure, and maintain robust network infrastructures.
      </p>
    </div>
  );
}