export default function IntroductionAiContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">1.1 Introduction to AI</h1>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">What is Artificial Intelligence?</h3>
        <p className="text-blue-700">
          Artificial Intelligence (AI) is the field of computer science focused on building systems that can perform tasks
          which normally require human intelligence. These tasks include perception, reasoning, learning, planning, and language understanding.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">History &amp; Evolution of AI</h2>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Timeline — Key Milestones</h3>
          <pre className="text-sm overflow-x-auto">
{`• 1950s — Foundations: Turing test, symbolic AI, early search algorithms
• 1956 — Dartmouth workshop: birth of "AI" as an academic field
• 1960s–70s — Rule-based systems & expert systems
• 1980s — Knowledge engineering; first AI winters
• 1990s — Statistical methods & the rise of ML
• 2010s — Deep learning breakthrough (ImageNet, GPUs)
• 2020s — Large language models, foundation models, and wide adoption`}
          </pre>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Why evolution matters</h4>
          <ul className="text-yellow-700 space-y-2">
            <li>• Approaches changed from symbolic rules to data-driven learning.</li>
            <li>• Compute and data availability enabled deep learning scale.</li>
            <li>• Modern AI emphasizes transferability and foundation models.</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of AI</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">ANI — Narrow AI</h4>
            <p className="text-red-700 text-sm">Systems specialized for a single task (e.g., image classifier, recommender).</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">AGI — General AI</h4>
            <p className="text-green-700 text-sm">Hypothetical systems that can perform any intellectual task a human can.</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">ASI — Superintelligent AI</h4>
            <p className="text-purple-700 text-sm">A theoretical future AI that surpasses human intelligence across domains.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Symbolic AI vs Machine Learning</h2>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Comparison</h3>
          <pre className="text-sm overflow-x-auto">
{`Symbolic AI (Good old-fashioned AI)
• Knowledge represented as rules and logic
• Explicit reasoning steps
• Works well when rules are known and few exceptions exist

Machine Learning (Statistical / Data-driven)
• Learns patterns from data (features → labels)
• Handles noisy, high-dimensional data
• Requires training data and evaluation

Modern trend: hybrid approaches combine symbolic reasoning with learned models.`}
          </pre>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="font-semibold text-indigo-800 mb-3">When to use which</h4>
          <ul className="text-indigo-700 space-y-2">
            <li>• Use symbolic approaches for rule-heavy, safety-critical systems with few exceptions.</li>
            <li>• Use ML when large datasets exist and tasks require pattern recognition.</li>
            <li>• Hybrid methods are useful for explainability + flexibility.</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">AI Applications Across Industries</h2>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
          <h3 className="text-red-800 font-semibold mb-2">Highlights</h3>
          <ul className="text-red-700 space-y-2 text-sm">
            <li>• Healthcare: diagnostics, medical imaging, personalized medicine</li>
            <li>• Finance: fraud detection, algorithmic trading, credit scoring</li>
            <li>• Retail: recommendation systems, demand forecasting, personalization</li>
            <li>• Transportation: route optimization, autonomous driving research</li>
            <li>• Media: content generation, summarization, recommendation</li>
            <li>• Manufacturing: predictive maintenance, quality inspection</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white p-4 rounded text-sm">
          <pre>
{`// Quick conceptual snippet: AI system loop
// 1) Collect data
// 2) Train model on labeled data
// 3) Evaluate and validate
// 4) Deploy and monitor (retrain when needed)`}
          </pre>
        </div>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">Key Takeaways</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• AI spans from narrow, task-specific systems to the theoretical AGI/ASI.</li>
          <li>• The field evolved from symbolic rules to powerful data-driven models.</li>
          <li>• Choosing the right approach depends on data availability, task complexity, and safety requirements.</li>
        </ul>
      </div>
    </div>
  );
}
