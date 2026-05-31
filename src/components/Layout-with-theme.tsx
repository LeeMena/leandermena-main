import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CommandMenu from './CommandMenu';
import ThemeToggle from './ThemeToggle';
import { Toaster } from '@/components/ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
}

export default function Layout({ children, seo }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (seo?.title) {
      document.title = seo.title;
    }
    if (seo?.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.description);
      }
    }
  }, [seo]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CommandMenu />
      {/* Theme toggle - fixed position, top-right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle variant="icon" />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
