export default function WalletKeySecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Wallet Key Security
      </h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Private key management</li>
          <li>• Seed phrases and backups</li>
          <li>• Hardware wallets</li>
          <li>• Multi-signature wallets</li>
          <li>• Social recovery mechanisms</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Private Key Management</h2>
        <p>
          Private keys control access to blockchain assets. Never share your private key and avoid storing it in plain text or online services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Seed Phrases & Backups</h2>
        <p>
          Seed phrases (mnemonics) allow wallet recovery. Store them securely offline and create multiple backups in safe locations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hardware Wallets</h2>
        <p>
          Hardware wallets (e.g., Ledger, Trezor) store private keys offline, protecting them from malware and phishing attacks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Multi-Signature Wallets</h2>
        <p>
          Multi-signature wallets require multiple approvals for transactions, reducing the risk of single-point failures and unauthorized access.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Social Recovery Mechanisms</h2>
        <p>
          Social recovery allows trusted contacts to help restore wallet access if keys or seed phrases are lost, improving user safety.
        </p>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• Use hardware wallets for large balances</li>
          <li>• Store seed phrases offline and never share them</li>
          <li>• Consider multi-signature wallets for team or organization funds</li>
          <li>• Set up social recovery for added safety</li>
        </ul>
      </div>
    </div>
  );
}