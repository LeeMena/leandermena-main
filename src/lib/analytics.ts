import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Plausible custom-event helpers.
//
// The queue stub in index.html guarantees window.plausible exists before
// the analytics script loads, so events fired early are queued, not lost.
// Register each event name as a Goal in the Plausible dashboard
// (Site settings -> Goals) to see aggregates and per-page breakdowns.

type EventProps = Record<string, string>

interface PlausibleWindow {
  plausible?: (name: string, options?: { props?: EventProps }) => void
}

export function trackEvent(name: string, props?: EventProps) {
  try {
    const w = window as unknown as PlausibleWindow
    w.plausible?.(name, props ? { props } : undefined)
  } catch {
    // Analytics must never break the app.
  }
}

// Site-wide conversion tracking, mounted once in Layout:
//
//  - "Book Call Click":     any click on a link to /book, attributed to
//                           the page it happened on (delegated listener,
//                           so nav CTAs, banners, and the "Work with
//                           Leander" boxes in articles are all covered
//                           without per-component wiring).
//  - "Blueprint Download":  any click on the blueprint PDF link.
//  - "Call Scheduled":      Calendly fires a postMessage when a booking
//                           is actually completed - the real conversion,
//                           captured from both the /book inline widget
//                           and the Calendly modal.
export function useConversionTracking() {
  const { pathname } = useLocation()

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      if (href === '/book') {
        trackEvent('Book Call Click', { page: window.location.pathname })
      } else if (
        href.endsWith('/90-day-pre-opening-blueprint.pdf') ||
        href.endsWith('/pre-opening-blueprint-ebook.html')
      ) {
        trackEvent('Blueprint Download', { page: window.location.pathname })
      }
    }

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return
      const eventName = (e.data as { event?: string } | null)?.event
      if (eventName === 'calendly.event_scheduled') {
        trackEvent('Call Scheduled', { page: window.location.pathname })
      }
    }

    // Capture phase: runs before the SPA router swaps the page away.
    document.addEventListener('click', onClick, true)
    window.addEventListener('message', onMessage)
    return () => {
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('message', onMessage)
    }
  }, [])

  // Track the nav "Book a Call" button (a <button>, not a link) via the
  // handler Layout passes to Navigation.
  return {
    trackBookCall: () => trackEvent('Book Call Click', { page: pathname, source: 'nav' }),
  }
}
