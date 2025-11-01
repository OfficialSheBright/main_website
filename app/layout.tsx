import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'SheBright - Empowering Education Through Technology',
  description: 'SheBright bridges the gap between education and industry by providing modern labs, certified trainers, and skill development programs to Tier-II & Tier-III institutions across India.',
  keywords: 'education technology, skill development, certified training, lab setup, industry collaboration, NSDC, PMKVY, startup india',
  authors: [{ name: 'SheBright Team' }],
  openGraph: {
    title: 'SheBright - Empowering Education Through Technology',
    description: 'Bridging the gap between education and industry with modern technology and certified training programs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SheBright - Empowering Education Through Technology',
    description: 'Bridging the gap between education and industry with modern technology and certified training programs.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ca5b8e" />
      </head>
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}