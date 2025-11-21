export default function NodeOperationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Node Operation
      </h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Ethereum full node</li>
          <li>• Light nodes</li>
          <li>• Validator nodes</li>
          <li>• Running Solana/Polygon/BNB nodes</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ethereum Full Node</h2>
        <p>
          Full nodes store the entire blockchain and validate all transactions and blocks. They are essential for network security and decentralization.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`# Run an Ethereum full node with Geth
docker run -d --name geth-node -p 8545:8545 ethereum/client-go --http --http.addr=0.0.0.0`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Light Nodes</h2>
        <p>
          Light nodes store only block headers and rely on full nodes for transaction data. They are resource-efficient and suitable for mobile or embedded devices.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Validator Nodes</h2>
        <p>
          Validator nodes participate in consensus by proposing and validating new blocks. They are critical in Proof of Stake (PoS) networks like Ethereum 2.0, Polygon, and Solana.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Running Solana/Polygon/BNB Nodes</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Solana: Use <code>solana-validator</code> for mainnet or testnet participation</li>
          <li>Polygon: Run Bor and Heimdall nodes for full network support</li>
          <li>BNB Chain: Use <code>geth</code> with BNB-specific configurations</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• Monitor node health and sync status regularly</li>
          <li>• Secure nodes with firewalls and regular updates</li>
          <li>• Backup node data and configuration files</li>
          <li>• Join community channels for troubleshooting and support</li>
        </ul>
      </div>
    </div>
  );
}