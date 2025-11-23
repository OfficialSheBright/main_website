export default function ProgrammingEssentialsMobileContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Programming Essentials (Mobile)</h2>
      <p className="text-gray-600">
        Programming essentials for mobile development include the core concepts, languages, and tools needed to build apps for Android and iOS.  
        Mastering these fundamentals prepares you to create robust, maintainable, and efficient mobile applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Programming Essentials?</h3>
        <p className="text-blue-700">
          A strong foundation in programming enables you to learn new frameworks, debug issues, and build apps that work reliably across devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Core Programming Concepts</h3>
      <ul>
        <li>Variables, data types, and operators</li>
        <li>Control flow: if/else, loops, switch statements</li>
        <li>Functions, methods, and parameters</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Object-Oriented Programming (OOP)</h3>
      <ul>
        <li>Classes, objects, and inheritance</li>
        <li>Encapsulation, abstraction, and polymorphism</li>
        <li>Design patterns for mobile apps</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Mobile Programming Languages</h3>
      <ul>
        <li>Kotlin and Java for Android</li>
        <li>Swift and Objective-C for iOS</li>
        <li>Dart for Flutter, JavaScript/TypeScript for React Native</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Development Tools & Environments</h3>
      <ul>
        <li>Android Studio, Xcode, Visual Studio Code</li>
        <li>Emulators, simulators, and device testing</li>
        <li>Version control with Git</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple function in Kotlin
fun greet(name: String): String {
  return "Hello, $name!"
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Programming Essentials</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building mobile apps for Android and iOS</li>
          <li>Learning new frameworks and languages</li>
          <li>Debugging and maintaining code</li>
          <li>Collaborating in development teams</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Programming essentials are the foundation of mobile development.  
        Master these concepts to confidently build, test, and maintain apps for any platform.
      </p>
    </div>
  );
}