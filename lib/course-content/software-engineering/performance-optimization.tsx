export default function PerformanceOptimizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Performance Optimization</h2>
      <p className="text-gray-600">
        Performance optimization is the practice of improving software speed, efficiency, and resource usage.  
        Mastering these techniques is essential for building responsive, scalable, and cost-effective systems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Performance Optimization?</h3>
        <p className="text-blue-700">
          Optimized software delivers better user experiences, reduces infrastructure costs, and scales to handle more users and data.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Algorithmic Optimization</h3>
      <ul>
        <li>Choose efficient algorithms and data structures</li>
        <li>Analyze time and space complexity (Big O notation)</li>
        <li>Profile code to find bottlenecks</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Memory Profiling</h3>
      <ul>
        <li>Identify memory leaks and excessive allocations</li>
        <li>Use profiling tools (Valgrind, VisualVM, etc.)</li>
        <li>Optimize data storage and object lifecycles</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. CPU Profiling</h3>
      <ul>
        <li>Measure CPU usage and identify hot paths</li>
        <li>Optimize loops, recursion, and parallelism</li>
        <li>Leverage multi-threading and vectorization</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Network Optimization</h3>
      <ul>
        <li>Reduce latency and bandwidth usage</li>
        <li>Use caching, compression, and efficient protocols</li>
        <li>Minimize round-trips and optimize API calls</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Timing a function in Python
import time
start = time.time()
# ... code to profile ...
end = time.time()
print(f"Elapsed: {end - start:.4f} seconds")
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Performance Optimization</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building responsive user interfaces</li>
          <li>Scaling backend systems and APIs</li>
          <li>Reducing cloud and hardware costs</li>
          <li>Improving battery life and efficiency in embedded systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Performance optimization is a critical skill for all software engineers.  
        Master these techniques to deliver fast, efficient, and scalable software.
      </p>
    </div>
  );
}