export default function SolidityToolsFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Solidity Tools & Frameworks
      </h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 className="text-yellow-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• Hardhat</li>
          <li>• Foundry</li>
          <li>• OpenZeppelin</li>
          <li>• Testing & debugging</li>
          <li>• Contract deployment</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hardhat</h2>
        <p>
          Hardhat is a popular development environment for Ethereum. It supports local blockchain networks, testing, debugging, and deployment.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`// Example Hardhat test
const { expect } = require("chai");
describe("MyContract", function () {
  it("Should return the right value", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    const contract = await MyContract.deploy();
    expect(await contract.value()).to.equal(42);
  });
});`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Foundry</h2>
        <p>
          Foundry is a fast, Rust-based toolkit for smart contract development. It offers testing, deployment, and fuzzing for Solidity projects.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">OpenZeppelin</h2>
        <p>
          OpenZeppelin provides secure, reusable smart contract libraries for ERC standards, access control, and upgradeability.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Testing & Debugging</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Unit tests for contract logic</li>
          <li>Fuzzing for edge cases</li>
          <li>Debugging with Hardhat and Foundry tools</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contract Deployment</h2>
        <p>
          Deploy contracts to testnets and mainnet using Hardhat, Foundry, or Truffle. Automate deployments with scripts and CI/CD pipelines.
        </p>
      </section>

      <div className="bg-gradient-to-r from-yellow-50 to-blue-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-yellow-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-yellow-700 space-y-1 text-sm">
          <li>• Use Hardhat and Foundry for efficient development</li>
          <li>• Leverage OpenZeppelin for secure contract patterns</li>
          <li>• Write thorough tests and use fuzzing tools</li>
          <li>• Automate deployments and document your process</li>
        </ul>
      </div>
    </div>
  );
}