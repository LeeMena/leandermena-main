import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

// Current quarter, rolling forward during a quarter's final month so the bar never advertises a past quarter.
function bookingQuarter(now = new Date()) {
  const q = Math.floor(now.getMonth() / 3) + (now.getMonth() % 3 === 2 ? 2 : 1)
  return q > 4 ? `Q1 ${now.getFullYear() + 1}` : `Q${q}`
}

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
        background: 'var(--color-primary-fill)',
        color: '#080807',
        // extra inline padding keeps the centered text clear of the dismiss button
        padding: 'var(--space-2) var(--space-10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        position: 'relative',
        zIndex: 100,
        minHeight: '40px',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.6875rem',
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: '#080807',
        textAlign: 'center',
      }}>
        <span className="hidden sm:inline">Now booking {bookingQuarter()} engagements.{' '}</span>
        <Link
          to="/book"
          style={{
            color: '#080807',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
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
          color: 'rgba(8,8,7,0.65)',
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
