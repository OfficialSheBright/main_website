export default function AuthenticationSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">8.3 Authentication Security</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">Secure Authentication Implementation</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• Implement Two-Factor Authentication (2FA) systems</li>
          <li>• Master secure password hashing techniques</li>
          <li>• Secure JWT and token management</li>
          <li>• OAuth 2.0 security best practices</li>
          <li>• Protect against authentication attacks</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Password Hashing Security</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">Password Security Fundamentals</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-700 mb-3">Why Proper Hashing Matters:</h5>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• Passwords never stored in plain text</li>
                <li>• Protection against database breaches</li>
                <li>• Rainbow table attack prevention</li>
                <li>• Computational cost for attackers</li>
                <li>• Salting prevents pre-computed attacks</li>
                <li>• Future-proof against hardware advances</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-700 mb-3">Hashing Algorithm Comparison:</h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-green-700 text-sm">✅ Recommended:</h6>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• <strong>Argon2id</strong> - Latest winner</li>
                    <li>• <strong>bcrypt</strong> - Battle-tested</li>
                    <li>• <strong>scrypt</strong> - Memory-hard</li>
                    <li>• <strong>PBKDF2</strong> - NIST approved</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-red-700 text-sm">❌ Never Use:</h6>
                  <ul className="text-red-600 text-xs space-y-1">
                    <li>• MD5, SHA1, SHA256 (too fast)</li>
                    <li>• Plain text storage</li>
                    <li>• Reversible encryption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Secure Password Hashing Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Argon2id Implementation (Recommended)</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const argon2 = require('argon2');

// Hash password on registration
const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16, // 64 MB
      timeCost: 3,         // 3 iterations
      parallelism: 1,      // 1 thread
    });
    return hash;
  } catch (error) {
    throw new Error('Password hashing failed');
  }
};

// Verify password on login
const verifyPassword = async (password, hash) => {
  try {
    return await argon2.verify(hash, password);
  } catch (error) {
    return false;
  }
};

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  
  // Password strength validation
  if (!isPasswordStrong(password)) {
    return res.status(400).json({
      error: 'Password must be at least 12 characters with mixed case, numbers, and symbols'
    });
  }
  
  try {
    const hashedPassword = await hashPassword(password);
    
    const user = new User({
      email,
      password: hashedPassword,
      createdAt: new Date()
    });
    
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = generateJWT(user._id);
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">bcrypt Alternative & Password Policies</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const bcrypt = require('bcrypt');

// bcrypt implementation
const SALT_ROUNDS = 12; // Adjust based on security needs vs performance

const hashPasswordBcrypt = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

const verifyPasswordBcrypt = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Password strength validation
const isPasswordStrong = (password) => {
  const minLength = 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\\d/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return password.length >= minLength && 
         hasUpperCase && 
         hasLowerCase && 
         hasNumbers && 
         hasSymbols;
};

// Check against common passwords
const commonPasswords = require('./common-passwords.json');
const isCommonPassword = (password) => {
  return commonPasswords.includes(password.toLowerCase());
};

// Password change with security checks
app.post('/change-password', authenticateUser, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  
  // Verify current password
  const user = await User.findById(req.user.id);
  const isCurrentValid = await verifyPassword(currentPassword, user.password);
  
  if (!isCurrentValid) {
    return res.status(400).json({ error: 'Current password is incorrect' });
  }
  
  // Validate new password
  if (!isPasswordStrong(newPassword)) {
    return res.status(400).json({ error: 'New password does not meet requirements' });
  }
  
  if (isCommonPassword(newPassword)) {
    return res.status(400).json({ error: 'Password is too common' });
  }
  
  // Check password history (prevent reuse)
  const isReused = user.passwordHistory.some(oldHash => 
    verifyPassword(newPassword, oldHash)
  );
  
  if (isReused) {
    return res.status(400).json({ error: 'Cannot reuse recent passwords' });
  }
  
  // Hash new password
  const hashedNewPassword = await hashPassword(newPassword);
  
  // Update user
  user.password = hashedNewPassword;
  user.passwordHistory.unshift(user.password);
  user.passwordHistory = user.passwordHistory.slice(0, 5); // Keep last 5
  user.passwordChangedAt = new Date();
  
  await user.save();
  
  res.json({ message: 'Password updated successfully' });
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Two-Factor Authentication (2FA)</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">📱 TOTP (Time-based)</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Google Authenticator</li>
              <li>• Authy</li>
              <li>• Microsoft Authenticator</li>
              <li>• 30-second time windows</li>
              <li>• Offline capable</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-blue-700 text-xs mb-2">Benefits:</h5>
              <ul className="text-blue-600 text-xs space-y-1">
                <li>• No network required</li>
                <li>• Standardized (RFC 6238)</li>
                <li>• Wide app support</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">📧 SMS/Email OTP</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Text message codes</li>
              <li>• Email verification</li>
              <li>• Easy user adoption</li>
              <li>• No app required</li>
              <li>• Time-limited codes</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-orange-700 text-xs mb-2">Security Concerns:</h5>
              <ul className="text-orange-600 text-xs space-y-1">
                <li>• SIM swapping attacks</li>
                <li>• Network interception</li>
                <li>• Email compromise</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">🔑 Hardware Keys</h3>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• YubiKey</li>
              <li>• WebAuthn/FIDO2</li>
              <li>• USB/NFC/Bluetooth</li>
              <li>• Phishing resistant</li>
              <li>• Highest security</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-purple-700 text-xs mb-2">Enterprise Features:</h5>
              <ul className="text-purple-600 text-xs space-y-1">
                <li>• Centralized management</li>
                <li>• Compliance ready</li>
                <li>• Backup keys</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">2FA Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">TOTP Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

// Generate 2FA secret for user
app.post('/2fa/setup', authenticateUser, async (req, res) => {
  const user = await User.findById(req.user.id);
  
  if (user.twoFactorEnabled) {
    return res.status(400).json({ error: '2FA already enabled' });
  }
  
  // Generate secret
  const secret = speakeasy.generateSecret({
    issuer: 'YourApp',
    name: \`YourApp (\${user.email})\`,
    length: 32
  });
  
  // Store temporary secret (not activated yet)
  user.twoFactorTempSecret = secret.base32;
  await user.save();
  
  // Generate QR code
  const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url);
  
  res.json({
    secret: secret.base32,
    qrCode: qrCodeUrl,
    manualEntryKey: secret.base32
  });
});

// Verify and activate 2FA
app.post('/2fa/verify-setup', authenticateUser, async (req, res) => {
  const { token } = req.body;
  const user = await User.findById(req.user.id);
  
  if (!user.twoFactorTempSecret) {
    return res.status(400).json({ error: 'No 2FA setup in progress' });
  }
  
  // Verify token
  const verified = speakeasy.totp.verify({
    secret: user.twoFactorTempSecret,
    encoding: 'base32',
    token: token,
    window: 2 // Allow 2 time steps of drift
  });
  
  if (!verified) {
    return res.status(400).json({ error: 'Invalid token' });
  }
  
  // Activate 2FA
  user.twoFactorSecret = user.twoFactorTempSecret;
  user.twoFactorEnabled = true;
  user.twoFactorTempSecret = undefined;
  
  // Generate backup codes
  const backupCodes = generateBackupCodes(10);
  user.backupCodes = backupCodes.map(code => 
    crypto.createHash('sha256').update(code).digest('hex')
  );
  
  await user.save();
  
  res.json({ 
    message: '2FA enabled successfully',
    backupCodes: backupCodes
  });
});

// 2FA login verification
app.post('/2fa/verify', async (req, res) => {
  const { email, password, token, backupCode } = req.body;
  
  const user = await User.findOne({ email });
  if (!user || !await verifyPassword(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  if (!user.twoFactorEnabled) {
    return res.status(400).json({ error: '2FA not enabled' });
  }
  
  let isValid = false;
  
  if (token) {
    // Verify TOTP token
    isValid = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: token,
      window: 2
    });
  } else if (backupCode) {
    // Verify backup code
    const hashedBackupCode = crypto.createHash('sha256')
      .update(backupCode).digest('hex');
    
    const codeIndex = user.backupCodes.indexOf(hashedBackupCode);
    if (codeIndex !== -1) {
      // Remove used backup code
      user.backupCodes.splice(codeIndex, 1);
      await user.save();
      isValid = true;
    }
  }
  
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid 2FA code' });
  }
  
  const jwtToken = generateJWT(user._id);
  res.json({ token: jwtToken, user: { id: user._id, email: user.email } });
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibent text-blue-400 mb-3">SMS OTP Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Generate and send SMS OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits
};

app.post('/sms-otp/send', async (req, res) => {
  const { phoneNumber } = req.body;
  
  // Rate limiting
  const recentOTP = await OTPAttempt.findOne({
    phoneNumber,
    createdAt: { $gte: new Date(Date.now() - 60000) } // 1 minute
  });
  
  if (recentOTP) {
    return res.status(429).json({ error: 'Please wait before requesting another code' });
  }
  
  const otpCode = generateOTP();
  const expiresAt = new Date(Date.now() + 5 * 60000); // 5 minutes
  
  // Store OTP (hashed)
  const hashedOTP = crypto.createHash('sha256').update(otpCode).digest('hex');
  await OTPAttempt.create({
    phoneNumber,
    code: hashedOTP,
    expiresAt,
    attempts: 0
  });
  
  // Send SMS
  try {
    await client.messages.create({
      body: \`Your verification code is: \${otpCode}. Valid for 5 minutes.\`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    });
    
    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('SMS sending failed:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Verify SMS OTP
app.post('/sms-otp/verify', async (req, res) => {
  const { phoneNumber, code } = req.body;
  
  const hashedCode = crypto.createHash('sha256').update(code).digest('hex');
  
  const otpRecord = await OTPAttempt.findOne({
    phoneNumber,
    expiresAt: { $gte: new Date() }
  });
  
  if (!otpRecord) {
    return res.status(400).json({ error: 'OTP expired or not found' });
  }
  
  // Check attempt limit
  if (otpRecord.attempts >= 3) {
    await OTPAttempt.deleteOne({ _id: otpRecord._id });
    return res.status(400).json({ error: 'Too many attempts. Request new code.' });
  }
  
  // Verify code
  if (otpRecord.code !== hashedCode) {
    otpRecord.attempts += 1;
    await otpRecord.save();
    return res.status(400).json({ error: 'Invalid OTP code' });
  }
  
  // Success - remove OTP record
  await OTPAttempt.deleteOne({ _id: otpRecord._id });
  
  res.json({ message: 'OTP verified successfully' });
});

// Backup code generation
const generateBackupCodes = (count = 10) => {
  const codes = [];
  for (let i = 0; i < count; i++) {
    codes.push(crypto.randomBytes(4).toString('hex').toUpperCase());
  }
  return codes;
};

// WebAuthn implementation (basic setup)
const webauthn = require('@webauthn/server');

app.post('/webauthn/register/begin', authenticateUser, async (req, res) => {
  const user = await User.findById(req.user.id);
  
  const registrationOptions = await webauthn.generateRegistrationOptions({
    rpName: 'Your App',
    rpID: 'localhost',
    userID: user._id,
    userName: user.email,
    userDisplayName: user.name || user.email,
    attestationType: 'none',
    excludeCredentials: user.webauthnCredentials?.map(cred => ({
      id: cred.credentialID,
      type: 'public-key',
    })) || [],
  });
  
  user.currentChallenge = registrationOptions.challenge;
  await user.save();
  
  res.json(registrationOptions);
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">JWT Token Security</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-3">JWT Security Best Practices</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">Token Structure Security:</h5>
              <ul className="text-yellow-600 space-y-2 text-sm">
                <li>• Use strong signing algorithms (RS256, ES256)</li>
                <li>• Avoid sensitive data in payload</li>
                <li>• Set appropriate expiration times</li>
                <li>• Include issuer and audience claims</li>
                <li>• Use JTI for token blacklisting</li>
                <li>• Implement proper key rotation</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">Storage & Transmission:</h5>
              <ul className="text-yellow-600 space-y-2 text-sm">
                <li>• HttpOnly cookies for web apps</li>
                <li>• Secure storage in mobile apps</li>
                <li>• Always use HTTPS</li>
                <li>• Implement refresh token rotation</li>
                <li>• Short-lived access tokens</li>
                <li>• Proper logout implementation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Secure JWT Implementation</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">JWT Generation & Validation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const fs = require('fs');

// Load RSA keys for signing
const privateKey = fs.readFileSync('./keys/private.pem', 'utf8');
const publicKey = fs.readFileSync('./keys/public.pem', 'utf8');

// Generate secure tokens
const generateTokens = async (userId) => {
  const jti = crypto.randomUUID(); // Unique token ID
  
  const accessTokenPayload = {
    sub: userId,
    iss: 'your-app.com',
    aud: 'your-app-users',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (15 * 60), // 15 minutes
    jti: jti,
    type: 'access'
  };
  
  const refreshTokenPayload = {
    sub: userId,
    iss: 'your-app.com',
    aud: 'your-app-users',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // 7 days
    jti: crypto.randomUUID(),
    type: 'refresh'
  };
  
  const accessToken = jwt.sign(accessTokenPayload, privateKey, { algorithm: 'RS256' });
  const refreshToken = jwt.sign(refreshTokenPayload, privateKey, { algorithm: 'RS256' });
  
  // Store refresh token in database with user association
  await RefreshToken.create({
    userId,
    tokenId: refreshTokenPayload.jti,
    expiresAt: new Date(refreshTokenPayload.exp * 1000),
    isActive: true
  });
  
  return { accessToken, refreshToken };
};

// Verify JWT middleware
const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  const token = authHeader.substring(7);
  
  try {
    const decoded = jwt.verify(token, publicKey, { 
      algorithms: ['RS256'],
      issuer: 'your-app.com',
      audience: 'your-app-users'
    });
    
    // Check token type
    if (decoded.type !== 'access') {
      return res.status(401).json({ error: 'Invalid token type' });
    }
    
    // Check if token is blacklisted
    const isBlacklisted = await BlacklistedToken.exists({ jti: decoded.jti });
    if (isBlacklisted) {
      return res.status(401).json({ error: 'Token has been revoked' });
    }
    
    // Verify user still exists and is active
    const user = await User.findOne({ _id: decoded.sub, isActive: true });
    if (!user) {
      return res.status(401).json({ error: 'User not found or inactive' });
    }
    
    req.user = user;
    req.tokenJti = decoded.jti;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Refresh token endpoint
app.post('/auth/refresh', async (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token required' });
  }
  
  try {
    const decoded = jwt.verify(refreshToken, publicKey, {
      algorithms: ['RS256'],
      issuer: 'your-app.com',
      audience: 'your-app-users'
    });
    
    if (decoded.type !== 'refresh') {
      return res.status(401).json({ error: 'Invalid token type' });
    }
    
    // Check if refresh token exists and is active
    const storedToken = await RefreshToken.findOne({
      tokenId: decoded.jti,
      userId: decoded.sub,
      isActive: true,
      expiresAt: { $gt: new Date() }
    });
    
    if (!storedToken) {
      return res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
    
    // Rotate refresh token
    storedToken.isActive = false;
    await storedToken.save();
    
    // Generate new token pair
    const tokens = await generateTokens(decoded.sub);
    
    res.json(tokens);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid refresh token' });
  }
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Secure Cookie Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Cookie-based JWT storage (more secure for web apps)
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Authenticate user (with 2FA if enabled)
  const user = await authenticateUser(email, password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const tokens = await generateTokens(user._id);
  
  // Set secure cookies
  res.cookie('accessToken', tokens.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000 // 15 minutes
  });
  
  res.cookie('refreshToken', tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/auth/refresh' // Restrict to refresh endpoint
  });
  
  res.json({ 
    message: 'Login successful',
    user: { id: user._id, email: user.email }
  });
});

// Cookie-based JWT verification
const verifyCookieJWT = async (req, res, next) => {
  const token = req.cookies.accessToken;
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  // Same verification logic as before
  try {
    const decoded = jwt.verify(token, publicKey, { 
      algorithms: ['RS256'],
      issuer: 'your-app.com',
      audience: 'your-app-users'
    });
    
    req.user = await User.findOne({ _id: decoded.sub, isActive: true });
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Logout with proper cleanup
app.post('/auth/logout', verifyJWT, async (req, res) => {
  try {
    // Blacklist current access token
    const expiresAt = new Date(Date.now() + (15 * 60 * 1000)); // Token's remaining time
    await BlacklistedToken.create({
      jti: req.tokenJti,
      expiresAt
    });
    
    // Deactivate all refresh tokens for user
    await RefreshToken.updateMany(
      { userId: req.user._id },
      { isActive: false }
    );
    
    // Clear cookies
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    
    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' });
  }
});

// Key rotation (should be done periodically)
const rotateJWTKeys = async () => {
  // Generate new RSA key pair
  const { publicKey: newPublicKey, privateKey: newPrivateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  });
  
  // Store old key for token verification during transition
  await JWTKey.create({
    publicKey: fs.readFileSync('./keys/public.pem', 'utf8'),
    privateKey: fs.readFileSync('./keys/private.pem', 'utf8'),
    rotatedAt: new Date(),
    isActive: false
  });
  
  // Write new keys
  fs.writeFileSync('./keys/public.pem', newPublicKey);
  fs.writeFileSync('./keys/private.pem', newPrivateKey);
  
  console.log('JWT keys rotated successfully');
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">OAuth 2.0 Security Best Practices</h2>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-indigo-800 mb-3">OAuth 2.0 Flow Security</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3">Authorization Code Flow (Recommended):</h5>
              <ul className="text-indigo-600 space-y-2 text-sm">
                <li>• Use PKCE (Proof Key for Code Exchange)</li>
                <li>• Validate redirect URIs strictly</li>
                <li>• Use state parameter for CSRF protection</li>
                <li>• Short-lived authorization codes</li>
                <li>• Secure client authentication</li>
                <li>• Proper scope validation</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3">Security Considerations:</h5>
              <ul className="text-indigo-600 space-y-2 text-sm">
                <li>• Never expose client secrets in public clients</li>
                <li>• Implement proper token storage</li>
                <li>• Use refresh token rotation</li>
                <li>• Validate all OAuth parameters</li>
                <li>• Implement rate limiting</li>
                <li>• Monitor for suspicious activities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Secure OAuth Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">OAuth Server Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const crypto = require('crypto');
const oauth2Server = require('oauth2-server');

// OAuth client configuration
const clients = [
  {
    id: 'web-client',
    secret: process.env.OAUTH_CLIENT_SECRET, // For confidential clients
    redirectUris: ['https://yourapp.com/callback'],
    grants: ['authorization_code', 'refresh_token'],
    scopes: ['read', 'write', 'profile']
  },
  {
    id: 'mobile-app', // Public client
    redirectUris: ['com.yourapp://oauth/callback'],
    grants: ['authorization_code', 'refresh_token'],
    scopes: ['read', 'write', 'profile'],
    requirePKCE: true
  }
];

// Authorization endpoint with PKCE
app.get('/oauth/authorize', async (req, res) => {
  const {
    client_id,
    redirect_uri,
    response_type,
    scope,
    state,
    code_challenge,
    code_challenge_method
  } = req.query;
  
  // Validate client
  const client = clients.find(c => c.id === client_id);
  if (!client) {
    return res.status(400).json({ error: 'invalid_client' });
  }
  
  // Validate redirect URI
  if (!client.redirectUris.includes(redirect_uri)) {
    return res.status(400).json({ error: 'invalid_redirect_uri' });
  }
  
  // Validate PKCE for public clients
  if (client.requirePKCE && (!code_challenge || code_challenge_method !== 'S256')) {
    return res.status(400).json({ error: 'code_challenge_required' });
  }
  
  // Store authorization request
  const authCode = crypto.randomBytes(32).toString('hex');
  await AuthorizationCode.create({
    code: authCode,
    clientId: client_id,
    userId: req.user.id, // Assumes user is authenticated
    redirectUri: redirect_uri,
    scope: scope,
    codeChallenge: code_challenge,
    codeChallengeMethod: code_challenge_method,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
  });
  
  // Redirect back to client with authorization code
  const redirectUrl = new URL(redirect_uri);
  redirectUrl.searchParams.set('code', authCode);
  redirectUrl.searchParams.set('state', state);
  
  res.redirect(redirectUrl.toString());
});

// Token endpoint
app.post('/oauth/token', async (req, res) => {
  const {
    grant_type,
    code,
    redirect_uri,
    client_id,
    client_secret,
    code_verifier,
    refresh_token
  } = req.body;
  
  if (grant_type === 'authorization_code') {
    // Validate authorization code
    const authCode = await AuthorizationCode.findOne({
      code: code,
      expiresAt: { $gt: new Date() },
      used: false
    });
    
    if (!authCode) {
      return res.status(400).json({ error: 'invalid_grant' });
    }
    
    // Validate client
    const client = clients.find(c => c.id === authCode.clientId);
    if (client.secret && client.secret !== client_secret) {
      return res.status(400).json({ error: 'invalid_client' });
    }
    
    // Validate PKCE
    if (authCode.codeChallenge) {
      const computedChallenge = crypto
        .createHash('sha256')
        .update(code_verifier)
        .digest('base64url');
        
      if (computedChallenge !== authCode.codeChallenge) {
        return res.status(400).json({ error: 'invalid_grant' });
      }
    }
    
    // Mark code as used
    authCode.used = true;
    await authCode.save();
    
    // Generate tokens
    const tokens = await generateOAuthTokens(authCode.userId, authCode.scope);
    
    res.json({
      access_token: tokens.accessToken,
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: tokens.refreshToken,
      scope: authCode.scope
    });
  }
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">OAuth Client Integration</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Frontend OAuth client (with PKCE)
class OAuth2Client {
  constructor(clientId, redirectUri, baseUrl) {
    this.clientId = clientId;
    this.redirectUri = redirectUri;
    this.baseUrl = baseUrl;
  }
  
  // Generate PKCE parameters
  generatePKCE() {
    const codeVerifier = crypto.randomBytes(32).toString('base64url');
    const codeChallenge = crypto
      .createHash('sha256')
      .update(codeVerifier)
      .digest('base64url');
    
    return {
      codeVerifier,
      codeChallenge,
      codeChallengeMethod: 'S256'
    };
  }
  
  // Initiate OAuth flow
  authorize(scopes = ['read']) {
    const pkce = this.generatePKCE();
    const state = crypto.randomBytes(16).toString('hex');
    
    // Store PKCE verifier and state
    sessionStorage.setItem('oauth_code_verifier', pkce.codeVerifier);
    sessionStorage.setItem('oauth_state', state);
    
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: scopes.join(' '),
      state: state,
      code_challenge: pkce.codeChallenge,
      code_challenge_method: pkce.codeChallengeMethod
    });
    
    window.location.href = \`\${this.baseUrl}/oauth/authorize?\${params}\`;
  }
  
  // Handle callback
  async handleCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    
    if (error) {
      throw new Error(\`OAuth error: \${error}\`);
    }
    
    // Validate state
    const storedState = sessionStorage.getItem('oauth_state');
    if (state !== storedState) {
      throw new Error('Invalid state parameter');
    }
    
    const codeVerifier = sessionStorage.getItem('oauth_code_verifier');
    
    // Exchange code for tokens
    const response = await fetch(\`\${this.baseUrl}/oauth/token\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: this.redirectUri,
        client_id: this.clientId,
        code_verifier: codeVerifier
      })
    });
    
    if (!response.ok) {
      throw new Error('Token exchange failed');
    }
    
    const tokens = await response.json();
    
    // Store tokens securely
    this.storeTokens(tokens);
    
    // Clean up
    sessionStorage.removeItem('oauth_code_verifier');
    sessionStorage.removeItem('oauth_state');
    
    return tokens;
  }
  
  // Secure token storage
  storeTokens(tokens) {
    // For web apps, consider using httpOnly cookies
    // For mobile apps, use secure keychain/keystore
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
    localStorage.setItem('token_expires_at', 
      Date.now() + (tokens.expires_in * 1000));
  }
  
  // Refresh tokens
  async refreshToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    
    const response = await fetch(\`\${this.baseUrl}/oauth/token\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: this.clientId
      })
    });
    
    const tokens = await response.json();
    this.storeTokens(tokens);
    
    return tokens;
  }
}

// Usage
const oauthClient = new OAuth2Client(
  'web-client',
  'https://yourapp.com/callback',
  'https://auth.yourapp.com'
);

// Initiate OAuth flow
document.getElementById('login-btn').addEventListener('click', () => {
  oauthClient.authorize(['read', 'write', 'profile']);
});

// Handle callback page
if (window.location.pathname === '/callback') {
  oauthClient.handleCallback()
    .then(tokens => {
      console.log('Authentication successful');
      window.location.href = '/dashboard';
    })
    .catch(error => {
      console.error('Authentication failed:', error);
    });
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-800 font-semibold mb-2">🔐 Authentication Security Checklist</h3>
        <p className="text-blue-700 mb-3">
          Implement these security measures to create a robust authentication system that protects against modern threats.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-blue-700">Password Security:</strong>
            <ul className="text-blue-600 mt-1 space-y-1">
              <li>• Strong hashing (Argon2id/bcrypt)</li>
              <li>• Password complexity requirements</li>
              <li>• Breach detection</li>
              <li>• History prevention</li>
            </ul>
          </div>
          <div>
            <strong className="text-blue-700">Multi-Factor Auth:</strong>
            <ul className="text-blue-600 mt-1 space-y-1">
              <li>• TOTP implementation</li>
              <li>• Backup codes</li>
              <li>• WebAuthn support</li>
              <li>• Recovery procedures</li>
            </ul>
          </div>
          <div>
            <strong className="text-blue-700">Token Management:</strong>
            <ul className="text-blue-600 mt-1 space-y-1">
              <li>• Short-lived access tokens</li>
              <li>• Refresh token rotation</li>
              <li>• Secure storage</li>
              <li>• Proper logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}