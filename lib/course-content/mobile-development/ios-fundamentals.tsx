export default function IosFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">iOS Fundamentals</h2>
      <p className="text-gray-600">
        iOS fundamentals cover the essential concepts and tools for building mobile apps, including view controllers, layouts, navigation, and data storage.  
        Mastering these basics prepares you to create interactive, user-friendly iOS applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn iOS Fundamentals?</h3>
        <p className="text-blue-700">
          Understanding the building blocks of iOS apps helps you design, prototype, and develop projects efficiently for millions of Apple devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. View Controllers & Views</h3>
      <ul>
        <li>Use <code>UIViewController</code> as the main unit of UI and logic</li>
        <li>Organize UI with <code>UIView</code> and layout constraints</li>
        <li>Navigate between screens using segues and navigation controllers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Layouts & Auto Layout</h3>
      <ul>
        <li>Design UI with Storyboards, SwiftUI, or programmatic layouts</li>
        <li>Use Auto Layout for responsive design</li>
        <li>Support multiple screen sizes and orientations</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Navigation & Data Passing</h3>
      <ul>
        <li>Use navigation controllers and tab bars for app structure</li>
        <li>Pass data between screens with segues or property injection</li>
        <li>Handle deep links and external actions</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Data Storage</h3>
      <ul>
        <li>Store data with <code>UserDefaults</code>, <code>Core Data</code>, or files</li>
        <li>Manage cache and offline access</li>
        <li>Sync data with cloud services</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Navigate to another view controller (Swift)
let detailVC = DetailViewController()
navigationController?.pushViewController(detailVC, animated: true)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of iOS Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile app prototyping and development</li>
          <li>UI/UX design for iOS</li>
          <li>Data-driven and interactive applications</li>
          <li>Cross-device compatibility</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        iOS fundamentals are the foundation for building mobile apps.  
        Master these concepts to create, test, and publish applications for any audience.
      </p>
    </div>
  );
}