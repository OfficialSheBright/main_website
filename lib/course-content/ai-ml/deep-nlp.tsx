export default function DeepNlpContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Deep NLP</h2>
      <p className="text-gray-600">
        Deep Natural Language Processing (NLP) leverages neural networks to understand and generate human language.  
        These models power applications like translation, chatbots, and text summarization.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Deep NLP?</h3>
        <p className="text-blue-700">
          Deep learning enables NLP systems to capture complex patterns, context, and semantics in text, outperforming traditional methods.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. RNN/LSTM Models</h3>
      <p>
        Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks process sequences of text, maintaining context across words and sentences.
      </p>
      <ul>
        <li>Handle variable-length input</li>
        <li>Capture temporal dependencies</li>
        <li>Used for language modeling and sequence prediction</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Seq2seq Architectures</h3>
      <p>
        Sequence-to-sequence models map input sequences to output sequences, enabling tasks like translation and summarization.
      </p>
      <ul>
        <li>Encoder processes input text</li>
        <li>Decoder generates output text</li>
        <li>Often enhanced with attention mechanisms</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Encoder-Decoder Models</h3>
      <p>
        Encoder-decoder frameworks are the backbone of many NLP systems, allowing flexible input and output handling.
      </p>
      <ul>
        <li>Machine translation (e.g., English to French)</li>
        <li>Text summarization</li>
        <li>Question answering</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple LSTM for text generation (Keras)
from keras.models import Sequential
from keras.layers import LSTM, Dense

model = Sequential()
model.add(LSTM(128, input_shape=(timesteps, features)))
model.add(Dense(vocab_size, activation='softmax'))
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Deep NLP</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Machine translation</li>
          <li>Text summarization</li>
          <li>Chatbots and conversational AI</li>
          <li>Speech recognition</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Deep NLP models have transformed language understanding and generation.  
        Mastering these architectures is key to building advanced text-based AI systems.
      </p>
    </div>
  );
}