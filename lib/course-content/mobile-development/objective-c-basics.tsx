export default function ObjectiveCBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Objective-C Basics</h2>
      <p className="text-gray-600">
        Objective-C is a foundational language for iOS and macOS development.  
        Learning its basics helps you understand legacy codebases and build or maintain apps for Apple platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Objective-C?</h3>
        <p className="text-blue-700">
          Objective-C powers many existing iOS/macOS apps and libraries.  
          Knowing it is valuable for maintaining, upgrading, or integrating with older projects.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Syntax & Structure</h3>
      <ul>
        <li>Header files (<code>.h</code>) declare interfaces; implementation files (<code>.m</code>) define logic</li>
        <li>Use <code>@interface</code> and <code>@implementation</code> blocks</li>
        <li>Methods use bracket syntax: <code>[object method]</code></li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Classes & Objects</h3>
      <ul>
        <li>Define classes with properties and methods</li>
        <li>Use inheritance and protocols (interfaces)</li>
        <li>Memory management with ARC (Automatic Reference Counting)</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Messaging & Dynamic Typing</h3>
      <ul>
        <li>Send messages to objects at runtime</li>
        <li>Use <code>id</code> type for dynamic objects</li>
        <li>Check types and respond to selectors dynamically</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Interoperability</h3>
      <ul>
        <li>Mix Objective-C and Swift in the same project</li>
        <li>Use bridging headers for interoperability</li>
        <li>Call C libraries directly from Objective-C</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Objective-C class

// MyClass.h
@interface MyClass : NSObject
@property (nonatomic, strong) NSString *name;
- (void)sayHello;
@end

// MyClass.m
@implementation MyClass
- (void)sayHello {
  NSLog(@"Hello, %@", self.name);
}
@end

// Usage
MyClass *obj = [[MyClass alloc] init];
obj.name = @"World";
[obj sayHello];
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Objective-C Basics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Maintaining legacy iOS/macOS apps</li>
          <li>Integrating with Objective-C libraries</li>
          <li>Understanding Apple platform history</li>
          <li>Bridging Objective-C and Swift code</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Objective-C basics are essential for working with legacy Apple codebases and libraries.  
        Master these concepts to maintain, upgrade, or integrate with existing iOS and macOS projects.
      </p>
    </div>
  );
}