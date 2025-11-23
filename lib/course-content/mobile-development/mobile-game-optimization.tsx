export default function MobileGameOptimizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Mobile Game Optimization</h2>
      <p className="text-gray-600">
        Mobile game optimization focuses on improving performance, reducing resource usage, and ensuring smooth gameplay across a wide range of devices.  
        Mastering these techniques is essential for delivering high-quality, enjoyable experiences to all players.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Optimize Mobile Games?</h3>
        <p className="text-blue-700">
          Optimization increases frame rates, reduces crashes, and extends battery life, making your game accessible and fun for more users.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Rendering & Graphics</h3>
      <ul>
        <li>Reduce draw calls and overdraw</li>
        <li>Use efficient shaders and compressed textures</li>
        <li>Optimize lighting and particle effects</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Asset Management</h3>
      <ul>
        <li>Compress images, audio, and 3D models</li>
        <li>Load assets on demand (lazy loading)</li>
        <li>Remove unused resources from builds</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Memory & CPU Optimization</h3>
      <ul>
        <li>Profile and fix memory leaks</li>
        <li>Minimize allocations in game loops</li>
        <li>Use object pooling for frequently created objects</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Battery & Thermal Efficiency</h3>
      <ul>
        <li>Limit background processing and network usage</li>
        <li>Reduce frame rate when the game is paused or inactive</li>
        <li>Profile battery and thermal impact on real devices</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity object pooling for optimization (C#)
public class ObjectPool : MonoBehaviour {
  public GameObject prefab;
  private Queue<GameObject> pool = new Queue<GameObject>();
  public GameObject Get() {
    if (pool.Count > 0) return pool.Dequeue();
    return Instantiate(prefab);
  }
  public void Release(GameObject obj) {
    obj.SetActive(false);
    pool.Enqueue(obj);
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Mobile Game Optimization</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Casual and arcade games</li>
          <li>3D and action games</li>
          <li>Cross-platform mobile games</li>
          <li>Games targeting low-end and global devices</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Mobile game optimization is crucial for performance, user satisfaction, and device compatibility.  
        Master these techniques to deliver smooth, engaging games for any audience.
      </p>
    </div>
  );
}