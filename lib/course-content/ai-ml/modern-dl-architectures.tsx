export default function ModernDlArchitecturesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Modern Deep Learning Architectures</h2>
      <p className="text-gray-600">
        Modern deep learning architectures have revolutionized AI by enabling breakthroughs in vision, language, and generative tasks.  
        Key models include feedforward networks, convolutional neural networks (CNNs), recurrent neural networks (RNNs), and transformers.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Modern Architectures?</h3>
        <p className="text-blue-700">
          These architectures allow neural networks to learn complex representations, scale to large datasets, and solve diverse real-world problems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Feedforward Networks</h3>
      <p>
        The simplest neural network architecture, where information flows in one direction from input to output.
      </p>
      <ul>
        <li>Used for basic classification and regression tasks</li>
        <li>Consists of input, hidden, and output layers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Convolutional Neural Networks (CNNs)</h3>
      <p>
        CNNs are designed for processing grid-like data such as images.  
        They use convolutional layers to extract spatial features.
      </p>
      <ul>
        <li>Image classification</li>
        <li>Object detection</li>
        <li>Segmentation</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Recurrent Neural Networks (RNNs, LSTMs, GRUs)</h3>
      <p>
        RNNs process sequential data by maintaining hidden states across time steps.  
        LSTMs and GRUs address the vanishing gradient problem, enabling learning of long-term dependencies.
      </p>
      <ul>
        <li>Text and speech processing</li>
        <li>Time series analysis</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Transformers Intro</h3>
      <p>
        Transformers use self-attention mechanisms to model relationships between all elements in a sequence.  
        They have become the standard for NLP and are increasingly used in vision and generative tasks.
      </p>
      <ul>
        <li>Scalable to large datasets</li>
        <li>State-of-the-art in NLP and vision</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple CNN layer in PyTorch
import torch.nn as nn

cnn = nn.Sequential(
    nn.Conv2d(3, 16, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2)
)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Modern DL Architectures</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Image and video analysis</li>
          <li>Natural language understanding</li>
          <li>Speech recognition</li>
          <li>Generative AI</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Modern deep learning architectures are the backbone of today’s AI systems.  
        Mastering these models is essential for building advanced solutions in vision, language, and generative domains.
      </p>
    </div>
  );
}