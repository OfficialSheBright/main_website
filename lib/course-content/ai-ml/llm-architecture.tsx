export default function LlmArchitectureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">LLM Architecture</h2>
      <p className="text-gray-600">
        Large Language Models (LLMs) are built on transformer architectures, enabling them to understand and generate human language at scale.  
        Key components include attention mechanisms, positional encoding, and specialized training objectives.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Study LLM Architecture?</h3>
        <p className="text-blue-700">
          Understanding the architecture helps you design, train, and optimize models for tasks like text generation, summarization, and question answering.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Transformer Architecture In-Depth</h3>
      <p>
        Transformers use self-attention to process input sequences in parallel, capturing long-range dependencies and context.
      </p>
      <ul>
        <li>Multi-head attention</li>
        <li>Feed-forward layers</li>
        <li>Layer normalization</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Attention Mechanisms</h3>
      <p>
        Attention allows the model to focus on relevant parts of the input when generating output, improving performance on complex tasks.
      </p>
      <ul>
        <li>Self-attention</li>
        <li>Cross-attention</li>
        <li>Scaled dot-product attention</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Positional Encoding</h3>
      <p>
        Positional encoding injects information about the order of tokens, enabling transformers to process sequences effectively.
      </p>
      <ul>
        <li>Sine and cosine functions</li>
        <li>Learnable positional embeddings</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Training Objectives</h3>
      <p>
        LLMs are trained with objectives tailored to language tasks:
      </p>
      <ul>
        <li>Causal Language Modeling (predict next token)</li>
        <li>Masked Language Modeling (predict masked tokens)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Transformer block in PyTorch
import torch.nn as nn

class TransformerBlock(nn.Module):
    def __init__(self, embed_dim, num_heads):
        super().__init__()
        self.attn = nn.MultiheadAttention(embed_dim, num_heads)
        self.ff = nn.Sequential(
            nn.Linear(embed_dim, embed_dim * 4),
            nn.ReLU(),
            nn.Linear(embed_dim * 4, embed_dim)
        )
        self.norm1 = nn.LayerNorm(embed_dim)
        self.norm2 = nn.LayerNorm(embed_dim)

    def forward(self, x):
        attn_output, _ = self.attn(x, x, x)
        x = self.norm1(x + attn_output)
        ff_output = self.ff(x)
        x = self.norm2(x + ff_output)
        return x
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of LLM Architecture</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Text generation</li>
          <li>Summarization</li>
          <li>Translation</li>
          <li>Question answering</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        LLM architecture is the backbone of modern language models.  
        Mastering these concepts enables you to build and fine-tune powerful AI systems for diverse NLP tasks.
      </p>
    </div>
  );
}