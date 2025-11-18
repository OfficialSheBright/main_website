export default function CloudEssentialsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">9.3 Cloud Essentials - AWS Fundamentals</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">AWS Cloud Computing Fundamentals</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• Understand core AWS services for web developers</li>
          <li>• Learn S3 for static hosting and file storage</li>
          <li>• Introduction to serverless with AWS Lambda</li>
          <li>• Master IAM for secure access management</li>
          <li>• Build scalable cloud-native applications</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">AWS Basics Overview</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">AWS Global Infrastructure</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Core Concepts:</h5>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>Regions:</strong> Geographical locations (us-east-1, eu-west-1)</li>
                <li>• <strong>Availability Zones:</strong> Isolated data centers within regions</li>
                <li>• <strong>Edge Locations:</strong> CloudFront content delivery network</li>
                <li>• <strong>Services:</strong> Building blocks for cloud applications</li>
                <li>• <strong>Pay-as-you-go:</strong> Only pay for what you use</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Essential Services for Web Developers:</h5>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>EC2:</strong> Virtual servers in the cloud</li>
                <li>• <strong>S3:</strong> Object storage for files and static websites</li>
                <li>• <strong>Lambda:</strong> Serverless compute functions</li>
                <li>• <strong>RDS:</strong> Managed relational databases</li>
                <li>• <strong>CloudFront:</strong> Content delivery network (CDN)</li>
                <li>• <strong>Route 53:</strong> DNS and domain management</li>
                <li>• <strong>API Gateway:</strong> REST and WebSocket APIs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">💰 Cost Optimization</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• AWS Free Tier (12 months)</li>
              <li>• Reserved Instances for predictable workloads</li>
              <li>• Spot Instances for flexible workloads</li>
              <li>• Auto Scaling for dynamic capacity</li>
              <li>• CloudWatch for monitoring costs</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">🏗️ Well-Architected Framework</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Operational Excellence</li>
              <li>• Security</li>
              <li>• Reliability</li>
              <li>• Performance Efficiency</li>
              <li>• Cost Optimization</li>
              <li>• Sustainability</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">🛠️ Developer Tools</h3>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• AWS CLI for command line access</li>
              <li>• AWS SDK for programming languages</li>
              <li>• CloudFormation for Infrastructure as Code</li>
              <li>• CodePipeline for CI/CD</li>
              <li>• CloudWatch for monitoring</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">AWS CLI Setup and Basic Commands</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Installation and Configuration</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`# Install AWS CLI v2 on Linux/macOS
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify installation
aws --version

# Configure AWS credentials
aws configure
# AWS Access Key ID [None]: AKIA...
# AWS Secret Access Key [None]: ...
# Default region name [None]: us-east-1
# Default output format [None]: json

# Configure using environment variables (recommended for CI/CD)
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_DEFAULT_REGION="us-east-1"

# Use AWS profiles for multiple accounts
aws configure --profile development
aws configure --profile production

# Set default profile
export AWS_PROFILE=development

# Basic AWS CLI commands
aws sts get-caller-identity  # Check current user/role
aws ec2 describe-regions     # List available regions
aws s3 ls                   # List S3 buckets
aws lambda list-functions   # List Lambda functions`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">AWS SDK for Node.js</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Install AWS SDK
npm install @aws-sdk/client-s3 @aws-sdk/client-lambda @aws-sdk/client-iam

// Basic SDK configuration
import { S3Client } from '@aws-sdk/client-s3';
import { LambdaClient } from '@aws-sdk/client-lambda';

// Configure AWS clients
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

const lambdaClient = new LambdaClient({
  region: process.env.AWS_REGION || 'us-east-1'
});

// Using AWS SDK with environment-based configuration
const awsConfig = {
  region: process.env.AWS_REGION || 'us-east-1',
  // Credentials are automatically loaded from:
  // 1. Environment variables
  // 2. AWS credentials file
  // 3. IAM roles (when running on EC2/Lambda)
  // 4. AWS SSO
};

// Error handling with AWS SDK
import { S3ServiceException } from '@aws-sdk/client-s3';

try {
  const result = await s3Client.send(command);
  console.log('Success:', result);
} catch (error) {
  if (error instanceof S3ServiceException) {
    console.error('S3 Error:', error.name, error.message);
    console.error('Status Code:', error.$metadata.httpStatusCode);
  } else {
    console.error('Unexpected error:', error);
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Amazon S3 (Simple Storage Service)</h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-orange-800 mb-3">S3 Core Concepts</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">Storage Classes:</h5>
              <ul className="text-orange-600 space-y-2 text-sm">
                <li>• <strong>Standard:</strong> Frequently accessed data</li>
                <li>• <strong>Standard-IA:</strong> Infrequently accessed data</li>
                <li>• <strong>One Zone-IA:</strong> Lower cost, single AZ</li>
                <li>• <strong>Glacier:</strong> Long-term archival (minutes to hours)</li>
                <li>• <strong>Deep Archive:</strong> Lowest cost (12+ hours retrieval)</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">Key Features:</h5>
              <ul className="text-orange-600 space-y-2 text-sm">
                <li>• 99.999999999% (11 9&#39;s) durability</li>
                <li>• Virtually unlimited storage</li>
                <li>• Static website hosting</li>
                <li>• Versioning and backup</li>
                <li>• Cross-origin resource sharing (CORS)</li>
                <li>• Server-side encryption</li>
                <li>• Access control and policies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">S3 Implementation for Web Applications</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Static Website Hosting</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Create S3 bucket for static hosting
aws s3 mb s3://my-react-app-bucket

// Enable static website hosting
aws s3 website s3://my-react-app-bucket \\
  --index-document index.html \\
  --error-document error.html

// Upload React build files
aws s3 sync ./build s3://my-react-app-bucket \\
  --delete \\
  --cache-control "public,max-age=31536000,immutable" \\
  --exclude "*.html" \\
  --exclude "service-worker.js"

// Upload HTML files with shorter cache
aws s3 sync ./build s3://my-react-app-bucket \\
  --delete \\
  --cache-control "public,max-age=0,must-revalidate" \\
  --include "*.html" \\
  --include "service-worker.js"

// Set bucket policy for public read access
aws s3api put-bucket-policy \\
  --bucket my-react-app-bucket \\
  --policy '{
    "Version": "2012-10-17",
    "Statement": [{
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-react-app-bucket/*"
    }]
  }'

# Bucket policy JSON file (bucket-policy.json)
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-react-app-bucket/*"
    }
  ]
}`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">File Upload & Management</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`import { 
  S3Client, 
  PutObjectCommand, 
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({ region: 'us-east-1' });
const BUCKET_NAME = 'my-app-uploads';

// Upload file to S3
export const uploadFile = async (file, key) => {
  const uploadParams = {
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: file.type,
    Metadata: {
      'uploaded-by': 'web-app',
      'upload-date': new Date().toISOString()
    }
  };

  try {
    const result = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log('Upload successful:', result);
    
    return {
      success: true,
      url: \`https://\${BUCKET_NAME}.s3.amazonaws.com/\${key}\`,
      etag: result.ETag
    };
  } catch (error) {
    console.error('Upload failed:', error);
    throw new Error(\`Upload failed: \${error.message}\`);
  }
};

// Generate pre-signed URL for secure uploads
export const generateUploadUrl = async (key, contentType) => {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType
  });

  try {
    const signedUrl = await getSignedUrl(s3Client, command, { 
      expiresIn: 3600 // 1 hour
    });
    
    return signedUrl;
  } catch (error) {
    throw new Error(\`Failed to generate upload URL: \${error.message}\`);
  }
};

// List files in bucket
export const listFiles = async (prefix = '', maxKeys = 100) => {
  const listParams = {
    Bucket: BUCKET_NAME,
    Prefix: prefix,
    MaxKeys: maxKeys
  };

  try {
    const result = await s3Client.send(new ListObjectsV2Command(listParams));
    
    return result.Contents?.map(item => ({
      key: item.Key,
      size: item.Size,
      lastModified: item.LastModified,
      etag: item.ETag
    })) || [];
  } catch (error) {
    throw new Error(\`Failed to list files: \${error.message}\`);
  }
};

// Delete file from S3
export const deleteFile = async (key) => {
  const deleteParams = {
    Bucket: BUCKET_NAME,
    Key: key
  };

  try {
    await s3Client.send(new DeleteObjectCommand(deleteParams));
    return { success: true };
  } catch (error) {
    throw new Error(\`Failed to delete file: \${error.message}\`);
  }
};

// Express.js route for file upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const fileKey = \`uploads/\${Date.now()}-\${req.file.originalname}\`;
    const result = await uploadFile(req.file.buffer, fileKey);
    
    res.json({
      message: 'File uploaded successfully',
      url: result.url,
      key: fileKey
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">S3 Security Best Practices</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">Access Control:</h5>
              <ul className="text-yellow-600 space-y-2 text-sm">
                <li>• Use IAM policies for user access</li>
                <li>• Implement bucket policies for resource-based access</li>
                <li>• Enable MFA delete for critical buckets</li>
                <li>• Use pre-signed URLs for temporary access</li>
                <li>• Block public access by default</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">Data Protection:</h5>
              <ul className="text-yellow-600 space-y-2 text-sm">
                <li>• Enable server-side encryption (SSE-S3, SSE-KMS)</li>
                <li>• Use versioning for data protection</li>
                <li>• Configure lifecycle policies</li>
                <li>• Enable access logging</li>
                <li>• Set up cross-region replication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">AWS Lambda - Serverless Computing</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-purple-800 mb-3">Lambda Fundamentals</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-purple-700 mb-3">Key Benefits:</h5>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• No server management required</li>
                <li>• Pay only for compute time used</li>
                <li>• Automatic scaling (0 to thousands)</li>
                <li>• Built-in fault tolerance</li>
                <li>• Integrates with 200+ AWS services</li>
                <li>• Support for multiple programming languages</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-purple-700 mb-3">Common Use Cases:</h5>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• REST APIs with API Gateway</li>
                <li>• File processing (image resize, etc.)</li>
                <li>• Data transformation and ETL</li>
                <li>• Real-time stream processing</li>
                <li>• Scheduled tasks (cron jobs)</li>
                <li>• Event-driven architectures</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Lambda Function Development</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Basic Lambda Function (Node.js)</h5>
              <pre className="text-sm overflow-x-auto">
                <code>
  export const handler = async (event, context) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  console.log('Context:', JSON.stringify(context, null, 2));
  
  try {
    // Your function logic here
    const result = await processEvent(event);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Success',
        data: result
      })
    };
  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Internal Server Error',
        error: error.message
      })
    };
  }
};

// REST API Lambda function
export const userHandler = async (event) => {
  const { httpMethod, pathParameters, body, queryStringParameters } = event;
  
  try {
    switch (httpMethod) {
      case 'GET':
        if (pathParameters?.id) {
          // Get single user
          const user = await getUserById(pathParameters.id);
          return response(200, user);
        } else {
          // Get all users with pagination
          const page = queryStringParameters?.page || 1;
          const limit = queryStringParameters?.limit || 10;
          const users = await getUsers(page, limit);
          return response(200, users);
        }
        
      case 'POST':
        // Create new user
        const userData = JSON.parse(body);
        const newUser = await createUser(userData);
        return response(201, newUser);
        
      case 'PUT':
        // Update user
        const updateData = JSON.parse(body);
        const updatedUser = await updateUser(pathParameters.id, updateData);
        return response(200, updatedUser);
        
      case 'DELETE':
        // Delete user
        await deleteUser(pathParameters.id);
        return response(204, null);
        
      default:
        return response(405, { message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Handler error:', error);
    return response(500, { message: 'Internal Server Error' });
  }
};

// Helper function for consistent responses
const response = (statusCode, data) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
  },
  body: JSON.stringify(data)
});

// Database operations (using AWS SDK)
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand, DeleteCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const docClient = DynamoDBDocumentClient.from(ddbClient);
const TABLE_NAME = process.env.USERS_TABLE;

const getUserById = async (id) => {
  const result = await docClient.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: { id }
  }));
  
  if (!result.Item) {
    throw new Error('User not found');
  }
  
  return result.Item;
};

const createUser = async (userData) => {
  const user = {
    id: generateId(),
    ...userData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  await docClient.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: user
  }));
  
  return user;
};`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Event-Driven Lambda Functions</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// S3 event processing Lambda
export const processS3Event = async (event) => {
  console.log('S3 Event:', JSON.stringify(event, null, 2));
  
  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;
    const eventName = record.eventName;
    
    console.log(\`Processing \${eventName} for \${key} in \${bucket}\`);
    
    try {
      switch (eventName) {
        case 'ObjectCreated:Put':
        case 'ObjectCreated:Post':
          await processNewFile(bucket, key);
          break;
          
        case 'ObjectRemoved:Delete':
          await processDeletedFile(bucket, key);
          break;
          
        default:
          console.log(\`Unhandled event: \${eventName}\`);
      }
    } catch (error) {
      console.error(\`Error processing \${key}:\`, error);
      // Send to DLQ or SNS for manual handling
      await sendToErrorQueue(record, error);
    }
  }
};

// Image processing example
import sharp from 'sharp';

const processNewFile = async (bucket, key) => {
  // Only process image files
  if (!isImageFile(key)) {
    console.log(\`Skipping non-image file: \${key}\`);
    return;
  }
  
  try {
    // Download original image
    const originalImage = await s3Client.send(new GetObjectCommand({
      Bucket: bucket,
      Key: key
    }));
    
    const imageBuffer = await streamToBuffer(originalImage.Body);
    
    // Generate thumbnails
    const thumbnail = await sharp(imageBuffer)
      .resize(200, 200)
      .jpeg({ quality: 80 })
      .toBuffer();
      
    const medium = await sharp(imageBuffer)
      .resize(800, 800)
      .jpeg({ quality: 85 })
      .toBuffer();
    
    // Upload processed images
    const baseName = key.replace(/\\.[^/.]+$/, "");
    
    await Promise.all([
      s3Client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: \`\${baseName}-thumbnail.jpg\`,
        Body: thumbnail,
        ContentType: 'image/jpeg'
      })),
      s3Client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: \`\${baseName}-medium.jpg\`,
        Body: medium,
        ContentType: 'image/jpeg'
      }))
    ]);
    
    console.log(\`Successfully processed image: \${key}\`);
    
    // Update database with image metadata
    await updateImageRecord(key, {
      thumbnail: \`\${baseName}-thumbnail.jpg\`,
      medium: \`\${baseName}-medium.jpg\`,
      processed: true,
      processedAt: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Image processing failed:', error);
    throw error;
  }
};

// Scheduled Lambda function (CloudWatch Events)
export const scheduledTask = async (event) => {
  console.log('Scheduled event:', JSON.stringify(event, null, 2));
  
  try {
    // Cleanup old files
    await cleanupOldFiles();
    
    // Generate daily reports
    await generateDailyReport();
    
    // Send health check notifications
    await performHealthChecks();
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Scheduled tasks completed successfully'
      })
    };
  } catch (error) {
    console.error('Scheduled task failed:', error);
    
    // Send alert to operations team
    await sendAlert({
      subject: 'Scheduled Lambda Task Failed',
      message: \`Task failed with error: \${error.message}\`,
      severity: 'high'
    });
    
    throw error;
  }
};

// Lambda deployment with AWS SAM template
# template.yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Globals:
  Function:
    Runtime: nodejs18.x
    Timeout: 30
    MemorySize: 256
    Environment:
      Variables:
        NODE_ENV: production
        USERS_TABLE: !Ref UsersTable

Resources:
  # API Lambda Function
  UserFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: user.handler
      Events:
        Api:
          Type: Api
          Properties:
            Path: /users/{id+}
            Method: ANY
            RestApiId: !Ref ApiGateway
      Policies:
        - DynamoDBCrudPolicy:
            TableName: !Ref UsersTable

  # S3 Event Processing Function
  ImageProcessorFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: imageProcessor.handler
      Timeout: 300
      MemorySize: 1024
      Events:
        S3Event:
          Type: S3
          Properties:
            Bucket: !Ref ImagesBucket
            Events: s3:ObjectCreated:*
            Filter:
              S3Key:
                Rules:
                  - Name: prefix
                    Value: uploads/
      Policies:
        - S3ReadPolicy:
            BucketName: !Ref ImagesBucket
        - S3WritePolicy:
            BucketName: !Ref ImagesBucket

  # Scheduled Function
  ScheduledFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: scheduler.handler
      Events:
        DailySchedule:
          Type: Schedule
          Properties:
            Schedule: rate(1 day)
            Description: Daily maintenance tasks`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">AWS IAM (Identity and Access Management)</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-red-800 mb-3">IAM Security Fundamentals</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-3">Core Components:</h5>
              <ul className="text-red-600 space-y-2 text-sm">
                <li>• <strong>Users:</strong> Individual AWS identities</li>
                <li>• <strong>Groups:</strong> Collections of users</li>
                <li>• <strong>Roles:</strong> Permissions for AWS services</li>
                <li>• <strong>Policies:</strong> JSON documents defining permissions</li>
                <li>• <strong>MFA:</strong> Multi-factor authentication</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-red-700 mb-3">Security Best Practices:</h5>
              <ul className="text-red-600 space-y-2 text-sm">
                <li>• Principle of least privilege</li>
                <li>• Use roles instead of users for applications</li>
                <li>• Enable MFA for all human users</li>
                <li>• Rotate access keys regularly</li>
                <li>• Use AWS managed policies when possible</li>
                <li>• Monitor and audit permissions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">IAM Policies and Roles</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">IAM Policy Examples</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// S3 Read-Only Policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion"
      ],
      "Resource": [
        "arn:aws:s3:::my-app-bucket/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-app-bucket"
      ]
    }
  ]
}

// Lambda Execution Role Policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:GetItem",
        "dynamodb:PutItem",
        "dynamodb:UpdateItem",
        "dynamodb:DeleteItem",
        "dynamodb:Query",
        "dynamodb:Scan"
      ],
      "Resource": [
        "arn:aws:dynamodb:us-east-1:123456789012:table/Users",
        "arn:aws:dynamodb:us-east-1:123456789012:table/Users/index/*"
      ]
    }
  ]
}

// Development Environment Policy (More Permissive)
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "arn:aws:s3:::dev-*",
        "arn:aws:s3:::dev-*/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "lambda:InvokeFunction",
        "lambda:GetFunction",
        "lambda:UpdateFunctionCode"
      ],
      "Resource": [
        "arn:aws:lambda:us-east-1:123456789012:function:dev-*"
      ]
    }
  ]
}

// Cross-Account Access Policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::ACCOUNT-B:role/CrossAccountRole"
      },
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::shared-bucket/*"
      ],
      "Condition": {
        "StringEquals": {
          "s3:x-amz-server-side-encryption": "AES256"
        }
      }
    }
  ]
}`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Creating and Managing IAM Resources</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Create IAM role using AWS CLI
aws iam create-role \\
  --role-name LambdaExecutionRole \\
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }'

// Attach AWS managed policy
aws iam attach-role-policy \\
  --role-name LambdaExecutionRole \\
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

// Create custom policy
aws iam create-policy \\
  --policy-name S3ReadOnlyAccess \\
  --policy-document file://s3-readonly-policy.json

// Attach custom policy to role
aws iam attach-role-policy \\
  --role-name LambdaExecutionRole \\
  --policy-arn arn:aws:iam::123456789012:policy/S3ReadOnlyAccess

// Create IAM user for programmatic access
aws iam create-user --user-name deploy-user

// Create access key for user
aws iam create-access-key --user-name deploy-user

// Add user to group
aws iam add-user-to-group \\
  --user-name deploy-user \\
  --group-name developers

// Using AWS SDK to assume roles
import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts';

const stsClient = new STSClient({ region: 'us-east-1' });

const assumeRole = async (roleArn, sessionName) => {
  const command = new AssumeRoleCommand({
    RoleArn: roleArn,
    RoleSessionName: sessionName,
    DurationSeconds: 3600 // 1 hour
  });

  try {
    const result = await stsClient.send(command);
    
    return {
      accessKeyId: result.Credentials.AccessKeyId,
      secretAccessKey: result.Credentials.SecretAccessKey,
      sessionToken: result.Credentials.SessionToken,
      expiration: result.Credentials.Expiration
    };
  } catch (error) {
    throw new Error(\`Failed to assume role: \${error.message}\`);
  }
};

// Use temporary credentials
const tempCredentials = await assumeRole(
  'arn:aws:iam::123456789012:role/CrossAccountRole',
  'MyApp-Session'
);

const s3ClientWithTempCreds = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: tempCredentials.accessKeyId,
    secretAccessKey: tempCredentials.secretAccessKey,
    sessionToken: tempCredentials.sessionToken
  }
});

// CloudFormation template for IAM resources
Resources:
  # Lambda Execution Role
  LambdaExecutionRole:
    Type: AWS::IAM::Role
    Properties:
      RoleName: !Sub "\${AWS::StackName}-lambda-execution-role"
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: sts:AssumeRole
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
      Policies:
        - PolicyName: DynamoDBAccess
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              - Effect: Allow
                Action:
                  - dynamodb:GetItem
                  - dynamodb:PutItem
                  - dynamodb:UpdateItem
                  - dynamodb:DeleteItem
                  - dynamodb:Query
                  - dynamodb:Scan
                Resource: !GetAtt UsersTable.Arn

  # S3 Bucket Policy
  S3BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref StaticWebsiteBucket
      PolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Sid: PublicReadGetObject
            Effect: Allow
            Principal: '*'
            Action: s3:GetObject
            Resource: !Sub "\${StaticWebsiteBucket}/*"
            Condition:
              Bool:
                'aws:SecureTransport': 'true'`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">☁️ AWS Cloud Essentials Summary</h3>
        <p className="text-blue-700 mb-3">
          Master these AWS fundamentals to build scalable, secure, and cost-effective cloud applications.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-blue-700">S3 Storage:</strong>
            <ul className="text-blue-600 mt-1 space-y-1">
              <li>• Static website hosting</li>
              <li>• File upload and management</li>
              <li>• Pre-signed URLs for security</li>
              <li>• Lifecycle policies</li>
              <li>• Cross-origin resource sharing</li>
            </ul>
          </div>
          <div>
            <strong className="text-blue-700">Lambda Functions:</strong>
            <ul className="text-blue-600 mt-1 space-y-1">
              <li>• Event-driven architecture</li>
              <li>• REST API development</li>
              <li>• File processing automation</li>
              <li>• Scheduled tasks</li>
              <li>• Auto-scaling serverless compute</li>
            </ul>
          </div>
          <div>
            <strong className="text-blue-700">IAM Security:</strong>
            <ul className="text-blue-600 mt-1 space-y-1">
              <li>• Principle of least privilege</li>
              <li>• Role-based access control</li>
              <li>• Policy management</li>
              <li>• Multi-factor authentication</li>
              <li>• Cross-account access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}