import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TRUST_ITEMS = [
  { stat: '18+', label: 'Years in Miami Hospitality' },
  { stat: '$12M+', label: 'Revenue Optimized' },
  { stat: '500+', label: 'Team Members Trained' },
  { stat: '40+', label: 'Properties Operated' },
]

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-divider)',
        borderBottom: '1px solid var(--color-divider)',
        padding: 'var(--space-6) 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* fix: elevated client name styling: larger, semibold with separator dots */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-8)',
          }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.stat}
              style={{
                textAlign: 'center',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: 'var(--color-text)',
                marginBottom: 'var(--space-1)',
              }}>{item.stat}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
