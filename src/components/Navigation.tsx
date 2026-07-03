import { useState, useEffect, useRef } from 'react'
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

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
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
      onFocus={e => { e.currentTarget.style.boxShadow = '0 0 0 2px rgba(184,160,128,0.4)' }}
      onBlur={e => { e.currentTarget.style.boxShadow = 'none' }}
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
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20px',
        height: '20px',
        gap: 0,
        position: 'relative',
      }}
    >
      <span style={{
        display: 'block',
        width: '18px',
        height: '1.5px',
        background: 'currentColor',
        borderRadius: '2px',
        position: 'absolute',
        transition: 'transform 280ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease, top 280ms cubic-bezier(0.16,1,0.3,1)',
        top: open ? '50%' : '30%',
        transform: open ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%) rotate(0deg)',
      }} />
      <span style={{
        display: 'block',
        width: '18px',
        height: '1.5px',
        background: 'currentColor',
        borderRadius: '2px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        transition: 'opacity 180ms ease, transform 180ms ease',
        opacity: open ? 0 : 1,
        transformOrigin: 'center',
      }} />
      <span style={{
        display: 'block',
        width: '18px',
        height: '1.5px',
        background: 'currentColor',
        borderRadius: '2px',
        position: 'absolute',
        transition: 'transform 280ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease, top 280ms cubic-bezier(0.16,1,0.3,1)',
        top: open ? '50%' : '70%',
        transform: open ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%) rotate(0deg)',
      }} />
    </span>
  )
}

export default function Navigation({ onBookCall }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (open) {
      const raf = requestAnimationFrame(() => setVisible(true))
      document.body.style.overflow = 'hidden'
      return () => cancelAnimationFrame(raf)
    } else {
      setVisible(false)
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'background 300ms ease, border-color 300ms ease',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        background: scrolled
          ? 'color-mix(in srgb, var(--color-bg) 92%, transparent)'
          : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      <div className="container">
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          padding: '0.5rem 0',
        }}>

          {/* Brand */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', minWidth: 0 }}
            aria-label="Leander Mena - Home"
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

          {/* Desktop links */}
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

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
            <ThemeToggleButton />

            <button
              onClick={onBookCall}
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', fontWeight: 800, display: 'none' }}
              id="nav-cta-desktop"
            >
              Let&rsquo;s Talk
            </button>

            <button
              onClick={() => setOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                marginRight: '-0.25rem',
                color: 'var(--color-text)',
                background: open ? 'var(--color-surface-offset)' : 'none',
                border: '1px solid',
                borderColor: open ? 'var(--color-border)' : 'transparent',
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                flexShrink: 0,
                transition: 'background 200ms ease, border-color 200ms ease',
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              id="nav-hamburger"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 39,
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(2px)',
          opacity: visible ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
        }}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 48,
          transform: visible ? 'translateY(0)' : 'translateY(-8px)',
          opacity: visible ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 320ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease',
          clipPath: 'inset(57px 0 0 0)',
          background: 'var(--color-bg)',
          overflowY: 'auto',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <div style={{ paddingTop: '57px' }}>
          <div style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
            <div className="container" style={{ paddingTop: '0.25rem', paddingBottom: '2.5rem' }}>
              <nav aria-label="Mobile navigation">
                {links.map((l, i) => {
                  const isActive = pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
                  return (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="mobile-nav-link"
                      data-active={isActive ? 'true' : 'false'}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.9rem 0',
                        paddingLeft: isActive ? '0.875rem' : '0',
                        borderBottom: '1px solid var(--color-border)',
                        borderLeft: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: isActive ? 700 : 500,
                        letterSpacing: isActive ? '0.01em' : '0',
                        color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                        transform: visible ? 'translateX(0)' : 'translateX(-6px)',
                        opacity: visible ? 1 : 0,
                        transition: `transform 320ms cubic-bezier(0.16,1,0.3,1) ${i * 28}ms, opacity 260ms ease ${i * 28}ms, color 150ms ease, padding-left 150ms ease, border-color 150ms ease, background 120ms ease`,
                        borderRadius: isActive ? '0 var(--radius-sm) var(--radius-sm) 0' : '0',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                    >
                      <span>{l.label}</span>
                      <svg
                        width="14" height="14" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ opacity: isActive ? 0.6 : 0.25, flexShrink: 0, transition: 'opacity 150ms ease' }}
                      >
                        <path d="M5 3l6 6-6 6"/>
                      </svg>
                    </Link>
                  )
                })}

                <div
                  style={{
                    marginTop: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    transform: visible ? 'translateY(0)' : 'translateY(8px)',
                    opacity: visible ? 1 : 0,
                    transition: `transform 320ms cubic-bezier(0.16,1,0.3,1) ${links.length * 28 + 40}ms, opacity 260ms ease ${links.length * 28 + 40}ms`,
                  }}
                >
                  <button
                    onClick={() => { onBookCall(); setOpen(false) }}
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.04em', justifyContent: 'center' }}
                  >
                    Let&rsquo;s Talk
                  </button>

                  <a
                    href="mailto:leander@leandermena.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '44px',
                      padding: '0.5rem 1rem',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)',
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      transition: 'color 180ms ease, border-color 180ms ease, background 180ms ease',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    leander@leandermena.com
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-nav-desktop { display: flex !important; align-items: center; gap: 1.1rem; }
          #nav-cta-desktop { display: inline-flex !important; }
          #nav-hamburger   { display: none !important; }
        }
        .mobile-nav-link:active {
          background: var(--color-surface-offset) !important;
          color: var(--color-text) !important;
        }
      `}</style>
    </header>
  )
}
