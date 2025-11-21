export default function BuildingCustomBlockchainContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Building a Custom Blockchain
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Using Substrate for blockchain development</li>
          <li>• Custom pallets and runtime modules</li>
          <li>• Chain specification and configuration</li>
          <li>• Runtime upgrades and governance</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Substrate Framework</h2>
        <p>
          Substrate is a modular framework for building blockchains in Rust. It provides tools for creating custom logic, consensus, and runtime modules (pallets).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Custom Pallets</h2>
        <p>
          Pallets are reusable runtime modules that define blockchain logic. You can create custom pallets for features like tokens, governance, oracles, and more.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Chain Specification</h2>
        <p>
          The chain specification defines the initial state, network parameters, and configuration for your blockchain. It includes genesis block data and consensus settings.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Runtime Upgrades</h2>
        <p>
          Substrate supports on-chain runtime upgrades, allowing you to update blockchain logic without hard forks. Governance mechanisms can control upgrades and changes.
        </p>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Explore Substrate documentation and sample projects</li>
          <li>• Modularize your blockchain logic with pallets</li>
          <li>• Test runtime upgrades in a local environment</li>
          <li>• Document your chain specification and governance model</li>
        </ul>
      </div>
    </div>
  );
}