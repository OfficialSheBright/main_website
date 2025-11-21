export default function CapstoneProjectDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Capstone Web3 Projects
      </h1>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">Project Ideas</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• ERC-20 & ERC-721 token suite</li>
          <li>• Full DeFi protocol (DEX + lending + staking)</li>
          <li>• NFT marketplace with royalties</li>
          <li>• ZK-proof based anonymous voting app</li>
          <li>• Hybrid on-chain/off-chain dApp</li>
          <li>• Wallet with account abstraction (ERC-4337)</li>
          <li>• Custom blockchain using Substrate</li>
          <li>• Custom rollup</li>
          <li>• Smart contract security audit report</li>
          <li>• MEV bot (educational)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Components</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Architecture design</li>
          <li>Smart contract implementation</li>
          <li>Frontend integration</li>
          <li>Deployment and documentation</li>
          <li>Security analysis</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Assessment Criteria</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Code quality and organization</li>
          <li>Protocol functionality and security</li>
          <li>Deployment and user experience</li>
          <li>Documentation and presentation</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-purple-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-purple-700 space-y-1 text-sm">
          <li>• Choose a project that matches your interests and career goals</li>
          <li>• Document your design and decisions clearly</li>
          <li>• Test and audit your smart contracts thoroughly</li>
          <li>• Prepare a demo and presentation for reviewers</li>
        </ul>
      </div>
    </div>
  );
}