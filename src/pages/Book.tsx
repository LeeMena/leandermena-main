import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function Book() {
  return (
    <>
      <SEO
        title="Book a Discovery Call | Leander Mena"
        description="Schedule a 30-minute discovery call with Leander Mena, F&amp;B operations consultant. No pitch, no pressure. We discuss your operation, your challenges, and whether I can help."
        path="/book"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/book.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Discovery Call</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
            Book a Discovery Call
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            30 minutes. No pitch, no pressure. Just an honest conversation about your operation, your timeline, and whether I can help.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-12)' }}>
            <span className="kicker">What to Expect</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              A Conversation, Not a Sales Pitch
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-6)', maxWidth: '56ch' }}>
              The first call is about understanding your situation. I ask questions about your concept, your team, your revenue targets, and your biggest operational pain point. I do not push a package. I explain how I work, I give you a realistic assessment of whether I can help, and I tell you what the next 90 days would look like if we decide to work together.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-6)', maxWidth: '56ch' }}>
              Most calls end with one of three outcomes: we schedule an on-site diagnostic, I recommend a different resource that fits your situation better, or we agree to reconnect in a few months when your timeline is clearer. All three are good outcomes.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-12)', marginTop: 'var(--space-12)' }}>
            <span className="kicker">Who This Is For</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              The Three Situations I See Most
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
                  Pre-Opening Build
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '56ch' }}>
                  You are opening a restaurant or hotel F&amp;B program in the next 3 to 6 months and you need someone who has done it before. Menu structure, labor model, supplier relationships, and training timeline: I build the operational blueprint before you open.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
                  Operational Turnaround
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '56ch' }}>
                  Your concept is open but the numbers are not working. Labor cost is too high, revenue is flat, or the team is turning over faster than you can replace it. I diagnose the root cause, fix the structural issues, and train the leadership team to keep the improvements.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
                  Management Development
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '56ch' }}>
                  Your concept is profitable but you are the bottleneck. Every decision comes through you, and the team is not developing independently. I build training programs, delegate authority, and create accountability systems so the property runs without you on the floor.
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-12)', marginTop: 'var(--space-12)' }}>
            <span className="kicker">Before the Call</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              What Helps Me Prepare
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-6)', maxWidth: '56ch' }}>
              You do not need to prepare a formal presentation. The most useful context is: what type of property you are running, what your current role is, and what the single biggest operational problem is. If you have the last 30 days of P&amp;L and labor data, that is helpful but not required. I will ask for it if the conversation gets specific.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-6)', maxWidth: '56ch' }}>
              Calls typically run 25 to 30 minutes. I will send a calendar invite and a brief confirmation email with my direct phone number. I answer directly. No assistant, no intake form, no automated sequence.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-12)', marginTop: 'var(--space-12)', textAlign: 'center' }}>
            <span className="kicker">Schedule</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Pick a Time That Works
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-8)', maxWidth: '56ch', marginInline: 'auto' }}>
              Use the calendar below to find a slot. I keep open hours on weekdays and limited weekend slots for operators who cannot step away during service hours.
            </p>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/leandermena/discovery"
              style={{ minWidth: '320px', height: '700px' }}
            />
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#0a0905' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <span className="kicker">Not Ready Yet?</span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4" style={{ color: '#ffffff' }}>
            Explore Other Resources
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 'var(--space-8)', maxWidth: '56ch', marginInline: 'auto' }}>
            If you are not ready for a call, the best place to start is the 90-Day Pre-Opening Blueprint or the labor cost toolkit. Both are free and cover the frameworks I use on real properties.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/blueprint" className="btn btn-primary">Get the Blueprint</Link>
            <Link to="/insights" className="btn btn-secondary">Read Insights</Link>
          </div>
        </div>
      </section>
    </>
  )
}
