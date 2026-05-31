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
        background: 'linear-gradient(90deg, #b8860b 0%, #cfa55b 40%, #e5c96a 60%, #cfa55b 100%)',
        borderBottom: '1px solid #a87830',
        color: '#1a1500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        padding: '0.55rem 1rem',
        fontSize: '0.78rem',
        letterSpacing: '0.06em',
        fontWeight: 600,
      }}
    >
      {/* Bell icon — dark on gold, mirrors favicon */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1a1500"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, opacity: 0.85 }}
        aria-hidden="true"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>

      <span style={{ color: 'rgba(26,21,0,0.6)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.68rem', fontWeight: 700 }}>
        Free
      </span>

      <a
        href="/downloads/pre-opening-brand-kit.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#1a1500',
          fontWeight: 700,
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          textDecorationColor: 'rgba(26,21,0,0.3)',
          letterSpacing: '0.03em',
        }}
      >
        The 90-Day Pre-Opening Blueprint
      </a>

      <span style={{ color: 'rgba(26,21,0,0.55)', fontSize: '0.72rem' }}>
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
          color: 'rgba(26,21,0,0.45)',
          padding: '0.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 180ms ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#1a1500')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,21,0,0.45)')}
      >
        <X size={13} />
      </button>
    </div>
  )
}
