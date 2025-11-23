export default function MobileEcosystemIntroContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Mobile Ecosystem Introduction</h2>
      <p className="text-gray-600">
        The mobile ecosystem includes the platforms, tools, and technologies used to build, distribute, and maintain mobile apps.  
        Understanding this landscape is essential for creating successful, user-friendly applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn About the Mobile Ecosystem?</h3>
        <p className="text-blue-700">
          Knowing the ecosystem helps you choose the right tools, target the right platforms, and stay up-to-date with industry trends.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Platforms & Devices</h3>
      <ul>
        <li>Android, iOS, and cross-platform solutions (Flutter, React Native, etc.)</li>
        <li>Phones, tablets, wearables, and IoT devices</li>
        <li>Platform-specific guidelines and requirements</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Development Tools</h3>
      <ul>
        <li>Android Studio, Xcode, Visual Studio Code</li>
        <li>Emulators, simulators, and device testing</li>
        <li>Version control and collaboration tools</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. App Distribution</h3>
      <ul>
        <li>Google Play Store, Apple App Store, and alternative stores</li>
        <li>App signing, review, and publishing processes</li>
        <li>Continuous integration and deployment (CI/CD)</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Maintenance & Analytics</h3>
      <ul>
        <li>App updates, bug fixes, and security patches</li>
        <li>Crash reporting and analytics tools</li>
        <li>User feedback and iteration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Flutter command to create a new project
flutter create my_app
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Mobile Ecosystem Knowledge</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Choosing the right tech stack for your app</li>
          <li>Efficient development and deployment</li>
          <li>Maximizing app reach and user engagement</li>
          <li>Staying competitive in the mobile market</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Understanding the mobile ecosystem is the first step to building great apps.  
        Master these fundamentals to navigate platforms, tools, and trends with confidence.
      </p>
    </div>
  );
}