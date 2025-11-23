"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "data-cloud",
      module: "project-submission",
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-8">
        
        {/* Module Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📚 Final Assessment
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrate your mastery of data engineering and cloud technologies by building and submitting a complete project that showcases your skills in data pipelines, cloud deployment, and analytics.
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🎯 What You&apos;ll Accomplish
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Goals:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Apply data engineering and cloud architecture concepts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Build scalable, reliable data pipelines and analytics solutions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in cloud deployment and automation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Create a portfolio-worthy project
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Criteria:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">☁️</span>
                  Cloud architecture and deployment (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔗</span>
                  Data pipeline design and implementation (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📊</span>
                  Analytics and visualization (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Documentation and presentation (25%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🔧 Technical Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Data Engineering</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Data ingestion from multiple sources</li>
                <li>• ETL/ELT pipeline implementation</li>
                <li>• Data quality checks and validation</li>
                <li>• Data storage (SQL/NoSQL/Data Lake)</li>
                <li>• Automation (scheduling, triggers)</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Use of cloud platforms (AWS, Azure, GCP, etc.)</li>
                <li>• Infrastructure as Code (Terraform, ARM, CloudFormation)</li>
                <li>• CI/CD pipeline for deployment</li>
                <li>• Security best practices</li>
                <li>• Monitoring and logging</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Analytics & Visualization</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Data analysis and reporting</li>
                <li>• Dashboards or visualizations (Tableau, Power BI, etc.)</li>
                <li>• API or web interface for results (optional)</li>
                <li>• Documentation (README, architecture diagrams)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            💡 Project Ideas & Inspiration
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time Data Pipeline",
                description: "Ingest, process, and visualize streaming data from IoT devices or APIs.",
                difficulty: "Advanced",
                color: "blue"
              },
              {
                title: "Cloud Data Warehouse",
                description: "Build an ETL pipeline and analytics dashboard using a cloud data warehouse.",
                difficulty: "Advanced", 
                color: "green"
              },
              {
                title: "Serverless Analytics Platform",
                description: "Deploy a serverless solution for data processing and reporting.",
                difficulty: "Intermediate",
                color: "purple"
              },
              {
                title: "Data Lake Solution",
                description: "Design and implement a scalable data lake with automated ingestion.",
                difficulty: "Advanced",
                color: "orange"
              },
              {
                title: "Business Intelligence Dashboard",
                description: "Create a dashboard for business metrics using cloud data sources.",
                difficulty: "Intermediate",
                color: "red"
              },
              {
                title: "Cloud Cost Optimization Tool", 
                description: "Analyze and visualize cloud usage and suggest optimizations.",
                difficulty: "Intermediate",
                color: "indigo"
              }
            ].map((idea, index) => (
              <div key={index} className={`bg-${idea.color}-50 border border-${idea.color}-200 rounded-lg p-6`}>
                <h3 className={`text-lg font-semibold text-${idea.color}-900 mb-2`}>{idea.title}</h3>
                <p className={`text-${idea.color}-700 text-sm mb-3`}>{idea.description}</p>
                <span className={`inline-block bg-${idea.color}-100 text-${idea.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                  {idea.difficulty}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>💡 Pro Tip:</strong> Choose a project that aligns with your interests and leverages real-world data or cloud services for maximum impact!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="data-cloud"
          courseName="Data & Cloud"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud & Data Tools:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://aws.amazon.com/" className="text-blue-600 hover:underline">AWS</a> - Cloud platform</li>
                <li>• <a href="https://azure.microsoft.com/" className="text-blue-600 hover:underline">Azure</a> - Cloud platform</li>
                <li>• <a href="https://cloud.google.com/" className="text-blue-600 hover:underline">Google Cloud</a> - Cloud platform</li>
                <li>• <a href="https://airflow.apache.org/" className="text-blue-600 hover:underline">Apache Airflow</a> - Workflow automation</li>
                <li>• <a href="https://terraform.io/" className="text-blue-600 hover:underline">Terraform</a> - Infrastructure as Code</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics & Visualization:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://tableau.com/" className="text-blue-600 hover:underline">Tableau</a> - Data visualization</li>
                <li>• <a href="https://powerbi.microsoft.com/" className="text-blue-600 hover:underline">Power BI</a> - Business analytics</li>
                <li>• <a href="https://superset.apache.org/" className="text-blue-600 hover:underline">Apache Superset</a> - Open-source BI</li>
                <li>• <a href="https://metabase.com/" className="text-blue-600 hover:underline">Metabase</a> - Analytics dashboards</li>
                <li>• <a href="https://dbdiagram.io/" className="text-blue-600 hover:underline">dbdiagram.io</a> - Database diagrams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}