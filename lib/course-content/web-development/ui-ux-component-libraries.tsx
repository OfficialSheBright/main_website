export default function UIUXComponentLibrariesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">2.5 UI/UX & Component Libraries</h1>
      
      {/* Learning Objectives */}
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">What You'll Master</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Modern CSS frameworks: Tailwind CSS fundamentals</li>
          <li>• Component libraries: Material-UI, Shadcn/UI, Bootstrap</li>
          <li>• Design systems and atomic design principles</li>
          <li>• Creating consistent, accessible UI components</li>
          <li>• Theme customization and dark mode implementation</li>
          <li>• Performance considerations for UI libraries</li>
        </ul>
      </div>

      {/* Tailwind CSS */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tailwind CSS Mastery</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Utility-First CSS Approach</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`<!-- Responsive Card Component -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
  <!-- Image -->
  <div class="relative">
    <img class="w-full h-48 object-cover rounded-t-xl" src="product.jpg" alt="Product">
    <span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
      Sale
    </span>
  </div>
  
  <!-- Content -->
  <div class="p-6">
    <h3 class="text-xl font-bold text-gray-900 mb-2">Premium Headphones</h3>
    <p class="text-gray-600 text-sm mb-4 line-clamp-2">
      High-quality wireless headphones with noise cancellation and premium sound quality.
    </p>
    
    <!-- Price and Rating -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-gray-900">$299</span>
        <span class="text-sm text-gray-500 line-through">$399</span>
      </div>
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
        <span class="text-sm text-gray-600">4.5 (128)</span>
      </div>
    </div>
    
    <!-- Actions -->
    <div class="flex space-x-2">
      <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
        Add to Cart
      </button>
      <button class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>
  </div>
</div>

<!-- Responsive Grid Layout -->
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <!-- Cards go here -->
  </div>
</div>

<!-- Custom Component with Tailwind -->
<div class="relative group">
  <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
  <div class="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
    <span class="flex items-center space-x-5">
      <span class="pr-6 text-gray-100">Premium Feature</span>
    </span>
  </div>
</div>`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Layout Classes</h4>
            <div className="space-y-2 text-sm text-blue-600">
              <div><code className="bg-white px-2 py-1 rounded">flex</code> - Flexbox</div>
              <div><code className="bg-white px-2 py-1 rounded">grid</code> - CSS Grid</div>
              <div><code className="bg-white px-2 py-1 rounded">container</code> - Max-width</div>
              <div><code className="bg-white px-2 py-1 rounded">mx-auto</code> - Center</div>
              <div><code className="bg-white px-2 py-1 rounded">space-x-4</code> - Gap</div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">Responsive Design</h4>
            <div className="space-y-2 text-sm text-green-600">
              <div><code className="bg-white px-2 py-1 rounded">sm:</code> - ≥640px</div>
              <div><code className="bg-white px-2 py-1 rounded">md:</code> - ≥768px</div>
              <div><code className="bg-white px-2 py-1 rounded">lg:</code> - ≥1024px</div>
              <div><code className="bg-white px-2 py-1 rounded">xl:</code> - ≥1280px</div>
              <div><code className="bg-white px-2 py-1 rounded">2xl:</code> - ≥1536px</div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">State Variants</h4>
            <div className="space-y-2 text-sm text-purple-600">
              <div><code className="bg-white px-2 py-1 rounded">hover:</code> - Hover state</div>
              <div><code className="bg-white px-2 py-1 rounded">focus:</code> - Focus state</div>
              <div><code className="bg-white px-2 py-1 rounded">active:</code> - Active state</div>
              <div><code className="bg-white px-2 py-1 rounded">disabled:</code> - Disabled</div>
              <div><code className="bg-white px-2 py-1 rounded">group-hover:</code> - Group hover</div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Libraries */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Modern Component Libraries</h2>
        
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shadcn/UI - Modern React Components</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Installation and setup
npm install @radix-ui/react-dialog @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge

// Button component with variants
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})

// Usage examples
function ButtonExamples() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

// Dialog component
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-orange-800 mb-4">Material-UI (MUI)</h4>
            <div className="bg-white p-3 rounded border text-xs mb-3">
              <pre><code>{`import { Button, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  '&:hover': {
    boxShadow: theme.shadows[8],
  },
}));

function MUIExample() {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="h2">
          Material Design
        </Typography>
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </CardContent>
    </StyledCard>
  );
}`}</code></pre>
            </div>
            <p className="text-sm text-orange-600">Google's Material Design system with comprehensive components.</p>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-indigo-800 mb-4">Bootstrap 5</h4>
            <div className="bg-white p-3 rounded border text-xs mb-3">
              <pre><code>{`<!-- Bootstrap CSS Framework -->
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Responsive Grid -->
<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>`}</code></pre>
            </div>
            <p className="text-sm text-indigo-600">Popular CSS framework with pre-built components and utilities.</p>
          </div>
        </div>
      </section>

      {/* Design Systems */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Design Systems & Atomic Design</h2>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Atomic Design Methodology</h3>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
              <h4 className="font-semibold text-gray-800 mb-1">Atoms</h4>
              <p className="text-xs text-gray-600">Buttons, inputs, labels</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg mx-auto mb-2"></div>
              <h4 className="font-semibold text-gray-800 mb-1">Molecules</h4>
              <p className="text-xs text-gray-600">Search form, card header</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg mx-auto mb-2"></div>
              <h4 className="font-semibold text-gray-800 mb-1">Organisms</h4>
              <p className="text-xs text-gray-600">Header, product grid</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-2"></div>
              <h4 className="font-semibold text-gray-800 mb-1">Templates</h4>
              <p className="text-xs text-gray-600">Page layouts</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2"></div>
              <h4 className="font-semibold text-gray-800 mb-1">Pages</h4>
              <p className="text-xs text-gray-600">Final instances</p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Creating a Design System</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Design tokens (theme.js)
export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
    gray: {
      50: '#f9fafb',
      500: '#6b7280',
      900: '#111827',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
};

// Component library structure
components/
├── atoms/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.stories.js
│   │   └── Button.test.js
│   ├── Input/
│   └── Icon/
├── molecules/
│   ├── SearchBar/
│   ├── Card/
│   └── Modal/
├── organisms/
│   ├── Header/
│   ├── ProductGrid/
│   └── Footer/
└── templates/
    ├── PageLayout/
    └── DashboardLayout/

// Consistent component API
function Button({
  variant = 'primary',
  size = 'md',
  children,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };

  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${disabled ? 'opacity-50 cursor-not-allowed' : ''}\`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner className="mr-2" />}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Practical Project */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🎨 Build Project: E-commerce Product Catalog</h3>
        <div className="bg-white p-4 rounded border mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Create a modern product catalog using:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Tailwind CSS for styling and responsive design</li>
            <li>• Shadcn/UI components for consistent UI elements</li>
            <li>• Atomic design methodology for component organization</li>
            <li>• Dark mode toggle with theme persistence</li>
            <li>• Accessibility features (ARIA labels, keyboard navigation)</li>
            <li>• Performance optimization (lazy loading, image optimization)</li>
          </ul>
        </div>
        
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded">
          <p className="text-emerald-800 text-sm">
            <strong>🎯 Advanced:</strong> Implement animations, micro-interactions, 
            search with filtering, shopping cart functionality, and mobile-first responsive design.
          </p>
        </div>
      </div>
    </div>
  );
}