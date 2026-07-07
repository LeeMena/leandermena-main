import { useEffect } from 'react'
import SEO from '@/components/SEO'

const CALENDLY_SRC = 'https://assets.calendly.com/assets/external/widget.js'

export default function Book() {
  useEffect(() => {
    // The Calendly embed script must be injected imperatively —
    // <script> tags rendered through JSX do not execute in React 18.
    const existing = document.querySelector(`script[src="${CALENDLY_SRC}"]`)
    if (existing) {
      // Script already loaded on a previous visit — re-init the widget
      const w = window as unknown as { Calendly?: { initInlineWidgets?: () => void } }
      w.Calendly?.initInlineWidgets?.()
      return
    }
    const script = document.createElement('script')
    script.src = CALENDLY_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <SEO
        title="Book a Call"
        description="Schedule a discovery call or operational deep-dive with Leander Mena - Miami fractional F&B operations leader."
        path="/book"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '320px', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/fnb-manager.jpg"
            alt=""
            width="1400"
            height="900"
            loading="eager"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
          <span className="kicker">Book a Call</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-4">
            Schedule a Discovery Call
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[46ch] leading-relaxed">
            30 minutes. No pitch, no pressure. Just an honest conversation about your operation and whether I can help.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-primary)', marginTop: '1rem', letterSpacing: '0.05em' }}>
            I respond within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/leandermena/discovery"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>
    </>
  )
}
