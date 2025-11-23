export default function IosDataHandlingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">iOS Data Handling</h2>
      <p className="text-gray-600">
        iOS data handling covers managing local and remote data, including Core Data, UserDefaults, and API integration.  
        Mastering these techniques helps you build responsive, data-driven apps for iPhone and iPad.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data Handling?</h3>
        <p className="text-blue-700">
          Efficient data handling enables offline access, fast performance, and seamless sync with cloud services.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Local Storage</h3>
      <ul>
        <li>Use <code>UserDefaults</code> for simple key-value storage</li>
        <li>Store structured data with <code>Core Data</code></li>
        <li>Manage files and cache for offline access</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. API Integration</h3>
      <ul>
        <li>Connect to RESTful APIs using <code>URLSession</code></li>
        <li>Parse JSON responses with <code>Codable</code></li>
        <li>Handle errors, loading states, and retries</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Data Sync & Cloud</h3>
      <ul>
        <li>Sync data with iCloud or third-party services</li>
        <li>Handle conflicts and offline changes</li>
        <li>Secure sensitive data with encryption</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Performance & Optimization</h3>
      <ul>
        <li>Batch updates and minimize disk writes</li>
        <li>Use background threads for heavy operations</li>
        <li>Profile and optimize data access</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Fetch and decode JSON from API (Swift)
struct User: Codable {
  let id: Int
  let name: String
}
let url = URL(string: "https://api.example.com/users/1")!
URLSession.shared.dataTask(with: url) { data, _, _ in
  if let data = data {
    let user = try? JSONDecoder().decode(User.self, from: data)
    print(user)
  }
}.resume()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of iOS Data Handling</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Social media and messaging apps</li>
          <li>Offline-first and cloud-synced apps</li>
          <li>Health, finance, and productivity tools</li>
          <li>Any app needing reliable data storage</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        iOS data handling is essential for modern, responsive apps.  
        Master these techniques to deliver fast, reliable experiences for users.
      </p>
    </div>
  );
}