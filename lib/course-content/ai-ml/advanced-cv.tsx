export default function AdvancedCvContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced Computer Vision</h2>
      <p className="text-gray-600">
        Advanced Computer Vision (CV) techniques power cutting-edge applications like self-driving cars,
        facial recognition, medical image analysis, and real-time video intelligence.  
        In this topic, we go beyond basic CNNs and explore modern CV architectures, transformers,
        object detection models, segmentation networks, and more.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced CV?</h3>
        <p className="text-blue-700">
          Traditional CNNs are not enough for complex real-world tasks.  
          Modern CV uses hybrid architectures, transformers, attention, multiscale features,
          and high-performance detection/segmentation models.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Object Detection Models</h3>
      <p>
        Object detection identifies objects in an image and draws bounding boxes around them.
        Modern detectors are extremely fast and accurate.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ YOLO Family (You Only Look Once)</h4>
      <ul>
        <li>Real-time detection</li>
        <li>Single-shot architecture</li>
        <li>Very fast even on low compute</li>
      </ul>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# YOLO prediction example (Python)
results = model.predict("image.jpg")
results.show()`}
        </code>
      </pre>

      <h4 className="text-xl font-semibold text-gray-700">✔️ SSD (Single Shot Multibox Detector)</h4>
      <p>
        Uses multiple feature maps for detection; high FPS and good general accuracy.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Faster R-CNN</h4>
      <p>
        Two-stage detector with Region Proposal Network (RPN) + classification head.
        Slower but more accurate than single-shot detectors.
      </p>

      {/* BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Where are detection models used?</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Autonomous driving</li>
          <li>Traffic & CCTV surveillance</li>
          <li>Retail & shelf monitoring</li>
          <li>Face & person detection</li>
        </ul>
      </div>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Image Segmentation</h3>
      <p>
        Segmentation labels each pixel into a category.  
        It is used for medical imaging, drone mapping, robotics, and more.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Semantic Segmentation</h4>
      <p>All objects of the same class share the same label (e.g., all cars).</p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Instance Segmentation</h4>
      <p>Each object instance is uniquely labeled (Car 1, Car 2, etc.).</p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Popular Segmentation Models</h4>
      <ul>
        <li>U-Net</li>
        <li>Mask R-CNN</li>
        <li>DeepLabV3+</li>
      </ul>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Pseudocode: Segmentation output
mask = model.predict("image.jpg")
visualize(mask)`}
        </code>
      </pre>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Vision Transformers (ViT)</h3>
      <p>
        Transformers revolutionized CV by replacing convolution with self-attention.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ How ViT Works</h4>
      <ul>
        <li>Image → split into small patches</li>
        <li>Flatten + add positional embeddings</li>
        <li>Send through transformer encoder</li>
      </ul>

      <div className="p-4 border-l-4 border-purple-500 bg-purple-100 rounded">
        <h3 className="font-semibold text-purple-800">Benefits of ViT</h3>
        <ul className="text-purple-700 list-disc ml-6">
          <li>No convolution needed</li>
          <li>Global receptive field from early layers</li>
          <li>Scales extremely well with data</li>
        </ul>
      </div>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Hybrid CNN + Transformer Models</h4>
      <ul>
        <li>DeiT</li>
        <li>Swin Transformer</li>
        <li>ConvNeXt</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Feature Extraction & Embeddings</h3>
      <p>
        Modern CV uses embeddings to represent images in high-dimensional latent space.
        These embeddings power search, similarity, and classification tasks.
      </p>

      <ul>
        <li>ResNet Embeddings</li>
        <li>Swin Transformer Embeddings</li>
        <li>CLIP Vision Embeddings</li>
      </ul>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Extracting image embeddings
embedding = model.encode_image(image)
print(embedding)`}
        </code>
      </pre>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Real-Time Video Analysis</h3>
      <p>
        Video-based CV adds temporal understanding. Models track movement, detect actions,
        and analyze behavior in real-time.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Key Techniques</h4>
      <ul>
        <li>Optical Flow</li>
        <li>Action Recognition</li>
        <li>Object Tracking (DeepSORT, ByteTrack)</li>
        <li>Pose Estimation (OpenPose, Mediapipe)</li>
      </ul>

      <div className="p-4 border-l-4 border-orange-500 bg-orange-100 rounded">
        <h3 className="font-semibold text-orange-800">Video CV Applications</h3>
        <ul className="text-orange-700 list-disc ml-6">
          <li>Sports analytics</li>
          <li>CCTV surveillance</li>
          <li>Gesture recognition</li>
          <li>Human activity tracking</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">6. Summary</h3>
      <p>
        Advanced CV models allow machines to understand the world visually with high accuracy.
        These techniques form the backbone of self-driving systems, robotics, virtual assistants,
        and modern AI pipelines.
      </p>

      <ul className="list-disc ml-6">
        <li>Detection → YOLO, SSD, Faster R-CNN</li>
        <li>Segmentation → U-Net, Mask R-CNN, DeepLab</li>
        <li>Transformers → ViT, Swin, DeiT</li>
        <li>Embeddings → CLIP, ResNet, ConvNeXt</li>
        <li>Video Analysis → Tracking, recognition, pose estimation</li>
      </ul>
    </div>
  );
}
