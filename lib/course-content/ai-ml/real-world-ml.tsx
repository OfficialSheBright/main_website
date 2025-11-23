export default function RealWorldMlContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Real-World ML</h2>
      <p className="text-gray-600">
        Real-world machine learning projects require more than just model training.  
        They involve data collection, cleaning, deployment, monitoring, and collaboration across teams to solve practical problems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Real-World ML?</h3>
        <p className="text-blue-700">
          Applying ML in production means handling messy data, scaling solutions, and ensuring reliability for business impact.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Data Challenges</h3>
      <ul>
        <li>Data quality and missing values</li>
        <li>Imbalanced datasets</li>
        <li>Data privacy and compliance</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Model Deployment & Integration</h3>
      <ul>
        <li>Serving models via APIs</li>
        <li>Integrating with existing systems</li>
        <li>Continuous delivery and updates</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Monitoring & Maintenance</h3>
      <ul>
        <li>Tracking model performance over time</li>
        <li>Detecting data and concept drift</li>
        <li>Automated retraining pipelines</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Collaboration & Communication</h3>
      <ul>
        <li>Working with cross-functional teams</li>
        <li>Clear documentation and reporting</li>
        <li>Stakeholder feedback and iteration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Monitoring model predictions with logging (Python)
import logging

logging.basicConfig(filename="model.log", level=logging.INFO)
def predict_and_log(model, data):
    prediction = model.predict(data)
    logging.info(f"Input: {data}, Prediction: {prediction}")
    return prediction
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Real-World ML</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Fraud detection in finance</li>
          <li>Predictive maintenance in manufacturing</li>
          <li>Personalized recommendations in retail</li>
          <li>Healthcare diagnostics</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Real-world ML requires robust engineering, teamwork, and ongoing monitoring.  
        Success comes from solving business problems with reliable, scalable, and maintainable solutions.
      </p>
    </div>
  );
}