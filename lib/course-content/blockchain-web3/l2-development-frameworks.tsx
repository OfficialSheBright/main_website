export default function L2DevelopmentFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        L2 Development Frameworks
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• zkSync</li>
          <li>• Polygon zkEVM</li>
          <li>• StarkNet</li>
          <li>• Arbitrum Nitro</li>
          <li>• Optimism Bedrock</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">zkSync</h2>
        <p>
          zkSync is a Layer-2 scaling solution using zero-knowledge proofs for fast, low-cost transactions. It supports EVM-compatible smart contracts and native account abstraction.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Polygon zkEVM</h2>
        <p>
          Polygon zkEVM provides EVM compatibility with zk-rollup security, enabling developers to deploy existing Ethereum contracts with minimal changes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">StarkNet</h2>
        <p>
          StarkNet is a permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum, using Cairo for smart contract development.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Arbitrum Nitro & Optimism Bedrock</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Arbitrum Nitro: Optimized rollup architecture for high throughput and low fees</li>
          <li>Optimism Bedrock: Modular, minimal, and EVM-equivalent rollup framework</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Explore documentation and SDKs for each framework</li>
          <li>• Test smart contracts on L2 testnets before mainnet deployment</li>
          <li>• Compare performance and security trade-offs</li>
          <li>• Stay updated on new features and protocol upgrades</li>
        </ul>
      </div>
    </div>
  );
}