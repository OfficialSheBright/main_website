export default function IntroductionDataEcosystemContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Introduction to Data Ecosystem</h2>
      <p className="text-gray-600">
        The data ecosystem encompasses the tools, processes, and concepts for collecting, storing, processing, and analyzing data.  
        Understanding its components is essential for building effective data-driven solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn the Data Ecosystem?</h3>
        <p className="text-blue-700">
          A strong foundation in the data ecosystem helps you choose the right tools and architectures for analytics, engineering, and science.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Data Types</h3>
      <ul>
        <li>Structured: Tabular data (SQL databases, CSV files)</li>
        <li>Unstructured: Text, images, audio, video</li>
        <li>Semi-structured: JSON, XML, log files</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. OLTP vs OLAP</h3>
      <ul>
        <li>OLTP (Online Transaction Processing): Fast, reliable transactions (e.g., banking systems)</li>
        <li>OLAP (Online Analytical Processing): Complex queries for analytics and reporting</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Data Analytics vs Data Engineering vs Data Science</h3>
      <ul>
        <li>Data Analytics: Explore and visualize data to find insights</li>
        <li>Data Engineering: Build and maintain data infrastructure and pipelines</li>
        <li>Data Science: Develop models and algorithms for predictions and automation</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. ETL vs ELT</h3>
      <ul>
        <li>ETL (Extract, Transform, Load): Transform data before loading into storage</li>
        <li>ELT (Extract, Load, Transform): Load raw data first, then transform in storage</li>
        <li>Choose based on data volume, latency, and technology stack</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Loading structured data with Pandas
import pandas as pd
df = pd.read_csv("data.csv")
print(df.head())
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data Ecosystem Concepts</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing data platforms and architectures</li>
          <li>Building analytics and reporting solutions</li>
          <li>Developing machine learning models</li>
          <li>Optimizing data workflows and pipelines</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        The data ecosystem is the foundation of all data-driven work.  
        Master these concepts to build, analyze, and optimize modern data solutions.
      </p>
    </div>
  );
}