import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@/context/ThemeProvider'

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

function BrandMark() {
  return (
    <img
      src="/favicon-96x96.png"
      alt="Leander Mena"
      width={42}
      height={42}
      style={{
        borderRadius: '0.2rem',
        boxShadow: '0 8px 30px rgba(41,31,20,0.18)',
        flexShrink: 0,
        display: 'block',
      }}
    />
  )
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        color: 'var(--color-text-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 180ms ease, color 180ms ease, border-color 180ms ease',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.background = 'var(--color-surface-raised)'
        el.style.color = 'var(--color-text)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.background = 'var(--color-surface)'
        el.style.color = 'var(--color-text-muted)'
      }}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
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
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 300ms ease',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        background: scrolled ? 'color-mix(in srgb, var(--color-bg) 95%, transparent)' : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container">
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '0.75rem 0' }}>

          {/* Brand lockup */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
            aria-label="Leander Mena — home"
          >
            <BrandMark />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, gap: '2px' }}>
              <strong style={{ fontSize: '0.875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text)', fontWeight: 700, transition: 'color 180ms ease' }}>
                Leander Mena
              </strong>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                Hospitality&nbsp;|&nbsp;F&amp;B Operations Consulting
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div style={{ display: 'none' }} className="md-nav-desktop">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 180ms ease',
                  color: pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
                    ? 'var(--color-primary)'
                    : 'var(--color-text-muted)',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side: theme toggle + CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggleButton />
            <button
              onClick={onBookCall}
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', fontWeight: 800, display: 'none' }}
              id="nav-cta-desktop"
            >
              Let&rsquo;s Talk
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                marginRight: '-0.5rem',
                color: 'var(--color-text)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              id="nav-hamburger"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          inset: 0,
          top: '57px',
          zIndex: 40,
          background: 'var(--color-bg)',
          overflowY: 'auto',
        }}>
          <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1.25rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                <BrandMark />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <strong style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text)' }}>Leander Mena</strong>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Hospitality&nbsp;|&nbsp;F&amp;B Operations</span>
                </span>
              </div>
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 180ms ease',
                    color: pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
                      ? 'var(--color-primary)'
                      : 'var(--color-text)',
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => { onBookCall(); setOpen(false) }}
                className="btn btn-primary"
                style={{ marginTop: '1.5rem', width: '100%', fontSize: '0.9rem', fontWeight: 800 }}
              >
                Let&rsquo;s Talk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive nav styles */}
      <style>{`
        @media (min-width: 768px) {
          .md-nav-desktop { display: flex !important; align-items: center; gap: 1.5rem; }
          #nav-cta-desktop { display: inline-flex !important; }
          #nav-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  )
}
