export default function AwsCoreServicesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">AWS Core Services</h2>
      <p className="text-gray-600">
        AWS Core Services provide the foundation for building scalable, secure, and flexible cloud solutions.  
        Mastering these services is essential for cloud engineers, architects, and developers.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why AWS Core Services?</h3>
        <p className="text-blue-700">
          Core AWS services enable compute, storage, database, and identity management for a wide range of cloud applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. EC2 (Elastic Compute Cloud)</h3>
      <ul>
        <li>Scalable virtual servers for running applications</li>
        <li>Flexible instance types and pricing models</li>
        <li>Supports auto-scaling and load balancing</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. S3 (Simple Storage Service)</h3>
      <ul>
        <li>Object storage for files, backups, and data lakes</li>
        <li>Highly durable and available</li>
        <li>Supports lifecycle management and versioning</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Lambda</h3>
      <ul>
        <li>Serverless compute for event-driven applications</li>
        <li>Automatic scaling and pay-per-use pricing</li>
        <li>Integrates with API Gateway, S3, DynamoDB, and more</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. IAM (Identity & Access Management)</h3>
      <ul>
        <li>Manage users, roles, and permissions securely</li>
        <li>Supports fine-grained access control and policies</li>
        <li>Enables multi-factor authentication (MFA)</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. RDS / DynamoDB</h3>
      <ul>
        <li>RDS: Managed relational databases (MySQL, PostgreSQL, SQL Server, etc.)</li>
        <li>DynamoDB: Managed NoSQL database for high-performance workloads</li>
        <li>Automated backups, scaling, and security features</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Launching an EC2 instance with AWS CLI
aws ec2 run-instances --image-id ami-12345678 --count 1 --instance-type t2.micro --key-name MyKeyPair
# Monitor instance status in AWS Console
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of AWS Core Services</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Web and mobile application hosting</li>
          <li>Data storage and analytics</li>
          <li>Serverless and event-driven architectures</li>
          <li>Secure user and resource management</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        AWS Core Services are the building blocks of cloud infrastructure.  
        Master these services to design, deploy, and manage scalable cloud solutions.
      </p>
    </div>
  );
}