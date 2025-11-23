export default function FlutterFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Flutter Fundamentals</h2>
      <p className="text-gray-600">
        Flutter fundamentals cover the essential concepts and tools for building cross-platform mobile apps, including widgets, layouts, navigation, and state management.  
        Mastering these basics prepares you to create interactive, user-friendly applications for Android, iOS, and web.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Flutter?</h3>
        <p className="text-blue-700">
          Flutter enables fast development, expressive UIs, and native performance across platforms with a single codebase.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Widgets & Layouts</h3>
      <ul>
        <li>Build UIs with widgets like <code>Container</code>, <code>Row</code>, <code>Column</code>, <code>Stack</code></li>
        <li>Compose layouts for responsive design</li>
        <li>Customize appearance with themes and styles</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Navigation & Routing</h3>
      <ul>
        <li>Navigate between screens using <code>Navigator</code> and routes</li>
        <li>Pass data between pages</li>
        <li>Support deep linking and dynamic navigation</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. State Management</h3>
      <ul>
        <li>Manage UI state with <code>setState</code>, <code>InheritedWidget</code>, or Provider</li>
        <li>Separate business logic from UI for maintainability</li>
        <li>Enable reactive updates and testing</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Platform Integration</h3>
      <ul>
        <li>Access device features (camera, sensors, storage) via plugins</li>
        <li>Handle permissions and platform-specific code</li>
        <li>Integrate with native Android/iOS APIs</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Flutter widget
class MyButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => print('Clicked!'),
      child: Text('Click Me'),
    );
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Flutter Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile and web app prototyping</li>
          <li>UI/UX design for cross-platform apps</li>
          <li>Interactive and data-driven applications</li>
          <li>Rapid development and iteration</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Flutter fundamentals are the foundation for building modern, cross-platform apps.  
        Master these concepts to create, test, and publish applications for any audience.
      </p>
    </div>
  );
}