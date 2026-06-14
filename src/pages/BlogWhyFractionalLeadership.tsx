import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogWhyFractionalLeadership() {
  return (
    <>
      <SEO
        title="Why Fractional F&B Leadership Works"
        description="How operators are replacing full-time directors with fractional leaders — and getting better results at a fraction of the cost."
        path="/insights/why-fractional-leadership-works"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog-fractional-leadership.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Leadership</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              Why Fractional F&amp;B Leadership Works
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              How operators are replacing full-time directors with fractional leaders — and getting better results at a fraction of the cost.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                The traditional model for F&amp;B leadership is a full-time director at $100K
                to $150K plus benefits, bonus, and overhead. For a single concept or a small
                group, that cost is often unjustifiable relative to what the role actually
                requires on a day-to-day basis. The fractional model solves this.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                A fractional F&amp;B director provides senior-level operator capacity on a
                part-time or project basis. The operator gets the output they need — strategic
                direction, P&amp;L management, team development, vendor relationships — without
                the fixed cost of a full-time executive.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>When It Works Best</h2>
              <p>
                Fractional leadership works best in three scenarios: a concept that needs
                senior-level operational support but cannot justify a full-time director, a
                group that is scaling and needs experienced oversight during a transition period,
                and an operator who is launching a new concept and needs a pre-opening leader
                who will not stay on the payroll indefinitely after opening.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>What You Actually Get</h2>
              <p>
                The output is the same as a full-time hire: P&amp;L accountability, team
                leadership, operational systems, vendor management, and strategic direction.
                The difference is the engagement model. A fractional leader works on a defined
                scope and schedule — typically 10 to 20 hours per week — and brings a level
                of cross-concept experience that a single-operator full-time hire often cannot match.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>The Cost Comparison</h2>
              <p>
                A full-time F&amp;B director at $120K all-in costs approximately $10K per month.
                A fractional engagement at senior level typically runs $4K to $7K per month
                depending on scope and hours. For a concept doing $3M to $6M in annual revenue,
                the fractional model often delivers a better ROI because the cost savings go
                directly to the bottom line and the operator gets someone whose entire focus
                is the engagement, not internal politics.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Considering a fractional engagement?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I work with Miami operators as a fractional F&amp;B director on a scoped,
                  part-time basis. Let's talk about whether it fits your situation.
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
