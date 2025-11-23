export default function GameMonetizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game Monetization (Mobile)</h2>
      <p className="text-gray-600">
        Game monetization covers strategies for generating revenue from mobile games, including ads, in-app purchases, and premium models.  
        Mastering these techniques helps you build sustainable, profitable games for Android and iOS.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Monetize Mobile Games?</h3>
        <p className="text-blue-700">
          Monetization enables you to fund development, reach more players, and grow your game business sustainably.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Ad Integration</h3>
      <ul>
        <li>Use banner, interstitial, and rewarded video ads</li>
        <li>Integrate ad networks (AdMob, Unity Ads, etc.)</li>
        <li>Balance ad frequency with user experience</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. In-App Purchases (IAP)</h3>
      <ul>
        <li>Offer consumable and non-consumable items</li>
        <li>Implement subscriptions and premium upgrades</li>
        <li>Use platform APIs for secure transactions</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Premium & Freemium Models</h3>
      <ul>
        <li>Release paid apps or offer free apps with optional purchases</li>
        <li>Provide value through content, features, or customization</li>
        <li>Test pricing strategies for your audience</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Analytics & Optimization</h3>
      <ul>
        <li>Track user engagement and revenue with analytics tools</li>
        <li>Optimize monetization strategies based on data</li>
        <li>Test new features and offers to increase retention</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Show rewarded ad in Unity (C#)
using UnityEngine.Advertisements;
public void ShowRewardedAd() {
  if (Advertisement.IsReady("rewardedVideo")) {
    Advertisement.Show("rewardedVideo");
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Monetization (Mobile)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Casual and arcade games</li>
          <li>Puzzle and strategy games</li>
          <li>Social and multiplayer games</li>
          <li>Cross-platform mobile game businesses</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game monetization is essential for sustainable mobile game development.  
        Master these strategies to grow your audience and revenue on any platform.
      </p>
    </div>
  );
}