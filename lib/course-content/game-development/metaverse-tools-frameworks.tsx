export default function MetaverseToolsFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Tools & Frameworks</h2>
      <p className="text-gray-600">
        Metaverse development uses a range of tools and frameworks to build virtual worlds, enable social interaction, and support cross-platform experiences.  
        Mastering these technologies helps you create immersive, scalable metaverse projects.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Metaverse Tools & Frameworks?</h3>
        <p className="text-blue-700">
          The right tools accelerate development, support interoperability, and enable advanced features like multiplayer, VR/AR, and blockchain integration.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Unity Metaverse SDKs</h3>
      <ul>
        <li>Build virtual worlds and avatars with Unity-based SDKs</li>
        <li>Integrate multiplayer, social, and blockchain features</li>
        <li>Deploy to PC, mobile, and VR platforms</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Unreal Metaverse Workflows</h3>
      <ul>
        <li>Create high-fidelity environments and interactions in Unreal Engine</li>
        <li>Use Blueprints and C++ for custom logic</li>
        <li>Support virtual production and cinematic experiences</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Web-Based Metaverse (Three.js, WebXR)</h3>
      <ul>
        <li>Develop browser-based virtual worlds using Three.js and WebXR</li>
        <li>Enable cross-device access and lightweight experiences</li>
        <li>Integrate web APIs for social and blockchain features</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Spatial.io, VRChat SDK</h3>
      <ul>
        <li>Use platforms like Spatial.io and VRChat for rapid prototyping</li>
        <li>Leverage built-in avatar, world, and networking systems</li>
        <li>Publish and share experiences with global audiences</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Three.js scene setup for web metaverse
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Metaverse Tools & Frameworks</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Virtual world and avatar creation</li>
          <li>Multiplayer and social experiences</li>
          <li>VR/AR and web-based metaverse projects</li>
          <li>Blockchain-enabled environments</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Metaverse tools and frameworks are essential for building immersive, connected digital worlds.  
        Master these technologies to create innovative, scalable metaverse experiences.
      </p>
    </div>
  );
}