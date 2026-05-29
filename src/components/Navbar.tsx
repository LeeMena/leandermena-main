import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Experience', href: '/experience' },
  { label: 'Pre-Opening', href: '/pre-opening' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Insights', href: '/insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-luxury-black/95 backdrop-blur-sm border-b border-luxury-border/50' : 'bg-transparent'
    }`}>
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-xl text-luxury-text tracking-wider">Leander Mena</span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-gold">Miami Hospitality</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                  location.pathname === link.href ? 'text-gold' : 'text-luxury-muted hover:text-luxury-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-[10px] py-3 px-6">
              Book a Call
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-luxury-text p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxury-dark border-t border-luxury-border/50"
          >
            <nav className="container-luxury py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-[11px] tracking-[0.15em] uppercase py-2 ${
                    location.pathname === link.href ? 'text-gold' : 'text-luxury-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-2 text-center">
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
