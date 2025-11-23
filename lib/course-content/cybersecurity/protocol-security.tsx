export default function ProtocolSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Protocol Security</h2>
      <p className="text-gray-600">
        Protocol security focuses on protecting the underlying mechanisms that enable blockchain networks to operate.  
        Securing protocols is essential for maintaining trust, preventing attacks, and ensuring the reliability of decentralized systems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Protocol Security?</h3>
        <p className="text-blue-700">
          Weaknesses in protocol design or implementation can lead to large-scale attacks, loss of funds, and network instability.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Layer 1 & Layer 2 Security</h3>
      <ul>
        <li>Layer 1: Base blockchain protocol (e.g., Ethereum, Bitcoin)</li>
        <li>Layer 2: Scalability solutions (e.g., rollups, payment channels)</li>
        <li>Security challenges: consensus attacks, data availability, cross-chain risks</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Validator & Node Security</h3>
      <ul>
        <li>Protecting validator keys and node infrastructure</li>
        <li>Mitigating risks of slashing, downtime, and targeted attacks</li>
        <li>Best practices: hardware security modules, regular updates, network segmentation</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. MEV & Frontrunning</h3>
      <ul>
        <li>MEV (Maximal Extractable Value): Profiting from transaction ordering and manipulation</li>
        <li>Frontrunning: Exploiting knowledge of pending transactions for financial gain</li>
        <li>Mitigations: fair ordering protocols, encrypted mempools, monitoring tools</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Securing a validator node (Linux)
sudo apt update && sudo apt upgrade
# Use firewalls and restrict SSH access to trusted IPs
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Protocol Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Blockchain infrastructure protection</li>
          <li>Validator and node operations</li>
          <li>Designing secure Layer 2 solutions</li>
          <li>Preventing financial manipulation and attacks</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Protocol security is vital for the stability and trustworthiness of blockchain networks.  
        Master these concepts to safeguard decentralized systems and prevent large-scale exploits.
      </p>
    </div>
  );
}