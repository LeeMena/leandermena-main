import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogFractionalGM() {
  return (
    <>
      <SEO
        title="What a Fractional F&B Director Actually Does"
        description="The role explained for operators who are considering it: scope, schedule, deliverables, and real expectations."
        path="/insights/what-a-fractional-gm-actually-does"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog-fractional-leadership.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Fractional Leadership</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              What a Fractional F&amp;B Director Actually Does
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              The role explained for operators who are considering it: scope, schedule, deliverables, and real expectations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Most operators who ask about fractional F&amp;B leadership are not sure exactly
                what they are buying. The term is used loosely. Some fractional engagements are
                strategic advisory only, calls and emails. Others are hands-on operational roles
                with weekly on-site presence. The difference in outcome is significant.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                Here is what a real fractional F&amp;B director engagement looks like: the scope,
                the schedule, the deliverables, and the expectations on both sides.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>What the Role Actually Covers</h2>
              <p>
                A fractional F&amp;B director is accountable for operational performance of the
                food and beverage operation. That means P&amp;L ownership, not just reviewing
                numbers, but making decisions that move them. It means leading the management
                team, not advising them from a distance. It means being in the operation regularly
                enough to know what is actually happening, not just what is being reported.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>The Schedule</h2>
              <p>
                A typical fractional engagement runs 10 to 20 hours per week on-site plus
                availability for calls and decision support throughout the week. The on-site
                hours are concentrated on the highest-leverage activities: team meetings,
                service observation, P&amp;L review, vendor meetings, and manager development.
                The work that does not require physical presence, reporting, planning,
                communication, happens off-site.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>What You Should Expect to Receive</h2>
              <p>
                At minimum: a weekly written update covering operations, people, and financials.
                Monthly P&amp;L review with variance analysis. A 90-day rolling priorities list
                that is updated and shared. Direct access to the operator for real-time decisions.
                And honest assessment of what is working and what is not, including things the
                operator may not want to hear.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>What It Is Not</h2>
              <p>
                A fractional engagement is not a consulting retainer where you get a deck once
                a month. It is not an advisory role where someone tells you what to do and
                disappears. It is an operational leadership role with reduced hours and a defined
                scope. The fractional leader is accountable for outcomes, not just recommendations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Want to understand if this fits your operation?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I offer a no-pressure introductory call to understand your situation and explain
                  exactly what a fractional engagement would look like for your concept.
                </p>
                <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>
    </>
  )
}
