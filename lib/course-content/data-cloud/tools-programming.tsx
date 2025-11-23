export default function ToolsProgrammingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Tools & Programming</h2>
      <p className="text-gray-600">
        Tools and programming languages are essential for building, automating, and scaling data and cloud engineering solutions.  
        Mastering these technologies accelerates development and enables robust, maintainable systems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Tools & Programming?</h3>
        <p className="text-blue-700">
          The right tools and languages streamline workflows, improve productivity, and support integration across platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Python</h3>
      <ul>
        <li>Popular for data analysis, scripting, and automation</li>
        <li>Rich ecosystem: pandas, NumPy, scikit-learn, requests</li>
        <li>Easy to learn and widely used in data/cloud engineering</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. SQL</h3>
      <ul>
        <li>Standard language for querying and manipulating relational data</li>
        <li>Used in databases, data warehouses, and analytics platforms</li>
        <li>Supports complex queries, joins, and aggregations</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Bash & Shell Scripting</h3>
      <ul>
        <li>Automate tasks and workflows on Linux/Unix systems</li>
        <li>Useful for data ingestion, ETL, and deployment scripts</li>
        <li>Integrates with cron, system utilities, and cloud CLIs</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Git & Version Control</h3>
      <ul>
        <li>Track changes, collaborate, and manage codebases</li>
        <li>Supports branching, merging, and pull requests</li>
        <li>Essential for team development and CI/CD workflows</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Jupyter Notebooks</h3>
      <ul>
        <li>Interactive environment for data exploration and prototyping</li>
        <li>Supports code, visualizations, and documentation in one place</li>
        <li>Widely used for data science and analytics</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple Bash script for data backup
#!/bin/bash
tar -czvf backup.tar.gz /data
echo "Backup complete!"
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Tools & Programming</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Data analysis and automation</li>
          <li>Building and deploying cloud solutions</li>
          <li>Collaborative development and version control</li>
          <li>Rapid prototyping and experimentation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Tools and programming languages are the backbone of data and cloud engineering.  
        Master these technologies to build, automate, and scale modern solutions.
      </p>
    </div>
  );
}