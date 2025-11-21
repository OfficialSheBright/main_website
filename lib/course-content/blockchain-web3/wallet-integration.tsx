export default function WalletIntegrationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Wallet Integration
      </h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-green-700 space-y-2">
          <li>• MetaMask, WalletConnect, Coinbase Wallet</li>
          <li>• Connecting dApps to wallets</li>
          <li>• Transaction signing</li>
          <li>• Handling network changes</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Wallets</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>MetaMask: Browser extension for Ethereum and EVM chains</li>
          <li>WalletConnect: Protocol for connecting mobile wallets to dApps</li>
          <li>Coinbase Wallet: Mobile and browser wallet for multiple chains</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Connecting dApps to Wallets</h2>
        <p>
          Use wallet SDKs and libraries (ethers.js, web3.js, wagmi) to connect your dApp to user wallets, enabling authentication and blockchain interactions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction Signing</h2>
        <p>
          Wallets sign transactions and messages for users, ensuring security and non-repudiation. Always prompt users to review transaction details before signing.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Handling Network Changes</h2>
        <p>
          Detect and handle wallet network changes to ensure your dApp works correctly across different blockchains and testnets.
        </p>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• Support multiple wallets for broader user access</li>
          <li>• Handle wallet connection errors gracefully</li>
          <li>• Prompt users to switch networks when needed</li>
          <li>• Document wallet integration steps for your dApp</li>
        </ul>
      </div>
    </div>
  );
}