import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check if dismissed this session
    try {
      const dismissed = sessionStorage.getItem('announcement-dismissed')
      if (!dismissed) setVisible(true)
    } catch {
      // sessionStorage blocked (unlikely on real site): just show it
      setVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setVisible(false)
    try {
      sessionStorage.setItem('announcement-dismissed', '1')
    } catch {
      // ignore
    }
  }

  if (!visible) return null

  return (
    <div
      role="banner"
      style={{
        background: 'var(--color-primary)',
        color: '#ffffff',
        padding: 'var(--space-2) var(--space-4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        position: 'relative',
        zIndex: 100,
      }}
    >
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.6875rem',
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: '#ffffff',
        textAlign: 'center',
      }}>
        Now booking Q3 engagements.{' '}
        <Link
          to="/book"
          style={{
            color: '#ffffff',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontWeight: 600,
          }}
        >
          Schedule your discovery call
        </Link>
      </p>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        style={{
          position: 'absolute',
          right: 'var(--space-4)',
          color: 'rgba(255,255,255,0.7)',
          padding: 'var(--space-1)',
          display: 'flex',
          alignItems: 'center',
          lineHeight: 1,
        }}
      >
        <X size={14} />
      </button>
    </div>
  )
}
