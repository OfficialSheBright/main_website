export default function SecureNetworkDesignContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Secure Network Design</h2>
      <p className="text-gray-600">
        Secure network design focuses on building resilient architectures that protect data, services, and users from cyber threats.  
        Proper design reduces attack surfaces and supports defense-in-depth strategies.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Secure Network Design?</h3>
        <p className="text-blue-700">
          Thoughtful network design prevents unauthorized access, limits damage from breaches, and supports regulatory compliance.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Load Balancers</h3>
      <ul>
        <li>Distribute traffic across multiple servers for availability and performance</li>
        <li>Can help mitigate denial-of-service (DoS) attacks</li>
        <li>Support SSL/TLS termination for secure connections</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Reverse Proxies</h3>
      <ul>
        <li>Act as intermediaries between clients and backend servers</li>
        <li>Hide internal architecture and filter malicious requests</li>
        <li>Enable caching, authentication, and access control</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. VPN Design</h3>
      <ul>
        <li>Virtual Private Networks encrypt traffic between remote users and internal resources</li>
        <li>Support secure remote access and site-to-site connectivity</li>
        <li>Require strong authentication and regular key rotation</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Secure Cloud Networking</h3>
      <ul>
        <li>Segment cloud networks using VPCs, subnets, and security groups</li>
        <li>Apply least privilege access and monitor traffic flows</li>
        <li>Integrate cloud-native firewalls and logging</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Creating a secure VPN server with OpenVPN (Linux)
sudo apt update && sudo apt install openvpn
# Configure server and client certificates for encrypted connections
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Secure Network Design</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enterprise network architecture</li>
          <li>Cloud infrastructure security</li>
          <li>Remote workforce protection</li>
          <li>Compliance with security standards</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Secure network design is essential for building robust, scalable, and resilient IT environments.  
        Master these principles to protect assets and support business operations.
      </p>
    </div>
  );
}