import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pre-opening', label: 'Pre-Opening' },
  { href: '/experience', label: 'Experience' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-luxury-dark/95 backdrop-blur-md border-b border-luxury-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight group">
          <span className="font-display text-luxury-text text-lg font-medium group-hover:text-gold transition-colors duration-200">Leander Mena</span>
          <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans">Hospitality &amp; F&amp;B Operations</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                'nav-link',
                (location.pathname === l.href ||
                  (l.href !== '/' && location.pathname.startsWith(l.href)))
                  ? 'text-gold'
                  : ''
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span className={cn('block h-px w-6 bg-luxury-text transition-all duration-300', open && 'rotate-45 translate-y-2')} />
          <span className={cn('block h-px w-6 bg-luxury-text transition-all duration-300', open && 'opacity-0 scale-x-0')} />
          <span className={cn('block h-px w-6 bg-luxury-text transition-all duration-300', open && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-luxury-dark/98 backdrop-blur-md border-t border-luxury-border px-6 py-6 flex flex-col gap-4 animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                'nav-link text-base py-1',
                location.pathname === l.href && 'text-gold'
              )}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 pt-4 border-t border-luxury-border">
            <Link to="/contact" className="btn-gold w-full justify-center">Get in Touch</Link>
          </div>
        </div>
      )}
    </header>
  )
}
