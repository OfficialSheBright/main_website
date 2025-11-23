export default function CpuOptimizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">CPU Optimization</h2>
      <p className="text-gray-600">
        CPU optimization focuses on improving game performance by managing physics, multi-threading, and memory usage.  
        These techniques are essential for smooth gameplay, scalability, and efficient resource use.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Optimize CPU?</h3>
        <p className="text-blue-700">
          Optimizing CPU usage reduces lag, increases frame rates, and allows your game to run well on a wider range of devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Physics Budget</h3>
      <ul>
        <li>Limit the number of physics objects and calculations per frame</li>
        <li>Use simplified collision shapes and layers</li>
        <li>Profile physics performance and adjust settings as needed</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Multi-threading</h3>
      <ul>
        <li>Distribute tasks across multiple CPU cores for efficiency</li>
        <li>Use job systems or async tasks for AI, loading, and background processes</li>
        <li>Avoid race conditions and ensure thread safety</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Memory Management</h3>
      <ul>
        <li>Monitor and optimize memory allocation and usage</li>
        <li>Release unused objects and assets to prevent leaks</li>
        <li>Use object pooling for frequently created/destroyed objects</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# object pooling for optimization
public class ObjectPool {
    private Queue<GameObject> pool = new Queue<GameObject>();
    public GameObject GetObject() {
        return pool.Count > 0 ? pool.Dequeue() : InstantiateNew();
    }
    public void ReturnObject(GameObject obj) {
        pool.Enqueue(obj);
        obj.SetActive(false);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of CPU Optimization</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Real-time gameplay and physics</li>
          <li>AI and pathfinding systems</li>
          <li>Large-scale multiplayer games</li>
          <li>Mobile and low-end device support</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        CPU optimization is vital for high-performance games.  
        Master these techniques to deliver smooth, scalable experiences for all players.
      </p>
    </div>
  );
}