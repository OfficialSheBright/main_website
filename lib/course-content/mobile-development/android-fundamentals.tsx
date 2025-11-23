export default function AndroidFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Android Fundamentals</h2>
      <p className="text-gray-600">
        Android fundamentals cover the essential concepts and tools for building mobile apps, including activities, layouts, intents, and data storage.  
        Mastering these basics prepares you to create interactive, user-friendly Android applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Android Fundamentals?</h3>
        <p className="text-blue-700">
          Understanding the building blocks of Android apps helps you design, prototype, and develop projects efficiently for millions of devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Activities & Fragments</h3>
      <ul>
        <li>Use activities as entry points for user interaction</li>
        <li>Organize UI and logic with fragments</li>
        <li>Navigate between screens using intents</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Layouts & Views</h3>
      <ul>
        <li>Design UI with XML layouts and view components</li>
        <li>Use LinearLayout, ConstraintLayout, and RecyclerView</li>
        <li>Customize views for responsive design</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Intents & Navigation</h3>
      <ul>
        <li>Start activities and services with intents</li>
        <li>Pass data between screens</li>
        <li>Handle deep links and external actions</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Data Storage</h3>
      <ul>
        <li>Store data with SharedPreferences, SQLite, and Room</li>
        <li>Manage files and cache for offline access</li>
        <li>Sync data with cloud services</li>
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
        <h3 className="font-semibold text-green-800">Applications of Android Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile app prototyping and development</li>
          <li>UI/UX design for Android</li>
          <li>Data-driven and interactive applications</li>
          <li>Cross-device compatibility</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Android fundamentals are the foundation for building mobile apps.  
        Master these concepts to create, test, and publish applications for any audience.
      </p>
    </div>
  );
}