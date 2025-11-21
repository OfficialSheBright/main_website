export default function Web3EssentialsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Web3 Essentials
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• What is Web3?</li>
          <li>• Wallets and addresses</li>
          <li>• Signing and transactions</li>
          <li>• RPC providers</li>
          <li>• Ethers.js, web3.js basics</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Web3?</h2>
        <p>
          Web3 refers to the decentralized internet powered by blockchains, smart contracts, and peer-to-peer networks. It enables trustless applications and user-owned data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Wallets & Addresses</h2>
        <p>
          Wallets store private keys and manage blockchain addresses. Popular wallets include MetaMask, Coinbase Wallet, and hardware wallets like Ledger.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Signing & Transactions</h2>
        <p>
          Users sign transactions with their private keys to interact with smart contracts and transfer assets. Signing ensures authenticity and security.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">RPC Providers</h2>
        <p>
          RPC (Remote Procedure Call) providers connect dApps to blockchain nodes. Examples include Infura, Alchemy, and local nodes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ethers.js & web3.js Basics</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Ethers.js: Modern, lightweight library for Ethereum interactions</li>
          <li>web3.js: Legacy library for Ethereum, widely used in dApps</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Practice sending transactions on testnets</li>
          <li>• Explore wallet features and security settings</li>
          <li>• Learn basic RPC calls with ethers.js or web3.js</li>
          <li>• Document your Web3 setup for future reference</li>
        </ul>
      </div>
    </div>
  );
}