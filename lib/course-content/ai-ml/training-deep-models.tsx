export default function TrainingDeepModelsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Training Deep Models</h2>
      <p className="text-gray-600">
        Training deep learning models involves optimizing neural networks to learn patterns from large datasets.  
        Key practices include choosing the right optimizer, managing overfitting, and monitoring training progress.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Training Matters?</h3>
        <p className="text-blue-700">
          Effective training ensures models generalize well, avoid overfitting, and deliver high performance on unseen data.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Optimizers</h3>
      <p>
        Optimizers update model weights to minimize the loss function.
      </p>
      <ul>
        <li>SGD (Stochastic Gradient Descent)</li>
        <li>Adam</li>
        <li>RMSprop</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Regularization Techniques</h3>
      <p>
        Regularization helps prevent overfitting and improves model generalization.
      </p>
      <ul>
        <li>Dropout</li>
        <li>Weight decay (L2 regularization)</li>
        <li>Early stopping</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Learning Rate Scheduling</h3>
      <p>
        Adjusting the learning rate during training can speed up convergence and improve results.
      </p>
      <ul>
        <li>Step decay</li>
        <li>Exponential decay</li>
        <li>Cyclical learning rates</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Monitoring Training</h3>
      <p>
        Track metrics like loss and accuracy to evaluate model progress and detect issues.
      </p>
      <ul>
        <li>Validation loss and accuracy</li>
        <li>TensorBoard for visualization</li>
        <li>Early stopping based on validation metrics</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Training a deep model with PyTorch
import torch
import torch.nn as nn
import torch.optim as optim

model = nn.Sequential(nn.Linear(784, 128), nn.ReLU(), nn.Linear(128, 10))
optimizer = optim.Adam(model.parameters(), lr=0.001)
loss_fn = nn.CrossEntropyLoss()

for epoch in range(10):
    for X, y in dataloader:
        optimizer.zero_grad()
        output = model(X)
        loss = loss_fn(output, y)
        loss.backward()
        optimizer.step()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Deep Model Training</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Image and speech recognition</li>
          <li>Natural language processing</li>
          <li>Generative AI</li>
          <li>Autonomous systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Training deep models is a blend of science and engineering.  
        Mastering optimizers, regularization, and monitoring is key to building robust, high-performing AI systems.
      </p>
    </div>
  );
}