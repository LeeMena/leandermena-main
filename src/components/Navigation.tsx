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
      width={36}
      height={36}
      style={{
        borderRadius: '0.2rem',
        boxShadow: '0 4px 18px rgba(41,31,20,0.18)',
        flexShrink: 0,
        display: 'block',
      }}
    />
  )
}

// Single theme toggle — always top-right in header, never duplicated in drawer
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        // 44px tap target, visually subtle
        width: '40px',
        height: '40px',
        borderRadius: '999px',
        border: '1px solid var(--color-border)',
        background: isDark ? 'rgba(10,10,10,0.5)' : 'rgba(0,0,0,0.04)',
        color: 'var(--color-text-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 120ms ease',
      }}
      onFocus={e => {
        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(184,160,128,0.4)'
      }}
      onBlur={e => {
        e.currentTarget.style.boxShadow = 'none'
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.background = isDark ? 'rgba(28,28,26,0.9)' : 'rgba(0,0,0,0.08)'
        el.style.borderColor = isDark ? '#3a3a3a' : '#c8c0b4'
        el.style.color = 'var(--color-text)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.background = isDark ? 'rgba(10,10,10,0.5)' : 'rgba(0,0,0,0.04)'
        el.style.borderColor = 'var(--color-border)'
        el.style.color = 'var(--color-text-muted)'
        el.style.boxShadow = 'none'
      }}
    >
      {isDark ? (
        // Sun icon — shown in dark mode to switch to light
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        // Moon icon — shown in light mode to switch to dark
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        transition: 'background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        background: scrolled
          ? 'color-mix(in srgb, var(--color-bg) 92%, transparent)'
          : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        // Safe area for notched iPhones
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      <div className="container">
        {/* ── Tighter nav row — 0.5rem vertical padding on mobile ── */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          padding: '0.5rem 0',
        }}>

          {/* Brand lockup — slightly smaller on mobile */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', minWidth: 0 }}
            aria-label="Leander Mena — home"
          >
            <BrandMark />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, gap: '2px', minWidth: 0 }}>
              <strong style={{
                fontSize: '0.825rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                fontWeight: 700,
                transition: 'color 180ms ease',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                Leander Mena
              </strong>
              <span style={{
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                Hospitality&nbsp;|&nbsp;F&amp;B&nbsp;Consulting
              </span>
            </span>
          </Link>

          {/* Desktop nav links (hidden on mobile) */}
          <div style={{ display: 'none' }} className="md-nav-desktop">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
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

          {/* Right side: theme toggle (always visible) + desktop CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>

            {/* Theme toggle — single instance, always top-right */}
            <ThemeToggleButton />

            {/* Desktop CTA — hidden on mobile */}
            <button
              onClick={onBookCall}
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', fontWeight: 800, display: 'none' }}
              id="nav-cta-desktop"
            >
              Let&rsquo;s Talk
            </button>

            {/* Hamburger — hidden on desktop */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                marginRight: '-0.25rem',
                color: 'var(--color-text)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                flexShrink: 0,
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              id="nav-hamburger"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile drawer — elevated, navigation-only, no utility controls ── */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '57px',
            zIndex: 40,
            background: 'var(--color-bg)',
            overflowY: 'auto',
            // subtle top edge shadow to lift drawer
            boxShadow: 'inset 0 1px 0 var(--color-border)',
          }}
        >
          <div className="container" style={{ paddingTop: '0.5rem', paddingBottom: '2rem' }}>
            <nav aria-label="Mobile navigation">

              {/* Nav links — larger tap targets, active accent bar */}
              {links.map((l) => {
                const isActive = pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
                return (
                  <Link
                    key={l.href}
                    to={l.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.9rem 0',
                      borderBottom: '1px solid var(--color-border)',
                      fontSize: '1rem',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '0.01em',
                      textDecoration: 'none',
                      color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                      transition: 'color 150ms ease',
                      // left accent on active
                      paddingLeft: isActive ? '0.75rem' : '0',
                      borderLeft: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                    }}
                  >
                    {l.label}
                    {/* Chevron */}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35, flexShrink: 0 }}>
                      <path d="M5 3l6 6-6 6"/>
                    </svg>
                  </Link>
                )
              })}

              {/* Primary CTA */}
              <button
                onClick={() => { onBookCall(); setOpen(false) }}
                className="btn btn-primary"
                style={{
                  marginTop: '1.5rem',
                  width: '100%',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                Let&rsquo;s Talk
              </button>

              {/* Secondary: email link */}
              <a
                href="mailto:leander@leandermena.com"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '0.875rem',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
              >
                leander@leandermena.com
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Responsive rules */}
      <style>{`
        @media (min-width: 768px) {
          .md-nav-desktop { display: flex !important; align-items: center; gap: 1.1rem; }
          #nav-cta-desktop { display: inline-flex !important; }
          #nav-hamburger   { display: none !important; }
        }
      `}</style>
    </header>
  )
}
