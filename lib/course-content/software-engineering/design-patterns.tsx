export default function DesignPatternsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Design Patterns</h2>
      <p className="text-gray-600">
        Design patterns are proven solutions to common software design problems.  
        Mastering these patterns helps you write flexible, maintainable, and scalable code.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Design Patterns?</h3>
        <p className="text-blue-700">
          Patterns provide a shared vocabulary for developers and help avoid reinventing the wheel when solving recurring problems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Creational Patterns</h3>
      <ul>
        <li><strong>Factory:</strong> Create objects without specifying the exact class</li>
        <li><strong>Singleton:</strong> Ensure a class has only one instance</li>
        <li><strong>Prototype:</strong> Clone existing objects for new instances</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Structural Patterns</h3>
      <ul>
        <li><strong>Adapter:</strong> Make incompatible interfaces work together</li>
        <li><strong>Facade:</strong> Provide a simplified interface to a complex system</li>
        <li><strong>Composite:</strong> Treat individual objects and groups uniformly</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Behavioral Patterns</h3>
      <ul>
        <li><strong>Observer:</strong> Notify multiple objects about state changes</li>
        <li><strong>Strategy:</strong> Select algorithms at runtime</li>
        <li><strong>Command:</strong> Encapsulate requests as objects</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Singleton pattern in JavaScript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Design Patterns</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building reusable and extensible code</li>
          <li>Improving team communication and code reviews</li>
          <li>Solving complex design problems efficiently</li>
          <li>Supporting scalable and maintainable architectures</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Design patterns are essential tools for every software engineer.  
        Master these patterns to write robust, maintainable, and elegant code.
      </p>
    </div>
  );
}