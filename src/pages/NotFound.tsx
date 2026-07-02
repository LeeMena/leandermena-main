import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="This page doesn't exist. Return to Leander Mena's homepage or explore F&B consulting services."
        path="/404"
      />
      <section className="relative overflow-hidden" style={{ minHeight: '100dvh' }}>
        {/* Background image — reuses hero asset */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/landing-hero.jpg)' }}
        />
        {/* Gradient: strong dark base, lighter top for atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.45) 100%)',
          }}
        />

        <div className="container relative z-10" style={{ paddingBlock: 'clamp(6rem,14vw,12rem)' }}>
          {/* Oversized faded 404 — decorative depth */}
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(6rem,18vw,14rem)',
              fontWeight: 800,
              lineHeight: 1,
              color: 'rgba(184,160,128,0.07)',
              letterSpacing: '-0.04em',
              userSelect: 'none',
              marginBottom: '-1.5rem',
            }}
          >
            404
          </div>

          <span
            style={{
              display: 'inline-block',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: '0.75rem',
            }}
          >
            This table isn&rsquo;t set
          </span>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2rem,4vw,3.25rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: '#fff',
              maxWidth: '22ch',
              marginBottom: '1rem',
            }}
          >
            But we can find you one.
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(184,184,184,0.85)',
              maxWidth: '42ch',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            The page you&rsquo;re looking for may have moved or never existed.
            Head back home or reach out directly.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Leander
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
