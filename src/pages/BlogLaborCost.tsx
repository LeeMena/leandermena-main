import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogLaborCost() {
  return (
    <>
      <SEO
        title="Labor Cost Control in Miami Restaurants"
        description="Practical tactics for reducing labor cost percentage without cutting service quality or burning out your team."
        path="/insights/labor-cost-control-miami-restaurants"
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
              Labor Cost Control in Miami Restaurants
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              Practical tactics for reducing labor cost percentage without cutting service quality or burning out your team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Labor cost in Miami restaurants runs high for structural reasons: a competitive
                labor market, high cost of living relative to wages, and a guest culture that
                expects high service levels. Operators who try to solve the problem by cutting
                headcount create a service problem that costs more than the labor savings.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                The operators I have worked with who run sustainable labor costs - consistently
                in the 28% to 32% range for full-service concepts - share a set of practices
                that are not complicated but require discipline to maintain.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>Build the Schedule to a Target, Not a Template</h2>
              <p>
                The most common labor management failure I see is building schedules by copying
                last week and adjusting for requests. That approach locks in whatever inefficiencies
                existed last week and adds new ones. A schedule built to a labor cost target -
                where the manager starts with the revenue forecast and the target labor percentage
                and works backward to hours - produces materially different results over time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Track Variance Weekly, Not Monthly</h2>
              <p>
                Monthly labor reviews are too slow. By the time the P&amp;L shows a problem,
                four weeks of variance have accumulated. A weekly check of actual hours versus
                scheduled hours, by role and by daypart, catches drift before it compounds.
                This does not require sophisticated software - a spreadsheet with the right
                structure works. What it requires is consistency.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Control Overtime at the Source</h2>
              <p>
                Overtime in restaurants is almost always predictable 72 hours before it happens.
                A manager reviewing the schedule on Wednesday can see which employees are
                tracking toward 40 hours before the weekend. The intervention - adjusting
                Friday and Saturday shifts - is simple when it happens on Wednesday. It is
                expensive when it is discovered on Sunday's payroll close.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>Invest in Cross-Training</h2>
              <p>
                Cross-trained teams run leaner. A server who can run food, a host who can
                support the bar during a rush, a line cook who can work two stations - these
                capabilities reduce the number of bodies required to cover a shift at a given
                volume. Cross-training also improves retention because employees feel more
                capable and less disposable. The investment is real but the return is consistent.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Labor cost running above 32%?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I help Miami operators build scheduling systems and labor controls that bring
                  cost into line without cutting the team.
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
