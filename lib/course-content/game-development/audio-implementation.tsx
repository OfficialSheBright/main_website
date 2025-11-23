export default function AudioImplementationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Audio Implementation</h2>
      <p className="text-gray-600">
        Audio implementation covers integrating sound and music into games using engine-specific tools and workflows.  
        These skills are essential for creating immersive, responsive audio experiences in Unity, Unreal, and VR/AR projects.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Implement Audio?</h3>
        <p className="text-blue-700">
          Proper audio implementation ensures sounds play at the right time, respond to gameplay, and enhance player immersion.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Unity Audio Mixer</h3>
      <ul>
        <li>Mix and control multiple audio sources in real time</li>
        <li>Apply effects like reverb, EQ, and ducking</li>
        <li>Trigger sounds based on game events and player actions</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Unreal Sound Cues</h3>
      <ul>
        <li>Design complex audio behaviors with node-based sound cues</li>
        <li>Randomize, loop, and blend sounds for variety</li>
        <li>Integrate audio with Blueprints and gameplay logic</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Spatial Audio for VR/AR</h3>
      <ul>
        <li>Simulate 3D sound positioning for immersive environments</li>
        <li>Use spatial audio plugins and engine features</li>
        <li>Enhance realism and player presence in VR/AR experiences</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to adjust audio volume with Audio Mixer
using UnityEngine;
using UnityEngine.Audio;
public class AudioControl : MonoBehaviour {
    public AudioMixer mixer;
    public void SetVolume(float volume) {
        mixer.SetFloat("MasterVolume", Mathf.Log10(volume) * 20);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Audio Implementation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Dynamic sound effects and music</li>
          <li>Interactive audio in gameplay</li>
          <li>Immersive VR/AR soundscapes</li>
          <li>Audio feedback for UI and player actions</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Audio implementation is essential for responsive, immersive game experiences.  
        Master these workflows to deliver high-quality sound in any project.
      </p>
    </div>
  );
}