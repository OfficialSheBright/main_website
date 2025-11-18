export default function ThirdPartyServicesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">4.4 Integrating Third-Party Services</h1>
      
      <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-8">
        <h3 className="text-cyan-800 font-semibold mb-3">Essential Third-Party Integrations</h3>
        <ul className="text-cyan-700 space-y-2">
          <li>• Payment processing with Stripe & Razorpay</li>
          <li>• Email services for notifications & marketing</li>
          <li>• Cloud storage for file management</li>
          <li>• Real-world implementation patterns</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Payment Integration</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Stripe Integration</h3>
            <div className="bg-gray-900 text-white p-4 rounded mb-4">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Backend - Stripe payment intent
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd', metadata = {} } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Webhook for payment confirmation
app.post('/api/stripe-webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(\`Webhook signature verification failed.\`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    // Update order status in database
    updateOrderStatus(paymentIntent.metadata.orderId, 'paid');
  }

  res.json({received: true});
});`}</code>
              </pre>
            </div>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Frontend - React Stripe integration
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function CheckoutForm({ amount, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    // Create payment intent
    const { client_secret } = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    }).then(r => r.json());

    // Confirm payment
    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: 'Customer' }
      }
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      onSuccess(result.paymentIntent);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement 
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': { color: '#aab7c4' }
            }
          }
        }}
      />
      <button disabled={!stripe || loading}>
        Pay \${amount}
      </button>
    </form>
  );
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Razorpay Integration</h3>
            <div className="bg-gray-900 text-white p-4 rounded mb-4">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Backend - Razorpay order creation
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post('/api/create-razorpay-order', async (req, res) => {
  try {
    const { amount, currency = 'INR' } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency,
      receipt: \`receipt_\${Date.now()}\`,
      payment_capture: 1
    });

    res.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Payment verification
app.post('/api/verify-razorpay-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const crypto = require('crypto');
  const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  if (generated_signature === razorpay_signature) {
    // Payment verified, update order status
    res.json({ verified: true });
  } else {
    res.status(400).json({ verified: false });
  }
});`}</code>
              </pre>
            </div>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Frontend - Razorpay checkout
function RazorpayCheckout({ amount, onSuccess }) {
  const handlePayment = async () => {
    // Create order
    const { order_id } = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    }).then(r => r.json());

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: 'INR',
      name: 'Your Company',
      description: 'Purchase Description',
      order_id,
      handler: async function(response) {
        // Verify payment
        const verification = await fetch('/api/verify-razorpay-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(response)
        }).then(r => r.json());

        if (verification.verified) {
          onSuccess(response);
        }
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment}>
      Pay ₹{amount} with Razorpay
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Email Services</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">SendGrid Integration</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Email service with SendGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class EmailService {
  async sendWelcomeEmail(user) {
    const msg = {
      to: user.email,
      from: process.env.FROM_EMAIL,
      templateId: 'd-welcome-template-id',
      dynamicTemplateData: {
        name: user.name,
        loginUrl: \`\${process.env.CLIENT_URL}/login\`
      }
    };

    try {
      await sgMail.send(msg);
      console.log('Welcome email sent');
    } catch (error) {
      console.error('Email error:', error);
    }
  }

  async sendOrderConfirmation(order, user) {
    const msg = {
      to: user.email,
      from: process.env.FROM_EMAIL,
      subject: \`Order Confirmation #\${order.id}\`,
      html: \`
        <h2>Thank you for your order!</h2>
        <p>Order ID: #\${order.id}</p>
        <p>Total: \$\${order.total}</p>
        <h3>Items:</h3>
        <ul>
          \${order.items.map(item => 
            \`<li>\${item.name} x \${item.quantity} - \$\${item.price}</li>\`
          ).join('')}
        </ul>
      \`
    };

    await sgMail.send(msg);
  }

  async sendBulkNewsletter(recipients, newsletter) {
    const personalizations = recipients.map(user => ({
      to: [{ email: user.email, name: user.name }],
      dynamicTemplateData: {
        name: user.name,
        unsubscribeUrl: \`\${process.env.CLIENT_URL}/unsubscribe/\${user.token}\`
      }
    }));

    const msg = {
      from: process.env.FROM_EMAIL,
      templateId: newsletter.templateId,
      personalizations
    };

    await sgMail.send(msg);
  }
}

module.exports = new EmailService();`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Mailgun Integration</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Email service with Mailgun
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

class MailgunService {
  async sendTransactionalEmail(to, subject, html, text) {
    try {
      const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: \`Your App <noreply@\${process.env.MAILGUN_DOMAIN}>\`,
        to: [to],
        subject,
        text,
        html
      });
      
      return result;
    } catch (error) {
      console.error('Mailgun error:', error);
      throw error;
    }
  }

  async sendPasswordReset(user, resetToken) {
    const resetUrl = \`\${process.env.CLIENT_URL}/reset-password/\${resetToken}\`;
    
    const html = \`
      <h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <a href="\${resetUrl}">Reset Password</a>
      <p>This link expires in 1 hour.</p>
    \`;

    await this.sendTransactionalEmail(
      user.email,
      'Password Reset Request',
      html,
      \`Reset your password: \${resetUrl}\`
    );
  }

  async sendBulkEmails(recipients, template) {
    // Batch send to avoid rate limits
    const batchSize = 100;
    
    for (let i = 0; i < recipients.length; i += batchSize) {
      const batch = recipients.slice(i, i + batchSize);
      
      const promises = batch.map(recipient => 
        this.sendTransactionalEmail(
          recipient.email,
          template.subject,
          template.html.replace('{{name}}', recipient.name),
          template.text.replace('{{name}}', recipient.name)
        )
      );

      await Promise.all(promises);
      
      // Rate limiting delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

module.exports = new MailgunService();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cloud Storage</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">AWS S3 Integration</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// AWS S3 file upload service
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Multer S3 configuration
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      const fileName = \`\${Date.now()}-\${file.originalname}\`;
      cb(null, fileName);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
    const extname = allowedTypes.test(file.originalname.toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// Upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({
    message: 'File uploaded successfully',
    file: {
      url: req.file.location,
      key: req.file.key,
      size: req.file.size
    }
  });
});

// Delete file from S3
app.delete('/api/files/:key', async (req, res) => {
  try {
    await s3.deleteObject({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.params.key
    }).promise();

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
            <h4 className="font-semibold text-pink-800 mb-3">Cloudinary Integration</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Cloudinary image upload and transformation
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpeg', 'png', 'jpg', 'gif'],
    transformation: [
      { width: 1000, height: 1000, crop: 'limit' },
      { quality: 'auto:good' }
    ]
  }
});

const upload = multer({ storage });

// Upload with automatic optimization
app.post('/api/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image uploaded' });
  }

  res.json({
    message: 'Image uploaded successfully',
    image: {
      url: req.file.path,
      public_id: req.file.filename,
      // Generate different sizes
      thumbnail: cloudinary.url(req.file.filename, {
        width: 150, height: 150, crop: 'thumb'
      }),
      medium: cloudinary.url(req.file.filename, {
        width: 500, height: 500, crop: 'limit'
      })
    }
  });
});

// Frontend - React image upload with preview
function ImageUpload({ onUpload }) {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show preview
    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      onUpload(result.image);
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div>
          <img src={preview} alt="Preview" style={{maxWidth: '200px'}} />
          {uploading && <p>Uploading...</p>}
        </div>
      )}
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6">
        <h3 className="text-cyan-800 font-semibold mb-2">💡 Integration Best Practices</h3>
        <ul className="text-cyan-700 space-y-1 text-sm">
          <li>• Use environment variables for all API keys and secrets</li>
          <li>• Implement proper error handling and user feedback</li>
          <li>• Add rate limiting to prevent abuse</li>
          <li>• Use webhooks for real-time updates when possible</li>
          <li>• Test integrations in sandbox/development modes first</li>
        </ul>
      </div>
    </div>
  );
}