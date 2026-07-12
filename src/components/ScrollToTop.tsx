import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll position on route change. Without this, navigating from the
// bottom of a long page (e.g. a footer link) leaves the next page scrolled
// to the same offset. `behavior: 'instant'` overrides the html-level
// `scroll-behavior: smooth` - animating a full-page scroll on every
// navigation reads as jank, not polish.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
