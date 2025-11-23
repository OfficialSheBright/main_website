export default function AppleWatchosContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Apple WatchOS</h2>
      <p className="text-gray-600">
        Apple WatchOS development covers building apps for Apple Watch, including UI design, health integration, notifications, and battery optimization.  
        Mastering these skills helps you create engaging, efficient wearable experiences for iOS users.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why WatchOS?</h3>
        <p className="text-blue-700">
          WatchOS enables glanceable interactions, health tracking, and quick notifications, expanding your app’s reach to wearable Apple devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. WatchOS UI Design</h3>
      <ul>
        <li>Design for small, round screens using SwiftUI</li>
        <li>Use stacks, lists, and navigation for simple interfaces</li>
        <li>Optimize for touch, Digital Crown, and voice input</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Health & Sensor Integration</h3>
      <ul>
        <li>Access heart rate, activity, and motion data via HealthKit</li>
        <li>Integrate with CoreMotion for sensor events</li>
        <li>Respond to real-time health changes</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Notifications & Complications</h3>
      <ul>
        <li>Send notifications and actions to the watch face</li>
        <li>Build custom complications for glanceable info</li>
        <li>Support quick replies and interactive notifications</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Battery Optimization</h3>
      <ul>
        <li>Minimize background processing and network usage</li>
        <li>Use scheduled tasks and background refresh wisely</li>
        <li>Profile and optimize for long battery life</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Access heart rate data with HealthKit (Swift)
import HealthKit
let healthStore = HKHealthStore()
let heartRateType = HKQuantityType.quantityType(forIdentifier: .heartRate)!
healthStore.requestAuthorization(toShare: [], read: [heartRateType]) { success, error in
  // Handle authorization
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Apple WatchOS</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Fitness and health tracking apps</li>
          <li>Notifications and quick actions</li>
          <li>Watch faces and complications</li>
          <li>Voice-controlled and glanceable utilities</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Apple WatchOS development is essential for wearable innovation.  
        Master these tools and workflows to deliver efficient, engaging smartwatch experiences for iOS users.
      </p>
    </div>
  );
}