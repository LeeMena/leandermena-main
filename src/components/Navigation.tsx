import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pre-opening', label: 'Pre-Opening' },
  { href: '/experience', label: 'Experience' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

interface Props {
  onBookCall: () => void
}

export default function Navigation({ onBookCall }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-[#2a2a2a]'
          : 'bg-[#0a0a0a] border-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="font-display text-lg font-bold text-[#e8e8e8] group-hover:text-[#b8a080] transition-colors">
              Leander Mena
            </span>
            <span className="text-[11px] font-medium tracking-wide text-[#888888]">
              Hospitality & F&B Operations
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? 'text-[#b8a080]'
                    : 'text-[#888888] hover:text-[#e8e8e8]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={onBookCall}
              className="btn btn-primary text-xs"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#e8e8e8]"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-[#2a2a2a]">
            <div className="flex flex-col gap-3 pt-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`text-sm font-medium py-1 ${
                    pathname === l.href
                      ? 'text-[#b8a080]'
                      : 'text-[#888888] hover:text-[#e8e8e8]'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              {/* fix: w-full on mobile so button doesn't overflow at 320px */}
              <button
                onClick={() => {
                  onBookCall()
                  setOpen(false)
                }}
                className="btn btn-primary text-xs mt-2 w-full"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
