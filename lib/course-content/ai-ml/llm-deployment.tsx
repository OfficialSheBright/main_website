export default function LlmDeploymentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">LLM Deployment</h2>
      <p className="text-gray-600">
        Deploying Large Language Models (LLMs) requires efficient serving frameworks, scalable infrastructure, and integration with retrieval systems.  
        Modern deployment strategies enable real-time inference, retrieval-augmented generation, and multi-agent orchestration.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why LLM Deployment?</h3>
        <p className="text-blue-700">
          Proper deployment ensures low-latency responses, cost-effective scaling, and secure access to powerful language models in production.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Serving LLMs with vLLM/TensorRT-LLM</h3>
      <p>
        Specialized frameworks like vLLM and TensorRT-LLM optimize inference speed and resource usage for large models.
      </p>
      <ul>
        <li>vLLM: Fast, memory-efficient LLM serving</li>
        <li>TensorRT-LLM: GPU-accelerated inference for production workloads</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Retrieval Augmented Generation (RAG)</h3>
      <p>
        RAG combines LLMs with external knowledge sources, retrieving relevant documents to enhance responses.
      </p>
      <ul>
        <li>Improves factual accuracy</li>
        <li>Enables domain-specific applications</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Vector Databases</h3>
      <p>
        Vector databases store and search high-dimensional embeddings for fast retrieval in RAG systems.
      </p>
      <ul>
        <li>FAISS: Open-source similarity search</li>
        <li>Pinecone, Weaviate: Managed vector database services</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Multi-Agent Systems</h3>
      <p>
        Multi-agent architectures coordinate multiple LLMs or tools to solve complex tasks collaboratively.
      </p>
      <ul>
        <li>Task decomposition</li>
        <li>Agent communication and orchestration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Querying a vector database with FAISS (Python)
import faiss
import numpy as np

index = faiss.IndexFlatL2(768)
vectors = np.random.rand(1000, 768).astype('float32')
index.add(vectors)
query = np.random.rand(1, 768).astype('float32')
D, I = index.search(query, k=5)
print("Top 5 similar vectors:", I)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of LLM Deployment</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enterprise chatbots</li>
          <li>Document search and Q&A</li>
          <li>Automated customer support</li>
          <li>Knowledge management systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        LLM deployment enables scalable, secure, and high-performance language applications.  
        Mastering these techniques is essential for bringing advanced AI capabilities to real-world products.
      </p>
    </div>
  );
}