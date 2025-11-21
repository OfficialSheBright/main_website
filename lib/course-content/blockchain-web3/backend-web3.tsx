export default function BackendWeb3Content() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Backend for Web3
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• Node.js APIs for blockchain interaction</li>
          <li>• Event listeners and WebSockets</li>
          <li>• Indexers (The Graph, SubQuery)</li>
          <li>• Backend security for dApps</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Node.js APIs</h2>
        <p>
          Use Node.js to build backend services that interact with blockchains via libraries like ethers.js, web3.js, or viem.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_KEY");
const balance = await provider.getBalance("0xAddress");
console.log(ethers.formatEther(balance));`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Listeners & WebSockets</h2>
        <p>
          Listen to smart contract events and blockchain updates in real time using WebSockets.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">Example: Listening for Events</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`const wsProvider = new ethers.WebSocketProvider("wss://mainnet.infura.io/ws/v3/YOUR_KEY");
const contract = new ethers.Contract(address, abi, wsProvider);
contract.on("Transfer", (from, to, value) => {
  console.log(\`Transfer from \${from} to \${to}: \${value}\`);
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Indexers</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>The Graph for Ethereum and EVM chains</li>
          <li>SubQuery for Polkadot/Substrate</li>
          <li>Custom indexers for specialized data needs</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Backend Security</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Validate user input and sanitize API requests</li>
          <li>Protect private keys and sensitive data</li>
          <li>Implement rate limiting and monitoring</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Use environment variables for secrets</li>
          <li>• Monitor blockchain events for dApp responsiveness</li>
          <li>• Document API endpoints and event listeners</li>
          <li>• Test backend logic with real blockchain data</li>
        </ul>
      </div>
    </div>
  );
}