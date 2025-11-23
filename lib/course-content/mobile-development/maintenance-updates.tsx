export default function MaintenanceUpdatesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Maintenance & Updates</h2>
      <p className="text-gray-600">
        Maintenance and updates are essential for keeping your mobile app secure, reliable, and compatible with new devices and OS versions.  
        Mastering these practices ensures your app continues to deliver value and a great user experience over time.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Maintain & Update?</h3>
        <p className="text-blue-700">
          Regular maintenance fixes bugs, addresses security issues, and adapts your app to evolving user needs and platform changes.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Bug Fixes & Security Patches</h3>
      <ul>
        <li>Monitor crash reports and user feedback</li>
        <li>Patch vulnerabilities and update dependencies</li>
        <li>Test fixes on all supported devices</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. OS & Device Compatibility</h3>
      <ul>
        <li>Update for new Android/iOS versions and APIs</li>
        <li>Test on new devices and screen sizes</li>
        <li>Adapt to platform deprecations and changes</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Feature Enhancements</h3>
      <ul>
        <li>Release new features and improvements</li>
        <li>Respond to user requests and analytics</li>
        <li>Iterate on UI/UX for better engagement</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Monitoring & Automation</h3>
      <ul>
        <li>Set up CI/CD for automated builds and tests</li>
        <li>Monitor app health with analytics and crash reporting</li>
        <li>Automate routine maintenance tasks where possible</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Update dependencies with npm (React Native)
npm update

# Example: Update Gradle dependencies (Android)
./gradlew build --refresh-dependencies
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Maintenance & Updates</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Long-term app reliability</li>
          <li>Security and compliance</li>
          <li>Continuous improvement and user retention</li>
          <li>Adaptation to new platforms and devices</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Maintenance and updates are crucial for the success and longevity of your mobile app.  
        Master these practices to keep your app secure, relevant, and high-performing for all users.
      </p>
    </div>
  );
}