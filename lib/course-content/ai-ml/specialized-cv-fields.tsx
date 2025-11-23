export default function SpecializedCvFieldsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Specialized Computer Vision Fields</h2>
      <p className="text-gray-600">
        Specialized computer vision fields extend core CV techniques to solve domain-specific problems.  
        These areas leverage advanced models and tailored approaches for unique challenges in industry and research.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Specialized CV?</h3>
        <p className="text-blue-700">
          Specialized CV fields enable breakthroughs in healthcare, autonomous systems, remote sensing, and more by adapting vision models to complex environments.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Medical Imaging</h3>
      <p>
        Computer vision is used to analyze medical images for diagnosis, segmentation, and treatment planning.
      </p>
      <ul>
        <li>CT, MRI, and X-ray analysis</li>
        <li>Tumor detection and segmentation</li>
        <li>Automated pathology</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Remote Sensing & Satellite Vision</h3>
      <p>
        Vision models process satellite and aerial imagery for environmental monitoring, agriculture, and urban planning.
      </p>
      <ul>
        <li>Land cover classification</li>
        <li>Disaster detection</li>
        <li>Crop health monitoring</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Autonomous Vehicles</h3>
      <p>
        CV powers perception systems in self-driving cars, enabling object detection, lane tracking, and obstacle avoidance.
      </p>
      <ul>
        <li>Real-time scene understanding</li>
        <li>Pedestrian and vehicle detection</li>
        <li>Sensor fusion (camera, LiDAR, radar)</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Industrial Inspection</h3>
      <p>
        Automated visual inspection systems detect defects and ensure quality in manufacturing.
      </p>
      <ul>
        <li>Surface defect detection</li>
        <li>Assembly verification</li>
        <li>Robotic guidance</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Medical image segmentation with U-Net (PyTorch)
import torch.nn as nn

class UNet(nn.Module):
    # ... U-Net architecture definition ...
    pass
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Specialized CV Fields</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Healthcare diagnostics</li>
          <li>Environmental monitoring</li>
          <li>Autonomous navigation</li>
          <li>Smart manufacturing</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Specialized CV fields drive innovation in critical domains.  
        Mastering these areas enables impactful solutions for industry, science, and society.
      </p>
    </div>
  );
}