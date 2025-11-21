export default function NftFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        NFT Fundamentals
      </h1>

      <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
        <h3 className="text-pink-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-pink-700 space-y-2">
          <li>• ERC-721 standard</li>
          <li>• ERC-1155 multi-token standard</li>
          <li>• Metadata standards</li>
          <li>• Royalties (EIP-2981)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">ERC-721 Standard</h2>
        <p>
          ERC-721 defines non-fungible tokens (NFTs) on Ethereum. Each token is unique and can represent digital art, collectibles, or assets.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">ERC-1155 Multi-Token Standard</h2>
        <p>
          ERC-1155 allows for both fungible and non-fungible tokens in a single contract, enabling efficient batch transfers and management.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Metadata Standards</h2>
        <p>
          NFT metadata describes the asset, including name, description, image, and attributes. Metadata is often stored off-chain (IPFS, Arweave) and referenced by token URI.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Royalties (EIP-2981)</h2>
        <p>
          EIP-2981 introduces a standard for royalty payments on NFT sales, allowing creators to earn a percentage from secondary market transactions.
        </p>
      </section>

      <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-pink-200 rounded-lg p-6">
        <h3 className="text-pink-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-pink-700 space-y-1 text-sm">
          <li>• Explore OpenZeppelin contracts for ERC-721 and ERC-1155</li>
          <li>• Use decentralized storage for NFT metadata</li>
          <li>• Implement royalty logic for creator rewards</li>
          <li>• Audit NFT contracts for security and compliance</li>
        </ul>
      </div>
    </div>
  );
}