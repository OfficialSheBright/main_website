export default function SafetyAlignmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Safety & Alignment</h2>
      <p className="text-gray-600">
        Safety and alignment are critical concerns in AI development.  
        Ensuring that AI systems behave as intended, avoid harmful outcomes, and align with human values is essential for responsible deployment.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Safety & Alignment?</h3>
        <p className="text-blue-700">
          Addressing safety and alignment reduces risks, builds trust, and ensures AI systems serve beneficial purposes.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. AI Safety Principles</h3>
      <ul>
        <li>Robustness to adversarial inputs</li>
        <li>Transparency and explainability</li>
        <li>Fail-safe mechanisms</li>
        <li>Continuous monitoring</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Alignment with Human Values</h3>
      <ul>
        <li>Value learning and preference modeling</li>
        <li>Ethical guidelines and standards</li>
        <li>Stakeholder involvement in design</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Reducing Harmful Outputs</h3>
      <ul>
        <li>Content filtering and moderation</li>
        <li>Bias detection and mitigation</li>
        <li>Testing for unintended consequences</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Governance & Regulation</h3>
      <ul>
        <li>Compliance with laws and standards</li>
        <li>Documentation and audit trails</li>
        <li>External review and oversight</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Checking for bias in model predictions (Python)
import numpy as np

def check_bias(predictions, groups):
    group_means = {g: np.mean(predictions[groups == g]) for g in np.unique(groups)}
    print("Group prediction means:", group_means)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Safety & Alignment</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Healthcare AI systems</li>
          <li>Autonomous vehicles</li>
          <li>Content moderation platforms</li>
          <li>Financial decision-making tools</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Safety and alignment are foundational for trustworthy AI.  
        Prioritizing these principles ensures responsible innovation and deployment of intelligent systems.
      </p>
    </div>
  );
}