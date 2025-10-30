# SheBright - Educational Technology Platform

A modern B2B solution provider that helps institutions build advanced tech infrastructure, set up AI, Robotics, and Data Labs, and deploy certified trainers aligned with industry needs.

## 🌟 Features

- **Modern Web Application** - Built with Next.js 14+ and TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Authentication System** - Firebase Auth integration
- **Interactive UI** - Dynamic components and smooth animations
- **B2B/B2C Solutions** - Dual-purpose platform for institutions and students
- **ProTrack System** - Learning analytics and progress tracking
- **Contact Management** - Integrated contact forms and communication

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OfficialSheBright/main_website.git
cd main_website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Firebase configuration and other environment variables to `.env.local`.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
main_website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── login/             # Authentication pages
│   ├── signup/            
│   └── protrack/          # ProTrack dashboard
├── components/            # Reusable UI components
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── firebase.ts        # Firebase configuration
├── public/                # Static assets
└── styles/                # Global styles
```

## 🎨 Design System

### Color Palette
- Primary: `#aa6182` (Deep Rose)
- Secondary: `#ca5b8e` (Bright Pink)
- Accent: `#cc6594` (Light Pink)
- Border: `#daabc3` (Muted Pink)
- Background: `#fef0fc` (Very Light Pink)

### Typography
- Font Family: Geist (Next.js optimized)
- Headings: Bold weights for visual hierarchy
- Body: Regular weight for readability

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📱 Key Pages

- **Homepage** (`/`) - Main landing page with hero, services overview
- **About** (`/about`) - Company information and mission
- **Services** (`/services`) - Infrastructure, trainers, maintenance
- **Team** (`/team`) - Meet our certified trainers
- **Contact** (`/contact`) - Get in touch form
- **ProTrack** (`/protrack/*`) - Learning management dashboard

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Components should be functional with hooks
- Use "use client" directive for client components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🏢 About SheBright

SheBright empowers government and private colleges with modern tech infrastructure, AI-driven labs, and hands-on learning environments. We bridge the gap between education and industry, preparing students for the digital era.

---

Built with ❤️ by Ghanshyam Singh || Email: ghanshyam2005singh@gmail.com