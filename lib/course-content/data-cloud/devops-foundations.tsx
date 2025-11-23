export default function DevOpsFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">DevOps Foundations</h2>
      <p className="text-gray-600">
        DevOps foundations cover the principles and practices for automating software delivery, infrastructure management, and collaboration between development and operations teams.
        Mastering DevOps is essential for building reliable, scalable, and agile cloud solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why DevOps?</h3>
        <p className="text-blue-700">
          DevOps accelerates delivery, improves quality, and fosters a culture of collaboration and continuous improvement.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. CI/CD Principles</h3>
      <ul>
        <li>Continuous Integration: Automate code builds and testing</li>
        <li>Continuous Delivery/Deployment: Automate release and deployment processes</li>
        <li>Reduce manual errors and enable rapid iteration</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Infrastructure as Code (IaC)</h3>
      <ul>
        <li>Manage infrastructure using code and automation tools</li>
        <li>Tools: Terraform, CloudFormation, Ansible</li>
        <li>Version control, repeatability, and scalability</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. DevOps Culture</h3>
      <ul>
        <li>Promote collaboration between development and operations</li>
        <li>Embrace automation, monitoring, and feedback</li>
        <li>Encourage experimentation and learning from failures</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple CI workflow with GitHub Actions
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of DevOps Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated software delivery pipelines</li>
          <li>Scalable infrastructure management</li>
          <li>Continuous monitoring and feedback</li>
          <li>Rapid innovation and deployment</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        DevOps foundations are essential for modern cloud engineering.  
        Master these principles to deliver reliable, scalable, and agile solutions.
      </p>
    </div>
  );
}