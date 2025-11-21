export default function Web3FrontendContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Web3 Frontend
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• Connecting dApps to wallets</li>
          <li>• Transaction signing and sending</li>
          <li>• Reading blockchain data</li>
          <li>• UI frameworks for Web3 (wagmi, RainbowKit, web3modal)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Connecting dApps to Wallets</h2>
        <p>
          Use libraries like <code>wagmi</code>, <code>web3modal</code>, or <code>RainbowKit</code> to connect your frontend to user wallets (MetaMask, WalletConnect, etc.).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction Signing & Sending</h2>
        <p>
          Prompt users to sign transactions and messages using their wallet. Use <code>ethers.js</code> or <code>web3.js</code> for blockchain interactions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reading Blockchain Data</h2>
        <p>
          Fetch on-chain data (balances, contract state, events) using RPC providers and display it in your dApp’s UI.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">UI Frameworks for Web3</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>wagmi: React hooks for Ethereum</li>
          <li>RainbowKit: Wallet UI components</li>
          <li>web3modal: Multi-wallet connection modal</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Test wallet connections on multiple browsers</li>
          <li>• Handle transaction errors gracefully</li>
          <li>• Keep UI responsive to blockchain state changes</li>
          <li>• Document integration steps for future reference</li>
        </ul>
      </div>
    </div>
  );
}