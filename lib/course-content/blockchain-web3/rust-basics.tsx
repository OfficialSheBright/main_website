export default function NftSmartContractsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        NFT Smart Contracts
      </h1>

      <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
        <h3 className="text-pink-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-pink-700 space-y-2">
          <li>• Minting mechanisms</li>
          <li>• Allowlists</li>
          <li>• Reveal systems</li>
          <li>• Randomness (Chainlink VRF)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Minting Mechanisms</h2>
        <p>
          NFT smart contracts implement minting logic to create new tokens. Common patterns include public mint, presale, and batch minting.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Allowlists</h2>
        <p>
          Allowlists restrict minting to approved addresses, often used for presales or exclusive drops. Contracts check user eligibility before allowing mint.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reveal Systems</h2>
        <p>
          Reveal systems hide NFT metadata until a specific event or time, enabling fair distribution and surprise elements for users.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Randomness (Chainlink VRF)</h2>
        <p>
          Chainlink VRF provides verifiable randomness for assigning NFT traits or winners in a provably fair way, reducing manipulation risks.
        </p>
      </section>

      <div className="bg-gradient-to-r from-pink-50 to-blue-50 border border-pink-200 rounded-lg p-6">
        <h3 className="text-pink-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-pink-700 space-y-1 text-sm">
          <li>• Use OpenZeppelin contracts for secure NFT logic</li>
          <li>• Implement allowlists for exclusive drops</li>
          <li>• Test reveal and randomness systems thoroughly</li>
          <li>• Audit smart contracts for vulnerabilities</li>
        </ul>
      </div>
    </div>
  );
}