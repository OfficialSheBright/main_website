export default function NetworkOptimizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Network Optimization</h2>
      <p className="text-gray-600">
        Network optimization focuses on reducing data usage, improving speed, and ensuring reliable connectivity in mobile apps.  
        Mastering these techniques is essential for delivering fast, efficient experiences—especially on slow or unreliable networks.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Network Optimization?</h3>
        <p className="text-blue-700">
          Optimized networking reduces costs, improves battery life, and keeps users engaged even with poor connectivity.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Reduce Data Usage</h3>
      <ul>
        <li>Compress images, JSON, and other payloads</li>
        <li>Batch requests and minimize polling</li>
        <li>Use efficient data formats (e.g., Protobuf, gzip)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Caching & Offline Support</h3>
      <ul>
        <li>Cache API responses and static assets</li>
        <li>Use local storage for offline access</li>
        <li>Sync data when connectivity is restored</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Connection Management</h3>
      <ul>
        <li>Detect network status and adapt behavior</li>
        <li>Retry failed requests with exponential backoff</li>
        <li>Gracefully handle timeouts and errors</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Security & Best Practices</h3>
      <ul>
        <li>Use HTTPS for all network communication</li>
        <li>Validate SSL certificates and use certificate pinning</li>
        <li>Sanitize and validate all incoming data</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Check network connectivity in Android (Kotlin)
val cm = getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
val activeNetwork = cm.activeNetworkInfo
val isConnected = activeNetwork?.isConnectedOrConnecting == true
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Network Optimization</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile apps for Android and iOS</li>
          <li>Apps with real-time or cloud data</li>
          <li>Offline-first and global apps</li>
          <li>Any app targeting users with limited connectivity</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Network optimization is essential for high-quality, reliable mobile apps.  
        Master these techniques to deliver fast, efficient experiences for all users.
      </p>
    </div>
  );
}