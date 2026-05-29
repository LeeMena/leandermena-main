import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/experience', label: 'Experience' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-luxury-black/95 backdrop-blur-md border-b border-luxury-border/60' : 'bg-transparent'
    }`}>
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display text-lg text-luxury-text tracking-widest">
            LEANDER MENA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-[11px] tracking-[0.15em] uppercase transition-colors ${
                  location.pathname === l.href ? 'text-gold' : 'text-luxury-muted hover:text-luxury-text'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/book" className="btn-primary">
              Book a Call
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-luxury-text p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-luxury-black/98 border-t border-luxury-border">
          <nav className="container-luxury py-6 flex flex-col gap-5">
            {links.map(l => (
              <Link key={l.href} to={l.href}
                className="text-xs tracking-[0.15em] uppercase text-luxury-muted hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
            <Link to="/book" className="btn-primary text-center mt-2">Book a Call</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
