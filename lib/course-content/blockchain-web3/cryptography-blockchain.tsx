export default function CryptographyBlockchainContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Cryptography for Blockchain
      </h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Hashing</li>
          <li>• Digital signatures</li>
          <li>• ECDSA (Elliptic Curve Digital Signature Algorithm)</li>
          <li>• Zero-knowledge basics</li>
          <li>• Merkle proofs</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hashing</h2>
        <p>
          Hash functions convert data into fixed-size outputs. They are used for data integrity, block linking, and address generation in blockchains.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('data').digest('hex');
console.log(hash);`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Digital Signatures & ECDSA</h2>
        <p>
          Digital signatures verify the authenticity of transactions. ECDSA is widely used in blockchain for secure signing and verification.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Zero-Knowledge Basics</h2>
        <p>
          Zero-knowledge proofs allow one party to prove knowledge of information without revealing the information itself. Used for privacy and scalability.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Merkle Proofs</h2>
        <p>
          Merkle proofs efficiently verify the inclusion of data in a Merkle tree, enabling lightweight validation of blockchain data.
        </p>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• Experiment with hash functions and digital signatures</li>
          <li>• Study ECDSA and its role in blockchain security</li>
          <li>• Explore zero-knowledge proof libraries</li>
          <li>• Understand Merkle trees for efficient data verification</li>
        </ul>
      </div>
    </div>
  );
}