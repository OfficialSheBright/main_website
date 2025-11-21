export default function EndToEndNftDappContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        End-to-End NFT dApp
      </h1>

      <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
        <h3 className="text-pink-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-pink-700 space-y-2">
          <li>• Marketplace development</li>
          <li>• Lazy minting</li>
          <li>• Auction contracts</li>
          <li>• NFT indexer setups</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Marketplace Development</h2>
        <p>
          Build a decentralized marketplace for NFTs, supporting listing, buying, selling, and royalties. Integrate smart contracts for secure transactions and ownership transfers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Lazy Minting</h2>
        <p>
          Lazy minting allows NFTs to be created only when purchased, reducing upfront costs for creators. Metadata and ownership are recorded on-chain at the time of sale.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Auction Contracts</h2>
        <p>
          Implement auction mechanisms for NFTs, enabling timed bidding, reserve prices, and automatic winner selection. Ensure fairness and transparency in contract logic.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">NFT Indexer Setups</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Track NFT ownership and transfers</li>
          <li>Aggregate marketplace data for analytics</li>
          <li>Use tools like The Graph for efficient indexing</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-pink-200 rounded-lg p-6">
        <h3 className="text-pink-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-pink-700 space-y-1 text-sm">
          <li>• Audit marketplace and auction contracts for security</li>
          <li>• Optimize lazy minting for user experience and cost</li>
          <li>• Use decentralized storage for NFT metadata</li>
          <li>• Document your dApp architecture and indexer setup</li>
        </ul>
      </div>
    </div>
  );
}