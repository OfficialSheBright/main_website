export default function DefiBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        DeFi Basics
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• AMMs (Automated Market Makers), LP tokens</li>
          <li>• Stablecoins</li>
          <li>• Lending and borrowing</li>
          <li>• Liquidity mining</li>
          <li>• Oracles (Chainlink, Pyth)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Automated Market Makers (AMMs)</h2>
        <p>
          AMMs allow decentralized trading of assets using liquidity pools instead of traditional order books. Liquidity providers earn fees by supplying assets to pools.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">LP Tokens</h2>
        <p>
          Liquidity providers receive LP tokens representing their share in a pool. LP tokens can be staked or used in other DeFi protocols.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Stablecoins</h2>
        <p>
          Stablecoins are cryptocurrencies pegged to stable assets (like USD) to reduce volatility. Examples include USDC, DAI, and USDT.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Lending & Borrowing</h2>
        <p>
          DeFi lending protocols allow users to earn interest by lending assets or borrow against collateral. Interest rates are algorithmically determined.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Liquidity Mining</h2>
        <p>
          Liquidity mining rewards users for providing liquidity to DeFi protocols, often with protocol tokens.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Oracles</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Chainlink: Decentralized data feeds for smart contracts</li>
          <li>Pyth: High-frequency price feeds for DeFi</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Explore popular DeFi protocols (Uniswap, Aave, Compound)</li>
          <li>• Understand risks like impermanent loss and liquidation</li>
          <li>• Use testnets to experiment with DeFi features</li>
          <li>• Stay updated on new DeFi innovations and security practices</li>
        </ul>
      </div>
    </div>
  );
}