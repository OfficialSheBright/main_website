export default function FlutterStateManagementContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Flutter State Management</h2>
      <p className="text-gray-600">
        Flutter state management covers techniques for handling UI state, business logic, and data flow in cross-platform apps.  
        Mastering these concepts helps you build scalable, maintainable, and responsive applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why State Management?</h3>
        <p className="text-blue-700">
          Proper state management keeps your UI in sync with data, simplifies code, and enables easier testing and maintenance.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. setState & InheritedWidget</h3>
      <ul>
        <li>Use <code>setState</code> for simple local state updates</li>
        <li>Share state across widgets with <code>InheritedWidget</code></li>
        <li>Best for small apps and isolated state</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Provider & Riverpod</h3>
      <ul>
        <li>Use <code>Provider</code> for dependency injection and reactive updates</li>
        <li>Riverpod offers improved safety and flexibility</li>
        <li>Ideal for medium to large apps</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Bloc & Redux</h3>
      <ul>
        <li>Bloc uses streams and events for predictable state changes</li>
        <li>Redux centralizes state and actions for complex apps</li>
        <li>Great for apps with advanced data flows</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Testing & Debugging State</h3>
      <ul>
        <li>Write unit tests for state logic</li>
        <li>Use Flutter DevTools for state inspection</li>
        <li>Debug UI updates and data flow</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Provider state management in Flutter
class Counter with ChangeNotifier {
  int value = 0;
  void increment() {
    value++;
    notifyListeners();
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Flutter State Management</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Scalable business apps</li>
          <li>Real-time and offline-first applications</li>
          <li>Apps with complex navigation and data flows</li>
          <li>Production-ready releases for Android, iOS, and web</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Flutter state management is essential for building robust, modern apps.  
        Master these tools and patterns to deliver high-quality experiences for users.
      </p>
    </div>
  );
}