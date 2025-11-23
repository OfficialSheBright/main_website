export default function WebAutomationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Web Automation</h2>
      <p className="text-gray-600">
        Web automation enables you to interact with websites programmatically, automate repetitive tasks, and test web applications efficiently.  
        Mastering web automation is essential for QA engineers, developers, and anyone looking to streamline browser-based workflows.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Web Automation?</h3>
        <p className="text-blue-700">
          Automating web tasks saves time, reduces errors, and enables large-scale data collection, testing, and monitoring.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Selenium</h3>
      <ul>
        <li>Popular framework for browser automation</li>
        <li>Supports multiple languages (Python, JavaScript, Java, etc.)</li>
        <li>Automate form submissions, navigation, and UI testing</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Playwright & Puppeteer</h3>
      <ul>
        <li>Modern tools for headless and full browser automation</li>
        <li>Support for Chromium, Firefox, and WebKit</li>
        <li>Great for scraping, testing, and automating complex UIs</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Web Scraping</h3>
      <ul>
        <li>Extract data from websites using automation tools</li>
        <li>Handle dynamic content, pagination, and authentication</li>
        <li>Respect robots.txt and site terms of service</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Automated Testing</h3>
      <ul>
        <li>Automate regression, integration, and end-to-end tests</li>
        <li>Validate UI workflows and user interactions</li>
        <li>Integrate with CI/CD pipelines for continuous testing</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Automate Google search with Selenium (Python)
from selenium import webdriver
driver = webdriver.Chrome()
driver.get('https://www.google.com')
box = driver.find_element('name', 'q')
box.send_keys('web automation')
box.submit()
driver.quit()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Web Automation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated web testing and QA</li>
          <li>Data scraping and aggregation</li>
          <li>Automating repetitive browser tasks</li>
          <li>Monitoring website changes and uptime</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Web automation is a powerful tool for developers and testers.  
        Master these techniques to save time, improve quality, and unlock new possibilities in browser-based workflows.
      </p>
    </div>
  );
}