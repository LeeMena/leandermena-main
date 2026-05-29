import { Link } from 'react-router-dom'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pre-opening', label: 'Pre-Opening' },
  { href: '/experience', label: 'Experience' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="flex flex-col leading-tight mb-4">
              <span className="font-display text-lg font-bold text-[#e8e8e8]">Leander Mena</span>
              <span className="text-[11px] text-[#888888]">Hospitality & F&B Operations</span>
            </Link>
            <p className="text-sm text-[#888888] max-w-xs">
              Fractional F&B leadership and pre-opening consulting for Miami restaurants,
              hotels, and hospitality groups.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e8e8e8] mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-sm text-[#888888] hover:text-[#b8a080] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e8e8e8] mb-4">
              Connect
            </h4>
            <Link
              to="/contact"
              className="text-sm text-[#888888] hover:text-[#b8a080] transition-colors block mb-2"
            >
              Work with Leander
            </Link>
            <a
              href="https://www.linkedin.com/in/leandermena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888888] hover:text-[#b8a080] transition-colors block mb-2"
            >
              LinkedIn
            </a>
            <a
              href="mailto:leander@leandermena.com"
              className="text-sm text-[#888888] hover:text-[#b8a080] transition-colors block"
            >
              leander@leandermena.com
            </a>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#888888]">
          <p>© {year} Leander Mena · Miami, Florida</p>
          <p>Fractional F&B Leadership · Pre-Opening Consulting · Operations Recovery</p>
        </div>
      </div>
    </footer>
  )
}
