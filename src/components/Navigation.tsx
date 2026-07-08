import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@/context/ThemeProvider'

const links = [
  { href: '/services', label: 'Work With Me' },
  { href: '/pre-opening', label: 'Pre-Opening' },
  { href: '/products', label: 'Playbooks' },
  { href: '/case-studies', label: 'Results' },
  { href: '/experience', label: 'Experience' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
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
      width={34}
      height={34}
      style={{
        borderRadius: '0',
        boxShadow: 'none',
        flexShrink: 0,
        display: 'block',
        opacity: 0.92,
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
        borderRadius: '0',
        border: '1px solid var(--color-border)',
        background: 'transparent',
        color: 'var(--color-text-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background 200ms ease, color 200ms ease, border-color 200ms ease',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
    >
      {isDark ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      {[{
        top: open ? '50%' : '28%',
        transform: open ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%) rotate(0deg)',
      }, {
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: open ? 0 : 1,
      }, {
        top: open ? '50%' : '72%',
        transform: open ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%) rotate(0deg)',
      }].map((s, i) => (
        <span key={i} style={{
          display: 'block',
          width: '18px',
          height: '1px',
          background: 'currentColor',
          borderRadius: 0,
          position: 'absolute',
          transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease, top 300ms cubic-bezier(0.16,1,0.3,1)',
          ...s,
        }} />
      ))}
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
      document.body.style.touchAction = 'none'
      return () => cancelAnimationFrame(raf)
    } else {
      setVisible(false)
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const headerH = 57

  return (
    <header
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'background 320ms ease, border-color 320ms ease, backdrop-filter 320ms ease',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        background: scrolled
          ? 'color-mix(in oklch, var(--color-bg) 88%, transparent)'
          : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(18px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(1.4)' : 'none',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <div className="container">
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          height: '57px',
        }}>

          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', minWidth: 0 }}
            aria-label="Leander Mena - Home"
          >
            <BrandMark />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, gap: '3px', minWidth: 0 }}>
              <strong style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                Leander Mena
              </strong>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                Hospitality&nbsp;&middot;&nbsp;F&amp;B
              </span>
            </span>
          </Link>

          <div style={{ display: 'none' }} className="md-nav-desktop">
            {links.map((l) => {
              const isActive = pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.10em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'color 200ms ease',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    paddingBottom: '2px',
                    borderBottom: isActive ? '1px solid var(--color-primary)' : '1px solid transparent',
                  }}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <ThemeToggleButton />
            <button
              onClick={onBookCall}
              className="btn btn-primary"
              style={{ fontSize: '0.625rem', fontWeight: 500, display: 'none', letterSpacing: '0.16em' }}
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
                background: open ? 'var(--color-surface-offset)' : 'transparent',
                border: '1px solid',
                borderColor: open ? 'var(--color-border)' : 'transparent',
                cursor: 'pointer',
                borderRadius: '0',
                flexShrink: 0,
                transition: 'background 200ms ease, border-color 200ms ease',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              id="nav-hamburger"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </nav>
      </div>

      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 39,
          background: 'oklch(0.06 0.005 60 / 0.70)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: visible ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 320ms ease',
        }}
        aria-hidden="true"
      />

      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 48,
          transform: visible ? 'translateY(0)' : 'translateY(-6px)',
          opacity: visible ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 340ms cubic-bezier(0.16,1,0.3,1), opacity 260ms ease',
          clipPath: `inset(${headerH}px 0 0 0)`,
          background: 'var(--color-bg)',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 'calc(env(safe-area-inset-bottom) + 2rem)',
        }}
      >
        <div style={{ paddingTop: `${headerH}px` }}>
          <div style={{ borderTop: '1px solid oklch(from var(--color-border) l c h / 0.5)' }}>
            <div className="container" style={{ paddingTop: 'var(--space-3)', paddingBottom: 'var(--space-10)' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.5rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-text-faint)',
                paddingBlock: 'var(--space-5)',
                transform: visible ? 'translateY(0)' : 'translateY(6px)',
                opacity: visible ? 1 : 0,
                transition: 'transform 300ms ease 40ms, opacity 280ms ease 40ms',
              }}>Navigation</p>

              <nav aria-label="Mobile navigation">
                {links.map((l, i) => {
                  const isActive = pathname === l.href || (l.href === '/insights' && pathname.startsWith('/insights'))
                  return (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="mobile-nav-link"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'var(--space-4) 0',
                        borderBottom: '1px solid oklch(from var(--color-border) l c h / 0.40)',
                        textDecoration: 'none',
                        fontFamily: isActive ? 'var(--font-display)' : 'var(--font-body)',
                        fontSize: isActive ? '1.1rem' : '0.875rem',
                        fontWeight: 400,
                        fontStyle: isActive ? 'italic' : 'normal',
                        letterSpacing: isActive ? '0.01em' : '0.06em',
                        textTransform: isActive ? 'none' : 'uppercase',
                        color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                        transform: visible ? 'translateX(0)' : 'translateX(-8px)',
                        opacity: visible ? 1 : 0,
                        transition: `transform 340ms cubic-bezier(0.16,1,0.3,1) ${60 + i * 30}ms, opacity 280ms ease ${60 + i * 30}ms, color 150ms ease`,
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation',
                        minHeight: '52px',
                      }}
                    >
                      <span>{l.label}</span>
                      {isActive ? (
                        <span style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: 'var(--color-primary)',
                          flexShrink: 0,
                        }} />
                      ) : (
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                          style={{ opacity: 0.20, flexShrink: 0 }}>
                          <path d="M4 2l5 5-5 5"/>
                        </svg>
                      )}
                    </Link>
                  )
                })}

                <div
                  style={{
                    marginTop: 'var(--space-8)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                    transform: visible ? 'translateY(0)' : 'translateY(10px)',
                    opacity: visible ? 1 : 0,
                    transition: `transform 340ms cubic-bezier(0.16,1,0.3,1) ${60 + links.length * 30 + 40}ms, opacity 280ms ease ${60 + links.length * 30 + 40}ms`,
                  }}
                >
                  <button
                    onClick={() => { onBookCall(); setOpen(false) }}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.625rem',
                      letterSpacing: '0.20em',
                      minHeight: '52px',
                    }}
                  >
                    Book a Discovery Call
                  </button>

                  <a
                    href="mailto:leander@leandermena.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '48px',
                      padding: 'var(--space-3) var(--space-4)',
                      textAlign: 'center',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.06em',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      border: '1px solid oklch(from var(--color-border) l c h / 0.50)',
                      transition: 'color 200ms ease, border-color 200ms ease',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    leander@leandermena.com
                  </a>

                  <p style={{
                    textAlign: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.5625rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-faint)',
                    marginTop: 'var(--space-2)',
                  }}>Miami, Florida</p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-nav-desktop { display: flex !important; align-items: center; gap: 1.25rem; }
          #nav-cta-desktop { display: inline-flex !important; }
          #nav-hamburger   { display: none !important; }
        }
        .mobile-nav-link:active {
          opacity: 0.6 !important;
        }
      `}</style>
    </header>
  )
}
