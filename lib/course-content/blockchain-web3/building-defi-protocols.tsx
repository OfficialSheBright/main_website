export default function BuildingDefiProtocolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Building DeFi Protocols
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Uniswap V2 architecture</li>
          <li>• Constant product AMM</li>
          <li>• Yield farming contracts</li>
          <li>• Lending protocols (Aave model)</li>
          <li>• Liquidation system design</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Uniswap V2 Architecture</h2>
        <p>
          Uniswap V2 uses a constant product automated market maker (AMM) model, allowing users to swap tokens and provide liquidity without order books.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Constant Product AMM</h2>
        <p>
          The AMM maintains the invariant <code>x * y = k</code>, where <code>x</code> and <code>y</code> are token reserves and <code>k</code> is constant. Swaps and liquidity changes update reserves while preserving <code>k</code>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Yield Farming Contracts</h2>
        <p>
          Yield farming incentivizes users to provide liquidity by rewarding them with protocol tokens. Smart contracts manage staking, rewards, and withdrawals.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Lending Protocols (Aave Model)</h2>
        <p>
          Lending protocols like Aave allow users to deposit assets, earn interest, and borrow against collateral. Interest rates are algorithmically determined based on supply and demand.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Liquidation System Design</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Monitor collateral ratios</li>
          <li>Trigger liquidations when positions fall below thresholds</li>
          <li>Automate asset sales to repay debt</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Study open-source DeFi protocols for best practices</li>
          <li>• Simulate AMM and lending logic in testnets</li>
          <li>• Audit smart contracts for security and correctness</li>
          <li>• Monitor protocol health and user incentives</li>
        </ul>
      </div>
    </div>
  );
}