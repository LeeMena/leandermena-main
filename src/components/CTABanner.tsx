import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function CTABanner({ title, subtitle, primaryCta, secondaryCta }: Props) {
  return (
    <section style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      paddingBlock: 'clamp(3rem, 7vw, 6rem)',
    }}>
      <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: 'var(--space-4)',
          color: 'var(--color-text)',
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          color: 'var(--color-text-muted)',
          maxWidth: '55ch',
          marginInline: 'auto',
          marginBottom: 'var(--space-8)',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={primaryCta.href} className="btn btn-primary">
            {primaryCta.label} <ArrowRight size={16} />
          </Link>
          {secondaryCta && (
            <Link to={secondaryCta.href} className="btn btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
