export default function DappArchitectureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        dApp Architecture
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• Off-chain & on-chain components</li>
          <li>• Gasless transactions</li>
          <li>• Data storage: IPFS, Arweave, Filecoin</li>
          <li>• Security for dApps</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Off-chain & On-chain Components</h2>
        <p>
          dApps combine smart contracts (on-chain) with traditional backend/frontend services (off-chain) for scalability, user experience, and data management.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Gasless Transactions</h2>
        <p>
          Gasless transactions allow users to interact with dApps without paying transaction fees directly, often using relayers or meta-transactions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Storage Solutions</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>IPFS: Decentralized file storage</li>
          <li>Arweave: Permanent data storage</li>
          <li>Filecoin: Incentivized decentralized storage</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Security for dApps</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Input validation and sanitization</li>
          <li>Smart contract audits</li>
          <li>Secure key management</li>
          <li>Monitoring and incident response</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Design modular architectures for scalability</li>
          <li>• Use decentralized storage for large files and metadata</li>
          <li>• Implement gasless UX for broader adoption</li>
          <li>• Audit both smart contracts and off-chain code</li>
        </ul>
      </div>
    </div>
  );
}