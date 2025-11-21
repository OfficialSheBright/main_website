export default function SubstratePolkadotContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Substrate & Polkadot Development
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Substrate framework</li>
          <li>• Pallets & runtime modules</li>
          <li>• Polkadot parachains</li>
          <li>• Cross-chain messaging (XCMP)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Substrate Framework</h2>
        <p>
          Substrate is a modular blockchain development framework written in Rust. It enables rapid creation of custom blockchains with reusable runtime modules called pallets.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pallets & Runtime Modules</h2>
        <p>
          Pallets are building blocks for blockchain logic, such as balances, governance, and custom features. Developers can compose and extend pallets for unique use cases.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Polkadot Parachains</h2>
        <p>
          Polkadot connects multiple blockchains (parachains) for interoperability and shared security. Parachains are built with Substrate and communicate via the Polkadot relay chain.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cross-Chain Messaging (XCMP)</h2>
        <p>
          XCMP enables secure and efficient messaging between parachains, allowing cross-chain asset transfers and protocol interactions.
        </p>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Explore Substrate documentation and sample pallets</li>
          <li>• Experiment with parachain deployment on testnets</li>
          <li>• Study Polkadot’s relay chain and XCMP for interoperability</li>
          <li>• Document your runtime logic and cross-chain flows</li>
        </ul>
      </div>
    </div>
  );
}