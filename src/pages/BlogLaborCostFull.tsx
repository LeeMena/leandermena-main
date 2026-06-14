import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogLaborCostFull() {
  return (
    <>
      <SEO
        title="How to Reduce Labor Cost Without Cutting Service"
        description="A case study and framework for restructuring labor without degrading guest experience."
        path="/insights/reduce-labor-cost-without-cutting-service"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog-labor-cost.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Operations</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              How to Reduce Labor Cost Without Cutting Service
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              A case study and framework for restructuring labor without degrading guest experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Labor cost is the lever most operators reach for first when margins tighten. The
                instinct is to cut hours, reduce headcount, or freeze hiring. These moves lower the
                number on the P&amp;L temporarily and create service failures that cost more in the
                long run. There is a better approach.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                At a 220-seat dual-concept operation in Miami, I brought labor cost from 38% to
                under 30% over 14 months without a single layoff and without a measurable decline
                in guest satisfaction scores. Here is the framework.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>Step 1: Audit Where the Labor Is Actually Going</h2>
              <p>
                Before cutting anything, map actual labor hours against actual revenue by daypart
                and day of week. Most operations have significant labor waste concentrated in
                specific shifts — typically early week dinner, late Sunday, and opening shifts
                that are staffed for a volume that does not materialize until midday. The audit
                almost always reveals 8 to 12% of weekly hours that can be restructured without
                touching coverage during peak periods.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Step 2: Rebuild the Schedule Around Revenue, Not Habit</h2>
              <p>
                Most schedules are built by copying last week's schedule and adjusting for requests.
                That approach accumulates inefficiency over time. A rebuild from scratch using
                actual sales data by daypart, role-by-role coverage requirements, and a target
                labor percentage as the constraint produces a schedule that is structurally
                different from what most operations are running.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Step 3: Build Variance Tracking Into the Weekly Routine</h2>
              <p>
                A schedule is a plan. What matters is what actually gets worked. Building a
                weekly labor variance review into the manager cadence — actual hours vs. scheduled
                hours, by role and by shift — creates accountability and early warning when
                overtime is building before it hits the check. Most operations review labor
                monthly. That is too slow.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>Step 4: Train Managers to Make In-Shift Decisions</h2>
              <p>
                The biggest source of unplanned labor cost is in-shift overstaffing that no one
                cuts. A manager who is empowered to send one person home when covers are tracking
                20% below forecast, and who understands the P&amp;L implication of that decision,
                will make better labor decisions than a manager who is just trying to get through
                the shift. This requires training and permission, not just expectation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Labor cost running above plan?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I help Miami operators restructure labor scheduling and cost controls without
                  cutting the team or the guest experience.
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
