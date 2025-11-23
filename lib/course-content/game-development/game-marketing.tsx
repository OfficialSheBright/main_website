export default function GameMarketingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game Marketing</h2>
      <p className="text-gray-600">
        Game marketing covers the strategies and tools needed to promote your game, build a community, and publish on major platforms.  
        Mastering these skills helps your game reach players and succeed in a competitive market.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Game Marketing?</h3>
        <p className="text-blue-700">
          Effective marketing increases visibility, drives downloads and sales, and builds lasting relationships with your audience.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Trailer Creation</h3>
      <ul>
        <li>Plan and script a compelling game trailer</li>
        <li>Showcase gameplay, story, and unique features</li>
        <li>Use editing tools to create high-impact visuals and sound</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Community Building</h3>
      <ul>
        <li>Engage players on social media, Discord, and forums</li>
        <li>Share updates, behind-the-scenes content, and respond to feedback</li>
        <li>Foster a positive, active community around your game</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Publishing Platforms</h3>
      <ul>
        <li>Prepare your game for release on Steam, Play Store, App Store, and more</li>
        <li>Follow platform guidelines for assets, metadata, and compliance</li>
        <li>Optimize your store page for discoverability and conversion</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Steam store page checklist
- Game trailer and screenshots
- Engaging description and tags
- System requirements
- Community links (Discord, website)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Marketing</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Launching indie and studio games</li>
          <li>Building player communities</li>
          <li>Driving downloads and sales</li>
          <li>Growing your brand and reputation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game marketing is essential for reaching players and achieving success.  
        Master these strategies to promote your game and build a thriving community.
      </p>
    </div>
  );
}