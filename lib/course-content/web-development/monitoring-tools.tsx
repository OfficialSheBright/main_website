export default function MonitoringToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">7.4 Monitoring Tools</h1>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">Performance Monitoring & Analysis</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Master Google Lighthouse for comprehensive performance audits</li>
          <li>• Use WebPageTest for detailed performance analysis across devices</li>
          <li>• Leverage Google Analytics for real-user performance monitoring</li>
          <li>• Implement continuous monitoring and alerting systems</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Google Lighthouse</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Lighthouse CI/CD Integration</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                <code>{`// lighthouse-ci.json - Advanced configuration
{
  "ci": {
    "collect": {
      "numberOfRuns": 5,
      "settings": {
        "preset": "desktop",
        "chromeFlags": "--no-sandbox --headless --disable-gpu",
        "throttling": {
          "rttMs": 40,
          "throughputKbps": 10240,
          "cpuSlowdownMultiplier": 1
        },
        "emulatedFormFactor": "desktop",
        "locale": "en-US"
      },
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/products",
        "http://localhost:3000/checkout"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.8}],
        "categories:pwa": ["error", {"minScore": 0.7}],
        
        // Core Web Vitals
        "largest-contentful-paint": ["error", {"maxNumericValue": 2500}],
        "first-contentful-paint": ["error", {"maxNumericValue": 1800}],
        "cumulative-layout-shift": ["error", {"maxNumericValue": 0.1}],
        "total-blocking-time": ["error", {"maxNumericValue": 200}],
        
        // Additional metrics
        "speed-index": ["warn", {"maxNumericValue": 3000}],
        "interactive": ["warn", {"maxNumericValue": 3800}],
        "first-meaningful-paint": ["warn", {"maxNumericValue": 2000}]
      }
    },
    "upload": {
      "target": "lhci",
      "serverBaseUrl": "https://your-lhci-server.com",
      "token": "your-build-token"
    }
  }
}

// Custom Lighthouse automation script
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs').promises;

class LighthouseRunner {
  constructor(options = {}) {
    this.options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: null,
      port: options.port || null,
      ...options
    };
    this.results = [];
  }

  async runAudit(url, config = {}) {
    const chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
    });

    const options = {
      ...this.options,
      port: chrome.port,
      ...config
    };

    try {
      const runnerResult = await lighthouse(url, options);
      
      // Extract key metrics
      const metrics = this.extractMetrics(runnerResult.report);
      
      // Store results
      this.results.push({
        url,
        timestamp: new Date().toISOString(),
        metrics,
        fullReport: runnerResult.report
      });

      return metrics;
    } finally {
      await chrome.kill();
    }
  }

  extractMetrics(report) {
    const audits = report.audits;
    const categories = report.categories;

    return {
      // Performance score
      performanceScore: Math.round(categories.performance.score * 100),
      
      // Core Web Vitals
      lcp: audits['largest-contentful-paint'].numericValue,
      fid: audits['max-potential-fid']?.numericValue || 0,
      cls: audits['cumulative-layout-shift'].numericValue,
      
      // Other key metrics
      fcp: audits['first-contentful-paint'].numericValue,
      si: audits['speed-index'].numericValue,
      tbt: audits['total-blocking-time'].numericValue,
      tti: audits['interactive'].numericValue,
      
      // Resource metrics
      totalByteWeight: audits['total-byte-weight'].numericValue,
      unusedJavaScript: audits['unused-javascript']?.details?.overallSavingsBytes || 0,
      unusedCSS: audits['unused-css-rules']?.details?.overallSavingsBytes || 0,
      
      // Accessibility & SEO scores
      accessibilityScore: Math.round(categories.accessibility.score * 100),
      seoScore: Math.round(categories.seo.score * 100),
      
      // PWA score
      pwaScore: categories.pwa ? Math.round(categories.pwa.score * 100) : null,
      
      // Opportunities
      opportunities: this.extractOpportunities(audits)
    };
  }

  extractOpportunities(audits) {
    const opportunities = [];
    const opportunityAudits = [
      'render-blocking-resources',
      'unused-css-rules',
      'unused-javascript',
      'modern-image-formats',
      'offscreen-images',
      'unminified-css',
      'unminified-javascript',
      'efficient-animated-content'
    ];

    opportunityAudits.forEach(auditId => {
      const audit = audits[auditId];
      if (audit && audit.details && audit.details.overallSavingsMs > 100) {
        opportunities.push({
          id: auditId,
          title: audit.title,
          description: audit.description,
          savingsMs: audit.details.overallSavingsMs,
          savingsBytes: audit.details.overallSavingsBytes || 0
        });
      }
    });

    return opportunities.sort((a, b) => b.savingsMs - a.savingsMs);
  }

  // Batch testing multiple URLs
  async runBatchAudit(urls, config = {}) {
    const results = [];
    
    for (const url of urls) {
      console.log(\`Auditing: \${url}\`);
      
      try {
        const metrics = await this.runAudit(url, config);
        results.push({ url, ...metrics });
        
        // Add delay between audits to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(\`Failed to audit \${url}:\`, error.message);
        results.push({ url, error: error.message });
      }
    }
    
    return results;
  }

  // Performance monitoring over time
  async monitorPerformance(url, duration = 3600000) { // 1 hour default
    const interval = 300000; // 5 minutes
    const endTime = Date.now() + duration;
    
    console.log(\`Starting performance monitoring for \${url}\`);
    
    while (Date.now() < endTime) {
      try {
        await this.runAudit(url, { onlyCategories: ['performance'] });
        console.log(\`Audit completed at \${new Date().toISOString()}\`);
      } catch (error) {
        console.error('Audit failed:', error.message);
      }
      
      await new Promise(resolve => setTimeout(resolve, interval));
    }
    
    return this.generatePerformanceReport();
  }

  generatePerformanceReport() {
    if (this.results.length === 0) {
      return { error: 'No results available' };
    }

    const metrics = this.results.map(r => r.metrics);
    
    return {
      summary: {
        totalAudits: this.results.length,
        timeRange: {
          start: this.results[0].timestamp,
          end: this.results[this.results.length - 1].timestamp
        },
        averageScores: {
          performance: this.average(metrics.map(m => m.performanceScore)),
          accessibility: this.average(metrics.map(m => m.accessibilityScore)),
          seo: this.average(metrics.map(m => m.seoScore))
        },
        coreWebVitals: {
          lcp: {
            average: this.average(metrics.map(m => m.lcp)),
            trend: this.calculateTrend(metrics.map(m => m.lcp))
          },
          cls: {
            average: this.average(metrics.map(m => m.cls)),
            trend: this.calculateTrend(metrics.map(m => m.cls))
          },
          tbt: {
            average: this.average(metrics.map(m => m.tbt)),
            trend: this.calculateTrend(metrics.map(m => m.tbt))
          }
        }
      },
      recommendations: this.generateRecommendations()
    };
  }

  average(arr) {
    return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
  }

  calculateTrend(values) {
    if (values.length < 2) return 'insufficient-data';
    
    const first = values[0];
    const last = values[values.length - 1];
    const change = ((last - first) / first) * 100;
    
    if (change > 5) return 'worsening';
    if (change < -5) return 'improving';
    return 'stable';
  }

  generateRecommendations() {
    const latestResult = this.results[this.results.length - 1];
    const recommendations = [];

    if (latestResult.metrics.performanceScore < 90) {
      recommendations.push({
        priority: 'high',
        category: 'performance',
        message: 'Performance score is below 90. Focus on Core Web Vitals optimization.'
      });
    }

    if (latestResult.metrics.lcp > 2500) {
      recommendations.push({
        priority: 'high',
        category: 'lcp',
        message: 'Largest Contentful Paint is above 2.5s. Optimize critical resource loading.'
      });
    }

    if (latestResult.metrics.cls > 0.1) {
      recommendations.push({
        priority: 'medium',
        category: 'cls',
        message: 'Cumulative Layout Shift is above 0.1. Review layout stability.'
      });
    }

    return recommendations;
  }

  async saveResults(filename = 'lighthouse-results.json') {
    await fs.writeFile(filename, JSON.stringify(this.results, null, 2));
    console.log(\`Results saved to \${filename}\`);
  }
}

// Usage
const runner = new LighthouseRunner();

// Single audit
runner.runAudit('https://example.com').then(metrics => {
  console.log('Performance Score:', metrics.performanceScore);
  console.log('LCP:', metrics.lcp);
  console.log('CLS:', metrics.cls);
});

// Batch audit
const urls = [
  'https://example.com',
  'https://example.com/products',
  'https://example.com/checkout'
];

runner.runBatchAudit(urls).then(results => {
  console.table(results);
  runner.saveResults();
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">GitHub Actions Lighthouse CI</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                <code>{`# .github/workflows/lighthouse.yml
name: Lighthouse Performance Audit

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    # Run daily at 2 AM UTC
    - cron: '0 2 * * *'

jobs:
  lighthouse-audit:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
      env:
        CI: true
    
    - name: Start server
      run: |
        npm start &
        npx wait-on http://localhost:3000 --timeout 60000
      env:
        NODE_ENV: production
    
    - name: Run Lighthouse CI
      run: |
        npm install -g @lhci/cli
        lhci autorun
      env:
        LHCI_GITHUB_APP_TOKEN: \${{ secrets.LHCI_GITHUB_APP_TOKEN }}
    
    - name: Upload Lighthouse Results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: lighthouse-results
        path: .lighthouseci/
    
    - name: Comment PR with Results
      if: github.event_name == 'pull_request'
      uses: actions/github-script@v6
      with:
        script: |
          const fs = require('fs');
          const path = '.lighthouseci/manifest.json';
          
          if (fs.existsSync(path)) {
            const manifest = JSON.parse(fs.readFileSync(path, 'utf8'));
            const summary = manifest[0].summary;
            
            const comment = \`
            ## 🔍 Lighthouse Performance Report
            
            | Metric | Score |
            |--------|-------|
            | Performance | \${Math.round(summary.performance * 100)}% |
            | Accessibility | \${Math.round(summary.accessibility * 100)}% |
            | Best Practices | \${Math.round(summary['best-practices'] * 100)}% |
            | SEO | \${Math.round(summary.seo * 100)}% |
            
            [View Full Report](\${manifest[0].htmlPath})
            \`;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });
          }

  performance-regression-check:
    runs-on: ubuntu-latest
    needs: lighthouse-audit
    if: github.event_name == 'pull_request'
    
    steps:
    - name: Download artifacts
      uses: actions/download-artifact@v3
      with:
        name: lighthouse-results
        path: ./current-results
    
    - name: Get baseline results
      run: |
        # Download baseline results from main branch
        gh api repos/\$GITHUB_REPOSITORY/actions/artifacts \\
          --jq '.artifacts[] | select(.name=="lighthouse-results" and .workflow_run.head_branch=="main") | .archive_download_url' \\
          | head -1 \\
          | xargs gh api --input - > baseline.zip
        unzip baseline.zip -d ./baseline-results
      env:
        GH_TOKEN: \${{ secrets.GITHUB_TOKEN }}
    
    - name: Compare performance
      run: |
        node scripts/compare-lighthouse-results.js \\
          ./baseline-results \\
          ./current-results
      env:
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

# scripts/compare-lighthouse-results.js
const fs = require('fs');
const path = require('path');

function compareResults(baselinePath, currentPath) {
  const baseline = JSON.parse(fs.readFileSync(
    path.join(baselinePath, 'manifest.json')
  ))[0].summary;
  
  const current = JSON.parse(fs.readFileSync(
    path.join(currentPath, 'manifest.json')
  ))[0].summary;

  const metrics = ['performance', 'accessibility', 'best-practices', 'seo'];
  const regressions = [];
  
  metrics.forEach(metric => {
    const baseScore = baseline[metric] * 100;
    const currentScore = current[metric] * 100;
    const diff = currentScore - baseScore;
    
    if (diff < -5) { // 5% regression threshold
      regressions.push({
        metric,
        baseline: baseScore.toFixed(1),
        current: currentScore.toFixed(1),
        diff: diff.toFixed(1)
      });
    }
  });

  if (regressions.length > 0) {
    console.error('Performance regressions detected:');
    console.table(regressions);
    process.exit(1);
  } else {
    console.log('No significant performance regressions detected');
  }
}

const [,, baselinePath, currentPath] = process.argv;
compareResults(baselinePath, currentPath);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">WebPageTest</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-purple-800 mb-3">Advanced WebPageTest Automation</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// WebPageTest API integration
const axios = require('axios');
const fs = require('fs').promises;

class WebPageTestRunner {
  constructor(apiKey, baseUrl = 'https://www.webpagetest.org') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async runTest(url, options = {}) {
    const testParams = {
      url,
      k: this.apiKey,
      f: 'json',
      
      // Test configuration
      location: options.location || 'Dulles:Chrome',
      runs: options.runs || 3,
      fvonly: options.firstViewOnly || 0,
      video: options.video || 1,
      lighthouse: options.lighthouse || 1,
      
      // Connection settings
      connectivity: options.connectivity || 'Cable',
      
      // Advanced options
      emulateMobile: options.mobile || 0,
      timeline: options.timeline || 1,
      netlog: options.netlog || 1,
      spof: options.spof || '',
      
      // Custom metrics
      custom: options.custom || '',
      
      // Scripting
      script: options.script || '',
      
      ...options.additional
    };

    try {
      const response = await axios.post(
        \`\${this.baseUrl}/runtest.php\`,
        new URLSearchParams(testParams)
      );

      if (response.data.statusCode !== 200) {
        throw new Error(\`Test failed: \${response.data.statusText}\`);
      }

      const testId = response.data.data.testId;
      console.log(\`Test started with ID: \${testId}\`);

      return this.waitForResults(testId);
    } catch (error) {
      console.error('Failed to start test:', error.message);
      throw error;
    }
  }

  async waitForResults(testId, maxAttempts = 60) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await axios.get(
          \`\${this.baseUrl}/jsonResult.php\`,
          {
            params: {
              test: testId,
              k: this.apiKey,
              requests: 1,
              breakdown: 1,
              domains: 1,
              pagespeed: 1
            }
          }
        );

        if (response.data.statusCode === 200) {
          return this.processResults(response.data);
        }

        if (response.data.statusCode >= 400) {
          throw new Error(\`Test failed: \${response.data.statusText}\`);
        }

        console.log(\`Test in progress... (attempt \${attempt + 1}/\${maxAttempts})\`);
        await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds
      } catch (error) {
        if (attempt === maxAttempts - 1) {
          throw new Error(\`Test timeout after \${maxAttempts} attempts\`);
        }
        await new Promise(resolve => setTimeout(resolve, 30000));
      }
    }
  }

  processResults(data) {
    const testData = data.data;
    const runs = testData.runs;
    
    // Calculate median values across all runs
    const metrics = this.calculateMedianMetrics(runs);
    
    return {
      testId: testData.id,
      url: testData.url,
      location: testData.location,
      connectivity: testData.connectivity,
      summary: testData.summary,
      median: {
        firstView: metrics.firstView,
        repeatView: metrics.repeatView
      },
      lighthouse: testData.lighthouse,
      pagespeed: testData.pagespeed,
      opportunities: this.extractOpportunities(testData),
      waterfall: this.getWaterfallUrls(testData),
      screenshots: this.getScreenshotUrls(testData)
    };
  }

  calculateMedianMetrics(runs) {
    const firstViewMetrics = [];
    const repeatViewMetrics = [];

    Object.keys(runs).forEach(runNumber => {
      const run = runs[runNumber];
      
      if (run.firstView) {
        firstViewMetrics.push(run.firstView);
      }
      
      if (run.repeatView) {
        repeatViewMetrics.push(run.repeatView);
      }
    });

    return {
      firstView: this.getMedianMetrics(firstViewMetrics),
      repeatView: repeatViewMetrics.length > 0 ? 
        this.getMedianMetrics(repeatViewMetrics) : null
    };
  }

  getMedianMetrics(metrics) {
    if (metrics.length === 0) return null;

    const sortedByLoadTime = metrics.sort((a, b) => a.loadTime - b.loadTime);
    const medianIndex = Math.floor(sortedByLoadTime.length / 2);
    const medianRun = sortedByLoadTime[medianIndex];

    return {
      // Timing metrics
      TTFB: medianRun.TTFB,
      startRender: medianRun.render,
      firstContentfulPaint: medianRun.firstContentfulPaint,
      largestContentfulPaint: medianRun.largestContentfulPaint,
      loadTime: medianRun.loadTime,
      fullyLoaded: medianRun.fullyLoaded,
      
      // Core Web Vitals
      cumulativeLayoutShift: medianRun.chromeUserTiming?.CumulativeLayoutShift,
      totalBlockingTime: medianRun.totalBlockingTime,
      
      // Resource metrics
      bytesIn: medianRun.bytesIn,
      requests: medianRun.requests,
      
      // Visual metrics
      speedIndex: medianRun.SpeedIndex,
      visualComplete: medianRun.visualComplete,
      
      // Scores
      lighthousePerformance: medianRun.lighthouse?.Performance,
    };
  }

  extractOpportunities(testData) {
    const opportunities = [];
    
    // From PageSpeed insights
    if (testData.pagespeed) {
      const audits = testData.pagespeed.lighthouseResult?.audits || {};
      
      Object.entries(audits).forEach(([key, audit]) => {
        if (audit.details?.overallSavingsMs > 100) {
          opportunities.push({
            type: 'pagespeed',
            id: key,
            title: audit.title,
            description: audit.description,
            savingsMs: audit.details.overallSavingsMs,
            savingsBytes: audit.details.overallSavingsBytes
          });
        }
      });
    }
    
    // From WebPageTest analysis
    const median = testData.median?.firstView;
    if (median) {
      // Identify slow resources
      if (median.TTFB > 500) {
        opportunities.push({
          type: 'server',
          title: 'Slow Time to First Byte',
          description: 'Server response time is slower than recommended',
          metric: 'TTFB',
          value: median.TTFB,
          threshold: 500
        });
      }
      
      if (median.startRender > 2000) {
        opportunities.push({
          type: 'rendering',
          title: 'Delayed Start Render',
          description: 'Page takes too long to start rendering',
          metric: 'startRender',
          value: median.startRender,
          threshold: 2000
        });
      }
    }

    return opportunities.sort((a, b) => 
      (b.savingsMs || b.value || 0) - (a.savingsMs || a.value || 0)
    );
  }

  getWaterfallUrls(testData) {
    const baseUrl = \`\${this.baseUrl}/waterfall.php?test=\${testData.id}\`;
    
    return {
      firstView: \`\${baseUrl}&run=1&cached=0\`,
      repeatView: \`\${baseUrl}&run=1&cached=1\`,
      comparison: \`\${baseUrl}&run=1&cached=0,1\`
    };
  }

  getScreenshotUrls(testData) {
    const baseUrl = \`\${this.baseUrl}/video/compare.php?tests=\${testData.id}\`;
    
    return {
      filmstrip: \`\${baseUrl}&thumbSize=200&ival=100\`,
      video: \`\${this.baseUrl}/video/view.php?id=\${testData.id}\`
    };
  }

  // Multi-location testing
  async runMultiLocationTest(url, locations = []) {
    const defaultLocations = [
      'Dulles:Chrome',
      'ec2-us-west-1:Chrome',
      'London_EC2:Chrome',
      'Sydney:Chrome',
      'Mumbai:Chrome'
    ];
    
    const testLocations = locations.length > 0 ? locations : defaultLocations;
    const results = [];

    for (const location of testLocations) {
      console.log(\`Running test from \${location}\`);
      
      try {
        const result = await this.runTest(url, { location });
        results.push({
          location,
          ...result
        });
        
        // Add delay between tests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (error) {
        console.error(\`Test failed for location \${location}:\`, error.message);
        results.push({
          location,
          error: error.message
        });
      }
    }

    return this.analyzeMultiLocationResults(results);
  }

  analyzeMultiLocationResults(results) {
    const successful = results.filter(r => !r.error);
    
    if (successful.length === 0) {
      return { error: 'All location tests failed' };
    }

    const metrics = successful.map(r => ({
      location: r.location,
      ttfb: r.median.firstView.TTFB,
      startRender: r.median.firstView.startRender,
      loadTime: r.median.firstView.loadTime,
      speedIndex: r.median.firstView.speedIndex
    }));

    return {
      summary: {
        totalLocations: results.length,
        successfulLocations: successful.length,
        averageMetrics: {
          ttfb: this.average(metrics.map(m => m.ttfb)),
          startRender: this.average(metrics.map(m => m.startRender)),
          loadTime: this.average(metrics.map(m => m.loadTime)),
          speedIndex: this.average(metrics.map(m => m.speedIndex))
        }
      },
      byLocation: metrics,
      recommendations: this.generateLocationRecommendations(metrics)
    };
  }

  generateLocationRecommendations(metrics) {
    const recommendations = [];
    const avgTTFB = this.average(metrics.map(m => m.ttfb));
    
    if (avgTTFB > 500) {
      recommendations.push({
        priority: 'high',
        category: 'server',
        message: 'Consider using a CDN to reduce server response times globally'
      });
    }

    const slowestLocation = metrics.reduce((prev, current) => 
      current.loadTime > prev.loadTime ? current : prev
    );

    if (slowestLocation.loadTime > 5000) {
      recommendations.push({
        priority: 'medium',
        category: 'regional',
        message: \`Performance is particularly slow in \${slowestLocation.location}. Consider regional optimization.\`
      });
    }

    return recommendations;
  }

  average(arr) {
    return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
  }

  async saveResults(results, filename = 'webpagetest-results.json') {
    await fs.writeFile(filename, JSON.stringify(results, null, 2));
    console.log(\`Results saved to \${filename}\`);
  }
}

// Usage examples
const wptRunner = new WebPageTestRunner('YOUR_API_KEY');

// Single test
wptRunner.runTest('https://example.com', {
  location: 'Dulles:Chrome',
  runs: 3,
  video: 1,
  lighthouse: 1
}).then(results => {
  console.log('Performance Results:', results.median.firstView);
  wptRunner.saveResults(results);
});

// Multi-location comparison
wptRunner.runMultiLocationTest('https://example.com').then(results => {
  console.log('Global Performance Analysis:', results.summary);
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Google Analytics Performance Panel</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Real User Monitoring (RUM)</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                <code>{`// Enhanced Google Analytics 4 Performance Tracking
class PerformanceTracker {
  constructor(measurementId) {
    this.measurementId = measurementId;
    this.metrics = new Map();
    this.observer = null;
    
    this.initializeGA4();
    this.setupPerformanceObservers();
    this.trackCoreWebVitals();
  }

  initializeGA4() {
    // Load gtag if not already loaded
    if (typeof gtag === 'undefined') {
      const script = document.createElement('script');
      script.src = \`https://www.googletagmanager.com/gtag/js?id=\${this.measurementId}\`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { dataLayer.push(arguments); };
    }

    gtag('config', this.measurementId, {
      send_page_view: false, // We'll send custom events
      custom_map: {
        custom_parameter_1: 'lcp_value',
        custom_parameter_2: 'fid_value',
        custom_parameter_3: 'cls_value'
      }
    });
  }

  setupPerformanceObservers() {
    // Navigation Timing API
    this.trackNavigationTiming();
    
    // Resource Timing API
    this.trackResourceTiming();
    
    // Long Tasks API
    this.trackLongTasks();
    
    // Layout Shift API
    this.trackLayoutShifts();
    
    // Paint Timing API
    this.trackPaintTiming();
  }

  trackNavigationTiming() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        
        if (navigation) {
          // DNS Lookup Time
          const dnsTime = navigation.domainLookupEnd - navigation.domainLookupStart;
          
          // Connection Time
          const connectionTime = navigation.connectEnd - navigation.connectStart;
          
          // Server Response Time (TTFB)
          const ttfb = navigation.responseStart - navigation.requestStart;
          
          // DOM Processing Time
          const domProcessing = navigation.domContentLoadedEventEnd - navigation.domLoading;
          
          // Total Load Time
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

          // Send to GA4
          gtag('event', 'page_timing', {
            dns_time: Math.round(dnsTime),
            connection_time: Math.round(connectionTime),
            ttfb: Math.round(ttfb),
            dom_processing: Math.round(domProcessing),
            load_time: Math.round(loadTime),
            page_location: window.location.href,
            page_title: document.title
          });

          this.metrics.set('navigation', {
            dnsTime,
            connectionTime,
            ttfb,
            domProcessing,
            loadTime
          });
        }
      }, 0);
    });
  }

  trackResourceTiming() {
    // Track slow resources
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        // Only track resources that took > 1 second
        if (entry.duration > 1000) {
          gtag('event', 'slow_resource', {
            resource_name: entry.name,
            resource_type: entry.initiatorType,
            duration: Math.round(entry.duration),
            size: entry.transferSize || 0,
            cache_hit: entry.transferSize === 0 ? 'true' : 'false'
          });
        }
      });
    });
    
    observer.observe({ entryTypes: ['resource'] });
  }

  trackLongTasks() {
    if ('PerformanceLongTaskTiming' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          gtag('event', 'long_task', {
            task_duration: Math.round(entry.duration),
            task_start_time: Math.round(entry.startTime),
            attribution: entry.attribution?.[0]?.name || 'unknown'
          });
        });
      });
      
      observer.observe({ entryTypes: ['longtask'] });
    }
  }

  trackLayoutShifts() {
    let clsValue = 0;
    let clsEntries = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
          
          // Report individual layout shifts
          gtag('event', 'layout_shift', {
            shift_value: entry.value,
            shift_sources: entry.sources?.length || 0,
            had_recent_input: entry.hadRecentInput
          });
        }
      }
      
      this.metrics.set('cls', clsValue);
    });

    observer.observe({ entryTypes: ['layout-shift'] });

    // Report final CLS on page unload
    window.addEventListener('beforeunload', () => {
      gtag('event', 'cumulative_layout_shift', {
        cls_value: clsValue,
        cls_entries_count: clsEntries.length
      });
    });
  }

  trackPaintTiming() {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        gtag('event', 'paint_timing', {
          paint_type: entry.name,
          paint_time: Math.round(entry.startTime)
        });
        
        this.metrics.set(entry.name, entry.startTime);
      });
    });
    
    observer.observe({ entryTypes: ['paint'] });
  }

  trackCoreWebVitals() {
    // Import web-vitals library
    this.loadWebVitalsLibrary().then(() => {
      // Largest Contentful Paint
      webVitals.getLCP((metric) => {
        gtag('event', 'web_vital', {
          vital_name: 'LCP',
          vital_value: Math.round(metric.value),
          vital_rating: this.getVitalRating('LCP', metric.value),
          vital_entries: metric.entries?.length || 0
        });
        
        this.metrics.set('lcp', metric.value);
      });

      // First Input Delay
      webVitals.getFID((metric) => {
        gtag('event', 'web_vital', {
          vital_name: 'FID',
          vital_value: Math.round(metric.value),
          vital_rating: this.getVitalRating('FID', metric.value),
          event_type: metric.entries?.[0]?.name || 'unknown'
        });
        
        this.metrics.set('fid', metric.value);
      });

      // Cumulative Layout Shift
      webVitals.getCLS((metric) => {
        gtag('event', 'web_vital', {
          vital_name: 'CLS',
          vital_value: Math.round(metric.value * 1000) / 1000,
          vital_rating: this.getVitalRating('CLS', metric.value)
        });
        
        this.metrics.set('cls', metric.value);
      });

      // First Contentful Paint
      webVitals.getFCP((metric) => {
        gtag('event', 'web_vital', {
          vital_name: 'FCP',
          vital_value: Math.round(metric.value),
          vital_rating: this.getVitalRating('FCP', metric.value)
        });
        
        this.metrics.set('fcp', metric.value);
      });

      // Time to First Byte
      webVitals.getTTFB((metric) => {
        gtag('event', 'web_vital', {
          vital_name: 'TTFB',
          vital_value: Math.round(metric.value),
          vital_rating: this.getVitalRating('TTFB', metric.value)
        });
        
        this.metrics.set('ttfb', metric.value);
      });
    });
  }

  getVitalRating(vital, value) {
    const thresholds = {
      LCP: { good: 2500, needs_improvement: 4000 },
      FID: { good: 100, needs_improvement: 300 },
      CLS: { good: 0.1, needs_improvement: 0.25 },
      FCP: { good: 1800, needs_improvement: 3000 },
      TTFB: { good: 800, needs_improvement: 1800 }
    };

    const threshold = thresholds[vital];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needs_improvement) return 'needs_improvement';
    return 'poor';
  }

  loadWebVitalsLibrary() {
    return new Promise((resolve) => {
      if (typeof webVitals !== 'undefined') {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  }

  // Custom performance marks and measures
  markPerformance(name) {
    performance.mark(name);
    
    gtag('event', 'performance_mark', {
      mark_name: name,
      mark_time: Math.round(performance.now())
    });
  }

  measurePerformance(name, startMark, endMark) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name, 'measure')[0];
      
      gtag('event', 'performance_measure', {
        measure_name: name,
        measure_duration: Math.round(measure.duration),
        start_mark: startMark,
        end_mark: endMark
      });
      
      return measure.duration;
    } catch (error) {
      console.error('Performance measurement failed:', error);
      return null;
    }
  }

  // A/B testing for performance
  trackPerformanceExperiment(experimentId, variant) {
    gtag('event', 'performance_experiment', {
      experiment_id: experimentId,
      experiment_variant: variant,
      page_location: window.location.href
    });
    
    // Track Core Web Vitals for this experiment
    setTimeout(() => {
      const metrics = {};
      this.metrics.forEach((value, key) => {
        metrics[key] = value;
      });
      
      gtag('event', 'experiment_performance', {
        experiment_id: experimentId,
        experiment_variant: variant,
        ...metrics
      });
    }, 5000);
  }

  // Generate performance report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connectionType: navigator.connection?.effectiveType || 'unknown',
      metrics: Object.fromEntries(this.metrics)
    };

    // Send comprehensive report
    gtag('event', 'performance_report', {
      report_data: JSON.stringify(report),
      metrics_count: this.metrics.size
    });

    return report;
  }
}

// Initialize performance tracking
const performanceTracker = new PerformanceTracker('GA_MEASUREMENT_ID');

// Usage examples
document.addEventListener('DOMContentLoaded', () => {
  performanceTracker.markPerformance('dom-ready');
});

window.addEventListener('load', () => {
  performanceTracker.markPerformance('window-loaded');
  
  // Measure time from DOM ready to window loaded
  performanceTracker.measurePerformance('dom-to-load', 'dom-ready', 'window-loaded');
  
  // Generate final report
  setTimeout(() => {
    const report = performanceTracker.generateReport();
    console.log('Performance Report:', report);
  }, 2000);
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Performance Alerting System</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                <code>{`// Performance monitoring and alerting system
class PerformanceAlertSystem {
  constructor(config = {}) {
    this.thresholds = {
      lcp: config.lcpThreshold || 2500,
      fid: config.fidThreshold || 100,
      cls: config.clsThreshold || 0.1,
      ttfb: config.ttfbThreshold || 800,
      ...config.customThresholds
    };
    
    this.alertEndpoint = config.alertEndpoint || '/api/performance-alerts';
    this.buffer = [];
    this.alertsSent = new Set();
    
    this.setupMonitoring();
  }

  setupMonitoring() {
    // Monitor Core Web Vitals
    this.monitorWebVitals();
    
    // Monitor custom metrics
    this.monitorCustomMetrics();
    
    // Batch and send alerts
    setInterval(() => {
      this.processAlerts();
    }, 30000); // Process every 30 seconds
  }

  monitorWebVitals() {
    // LCP monitoring
    new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        if (entry.startTime > this.thresholds.lcp) {
          this.queueAlert({
            type: 'performance_degradation',
            metric: 'LCP',
            value: entry.startTime,
            threshold: this.thresholds.lcp,
            severity: this.getSeverity('LCP', entry.startTime),
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent
          });
        }
      });
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Layout shift monitoring
    let clsValue = 0;
    new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          
          if (clsValue > this.thresholds.cls) {
            this.queueAlert({
              type: 'layout_instability',
              metric: 'CLS',
              value: clsValue,
              threshold: this.thresholds.cls,
              severity: this.getSeverity('CLS', clsValue),
              shiftSource: this.getLayoutShiftSource(entry),
              timestamp: Date.now()
            });
          }
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });

    // Long task monitoring
    if ('PerformanceLongTaskTiming' in window) {
      new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          if (entry.duration > 250) { // Tasks longer than 250ms
            this.queueAlert({
              type: 'long_task',
              metric: 'Task Duration',
              value: entry.duration,
              threshold: 250,
              severity: entry.duration > 1000 ? 'high' : 'medium',
              attribution: entry.attribution?.[0]?.name || 'unknown',
              timestamp: Date.now()
            });
          }
        });
      }).observe({ entryTypes: ['longtask'] });
    }
  }

  monitorCustomMetrics() {
    // Memory usage monitoring
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        const usedRatio = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        
        if (usedRatio > 0.8) { // 80% memory usage
          this.queueAlert({
            type: 'memory_pressure',
            metric: 'Memory Usage',
            value: usedRatio * 100,
            threshold: 80,
            severity: usedRatio > 0.9 ? 'high' : 'medium',
            memoryDetails: {
              used: memory.usedJSHeapSize,
              total: memory.totalJSHeapSize,
              limit: memory.jsHeapSizeLimit
            },
            timestamp: Date.now()
          });
        }
      }, 60000); // Check every minute
    }

    // Error rate monitoring
    let errorCount = 0;
    let totalInteractions = 0;
    
    window.addEventListener('error', () => {
      errorCount++;
      this.checkErrorRate();
    });
    
    window.addEventListener('unhandledrejection', () => {
      errorCount++;
      this.checkErrorRate();
    });
    
    // Track interactions for error rate calculation
    ['click', 'keydown', 'scroll'].forEach(eventType => {
      window.addEventListener(eventType, () => {
        totalInteractions++;
      });
    });

    this.checkErrorRate = () => {
      if (totalInteractions > 100) { // Minimum interactions threshold
        const errorRate = (errorCount / totalInteractions) * 100;
        
        if (errorRate > 5) { // 5% error rate
          this.queueAlert({
            type: 'high_error_rate',
            metric: 'Error Rate',
            value: errorRate,
            threshold: 5,
            severity: errorRate > 10 ? 'high' : 'medium',
            errorCount,
            totalInteractions,
            timestamp: Date.now()
          });
        }
      }
    };
  }

  getSeverity(metric, value) {
    const severityThresholds = {
      LCP: { medium: 2500, high: 4000 },
      FID: { medium: 100, high: 300 },
      CLS: { medium: 0.1, high: 0.25 },
      TTFB: { medium: 800, high: 1800 }
    };

    const thresholds = severityThresholds[metric];
    if (!thresholds) return 'low';

    if (value > thresholds.high) return 'high';
    if (value > thresholds.medium) return 'medium';
    return 'low';
  }

  getLayoutShiftSource(entry) {
    if (entry.sources && entry.sources.length > 0) {
      const source = entry.sources[0];
      return {
        element: source.node?.tagName || 'unknown',
        previousRect: source.previousRect,
        currentRect: source.currentRect
      };
    }
    return null;
  }

  queueAlert(alert) {
    // Deduplicate alerts
    const alertKey = \`\${alert.type}:\${alert.metric}\`;
    
    if (this.alertsSent.has(alertKey)) {
      return; // Already sent this alert type recently
    }
    
    this.buffer.push(alert);
    
    // Mark as sent for 5 minutes to prevent spam
    this.alertsSent.add(alertKey);
    setTimeout(() => {
      this.alertsSent.delete(alertKey);
    }, 300000);
  }

  async processAlerts() {
    if (this.buffer.length === 0) return;

    const alerts = [...this.buffer];
    this.buffer = [];

    // Group alerts by severity
    const groupedAlerts = {
      high: alerts.filter(a => a.severity === 'high'),
      medium: alerts.filter(a => a.severity === 'medium'),
      low: alerts.filter(a => a.severity === 'low')
    };

    try {
      await this.sendAlerts(groupedAlerts);
    } catch (error) {
      console.error('Failed to send performance alerts:', error);
      
      // Re-queue alerts for retry (but limit retries)
      alerts.forEach(alert => {
        if ((alert.retryCount || 0) < 3) {
          alert.retryCount = (alert.retryCount || 0) + 1;
          this.buffer.push(alert);
        }
      });
    }
  }

  async sendAlerts(groupedAlerts) {
    const payload = {
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connection: {
        effectiveType: navigator.connection?.effectiveType,
        downlink: navigator.connection?.downlink,
        rtt: navigator.connection?.rtt
      },
      alerts: groupedAlerts,
      sessionId: this.getSessionId(),
      userId: this.getUserId()
    };

    const response = await fetch(this.alertEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(\`Alert endpoint returned \${response.status}\`);
    }

    // Also send to external monitoring services
    if (typeof gtag !== 'undefined') {
      groupedAlerts.high.forEach(alert => {
        gtag('event', 'performance_alert', {
          event_category: 'Performance',
          event_label: alert.type,
          value: Math.round(alert.value),
          custom_parameter_1: alert.metric,
          custom_parameter_2: alert.severity
        });
      });
    }
  }

  getSessionId() {
    let sessionId = sessionStorage.getItem('perf_session_id');
    if (!sessionId) {
      sessionId = \`session_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
      sessionStorage.setItem('perf_session_id', sessionId);
    }
    return sessionId;
  }

  getUserId() {
    // Implementation depends on your auth system
    return localStorage.getItem('user_id') || 'anonymous';
  }

  // Manual performance test
  runPerformanceTest() {
    const testStart = performance.now();
    
    // Simulate heavy computation
    for (let i = 0; i < 1000000; i++) {
      Math.random();
    }
    
    const duration = performance.now() - testStart;
    
    if (duration > 100) {
      this.queueAlert({
        type: 'performance_test',
        metric: 'Computation Time',
        value: duration,
        threshold: 100,
        severity: duration > 500 ? 'high' : 'medium',
        timestamp: Date.now()
      });
    }
    
    return duration;
  }
}

// Initialize alert system
const alertSystem = new PerformanceAlertSystem({
  lcpThreshold: 2000, // Stricter LCP threshold
  clsThreshold: 0.05, // Stricter CLS threshold
  alertEndpoint: '/api/performance-alerts'
});

// Export for use in other modules
window.performanceAlertSystem = alertSystem;`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-emerald-800 font-semibold mb-4">🔍 Performance Monitoring Checklist</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <strong className="text-emerald-700">Lighthouse Monitoring:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Set up automated CI/CD audits</li>
              <li>□ Configure performance budgets</li>
              <li>□ Monitor Core Web Vitals</li>
              <li>□ Track performance regressions</li>
              <li>□ Generate regular reports</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">WebPageTest Analysis:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Run multi-location tests</li>
              <li>□ Analyze waterfall charts</li>
              <li>□ Monitor TTFB globally</li>
              <li>□ Track resource loading</li>
              <li>□ Compare device performance</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Real User Monitoring:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Track Core Web Vitals</li>
              <li>□ Monitor performance alerts</li>
              <li>□ Analyze user segments</li>
              <li>□ Set up error tracking</li>
              <li>□ Generate performance insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}