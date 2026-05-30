import { useState } from 'react'
import { X, Download } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--color-primary)',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-2) var(--space-4)',
        fontSize: '0.8rem',
        letterSpacing: '0.04em',
      }}
    >
      <Download size={13} style={{ flexShrink: 0, opacity: 0.85 }} />
      <span style={{ opacity: 0.9 }}>Free:</span>
      <a
        href="/assets/pre-opening-blueprint-ebook.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#ffffff',
          fontWeight: 600,
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          textDecorationColor: 'rgba(255,255,255,0.5)',
        }}
      >
        The 90-Day Pre-Opening Blueprint
      </a>
      <span style={{ opacity: 0.7 }}>→ Download Now</span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        style={{
          position: 'absolute',
          right: 'var(--space-4)',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.7)',
          padding: 'var(--space-1)',
        }}
      >
        <X size={14} />
      </button>
    </div>
  )
}
