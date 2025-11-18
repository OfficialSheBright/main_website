export default function ComplianceStandardsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">8.5 Compliance & Standards</h1>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Security Compliance Essentials</h3>
        <ul className="text-red-700 space-y-2">
          <li>• Master OWASP Top 10 vulnerabilities and mitigations</li>
          <li>• Implement PCI DSS requirements for payment processing</li>
          <li>• Understand GDPR fundamentals for data protection</li>
          <li>• Build compliance-ready applications from the start</li>
          <li>• Maintain ongoing security and privacy standards</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">OWASP Top 10 (2021)</h2>
        
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🥇 A01: Broken Access Control</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">What it is:</h4>
                <ul className="text-red-600 space-y-2 text-sm">
                  <li>• Users can act outside their intended permissions</li>
                  <li>• Viewing/editing someone else&apos;s account</li>
                  <li>• Accessing unauthorized functionality</li>
                  <li>• Privilege escalation attacks</li>
                  <li>• CORS misconfigurations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Prevention:</h4>
                <ul className="text-red-600 space-y-2 text-sm">
                  <li>• Deny by default access control</li>
                  <li>• Implement proper authorization checks</li>
                  <li>• Use role-based access control (RBAC)</li>
                  <li>• Validate permissions server-side</li>
                  <li>• Log access control failures</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white p-4 rounded-lg mt-4">
              <h5 className="font-semibold text-red-400 mb-2">Secure Access Control Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Role-based access control middleware
const authorize = (requiredRoles = []) => {
  return async (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    // Check if user has required roles
    const userRoles = req.user.roles || [];
    const hasPermission = requiredRoles.length === 0 || 
                         requiredRoles.some(role => userRoles.includes(role));
    
    if (!hasPermission) {
      // Log unauthorized access attempt
      logSecurityEvent({
        type: 'unauthorized_access',
        userId: req.user.id,
        requiredRoles,
        userRoles,
        resource: req.path,
        ip: req.ip
      });
      
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
};

// Resource-based authorization
const authorizeResource = (resourceType) => {
  return async (req, res, next) => {
    const resourceId = req.params.id;
    const userId = req.user.id;
    
    try {
      const resource = await getResource(resourceType, resourceId);
      
      if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
      }
      
      // Check ownership or permission
      if (resource.ownerId !== userId && !req.user.roles.includes('admin')) {
        logSecurityEvent({
          type: 'resource_access_denied',
          userId,
          resourceType,
          resourceId,
          ownerId: resource.ownerId
        });
        
        return res.status(403).json({ error: 'Access denied' });
      }
      
      req.resource = resource;
      next();
    } catch (error) {
      res.status(500).json({ error: 'Access check failed' });
    }
  };
};

// Usage examples
app.get('/api/admin/users', authenticate, authorize(['admin']), getUsersHandler);
app.get('/api/users/:id', authenticate, authorizeResource('user'), getUserHandler);`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">🥈 A02: Cryptographic Failures</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Common Issues:</h4>
                <ul className="text-orange-600 space-y-2 text-sm">
                  <li>• Transmitting data in clear text</li>
                  <li>• Using weak cryptographic algorithms</li>
                  <li>• Improper key management</li>
                  <li>• Insufficient entropy for random values</li>
                  <li>• Hardcoded cryptographic keys</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Best Practices:</h4>
                <ul className="text-orange-600 space-y-2 text-sm">
                  <li>• Use TLS 1.3 for data in transit</li>
                  <li>• Encrypt sensitive data at rest</li>
                  <li>• Use proven cryptographic libraries</li>
                  <li>• Implement proper key rotation</li>
                  <li>• Use secure random number generators</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white p-4 rounded-lg mt-4">
              <h5 className="font-semibold text-orange-400 mb-2">Secure Encryption Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const crypto = require('crypto');

// Secure encryption utility
class SecureEncryption {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.keyLength = 32; // 256 bits
    this.ivLength = 16;  // 128 bits
    this.tagLength = 16; // 128 bits
  }
  
  // Generate a secure random key
  generateKey() {
    return crypto.randomBytes(this.keyLength);
  }
  
  // Encrypt data
  encrypt(data, key) {
    const iv = crypto.randomBytes(this.ivLength);
    const cipher = crypto.createCipher(this.algorithm, key, { iv });
    
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const tag = cipher.getAuthTag();
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      tag: tag.toString('hex')
    };
  }
  
  // Decrypt data
  decrypt(encryptedData, key) {
    const { encrypted, iv, tag } = encryptedData;
    
    const decipher = crypto.createDecipher(
      this.algorithm, 
      key, 
      { iv: Buffer.from(iv, 'hex') }
    );
    
    decipher.setAuthTag(Buffer.from(tag, 'hex'));
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}

// Environment-based key management
const getEncryptionKey = () => {
  if (process.env.NODE_ENV === 'production') {
    // Use key management service in production
    return getKeyFromVault('app-encryption-key');
  } else {
    // Use environment variable for development
    return Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  }
};

// Database field encryption
const encryptSensitiveFields = (data, fieldsToEncrypt) => {
  const encryption = new SecureEncryption();
  const key = getEncryptionKey();
  const encrypted = { ...data };
  
  fieldsToEncrypt.forEach(field => {
    if (data[field]) {
      encrypted[field] = encryption.encrypt(data[field], key);
    }
  });
  
  return encrypted;
};`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">🥉 A03: Injection</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Injection Types:</h4>
                <ul className="text-yellow-600 space-y-2 text-sm">
                  <li>• SQL injection</li>
                  <li>• NoSQL injection</li>
                  <li>• Command injection</li>
                  <li>• LDAP injection</li>
                  <li>• XPath injection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Prevention:</h4>
                <ul className="text-yellow-600 space-y-2 text-sm">
                  <li>• Use parameterized queries</li>
                  <li>• Input validation and sanitization</li>
                  <li>• Escape special characters</li>
                  <li>• Use ORM/ODM safely</li>
                  <li>• Principle of least privilege</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">🏅 A04: Insecure Design</h3>
            <p className="text-blue-700 text-sm mb-3">
              A new category focusing on risks related to design flaws. Secure design requires a security mindset and patterns.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Common Issues:</h4>
                <ul className="text-blue-600 space-y-2 text-sm">
                  <li>• Missing or ineffective control design</li>
                  <li>• Lack of threat modeling</li>
                  <li>• Insecure design patterns</li>
                  <li>• Missing security requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Secure Design:</h4>
                <ul className="text-blue-600 space-y-2 text-sm">
                  <li>• Implement threat modeling</li>
                  <li>• Use secure design patterns</li>
                  <li>• Defense in depth strategy</li>
                  <li>• Security by design approach</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold purple-800 mb-4">Complete OWASP Top 10 Summary</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <ul className="space-y-2">
                  <li><strong className="text-purple-700">A05:</strong> <span className="text-purple-600">Security Misconfiguration</span></li>
                  <li><strong className="text-purple-700">A06:</strong> <span className="text-purple-600">Vulnerable Components</span></li>
                  <li><strong className="text-purple-700">A07:</strong> <span className="text-purple-600">Identification & Auth Failures</span></li>
                  <li><strong className="text-purple-700">A08:</strong> <span className="text-purple-600">Software & Data Integrity</span></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li><strong className="text-purple-700">A09:</strong> <span className="text-purple-600">Security Logging & Monitoring</span></li>
                  <li><strong className="text-purple-700">A10:</strong> <span className="text-purple-600">Server-Side Request Forgery</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">PCI DSS for Payment Processing</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">PCI DSS Requirements Overview</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-700 mb-3">Core Requirements (1-6):</h5>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• 1. Install and maintain firewall configuration</li>
                <li>• 2. Don&apos;t use vendor-supplied defaults</li>
                <li>• 3. Protect stored cardholder data</li>
                <li>• 4. Encrypt cardholder data across networks</li>
                <li>• 5. Protect systems against malware</li>
                <li>• 6. Develop secure systems and applications</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-700 mb-3">Additional Requirements (7-12):</h5>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• 7. Restrict access by business need-to-know</li>
                <li>• 8. Identify and authenticate access</li>
                <li>• 9. Restrict physical access to cardholder data</li>
                <li>• 10. Track and monitor network access</li>
                <li>• 11. Regularly test security systems</li>
                <li>• 12. Maintain information security policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">PCI DSS Compliant Payment Implementation</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Secure Payment Processing (No Card Data Storage)</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// PCI DSS compliant payment processing using Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Never store card data - use tokenization
const processPayment = async (req, res) => {
  try {
    const { paymentMethodId, amount, currency = 'usd' } = req.body;
    
    // Input validation
    if (!paymentMethodId || !amount || amount <= 0) {
      return res.status(400).json({ 
        error: 'Invalid payment parameters' 
      });
    }
    
    // Create payment intent (no card data stored)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      payment_method: paymentMethodId,
      confirmation_method: 'manual',
      confirm: true,
      metadata: {
        orderId: req.body.orderId,
        userId: req.user.id,
        timestamp: new Date().toISOString()
      }
    });
    
    // Log payment attempt (PCI DSS Requirement 10)
    logPaymentEvent({
      type: 'payment_attempt',
      userId: req.user.id,
      amount,
      currency,
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });
    
    if (paymentIntent.status === 'requires_action') {
      return res.json({
        requiresAction: true,
        clientSecret: paymentIntent.client_secret
      });
    } else if (paymentIntent.status === 'succeeded') {
      // Payment successful
      await updateOrderStatus(req.body.orderId, 'paid');
      
      logPaymentEvent({
        type: 'payment_success',
        userId: req.user.id,
        amount,
        paymentIntentId: paymentIntent.id
      });
      
      return res.json({ success: true });
    } else {
      throw new Error('Payment failed');
    }
    
  } catch (error) {
    // Log payment failure (PCI DSS Requirement 10)
    logPaymentEvent({
      type: 'payment_failure',
      userId: req.user?.id,
      error: error.message,
      ip: req.ip
    });
    
    res.status(400).json({ 
      error: 'Payment processing failed',
      code: error.code 
    });
  }
};

// Secure webhook handling for payment confirmations
const handleStripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  let event;
  
  try {
    // Verify webhook signature (PCI DSS Requirement 4)
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    logSecurityEvent({
      type: 'webhook_verification_failed',
      source: 'stripe',
      error: err.message,
      ip: req.ip
    });
    
    return res.status(400).send(\`Webhook signature verification failed: \${err.message}\`);
  }
  
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      await handleSuccessfulPayment(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      await handlePaymentMethodAttached(paymentMethod);
      break;
    default:
      console.log(\`Unhandled event type: \${event.type}\`);
  }
  
  res.json({ received: true });
};`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">PCI DSS Security Controls</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// PCI DSS Security middleware stack
const pciSecurityMiddleware = [
  // Requirement 4: Encrypt transmission of cardholder data
  helmet({
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "js.stripe.com"],
        frameSrc: ["'self'", "js.stripe.com"],
        styleSrc: ["'self'", "'unsafe-inline'"]
      }
    }
  }),
  
  // Requirement 7: Restrict access by business need-to-know
  (req, res, next) => {
    if (req.path.startsWith('/api/payments')) {
      if (!req.user || !req.user.roles.includes('payment_processor')) {
        logSecurityEvent({
          type: 'unauthorized_payment_access',
          userId: req.user?.id,
          path: req.path,
          ip: req.ip
        });
        
        return res.status(403).json({ error: 'Access denied' });
      }
    }
    next();
  },
  
  // Requirement 8: Identify and authenticate access
  authenticate,
  
  // Requirement 10: Track and monitor all access
  (req, res, next) => {
    if (req.path.includes('payment') || req.path.includes('card')) {
      logPaymentEvent({
        type: 'payment_api_access',
        userId: req.user?.id,
        method: req.method,
        path: req.path,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        timestamp: new Date().toISOString()
      });
    }
    next();
  }
];

// Apply PCI security middleware to payment routes
app.use('/api/payments', pciSecurityMiddleware);

// PCI DSS compliant logging
const logPaymentEvent = (event) => {
  // Mask sensitive data in logs (PCI DSS Requirement 3)
  const sanitizedEvent = {
    ...event,
    // Never log card data
    cardNumber: event.cardNumber ? maskCardNumber(event.cardNumber) : undefined,
    cvv: event.cvv ? '***' : undefined
  };
  
  // Use structured logging for compliance
  paymentLogger.info('Payment event', sanitizedEvent);
  
  // Send to SIEM system for monitoring
  sendToSIEM(sanitizedEvent);
};

// Mask card numbers for logging
const maskCardNumber = (cardNumber) => {
  if (!cardNumber) return '';
  return cardNumber.replace(/\\d(?=\\d{4})/g, '*');
};

// Regular security testing (PCI DSS Requirement 11)
const performSecurityScan = async () => {
  try {
    // Check for common vulnerabilities
    const vulnerabilities = await scanForVulnerabilities();
    
    if (vulnerabilities.length > 0) {
      logSecurityEvent({
        type: 'vulnerability_detected',
        vulnerabilities: vulnerabilities.map(v => ({
          type: v.type,
          severity: v.severity,
          location: v.location
        }))
      });
      
      // Alert security team
      await sendSecurityAlert({
        title: 'Security Vulnerabilities Detected',
        message: \`Found \${vulnerabilities.length} security issues\`,
        severity: 'high'
      });
    }
    
  } catch (error) {
    console.error('Security scan failed:', error);
  }
};

// Run security scans regularly
setInterval(performSecurityScan, 24 * 60 * 60 * 1000); // Daily`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">PCI DSS Compliance Levels</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">Merchant Levels:</h5>
              <ul className="text-yellow-600 space-y-2 text-sm">
                <li>• <strong>Level 1:</strong> 6M+ transactions/year - On-site assessment</li>
                <li>• <strong>Level 2:</strong> 1-6M transactions/year - Self-assessment</li>
                <li>• <strong>Level 3:</strong> 20K-1M e-commerce/year - Self-assessment</li>
                <li>• <strong>Level 4:</strong> Under 20K/year - Self-assessment</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">Best Practices:</h5>
              <ul className="text-yellow-600 space-y-2 text-sm">
                <li>• Use payment processors (Stripe, Square)</li>
                <li>• Never store card data</li>
                <li>• Implement tokenization</li>
                <li>• Regular security assessments</li>
                <li>• Employee security training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">GDPR Basics for Developers</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">GDPR Core Principles</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Data Protection Principles:</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• <strong>Lawfulness:</strong> Legal basis for processing</li>
                <li>• <strong>Purpose limitation:</strong> Specific purposes only</li>
                <li>• <strong>Data minimization:</strong> Collect only necessary data</li>
                <li>• <strong>Accuracy:</strong> Keep data accurate and up-to-date</li>
                <li>• <strong>Storage limitation:</strong> Don&apos;t keep data longer than needed</li>
                <li>• <strong>Security:</strong> Protect personal data</li>
                <li>• <strong>Accountability:</strong> Demonstrate compliance</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Individual Rights:</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• Right to be informed</li>
                <li>• Right of access</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure (&quot;right to be forgotten&quot;)</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object</li>
                <li>• Rights related to automated decision making</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">GDPR Compliant Data Handling</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Data Processing & Consent Management</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// GDPR compliant user data model
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true,
    index: true 
  },
  profile: {
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    phone: String
  },
  
  // GDPR consent tracking
  consent: {
    marketing: {
      given: { type: Boolean, default: false },
      timestamp: Date,
      ipAddress: String,
      userAgent: String
    },
    analytics: {
      given: { type: Boolean, default: false },
      timestamp: Date,
      ipAddress: String,
      userAgent: String
    },
    functional: {
      given: { type: Boolean, default: true }, // Essential cookies
      timestamp: Date,
      ipAddress: String,
      userAgent: String
    }
  },
  
  // Data processing records
  dataProcessing: [{
    purpose: String, // 'account_management', 'marketing', etc.
    legalBasis: String, // 'consent', 'contract', 'legitimate_interest'
    categories: [String], // ['contact_details', 'usage_data']
    retention: {
      period: Number, // Days
      reason: String
    },
    timestamp: { type: Date, default: Date.now }
  }],
  
  // GDPR request history
  dataRequests: [{
    type: { 
      type: String, 
      enum: ['access', 'rectification', 'erasure', 'portability', 'restriction'] 
    },
    status: { 
      type: String, 
      enum: ['pending', 'completed', 'rejected'] 
    },
    requestedAt: { type: Date, default: Date.now },
    completedAt: Date,
    reason: String
  }],
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// GDPR consent management
const updateConsent = async (req, res) => {
  try {
    const { userId } = req.params;
    const { marketing, analytics } = req.body;
    
    const consentUpdate = {
      timestamp: new Date(),
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    };
    
    const updateFields = {};
    
    if (typeof marketing === 'boolean') {
      updateFields['consent.marketing'] = {
        ...consentUpdate,
        given: marketing
      };
    }
    
    if (typeof analytics === 'boolean') {
      updateFields['consent.analytics'] = {
        ...consentUpdate,
        given: analytics
      };
    }
    
    await User.findByIdAndUpdate(userId, {
      $set: updateFields,
      updatedAt: new Date()
    });
    
    // Log consent change for audit trail
    logGDPREvent({
      type: 'consent_updated',
      userId,
      changes: updateFields,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });
    
    res.json({ message: 'Consent preferences updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update consent' });
  }
};

// Data subject access request (Article 15)
const handleAccessRequest = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Compile all personal data
    const personalData = {
      profile: user.profile,
      email: user.email,
      consent: user.consent,
      dataProcessing: user.dataProcessing,
      
      // Additional data from other collections
      orders: await Order.find({ userId }).select('-paymentDetails'),
      activities: await Activity.find({ userId }),
      preferences: await Preference.find({ userId })
    };
    
    // Log the access request
    await User.findByIdAndUpdate(userId, {
      $push: {
        dataRequests: {
          type: 'access',
          status: 'completed',
          completedAt: new Date()
        }
      }
    });
    
    logGDPREvent({
      type: 'data_access_request',
      userId,
      ip: req.ip
    });
    
    res.json({
      message: 'Personal data export',
      data: personalData,
      exportedAt: new Date().toISOString()
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to process access request' });
  }
};`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Data Erasure & Portability</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Right to erasure implementation (Article 17)
const handleErasureRequest = async (req, res) => {
  try {
    const { userId } = req.params;
    const { reason } = req.body;
    
    // Check if erasure is possible
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Check for legal obligations that prevent erasure
    const activeOrders = await Order.find({ 
      userId, 
      status: { $in: ['pending', 'processing'] } 
    });
    
    if (activeOrders.length > 0) {
      return res.status(400).json({ 
        error: 'Cannot delete account with active orders',
        activeOrders: activeOrders.length
      });
    }
    
    // Perform anonymization instead of deletion for audit logs
    const anonymizedData = {
      email: \`deleted-\${Date.now()}@example.com\`,
      profile: {
        firstName: '[DELETED]',
        lastName: '[DELETED]',
        dateOfBirth: null,
        phone: null
      },
      isDeleted: true,
      deletedAt: new Date(),
      deletionReason: reason
    };
    
    // Update user with anonymized data
    await User.findByIdAndUpdate(userId, anonymizedData);
    
    // Remove personal data from related collections
    await Activity.deleteMany({ userId });
    await Preference.deleteMany({ userId });
    
    // Anonymize order data (keep for business records)
    await Order.updateMany(
      { userId },
      { 
        $unset: { 
          shippingAddress: 1,
          billingAddress: 1,
          customerNotes: 1 
        } 
      }
    );
    
    // Log the erasure request
    logGDPREvent({
      type: 'data_erasure',
      userId,
      reason,
      ip: req.ip
    });
    
    res.json({ message: 'Account data has been deleted' });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to process erasure request' });
  }
};

// Data portability implementation (Article 20)
const handlePortabilityRequest = async (req, res) => {
  try {
    const { userId } = req.params;
    const { format = 'json' } = req.query;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Compile portable data (structured, commonly used format)
    const portableData = {
      personal_information: {
        email: user.email,
        first_name: user.profile.firstName,
        last_name: user.profile.lastName,
        phone: user.profile.phone,
        created_at: user.createdAt
      },
      preferences: await Preference.find({ userId }).lean(),
      order_history: await Order.find({ userId })
        .select('items total createdAt status')
        .lean(),
      consent_history: user.consent
    };
    
    // Log portability request
    await User.findByIdAndUpdate(userId, {
      $push: {
        dataRequests: {
          type: 'portability',
          status: 'completed',
          completedAt: new Date()
        }
      }
    });
    
    logGDPREvent({
      type: 'data_portability_request',
      userId,
      format,
      ip: req.ip
    });
    
    if (format === 'csv') {
      // Convert to CSV format
      const csv = await convertToCSV(portableData);
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="personal-data.csv"');
      res.send(csv);
    } else {
      res.json({
        message: 'Portable data export',
        data: portableData,
        exportedAt: new Date().toISOString(),
        format: 'json'
      });
    }
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to process portability request' });
  }
};

// Data retention policy enforcement
const enforceDataRetention = async () => {
  try {
    // Find users with expired consent
    const expiredConsent = await User.find({
      'consent.marketing.given': true,
      'consent.marketing.timestamp': {
        $lt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) // 1 year ago
      }
    });
    
    for (const user of expiredConsent) {
      // Revoke expired consent
      await User.findByIdAndUpdate(user._id, {
        'consent.marketing.given': false,
        'consent.marketing.revokedAt': new Date(),
        'consent.marketing.revokedReason': 'expired'
      });
      
      logGDPREvent({
        type: 'consent_expired',
        userId: user._id,
        consentType: 'marketing'
      });
    }
    
    // Delete old anonymized accounts
    await User.deleteMany({
      isDeleted: true,
      deletedAt: {
        $lt: new Date(Date.now() - 7 * 365 * 24 * 60 * 60 * 1000) // 7 years
      }
    });
    
  } catch (error) {
    console.error('Data retention enforcement failed:', error);
  }
};

// Run retention policy daily
setInterval(enforceDataRetention, 24 * 60 * 60 * 1000);

// GDPR event logging
const logGDPREvent = (event) => {
  gdprLogger.info('GDPR event', {
    ...event,
    timestamp: new Date().toISOString(),
    service: 'api-server'
  });
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-purple-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">📋 Compliance Implementation Checklist</h3>
        <p className="text-red-700 mb-3">
          Essential compliance measures every web application should implement to meet industry standards and regulations.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-red-700">OWASP Top 10:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• Access control implementation</li>
              <li>• Encryption for sensitive data</li>
              <li>• Input validation & sanitization</li>
              <li>• Security by design approach</li>
              <li>• Regular vulnerability testing</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-700">PCI DSS:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• Never store card data</li>
              <li>• Use certified payment processors</li>
              <li>• Implement strong access controls</li>
              <li>• Maintain audit logs</li>
              <li>• Regular security assessments</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-700">GDPR:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• Consent management system</li>
              <li>• Data subject rights implementation</li>
              <li>• Privacy by design</li>
              <li>• Data retention policies</li>
              <li>• Breach notification procedures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}