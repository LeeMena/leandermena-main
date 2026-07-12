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
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?fm=jpg&w=1200&h=630&fit=crop&crop=edges&q=80&auto=format"
        imageAlt="Table spread of dishes at a full-service restaurant"
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
                specific shifts, typically early week dinner, late Sunday, and opening shifts
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
                different and consistently lower cost than the inherited one.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Step 3: Separate Controllable from Non-Controllable Labor</h2>
              <p>
                Not all labor cost is equally controllable. Benefits, mandated minimums, and
                salaried management cost are relatively fixed. Hourly floor and kitchen labor
                is variable and directly schedule-driven. Most operators manage against total
                labor percentage without separating the two, which obscures where the opportunity
                actually is. Track them separately and you will find the target faster.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>The Result</h2>
              <p>
                The 8-point labor reduction at the Miami operation came from three sources:
                schedule restructuring (4 points), menu simplification that reduced kitchen
                labor complexity (2.5 points), and elimination of a management layer that had
                been added during a period of growth but was no longer justified by volume
                (1.5 points). No service cuts. No burnout. Better systems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Labor cost above 32%?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I can audit your schedules, identify the structural waste, and build you a
                  reduction plan that does not require cutting staff or service. Let's talk.
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
