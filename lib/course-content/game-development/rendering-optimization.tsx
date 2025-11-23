export default function RenderingOptimizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Rendering Optimization</h2>
      <p className="text-gray-600">
        Rendering optimization focuses on improving visual performance and quality in games by managing lighting, shaders, and asset efficiency.  
        Mastering these techniques ensures smooth gameplay and stunning visuals across devices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Optimize Rendering?</h3>
        <p className="text-blue-700">
          Optimized rendering reduces lag, increases frame rates, and allows your game to look great on a wide range of hardware.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Lighting Optimization</h3>
      <ul>
        <li>Use baked lighting for static scenes to reduce real-time calculations</li>
        <li>Limit dynamic lights and shadows for better performance</li>
        <li>Optimize lightmap resolution and compression</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Shader Efficiency</h3>
      <ul>
        <li>Use simple, optimized shaders for mobile and VR</li>
        <li>Reduce the number of shader variants and complexity</li>
        <li>Profile and debug shaders for bottlenecks</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Asset Optimization</h3>
      <ul>
        <li>Compress textures and use appropriate resolutions</li>
        <li>Reduce polygon count for models where possible</li>
        <li>Use LOD (Level of Detail) systems for distant objects</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Culling & Occlusion</h3>
      <ul>
        <li>Implement frustum culling to render only visible objects</li>
        <li>Use occlusion culling to skip rendering objects blocked from view</li>
        <li>Optimize scene hierarchy for efficient culling</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to enable occlusion culling
using UnityEngine;
public class EnableOcclusion : MonoBehaviour {
    void Start() {
        Camera.main.useOcclusionCulling = true;
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Rendering Optimization</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile and VR games</li>
          <li>High-fidelity desktop and console projects</li>
          <li>Large open-world environments</li>
          <li>Cross-platform performance tuning</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Rendering optimization is vital for delivering beautiful, performant games.  
        Master these techniques to ensure smooth visuals and gameplay on any device.
      </p>
    </div>
  );
}