export default function IosIntegrationsAdvancedContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">iOS Integrations (Advanced)</h2>
      <p className="text-gray-600">
        Advanced iOS integrations cover connecting your app to system services, third-party SDKs, and device features such as notifications, health, payments, and more.  
        Mastering these skills enables you to deliver rich, interactive experiences for iPhone and iPad users.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced Integrations?</h3>
        <p className="text-blue-700">
          Integrating with system and third-party services unlocks powerful features, improves user engagement, and expands your app’s capabilities.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Push Notifications</h3>
      <ul>
        <li>Register for and handle remote notifications</li>
        <li>Customize notification actions and appearance</li>
        <li>Integrate with APNs and third-party services (Firebase, OneSignal)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Health & Fitness APIs</h3>
      <ul>
        <li>Access HealthKit and CoreMotion for health data</li>
        <li>Read and write activity, heart rate, and workout info</li>
        <li>Integrate with Apple Watch and fitness devices</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Payments & In-App Purchases</h3>
      <ul>
        <li>Implement Apple Pay for secure payments</li>
        <li>Set up StoreKit for in-app purchases and subscriptions</li>
        <li>Handle purchase validation and receipts</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Deep Linking & Universal Links</h3>
      <ul>
        <li>Support deep links for navigation from web or other apps</li>
        <li>Configure universal links for seamless user experience</li>
        <li>Handle incoming URLs and user activities</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Register for push notifications (Swift)
UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
  // Handle permission
}
UIApplication.shared.registerForRemoteNotifications()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced iOS Integrations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Health and fitness tracking apps</li>
          <li>Mobile payments and e-commerce</li>
          <li>Social and messaging apps with notifications</li>
          <li>Apps with deep linking and cross-platform navigation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced iOS integrations are essential for modern, feature-rich apps.  
        Master these techniques to deliver seamless, interactive experiences for your users.
      </p>
    </div>
  );
}