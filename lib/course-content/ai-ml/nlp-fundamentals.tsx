export default function NlpFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">NLP Fundamentals</h2>
      <p className="text-gray-600">
        Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language.  
        Foundational NLP techniques include text preprocessing, tokenization, tagging, and vectorization.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why NLP?</h3>
        <p className="text-blue-700">
          NLP powers applications like chatbots, search engines, sentiment analysis, and translation by making sense of unstructured text data.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Text Preprocessing</h3>
      <p>
        Preprocessing cleans and prepares text for analysis.  
        Common steps include:
      </p>
      <ul>
        <li>Lowercasing</li>
        <li>Removing punctuation</li>
        <li>Stopword removal</li>
        <li>Stemming and lemmatization</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Tokenization & Sentence Segmentation</h3>
      <p>
        Tokenization splits text into words or subwords; sentence segmentation divides text into sentences.
      </p>
      <ul>
        <li>Word tokenization</li>
        <li>Subword tokenization (BPE, SentencePiece)</li>
        <li>Sentence boundary detection</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. POS Tagging & Named Entity Recognition</h3>
      <p>
        Part-of-speech (POS) tagging labels words with their grammatical roles.  
        Named Entity Recognition (NER) identifies entities like names, dates, and locations.
      </p>
      <ul>
        <li>POS tags: noun, verb, adjective, etc.</li>
        <li>NER: person, organization, location, etc.</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Vectorization</h3>
      <p>
        Vectorization converts text into numerical representations for ML models.
      </p>
      <ul>
        <li>Bag-of-Words</li>
        <li>TF-IDF</li>
        <li>Word2Vec, GloVe</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Tokenization and vectorization with scikit-learn (Python)
from sklearn.feature_extraction.text import CountVectorizer
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(["NLP is fun!", "I love learning AI."])
print(X.toarray())
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of NLP Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Text classification</li>
          <li>Information extraction</li>
          <li>Search engines</li>
          <li>Chatbots and assistants</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        NLP fundamentals are the building blocks for advanced language models and applications.  
        Mastering these techniques is essential for any AI practitioner working with text data.
      </p>
    </div>
  );
}