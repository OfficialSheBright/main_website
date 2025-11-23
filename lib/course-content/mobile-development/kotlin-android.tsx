export default function KotlinAndroidContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Kotlin Android</h2>
      <p className="text-gray-600">
        Kotlin Android development covers building mobile apps using Kotlin, Android Studio, and the Android SDK.  
        Mastering these basics helps you create modern, concise, and safe apps for millions of devices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Kotlin for Android?</h3>
        <p className="text-blue-700">
          Kotlin is the preferred language for Android development, offering null safety, concise syntax, and full Java interoperability.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Activities & Layouts</h3>
      <ul>
        <li>Use <code>Activity</code> as the main entry point for UI</li>
        <li>Design layouts with XML and connect them in Kotlin code</li>
        <li>Handle user input and navigation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Intents & Services</h3>
      <ul>
        <li>Start new activities and services with intents</li>
        <li>Pass data between screens</li>
        <li>Run background tasks with <code>Service</code></li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Data Storage</h3>
      <ul>
        <li>Store data with <code>SharedPreferences</code>, SQLite, or Room</li>
        <li>Manage cache and offline access</li>
        <li>Sync data with cloud services</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. API Integration</h3>
      <ul>
        <li>Connect to RESTful APIs using Retrofit or Ktor</li>
        <li>Parse JSON and update UI</li>
        <li>Handle errors and network states</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Start a new activity with intent (Kotlin)
val intent = Intent(this, DetailActivity::class.java)
intent.putExtra("item_id", 123)
startActivity(intent)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Kotlin Android</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Modern Android app development</li>
          <li>Apps using Kotlin libraries and coroutines</li>
          <li>Cross-platform and hybrid solutions</li>
          <li>Maintaining and upgrading legacy Java apps</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Kotlin Android development is the standard for modern mobile apps.  
        Master these basics to build robust, efficient applications for any audience.
      </p>
    </div>
  );
}