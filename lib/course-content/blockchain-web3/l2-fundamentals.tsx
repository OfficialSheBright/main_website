export default function L2FundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        L2 Fundamentals
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Rollup types: Optimistic rollups, ZK rollups</li>
          <li>• Sequencers & provers</li>
          <li>• Settlement layers</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Rollup Types</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Optimistic Rollups: Assume transactions are valid, challenge mechanism for fraud proofs.</li>
          <li>ZK Rollups: Use zero-knowledge proofs for transaction validity, faster finality and security.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sequencers & Provers</h2>
        <p>
          Sequencers order transactions in rollups, while provers generate proofs (fraud or ZK) to ensure correctness and security.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Settlement Layers</h2>
        <p>
          Settlement layers (like Ethereum) anchor rollup data and proofs, providing security and finality for L2 transactions.
        </p>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Compare optimistic and ZK rollup architectures</li>
          <li>• Explore sequencer and prover roles in L2 networks</li>
          <li>• Understand how settlement layers secure L2s</li>
          <li>• Stay updated on L2 scaling solutions and research</li>
        </ul>
      </div>
    </div>
  );
}