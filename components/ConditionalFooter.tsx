'use client';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Hide footer on ProTrack pages
  if (pathname.startsWith('/protrack/')) {
    return null;
  }
  
  return <Footer />;
}