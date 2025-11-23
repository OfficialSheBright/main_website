export default function ModernCppContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Modern C++ (C++11–C++20)</h2>
      <p className="text-gray-600">
        Modern C++ introduces powerful features that improve safety, performance, and expressiveness.  
        Mastering these features is essential for writing efficient, maintainable, and robust C++ code.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Modern C++?</h3>
        <p className="text-blue-700">
          Modern C++ features simplify memory management, enable safer concurrency, and support advanced programming paradigms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Smart Pointers</h3>
      <ul>
        <li><code>std::unique_ptr</code>, <code>std::shared_ptr</code>, <code>std::weak_ptr</code> for automatic memory management</li>
        <li>Prevents memory leaks and dangling pointers</li>
        <li>Encourages RAII (Resource Acquisition Is Initialization)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Lambdas</h3>
      <ul>
        <li>Anonymous functions for concise, inline logic</li>
        <li>Useful for algorithms, callbacks, and event handling</li>
        <li>Capture variables by value or reference</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Move Semantics</h3>
      <ul>
        <li>Efficient transfer of resources with <code>std::move</code></li>
        <li>Reduces unnecessary copying of large objects</li>
        <li>Essential for performance in modern C++</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Multithreading</h3>
      <ul>
        <li>Standard library support: <code>std::thread</code>, <code>std::mutex</code>, <code>std::future</code></li>
        <li>Write portable, concurrent code</li>
        <li>Synchronize access to shared resources</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Using a lambda and smart pointer in C++14
#include <iostream>
#include <memory>
#include <vector>
int main() {
  auto ptr = std::make_unique<std::vector<int>>();
  for (int i = 0; i < 5; ++i) ptr->push_back(i);
  std::for_each(ptr->begin(), ptr->end(), [](int x) { std::cout << x << " "; });
  return 0;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Modern C++</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>High-performance and real-time systems</li>
          <li>Concurrent and parallel programming</li>
          <li>Resource-safe libraries and frameworks</li>
          <li>Modernizing legacy C++ codebases</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Modern C++ features are essential for writing safe, efficient, and expressive code.  
        Master these tools to unlock the full power of C++11–C++20 in your projects.
      </p>
    </div>
  );
}