import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogBadPreOpening() {
  return (
    <>
      <SEO
        title="The Real Cost of a Bad Pre-Opening"
        description="What actually goes wrong when pre-opening planning is skipped or rushed — and the financial impact."
        path="/insights/real-cost-of-bad-pre-opening"
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
              The Real Cost of a Bad Pre-Opening
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              What actually goes wrong when pre-opening planning is skipped or rushed — and the financial impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                A bad pre-opening is not just an operational inconvenience. It is a financial event.
                The costs are real, measurable, and in most cases preventable. Operators who cut
                corners on pre-opening investment consistently spend more fixing problems in the
                first 90 days than a proper pre-opening would have cost.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                I have led pre-openings for independent concepts, hotel outlets, and multi-unit
                groups in Miami. The pattern of what goes wrong in an underprepared opening
                is remarkably consistent.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The First 30 Days Set the Revenue Trajectory</h2>
              <p>
                Guest experience in the first 30 days after opening drives review volume, word of
                mouth, and repeat visit rate for the following six months. A restaurant that opens
                with undertrained staff, inconsistent execution, and a menu that is not yet dialed
                in does not get a second first impression. Those early negative reviews compound.
                The recovery cost — in marketing spend, in comp meals, in manager time — typically
                runs two to three times what a proper pre-opening training investment would have cost.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Vendor and Supply Chain Failures Are Predictable</h2>
              <p>
                In every rushed pre-opening I have inherited, the vendor relationships were
                incomplete at opening. Primary supplier contracts were unsigned. Backup vendors
                were not identified. Par levels were guessed rather than calculated from sales
                projections. The result is a first week of reactive purchasing at non-negotiated
                prices, product shortages on the menu, and a kitchen that is running on improvisation
                rather than system.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Staffing Gaps Compound Quickly</h2>
              <p>
                An undertrained team in week one produces more turnover in weeks two through eight.
                Staff who are thrown into service before they are ready get frustrated, make
                mistakes, feel unsupported, and leave. Replacing them during the critical ramp
                period costs money, disrupts team cohesion, and extends the period of inconsistent
                execution. The turnover cost of a bad pre-opening is routinely the largest single
                line item in the recovery budget.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>What a Proper Pre-Opening Actually Costs</h2>
              <p>
                A properly resourced pre-opening — with the right operator leading it, adequate
                training time, and complete vendor setup — typically adds 3 to 5% to total
                pre-opening costs. The downside protection it provides against the scenarios
                above is multiples of that investment. The operators who treat pre-opening as
                an area to cut budget are consistently the ones calling for help 60 days after opening.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Opening a restaurant in the next 6 months?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I lead pre-openings end-to-end — from vendor setup and hiring to training and
                  opening night execution. Let's talk before the problems start.
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
