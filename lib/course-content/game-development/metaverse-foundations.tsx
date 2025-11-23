export default function MetaverseFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Metaverse Foundations</h2>
      <p className="text-gray-600">
        Metaverse foundations introduce the core concepts of virtual worlds, persistent identity, and blockchain integration.  
        Understanding these basics is essential for building immersive, interoperable digital experiences.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Metaverse Foundations?</h3>
        <p className="text-blue-700">
          The metaverse is reshaping how people interact, play, and create online.  
          Mastering its foundations prepares you for the future of digital worlds and economies.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Definitions (Virtual Worlds, Persistent Identity)</h3>
      <ul>
        <li>Virtual worlds: shared, interactive environments accessible online</li>
        <li>Persistent identity: user profiles and avatars that exist across platforms</li>
        <li>Social, creative, and economic activities in digital spaces</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Blockchain Integration (NFTs, Tokens)</h3>
      <ul>
        <li>Use blockchain for secure ownership of digital assets (NFTs)</li>
        <li>Implement tokens for in-world currency and transactions</li>
        <li>Enable trading, collecting, and monetizing virtual goods</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Interoperability</h3>
      <ul>
        <li>Connect multiple platforms and worlds for seamless experiences</li>
        <li>Support cross-platform avatars, assets, and identities</li>
        <li>Use open standards and APIs for integration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: NFT metadata for a metaverse avatar
{
  "name": "Cyber Explorer",
  "image": "ipfs://avatar-image-url",
  "attributes": [
    { "trait_type": "Outfit", "value": "Space Suit" },
    { "trait_type": "Level", "value": 12 }
  ]
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Metaverse Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Virtual worlds and social platforms</li>
          <li>Blockchain-based games and economies</li>
          <li>Cross-platform avatars and assets</li>
          <li>Digital events and immersive experiences</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Metaverse foundations are key to building the next generation of digital worlds.  
        Master these concepts to create immersive, connected, and innovative experiences.
      </p>
    </div>
  );
}