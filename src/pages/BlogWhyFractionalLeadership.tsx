import SEO from '@/components/SEO'
import RelatedArticles from '@/components/RelatedArticles'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogWhyFractionalLeadership() {
  return (
    <>
      <SEO
        title="Why F&amp;B Operations Consulting Works"
        description="How operators are replacing full-time directors with expert consultants and getting better results at a fraction of the cost."
        path="/insights/why-fractional-leadership-works"
        image="https://images.unsplash.com/photo-1555266375-9efc2860bd56?fm=jpg&w=1200&h=630&fit=crop&crop=edges&q=80&auto=format"
        imageAlt="Two operators reviewing plans at a restaurant table"
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
              Why F&amp;B Operations Consulting Works
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              How operators are replacing full-time directors with expert consultants and getting better results at a fraction of the cost.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                The expert consulting model is not new in professional services. Law firms, accounting practices, and management consulting firms have operated this way for decades. What is new is the application of the model to operational F&amp;B leadership, and the results operators are getting from it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                The case for expert consulting comes down to three things: access, cost, and accountability.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>Access to Experience That Is Otherwise Unaffordable</h2>
              <p>
                A full-time F&amp;B director with the experience to open hotels, restructure operations, and drive meaningful P&amp;L improvement costs $150,000 to $200,000 per year in total compensation. For most independent operators and smaller hotel groups, that cost is not justifiable as a full-time hire. The expert consulting model gives those operators access to the same level of experience at 30 to 40% of the cost.
              </p>
              <p>
                More importantly, it gives access to a broader skill set than any single hire could provide. A full-time director is one person with one background. An expert consultant who has worked across Michelin concepts, luxury hotel groups, and independent restaurants brings the full range of operational solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Cost Structure That Matches the Work</h2>
              <p>
                Most F&amp;B operations do not require full-time strategic leadership every week. The highest-leverage work: opening systems, restructuring labor, developing management, fixing P&amp;L, is intensive for a defined period and then transitions to maintenance. An expert consulting engagement is designed to match that reality: intensive at the start, calibrated down as the systems hold.
              </p>
              <p>
                A typical engagement runs 3 to 6 months at a fixed monthly fee. Compare that to a $160,000 annual salary plus benefits, insurance, and onboarding cost. The financial case is clear. But the real savings are in the exit cost: there is no severance, no unemployment claim, no recruitment replacement cycle when the project is complete.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Accountability Without the Politics</h2>
              <p>
                An expert consultant is not building a career inside your organization. They are not managing upward, protecting their position, or filtering their assessment of what is wrong. The engagement is defined by outcomes. If the outcomes are not delivered, the engagement ends. That accountability structure produces a different quality of feedback and a different level of candor than a full-time hire typically provides.
              </p>
              <p>
                In my experience, the most valuable conversations I have with operators happen in the first two weeks, before I have built any internal relationships. I ask the questions that a full-time employee might avoid: why is the GM making the F&amp;B decisions, why is the executive chef not cost-accountable, why does the labor model not match the volume. Those questions, asked early, are what create the breakthrough.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>When It Works Best</h2>
              <p>
                Expert consulting works best in three situations. First, a property that needs experienced leadership but cannot justify a full-time hire. Second, an operation that is underperforming and needs a defined turnaround. Third, a concept opening that needs senior leadership through pre-opening and stabilization before transitioning to a permanent team. In all three, the operator gets senior-level accountability without the permanent cost structure.
              </p>
              <p>
                The model does not work when the operator is looking for a permanent replacement disguised as a temporary solution. Expert consulting is a bridge, not a destination. The best engagements end with the property in a better position than when they started, and the internal team equipped to run it independently.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <h2>What It Looks Like in Practice</h2>
              <p>
                A typical engagement starts with a 3 to 5 day on-site diagnostic. I review the P&amp;L, walk the line, interview every manager, and observe service during peak periods. Then I build a 90-day plan with weekly milestones. I execute the first month personally, then transition to weekly check-ins and real-time adjustments. By month three, the systems are holding and the leadership team is running independently.
              </p>
              <p>
                The operator is not hiring a body. They are buying a specific outcome: a restructured labor model, a functioning pre-opening timeline, a management team that can operate without the owner. That is the difference between expert consulting and staffing.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Is expert consulting the right model for your operation?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I can tell you in a single conversation whether expert consulting fits your situation and what it would look like in practice.
                </p>
                <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      <RelatedArticles currentSlug="why-fractional-leadership-works" />
      </article>
    </>
  )
}
