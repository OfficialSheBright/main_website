export default function SwiftProgrammingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Swift Programming</h2>
      <p className="text-gray-600">
        Swift is Apple’s modern programming language for iOS, macOS, watchOS, and tvOS development.  
        Mastering Swift enables you to build fast, safe, and expressive apps for the entire Apple ecosystem.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Swift?</h3>
        <p className="text-blue-700">
          Swift is easy to read, safe by design, and delivers high performance.  
          It’s the preferred language for new Apple platform projects.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Syntax & Structure</h3>
      <ul>
        <li>Clean, concise syntax with type inference</li>
        <li>Supports variables, constants, functions, and closures</li>
        <li>Optionals for safe handling of nil values</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Object-Oriented & Protocol-Oriented</h3>
      <ul>
        <li>Define classes, structs, and enums</li>
        <li>Use protocols for abstraction and code reuse</li>
        <li>Leverage extensions and generics for flexibility</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Memory Safety & Performance</h3>
      <ul>
        <li>Automatic Reference Counting (ARC) for memory management</li>
        <li>Value and reference types for efficient data handling</li>
        <li>Fast execution and interoperability with Objective-C</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Swift in iOS Development</h3>
      <ul>
        <li>Build UIs with UIKit or SwiftUI</li>
        <li>Integrate with Apple frameworks (Core Data, Combine, etc.)</li>
        <li>Write safe, testable, and maintainable code</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Swift class and function
class Greeter {
  let name: String
  init(name: String) {
    self.name = name
  }
  func sayHello() {
    print("Hello, \\(name)!")
  }
}

let greeter = Greeter(name: "World")
greeter.sayHello()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Swift Programming</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>iOS, macOS, watchOS, and tvOS apps</li>
          <li>Cross-platform Apple development</li>
          <li>Modernizing legacy Objective-C codebases</li>
          <li>Rapid prototyping and UI design</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Swift programming is the foundation for modern Apple app development.  
        Master these concepts to build safe, efficient, and expressive applications for any Apple device.
      </p>
    </div>
  );
}