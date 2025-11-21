export default function AdvancedTopicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced Deep Learning Topics</h2>
      <p className="text-gray-600">
        Deep learning has rapidly evolved beyond basic neural networks and CNNs. Modern breakthroughs
        such as attention mechanisms, self-supervised learning, and distributed training have enabled
        models that can learn complex patterns from massive datasets with high efficiency.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced Topics Matter</h3>
        <p className="text-blue-700">
          These concepts form the backbone of state-of-the-art models in vision, NLP, speech, and
          generative AI — including transformers, GPT, diffusion models, and multi-modal systems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Attention Mechanisms</h3>
      <p>
        Attention allows models to focus on the most relevant parts of an input sequence. It solves
        the limitations of RNNs and LSTMs by enabling parallelization and long-range dependency
        modeling.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Types of Attention</h4>
      <ul>
        <li>Self-attention</li>
        <li>Cross-attention</li>
        <li>Multi-head attention</li>
        <li>Scaled dot-product attention</li>
      </ul>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# PyTorch: Scaled Dot-Product Attention (simplified)
scores = Q @ K.transpose(-2, -1) / math.sqrt(d_k)
weights = torch.softmax(scores, dim=-1)
output = weights @ V`}
        </code>
      </pre>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Self-Supervised Learning (SSL)</h3>
      <p>
        Self-supervised learning teaches models without human-labeled data by designing proxy tasks.
        SSL powers modern NLP (BERT, GPT), vision models (MAE, SimCLR), and speech models (Wav2Vec).
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ SSL Techniques</h4>
      <ul>
        <li>Masking (BERT-style MLM)</li>
        <li>Contrastive tasks (SimCLR, MoCo)</li>
        <li>Reconstruction tasks (autoencoders, MAE)</li>
        <li>Sequence prediction (GPT causal LM)</li>
      </ul>

      <div className="p-4 border-l-4 border-purple-500 bg-purple-100 rounded">
        <h3 className="font-semibold text-purple-800">Why SSL is Important</h3>
        <ul className="text-purple-700 list-disc ml-6">
          <li>Removes dependency on labeled datasets</li>
          <li>Enables world-scale training</li>
          <li>Builds universal representations</li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Contrastive Learning</h3>
      <p>
        A special type of SSL where a model learns by pulling similar examples closer and pushing
        dissimilar ones apart in embedding space.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Popular Contrastive Models</h4>
      <ul>
        <li>SimCLR</li>
        <li>MoCo</li>
        <li>BYOL</li>
        <li>CLIP (image-text multimodal)</li>
      </ul>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Simplified contrastive loss
cos_sim = torch.nn.functional.cosine_similarity(z_i, z_j)
loss = -torch.log(exp(cos_sim / τ) / sum(exp(all_sims / τ)))`}
        </code>
      </pre>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Distributed Training</h3>
      <p>
        Distributed training enables training very large models across many GPUs or TPUs. It is
        essential for modern deep learning where single-GPU training is too slow or impossible.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Strategies for Distributed Training</h4>
      <ul>
        <li>Data parallelism</li>
        <li>Model parallelism</li>
        <li>Pipeline parallelism</li>
        <li>Tensor parallelism (Megatron-LM)</li>
        <li>ZeRO optimization (DeepSpeed)</li>
      </ul>

      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Distributed Training Frameworks</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>PyTorch Distributed</li>
          <li>DeepSpeed</li>
          <li>Horovod</li>
          <li>JAX + TPU pods</li>
        </ul>
      </div>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Advanced Regularization Techniques</h3>
      <p>
        Regularization ensures models generalize well rather than memorizing data. Modern methods
        reduce overfitting even with massive architectures.
      </p>

      <ul>
        <li>Label smoothing</li>
        <li>Stochastic depth (used in ResNet/ViT)</li>
        <li>DropPath</li>
        <li>Mixup & CutMix</li>
        <li>AugMix</li>
      </ul>

      {/* SECTION 6 */}
      <h3 className="text-2xl font-bold text-gray-800">6. Summary</h3>
      <p>
        Advanced deep learning topics form the foundation of cutting-edge AI systems. Mastering them
        enables you to understand and build modern architectures like transformers, CLIP, diffusion
        models, GPT, SAM, and more.
      </p>

      <ul className="list-disc ml-6">
        <li>Attention mechanisms → Focus on important information</li>
        <li>Self-supervised learning → Train without labels</li>
        <li>Contrastive learning → Learn via similarity</li>
        <li>Distributed training → Scale to huge models</li>
        <li>Advanced regularization → Better generalization</li>
      </ul>
    </div>
  );
}
