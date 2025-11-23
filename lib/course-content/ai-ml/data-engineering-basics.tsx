export default function CvFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Computer Vision Foundations</h2>
      <p className="text-gray-600">
        Computer Vision (CV) is a field of AI that enables machines to interpret and understand visual information from the world.  
        Foundational concepts in CV include how images are formed, processed, and analyzed for downstream tasks.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Study CV Foundations?</h3>
        <p className="text-blue-700">
          Understanding the basics of image formation and processing is essential for building effective computer vision systems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Image Formation</h3>
      <p>
        Digital images are created by capturing light through sensors.  
        Each image is a grid of pixels, where each pixel represents color and intensity.
      </p>
      <ul>
        <li>Grayscale images: Single channel (intensity)</li>
        <li>Color images: Multiple channels (RGB)</li>
        <li>Resolution: Number of pixels (width × height)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Color Spaces</h3>
      <p>
        Color spaces define how colors are represented in images.  
        Common color spaces include:
      </p>
      <ul>
        <li><strong>RGB:</strong> Red, Green, Blue channels</li>
        <li><strong>HSV:</strong> Hue, Saturation, Value</li>
        <li><strong>Grayscale:</strong> Single intensity channel</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Image Filtering (OpenCV)</h3>
      <p>
        Image filtering is used to enhance or extract features from images.  
        Common filters include:
      </p>
      <ul>
        <li>Blurring (Gaussian, Median)</li>
        <li>Sharpening</li>
        <li>Edge detection (Sobel, Canny)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Applying Gaussian blur using OpenCV (Python)
import cv2
image = cv2.imread("input.jpg")
blurred = cv2.GaussianBlur(image, (5, 5), 0)
cv2.imwrite("blurred.jpg", blurred)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of CV Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Preprocessing for deep learning models</li>
          <li>Medical image analysis</li>
          <li>Autonomous vehicles</li>
          <li>Robotics and automation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Mastering CV foundations is the first step toward building advanced computer vision applications.  
        These basics enable effective image analysis and feature extraction for real-world AI systems.
      </p>
    </div>
  );
}