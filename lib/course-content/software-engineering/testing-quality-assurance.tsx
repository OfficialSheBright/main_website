export default function TestingQualityAssuranceContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Testing & Quality Assurance</h2>
      <p className="text-gray-600">
        Testing and quality assurance (QA) ensure that software is reliable, functional, and meets user expectations.  
        Mastering these practices is essential for delivering robust, maintainable, and high-quality applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Testing & QA?</h3>
        <p className="text-blue-700">
          Testing catches bugs early, prevents regressions, and builds user trust.  
          QA processes improve software quality and reduce maintenance costs.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Unit Testing</h3>
      <ul>
        <li>Test individual functions or components in isolation</li>
        <li>Popular frameworks: <code>pytest</code> (Python), <code>Jest</code> (JavaScript), <code>JUnit</code> (Java)</li>
        <li>Automate tests to run on every code change</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Integration Testing</h3>
      <ul>
        <li>Test interactions between multiple components or systems</li>
        <li>Ensure modules work together as expected</li>
        <li>Simulate real-world scenarios and data flows</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. End-to-End (E2E) Testing</h3>
      <ul>
        <li>Test the entire application workflow from start to finish</li>
        <li>Tools: <code>Selenium</code>, <code>Cypress</code>, <code>Playwright</code></li>
        <li>Validate user experience and critical paths</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Test Automation & CI</h3>
      <ul>
        <li>Automate test execution with CI/CD pipelines (e.g., GitHub Actions, Jenkins)</li>
        <li>Run tests on every commit or pull request</li>
        <li>Catch issues early and ensure consistent quality</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple unit test with pytest (Python)
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Testing & QA</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Preventing bugs and regressions</li>
          <li>Ensuring software reliability and correctness</li>
          <li>Supporting refactoring and continuous delivery</li>
          <li>Building user confidence and trust</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Testing and QA are critical for delivering high-quality software.  
        Master these practices to ensure your applications are robust, reliable, and ready for production.
      </p>
    </div>
  );
}