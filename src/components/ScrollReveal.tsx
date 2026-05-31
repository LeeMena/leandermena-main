import { useEffect, useRef, useState, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const isSSR = typeof window === 'undefined'

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

    // Safety fallback: reveal after timeout if observer never fires
    const fallback = setTimeout(() => setVisible(true), 400 + delay)

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
        // Negative bottom margin catches elements already near viewport on load
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
    up: 'translateY(24px)',
    down: 'translateY(-24px)',
    left: 'translateX(24px)',
    right: 'translateX(-24px)',
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
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
