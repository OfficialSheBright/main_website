export default function ImagingTechniquesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Imaging Techniques</h2>
      <p className="text-gray-600">
        Imaging techniques are essential for extracting meaningful information from visual data.  
        They enable computers to detect edges, segment regions, and identify features in images, forming the basis for advanced computer vision tasks.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Imaging Techniques?</h3>
        <p className="text-blue-700">
          These techniques help preprocess images, enhance important structures, and prepare data for machine learning models.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Edge Detection</h3>
      <p>
        Edge detection highlights boundaries and transitions in images.  
        Common algorithms include:
      </p>
      <ul>
        <li>Sobel filter</li>
        <li>Canny edge detector</li>
        <li>Laplacian filter</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Segmentation</h3>
      <p>
        Segmentation divides an image into meaningful regions or objects.  
        It is used for medical imaging, autonomous driving, and more.
      </p>
      <ul>
        <li>Thresholding</li>
        <li>Watershed algorithm</li>
        <li>Region growing</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Feature Extraction</h3>
      <p>
        Feature extraction identifies key points or descriptors in images for tasks like matching and recognition.
      </p>
      <ul>
        <li>SIFT (Scale-Invariant Feature Transform)</li>
        <li>ORB (Oriented FAST and Rotated BRIEF)</li>
        <li>HOG (Histogram of Oriented Gradients)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Edge detection with OpenCV (Python)
import cv2
image = cv2.imread("input.jpg", 0)
edges = cv2.Canny(image, 100, 200)
cv2.imwrite("edges.jpg", edges)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Imaging Techniques</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Medical image analysis</li>
          <li>Object detection and tracking</li>
          <li>Robotics and automation</li>
          <li>Remote sensing</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Imaging techniques are the building blocks of computer vision.  
        Mastering these methods enables effective preprocessing and analysis for a wide range of AI applications.
      </p>
    </div>
  );
}