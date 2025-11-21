export default function AdvancedProtocolTopicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Advanced Protocol Topics
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• MEV mitigation</li>
          <li>• Data availability (DAS)</li>
          <li>• Danksharding basics</li>
          <li>• BFT consensus algorithms</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">MEV Mitigation</h2>
        <p>
          Miner Extractable Value (MEV) refers to profits miners or validators can extract by reordering, including, or excluding transactions. Mitigation strategies include fair ordering, encrypted mempools, and protocol-level changes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Availability Sampling (DAS)</h2>
        <p>
          DAS ensures that blockchain data is available and verifiable by sampling small pieces of data across the network, improving scalability and security for rollups and sharded chains.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Danksharding Basics</h2>
        <p>
          Danksharding is a next-generation sharding design for Ethereum, focusing on data availability and scalability by splitting data into blobs and using a single proposer for block creation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">BFT Consensus Algorithms</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Practical Byzantine Fault Tolerance (PBFT)</li>
          <li>Tendermint</li>
          <li>HotStuff</li>
          <li>Algorand</li>
        </ul>
        <p>
          BFT algorithms enable distributed systems to reach consensus even when some nodes are faulty or malicious, ensuring security and reliability.
        </p>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Study recent protocol upgrades and research papers</li>
          <li>• Analyze MEV risks and mitigation strategies</li>
          <li>• Explore data availability solutions for scaling</li>
          <li>• Compare BFT algorithms for different blockchain use cases</li>
        </ul>
      </div>
    </div>
  );
}