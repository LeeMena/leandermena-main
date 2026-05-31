import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#1e1d16',
        borderBottom: '1px solid rgba(207,165,91,0.18)',
        color: '#cfa55b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        padding: '0.55rem 1rem',
        fontSize: '0.78rem',
        letterSpacing: '0.06em',
        fontWeight: 500,
      }}
    >
      {/* Gold bell icon — mirrors favicon mark */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cfa55b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, opacity: 0.9 }}
        aria-hidden="true"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>

      <span style={{ color: 'rgba(207,165,91,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.7rem' }}>
        Free
      </span>

      <a
        href="/downloads/pre-opening-brand-kit.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#e5c882',
          fontWeight: 700,
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          textDecorationColor: 'rgba(207,165,91,0.35)',
          letterSpacing: '0.04em',
        }}
      >
        The 90-Day Pre-Opening Blueprint
      </a>

      <span style={{ color: 'rgba(207,165,91,0.5)', fontSize: '0.72rem' }}>
        — Download Now
      </span>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        style={{
          position: 'absolute',
          right: '1rem',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(207,165,91,0.45)',
          padding: '0.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 180ms ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#cfa55b')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(207,165,91,0.45)')}
      >
        <X size={13} />
      </button>
    </div>
  )
}
