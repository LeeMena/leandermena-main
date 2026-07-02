import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '/services', desc: 'Fractional leadership, pre-opening, operations recovery' },
  { label: 'Case Studies', href: '/case-studies', desc: 'Real results from Miami F&B engagements' },
  { label: 'Insights', href: '/insights', desc: '10 articles on operations, labor, and openings' },
  { label: 'Contact', href: '/contact', desc: 'Start a conversation' },
]

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ minHeight: '100dvh' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/landing-hero.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.97) 60%)' }} />

        <div className="container relative z-10" style={{ paddingBlock: 'clamp(6rem,13vw,11rem)', maxWidth: 'var(--content-narrow)' }}>

          <span style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: 600, display: 'block', marginBottom: 'var(--space-4)' }}>404</span>

          <h1 className="font-display" style={{ fontSize: 'clamp(2.25rem,5vw,3.5rem)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.01em', color: '#ffffff', marginBottom: 'var(--space-4)', maxWidth: '18ch' }}>
            This page does not exist.
          </h1>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '44ch', marginBottom: 'var(--space-10)' }}>
            It may have moved or never existed. The rest of the site is below.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: 'var(--space-5) 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                  transition: 'opacity 150ms ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <div>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: '0.2rem' }}>{link.label}</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>{link.desc}</span>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-10)' }}>
            <Link to="/" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
