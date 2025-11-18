export default function HTMLSemanticMarkupContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">2.1 HTML & Semantic Markup</h1>
      
      {/* Learning Objectives */}
      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">What You&apos;ll Master</h3>
        <ul className="text-green-700 space-y-2">
          <li>• HTML5 semantic elements and proper document structure</li>
          <li>• Advanced forms with validation and accessibility</li>
          <li>• Media embedding (images, videos, audio)</li>
          <li>• Web accessibility (A11y) fundamentals</li>
          <li>• SEO-friendly markup practices</li>
        </ul>
      </div>

      {/* HTML Structure Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">HTML5 Document Structure</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Complete HTML5 Template</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description for SEO">
  <meta name="keywords" content="html, semantic, web development">
  <title>Page Title - Website Name</title>
  
  <!-- Open Graph for social media -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Page description">
  <meta property="og:image" content="image-url.jpg">
  
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
</head>
<body>
  <header>
    <nav><!-- Navigation content --></nav>
  </header>
  
  <main>
    <article><!-- Main content --></article>
  </main>
  
  <aside><!-- Sidebar content --></aside>
  <footer><!-- Footer content --></footer>
  
  <script src="script.js"></script>
</body>
</html>`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Semantic Elements</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-blue-700 mb-1">&lt;header&gt;</h5>
                <p className="text-sm text-blue-600">Introductory content, logos, navigation</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-blue-700 mb-1">&lt;nav&gt;</h5>
                <p className="text-sm text-blue-600">Navigation links and menus</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-blue-700 mb-1">&lt;main&gt;</h5>
                <p className="text-sm text-blue-600">Primary content of the page</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-blue-700 mb-1">&lt;article&gt;</h5>
                <p className="text-sm text-blue-600">Self-contained content</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">Content Elements</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-purple-700 mb-1">&lt;section&gt;</h5>
                <p className="text-sm text-purple-600">Thematic grouping of content</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-purple-700 mb-1">&lt;aside&gt;</h5>
                <p className="text-sm text-purple-600">Sidebar or tangential content</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-purple-700 mb-1">&lt;figure&gt;</h5>
                <p className="text-sm text-purple-600">Images with captions</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-purple-700 mb-1">&lt;footer&gt;</h5>
                <p className="text-sm text-purple-600">Closing content, copyright</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Forms & Validation</h2>
        
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern Form Example</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`<form action="/submit" method="POST" novalidate>
  <fieldset>
    <legend>Personal Information</legend>
    
    <!-- Text Input with Validation -->
    <div class="form-group">
      <label for="email">Email Address *</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required 
        aria-describedby="email-error"
        placeholder="john@example.com"
      >
      <span id="email-error" class="error" role="alert"></span>
    </div>
    
    <!-- Password with Pattern -->
    <div class="form-group">
      <label for="password">Password *</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        required 
        minlength="8"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
        aria-describedby="password-help"
      >
      <small id="password-help">
        Must be 8+ characters with uppercase, lowercase, number & symbol
      </small>
    </div>
    
    <!-- Select Dropdown -->
    <div class="form-group">
      <label for="country">Country</label>
      <select id="country" name="country" required>
        <option value="">Choose a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="in">India</option>
      </select>
    </div>
    
    <!-- Radio Buttons -->
    <fieldset class="form-group">
      <legend>Gender</legend>
      <label><input type="radio" name="gender" value="male"> Male</label>
      <label><input type="radio" name="gender" value="female"> Female</label>
      <label><input type="radio" name="gender" value="other"> Other</label>
    </fieldset>
    
    <!-- Checkboxes -->
    <div class="form-group">
      <label>
        <input type="checkbox" name="newsletter" value="yes">
        Subscribe to newsletter
      </label>
    </div>
    
    <!-- File Upload -->
    <div class="form-group">
      <label for="avatar">Profile Picture</label>
      <input 
        type="file" 
        id="avatar" 
        name="avatar" 
        accept="image/*"
        aria-describedby="file-help"
      >
      <small id="file-help">Max 2MB, JPG/PNG only</small>
    </div>
    
  </fieldset>
  
  <button type="submit">Create Account</button>
  <button type="reset">Clear Form</button>
</form>`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-800 mb-2">Input Types</h4>
            <ul className="text-sm text-orange-600 space-y-1">
              <li>• email, tel, url</li>
              <li>• number, range</li>
              <li>• date, time, datetime-local</li>
              <li>• color, file</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Validation Attributes</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• required</li>
              <li>• pattern</li>
              <li>• min, max, step</li>
              <li>• minlength, maxlength</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Accessibility</h4>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• aria-describedby</li>
              <li>• role=&quot;alert&quot;</li>
              <li>• fieldset & legend</li>
              <li>• proper labels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Media & Accessibility */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Media & Accessibility</h2>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Responsive Images</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`<!-- Responsive image with srcset -->
<picture>
  <source 
    media="(min-width: 768px)" 
    srcset="hero-large.webp 1200w, hero-large.jpg 1200w"
  >
  <source 
    media="(min-width: 480px)" 
    srcset="hero-medium.webp 768w, hero-medium.jpg 768w"
  >
  <img 
    src="hero-small.jpg" 
    srcset="hero-small.webp 480w, hero-small.jpg 480w"
    alt="Team collaborating on web development project"
    loading="lazy"
    width="1200" 
    height="600"
  >
</picture>

<!-- Figure with caption -->
<figure>
  <img src="chart.jpg" alt="Sales growth chart showing 25% increase">
  <figcaption>
    Sales increased by 25% in Q4 2024 compared to previous quarter
  </figcaption>
</figure>`}</code>
            </pre>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">Image Best Practices</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Always include descriptive alt text</li>
              <li>• Use loading=&quot;lazy&quot; for performance</li>
              <li>• Specify width/height to prevent layout shift</li>
              <li>• Use WebP format with JPG fallback</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practical Exercise */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🏗️ Build Project: Personal Portfolio Landing Page</h3>
        <div className="bg-white p-4 rounded border mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Your Challenge:</h4>
          <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
            <li>Create a semantic HTML structure for a portfolio page</li>
            <li>Include a contact form with proper validation</li>
            <li>Add responsive images with proper alt text</li>
            <li>Implement proper heading hierarchy (h1-h6)</li>
            <li>Use ARIA attributes for accessibility</li>
            <li>Test with screen readers and validation tools</li>
          </ol>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded">
          <p className="text-blue-800 text-sm">
            <strong>🎯 Success Criteria:</strong> Your page should pass HTML validation, 
            be accessible to screen readers, and use semantic elements appropriately.
          </p>
        </div>
      </div>
    </div>
  );
}