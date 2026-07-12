import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Leander Mena"
        description="The page you're looking for doesn't exist. Return to the Leander Mena homepage."
        path="/404"
        noindex
      />
      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0905',
          overflow: 'hidden',
        }}
      >
        {/* Background image: reuses the home hero asset (already cached for
            most visitors, and avoids shipping a duplicate encode) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/landing-hero.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0a0905 0%, rgba(10,9,5,0.6) 50%, #0a0905 100%)' }} />
        </div>

        {/* Oversized faded 404: decorative depth */}
        <div style={{
          position: 'absolute',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(12rem, 40vw, 32rem)',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.06em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 1,
        }}>404</div>

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: 'var(--space-8)' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.5625rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-6)',
          }}>Page Not Found</p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: '#ffffff',
            marginBottom: 'var(--space-6)',
          }}>
            Lost in the weeds.
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '38ch',
            lineHeight: 1.7,
            margin: '0 auto var(--space-10)',
          }}>
            That page doesn't exist. Let's get you back to something useful.
          </p>

          <Link to="/" className="btn btn-primary" style={{ fontSize: '0.625rem', letterSpacing: '0.18em' }}>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
