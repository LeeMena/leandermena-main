import { useEffect, useRef, useState, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const isSSR = typeof window === 'undefined'

// Spring easing: consistent with all other motion in the site
const SPRING = 'cubic-bezier(0.16, 1, 0.3, 1)'
const DURATION = '0.6s'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(isSSR)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion: reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    // Safety fallback: reveal after timeout if observer never fires
    const fallback = setTimeout(() => setVisible(true), 500 + delay)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback)
          setVisible(true)
          observer.unobserve(el)
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -40px 0px',
      }
    )
    observer.observe(el)

    return () => {
      clearTimeout(fallback)
      observer.disconnect()
    }
  }, [delay])

  const transforms = {
    up:    'translateY(28px)',
    down:  'translateY(-28px)',
    left:  'translateX(28px)',
    right: 'translateX(-28px)',
  }

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
        transition: `opacity ${DURATION} ${SPRING} ${delay}ms, transform ${DURATION} ${SPRING} ${delay}ms`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
