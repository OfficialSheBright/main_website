export default function DlFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Deep Learning Frameworks</h2>
      <p className="text-gray-600">
        Deep learning frameworks provide the tools and abstractions needed to build, train, and deploy neural networks efficiently.  
        Popular frameworks include PyTorch, TensorFlow, Keras, and JAX.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use DL Frameworks?</h3>
        <p className="text-blue-700">
          Frameworks simplify model development, offer GPU acceleration, and support large-scale experimentation and deployment.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. PyTorch</h3>
      <p>
        PyTorch is known for its flexibility and dynamic computation graphs.  
        It is widely used in research and production for building custom models.
      </p>
      <ul>
        <li>Easy debugging and prototyping</li>
        <li>Strong community support</li>
        <li>Integration with TorchServe for deployment</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. TensorFlow & Keras</h3>
      <p>
        TensorFlow is a scalable framework for both research and production.  
        Keras provides a high-level API for building and training models quickly.
      </p>
      <ul>
        <li>TensorFlow: Static computation graphs, deployment on mobile and web</li>
        <li>Keras: User-friendly, modular, runs on top of TensorFlow</li>
        <li>TensorFlow Serving for model deployment</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. JAX Basics</h3>
      <p>
        JAX is designed for high-performance numerical computing and automatic differentiation.  
        It is gaining popularity for research in deep learning and scientific computing.
      </p>
      <ul>
        <li>Composability and speed</li>
        <li>Automatic vectorization and GPU/TPU support</li>
        <li>Used for cutting-edge ML research</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple neural network in PyTorch
import torch
import torch.nn as nn

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc = nn.Linear(10, 2)
    def forward(self, x):
        return self.fc(x)

model = Net()
output = model(torch.randn(1, 10))
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of DL Frameworks</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Image and speech recognition</li>
          <li>Natural language processing</li>
          <li>Generative models</li>
          <li>Reinforcement learning</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Deep learning frameworks accelerate AI development and deployment.  
        Mastering these tools is essential for building state-of-the-art neural networks.
      </p>
    </div>
  );
}