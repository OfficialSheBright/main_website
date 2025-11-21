export default function IndexingDataInfrastructureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Indexing & Data Infrastructure
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• The Graph for blockchain data indexing</li>
          <li>• Custom indexers for specialized needs</li>
          <li>• Substrate indexing</li>
          <li>• Blockchain data extraction</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">The Graph</h2>
        <p>
          The Graph is a decentralized protocol for indexing and querying blockchain data. It uses subgraphs to define how data is extracted and served to dApps.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Custom Indexers</h2>
        <p>
          Custom indexers are backend services that process blockchain events and transactions, storing relevant data for fast querying and analytics.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Substrate Indexing</h2>
        <p>
          Substrate-based chains use tools like SubQuery to index and query on-chain data, supporting Polkadot and other ecosystems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Blockchain Data Extraction</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Extract events and transactions from nodes</li>
          <li>Store data in databases for analysis</li>
          <li>Enable real-time dashboards and analytics</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Explore The Graph and SubQuery documentation</li>
          <li>• Design efficient schemas for indexed data</li>
          <li>• Monitor indexer performance and reliability</li>
          <li>• Secure your data infrastructure against attacks</li>
        </ul>
      </div>
    </div>
  );
}