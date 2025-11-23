export default function GraphicsOptimizationUnityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Graphics & Optimization (Unity)</h2>
      <p className="text-gray-600">
        Graphics and optimization in Unity focus on creating visually stunning games while maintaining high performance.  
        Mastering these techniques ensures your games look great and run smoothly on all platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Optimize Graphics?</h3>
        <p className="text-blue-700">
          Optimized graphics deliver immersive experiences without sacrificing frame rate or device compatibility.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. URP / HDRP Pipelines</h3>
      <ul>
        <li>Choose Universal Render Pipeline (URP) for cross-platform performance</li>
        <li>Use High Definition Render Pipeline (HDRP) for advanced visuals</li>
        <li>Configure pipeline settings for your project’s needs</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Post-Processing Effects</h3>
      <ul>
        <li>Add bloom, color grading, and ambient occlusion for polish</li>
        <li>Balance visual quality with performance impact</li>
        <li>Use profiles to manage effects across scenes</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Shader Basics (Shader Graph)</h3>
      <ul>
        <li>Create custom shaders visually with Shader Graph</li>
        <li>Optimize shaders for mobile and desktop platforms</li>
        <li>Use efficient materials to reduce draw calls</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Profiling & Optimization</h3>
      <ul>
        <li>Use Unity Profiler to identify bottlenecks</li>
        <li>Optimize assets, textures, and lighting for performance</li>
        <li>Test on target devices and iterate for best results</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to enable post-processing profile
using UnityEngine;
using UnityEngine.Rendering.PostProcessing;
public class PostProcessingSetup : MonoBehaviour {
    public PostProcessVolume volume;
    void Start() {
        volume.enabled = true;
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Graphics Optimization (Unity)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile and desktop games</li>
          <li>VR/AR experiences</li>
          <li>High-fidelity and stylized projects</li>
          <li>Cross-platform deployment</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Graphics optimization in Unity is essential for beautiful, performant games.  
        Master these techniques to deliver stunning visuals on any device.
      </p>
    </div>
  );
}