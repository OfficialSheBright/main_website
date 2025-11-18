export default function AdvancedResponsiveContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">5.2 Advanced Responsive Techniques</h1>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">Modern CSS Responsive Features</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Fluid typography with CSS functions</li>
          <li>• Container queries for component-based design</li>
          <li>• Advanced CSS functions: clamp(), min(), max()</li>
          <li>• Modern layout techniques and best practices</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Fluid Typography</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">CSS Clamp() for Fluid Scaling</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`/* Fluid Typography System */
:root {
  /* Fluid font sizes using clamp() */
  --fs-xs: clamp(0.75rem, 0.5rem + 1vw, 0.875rem);
  --fs-sm: clamp(0.875rem, 0.625rem + 1.25vw, 1rem);
  --fs-base: clamp(1rem, 0.75rem + 1.5vw, 1.125rem);
  --fs-lg: clamp(1.125rem, 0.875rem + 1.75vw, 1.25rem);
  --fs-xl: clamp(1.25rem, 1rem + 2vw, 1.5rem);
  --fs-2xl: clamp(1.5rem, 1.25rem + 2.5vw, 2rem);
  --fs-3xl: clamp(2rem, 1.5rem + 3vw, 3rem);
  --fs-4xl: clamp(3rem, 2rem + 4vw, 4rem);
  --fs-5xl: clamp(4rem, 3rem + 5vw, 6rem);

  /* Fluid spacing */
  --space-xs: clamp(0.25rem, 0.125rem + 0.5vw, 0.5rem);
  --space-sm: clamp(0.5rem, 0.25rem + 1vw, 1rem);
  --space-md: clamp(1rem, 0.5rem + 2vw, 2rem);
  --space-lg: clamp(2rem, 1rem + 4vw, 4rem);
  --space-xl: clamp(4rem, 2rem + 8vw, 8rem);

  /* Container widths */
  --container-xs: min(90vw, 480px);
  --container-sm: min(90vw, 640px);
  --container-md: min(90vw, 768px);
  --container-lg: min(90vw, 1024px);
  --container-xl: min(90vw, 1280px);
}

/* Typography classes */
.text-xs { font-size: var(--fs-xs); }
.text-sm { font-size: var(--fs-sm); }
.text-base { font-size: var(--fs-base); }
.text-lg { font-size: var(--fs-lg); }
.text-xl { font-size: var(--fs-xl); }
.text-2xl { font-size: var(--fs-2xl); }
.text-3xl { font-size: var(--fs-3xl); }
.text-4xl { font-size: var(--fs-4xl); }
.text-5xl { font-size: var(--fs-5xl); }

/* Fluid line heights */
h1, .h1 {
  font-size: var(--fs-4xl);
  line-height: clamp(1.1, 0.9 + 0.5vw, 1.3);
  margin-bottom: var(--space-md);
}

h2, .h2 {
  font-size: var(--fs-3xl);
  line-height: clamp(1.2, 1 + 0.4vw, 1.4);
  margin-bottom: var(--space-sm);
}

h3, .h3 {
  font-size: var(--fs-2xl);
  line-height: clamp(1.3, 1.1 + 0.3vw, 1.5);
  margin-bottom: var(--space-sm);
}

p {
  font-size: var(--fs-base);
  line-height: clamp(1.4, 1.2 + 0.4vw, 1.7);
  margin-bottom: var(--space-sm);
}

/* Advanced fluid calculations */
.hero-title {
  font-size: clamp(2.5rem, 1rem + 8vw, 8rem);
  line-height: 0.9;
  letter-spacing: clamp(-0.02em, -0.01em + -0.5vw, -0.05em);
}

.card-title {
  font-size: clamp(1.2rem, 1rem + 1vw, 1.8rem);
  margin-bottom: clamp(0.5rem, 0.25rem + 1vw, 1rem);
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">Fluid Typography Calculator</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// JavaScript utility for generating fluid typography
function createFluidType(minSize, maxSize, minViewport = 320, maxViewport = 1200) {
  const slope = (maxSize - minSize) / (maxViewport - minViewport);
  const yAxisIntersection = -minViewport * slope + minSize;
  
  return \`clamp(\${minSize}px, \${yAxisIntersection}px + \${slope * 100}vw, \${maxSize}px)\`;
}

// Usage examples
const fluidH1 = createFluidType(32, 64); // 32px to 64px
const fluidH2 = createFluidType(24, 48); // 24px to 48px
const fluidBody = createFluidType(16, 20); // 16px to 20px

console.log(fluidH1); // "clamp(32px, 9.09px + 7.11vw, 64px)"

// React hook for fluid typography
function useFluidType(minSize, maxSize, minVw = 320, maxVw = 1200) {
  return useMemo(() => {
    const slope = (maxSize - minSize) / (maxVw - minVw);
    const yInt = -minVw * slope + minSize;
    
    return {
      fontSize: \`clamp(\${minSize}px, \${yInt.toFixed(2)}px + \${(slope * 100).toFixed(2)}vw, \${maxSize}px)\`,
      '--min-size': \`\${minSize}px\`,
      '--max-size': \`\${maxSize}px\`,
      '--fluid-size': \`\${yInt.toFixed(2)}px + \${(slope * 100).toFixed(2)}vw\`
    };
  }, [minSize, maxSize, minVw, maxVw]);
}

// Component usage
function FluidHeading({ children, level = 1 }) {
  const sizes = {
    1: useFluidType(32, 64),
    2: useFluidType(24, 48),
    3: useFluidType(20, 32),
    4: useFluidType(18, 24),
    5: useFluidType(16, 20),
    6: useFluidType(14, 18)
  };

  const Tag = \`h\${level}\`;
  
  return (
    <Tag style={sizes[level]} className="fluid-heading">
      {children}
    </Tag>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Container Queries</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-purple-800 mb-3">CSS Container Queries Implementation</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`/* Container Queries - Component-based responsive design */

/* Set up container context */
.card-container {
  container-type: inline-size;
  container-name: card;
}

.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

.main-content {
  container-type: inline-size;
  container-name: main;
}

/* Card component responsive to its container */
.card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* When card container is wider than 300px */
@container card (min-width: 300px) {
  .card {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .card-image {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }
  
  .card-content {
    flex: 1;
  }
}

/* When card container is wider than 500px */
@container card (min-width: 500px) {
  .card {
    padding: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-description {
    display: block; /* Show full description */
  }
}

/* Navigation responsive to sidebar container */
.navigation {
  list-style: none;
  padding: 0;
}

.nav-item {
  display: block;
}

.nav-link {
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  border-radius: 4px;
}

@container sidebar (min-width: 200px) {
  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .nav-icon {
    display: inline-block;
  }
  
  .nav-text {
    display: inline-block;
  }
}

@container sidebar (max-width: 199px) {
  .nav-text {
    display: none; /* Icon-only navigation */
  }
  
  .nav-link {
    justify-content: center;
  }
}

/* Advanced container query combinations */
@container main (min-width: 600px) and (min-height: 400px) {
  .hero-section {
    min-height: 60vh;
    display: flex;
    align-items: center;
  }
}

/* Container query with aspect ratio */
@container card (aspect-ratio > 1.5) {
  .card {
    flex-direction: row;
  }
}

@container card (aspect-ratio <= 1.5) {
  .card {
    flex-direction: column;
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h4 className="font-semibold text-orange-800 mb-3">React Container Query Hook</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// React hook for container queries
import { useState, useEffect, useRef } from 'react';

function useContainerQuery(query) {
  const [matches, setMatches] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use ResizeObserver to watch container size
    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries[0];
      const { inlineSize, blockSize } = entry.contentBoxSize[0];
      
      // Parse and evaluate query
      const result = evaluateContainerQuery(query, {
        width: inlineSize,
        height: blockSize
      });
      
      setMatches(result);
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [query]);

  return [elementRef, matches];
}

function evaluateContainerQuery(query, dimensions) {
  // Simple query parser (extend as needed)
  const { width, height } = dimensions;
  
  if (query.includes('min-width:')) {
    const minWidth = parseInt(query.match(/min-width:\s*(\d+)/)[1]);
    return width >= minWidth;
  }
  
  if (query.includes('max-width:')) {
    const maxWidth = parseInt(query.match(/max-width:\s*(\d+)/)[1]);
    return width <= maxWidth;
  }
  
  return false;
}

// Component using container query
function ResponsiveCard({ title, content, image }) {
  const [containerRef, isWide] = useContainerQuery('min-width: 400px');
  const [, isTall] = useContainerQuery('min-height: 200px');

  return (
    <div 
      ref={containerRef}
      className={\`card \${isWide ? 'card-horizontal' : 'card-vertical'}\`}
    >
      {image && (
        <img 
          src={image} 
          alt=""
          className={isWide ? 'card-image-side' : 'card-image-top'}
        />
      )}
      
      <div className="card-content">
        <h3 className={isWide ? 'text-lg' : 'text-base'}>{title}</h3>
        <p className={isTall ? 'full-content' : 'truncated'}>
          {content}
        </p>
      </div>
    </div>
  );
}

// Layout component with container context
function CardGrid({ cards }) {
  return (
    <div className="grid auto-fit-300">
      {cards.map(card => (
        <div key={card.id} className="card-container">
          <ResponsiveCard {...card} />
        </div>
      ))}
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">CSS Functions: clamp(), min(), max()</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Advanced CSS Function Usage</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`/* CSS Functions for Dynamic Layouts */

/* 1. CLAMP() - Responsive values with bounds */
.container {
  /* Width between 320px and 1200px, based on viewport */
  width: clamp(320px, 90vw, 1200px);
  
  /* Responsive padding */
  padding: clamp(1rem, 4vw, 3rem);
  
  /* Fluid margins */
  margin: clamp(0.5rem, 2vw, 2rem) auto;
}

.responsive-grid {
  /* Grid gap that scales with container */
  gap: clamp(0.5rem, 2vw, 2rem);
  
  /* Column width with min/max constraints */
  grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 30vw, 350px), 1fr));
}

/* 2. MIN() - Take the smaller value */
.flexible-width {
  /* Will be 50% of parent OR 600px, whichever is smaller */
  width: min(50%, 600px);
  
  /* Responsive max-width */
  max-width: min(90vw, 1200px);
}

.sidebar {
  /* Sidebar width: 25% of viewport OR 300px, whichever is smaller */
  width: min(25vw, 300px);
  min-width: min(200px, 20vw); /* But never smaller than 200px or 20vw */
}

/* 3. MAX() - Take the larger value */
.min-touch-target {
  /* Touch targets should be at least 44px */
  min-height: max(44px, 3rem);
  min-width: max(44px, 3rem);
}

.readable-line-length {
  /* Optimal reading width, but at least 20ch */
  width: max(20ch, min(65ch, 90vw));
}

/* 4. Combining functions for advanced layouts */
.hero-section {
  /* Dynamic height based on viewport, with constraints */
  height: clamp(
    max(300px, 40vh), /* Minimum: larger of 300px or 40vh */
    50vh + 10vw,     /* Preferred: 50vh + 10vw */
    min(800px, 90vh) /* Maximum: smaller of 800px or 90vh */
  );
  
  /* Responsive font size with multiple constraints */
  font-size: clamp(
    max(1.2rem, 4vw), /* Never smaller than 1.2rem or 4vw */
    2rem + 2vw,      /* Preferred scaling */
    min(4rem, 10vh)  /* Never larger than 4rem or 10vh */
  );
}

/* 5. Complex responsive spacing system */
.section {
  /* Vertical rhythm that adapts to screen size */
  margin-top: clamp(
    max(2rem, 5vh),  /* Minimum spacing */
    4rem + 3vh,     /* Base + viewport adjustment */
    min(8rem, 12vh) /* Maximum spacing */
  );
  
  /* Responsive inner spacing */
  padding: clamp(1rem, 4vw, 3rem) clamp(1rem, 5vw, 4rem);
}

/* 6. Intrinsic web design patterns */
.card-grid {
  display: grid;
  gap: clamp(1rem, 3vw, 2rem);
  grid-template-columns: repeat(
    auto-fit, 
    minmax(
      clamp(280px, 35vw, 400px), /* Card width adapts to viewport */
      1fr
    )
  );
}

.flexible-image {
  width: clamp(
    min(200px, 50vw),    /* Minimum: smaller of 200px or half viewport */
    75vw,               /* Preferred: 75% of viewport */
    max(600px, 80vw)    /* Maximum: larger of 600px or 80% viewport */
  );
  height: auto;
}

/* 7. Responsive typography with multiple factors */
.display-text {
  font-size: clamp(
    max(1.5rem, 6vw),          /* Minimum readable size */
    calc(2rem + 4vw + 1vh),    /* Scale with both width and height */
    min(6rem, 15vw, 20vh)      /* Multiple maximum constraints */
  );
  
  line-height: clamp(0.9, 0.8 + 0.4vw, 1.2);
  letter-spacing: clamp(-0.05em, -0.02em + -0.5vw, -0.1em);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-emerald-800 font-semibold mb-2">🚀 Advanced Responsive Tips</h3>
        <ul className="text-emerald-700 space-y-1 text-sm">
          <li>• Use container queries for component-level responsiveness</li>
          <li>• Combine CSS functions for complex adaptive layouts</li>
          <li>• Create fluid systems that work across all screen sizes</li>
          <li>• Test with both width AND height changes</li>
          <li>• Consider user preferences (reduce motion, high contrast)</li>
        </ul>
      </div>
    </div>
  );
}