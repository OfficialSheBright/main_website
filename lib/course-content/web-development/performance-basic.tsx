export default function PerformanceBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">7.1 Performance Basics</h1>
      
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
        <h3 className="text-amber-800 font-semibold mb-3">Web Performance Fundamentals</h3>
        <ul className="text-amber-700 space-y-2">
          <li>• Master Core Web Vitals for better user experience</li>
          <li>• Use PageSpeed Insights for performance analysis</li>
          <li>• Understand browser rendering lifecycle optimization</li>
          <li>• Implement performance monitoring and measurement</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Web Vitals</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">The Three Core Web Vitals</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-semibold text-blue-700 mb-2">LCP - Largest Contentful Paint</h5>
              <p className="text-blue-600 text-sm mb-2">Loading Performance</p>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Good: ≤ 2.5 seconds</li>
                <li>• Needs improvement: 2.5-4s</li>
                <li>• Poor: {'>'} 4 seconds</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-semibold text-green-700 mb-2">FID - First Input Delay</h5>
              <p className="text-green-600 text-sm mb-2">Interactivity</p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Good: ≤ 100 ms</li>
                <li>• Needs improvement: 100-300ms</li>
                <li>• Poor: {'>'}300 ms</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-semibold text-purple-700 mb-2">CLS - Cumulative Layout Shift</h5>
              <p className="text-purple-600 text-sm mb-2">Visual Stability</p>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• Good: ≤ 0.1</li>
                <li>• Needs improvement: 0.1-0.25</li>
                <li>• Poor:{'>'} 0.25</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Measuring Core Web Vitals</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Web Vitals Library Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Install web-vitals library
npm install web-vitals

// Core Web Vitals measurement
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Analytics function to send data
function sendToAnalytics(metric) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Custom analytics endpoint
  fetch('/api/analytics/web-vitals', {
    method: 'POST',
    body: JSON.stringify(metric),
    headers: { 'Content-Type': 'application/json' },
    keepalive: true
  }).catch(console.error);

  console.log(\`\${metric.name}: \${metric.value}\`, metric);
}

// Measure all Core Web Vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

// React Hook for Web Vitals
import { useEffect } from 'react';

export function useWebVitals() {
  useEffect(() => {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });
  }, []);
}

// Usage in Next.js _app.js
import { useWebVitals } from '../hooks/useWebVitals';

function MyApp({ Component, pageProps }) {
  useWebVitals();
  
  return <Component {...pageProps} />;
}

export default MyApp;`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Performance Observer API</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Advanced Performance Monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.setupObservers();
  }

  setupObservers() {
    // LCP Observer
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID Observer (using First Input Delay polyfill)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'first-input') {
          this.metrics.fid = entry.processingStart - entry.startTime;
          console.log('FID:', this.metrics.fid);
        }
      }
    }).observe({ entryTypes: ['first-input'] });

    // CLS Observer
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.cls = clsValue;
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // Navigation Timing
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const navigationEntry = entry as PerformanceNavigationTiming;
        this.metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        this.metrics.domContentLoaded = navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart;
        this.metrics.loadComplete = navigationEntry.loadEventEnd - navigationEntry.navigationStart;
        
        console.log('Navigation metrics:', {
          ttfb: this.metrics.ttfb,
          domContentLoaded: this.metrics.domContentLoaded,
          loadComplete: this.metrics.loadComplete
        });
      }
    }).observe({ entryTypes: ['navigation'] });

    // Resource Timing
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.duration > 1000) { // Flag slow resources
          console.warn('Slow resource:', entry.name, entry.duration + 'ms');
        }
      }
    }).observe({ entryTypes: ['resource'] });
  }

  getMetrics() {
    return this.metrics;
  }

  // Generate performance report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection?.effectiveType || 'unknown',
      metrics: this.metrics,
      recommendations: this.getRecommendations()
    };

    return report;
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint: Consider image optimization, preloading critical resources');
    }
    
    if (this.metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay: Minimize JavaScript execution time, use code splitting');
    }
    
    if (this.metrics.cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift: Set image dimensions, avoid inserting content above existing content');
    }

    return recommendations;
  }
}

// Initialize performance monitoring
const performanceMonitor = new PerformanceMonitor();

// Export metrics after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    const report = performanceMonitor.generateReport();
    console.table(report.metrics);
  }, 5000); // Wait 5 seconds for metrics to stabilize
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h4 className="font-semibold text-orange-800 mb-3">Improving Core Web Vitals</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-semibold text-orange-700 mb-2">Optimize LCP:</h5>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• Optimize server response times</li>
                <li>• Use efficient image formats (WebP, AVIF)</li>
                <li>• Preload important resources</li>
                <li>• Remove render-blocking resources</li>
                <li>• Use CDN for faster delivery</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-700 mb-2">Reduce FID:</h5>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Split large JavaScript bundles</li>
                <li>• Remove unused JavaScript</li>
                <li>• Use web workers for heavy tasks</li>
                <li>• Optimize third-party scripts</li>
                <li>• Defer non-essential JavaScript</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-purple-700 mb-2">Minimize CLS:</h5>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• Set size attributes for media</li>
                <li>• Reserve space for ads/embeds</li>
                <li>• Avoid inserting content dynamically</li>
                <li>• Use CSS aspect-ratio property</li>
                <li>• Preload fonts to prevent FOIT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">PageSpeed Insights</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">PageSpeed Insights API Integration</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// PageSpeed Insights API Integration
class PageSpeedAnalyzer {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  }

  async analyzeUrl(url, strategy = 'mobile') {
    const params = new URLSearchParams({
      url: url,
      key: this.apiKey,
      strategy: strategy, // 'mobile' or 'desktop'
      category: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'].join(',')
    });

    try {
      const response = await fetch(\`\${this.baseUrl}?\${params}\`);
      const data = await response.json();
      
      return this.parseResults(data);
    } catch (error) {
      console.error('PageSpeed analysis failed:', error);
      throw error;
    }
  }

  parseResults(data) {
    const lighthouse = data.lighthouseResult;
    const categories = lighthouse.categories;
    const audits = lighthouse.audits;

    return {
      url: data.id,
      strategy: data.lighthouseResult.configSettings.emulatedFormFactor,
      scores: {
        performance: Math.round(categories.performance.score * 100),
        accessibility: Math.round(categories.accessibility.score * 100),
        bestPractices: Math.round(categories['best-practices'].score * 100),
        seo: Math.round(categories.seo.score * 100),
        pwa: categories.pwa ? Math.round(categories.pwa.score * 100) : null
      },
      metrics: {
        firstContentfulPaint: audits['first-contentful-paint'].displayValue,
        largestContentfulPaint: audits['largest-contentful-paint'].displayValue,
        firstInputDelay: audits['first-input-delay']?.displayValue || 'N/A',
        cumulativeLayoutShift: audits['cumulative-layout-shift'].displayValue,
        speedIndex: audits['speed-index'].displayValue,
        timeToInteractive: audits['interactive'].displayValue,
        totalBlockingTime: audits['total-blocking-time'].displayValue
      },
      opportunities: this.extractOpportunities(audits),
      diagnostics: this.extractDiagnostics(audits)
    };
  }

  extractOpportunities(audits) {
    const opportunityAudits = [
      'render-blocking-resources',
      'unused-css-rules',
      'unused-javascript',
      'modern-image-formats',
      'uses-optimized-images',
      'efficient-animated-content',
      'duplicated-javascript',
      'legacy-javascript'
    ];

    return opportunityAudits
      .filter(auditId => audits[auditId] && audits[auditId].score < 1)
      .map(auditId => ({
        audit: auditId,
        title: audits[auditId].title,
        description: audits[auditId].description,
        savings: audits[auditId].details?.overallSavingsMs || 0,
        score: audits[auditId].score
      }))
      .sort((a, b) => b.savings - a.savings);
  }

  extractDiagnostics(audits) {
    const diagnosticAudits = [
      'mainthread-work-breakdown',
      'bootup-time',
      'uses-long-cache-ttl',
      'font-display',
      'third-party-summary',
      'largest-contentful-paint-element',
      'layout-shift-elements'
    ];

    return diagnosticAudits
      .filter(auditId => audits[auditId])
      .map(auditId => ({
        audit: auditId,
        title: audits[auditId].title,
        description: audits[auditId].description,
        score: audits[auditId].score,
        details: audits[auditId].details
      }));
  }

  // Automated monitoring
  async monitorPages(urls, interval = 24 * 60 * 60 * 1000) { // Daily by default
    const results = [];
    
    for (const url of urls) {
      try {
        const mobileResult = await this.analyzeUrl(url, 'mobile');
        const desktopResult = await this.analyzeUrl(url, 'desktop');
        
        results.push({
          url,
          mobile: mobileResult,
          desktop: desktopResult,
          timestamp: new Date().toISOString()
        });

        // Rate limiting - wait between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(\`Failed to analyze \${url}:\`, error);
      }
    }

    return results;
  }
}

// Usage example
const analyzer = new PageSpeedAnalyzer('YOUR_API_KEY');

// Analyze single URL
analyzer.analyzeUrl('https://example.com')
  .then(results => {
    console.log('Performance Score:', results.scores.performance);
    console.log('Core Web Vitals:', {
      LCP: results.metrics.largestContentfulPaint,
      FID: results.metrics.firstInputDelay,
      CLS: results.metrics.cumulativeLayoutShift
    });
    
    if (results.opportunities.length > 0) {
      console.log('Top opportunities:');
      results.opportunities.slice(0, 3).forEach(opp => {
        console.log(\`- \${opp.title}: \${opp.savings}ms savings\`);
      });
    }
  });

// React component for performance dashboard
function PerformanceDashboard() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeCurrentPage = async () => {
    setLoading(true);
    try {
      const result = await analyzer.analyzeUrl(window.location.href);
      setResults(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!results) {
    return (
      <button onClick={analyzeCurrentPage} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze Page Performance'}
      </button>
    );
  }

  return (
    <div className="performance-dashboard">
      <h3>Performance Scores</h3>
      <div className="scores">
        <div className={\`score \${results.scores.performance >= 90 ? 'good' : results.scores.performance >= 50 ? 'average' : 'poor'}\`}>
          Performance: {results.scores.performance}
        </div>
        {/* More score displays */}
      </div>
      
      <h3>Core Web Vitals</h3>
      <div className="vitals">
        <div>LCP: {results.metrics.largestContentfulPaint}</div>
        <div>FID: {results.metrics.firstInputDelay}</div>
        <div>CLS: {results.metrics.cumulativeLayoutShift}</div>
      </div>
      
      <h3>Opportunities</h3>
      <ul>
        {results.opportunities.map(opp => (
          <li key={opp.audit}>
            {opp.title} - {opp.savings}ms potential savings
          </li>
        ))}
      </ul>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-3">Performance Budget Implementation</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Performance Budget Configuration
const performanceBudgets = {
  // Size budgets (in KB)
  resourceSizes: {
    javascript: 300,
    css: 100,
    images: 1000,
    fonts: 100,
    total: 2000
  },
  
  // Timing budgets (in ms)
  timingBudgets: {
    firstContentfulPaint: 1500,
    largestContentfulPaint: 2500,
    firstInputDelay: 100,
    speedIndex: 3000,
    timeToInteractive: 3000
  },
  
  // Core Web Vitals thresholds
  coreWebVitals: {
    lcp: 2500,      // ms
    fid: 100,       // ms
    cls: 0.1        // score
  },
  
  // Performance scores (0-100)
  lightHouseScores: {
    performance: 90,
    accessibility: 95,
    bestPractices: 90,
    seo: 90
  }
};

// Budget enforcement
class PerformanceBudgetEnforcer {
  constructor(budgets) {
    this.budgets = budgets;
  }

  async checkBudgets(url) {
    const results = await analyzer.analyzeUrl(url);
    const violations = [];

    // Check Lighthouse scores
    Object.entries(this.budgets.lightHouseScores).forEach(([metric, threshold]) => {
      const score = results.scores[metric];
      if (score < threshold) {
        violations.push({
          type: 'lighthouse-score',
          metric,
          actual: score,
          threshold,
          severity: score < threshold * 0.8 ? 'high' : 'medium'
        });
      }
    });

    // Check Core Web Vitals
    const vitals = {
      lcp: parseFloat(results.metrics.largestContentfulPaint),
      fid: parseFloat(results.metrics.firstInputDelay) || 0,
      cls: parseFloat(results.metrics.cumulativeLayoutShift)
    };

    Object.entries(this.budgets.coreWebVitals).forEach(([metric, threshold]) => {
      if (vitals[metric] > threshold) {
        violations.push({
          type: 'core-web-vital',
          metric: metric.toUpperCase(),
          actual: vitals[metric],
          threshold,
          severity: 'high'
        });
      }
    });

    return {
      passed: violations.length === 0,
      violations,
      results
    };
  }

  generateReport(budgetCheck) {
    const { passed, violations, results } = budgetCheck;
    
    const report = {
      url: results.url,
      timestamp: new Date().toISOString(),
      passed,
      summary: {
        totalViolations: violations.length,
        highSeverity: violations.filter(v => v.severity === 'high').length,
        mediumSeverity: violations.filter(v => v.severity === 'medium').length
      },
      violations,
      scores: results.scores,
      metrics: results.metrics
    };

    return report;
  }
}

// CI/CD Integration
const budgetEnforcer = new PerformanceBudgetEnforcer(performanceBudgets);

// Usage in GitHub Actions or CI pipeline
async function validatePerformance() {
  const stagingUrl = process.env.STAGING_URL || 'http://localhost:3000';
  
  try {
    const budgetCheck = await budgetEnforcer.checkBudgets(stagingUrl);
    const report = budgetEnforcer.generateReport(budgetCheck);
    
    console.log('Performance Budget Report:');
    console.log(\`✅ Passed: \${report.passed}\`);
    console.log(\`📊 Violations: \${report.summary.totalViolations}\`);
    
    if (report.violations.length > 0) {
      console.log('\\n❌ Budget Violations:');
      report.violations.forEach(violation => {
        console.log(\`\${violation.severity.toUpperCase()}: \${violation.metric} - \${violation.actual} (threshold: \${violation.threshold})\`);
      });
    }

    // Fail CI if there are high severity violations
    const highSeverityCount = report.summary.highSeverity;
    if (highSeverityCount > 0) {
      console.error(\`\\n💥 \${highSeverityCount} high severity violations found. Build failed.\`);
      process.exit(1);
    }

    // Save report
    require('fs').writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
    
  } catch (error) {
    console.error('Performance validation failed:', error);
    process.exit(1);
  }
}

// Run validation
if (require.main === module) {
  validatePerformance();
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Rendering Lifecycle</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-purple-800 mb-3">Browser Rendering Pipeline</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h5 className="font-semibold text-purple-700 mb-2">1. Parse HTML → DOM</h5>
              <p className="text-purple-600 text-sm">Browser parses HTML and creates DOM tree</p>
              <ul className="text-purple-600 text-xs mt-1 space-y-1">
                <li>• Tokenization of HTML</li>
                <li>• Tree construction</li>
                <li>• Script execution blocks parsing</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-semibold text-blue-700 mb-2">2. Parse CSS → CSSOM</h5>
              <p className="text-blue-600 text-sm">CSS is parsed into CSS Object Model</p>
              <ul className="text-blue-600 text-xs mt-1 space-y-1">
                <li>• CSS parsing is render-blocking</li>
                <li>• Cascade and inheritance applied</li>
                <li>• Media queries evaluated</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="font-semibold text-green-700 mb-2">3. Combine → Render Tree</h5>
              <p className="text-green-600 text-sm">DOM + CSSOM = Render Tree</p>
              <ul className="text-green-600 text-xs mt-1 space-y-1">
                <li>• Only visible elements included</li>
                <li>• display: none elements excluded</li>
                <li>• visibility: hidden included but transparent</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <h5 className="font-semibold text-orange-700 mb-2">4. Layout (Reflow)</h5>
              <p className="text-orange-600 text-sm">Calculate position and size of elements</p>
              <ul className="text-orange-600 text-xs mt-1 space-y-1">
                <li>• Box model calculations</li>
                <li>• Positioning context</li>
                <li>• Flow and flexbox layout</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h5 className="font-semibold text-red-700 mb-2">5. Paint</h5>
              <p className="text-red-600 text-sm">Fill pixels with visual properties</p>
              <ul className="text-red-600 text-xs mt-1 space-y-1">
                <li>• Colors, images, borders, shadows</li>
                <li>• Paint layers created</li>
                <li>• Expensive operations identified</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
              <h5 className="font-semibold text-indigo-700 mb-2">6. Composite</h5>
              <p className="text-indigo-600 text-sm">Combine layers and send to GPU</p>
              <ul className="text-indigo-600 text-xs mt-1 space-y-1">
                <li>• Layer composition</li>
                <li>• GPU acceleration</li>
                <li>• Final frame rendering</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Optimizing the Rendering Pipeline</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-3">Critical Rendering Path Optimization</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// 1. Minimize Critical Resources
// Inline critical CSS
<style>
  /* Critical above-the-fold styles */
  .header { background: #333; color: white; }
  .hero { height: 400px; background: url('hero.jpg'); }
</style>

// Preload key resources
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

// 2. Defer Non-Critical CSS
<link rel="preload" href="/css/non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/css/non-critical.css"></noscript>

// 3. Optimize JavaScript Loading
// Defer non-critical scripts
<script src="/js/analytics.js" defer></script>

// Async for independent scripts
<script src="/js/social-widgets.js" async></script>

// Module scripts (automatically deferred)
<script type="module" src="/js/app.js"></script>

// 4. Critical CSS extraction
const critical = require('critical');

critical.generate({
  inline: true,
  base: 'dist/',
  src: 'index.html',
  dest: 'index-critical.html',
  width: 1300,
  height: 900,
  minify: true
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-cyan-400 mb-3">Preventing Reflows & Repaints</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Avoid layout thrashing
// ❌ Bad - causes multiple reflows
element.style.left = element.offsetLeft + 10 + 'px';
element.style.top = element.offsetTop + 10 + 'px';
element.style.width = element.offsetWidth + 10 + 'px';

// ✅ Good - batch DOM reads and writes
const rect = element.getBoundingClientRect();
element.style.cssText = \`
  left: \${rect.left + 10}px;
  top: \${rect.top + 10}px;
  width: \${rect.width + 10}px;
\`;

// Use transforms for animations (composited)
// ❌ Bad - triggers layout
.animate {
  transition: left 0.3s ease;
}
.animate.moved {
  left: 100px;
}

// ✅ Good - only triggers composite
.animate {
  transition: transform 0.3s ease;
}
.animate.moved {
  transform: translateX(100px);
}

// Optimize frequent DOM changes
class DOMBatcher {
  constructor() {
    this.reads = [];
    this.writes = [];
    this.scheduled = false;
  }

  read(fn) {
    this.reads.push(fn);
    this.schedule();
  }

  write(fn) {
    this.writes.push(fn);
    this.schedule();
  }

  schedule() {
    if (this.scheduled) return;
    this.scheduled = true;
    
    requestAnimationFrame(() => {
      // Execute all reads first
      this.reads.forEach(fn => fn());
      // Then all writes
      this.writes.forEach(fn => fn());
      
      this.reads = [];
      this.writes = [];
      this.scheduled = false;
    });
  }
}

const batcher = new DOMBatcher();

// Usage
batcher.read(() => {
  const height = element.offsetHeight;
});

batcher.write(() => {
  element.style.height = '200px';
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-amber-800 font-semibold mb-2">🚀 Next: Frontend Optimization</h3>
        <p className="text-amber-700 mb-3">
          Learn advanced frontend optimization techniques including code splitting, lazy loading, and image optimization.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-amber-700">Code Optimization:</strong>
            <ul className="text-amber-600 mt-1 space-y-1">
              <li>• Bundle splitting strategies</li>
              <li>• Tree shaking</li>
              <li>• Minification techniques</li>
            </ul>
          </div>
          <div>
            <strong className="text-amber-700">Asset Optimization:</strong>
            <ul className="text-amber-600 mt-1 space-y-1">
              <li>• Modern image formats</li>
              <li>• Lazy loading patterns</li>
              <li>• CDN optimization</li>
            </ul>
          </div>
          <div>
            <strong className="text-amber-700">Caching Strategies:</strong>
            <ul className="text-amber-600 mt-1 space-y-1">
              <li>• Browser caching</li>
              <li>• Service worker caching</li>
              <li>• Cache invalidation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}