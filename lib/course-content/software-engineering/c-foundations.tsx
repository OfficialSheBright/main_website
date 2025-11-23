export default function CFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">C Foundations</h2>
      <p className="text-gray-600">
        C is a foundational language for systems programming, offering direct memory access, efficient performance, and fine-grained control over hardware.  
        Mastering C is essential for embedded, OS, and performance-critical software development.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn C?</h3>
        <p className="text-blue-700">
          C powers operating systems, embedded devices, and high-performance applications.  
          Understanding C gives you insight into how computers work at a low level.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Pointers & Pointer Arithmetic</h3>
      <ul>
        <li>Directly reference and manipulate memory addresses</li>
        <li>Essential for dynamic data structures and system-level code</li>
        <li>Pointer arithmetic enables array and buffer manipulation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Memory Management (malloc, free)</h3>
      <ul>
        <li>Manual allocation and deallocation of memory</li>
        <li>Use <code>malloc</code>, <code>calloc</code>, <code>realloc</code>, and <code>free</code></li>
        <li>Avoid memory leaks and dangling pointers</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Files & I/O</h3>
      <ul>
        <li>Read and write files using <code>fopen</code>, <code>fread</code>, <code>fwrite</code>, <code>fprintf</code>, etc.</li>
        <li>Standard input/output with <code>scanf</code>, <code>printf</code></li>
        <li>Binary and text file operations</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Structures & Unions</h3>
      <ul>
        <li>Group related data using <code>struct</code></li>
        <li>Use <code>union</code> for memory-efficient storage of different types</li>
        <li>Foundation for complex data structures</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Preprocessor & Macros</h3>
      <ul>
        <li>Use <code>#define</code>, <code>#include</code>, <code>#ifdef</code> for code generation and configuration</li>
        <li>Macros for reusable code snippets</li>
        <li>Conditional compilation for portability</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Dynamic array allocation in C
#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 5;
  int *arr = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) arr[i] = i * i;
  for (int i = 0; i < n; i++) printf("%d ", arr[i]);
  free(arr);
  return 0;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of C Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Operating system and kernel development</li>
          <li>Embedded systems and microcontrollers</li>
          <li>Performance-critical libraries and tools</li>
          <li>Learning the basis for C++, Rust, and other system languages</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        C foundations are essential for any systems programmer.  
        Master these concepts to unlock low-level programming and build efficient, reliable software.
      </p>
    </div>
  );
}