export default function WalletInfrastructureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Wallet Infrastructure
      </h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Wallet types: custodial, non-custodial, smart contract wallets</li>
          <li>• Account abstraction (ERC-4337)</li>
          <li>• Multi-chain wallet support</li>
          <li>• Security and key management</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Wallet Types</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Custodial: Managed by third parties (e.g., exchanges)</li>
          <li>Non-custodial: Users control their own keys (e.g., MetaMask, Ledger)</li>
          <li>Smart contract wallets: Programmable wallets with custom logic (e.g., Safe, Argent)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Account Abstraction (ERC-4337)</h2>
        <p>
          Account abstraction enables smart contract wallets to handle transactions, signatures, and custom logic, improving UX and security. ERC-4337 standardizes this approach for EVM chains.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Multi-Chain Wallet Support</h2>
        <p>
          Modern wallets support multiple blockchains, allowing users to manage assets across Ethereum, Solana, Polygon, and more from a single interface.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Security & Key Management</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Seed phrases and private key storage</li>
          <li>Hardware wallets for enhanced security</li>
          <li>Multi-signature wallets for shared control</li>
          <li>Recovery mechanisms and social recovery</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• Use hardware wallets for large balances</li>
          <li>• Explore account abstraction for advanced wallet features</li>
          <li>• Document wallet recovery and backup procedures</li>
          <li>• Audit wallet smart contracts for vulnerabilities</li>
        </ul>
      </div>
    </div>
  );
}