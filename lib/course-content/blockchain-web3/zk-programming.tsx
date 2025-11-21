export default function ZkProgrammingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        ZK Programming
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• ZK circuit languages (Circom, Noir, Halo2)</li>
          <li>• Proof generation and verification</li>
          <li>• Integrating ZK proofs with smart contracts</li>
          <li>• Privacy-preserving dApps</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">ZK Circuit Languages</h2>
        <p>
          ZK circuits define computations for zero-knowledge proofs. Popular languages include Circom (JavaScript-like), Noir (Rust-inspired), and Halo2 (Rust).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Proof Generation & Verification</h2>
        <p>
          Generate proofs off-chain using circuit compilers and libraries, then verify them on-chain with smart contracts. This enables trustless validation of private computations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Integrating ZK Proofs with Smart Contracts</h2>
        <p>
          Use Solidity or Rust contracts to verify ZK proofs on-chain. This allows dApps to enforce privacy and correctness without revealing sensitive data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy-Preserving dApps</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Anonymous voting</li>
          <li>Private asset transfers</li>
          <li>On-chain identity verification</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Explore Circom and Noir for circuit development</li>
          <li>• Test proof generation and verification on testnets</li>
          <li>• Audit ZK circuits and contracts for security</li>
          <li>• Document your ZK integration and privacy guarantees</li>
        </ul>
      </div>
    </div>
  );
}