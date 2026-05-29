import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface SEO {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function Layout({ children, seo }: { children: React.ReactNode; seo?: SEO }) {
  useEffect(() => {
    if (seo?.title) document.title = seo.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && seo?.description) desc.setAttribute('content', seo.description);
  }, [seo]);

  return (
    <div className="min-h-screen bg-luxury-black flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
