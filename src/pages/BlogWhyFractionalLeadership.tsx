import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogWhyFractionalLeadership() {
  return (
    <>
      <SEO
        title="Why Fractional F&B Leadership Works"
        description="How operators are replacing full-time directors with fractional leaders - and getting better results at a fraction of the cost."
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
              How operators are replacing full-time directors with fractional leaders - and getting better results at a fraction of the cost.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                The fractional model is not new in professional services. Law firms, accounting
                practices, and consulting firms have operated this way for decades. What is new
                is the application of the model to operational F&amp;B leadership - and the results
                operators are getting from it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                The case for fractional leadership comes down to three things: access, cost, and
                accountability.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>Access to Experience That Is Otherwise Unaffordable</h2>
              <p>
                A full-time F&amp;B director with the experience to open hotels, restructure operations,
                and drive meaningful P&amp;L improvement costs $150,000 to $200,000 per year in
                total compensation. For most independent operators and smaller hotel groups, that
                cost is not justifiable as a full-time hire. The fractional model gives those
                operators access to the same level of experience at 30 to 40% of the cost.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Cost Structure That Matches the Work</h2>
              <p>
                Most F&amp;B operations do not require full-time strategic leadership every week.
                The highest-leverage work - opening systems, restructuring labor, developing
                management, fixing P&amp;L - is intensive for a defined period and then transitions
                to maintenance. A fractional engagement is designed to match that reality: intensive
                at the start, calibrated down as the systems hold.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Accountability Without the Politics</h2>
              <p>
                A fractional leader is not building a career inside your organization. They are
                not managing upward, protecting their position, or filtering their assessment of
                what is wrong. The engagement is defined by outcomes - if the outcomes are not
                delivered, the engagement ends. That accountability structure produces a different
                quality of feedback and a different level of candor than a full-time hire typically
                provides.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>When It Works Best</h2>
              <p>
                Fractional F&amp;B leadership works best in three situations: a property that needs
                experienced leadership but cannot justify a full-time hire, an operation that is
                underperforming and needs a defined turnaround, and a concept opening that needs
                senior leadership through pre-opening and stabilization before transitioning to
                a permanent team. In all three, the operator gets senior-level accountability
                without the permanent cost structure.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Is fractional the right model for your operation?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I can tell you in a single conversation whether fractional leadership fits
                  your situation - and what it would look like in practice.
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
