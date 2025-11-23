export default function DevopsCicdAutomationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">DevOps & CI/CD Automation</h2>
      <p className="text-gray-600">
        DevOps and CI/CD automation streamline software delivery by integrating development and operations, enabling rapid, reliable, and repeatable deployments.  
        Mastering these practices is essential for modern software engineers and teams.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why DevOps & CI/CD?</h3>
        <p className="text-blue-700">
          Automation reduces manual errors, accelerates feedback, and ensures consistent quality from code to production.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. GitHub Actions</h3>
      <ul>
        <li>Automate build, test, and deployment workflows</li>
        <li>Define pipelines as code using YAML</li>
        <li>Integrate with third-party tools and cloud providers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Docker Automation</h3>
      <ul>
        <li>Containerize applications for consistent environments</li>
        <li>Automate image builds, testing, and publishing</li>
        <li>Deploy containers to cloud or on-premises infrastructure</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Build Pipelines</h3>
      <ul>
        <li>Automate compilation, testing, and artifact creation</li>
        <li>Use tools like GitHub Actions, Jenkins, GitLab CI, or Azure Pipelines</li>
        <li>Trigger builds on code changes or pull requests</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Deployment Scripts</h3>
      <ul>
        <li>Automate deployment to staging and production environments</li>
        <li>Use shell scripts, Ansible, or cloud-native tools</li>
        <li>Rollback and monitor deployments for reliability</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: GitHub Actions workflow (YAML)
name: CI Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of DevOps & CI/CD Automation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Continuous integration and delivery of software</li>
          <li>Automated testing and quality assurance</li>
          <li>Rapid, reliable deployments to any environment</li>
          <li>Reducing manual intervention and human error</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        DevOps and CI/CD automation are essential for fast, reliable, and scalable software delivery.  
        Master these practices to streamline your workflows and deliver value continuously.
      </p>
    </div>
  );
}