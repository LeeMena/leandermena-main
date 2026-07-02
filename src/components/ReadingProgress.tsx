/**
 * ReadingProgress
 * FIX #9: Sticky reading-progress bar + estimated read time for all blog pages.
 *
 * Usage:
 *   import ReadingProgress from '@/components/ReadingProgress'
 *   // at top of any blog page:
 *   <ReadingProgress wordCount={1200} />
 *
 * - wordCount: pass the approximate word count of the article body.
 *   The component calculates estimated reading time (200 wpm average).
 * - The thin teal progress bar sticks under the site header and fills
 *   as the user scrolls the article. Respects prefers-reduced-motion.
 */
import { useEffect, useState, useRef } from 'react'

interface Props {
  /** Approximate word count of the article. Used for "X min read" display. */
  wordCount?: number
  /** Optional CSS selector for the scrollable article container.
   *  Defaults to the entire document scroll. */
  targetSelector?: string
}

export default function ReadingProgress({ wordCount = 0, targetSelector }: Props) {
  const [progress, setProgress] = useState(0)
  const [prefersReduced, setPrefersReduced] = useState(false)
  const rafRef = useRef<number>(0)

  const minuteRead = wordCount > 0 ? Math.max(1, Math.round(wordCount / 200)) : 0

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const getTarget = () =>
      targetSelector ? document.querySelector(targetSelector) : null

    const calculate = () => {
      const el = getTarget()
      if (el) {
        const { scrollTop, scrollHeight, clientHeight } = el as HTMLElement
        const total = scrollHeight - clientHeight
        setProgress(total > 0 ? Math.min(100, (scrollTop / total) * 100) : 0)
      } else {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(calculate)
    }

    const target = getTarget()
    const eventTarget = target ?? window
    eventTarget.addEventListener('scroll', onScroll, { passive: true })
    calculate()
    return () => {
      eventTarget.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [targetSelector])

  // With reduced-motion: show a static full-width bar only when near bottom
  const displayProgress = prefersReduced ? (progress > 90 ? 100 : 0) : progress

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 49,
        height: '3px',
        background: 'var(--color-border)',
        // Prevent the bar from creating layout shift
        marginBottom: '-3px',
      }}
      aria-hidden="true"
    >
      {/* Progress fill */}
      <div
        style={{
          height: '100%',
          width: `${displayProgress}%`,
          background: 'var(--color-primary)',
          transition: prefersReduced ? 'none' : 'width 80ms linear',
          transformOrigin: 'left',
        }}
      />

      {/* Estimated read time badge — only shown when wordCount provided */}
      {minuteRead > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '6px',
            right: 'var(--space-4)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-text-faint)',
            pointerEvents: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {minuteRead} min read
        </div>
      )}
    </div>
  )
}
