import SEO from '@/components/SEO'
import RelatedArticles from '@/components/RelatedArticles'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogFractionalGM() {
  return (
    <>
      <SEO
        title="What a Fractional GM Actually Does for Miami Restaurants | Leander Mena"
        description="The fractional GM role explained for Miami operators: scope, weekly schedule, deliverables, and real expectations from someone who has led engagements at independent restaurants, hotel F&B programs, and multi-unit groups."
        path="/insights/what-a-fractional-gm-actually-does"
        image="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?fm=jpg&w=1200&h=630&fit=crop&crop=edges&q=80&auto=format"
        imageAlt="Manager working at the counter of a restaurant"
        type="article"
        schemaType="article"
        article={{
          headline: 'What a Fractional GM Actually Does for Miami Restaurants',
          datePublished: '2026-01-15',
          dateModified: '2026-07-03',
        }}
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog-fractional-leadership.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Fractional Leadership</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              What a Fractional GM Actually Does for Miami Restaurants
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              The fractional GM role explained for Miami operators: scope, schedule, deliverables, and what to expect on both sides of the engagement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Most Miami operators who ask about <strong>fractional GM or fractional F&amp;B director services</strong> are not sure exactly
                what they are buying. The term is used loosely. Some fractional engagements are
                strategic advisory only: calls and emails. Others are hands-on operational leadership
                with weekly on-site presence. The difference in outcome is significant.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                Here is what a real <strong>fractional F&amp;B director engagement in Miami</strong> looks like: the scope,
                the schedule, the deliverables, and the expectations on both sides.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>What the Fractional GM Role Actually Covers</h2>
              <p>
                A <strong>fractional F&amp;B director</strong> is accountable for operational performance of the
                food and beverage operation. That means P&amp;L ownership, not just reviewing
                numbers, but making decisions that move them. It means leading the management
                team, not advising them from a distance. It means being in the operation regularly
                enough to know what is actually happening, not just what is being reported.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>The Weekly Schedule</h2>
              <p>
                A typical fractional engagement for a Miami restaurant or hotel F&amp;B program runs 10 to 20 hours per week on-site plus
                availability for calls and decision support throughout the week. The on-site
                hours are concentrated on the highest-leverage activities: team meetings,
                service observation, P&amp;L review, vendor meetings, and manager development.
                The work that does not require physical presence (reporting, planning,
                communication) happens off-site.
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
                scope. The fractional GM is accountable for outcomes, not just recommendations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Considering a fractional F&amp;B director for your Miami restaurant or hotel?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I offer a no-pressure introductory call to understand your situation and explain
                  exactly what a <Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>fractional F&amp;B director engagement</Link> would look like for your concept.
                </p>
                <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      <RelatedArticles currentSlug="what-a-fractional-gm-actually-does" />
      </article>
    </>
  )
}
