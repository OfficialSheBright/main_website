export default function AndroidDeploymentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Android Deployment</h2>
      <p className="text-gray-600">
        Android deployment covers building, packaging, and publishing apps for the Google Play Store and other platforms.  
        Mastering these workflows ensures your app reaches users with optimal performance and reliability.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Android Deployment?</h3>
        <p className="text-blue-700">
          Efficient deployment lets you share your app with the world, test on real devices, and publish to stores and platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Build Variants & Signing</h3>
      <ul>
        <li>Configure debug and release build variants</li>
        <li>Sign APKs/AABs with secure keys</li>
        <li>Manage version codes and names</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Platform-Specific Setup</h3>
      <ul>
        <li>Set up permissions and manifest entries</li>
        <li>Configure device compatibility and minimum SDK</li>
        <li>Optimize resources for different screen sizes and densities</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Testing & Optimization</h3>
      <ul>
        <li>Test builds on emulators and physical devices</li>
        <li>Profile performance and fix platform-specific issues</li>
        <li>Optimize assets and code for smooth user experience</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Publishing & Distribution</h3>
      <ul>
        <li>Prepare builds for Google Play and other stores</li>
        <li>Follow platform guidelines for submission</li>
        <li>Update and patch apps post-release</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Build and sign APK using Gradle
./gradlew assembleRelease
# Sign APK with keystore
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk alias_name
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Android Deployment</h3>
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
        Android deployment is essential for sharing your app with users everywhere.  
        Master these workflows to publish, update, and optimize apps for any device.
      </p>
    </div>
  );
}