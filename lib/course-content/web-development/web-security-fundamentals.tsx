export default function WebSecurityFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">8.1 Web Security Fundamentals</h1>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Web Security Engineering Fundamentals</h3>
        <ul className="text-red-700 space-y-2">
          <li>• Master threat modeling and security assessment</li>
          <li>• Implement comprehensive security headers</li>
          <li>• Configure secure HTTPS and TLS</li>
          <li>• Build defense-in-depth security architecture</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Threat Modeling</h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-orange-800 mb-3">STRIDE Threat Model</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">STRIDE Categories:</h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-red-700 text-sm">Spoofing</h6>
                  <p className="text-red-600 text-xs">Impersonating another user or system</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-orange-700 text-sm">Tampering</h6>
                  <p className="text-orange-600 text-xs">Modifying data or code maliciously</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-yellow-700 text-sm">Repudiation</h6>
                  <p className="text-yellow-600 text-xs">Denying actions or transactions</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-green-700 text-sm">Information Disclosure</h6>
                  <p className="text-green-600 text-xs">Exposing sensitive information</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-blue-700 text-sm">Denial of Service</h6>
                  <p className="text-blue-600 text-xs">Making services unavailable</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-purple-700 text-sm">Elevation of Privilege</h6>
                  <p className="text-purple-600 text-xs">Gaining unauthorized access levels</p>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">Threat Modeling Process:</h5>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-gray-700 text-sm">1. Define Security Objectives</h6>
                  <ul className="text-gray-600 text-xs mt-1 space-y-1">
                    <li>• Identify assets to protect</li>
                    <li>• Define security requirements</li>
                    <li>• Establish threat boundaries</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-gray-700 text-sm">2. Create System Model</h6>
                  <ul className="text-gray-600 text-xs mt-1 space-y-1">
                    <li>• Draw data flow diagrams</li>
                    <li>• Identify trust boundaries</li>
                    <li>• Map attack surfaces</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-gray-700 text-sm">3. Identify Threats</h6>
                  <ul className="text-gray-600 text-xs mt-1 space-y-1">
                    <li>• Apply STRIDE methodology</li>
                    <li>• Use threat libraries</li>
                    <li>• Consider attack trees</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-gray-700 text-sm">4. Mitigate Threats</h6>
                  <ul className="text-gray-600 text-xs mt-1 space-y-1">
                    <li>• Design countermeasures</li>
                    <li>• Implement security controls</li>
                    <li>• Validate effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Threat Assessment Tools</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-400 mb-3">Risk Assessment Matrix</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Risk Calculation Framework
class ThreatAssessment {
  calculateRisk(likelihood, impact) {
    // Risk = Likelihood × Impact
    const riskMatrix = {
      'Very Low': 1, 'Low': 2, 'Medium': 3, 
      'High': 4, 'Very High': 5
    };
    
    const riskScore = riskMatrix[likelihood] * riskMatrix[impact];
    
    if (riskScore >= 20) return 'Critical';
    if (riskScore >= 15) return 'High';
    if (riskScore >= 10) return 'Medium';
    if (riskScore >= 5) return 'Low';
    return 'Very Low';
  }

  assessThreat(threat) {
    return {
      id: threat.id,
      category: threat.strideCategory,
      description: threat.description,
      likelihood: threat.likelihood,
      impact: threat.impact,
      riskLevel: this.calculateRisk(threat.likelihood, threat.impact),
      mitigations: threat.mitigations,
      residualRisk: threat.residualRisk
    };
  }
}

// Example Threat Assessment
const threats = [
  {
    id: 'T001',
    strideCategory: 'Spoofing',
    description: 'Unauthorized user impersonation',
    likelihood: 'Medium',
    impact: 'High',
    mitigations: ['MFA', 'Strong Authentication'],
    residualRisk: 'Low'
  }
];`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Attack Surface Analysis</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Attack Surface Mapping
class AttackSurfaceAnalyzer {
  constructor() {
    this.surfaces = {
      network: [],
      application: [],
      human: []
    };
  }

  analyzeNetworkSurface() {
    return {
      openPorts: this.scanOpenPorts(),
      protocols: this.identifyProtocols(),
      endpoints: this.mapEndpoints(),
      firewallRules: this.auditFirewall()
    };
  }

  analyzeApplicationSurface() {
    return {
      inputVectors: this.findInputVectors(),
      apiEndpoints: this.mapAPIEndpoints(),
      fileUploads: this.identifyUploads(),
      userInterfaces: this.mapUIs(),
      thirdPartyComponents: this.auditDependencies()
    };
  }

  analyzeHumanSurface() {
    return {
      socialEngineering: this.assessSocialRisks(),
      phishingVectors: this.identifyPhishingRisks(),
      insiderThreats: this.assessInsiderRisks(),
      trainingGaps: this.identifyTrainingNeeds()
    };
  }

  generateReport() {
    return {
      timestamp: new Date().toISOString(),
      network: this.analyzeNetworkSurface(),
      application: this.analyzeApplicationSurface(),
      human: this.analyzeHumanSurface(),
      overallRisk: this.calculateOverallRisk()
    };
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Security Headers</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">Essential Security Headers</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Complete Security Headers Configuration
const securityHeaders = {
  // Prevent clickjacking attacks
  'X-Frame-Options': 'DENY',
  
  // Enhanced clickjacking protection
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://api.example.com; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self';",
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Enable XSS filtering
  'X-XSS-Protection': '1; mode=block',
  
  // Enforce HTTPS
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  
  // Control referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions policy
  'Permissions-Policy': 
    'geolocation=(), ' +
    'microphone=(), ' +
    'camera=(), ' +
    'payment=(), ' +
    'usb=(), ' +
    'magnetometer=(), ' +
    'gyroscope=(), ' +
    'accelerometer=()',
  
  // Feature policy (legacy)
  'Feature-Policy': 
    "geolocation 'none'; " +
    "microphone 'none'; " +
    "camera 'none'; " +
    "payment 'none';",
  
  // Prevent opening in frame/embed
  'X-Permitted-Cross-Domain-Policies': 'none',
  
  // Server information hiding
  'X-Powered-By': '', // Remove this header
  'Server': '' // Remove this header
};

// Express.js Implementation
const express = require('express');
const helmet = require('helmet');
const app = express();

// Use Helmet for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://api.example.com"],
      frameAncestors: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Content Security Policy (CSP)</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <h5 className="font-semibold text-green-700 text-sm mb-2">CSP Directives:</h5>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>• <code>default-src</code>: Fallback for other directives</li>
                  <li>• <code>script-src</code>: JavaScript sources</li>
                  <li>• <code>style-src</code>: CSS sources</li>
                  <li>• <code>img-src</code>: Image sources</li>
                  <li>• <code>connect-src</code>: AJAX/WebSocket sources</li>
                  <li>• <code>frame-src</code>: Frame/iframe sources</li>
                  <li>• <code>font-src</code>: Font sources</li>
                  <li>• <code>media-src</code>: Video/audio sources</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h5 className="font-semibold text-green-700 text-sm mb-1">CSP Testing:</h5>
                <pre className="text-xs overflow-x-auto">
                  <code>{`// CSP Report Endpoint
app.post('/csp-report', express.json(), (req, res) => {
  console.log('CSP Violation:', req.body);
  // Log to security monitoring system
  securityLogger.warn('CSP_VIOLATION', req.body);
  res.status(204).end();
});

// CSP with reporting
'Content-Security-Policy-Report-Only': 
  "default-src 'self'; report-uri /csp-report"`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">HSTS & Certificate Pinning</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <h5 className="font-semibold text-purple-700 text-sm mb-2">HSTS Configuration:</h5>
                <pre className="text-xs overflow-x-auto">
                  <code>{`// HSTS Header Components
const hstsHeader = [
  'max-age=31536000',        // 1 year
  'includeSubDomains',       // Apply to subdomains
  'preload'                  // Submit for preload list
].join('; ');

// Nginx Configuration
add_header Strict-Transport-Security 
  "max-age=31536000; includeSubDomains; preload" always;

// Apache Configuration
Header always set Strict-Transport-Security 
  "max-age=31536000; includeSubDomains; preload"`}</code>
                </pre>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h5 className="font-semibold text-purple-700 text-sm mb-2">Certificate Pinning:</h5>
                <pre className="text-xs overflow-x-auto">
                  <code>{`// Public Key Pinning Header
'Public-Key-Pins': 
  'pin-sha256="base64+primary+key+hash=="; ' +
  'pin-sha256="base64+backup+key+hash=="; ' +
  'max-age=5184000; ' +
  'includeSubDomains; ' +
  'report-uri="/hpkp-report"';

// Certificate Transparency
'Expect-CT': 
  'max-age=86400, ' +
  'enforce, ' +
  'report-uri="/ct-report"';`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">HTTPS Configuration</h2>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-indigo-800 mb-3">TLS Best Practices</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3">SSL/TLS Configuration:</h5>
              <div className="bg-gray-900 text-white p-4 rounded">
                <pre className="text-xs overflow-x-auto">
                  <code>{`# Nginx SSL Configuration
server {
    listen 443 ssl http2;
    server_name example.com;
    
    # SSL Certificates
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/private.key;
    
    # SSL Protocols
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Cipher Suites
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # SSL Session
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /path/to/chain.pem;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options DENY always;
    add_header X-Content-Type-Options nosniff always;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}`}</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3">Let's Encrypt Automation:</h5>
              <div className="bg-gray-900 text-white p-4 rounded">
                <pre className="text-xs overflow-x-auto">
                  <code>{`# Certbot Installation & Setup
sudo apt install certbot python3-certbot-nginx

# Obtain Certificate
sudo certbot --nginx -d example.com -d www.example.com

# Auto Renewal Cron Job
0 12 * * * /usr/bin/certbot renew --quiet

# Docker Compose with Auto-SSL
version: '3.8'
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./certs:/etc/nginx/certs
      - ./html:/usr/share/nginx/html
    
  certbot:
    image: certbot/certbot
    volumes:
      - ./certs:/etc/letsencrypt
      - ./html:/var/www/certbot
    command: >
      sh -c "while :; do 
        certbot renew --webroot --webroot-path=/var/www/certbot; 
        sleep 12h; 
      done"

# SSL Labs Test Script
#!/bin/bash
DOMAIN="example.com"
API_URL="https://api.ssllabs.com/api/v3/"

# Start assessment
curl -s "\${API_URL}analyze?host=\${DOMAIN}&startNew=on" | jq .

# Check results
curl -s "\${API_URL}analyze?host=\${DOMAIN}" | jq .`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Certificate Management</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-yellow-700 text-sm mb-2">Certificate Types:</h5>
              <ul className="text-yellow-600 text-xs space-y-1">
                <li>• Domain Validated (DV)</li>
                <li>• Organization Validated (OV)</li>
                <li>• Extended Validation (EV)</li>
                <li>• Wildcard Certificates</li>
                <li>• Multi-Domain (SAN)</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-yellow-700 text-sm mb-2">Monitoring:</h5>
              <ul className="text-yellow-600 text-xs space-y-1">
                <li>• Expiration alerts</li>
                <li>• Certificate transparency logs</li>
                <li>• SSL/TLS scanning</li>
                <li>• Configuration validation</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-yellow-700 text-sm mb-2">Best Practices:</h5>
              <ul className="text-yellow-600 text-xs space-y-1">
                <li>• Regular renewal automation</li>
                <li>• Proper key management</li>
                <li>• Strong cipher suites</li>
                <li>• Perfect Forward Secrecy</li>
                <li>• OCSP stapling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">🛡️ Next: Application-Level Security</h3>
        <p className="text-red-700 mb-3">
          Learn to protect against common web vulnerabilities including SQL injection, XSS, CSRF, and more advanced application security threats.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="text-red-700">Application Vulnerabilities:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• SQL Injection prevention</li>
              <li>• XSS mitigation strategies</li>
              <li>• CSRF protection</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-700">Advanced Security:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• Session hijacking prevention</li>
              <li>• IDOR vulnerability fixes</li>
              <li>• Security testing frameworks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}