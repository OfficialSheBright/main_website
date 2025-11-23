export default function MonetizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Monetization</h2>
      <p className="text-gray-600">
        Monetization covers the strategies and systems for generating revenue from games, including in-app purchases, ads, and battle passes.  
        Mastering these techniques helps you build sustainable, profitable games for any platform.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Monetize Games?</h3>
        <p className="text-blue-700">
          Effective monetization supports ongoing development, rewards creators, and enables free or low-cost access for players.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. In-App Purchase Systems</h3>
      <ul>
        <li>Sell virtual goods, upgrades, and content packs</li>
        <li>Integrate platform APIs (App Store, Play Store, Steam)</li>
        <li>Design fair, engaging purchase options for players</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Ads Integration</h3>
      <ul>
        <li>Display banner, interstitial, and rewarded ads</li>
        <li>Use ad networks (Unity Ads, AdMob, etc.)</li>
        <li>Balance ad frequency and user experience</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Battle Pass Systems</h3>
      <ul>
        <li>Offer progression-based rewards and premium tiers</li>
        <li>Encourage engagement and retention</li>
        <li>Design seasonal content and challenges</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# pseudo-code for rewarded ad
using UnityEngine;
using UnityEngine.Advertisements;
public class AdManager : MonoBehaviour {
    public void ShowRewardedAd() {
        if (Advertisement.IsReady("rewardedVideo")) {
            Advertisement.Show("rewardedVideo");
        }
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Monetization</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile and free-to-play games</li>
          <li>Premium content and DLC</li>
          <li>Live service and seasonal events</li>
          <li>Indie and studio game funding</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Monetization is essential for game sustainability and growth.  
        Master these systems to create rewarding experiences for both players and developers.
      </p>
    </div>
  );
}