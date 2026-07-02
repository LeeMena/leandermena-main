import { useState, useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const SESSION_KEY = 'announcement_dismissed_v1'

export default function AnnouncementBar() {
  // Start hidden to avoid flash; reveal after checking sessionStorage
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(SESSION_KEY)
      if (!dismissed) setVisible(true)
    } catch {
      // sessionStorage blocked (unlikely on real site) — just show it
      setVisible(true)
    }
    setMounted(true)
  }, [])

  const dismiss = () => {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      setExiting(false)
      try { sessionStorage.setItem(SESSION_KEY, '1') } catch { /* ignore */ }
    }, 380)
  }

  if (!mounted || !visible) return null

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 50,
        width: '100%',
        background: '#171717',
        borderBottom: '1px solid rgba(207,165,91,0.2)',
        // Slide down on enter, slide up on exit
        animation: exiting
          ? 'ann-exit 380ms cubic-bezier(0.4,0,1,1) forwards'
          : 'ann-enter 420ms cubic-bezier(0.16,1,0.3,1) forwards',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold glow edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6rem', background: 'linear-gradient(to right, rgba(207,165,91,0.1), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '6rem', background: 'linear-gradient(to left, rgba(207,165,91,0.1), transparent)', pointerEvents: 'none' }} />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '0.6rem 3rem',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.375rem',
            background: 'rgba(207,165,91,0.1)',
            border: '1px solid rgba(207,165,91,0.2)',
            padding: '0.25rem 0.625rem',
            borderRadius: '999px',
          }}
          className="ann-badge"
        >
          <Sparkles style={{ width: '0.75rem', height: '0.75rem', color: '#CFA55B' }} />
          <span style={{ fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#CFA55B' }}>Free Resource</span>
        </div>

        {/* Link */}
        <Link
          to="/blueprint"
          style={{
            fontSize: '0.8125rem',
            color: '#F2EDE6',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 200ms ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#CFA55B' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F2EDE6' }}
        >
          The 90-Day Pre-Opening Blueprint
        </Link>

        <span style={{ color: 'rgba(207,165,91,0.6)', fontSize: '0.75rem' }} className="ann-arrow">→</span>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            background: 'none',
            color: 'rgba(242,237,230,0.4)',
            cursor: 'pointer',
            transition: 'color 200ms ease, background 200ms ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.color = '#F2EDE6'
            el.style.background = 'rgba(242,237,230,0.1)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.color = 'rgba(242,237,230,0.4)'
            el.style.background = 'none'
          }}
        >
          <X style={{ width: '0.875rem', height: '0.875rem' }} />
        </button>
      </div>

      <style>{`
        @keyframes ann-enter {
          from { max-height: 0; opacity: 0; }
          to   { max-height: 60px; opacity: 1; }
        }
        @keyframes ann-exit {
          from { max-height: 60px; opacity: 1; }
          to   { max-height: 0; opacity: 0; }
        }
        @media (min-width: 640px) {
          .ann-badge { display: inline-flex !important; }
          .ann-arrow { display: inline !important; }
        }
        .ann-arrow { display: none; }
      `}</style>
    </div>
  )
}
