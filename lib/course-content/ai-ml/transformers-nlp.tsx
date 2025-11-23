export default function TransformersNlpContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Transformers for NLP</h2>
      <p className="text-gray-600">
        Transformers have revolutionized Natural Language Processing (NLP) by enabling models to capture long-range dependencies and context.  
        They power state-of-the-art applications in translation, summarization, and conversational AI.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Transformers?</h3>
        <p className="text-blue-700">
          Transformers use self-attention to process entire sequences in parallel, improving performance and scalability for NLP tasks.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Self-Attention Mechanism</h3>
      <p>
        Self-attention allows the model to weigh the importance of each word in a sequence relative to others, capturing context and relationships.
      </p>
      <ul>
        <li>Handles long-range dependencies</li>
        <li>Enables parallel processing</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Encoder-Decoder Structure</h3>
      <p>
        Transformers use encoder-decoder architectures for tasks like translation and summarization.
      </p>
      <ul>
        <li>Encoder processes input sequence</li>
        <li>Decoder generates output sequence</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Popular Transformer Models</h3>
      <ul>
        <li>BERT: Bidirectional Encoder Representations from Transformers</li>
        <li>GPT: Generative Pre-trained Transformer</li>
        <li>T5: Text-to-Text Transfer Transformer</li>
        <li>DistilBERT, RoBERTa, XLNet</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Using Hugging Face Transformers for text classification (Python)
from transformers import pipeline
classifier = pipeline("text-classification", model="distilbert-base-uncased")
result = classifier("Transformers are powerful for NLP.")
print(result)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Transformers in NLP</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Text classification</li>
          <li>Machine translation</li>
          <li>Question answering</li>
          <li>Text summarization</li>
          <li>Conversational AI</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Transformers are the backbone of modern NLP.  
        Mastering their architecture and applications unlocks advanced capabilities in language understanding and generation.
      </p>
    </div>
  );
}