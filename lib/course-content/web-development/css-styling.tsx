export default function CSSStylingContent(){
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">2.2 CSS & Styling</h1>
      
      {/* Learning Objectives */}
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">What You&apos;ll Master</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• CSS selectors, specificity, and the cascade</li>
          <li>• Modern layouts with Flexbox and Grid</li>
          <li>• Typography, colors, and design principles</li>
          <li>• CSS animations and transitions</li>
          <li>• Responsive design with media queries</li>
          <li>• CSS custom properties (variables)</li>
        </ul>
      </div>

      {/* CSS Fundamentals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">CSS Selectors & Specificity</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Selector Types & Specificity</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`/* Element selector (specificity: 1) */
p { color: black; }

/* Class selector (specificity: 10) */
.highlight { color: yellow; }

/* ID selector (specificity: 100) */
#header { color: blue; }

/* Attribute selector */
[type="email"] { border: 1px solid #ccc; }

/* Pseudo-classes */
a:hover { color: red; }
li:nth-child(odd) { background: #f5f5f5; }

/* Pseudo-elements */
p::first-line { font-weight: bold; }
.quote::before { content: '"'; }

/* Combinators */
.container > .item { margin: 10px; }     /* Direct child */
.header + .content { margin-top: 20px; } /* Adjacent sibling */
.nav ~ .footer { clear: both; }          /* General sibling */
.card .title { font-size: 1.2em; }       /* Descendant */

/* Advanced selectors */
:not(.hidden) { display: block; }
:has(.error) { border: 1px solid red; }  /* CSS4 - limited support */`}</code>
          </pre>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-red-800 mb-4">Specificity Calculator</h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-3 rounded">
              <div className="text-2xl font-bold text-red-600">1000</div>
              <div className="text-sm text-red-500">Inline styles</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="text-2xl font-bold text-red-600">100</div>
              <div className="text-sm text-red-500">IDs</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="text-2xl font-bold text-red-600">10</div>
              <div className="text-sm text-red-500">Classes, attributes, pseudo-classes</div>
            </div>
            <div className="bg-white p-3 rounded">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-sm text-red-500">Elements & pseudo-elements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexbox & Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Modern Layouts: Flexbox & Grid</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Flexbox Layout</h3>
            <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
              <pre className="text-xs overflow-x-auto">
                <code>{`/* Flex Container */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* Flex Items */
.flex-item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}

.flex-item:first-child {
  flex: 2; /* Takes twice the space */
}

/* Common Flex Patterns */
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</code>
              </pre>
            </div>
            <div className="text-sm text-blue-600">
              <strong>Best for:</strong> 1D layouts, navigation bars, centering content
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">CSS Grid Layout</h3>
            <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
              <pre className="text-xs overflow-x-auto">
                <code>{`/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 20px;
  min-height: 100vh;
}

/* Grid Items */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}`}</code>
              </pre>
            </div>
            <div className="text-sm text-green-600">
              <strong>Best for:</strong> 2D layouts, complex page structures, card grids
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Responsive Design & Media Queries</h2>
        
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile-First Approach</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`/* CSS Custom Properties (Variables) */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.125rem;
  --spacing-sm: 0.5rem;
  --spacing-lg: 2rem;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
}

/* Base styles (mobile-first) */
.container {
  width: 100%;
  padding: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-sm);
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: var(--spacing-lg);
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    font-size: var(--font-size-lg);
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #60a5fa;
    --text-color: #f8fafc;
    --bg-color: #0f172a;
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Responsive Units</h4>
            <ul className="text-sm text-yellow-600 space-y-1">
              <li>• <code>rem</code> - relative to root font-size</li>
              <li>• <code>em</code> - relative to parent font-size</li>
              <li>• <code>vw, vh</code> - viewport width/height</li>
              <li>• <code>%</code> - percentage of parent</li>
              <li>• <code>fr</code> - grid fractional unit</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Modern CSS Functions</h4>
            <ul className="text-sm text-purple-600 space-y-1">
              <li>• <code>clamp(min, preferred, max)</code></li>
              <li>• <code>min(value1, value2)</code></li>
              <li>• <code>max(value1, value2)</code></li>
              <li>• <code>calc(expression)</code></li>
              <li>• <code>var(--custom-property)</code></li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="font-semibold text-indigo-800 mb-2">Animation Properties</h4>
            <ul className="text-sm text-indigo-600 space-y-1">
              <li>• <code>transition</code> - smooth changes</li>
              <li>• <code>transform</code> - scale, rotate, translate</li>
              <li>• <code>animation</code> - keyframe animations</li>
              <li>• <code>will-change</code> - optimization hint</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practical Exercise */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🎨 Style Challenge: Responsive Card Layout</h3>
        <div className="bg-white p-4 rounded border mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Create a responsive product card grid:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Mobile: 1 column layout</li>
            <li>• Tablet: 2 columns with flexbox</li>
            <li>• Desktop: 3 columns with CSS Grid</li>
            <li>• Add hover animations and transitions</li>
            <li>• Implement dark mode with CSS variables</li>
            <li>• Use modern CSS functions (clamp, min/max)</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 p-4 rounded">
          <p className="text-purple-800 text-sm">
            <strong>🎯 Bonus:</strong> Add a loading animation, skeleton placeholders, 
            and smooth page transitions for a polished user experience.
          </p>
        </div>
      </div>
    </div>
  );
}