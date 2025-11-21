export default function AdvancedNlpApplicationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced NLP Applications</h2>
      <p className="text-gray-600">
        Modern Natural Language Processing (NLP) has evolved far beyond simple text classification
        or keyword extraction. Today, NLP powers conversational AI, summarization engines,
        intelligent assistants, search systems, information extraction pipelines, and more.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">What Makes These Applications “Advanced”?</h3>
        <p className="text-blue-700">
          These systems use transformers, attention mechanisms, large language models (LLMs),
          and deep sequence architectures to understand meaning, context, tone, and intent.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Chatbots & Conversational AI</h3>
      <p>
        Chatbots have evolved from rule-based systems to intelligent multi-turn conversational agents.
        Modern conversational AI uses transformer models like GPT, LLaMA, BERT, and Dialogue Transformers.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Types of Chatbots</h4>
      <ul>
        <li>Rule-based chatbots (decision trees)</li>
        <li>Retrieval-based chatbots</li>
        <li>LLM-powered generative chatbots</li>
      </ul>

      <div className="p-4 border-l-4 border-purple-500 bg-purple-100 rounded">
        <h3 className="font-semibold text-purple-800">Key Capabilities of Modern Chatbots</h3>
        <ul className="text-purple-700 list-disc ml-6">
          <li>Context-aware multi-turn conversation</li>
          <li>Sentiment-aware response generation</li>
          <li>Entity and intent recognition</li>
          <li>RAG-based live knowledge retrieval</li>
        </ul>
      </div>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple chatbot using transformers
from transformers import pipeline
chat = pipeline("text-generation", model="gpt2")
chat("Hello! How can I help you today?")`}
        </code>
      </pre>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Question Answering (QA)</h3>
      <p>
        QA systems extract or generate answers from large documents, PDFs, or web sources.
        They can be extractive (selecting text from passage) or generative (LLM produces answer).
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Types of QA</h4>
      <ul>
        <li>Extractive QA (BERT, RoBERTa)</li>
        <li>Open-domain QA (RAG, DPR)</li>
        <li>Generative QA (GPT, T5, LLaMA)</li>
      </ul>

      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Where QA is Used</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Customer support automation</li>
          <li>Search engines</li>
          <li>Knowledge assistants</li>
          <li>Document analysis tools</li>
        </ul>
      </div>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# QA example with HuggingFace
from transformers import pipeline
qa = pipeline("question-answering")
qa({
  "question": "What is transformers?",
  "context": "Transformers are deep learning models based on attention."
})`}
        </code>
      </pre>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Summarization</h3>
      <p>
        Summarization models condense long documents into concise, meaningful summaries.
        These models can be extractive or abstractive.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Extractive Summarization</h4>
      <p>Highlights the most important sentences from the input.</p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Abstractive Summarization</h4>
      <p>Generates new sentences while preserving meaning (T5, BART, Pegasus).</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Text summarization
from transformers import pipeline
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
summarizer("Long passage here...", max_length=100, min_length=40)`}
        </code>
      </pre>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Sentiment Analysis</h3>
      <p>
        Sentiment analysis determines emotional tone — positive, negative, or neutral.
        Advanced models also detect sarcasm, intent, and emotion categories.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Real-world Uses</h4>
      <ul>
        <li>Brand monitoring</li>
        <li>Customer feedback analysis</li>
        <li>Social media opinion mining</li>
        <li>Recommendation engines</li>
      </ul>

      <div className="p-4 border-l-4 border-yellow-500 bg-yellow-100 rounded">
        <h3 className="font-semibold text-yellow-800">Advanced Capabilities</h3>
        <ul className="text-yellow-700 list-disc ml-6">
          <li>Emotion classification</li>
          <li>Context-aware sentiment</li>
          <li>Multi-label emotion tagging</li>
        </ul>
      </div>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Information Extraction (IE)</h3>
      <p>
        Information Extraction automatically pulls structured data from unstructured text,
        such as PDFs, resumes, articles, or business documents.
      </p>

      <h4 className="text-xl font-semibold text-gray-700">✔️ Tasks in Information Extraction</h4>
      <ul>
        <li>Named Entity Recognition (NER)</li>
        <li>Relation Extraction</li>
        <li>Event Extraction</li>
        <li>Keyphrase Extraction</li>
      </ul>

      <div className="p-4 border-l-4 border-red-500 bg-red-100 rounded">
        <h3 className="font-semibold text-red-800">Where IE is Used</h3>
        <ul className="text-red-700 list-disc ml-6">
          <li>Financial document processing</li>
          <li>Medical records extraction</li>
          <li>Legal contract analysis</li>
          <li>Resume screening</li>
        </ul>
      </div>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# NER Example
from transformers import pipeline
ner = pipeline("ner", grouped_entities=True)
ner("Elon Musk founded SpaceX in California.")`}
        </code>
      </pre>

      {/* SECTION 6 */}
      <h3 className="text-2xl font-bold text-gray-800">6. Summary</h3>
      <p>
        Advanced NLP applications combine deep neural architectures with modern transformer models
        to build intelligent, context-aware, human-level language systems.
      </p>

      <ul className="list-disc ml-6">
        <li>Conversational AI → Chatbots, voice assistants</li>
        <li>QA → Extractive, generative, retrieval-based</li>
        <li>Summarization → Abstractive & extractive</li>
        <li>Sentiment → Emotion + context modeling</li>
        <li>Information Extraction → NER, relations, events</li>
      </ul>
    </div>
  );
}
