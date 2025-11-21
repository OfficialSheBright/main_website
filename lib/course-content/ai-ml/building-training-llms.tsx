export default function BuildingTrainingLlmsContent() {
  return (
    <div className="prose prose-lg max-w-none">

      <h1 className="text-4xl font-bold mb-6">Building & Training LLMs</h1>
      <p>
        Large Language Models (LLMs) are built through a combination of architectural choices,
        training strategies, massive datasets, and compute infrastructure. This topic explains
        the entire pipeline required to build, pretrain, fine-tune, and deploy LLMs.
      </p>

      {/* Overview */}
      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6">
        <p className="font-semibold">In this topic, you will learn:</p>
        <ul className="list-disc ml-6">
          <li>How LLM architectures are designed</li>
          <li>Pretraining and fine-tuning pipeline</li>
          <li>Tokenization and dataset preparation</li>
          <li>Training infrastructure: GPUs, TPUs, clusters</li>
          <li>Efficient training methods (LoRA, QLoRA, DPO)</li>
          <li>Evaluation and safety alignment</li>
        </ul>
      </div>

      {/* Section 1 */}
      <h2 className="text-3xl font-semibold mt-10">1. Understanding LLM Architecture</h2>
      <p>
        Modern LLMs are built on **Transformer-based autoregressive models**. The core idea is to
        predict the next token in a sequence using self-attention mechanisms.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Key Architectural Components</h3>
      <ul className="list-disc ml-6">
        <li><strong>Embedding Layer:</strong> Converts tokens to vectors.</li>
        <li><strong>Multi-Head Self Attention:</strong> Allows model to learn relationships across tokens.</li>
        <li><strong>Feed Forward Networks:</strong> Process attention outputs.</li>
        <li><strong>Normalization + Residuals:</strong> Helps stabilize deep training.</li>
        <li><strong>LM Head:</strong> Predicts output token probabilities.</li>
      </ul>

      {/* Code Example */}
      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`# Pseudo-code for a Transformer block

x = embeddings(tokens)
for layer in layers:
    x = x + self_attention(layer.norm1(x))
    x = x + feedforward(layer.norm2(x))

logits = lm_head(x)
`}
        </pre>
      </div>

      {/* Section 2 */}
      <h2 className="text-3xl font-semibold mt-10">2. Tokenization & Dataset Preparation</h2>
      <p>
        LLMs train on billions of tokens. The tokenizer determines how raw text becomes model-readable.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Popular Tokenizers</h3>
      <ul className="list-disc ml-6">
        <li><strong>BPE (Byte Pair Encoding)</strong></li>
        <li><strong>SentencePiece</strong></li>
        <li><strong>Unigram LM tokenizer</strong></li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Dataset Types</h3>
      <ul className="list-disc ml-6">
        <li>Web-crawled datasets (The Pile, C4, CommonCrawl)</li>
        <li>Books, articles, academic papers</li>
        <li>Code datasets (Github, CodePile, TheStack)</li>
        <li>Instruction datasets (human-generated or synthetic)</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-3xl font-semibold mt-10">3. Pretraining LLMs</h2>
      <p>
        Pretraining is the most expensive stage — models learn grammar, reasoning patterns, world
        knowledge, and token relationships.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Training Objective</h3>
      <p><strong>Next Token Prediction (NTP)</strong> is used by most LLMs.</p>

      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`loss = cross_entropy(model_output, next_token)`}
        </pre>
      </div>

      <h3 className="text-2xl font-semibold mt-6">Massive Compute Requirements</h3>
      <ul className="list-disc ml-6">
        <li>GPUs: A100, H100, MI300</li>
        <li>Training clusters with 256–2048 GPUs</li>
        <li>Distributed training: Data Parallel, Tensor Parallel, Pipeline Parallel</li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-3xl font-semibold mt-10">4. Fine-Tuning LLMs</h2>
      <p>
        Fine-tuning tailors the pretrained model to specific tasks. Modern LLM fine-tuning is efficient,
        low-cost and can be done with consumer GPUs using parameter-efficient methods.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Fine-Tuning Methods</h3>
      <ul className="list-disc ml-6">
        <li><strong>Full Fine-tuning:</strong> All parameters updated (very expensive)</li>
        <li><strong>LoRA / QLoRA:</strong> Only low-rank matrices trained (cheap & efficient)</li>
        <li><strong>DPO / PPO:</strong> Reinforcement learning for alignment</li>
      </ul>

      <div className="bg-gray-900 text-white p-4 rounded-lg my-6">
        <pre>
{`# QLoRA pipeline (HuggingFace example)

model = load_model_4bit("llama")
lora_model = apply_qlora(model)
trainer.train()
`}
        </pre>
      </div>

      {/* Section 5 */}
      <h2 className="text-3xl font-semibold mt-10">5. Evaluation & Alignment</h2>
      <p>
        Evaluation ensures LLMs behave as expected before deployment.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Evaluation Benchmarks</h3>
      <ul className="list-disc ml-6">
        <li>MMLU</li>
        <li>ARC</li>
        <li>HellaSwag</li>
        <li>TruthfulQA</li>
        <li>OpenLLM Leaderboards</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Safety & Alignment</h3>
      <ul className="list-disc ml-6">
        <li>RLHF (Reinforcement Learning from Human Feedback)</li>
        <li>DPO (Direct Preference Optimization)</li>
        <li>Constitutional AI</li>
        <li>Guardrails & safety layers</li>
      </ul>

      {/* Section 6 */}
      <h2 className="text-3xl font-semibold mt-10">6. Deploying LLMs</h2>
      <p>
        Deployment turns the trained model into a scalable API or application.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Deployment Approaches</h3>
      <ul className="list-disc ml-6">
        <li>GPU servers</li>
        <li>Inference-optimized hardware (TPUs, Inferentia, H200)</li>
        <li>Serverless LLM APIs</li>
        <li>On-device LLMs (Mobile, Edge)</li>
        <li>Quantized models for fast inference (4-bit, 8-bit)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Optimization Techniques</h3>
      <ul className="list-disc ml-6">
        <li>KV cache optimization</li>
        <li>Speculative decoding</li>
        <li>FlashAttention</li>
        <li>TensorRT / vLLM / TGI</li>
      </ul>

      {/* Summary */}
      <div className="border-l-4 border-green-600 bg-green-50 p-4 my-10">
        <h3 className="text-2xl font-semibold">Summary</h3>
        <p>
          Building and training LLMs involves architecture design, massive-scale pretraining, efficient
          fine-tuning, safety alignment, and optimized deployment strategies. These techniques enable
          modern generative AI systems that power chatbots, copilots, research tools, and more.
        </p>
      </div>

    </div>
  );
}
