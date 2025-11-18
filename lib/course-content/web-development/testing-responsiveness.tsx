export default function TestingResponsivenessContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">5.3 Testing Responsiveness</h1>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">Comprehensive Responsive Testing</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Master browser developer tools for responsive design</li>
          <li>• Use device simulators and emulators effectively</li>
          <li>• Implement cross-platform testing strategies</li>
          <li>• Automated testing for responsive layouts</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Browser Developer Tools</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Chrome DevTools</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Device Mode (Ctrl/Cmd + Shift + M)</h4>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• Toggle device toolbar for mobile view</li>
                  <li>• Select from preset device dimensions</li>
                  <li>• Custom viewport sizing with pixel ruler</li>
                  <li>• Rotate device orientation</li>
                  <li>• Throttle network speed</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-blue-700 text-sm mb-1">Quick Shortcuts:</h5>
                <div className="text-xs space-y-1">
                  <div><code className="bg-gray-100 px-1 rounded">Ctrl + Shift + M</code> - Toggle device mode</div>
                  <div><code className="bg-gray-100 px-1 rounded">Shift + Drag</code> - Resize both dimensions</div>
                  <div><code className="bg-gray-100 px-1 rounded">Ctrl + Shift + P</code> - Command palette</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Firefox Responsive Design</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Responsive Design Mode (F12)</h4>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Built-in device presets</li>
                  <li>• Touch simulation</li>
                  <li>• Screenshot full page</li>
                  <li>• DPR (Device Pixel Ratio) testing</li>
                  <li>• User agent switching</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border">
                <h5 className="font-semibold text-purple-700 text-sm mb-1">Advanced Features:</h5>
                <ul className="text-xs space-y-1">
                  <li>• Grid inspector for CSS Grid</li>
                  <li>• Flexbox inspector</li>
                  <li>• Font editor</li>
                  <li>• Accessibility tree</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Advanced DevTools Techniques</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">CSS Media Query Testing</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Console commands for breakpoint testing
// Check current viewport size
console.log(\`Width: \${window.innerWidth}px, Height: \${window.innerHeight}px\`);

// Test specific media queries
function testMediaQuery(query) {
  return window.matchMedia(query).matches;
}

// Test breakpoints
console.log('Mobile:', testMediaQuery('(max-width: 768px)'));
console.log('Tablet:', testMediaQuery('(min-width: 769px) and (max-width: 1024px)'));
console.log('Desktop:', testMediaQuery('(min-width: 1025px)'));

// Listen for breakpoint changes
window.matchMedia('(max-width: 768px)').addListener((e) => {
  console.log('Mobile breakpoint:', e.matches);
});

// Simulate touch events
function simulateTouch(element) {
  element.dispatchEvent(new TouchEvent('touchstart', {
    bubbles: true,
    cancelable: true,
    touches: [{
      clientX: 100,
      clientY: 100
    }]
  }));
}`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Performance Testing</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Performance monitoring script
function measureResponsivePerformance() {
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      console.log('Element resized:', {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
        target: entry.target.className
      });
    }
  });
  
  // Observe main containers
  document.querySelectorAll('.container, .grid, .flex')
    .forEach(el => observer.observe(el));
}

// Measure layout shift
function measureCLS() {
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        console.log('Layout shift detected:', entry.value);
      }
    }
  }).observe({ entryTypes: ['layout-shift'] });
}

measureResponsivePerformance();
measureCLS();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Device Simulators & Emulators</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">iOS Simulator (Mac)</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Xcode&apos;s iOS Simulator</li>
              <li>• Real iOS Safari rendering</li>
              <li>• Touch gestures simulation</li>
              <li>• Different iOS versions</li>
              <li>• Accessibility testing</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-3">
              <h5 className="font-semibold text-green-700 text-xs mb-1">Setup Commands:</h5>
              <pre className="text-xs overflow-x-auto">
                <code>{`# Install Xcode from App Store
# Launch Simulator
open -a Simulator

# Or via command line
xcrun simctl list devices
xcrun simctl boot "iPhone 14 Pro"
xcrun simctl openurl booted "http://localhost:3000"`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Android Emulator</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Android Studio AVD Manager</li>
              <li>• Chrome Mobile rendering</li>
              <li>• Various Android versions</li>
              <li>• Different screen densities</li>
              <li>• Hardware simulation</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-3">
              <h5 className="font-semibold text-blue-700 text-xs mb-1">Setup Commands:</h5>
              <pre className="text-xs overflow-x-auto">
                <code>{`# Install Android Studio
# Create AVD (Android Virtual Device)
# Via command line:
avdmanager create avd -n "Test_Phone" -k "system-images;android-30;google_apis;x86_64"

# Start emulator
emulator -avd Test_Phone

# Enable developer options and USB debugging`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Browser-Based Tools</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• BrowserStack Live</li>
              <li>• LambdaTest</li>
              <li>• CrossBrowserTesting</li>
              <li>• Responsinator</li>
              <li>• Am I Responsive</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-3">
              <h5 className="font-semibold text-orange-700 text-xs mb-1">Free Tools:</h5>
              <ul className="text-xs space-y-1">
                <li>• Responsinator.com</li>
                <li>• AmIResponsive.is</li>
                <li>• Google Mobile-Friendly Test</li>
                <li>• Viewport Resizer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Physical Device Testing Setup</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-700 mb-2">Local Network Testing</h5>
              <div className="bg-gray-900 text-white p-3 rounded text-sm">
                <pre>
                  <code>{`# Find your local IP address
# Windows
ipconfig

# Mac/Linux
ifconfig | grep inet

# Start development server on all interfaces
# React
npm start -- --host 0.0.0.0

# Vite
npm run dev -- --host

# Next.js
npm run dev -- -H 0.0.0.0

# Access from mobile device
# http://YOUR_IP:3000`}</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-yellow-700 mb-2">Remote Debugging</h5>
              <div className="bg-gray-900 text-white p-3 rounded text-sm">
                <pre>
                  <code>{`# Chrome Remote Debugging
# 1. Enable USB debugging on Android
# 2. Connect device via USB
# 3. Open chrome://inspect in desktop Chrome
# 4. Select device and inspect

# iOS Safari Remote Debugging
# 1. Enable Web Inspector on iOS
# 2. Connect device via USB
# 3. Open Safari > Develop > [Device Name]

# ngrok for external access
npm install -g ngrok
ngrok http 3000
# Access via: https://abc123.ngrok.io`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cross-Platform Testing Strategies</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-purple-800 mb-3">Automated Responsive Testing</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Playwright responsive testing
const { test, expect } = require('@playwright/test');

const devices = [
  { name: 'iPhone 12', width: 390, height: 844 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Mobile Landscape', width: 844, height: 390 }
];

devices.forEach(device => {
  test(\`Responsive design test on \${device.name}\`, async ({ page }) => {
    await page.setViewportSize({ 
      width: device.width, 
      height: device.height 
    });
    
    await page.goto('http://localhost:3000');
    
    // Test navigation visibility
    if (device.width < 768) {
      await expect(page.locator('.mobile-menu-toggle')).toBeVisible();
      await expect(page.locator('.desktop-navigation')).toBeHidden();
    } else {
      await expect(page.locator('.desktop-navigation')).toBeVisible();
      await expect(page.locator('.mobile-menu-toggle')).toBeHidden();
    }
    
    // Test content layout
    await expect(page.locator('.container')).toBeVisible();
    
    // Screenshot for visual regression
    await page.screenshot({ 
      path: \`screenshots/\${device.name.replace(' ', '-')}.png\`,
      fullPage: true 
    });
    
    // Test specific breakpoint behaviors
    if (device.width >= 1024) {
      await expect(page.locator('.sidebar')).toBeVisible();
      await expect(page.locator('.grid')).toHaveClass(/grid-cols-3/);
    } else if (device.width >= 768) {
      await expect(page.locator('.grid')).toHaveClass(/grid-cols-2/);
    } else {
      await expect(page.locator('.grid')).toHaveClass(/grid-cols-1/);
    }
  });
});

// Cypress responsive testing
describe('Responsive Design Tests', () => {
  const viewports = [
    { device: 'iPhone X', width: 375, height: 812 },
    { device: 'iPad Pro', width: 1024, height: 1366 },
    { device: 'MacBook Pro', width: 1440, height: 900 }
  ];

  viewports.forEach(viewport => {
    it(\`should display correctly on \${viewport.device}\`, () => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('/');
      
      // Test responsive navigation
      if (viewport.width < 768) {
        cy.get('[data-testid="mobile-menu"]').should('be.visible');
        cy.get('[data-testid="desktop-menu"]').should('not.be.visible');
      } else {
        cy.get('[data-testid="desktop-menu"]').should('be.visible');
      }
      
      // Test content reflow
      cy.get('.hero-section').should('be.visible');
      cy.get('.hero-section').invoke('height').should('be.greaterThan', 200);
      
      // Test form elements
      cy.get('input[type="email"]').should('be.visible');
      cy.get('input[type="email"]').invoke('outerWidth').then(width => {
        if (viewport.width < 768) {
          expect(width).to.be.greaterThan(300);
        }
      });
    });
  });
});`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Performance Testing</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Lighthouse CI for performance
// lighthouse-ci.json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}

// Package.json scripts
{
  "scripts": {
    "lhci:mobile": "lhci autorun --collect.settings.preset=mobile",
    "lhci:desktop": "lhci autorun --collect.settings.preset=desktop"
  }
}

// Custom performance metrics
function measureResponsivePerformance() {
  return new Promise((resolve) => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const metrics = {
        fcp: entries.find(e => e.name === 'first-contentful-paint')?.startTime,
        lcp: entries.find(e => e.entryType === 'largest-contentful-paint')?.startTime,
        cls: entries.reduce((total, e) => total + e.value, 0)
      };
      resolve(metrics);
    });
    
    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });
  });
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Accessibility Testing</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// axe-core accessibility testing
const { AxePuppeteer } = require('@axe-core/puppeteer');

async function testAccessibility(page) {
  const results = await new AxePuppeteer(page).analyze();
  
  if (results.violations.length > 0) {
    console.log('Accessibility violations found:');
    results.violations.forEach(violation => {
      console.log(\`- \${violation.description}\`);
      violation.nodes.forEach(node => {
        console.log(\`  Target: \${node.target}\`);
      });
    });
  }
  
  return results;
}

// Jest test for responsive accessibility
test('responsive accessibility', async () => {
  const page = await browser.newPage();
  
  const breakpoints = [375, 768, 1024, 1440];
  
  for (const width of breakpoints) {
    await page.setViewport({ width, height: 800 });
    await page.goto('http://localhost:3000');
    
    const results = await testAccessibility(page);
    expect(results.violations).toHaveLength(0);
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => 
      document.activeElement.tagName
    );
    expect(['A', 'BUTTON', 'INPUT']).toContain(focusedElement);
  }
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Testing Checklist & Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Essential Test Points</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-blue-700 mb-2">Layout & Visual</h5>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>□ Navigation collapsed/expanded correctly</li>
                  <li>□ Images scale and maintain aspect ratio</li>
                  <li>□ Text remains readable at all sizes</li>
                  <li>□ No horizontal scrolling (unless intended)</li>
                  <li>□ Content hierarchy is maintained</li>
                  <li>□ Touch targets are at least 44px</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-blue-700 mb-2">Functionality</h5>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>□ Forms work correctly on all devices</li>
                  <li>□ Hover states have touch alternatives</li>
                  <li>□ Keyboard navigation is functional</li>
                  <li>□ Modals and overlays are accessible</li>
                  <li>□ Performance is acceptable on slow devices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Testing Workflow</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
                <div>
                  <h5 className="font-semibold text-green-700 text-sm">Development Testing</h5>
                  <p className="text-green-600 text-xs">Use browser dev tools daily during development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                <div>
                  <h5 className="font-semibold text-green-700 text-sm">Device Testing</h5>
                  <p className="text-green-600 text-xs">Test on real devices weekly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                <div>
                  <h5 className="font-semibold text-green-700 text-sm">Automated Testing</h5>
                  <p className="text-green-600 text-xs">Run automated responsive tests in CI/CD</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
                <div>
                  <h5 className="font-semibold text-green-700 text-sm">Cross-Platform Validation</h5>
                  <p className="text-green-600 text-xs">Use cloud testing services before releases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-emerald-800 font-semibold mb-2">🎯 Testing Success Metrics</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-emerald-700">Performance:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>• LCP {'<'} 2.5s on 3G</li>
              <li>• CLS {'<'} 0.1</li>
              <li>• FCP {'<'} 1.8s</li>
              <li>• Interactive within 5s</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Usability:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>• Touch targets ≥ 44px</li>
              <li>• Text contrast ratio ≥ 4.5:1</li>
              <li>• No horizontal scroll</li>
              <li>• Readable font sizes</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Compatibility:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>• Works on iOS Safari</li>
              <li>• Works on Chrome Mobile</li>
              <li>• Keyboard accessible</li>
              <li>• Screen reader friendly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}