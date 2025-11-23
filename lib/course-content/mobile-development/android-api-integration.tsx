export default function AndroidApiIntegrationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Android API Integration</h2>
      <p className="text-gray-600">
        Android API integration covers connecting your app to RESTful APIs, handling network requests, and managing data.  
        Mastering these skills enables your app to interact with web services and deliver dynamic content.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why API Integration?</h3>
        <p className="text-blue-700">
          API integration allows your app to fetch, update, and sync data with remote servers, enabling features like user authentication, live updates, and cloud storage.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. HTTP Networking</h3>
      <ul>
        <li>Use libraries like Retrofit or Volley for network requests</li>
        <li>Handle GET, POST, PUT, DELETE operations</li>
        <li>Manage timeouts, retries, and error handling</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. JSON Parsing</h3>
      <ul>
        <li>Parse JSON responses using Gson or Moshi</li>
        <li>Map API data to Kotlin/Java data classes</li>
        <li>Handle nested and complex JSON structures</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Asynchronous Operations</h3>
      <ul>
        <li>Use coroutines or RxJava for async network calls</li>
        <li>Update UI based on API responses</li>
        <li>Handle loading states and errors gracefully</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Security & Best Practices</h3>
      <ul>
        <li>Use HTTPS for secure communication</li>
        <li>Store API keys securely (never hard-code in source)</li>
        <li>Validate and sanitize API data</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Retrofit API call in Kotlin
interface ApiService {
    @GET("users/{id}")
    suspend fun getUser(@Path("id") id: Int): User
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Android API Integration</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Social media and messaging apps</li>
          <li>Cloud-based storage and sync</li>
          <li>Live data feeds and dashboards</li>
          <li>User authentication and profiles</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Android API integration is essential for modern, connected apps.  
        Master these techniques to deliver dynamic, data-driven experiences for users.
      </p>
    </div>
  );
}