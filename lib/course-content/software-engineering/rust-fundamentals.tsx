export default function RustFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Rust Fundamentals</h2>
      <p className="text-gray-600">
        Rust is a modern systems programming language focused on safety, speed, and concurrency.  
        Mastering Rust fundamentals enables you to write reliable, high-performance, and memory-safe software.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Rust?</h3>
        <p className="text-blue-700">
          Rust eliminates common bugs like null pointer dereferencing and data races, making it ideal for systems, embedded, and concurrent programming.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Ownership & Borrowing</h3>
      <ul>
        <li>Ownership ensures memory safety without a garbage collector</li>
        <li>Borrowing allows references to data with compile-time checks</li>
        <li>Prevents data races and dangling pointers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Lifetimes</h3>
      <ul>
        <li>Describe how long references are valid</li>
        <li>Enforced at compile time for safe memory access</li>
        <li>Essential for writing generic and reusable code</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Traits</h3>
      <ul>
        <li>Define shared behavior for types (like interfaces)</li>
        <li>Enable polymorphism and code reuse</li>
        <li>Standard traits: <code>Debug</code>, <code>Clone</code>, <code>Iterator</code>, etc.</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Pattern Matching</h3>
      <ul>
        <li>Use <code>match</code> statements to handle enums and complex data</li>
        <li>Destructure values for concise, expressive code</li>
        <li>Common with <code>Option</code> and <code>Result</code> types</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Ownership and borrowing in Rust
fn main() {
    let s = String::from("hello");
    takes_ownership(s);
    // s is no longer valid here

    let x = 5;
    makes_copy(x);
    // x is still valid here
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Rust Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Systems and embedded programming</li>
          <li>Concurrent and parallel applications</li>
          <li>WebAssembly and cross-platform tools</li>
          <li>Memory-safe libraries and frameworks</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Rust fundamentals are essential for safe, efficient, and modern systems programming.  
        Master these concepts to build robust, high-performance software with confidence.
      </p>
    </div>
  );
}