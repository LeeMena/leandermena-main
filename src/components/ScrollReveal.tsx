import { useEffect, useRef, useState, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

// True when running on the server (vite-ssg SSR pass) — no window object
const isSSR = typeof window === 'undefined'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  // Start visible on SSR so static HTML contains real content for crawlers.
  // On the client, start hidden so the reveal animation still plays.
  const [visible, setVisible] = useState(isSSR)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already visible (shouldn't happen on client), skip observer
    if (visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  const transforms = {
    up: 'translateY(24px)',
    down: 'translateY(-24px)',
    left: 'translateX(24px)',
    right: 'translateX(-24px)',
  }

  // On SSR: no inline styles — let content render fully for crawlers
  if (isSSR) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0)' : transforms[direction],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
