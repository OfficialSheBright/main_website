export default function SystemProgrammingFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">System Programming Foundations</h2>
      <p className="text-gray-600">
        System programming is the practice of writing software that interacts closely with the operating system and hardware.  
        Mastering these foundations is essential for building efficient, reliable, and low-level software such as kernels, drivers, and embedded applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why System Programming?</h3>
        <p className="text-blue-700">
          System programming enables direct control over resources, high performance, and the ability to build foundational software for all computing devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Memory Management</h3>
      <ul>
        <li>Manual allocation and deallocation (malloc/free in C, new/delete in C++)</li>
        <li>Stack vs heap memory</li>
        <li>Understanding pointers and memory safety</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Processes & Threads</h3>
      <ul>
        <li>Creating and managing processes and threads</li>
        <li>Synchronization primitives: mutexes, semaphores, condition variables</li>
        <li>Concurrency and parallelism basics</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. File & Device I/O</h3>
      <ul>
        <li>Low-level file operations (open, read, write, close)</li>
        <li>Interfacing with hardware devices</li>
        <li>Buffered vs unbuffered I/O</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. System Calls & OS Interfaces</h3>
      <ul>
        <li>Invoking system calls to interact with the OS kernel</li>
        <li>Understanding user mode vs kernel mode</li>
        <li>Common system APIs (POSIX, WinAPI)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Open and read a file in C
#include <stdio.h>
int main() {
  FILE *fp = fopen("data.txt", "r");
  if (fp) {
    char buf[100];
    while (fgets(buf, sizeof(buf), fp)) {
      printf("%s", buf);
    }
    fclose(fp);
  }
  return 0;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of System Programming</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Operating systems and kernel modules</li>
          <li>Device drivers and firmware</li>
          <li>Embedded and real-time systems</li>
          <li>Performance-critical libraries and tools</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        System programming foundations are essential for building robust, efficient, and low-level software.  
        Master these concepts to unlock the power of the underlying hardware and operating system.
      </p>
    </div>
  );
}