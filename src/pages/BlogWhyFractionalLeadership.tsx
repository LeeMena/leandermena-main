import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogWhyFractionalLeadership() {
  return (
    <>
      <SEO
        title="Why Fractional F&B Leadership Works — Miami | Leander Mena"
        description="The business case for fractional GM leadership in Miami restaurants and hotel F&B. Cost comparison, flexibility, and outcomes versus a full-time hire."
        path="/insights/why-fractional-leadership-works"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/landing-hero.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Fractional Leadership</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              Why Fractional F&amp;B Leadership Works
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              The business case for bringing in senior operational judgment without a full-time hire.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                The traditional model for F&amp;B leadership is a full-time GM or Director of F&amp;B,
                a salaried employee with benefits, equity expectations, and a 2-year minimum
                runway to show results. For many operators, that model made sense when labor
                was cheaper and margins were wider. In 2026, for a growing number of Miami
                restaurants and hotel F&amp;B programs, it does not.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                Fractional leadership is not a compromise. It is a deliberate choice to access
                senior operational capacity at the level and duration an operation actually needs,
                rather than building a full-time overhead position around a problem that may
                be temporary or cyclical.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The Timing Problem It Solves</h2>
              <p>
                The model works because it solves a timing problem. Most Miami restaurants and hotel
                F&amp;B departments do not need a full-time director sitting in an office five days a week.
                They need senior operational judgment during critical windows: pre-opening,
                turnaround, labor restructuring, systems implementation. And they need it now, not
                after a six-month search.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p>
                A fractional engagement can start within weeks. The operator gets someone who
                has already solved the problem they are facing, in this market, at this scale.
                There is no onboarding curve, no 90-day get-to-know-you period, no equity negotiation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>The Cost Comparison</h2>
              <p>
                A fully-loaded Director of F&amp;B in Miami costs between $110,000 and $160,000 per
                year when you include salary, benefits, payroll taxes, and onboarding costs.
                That figure does not include the cost of a bad hire, which in a senior role
                typically runs 1.5 to 2 times annual salary when you account for lost time,
                rehiring, and operational damage during the transition.
              </p>
              <p>
                A fractional engagement at 2 to 3 days per week runs a fraction of that cost
                and carries none of the long-term overhead. For an operator who needs 6 months
                of senior leadership during a pre-opening or recovery, fractional is almost
                always the more rational economic choice.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>When It Works Best</h2>
              <p>
                Fractional leadership works best when the operation has a defined challenge and
                a timeline. Pre-openings, labor cost recoveries, GM transitions, new outlet
                launches, and brand standard implementations are all situations where a fractional
                operator can come in, do specific work, and leave the operation better than they
                found it. It works less well when an operation needs someone present 50 hours
                a week indefinitely, in which case a full-time hire is the right answer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Considering fractional F&amp;B leadership for your operation?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  Let's talk about what your operation needs and whether a fractional engagement
                  is the right fit.
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
