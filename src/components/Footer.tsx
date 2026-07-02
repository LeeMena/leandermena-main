import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        paddingBlock: 'var(--space-16)',
      }}
    >
      <div className="container">

        {/* Blueprint footer CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            padding: 'var(--space-6) var(--space-8)',
            background: 'var(--color-surface-offset)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--space-12)',
          }}
        >
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-1)' }}>Free Resource</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--color-text)', fontWeight: 600 }}>
              The 90-Day Pre-Opening Blueprint
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
              The exact framework for opening on time and on budget.
            </p>
          </div>
          <a
            href="/assets/pre-opening-blueprint-ebook.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flexShrink: 0, gap: 'var(--space-2)' }}
          >
            <Download size={15} /> Download Free
          </a>
        </div>

        {/* Footer links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-10)',
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-text)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Leander Mena
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.65, maxWidth: '26ch' }}>
              Fractional F&amp;B Operations Leader based in Miami, Florida.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: 'var(--space-4)' }}>Services</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {[
                { label: 'Fractional F&B Leadership', to: '/services' },
                { label: 'Pre-Opening Consulting', to: '/services' },
                { label: 'Operations Recovery', to: '/services' },
                { label: 'Book a Call', to: '/contact' },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="footer-link"
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 180ms ease',
                    display: 'inline-block',
                    paddingBlock: '0.15rem',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: 'var(--space-4)' }}>Resources</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {[
                { label: 'Digital Products', to: '/products' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Insights', to: '/insights' },
                { label: 'About', to: '/about' },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="footer-link"
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 180ms ease',
                    display: 'inline-block',
                    paddingBlock: '0.15rem',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-3)',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>
            © {year} Leander Mena. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>
            Miami, Florida
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--color-text) !important; }
        .footer-link:active { color: var(--color-primary) !important; }
      `}</style>
    </footer>
  )
}
