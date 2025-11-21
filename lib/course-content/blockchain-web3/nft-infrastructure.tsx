export default function NftInfrastructureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        NFT Infrastructure
      </h1>

      <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
        <h3 className="text-pink-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-pink-700 space-y-2">
          <li>• IPFS pinning</li>
          <li>• NFT storage solutions</li>
          <li>• Dynamic NFTs</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">IPFS Pinning</h2>
        <p>
          IPFS (InterPlanetary File System) is a decentralized storage protocol. Pinning ensures NFT metadata and assets remain available by keeping them hosted on IPFS nodes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">NFT Storage Solutions</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>IPFS: Decentralized, content-addressed storage</li>
          <li>Arweave: Permanent data storage for NFTs</li>
          <li>NFT.Storage: Easy API for storing NFT data on IPFS and Filecoin</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dynamic NFTs</h2>
        <p>
          Dynamic NFTs can change their metadata or appearance based on external events or on-chain activity, enabling interactive and evolving digital assets.
        </p>
      </section>

      <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-pink-200 rounded-lg p-6">
        <h3 className="text-pink-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-pink-700 space-y-1 text-sm">
          <li>• Use reliable pinning services for NFT assets</li>
          <li>• Explore dynamic NFT use cases and smart contract patterns</li>
          <li>• Document your storage architecture for users and developers</li>
          <li>• Audit NFT infrastructure for security and reliability</li>
        </ul>
      </div>
    </div>
  );
}