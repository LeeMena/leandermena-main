import { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface SEO {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

interface LayoutProps {
  children: ReactNode;
  seo?: SEO;
}

export default function Layout({ children, seo }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (seo?.title) document.title = seo.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && seo?.description) desc.setAttribute('content', seo.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://www.leandermena.com${location.pathname}`);
    window.scrollTo(0, 0);
  }, [location.pathname, seo]);

  return (
    <div className="min-h-screen bg-luxury-black flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
