import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogPreOpeningTimeline() {
  return (
    <>
      <SEO
        title="The Pre-Opening Timeline Most Operators Get Wrong"
        description="Why most restaurant pre-openings run behind — and the 120-day framework that fixes it."
        path="/insights/pre-opening-timeline"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog-pre-opening.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Pre-Opening</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              The Pre-Opening Timeline Most Operators Get Wrong
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              Why most restaurant pre-openings run behind — and the 120-day framework that fixes it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Most restaurant pre-openings are planned backwards. The operator picks an opening
                date, counts back from it, and tries to compress every task into whatever time
                remains. When construction runs late — and it almost always does — every downstream
                milestone compresses. Training gets cut. Vendor setup gets rushed. The team
                opens undertrained and undersupported.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                The 120-day framework I use plans forward from groundbreaking, not backward from
                an opening date. The opening date is the output of the plan, not the starting
                constraint.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The Most Common Timing Mistakes</h2>
              <p>
                Starting management hiring too late is the single most costly timing error in a
                pre-opening. Your GM and department heads need to be hired at least 60 days before
                opening, ideally 90. They are the ones building the systems and training the team.
                If they arrive 30 days out, they are in survival mode from day one.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p>
                The second most common mistake is treating liquor license and permit timelines
                as fixed. In Miami, liquor license processing times vary significantly by
                municipality and license type. Operators who apply late and then try to open
                without a license — relying on a temporary permit — consistently encounter
                problems that are expensive to resolve under time pressure.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>What the 120-Day Framework Fixes</h2>
              <p>
                The framework creates 30-day phases with specific deliverables that must be
                complete before the next phase begins. This creates natural checkpoints that
                surface problems early, when they are still cheap to fix. A vendor contract
                that falls through at day 45 is a minor problem. The same issue at day 110
                is a crisis.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>How to Use It</h2>
              <p>
                Start with the full task inventory — every deliverable across legal, construction
                coordination, staffing, vendor, menu, training, and systems. Assign an owner and
                a due date to each item. Review weekly as a leadership team. When items slip,
                understand why before accepting the slip — some delays are legitimate, many are
                avoidable with the right intervention.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Need the full 120-day framework?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  The Pre-Opening Blueprint includes the complete task inventory, milestone
                  schedule, and all supporting templates.
                </p>
                <Link to="/blueprint" className="btn btn-primary">See the Blueprint</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>
    </>
  )
}
