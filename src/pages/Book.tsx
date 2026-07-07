import SEO from '@/components/SEO'

export default function Book() {
  return (
    <>
      <SEO
        title="Book a Call | Leander Mena"
        description="Schedule a discovery call or operational deep-dive with Leander Mena - Miami fractional F&B operations leader."
        path="/book"
      />

      <section className="section" style={{ minHeight: '80dvh' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <span className="kicker">Book a Call</span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight mb-4">
            Schedule a Discovery Call
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '44ch', marginBottom: '2rem' }}>
            30 minutes. No pitch, no pressure. Just an honest conversation about your operation and whether I can help.
          </p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/leandermena/discovery"
            style={{ minWidth: '320px', height: '700px' }}
          />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      </section>
    </>
  )
}
