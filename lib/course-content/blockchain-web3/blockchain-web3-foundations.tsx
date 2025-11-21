export default function BlockchainWeb3FoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Blockchain & Web3 Foundations
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• What is blockchain?</li>
          <li>• Blockchain structure (blocks, hashes, Merkle trees)</li>
          <li>• Consensus mechanisms (PoW, PoS, DPoS, PoA)</li>
          <li>• Nodes, miners, validators</li>
          <li>• Public vs private blockchains</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Blockchain?</h2>
        <p>
          Blockchain is a distributed ledger technology that records transactions in a secure, immutable, and transparent way. Each block contains a list of transactions, a timestamp, and a cryptographic hash of the previous block.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Blockchain Structure</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Blocks: Data containers linked together</li>
          <li>Hashes: Unique identifiers for blocks</li>
          <li>Merkle Trees: Efficient data verification structure</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Consensus Mechanisms</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Proof of Work (PoW)</li>
          <li>Proof of Stake (PoS)</li>
          <li>Delegated Proof of Stake (DPoS)</li>
          <li>Proof of Authority (PoA)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nodes, Miners, Validators</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Nodes: Devices that maintain blockchain copies</li>
          <li>Miners: Nodes that validate and add new blocks (PoW)</li>
          <li>Validators: Nodes that confirm transactions (PoS)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Public vs Private Blockchains</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Public: Open, permissionless, decentralized (e.g., Ethereum, Bitcoin)</li>
          <li>Private: Restricted access, controlled by organizations</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Explore different consensus mechanisms</li>
          <li>• Run a blockchain node locally for hands-on experience</li>
          <li>• Study real-world blockchain use cases</li>
          <li>• Understand the trade-offs between public and private chains</li>
        </ul>
      </div>
    </div>
  );
}