import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-luxury-border/40">
      <div className="container-luxury py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-display text-lg text-luxury-text tracking-widest mb-4">LEANDER MENA</p>
            <p className="text-sm text-luxury-muted leading-relaxed max-w-xs">
              Fractional F&B operations leadership for Miami restaurants, hotels, and hospitality groups.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {['/about', '/services', '/experience', '/case-studies', '/insights', '/book'].map(href => (
                <Link key={href} to={href}
                  className="text-sm text-luxury-muted hover:text-gold transition-colors capitalize">
                  {href.replace('/', '').replace('-', ' ') || 'Home'}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-5">Contact</p>
            <p className="text-sm text-luxury-muted">Miami, Florida</p>
            <a href="mailto:consulting@leandermena.com"
              className="text-sm text-gold hover:text-gold-light transition-colors block mt-2">
              consulting@leandermena.com
            </a>
          </div>
        </div>
        <div className="border-t border-luxury-border/30 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-luxury-muted/50">
            © {new Date().getFullYear()} Leander Mena. All rights reserved.
          </p>
          <p className="text-xs text-luxury-muted/50">Miami, Florida</p>
        </div>
      </div>
    </footer>
  );
}
