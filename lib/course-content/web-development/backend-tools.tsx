export default function BackendToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">3.5 Backend Tools</h1>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8">
        <h3 className="text-teal-800 font-semibold mb-3">Essential Backend Tools</h3>
        <ul className="text-teal-700 space-y-2">
          <li>• ORMs for database management (Prisma, Mongoose)</li>
          <li>• Redis for caching and session storage</li>
          <li>• Message queues for background processing</li>
          <li>• Performance optimization techniques</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Object-Relational Mapping (ORMs)</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Prisma (SQL)</h3>
            <div className="bg-gray-900 text-white p-4 rounded mb-4">
              <pre className="text-xs overflow-x-auto">
                <code>{`// schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}`}</code>
              </pre>
            </div>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Using Prisma Client
const prisma = new PrismaClient();

// Create user with posts
const user = await prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    posts: {
      create: [
        { title: 'First Post', content: 'Hello World!' },
        { title: 'Second Post', content: 'Learning Prisma' }
      ]
    }
  },
  include: { posts: true }
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Mongoose (MongoDB)</h3>
            <div className="bg-gray-900 text-white p-4 rounded mb-4">
              <pre className="text-xs overflow-x-auto">
                <code>{`// User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    bio: String,
    skills: [String],
    avatar: String
  },
  posts: [{
    title: String,
    content: String,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);`}</code>
              </pre>
            </div>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Using Mongoose
// Create user
const user = new User({
  name: 'John Doe',
  email: 'john@example.com',
  password: hashedPassword,
  profile: {
    bio: 'Full-stack developer',
    skills: ['JavaScript', 'React', 'Node.js']
  }
});

await user.save();

// Find users with posts
const users = await User.find({
  'posts.0': { $exists: true }
}).select('name email posts.title');`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Caching with Redis</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h4 className="font-semibold text-red-800 mb-3">Redis Implementation</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

// Caching middleware
const cache = (duration = 3600) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    
    try {
      const cached = await client.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
      
      // Store original send function
      const originalSend = res.json;
      
      // Override send function to cache response
      res.json = function(data) {
        // Cache the response
        client.setex(key, duration, JSON.stringify(data));
        // Send response using original function
        originalSend.call(this, data);
      };
      
      next();
    } catch (error) {
      next();
    }
  };
};

// Usage
app.get('/api/posts', cache(1800), async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

// Session storage with Redis
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(session({
  store: new RedisStore({ client: client }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Message Queues</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">RabbitMQ</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`const amqp = require('amqplib');

// Producer
async function sendEmail(emailData) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  const queue = 'email_queue';
  
  await channel.assertQueue(queue, { durable: true });
  
  channel.sendToQueue(
    queue, 
    Buffer.from(JSON.stringify(emailData)),
    { persistent: true }
  );
  
  await channel.close();
  await connection.close();
}

// Consumer
async function processEmails() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  const queue = 'email_queue';
  
  await channel.assertQueue(queue, { durable: true });
  channel.prefetch(1);
  
  channel.consume(queue, async (msg) => {
    const emailData = JSON.parse(msg.content.toString());
    
    try {
      await sendEmailService(emailData);
      channel.ack(msg);
    } catch (error) {
      console.error('Failed to send email:', error);
      channel.nack(msg, false, true);
    }
  });
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Background Jobs</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`const Queue = require('bull');
const emailQueue = new Queue('email processing');

// Add job to queue
app.post('/api/send-newsletter', async (req, res) => {
  try {
    const { recipients, subject, content } = req.body;
    
    // Add job to queue instead of processing immediately
    await emailQueue.add('send-newsletter', {
      recipients,
      subject,
      content,
      timestamp: new Date()
    }, {
      attempts: 3,
      backoff: 'exponential',
      delay: 2000
    });
    
    res.json({ message: 'Newsletter queued for sending' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to queue newsletter' });
  }
});

// Process jobs
emailQueue.process('send-newsletter', async (job) => {
  const { recipients, subject, content } = job.data;
  
  for (const recipient of recipients) {
    await sendEmail({
      to: recipient,
      subject,
      html: content
    });
    
    // Update progress
    job.progress(((recipients.indexOf(recipient) + 1) / recipients.length) * 100);
  }
  
  return { sent: recipients.length };
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
        <h3 className="text-teal-800 font-semibold mb-2">🚀 Performance Tips</h3>
        <ul className="text-teal-700 space-y-1 text-sm">
          <li>• Use database indexes for frequently queried fields</li>
          <li>• Implement caching for expensive operations</li>
          <li>• Use message queues for background processing</li>
          <li>• Monitor database query performance</li>
          <li>• Implement connection pooling</li>
        </ul>
      </div>
    </div>
  );
}