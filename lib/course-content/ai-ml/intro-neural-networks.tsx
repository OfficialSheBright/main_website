export default function IntroNeuralNetworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Introduction to Neural Networks</h2>
      <p className="text-gray-600">
        Neural networks are the foundation of deep learning.  
        Inspired by the human brain, they consist of interconnected layers of nodes (neurons) that learn to represent complex patterns in data.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Neural Networks?</h3>
        <p className="text-blue-700">
          Neural networks can approximate any function, making them powerful tools for tasks like image recognition, speech processing, and more.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Perceptron</h3>
      <p>
        The perceptron is the simplest neural network, consisting of a single neuron.  
        It takes inputs, applies weights, and produces an output using an activation function.
      </p>
      <ul>
        <li>Binary classification</li>
        <li>Linear decision boundaries</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Activation Functions</h3>
      <p>
        Activation functions introduce non-linearity, allowing networks to learn complex patterns.
      </p>
      <ul>
        <li>Sigmoid</li>
        <li>ReLU (Rectified Linear Unit)</li>
        <li>Tanh</li>
        <li>Softmax</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Loss Functions</h3>
      <p>
        Loss functions measure how well the network&apos;s predictions match the true values.
      </p>
      <ul>
        <li>Mean Squared Error (MSE)</li>
        <li>Cross-Entropy Loss</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Backpropagation</h3>
      <p>
        Backpropagation is the algorithm used to train neural networks.  
        It computes gradients of the loss function with respect to weights and updates them using optimization techniques.
      </p>
      <ul>
        <li>Gradient descent</li>
        <li>Weight updates</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple perceptron in PyTorch
import torch
import torch.nn as nn

class Perceptron(nn.Module):
    def __init__(self, input_dim):
        super().__init__()
        self.fc = nn.Linear(input_dim, 1)
    def forward(self, x):
        return torch.sigmoid(self.fc(x))
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Neural Networks</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Image classification</li>
          <li>Speech recognition</li>
          <li>Natural language processing</li>
          <li>Time series forecasting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Neural networks are the building blocks of modern AI.  
        Understanding their structure and training process is essential for mastering deep learning.
      </p>
    </div>
  );
}