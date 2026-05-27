import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-luxury-border bg-luxury-dark">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="flex flex-col gap-1 mb-4">
              <span className="font-display text-luxury-text text-xl">Leander Mena</span>
              <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans">Hospitality &amp; F&amp;B Operations</span>
            </Link>
            <p className="text-luxury-muted text-sm leading-relaxed">
              Fractional F&amp;B leadership and pre-opening consulting for Miami restaurants, hotels, and hospitality groups.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-luxury-muted mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/pre-opening', label: 'Pre-Opening' },
                { href: '/experience', label: 'Experience' },
                { href: '/philosophy', label: 'Philosophy' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="nav-link text-xs">{l.label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-luxury-muted mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/leandermena/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs"
              >
                LinkedIn →
              </a>
              <Link to="/contact" className="nav-link text-xs">Send an Inquiry →</Link>
            </div>
            <div className="mt-6">
              <Link to="/contact" className="btn-gold text-xs px-4 py-2">Work with Leander</Link>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-luxury-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-luxury-muted text-xs">&copy; {year} Leander Mena · Miami, Florida</p>
          <p className="text-luxury-muted text-xs">Fractional F&amp;B Leadership &middot; Pre-Opening Consulting &middot; Operations Recovery</p>
        </div>
      </div>
    </footer>
  )
}
