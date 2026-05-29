import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Experience', href: '/experience' },
  { label: 'Pre-Opening', href: '/pre-opening' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-luxury-border/30">
      <div className="container-luxury py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-serif text-xl text-luxury-text tracking-wider">Leander Mena</span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-gold">Miami Hospitality</span>
            </Link>
            <p className="text-sm text-luxury-muted leading-relaxed max-w-xs">
              Fractional F&B operations leadership for Miami restaurants, hotels, and new openings.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-luxury-muted/60 mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {links.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-luxury-muted hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-luxury-muted/60 mb-5">Contact</p>
            <a
              href="mailto:consulting@leandermena.com"
              className="flex items-center gap-2 text-sm text-luxury-muted hover:text-gold transition-colors duration-200 mb-4"
            >
              <Mail className="w-4 h-4" />
              consulting@leandermena.com
            </a>
            <p className="text-sm text-luxury-muted">Miami, Florida</p>
            <Link to="/contact" className="btn-primary mt-6 text-[10px] py-3">
              Book a Discovery Call
            </Link>
          </div>
        </div>

        <div className="divider-gold mt-12 mb-8" style={{marginLeft: 0}} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-luxury-muted/50">
            &copy; {new Date().getFullYear()} Leander Mena. All rights reserved.
          </p>
          <p className="text-[11px] text-luxury-muted/50">
            Miami, FL &nbsp;&middot;&nbsp; leandermena.com
          </p>
        </div>
      </div>
    </footer>
  );
}
