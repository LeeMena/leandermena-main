import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pre-opening', label: 'Pre-Opening' },
  { href: '/experience', label: 'Experience' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/products', label: 'Resources' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

interface Props {
  onBookCall: () => void
}

// Brand mark — gold gradient "L" square
function BrandMark() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '42px',
        height: '42px',
        borderRadius: '0.2rem',
        background: 'linear-gradient(145deg, #f1e3c1, #8e7342)',
        display: 'grid',
        placeItems: 'center',
        color: '#111',
        fontWeight: 800,
        fontSize: '1.35rem',
        boxShadow: '0 8px 30px rgba(41,31,20,0.18)',
        lineHeight: 1,
        fontFamily: 'var(--font-display, serif)',
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      L
    </div>
  )
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-[#2a2a2a]'
          : 'bg-[#0a0a0a] border-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between gap-4 py-3">

          {/* Brand lockup */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Leander Mena — home"
          >
            <BrandMark />
            <span className="flex flex-col leading-tight gap-[2px]">
              <strong
                style={{
                  fontSize: '0.875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#e8e8e8',
                  fontWeight: 700,
                  transition: 'color 180ms ease',
                }}
                className="group-hover:text-[#d4b896]"
              >
                Leander Mena
              </strong>
              <span
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                Hospitality&nbsp;|&nbsp;F&amp;B Operations Consulting
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-[#e8e8e8] rounded-md"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-[#0a0a0a] overflow-y-auto">
          <div className="container py-6">
            <div className="flex flex-col">
              {/* Mini brand in mobile menu */}
              <div className="flex items-center gap-3 pb-5 mb-2 border-b border-[#1e1e1e]">
                <BrandMark />
                <span className="flex flex-col gap-[2px]">
                  <strong style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e8e8e8' }}>Leander Mena</strong>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888' }}>Hospitality&nbsp;|&nbsp;F&amp;B Operations</span>
                </span>
              </div>
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`flex items-center py-4 border-b border-[#1e1e1e] text-base font-medium transition-colors ${
                    pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
                      ? 'text-[#b8a080]'
                      : 'text-[#cccccc] hover:text-[#e8e8e8]'
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
                className="btn btn-primary mt-6 w-full text-sm"
              >
                Book a Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
