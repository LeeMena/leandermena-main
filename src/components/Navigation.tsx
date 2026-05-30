import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pre-opening', label: 'Pre-Opening' },
  { href: '/experience', label: 'Experience' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/insights', label: 'Insights' },
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
          <Link to="/" className="flex items-center gap-3 group">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 transition-opacity group-hover:opacity-80">
              <rect width="32" height="32" fill="#0a0a0a"/>
              <path d="M5 8v16h7" stroke="#b8a080" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
              <path d="M15 8v16M15 8l5 7 5-7M25 8v16" stroke="#b8a080" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
              <rect x="0.5" y="0.5" width="31" height="31" stroke="#b8a080" strokeOpacity="0.35" strokeWidth="0.75"/>
            </svg>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-[#e8e8e8] group-hover:text-[#b8a080] transition-colors">
                Leander Mena
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#888888]">
                Hospitality &amp; F&amp;B Operations
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
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

        {open && (
          <div className="md:hidden pb-4 border-t border-[#2a2a2a]">
            <div className="flex flex-col gap-3 pt-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`text-sm font-medium py-1 ${
                    pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
                      ? 'text-[#b8a080]'
                      : 'text-[#888888] hover:text-[#e8e8e8]'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
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
