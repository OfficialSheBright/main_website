export default function CapstoneProjectDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Capstone Project Development</h2>
      <p className="text-gray-600">
        The capstone project is your opportunity to apply data and cloud engineering skills to real-world scenarios.  
        You will design, build, deploy, and document a complete solution using modern tools and best practices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Capstone Projects?</h3>
        <p className="text-blue-700">
          Capstone projects demonstrate your ability to solve complex problems, integrate technologies, and deliver production-ready solutions.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Project Options</h3>
      <ul>
        <li>Real-time data streaming pipeline using Kafka + Spark</li>
        <li>AWS big data pipeline with S3 + Glue + EMR</li>
        <li>End-to-end data warehouse using Snowflake/BigQuery</li>
        <li>DevOps CI/CD pipeline with Kubernetes</li>
        <li>Cloud architecture design for scalable app</li>
        <li>Distributed ETL with Airflow</li>
        <li>High availability database setup</li>
        <li>Build a lakehouse with Delta Lake</li>
        <li>Deploy ML model using Vertex AI / SageMaker</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Architecture Design</h3>
      <ul>
        <li>Define system components and data flow</li>
        <li>Choose appropriate cloud and data technologies</li>
        <li>Design for scalability, reliability, and security</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Implementation & Deployment</h3>
      <ul>
        <li>Build pipelines, integrations, and automation scripts</li>
        <li>Deploy resources using IaC tools (Terraform, CloudFormation)</li>
        <li>Monitor and optimize performance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Documentation</h3>
      <ul>
        <li>Document architecture, setup steps, and usage</li>
        <li>Include diagrams, code samples, and configuration files</li>
        <li>Provide troubleshooting and maintenance guidelines</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Monitoring & Evaluation</h3>
      <ul>
        <li>Set up monitoring and alerting for key metrics</li>
        <li>Evaluate project against requirements and best practices</li>
        <li>Iterate and improve based on feedback</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Deploying infrastructure with Terraform
terraform init
terraform apply
# Review outputs and monitor deployed resources
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Capstone Project Outcomes</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Portfolio-ready project</li>
          <li>Demonstrated expertise in data/cloud engineering</li>
          <li>Experience with real-world tools and workflows</li>
          <li>Preparation for technical interviews and job roles</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        The capstone project is your chance to showcase your skills and creativity.  
        Apply everything you&apos;ve learned to deliver a robust, scalable, and well-documented solution.
      </p>
    </div>
  );
}