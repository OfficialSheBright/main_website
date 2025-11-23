export default function RustSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Rust for Systems</h2>
      <p className="text-gray-600">
        Rust is designed for safe, concurrent, and high-performance systems programming.  
        Mastering Rust for systems work enables you to build reliable, efficient, and secure low-level software.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Rust for Systems?</h3>
        <p className="text-blue-700">
          Rust&apos;s ownership model, zero-cost abstractions, and fearless concurrency make it ideal for embedded, OS, and performance-critical applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Concurrency & Async</h3>
      <ul>
        <li>Safe multithreading with <code>std::thread</code> and channels</li>
        <li>Async programming with <code>async/await</code> and <code>tokio</code></li>
        <li>Eliminate data races at compile time</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Unsafe Rust</h3>
      <ul>
        <li>Direct memory manipulation when needed</li>
        <li>Use <code>unsafe</code> blocks for FFI, low-level operations, and performance</li>
        <li>Minimize unsafe code and encapsulate it safely</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Memory-Safe Design</h3>
      <ul>
        <li>Borrow checker prevents dangling pointers and memory leaks</li>
        <li>RAII and lifetimes ensure safe resource management</li>
        <li>Zero-cost abstractions for performance without sacrificing safety</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. WebAssembly Intro</h3>
      <ul>
        <li>Compile Rust to WebAssembly for fast, portable code in browsers and beyond</li>
        <li>Use <code>wasm-pack</code> and <code>wasm-bindgen</code> for integration</li>
        <li>Ideal for high-performance web and cross-platform apps</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Rust for Embedded Devices</h3>
      <ul>
        <li>Write firmware for microcontrollers with <code>no_std</code></li>
        <li>Use crates like <code>embedded-hal</code> and <code>cortex-m</code></li>
        <li>Memory safety and concurrency for resource-constrained systems</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple async function in Rust (tokio)
use tokio::time::{sleep, Duration};
#[tokio::main]
async fn main() {
    sleep(Duration::from_secs(1)).await;
    println!("Hello from async Rust!");
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Rust for Systems</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Embedded and IoT firmware</li>
          <li>Operating systems and device drivers</li>
          <li>High-performance servers and networking</li>
          <li>WebAssembly modules for web and cross-platform apps</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Rust for systems programming combines safety, speed, and concurrency.  
        Master these concepts to build robust, efficient, and secure low-level software.
      </p>
    </div>
  );
}