import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        paddingBlock: 'clamp(var(--space-12), 6vw, var(--space-20))',
        paddingBottom: 'calc(clamp(var(--space-12), 6vw, var(--space-20)) + env(safe-area-inset-bottom))',
      }}
    >
      <div className="container">

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-5)',
            padding: 'clamp(var(--space-6), 4vw, var(--space-8)) clamp(var(--space-6), 4vw, var(--space-10))',
            background: 'var(--color-surface-offset)',
            border: '1px solid oklch(from var(--color-border) l c h / 0.60)',
            marginBottom: 'clamp(var(--space-10), 5vw, var(--space-16))',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.5625rem',
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-2)',
            }}>Free Resource</p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: 400,
              color: 'var(--color-text)',
              letterSpacing: '-0.01em',
              marginBottom: 'var(--space-1)',
            }}>
              The 90-Day Pre-Opening Blueprint
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
            }}>
              The exact framework for opening on time and on budget.
            </p>
          </div>
          <a
            href="/assets/pre-opening-blueprint-ebook.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flexShrink: 0, gap: 'var(--space-2)', minHeight: '48px' }}
          >
            <Download size={13} /> Download Free
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
            gap: 'clamp(var(--space-8), 4vw, var(--space-12))',
            marginBottom: 'clamp(var(--space-10), 5vw, var(--space-16))',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-4)',
            }}>
              Leander Mena
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.65,
              maxWidth: '28ch',
              marginBottom: 'var(--space-4)',
            }}>
              F&amp;B operations consultant. Available nationwide, on-site + remote. Home base: Miami, Florida.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a
                href="tel:+17865425517"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
              >
                (786) 542-5517
              </a>
              <a
                href="mailto:letstalk@leandermena.com"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
              >
                letstalk@leandermena.com
              </a>
            </div>
          </div>

          {[{
            heading: 'Services',
            links: [
              { label: 'F&B Operations Consulting', to: '/services' },
              { label: 'Pre-Opening Consulting', to: '/services' },
              { label: 'Operations Recovery', to: '/services' },
              { label: 'Book a Call', to: '/contact' },
            ],
          }, {
            heading: 'Resources',
            links: [
              { label: 'Digital Products', to: '/products' },
              { label: 'Case Studies', to: '/case-studies' },
              { label: 'Who I Work With', to: '/industries' },
              { label: 'Insights', to: '/insights' },
              { label: 'About', to: '/about' },
              { label: 'Miami Consulting', to: '/miami-restaurant-consultant' },
            ],
          }].map((col) => (
            <div key={col.heading}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.5625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-faint)',
                marginBottom: 'var(--space-5)',
              }}>{col.heading}</p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="footer-link"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      transition: 'color 200ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      paddingBlock: '0.25rem',
                      minHeight: '44px',
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid oklch(from var(--color-border) l c h / 0.40)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.625rem',
            letterSpacing: '0.08em',
            color: 'var(--color-text-faint)',
          }}>
            &copy; {year} Leander Mena. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.625rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-faint)',
          }}>
            Miami, Florida · Available Nationwide
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover  { color: var(--color-text) !important; }
        .footer-link:active { color: var(--color-primary) !important; opacity: 0.8; }
      `}</style>
    </footer>
  )
}
