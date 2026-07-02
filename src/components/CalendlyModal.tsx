import { useEffect, useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function CalendlyModal({ isOpen, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        // Fade in
        animation: 'calendly-backdrop-in 220ms ease forwards',
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '680px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'calendly-panel-in 280ms cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '2px' }}>Discovery Call</p>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
              Book a 30-Minute Call
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface-offset)',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 180ms ease, color 180ms ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = 'var(--color-surface-dynamic)'
              el.style.color = 'var(--color-text)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = 'var(--color-surface-offset)'
              el.style.color = 'var(--color-text-muted)'
            }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>

        {/* Calendly iframe */}
        <div style={{ background: 'var(--color-bg)' }}>
          <iframe
            src="https://calendly.com/leandermena/30min"
            width="100%"
            height="580"
            frameBorder="0"
            title="Book a 30-minute discovery call with Leander Mena"
            style={{ display: 'block' }}
          />
        </div>

        {/* Footer fallback */}
        <p
          style={{
            padding: '0.75rem 1.25rem',
            fontSize: '0.75rem',
            color: 'var(--color-text-muted)',
            borderTop: '1px solid var(--color-border)',
            background: 'var(--color-surface)',
          }}
        >
          Having trouble?{' '}
          <a
            href="mailto:leander@leandermena.com"
            style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
          >
            leander@leandermena.com
          </a>
        </p>
      </div>

      <style>{`
        @keyframes calendly-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes calendly-panel-in {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}
