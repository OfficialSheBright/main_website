export default function EtlEltToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">ETL / ELT Tools</h2>
      <p className="text-gray-600">
        ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) tools automate data integration, transformation, and loading for analytics and business intelligence.  
        Choosing the right tool is essential for scalable, reliable, and efficient data workflows.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why ETL / ELT Tools?</h3>
        <p className="text-blue-700">
          ETL/ELT tools streamline data movement, ensure data quality, and support complex transformations across platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. dbt (Data Build Tool)</h3>
      <ul>
        <li>SQL-based transformation tool for analytics engineering</li>
        <li>Version control, testing, and documentation for data models</li>
        <li>Integrates with cloud data warehouses (BigQuery, Snowflake, Redshift)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. SSIS / Talend</h3>
      <ul>
        <li>SSIS: Microsoft SQL Server Integration Services for ETL workflows</li>
        <li>Talend: Open-source platform for data integration and transformation</li>
        <li>Visual design, scheduling, and monitoring of data pipelines</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. AWS Glue</h3>
      <ul>
        <li>Serverless ETL service for big data processing on AWS</li>
        <li>Automate data discovery, cataloging, and transformation</li>
        <li>Integrates with S3, Redshift, RDS, and other AWS services</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Running a dbt model from CLI
dbt run --models my_model
# Monitor results and test transformations
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of ETL / ELT Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Data warehousing and analytics</li>
          <li>Data migration and integration</li>
          <li>Automated data quality checks</li>
          <li>Building scalable data platforms</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        ETL and ELT tools are essential for modern data engineering.  
        Master these platforms to automate, scale, and optimize your data workflows.
      </p>
    </div>
  );
}