export default function BlockchainFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Blockchain Fundamentals</h2>
      <p className="text-gray-600">
        Blockchain fundamentals cover the core concepts behind distributed ledgers, cryptographic security, and consensus mechanisms.  
        Understanding these principles is essential for building and securing blockchain-based applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Blockchain Fundamentals?</h3>
        <p className="text-blue-700">
          Grasping blockchain basics helps you understand how data integrity, transparency, and security are achieved in decentralized systems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Cryptographic Hash Functions</h3>
      <ul>
        <li>Hash functions generate fixed-size outputs from variable-size inputs</li>
        <li>Used for data integrity, digital signatures, and block linking</li>
        <li>Examples: SHA-256, Keccak</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Merkle Trees</h3>
      <ul>
        <li>Hierarchical structure for efficient and secure verification of data</li>
        <li>Enables quick validation of large datasets</li>
        <li>Used in blockchains to verify transactions</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Consensus Mechanisms</h3>
      <ul>
        <li>Protocols for agreeing on the state of the blockchain</li>
        <li>Types: Proof of Work (PoW), Proof of Stake (PoS), Delegated PoS (DPoS)</li>
        <li>Ensure network security and prevent double-spending</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Wallets & Key Management</h3>
      <ul>
        <li>Wallets store private/public keys for blockchain access</li>
        <li>Key management is critical for security and asset protection</li>
        <li>Types: hardware, software, custodial, non-custodial</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Generating a SHA-256 hash in Python
import hashlib
data = "blockchain security"
hash = hashlib.sha256(data.encode()).hexdigest()
print(hash)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Blockchain Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cryptocurrency networks</li>
          <li>Supply chain tracking</li>
          <li>Decentralized identity</li>
          <li>Secure voting systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Blockchain fundamentals are the foundation for secure, transparent, and decentralized applications.  
        Master these concepts to build and audit robust blockchain solutions.
      </p>
    </div>
  );
}