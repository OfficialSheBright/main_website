export default function CnnBasedVisionContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">CNN-Based Computer Vision</h2>
      <p className="text-gray-600">
        Convolutional Neural Networks (CNNs) are the backbone of modern computer vision.  
        They excel at extracting spatial features from images and power state-of-the-art models for classification, detection, and segmentation.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why CNNs?</h3>
        <p className="text-blue-700">
          CNNs automatically learn hierarchical features from raw pixel data, making them highly effective for visual tasks.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Popular CNN Architectures</h3>
      <ul>
        <li><strong>VGG:</strong> Deep, simple architecture using stacked convolutional layers.</li>
        <li><strong>ResNet:</strong> Introduces residual connections to enable very deep networks.</li>
        <li><strong>MobileNet:</strong> Lightweight and efficient, ideal for mobile and edge devices.</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Object Detection Models</h3>
      <ul>
        <li><strong>YOLO (You Only Look Once):</strong> Real-time, single-shot detector.</li>
        <li><strong>SSD (Single Shot Multibox Detector):</strong> Fast, multi-scale detection.</li>
        <li><strong>Faster R-CNN:</strong> Two-stage detector with region proposals.</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Instance Segmentation</h3>
      <ul>
        <li><strong>Mask R-CNN:</strong> Extends Faster R-CNN for pixel-level object masks.</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Using a pre-trained ResNet for image classification (PyTorch)
import torchvision.models as models
model = models.resnet50(pretrained=True)
output = model(image_tensor)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of CNNs</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Image classification</li>
          <li>Object detection</li>
          <li>Face recognition</li>
          <li>Medical image analysis</li>
          <li>Autonomous vehicles</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        CNNs have revolutionized computer vision by enabling machines to interpret and understand images with high accuracy.  
        Mastering CNN architectures and their applications is essential for building advanced vision systems.
      </p>
    </div>
  );
}