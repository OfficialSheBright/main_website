export default function CppSystemsWorkContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">C++ Systems Work</h2>
      <p className="text-gray-600">
        C++ is widely used for systems programming, offering high performance, direct hardware access, and advanced abstraction capabilities.  
        Mastering C++ for systems work enables you to build efficient, reliable, and scalable low-level software.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why C++ for Systems Work?</h3>
        <p className="text-blue-700">
          C++ combines the power of C with object-oriented and generic programming, making it ideal for operating systems, embedded software, and performance-critical applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Low-Level File Operations</h3>
      <ul>
        <li>Direct file I/O using streams and system calls</li>
        <li>Efficient reading/writing of binary and text files</li>
        <li>Managing file descriptors and resources</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Embedded C++ Patterns</h3>
      <ul>
        <li>Resource-constrained programming (no dynamic allocation, minimal overhead)</li>
        <li>Use of templates and constexpr for compile-time logic</li>
        <li>RAII (Resource Acquisition Is Initialization) for safe resource management</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Performance Optimization</h3>
      <ul>
        <li>Profiling and identifying bottlenecks</li>
        <li>Memory management and cache optimization</li>
        <li>Inlining, loop unrolling, and compiler optimizations</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Low-level file read in C++
#include <fstream>
#include <vector>
int main() {
  std::ifstream file("data.bin", std::ios::binary);
  std::vector<char> buffer((std::istreambuf_iterator<char>(file)), {});
  // Process buffer...
  return 0;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of C++ Systems Work</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Operating systems and device drivers</li>
          <li>Embedded and real-time systems</li>
          <li>High-performance servers and networking</li>
          <li>Performance-critical libraries and tools</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        C++ systems work is essential for building fast, reliable, and scalable software close to the hardware.  
        Master these concepts to excel in systems programming and embedded development.
      </p>
    </div>
  );
}