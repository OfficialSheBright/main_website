export default function IosDeploymentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">iOS Deployment</h2>
      <p className="text-gray-600">
        iOS deployment covers building, packaging, and publishing apps for the App Store and enterprise distribution.  
        Mastering these workflows ensures your app reaches users with optimal performance and reliability.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why iOS Deployment?</h3>
        <p className="text-blue-700">
          Efficient deployment lets you share your app with the world, test on real devices, and publish to the App Store or enterprise platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Build & Signing</h3>
      <ul>
        <li>Configure debug and release build schemes</li>
        <li>Sign apps with certificates and provisioning profiles</li>
        <li>Manage version numbers and build identifiers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Platform-Specific Setup</h3>
      <ul>
        <li>Set up app permissions and Info.plist entries</li>
        <li>Configure device compatibility and minimum iOS version</li>
        <li>Optimize resources for different screen sizes and devices</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Testing & Optimization</h3>
      <ul>
        <li>Test builds on simulators and physical devices</li>
        <li>Profile performance and fix platform-specific issues</li>
        <li>Optimize assets and code for smooth user experience</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Publishing & Distribution</h3>
      <ul>
        <li>Prepare builds for App Store and TestFlight</li>
        <li>Follow platform guidelines for submission</li>
        <li>Update and patch apps post-release</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Build and archive iOS app using Xcode CLI
xcodebuild -scheme "MyApp" -configuration Release archive -archivePath ./build/MyApp.xcarchive
# Export IPA for App Store
xcodebuild -exportArchive -archivePath ./build/MyApp.xcarchive -exportOptionsPlist ExportOptions.plist -exportPath ./build
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of iOS Deployment</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile app publishing</li>
          <li>Rapid prototyping and testing</li>
          <li>Live updates and patches</li>
          <li>Cross-device compatibility</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        iOS deployment is essential for sharing your app with users everywhere.  
        Master these workflows to publish, update, and optimize apps for any Apple device.
      </p>
    </div>
  );
}