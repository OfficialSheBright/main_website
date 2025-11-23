export default function JavaAndroidOptionalContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Java Android (Optional)</h2>
      <p className="text-gray-600">
        Java Android development covers building mobile apps using Java, Android Studio, and the Android SDK.  
        Mastering these basics helps you understand legacy codebases and build apps for millions of devices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Java for Android?</h3>
        <p className="text-blue-700">
          Java is the original language for Android development and is still widely used in existing apps and libraries.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Activities & Layouts</h3>
      <ul>
        <li>Use <code>Activity</code> as the main entry point for UI</li>
        <li>Design layouts with XML and connect them in Java code</li>
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
        <li>Store data with <code>SharedPreferences</code>, SQLite, or files</li>
        <li>Manage cache and offline access</li>
        <li>Sync data with cloud services</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. API Integration</h3>
      <ul>
        <li>Connect to RESTful APIs using <code>HttpURLConnection</code> or third-party libraries</li>
        <li>Parse JSON and update UI</li>
        <li>Handle errors and network states</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Start a new activity with intent (Java)
Intent intent = new Intent(this, DetailActivity.class);
intent.putExtra("item_id", 123);
startActivity(intent);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Java Android</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Legacy Android app maintenance</li>
          <li>Apps using Java libraries</li>
          <li>Cross-platform and hybrid solutions</li>
          <li>Understanding Android fundamentals</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Java Android development is valuable for legacy projects and understanding the foundations of mobile apps.  
        Master these basics to work with existing codebases and build robust applications.
      </p>
    </div>
  );
}