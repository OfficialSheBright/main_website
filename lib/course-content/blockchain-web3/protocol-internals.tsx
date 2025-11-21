export default function ProtocolInternalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Protocol Internals
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• State transitions</li>
          <li>• Consensus implementation</li>
          <li>• Peer-to-peer networking</li>
          <li>• Gas metering</li>
          <li>• Virtual machines (EVM, SVM, WASM)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">State Transitions</h2>
        <p>
          Blockchains update their global state through transactions and smart contract execution. State transitions are validated and recorded in blocks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Consensus Implementation</h2>
        <p>
          Consensus algorithms (PoW, PoS, BFT) ensure agreement on the blockchain state among distributed nodes, preventing double-spending and forks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Peer-to-Peer Networking</h2>
        <p>
          Nodes communicate via P2P protocols to propagate transactions, blocks, and consensus messages, maintaining network decentralization and resilience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Gas Metering</h2>
        <p>
          Gas measures computational resources used by transactions and smart contracts. It prevents abuse and incentivizes efficient code execution.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Virtual Machines</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>EVM: Ethereum Virtual Machine for Solidity contracts</li>
          <li>SVM: Solana Virtual Machine for Rust programs</li>
          <li>WASM: WebAssembly for cross-chain smart contracts</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Study protocol source code for deeper understanding</li>
          <li>• Compare consensus mechanisms and their trade-offs</li>
          <li>• Experiment with node networking and custom VM logic</li>
          <li>• Monitor gas usage and optimize smart contracts</li>
        </ul>
      </div>
    </div>
  );
}