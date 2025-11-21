export default function BuildingZkEnabledDappsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Building ZK-Enabled dApps
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Proof generation</li>
          <li>• On-chain verifiers</li>
          <li>• Privacy-preserving applications (mixers, anonymous voting)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Proof Generation</h2>
        <p>
          Zero-knowledge proofs (ZKPs) allow users to prove knowledge of information without revealing the information itself. Tools like Circom, Noir, and Halo2 are used to build ZK circuits and generate proofs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">On-Chain Verifiers</h2>
        <p>
          Smart contracts can verify ZK proofs on-chain, enabling trustless validation of private computations. Verifiers are often written in Solidity or Rust and deployed to EVM or WASM chains.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy-Preserving Applications</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Mixers for private transactions</li>
          <li>Anonymous voting systems</li>
          <li>Private asset transfers</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Explore Circom and Noir for ZK circuit development</li>
          <li>• Test proof verification on testnets before mainnet deployment</li>
          <li>• Study privacy use cases and regulatory considerations</li>
          <li>• Audit ZK-enabled contracts for security and correctness</li>
        </ul>
      </div>
    </div>
  );
}