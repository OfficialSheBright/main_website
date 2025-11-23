export default function ScriptingLanguagesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Scripting Languages</h2>
      <p className="text-gray-600">
        Scripting languages are designed for automating tasks, manipulating data, and gluing systems together.  
        Mastering scripting is essential for rapid development, automation, and system integration.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Scripting Languages?</h3>
        <p className="text-blue-700">
          Scripting languages like Python, Bash, and PowerShell enable quick prototyping, automation, and cross-platform compatibility with minimal boilerplate.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Python</h3>
      <ul>
        <li>General-purpose, easy-to-learn, and widely used</li>
        <li>Great for automation, data processing, and web scripting</li>
        <li>Rich ecosystem of libraries and frameworks</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Bash</h3>
      <ul>
        <li>Standard shell scripting language for Unix/Linux</li>
        <li>Automate file operations, system tasks, and pipelines</li>
        <li>Essential for DevOps and system administration</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. PowerShell</h3>
      <ul>
        <li>Powerful scripting for Windows automation</li>
        <li>Object-oriented command-line interface</li>
        <li>Manage files, processes, and Windows services</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Use Cases</h3>
      <ul>
        <li>Automating repetitive tasks and workflows</li>
        <li>System monitoring and reporting</li>
        <li>Data transformation and ETL pipelines</li>
        <li>Rapid prototyping and glue code</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Bash script to list files and count lines
for file in *.txt; do
  echo "$file: $(wc -l < "$file") lines"
done
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Scripting Languages</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automating system administration and DevOps tasks</li>
          <li>Data analysis and reporting</li>
          <li>Integrating and orchestrating software tools</li>
          <li>Building quick utilities and prototypes</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Scripting languages are essential for automation, integration, and rapid development.  
        Master these tools to boost your productivity and streamline your workflows.
      </p>
    </div>
  );
}