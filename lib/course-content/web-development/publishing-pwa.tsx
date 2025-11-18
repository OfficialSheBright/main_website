export default function PublishingPWAContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">6.4 Publishing Your PWA</h1>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">PWA Deployment & Distribution</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Create compelling install experiences with custom banners</li>
          <li>• Pass comprehensive Lighthouse PWA audits</li>
          <li>• Deploy PWAs to various platforms and app stores</li>
          <li>• Optimize for discoverability and user engagement</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Adding Install Banners</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">Custom Install Experience</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Custom PWA Install Banner Component
import { useState, useEffect } from 'react';

export function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if app is already installed/standalone
    const checkStandalone = () => {
      const standalone = window.matchMedia('(display-mode: standalone)').matches ||
                        (window.navigator as any).standalone ||
                        document.referrer.includes('android-app://');
      
      setIsStandalone(standalone);
      setIsInstalled(standalone);
    };

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Show custom install banner after user engagement
      setTimeout(() => {
        if (!isInstalled) {
          setShowInstallBanner(true);
        }
      }, 30000); // Show after 30 seconds of usage
    };

    // Listen for successful installation
    const handleAppInstalled = () => {
      console.log('PWA installed successfully');
      setIsInstalled(true);
      setShowInstallBanner(false);
      setDeferredPrompt(null);
      
      // Track installation
      if (typeof gtag !== 'undefined') {
        gtag('event', 'pwa_install', {
          method: 'banner'
        });
      }
    };

    checkStandalone();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the prompt
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    
    // Don't show again for 7 days
    localStorage.setItem('pwa-install-dismissed', 
      String(Date.now() + 7 * 24 * 60 * 60 * 1000));
  };

  // Check if user previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed && Date.now() < parseInt(dismissed)) {
      setShowInstallBanner(false);
    }
  }, []);

  if (isStandalone || isInstalled || !showInstallBanner || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-start space-x-3">
          <img 
            src="/icons/icon-72x72.png" 
            alt="App Icon" 
            className="w-12 h-12 rounded-lg"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Install App</h3>
            <p className="text-sm text-gray-600 mb-3">
              Get the full experience with our app. Fast, offline-ready, and always up-to-date.
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleInstallClick}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-gray-500 text-sm hover:text-gray-700 transition-colors"
              >
                Later
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

// iOS-specific install instructions
export function IOSInstallBanner() {
  const [showIOSBanner, setShowIOSBanner] = useState(false);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone = (window.navigator as any).standalone;
    
    if (isIOS && !isStandalone) {
      setTimeout(() => setShowIOSBanner(true), 20000);
    }
  }, []);

  if (!showIOSBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex-1 pr-4">
          <h3 className="font-semibold mb-1">Install App</h3>
          <p className="text-sm opacity-90">
            Tap the share button <span className="inline-block">📤</span> and select "Add to Home Screen"
          </p>
        </div>
        <button
          onClick={() => setShowIOSBanner(false)}
          className="text-white/80 hover:text-white text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h4 className="font-semibold text-purple-800 mb-3">Advanced Install Strategies</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Smart Install Timing & Targeting
class PWAInstallManager {
  private deferredPrompt: any = null;
  private installMetrics = {
    pageViews: 0,
    timeSpent: 0,
    interactions: 0,
    returnVisits: 0
  };

  constructor() {
    this.initializeTracking();
    this.setupInstallPromptListener();
  }

  private initializeTracking() {
    // Track page views
    this.installMetrics.pageViews = parseInt(
      localStorage.getItem('pwa-page-views') || '0'
    ) + 1;
    localStorage.setItem('pwa-page-views', String(this.installMetrics.pageViews));

    // Track return visits
    const lastVisit = localStorage.getItem('pwa-last-visit');
    const now = Date.now();
    
    if (lastVisit && now - parseInt(lastVisit) > 24 * 60 * 60 * 1000) {
      this.installMetrics.returnVisits = parseInt(
        localStorage.getItem('pwa-return-visits') || '0'
      ) + 1;
      localStorage.setItem('pwa-return-visits', String(this.installMetrics.returnVisits));
    }
    
    localStorage.setItem('pwa-last-visit', String(now));

    // Track time spent
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Date.now() - startTime;
      const totalTime = parseInt(
        localStorage.getItem('pwa-time-spent') || '0'
      ) + timeSpent;
      localStorage.setItem('pwa-time-spent', String(totalTime));
    });

    // Track interactions
    ['click', 'scroll', 'keydown'].forEach(event => {
      document.addEventListener(event, () => {
        this.installMetrics.interactions++;
      }, { once: true });
    });
  }

  private setupInstallPromptListener() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      
      // Evaluate install criteria
      this.evaluateInstallPrompt();
    });
  }

  private evaluateInstallPrompt() {
    const criteria = {
      minPageViews: 3,
      minTimeSpent: 5 * 60 * 1000, // 5 minutes
      minInteractions: 10,
      minReturnVisits: 2
    };

    const meetsEngagementCriteria = 
      this.installMetrics.pageViews >= criteria.minPageViews ||
      this.installMetrics.returnVisits >= criteria.minReturnVisits ||
      parseInt(localStorage.getItem('pwa-time-spent') || '0') >= criteria.minTimeSpent;

    if (meetsEngagementCriteria && this.deferredPrompt) {
      this.showInstallPrompt();
    }
  }

  private showInstallPrompt() {
    // Custom install UI logic here
    const event = new CustomEvent('pwa-install-ready', {
      detail: { deferredPrompt: this.deferredPrompt }
    });
    window.dispatchEvent(event);
  }

  public async triggerInstall(): Promise<boolean> {
    if (!this.deferredPrompt) return false;

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    
    // Track installation attempt
    this.trackInstallAttempt(outcome);
    
    this.deferredPrompt = null;
    return outcome === 'accepted';
  }

  private trackInstallAttempt(outcome: string) {
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'pwa_install_prompt', {
        outcome: outcome,
        page_views: this.installMetrics.pageViews,
        return_visits: this.installMetrics.returnVisits
      });
    }

    // Store outcome for future optimization
    const attempts = JSON.parse(
      localStorage.getItem('pwa-install-attempts') || '[]'
    );
    attempts.push({
      outcome,
      timestamp: Date.now(),
      metrics: this.installMetrics
    });
    localStorage.setItem('pwa-install-attempts', JSON.stringify(attempts));
  }
}

// Initialize install manager
const installManager = new PWAInstallManager();

// Usage in React component
export function useSmartPWAInstall() {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handleInstallReady = () => setCanInstall(true);
    
    window.addEventListener('pwa-install-ready', handleInstallReady);
    return () => window.removeEventListener('pwa-install-ready', handleInstallReady);
  }, []);

  const triggerInstall = () => {
    installManager.triggerInstall().then(success => {
      if (success) {
        setCanInstall(false);
      }
    });
  };

  return { canInstall, triggerInstall };
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Lighthouse PWA Audits</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">PWA Audit Checklist</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-green-700 mb-2 text-sm">Core Requirements (Must Pass):</h5>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>□ Served over HTTPS</li>
                  <li>□ Has a web app manifest</li>
                  <li>□ Has a service worker</li>
                  <li>□ Works offline</li>
                  <li>□ Is installable</li>
                  <li>□ Has icons (192px & 512px)</li>
                  <li>□ Responsive design</li>
                  <li>□ Fast load times</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-700 mb-2 text-sm">Additional Criteria:</h5>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>□ Has a theme color</li>
                  <li>□ Has a short name</li>
                  <li>□ Has a start URL</li>
                  <li>□ Display mode is standalone/fullscreen</li>
                  <li>□ Orientation is set</li>
                  <li>□ Has maskable icons</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Performance Optimization</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Performance optimization for PWA
// 1. Critical resource preloading
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/critical.css" as="style">
<link rel="preload" href="/js/main.js" as="script">

// 2. Lazy loading implementation
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// 3. Code splitting with dynamic imports
const loadFeature = async () => {
  const { feature } = await import('./feature.js');
  return feature;
};

// 4. Resource hints
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="preconnect" href="https://api.example.com">
<link rel="prefetch" href="/next-page.html">

// 5. Bundle analysis and optimization
// webpack-bundle-analyzer for bundle size analysis
// Tree shaking to remove unused code
// Compression (gzip/brotli) on server`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Automated Lighthouse CI</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// lighthouse-ci.json configuration
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "settings": {
        "chromeFlags": "--no-sandbox --headless"
      },
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/contact"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.8}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.8}],
        "categories:pwa": ["error", {"minScore": 0.9}]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}

// Package.json scripts for CI/CD
{
  "scripts": {
    "lighthouse:ci": "lhci autorun",
    "lighthouse:mobile": "lhci autorun --collect.settings.preset=mobile",
    "lighthouse:desktop": "lhci autorun --collect.settings.preset=desktop",
    "audit:pwa": "lighthouse --only-categories=pwa --output=json --output-path=./pwa-audit.json http://localhost:3000"
  }
}

// GitHub Actions workflow
name: PWA Audit
on: [push, pull_request]

jobs:
  lighthouse-ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build app
        run: npm run build
        
      - name: Start server
        run: npm start &
        
      - name: Wait for server
        run: npx wait-on http://localhost:3000
        
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: \${{ secrets.LHCI_GITHUB_APP_TOKEN }}

// Custom PWA audit script
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function auditPWA(url) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['pwa'],
    port: chrome.port,
  };
  
  const runnerResult = await lighthouse(url, options);
  const pwaScore = runnerResult.report.categories.pwa.score;
  
  console.log(\`PWA Score: \${pwaScore * 100}\`);
  
  // Check specific PWA audits
  const audits = runnerResult.report.audits;
  const pwaAudits = [
    'is-on-https',
    'service-worker',
    'installable-manifest',
    'splash-screen',
    'themed-omnibox',
    'content-width',
    'viewport'
  ];
  
  pwaAudits.forEach(auditId => {
    const audit = audits[auditId];
    console.log(\`\${audit.title}: \${audit.score ? 'PASS' : 'FAIL'}\`);
    if (!audit.score) {
      console.log(\`  Issue: \${audit.description}\`);
    }
  });
  
  await chrome.kill();
  return pwaScore;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Deploying PWAs</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Web Deployment</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Netlify with PWA optimization</li>
              <li>• Vercel with service worker support</li>
              <li>• Firebase Hosting</li>
              <li>• GitHub Pages (with HTTPS)</li>
              <li>• AWS S3 + CloudFront</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-3">
              <h5 className="font-semibold text-blue-700 text-xs mb-1">Netlify PWA Setup:</h5>
              <pre className="text-xs overflow-x-auto">
                <code>{`# netlify.toml
[build]
  publish = "build"
  command = "npm run build"

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">App Stores</h4>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Microsoft Store (PWA support)</li>
              <li>• Google Play Store (TWA)</li>
              <li>• Samsung Galaxy Store</li>
              <li>• PWABuilder for packaging</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-3">
              <h5 className="font-semibold text-purple-700 text-xs mb-1">TWA Generation:</h5>
              <pre className="text-xs overflow-x-auto">
                <code>{`# Generate Android APK
npx @bubblewrap/cli init --manifest=https://myapp.com/manifest.json

# Build APK
npx @bubblewrap/cli build

# Microsoft Store submission
# Use PWABuilder.com to generate MSIX package

# Capabilities for store submission
{
  "name": "MyPWA",
  "version": "1.0.0",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#000000"
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Server Configuration</h4>
            <ul className="text-teal-700 space-y-2 text-sm">
              <li>• HTTPS enforcement</li>
              <li>• Proper MIME types</li>
              <li>• Cache headers</li>
              <li>• Service worker headers</li>
              <li>• Compression enabled</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-3">
              <h5 className="font-semibold text-teal-700 text-xs mb-1">Nginx Configuration:</h5>
              <pre className="text-xs overflow-x-auto">
                <code>{`# nginx.conf
location /sw.js {
    add_header Cache-Control "no-cache";
    expires off;
}

location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location /manifest.json {
    add_header Content-Type "application/manifest+json";
}

# Force HTTPS
if ($scheme != "https") {
    return 301 https://$server_name$request_uri;
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">PWA Analytics & Monitoring</h2>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="font-semibold text-indigo-800 mb-3">Tracking PWA Metrics</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// PWA Analytics Implementation
class PWAAnalytics {
  constructor() {
    this.trackInstallation();
    this.trackUsage();
    this.trackPerformance();
  }

  trackInstallation() {
    // Track install prompt shown
    window.addEventListener('beforeinstallprompt', () => {
      this.sendEvent('pwa_install_prompt_shown');
    });

    // Track successful installation
    window.addEventListener('appinstalled', () => {
      this.sendEvent('pwa_installed');
      localStorage.setItem('pwa_installed', 'true');
    });

    // Track launch method
    window.addEventListener('load', () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const launchMethod = isStandalone ? 'standalone' : 'browser';
      
      this.sendEvent('pwa_launch', { method: launchMethod });
    });
  }

  trackUsage() {
    // Track offline usage
    window.addEventListener('online', () => {
      this.sendEvent('pwa_online');
    });

    window.addEventListener('offline', () => {
      this.sendEvent('pwa_offline');
    });

    // Track feature usage
    this.trackFeatureUsage();
  }

  trackPerformance() {
    // Track Core Web Vitals
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          this.sendEvent('pwa_lcp', { value: entry.startTime });
        }
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track service worker events
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.type === 'CACHE_HIT') {
          this.sendEvent('pwa_cache_hit', { resource: event.data.url });
        }
      });
    }
  }

  trackFeatureUsage() {
    // Track PWA-specific features
    const features = {
      'push-notifications': () => 'Notification' in window,
      'background-sync': () => 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
      'web-share': () => 'share' in navigator,
      'install-prompt': () => localStorage.getItem('pwa_install_prompt_shown') === 'true'
    };

    Object.entries(features).forEach(([feature, detector]) => {
      if (detector()) {
        this.sendEvent('pwa_feature_available', { feature });
      }
    });
  }

  sendEvent(eventName, data = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        ...data,
        pwa_enabled: true
      });
    }

    // Custom analytics
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: eventName,
        data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      })
    }).catch(console.error);
  }
}

// Initialize analytics
new PWAAnalytics();

// Performance monitoring dashboard
function generatePWAReport() {
  const metrics = {
    installRate: calculateInstallRate(),
    retentionRate: calculateRetentionRate(),
    offlineUsage: getOfflineUsageStats(),
    performanceScores: getLighthouseScores(),
    featureAdoption: getFeatureAdoptionRates()
  };

  console.table(metrics);
  return metrics;
}

// A/B testing for install prompts
class InstallPromptABTest {
  constructor() {
    this.variant = this.getVariant();
    this.setupVariant();
  }

  getVariant() {
    const stored = localStorage.getItem('install_prompt_variant');
    if (stored) return stored;

    const variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem('install_prompt_variant', variant);
    return variant;
  }

  setupVariant() {
    if (this.variant === 'A') {
      this.setupEarlyPrompt();
    } else {
      this.setupDelayedPrompt();
    }
  }

  setupEarlyPrompt() {
    // Show prompt after 10 seconds
    setTimeout(() => this.showPrompt('early'), 10000);
  }

  setupDelayedPrompt() {
    // Show prompt after 60 seconds
    setTimeout(() => this.showPrompt('delayed'), 60000);
  }

  showPrompt(timing) {
    // Custom install prompt logic
    console.log(\`Showing \${timing} install prompt (variant \${this.variant})\`);
    
    // Track A/B test results
    gtag('event', 'install_prompt_shown', {
      variant: this.variant,
      timing: timing
    });
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-emerald-800 font-semibold mb-4">🚀 PWA Deployment Checklist</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <strong className="text-emerald-700">Pre-Deployment:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Pass all Lighthouse PWA audits</li>
              <li>□ Test on multiple devices/browsers</li>
              <li>□ Verify offline functionality</li>
              <li>□ Test install flow</li>
              <li>□ Optimize performance metrics</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Post-Deployment:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Monitor installation rates</li>
              <li>□ Track user engagement</li>
              <li>□ Monitor performance in production</li>
              <li>□ Set up error tracking</li>
              <li>□ Plan update strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}