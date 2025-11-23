export default function BatteryEfficiencyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Battery Efficiency</h2>
      <p className="text-gray-600">
        Battery efficiency focuses on optimizing mobile apps to minimize power consumption, extend device life, and improve user experience.  
        Mastering these techniques is essential for building apps that run smoothly on all devices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Battery Efficiency?</h3>
        <p className="text-blue-700">
          Efficient apps reduce battery drain, keep users engaged, and perform well on low-end devices and wearables.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Background Processing</h3>
      <ul>
        <li>Limit background tasks and schedule them wisely</li>
        <li>Use WorkManager (Android) or BackgroundTasks (iOS)</li>
        <li>Defer non-essential work when the device is idle or low on battery</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Network Optimization</h3>
      <ul>
        <li>Batch network requests to reduce radio usage</li>
        <li>Use caching and offline modes</li>
        <li>Prefer Wi-Fi over cellular for large transfers</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Sensor & Location Usage</h3>
      <ul>
        <li>Access sensors and location only when needed</li>
        <li>Use low-power location modes and reduce polling frequency</li>
        <li>Release sensor listeners promptly</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. UI & Animation Efficiency</h3>
      <ul>
        <li>Minimize heavy animations and redraws</li>
        <li>Use hardware acceleration wisely</li>
        <li>Optimize rendering for low-power devices</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Android WorkManager for deferred background task
val workRequest = OneTimeWorkRequestBuilder<MyWorker>().build()
WorkManager.getInstance(context).enqueue(workRequest)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Battery Efficiency</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile apps for Android and iOS</li>
          <li>Wearable and IoT devices</li>
          <li>Fitness, health, and tracking apps</li>
          <li>Any app needing long battery life</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Battery efficiency is essential for user satisfaction and device longevity.  
        Master these techniques to deliver apps that run longer and perform better on any platform.
      </p>
    </div>
  );
}