import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogLaborCostFull() {
  return (
    <>
      <SEO
        title="How to Reduce Labor Cost Without Cutting Service Quality"
        description="Marabu Restaurant: 34% labor cost to 28%, $180K saved, ratings from 3.9 to 4.6 stars. The exact five-step framework."
        path="/insights/reduce-labor-cost-without-cutting-service"
        type="article"
        schemaType="article"
        article={{
          headline: 'How to Reduce Labor Cost Without Cutting Service Quality',
          datePublished: '2026-02-01',
          dateModified: '2026-06-01',
        }}
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src="/images/blog-labor-cost.jpg" alt="" width="1400" height="600" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(5rem,11vw,9rem)]">
          <span className="kicker">Labor & Cost Control</span>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[28ch] mb-4">
            How to Reduce Labor Cost Without Cutting Service Quality
          </h1>
          <p className="text-[#d8d8d8] text-lg max-w-[52ch] leading-relaxed">February 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose-article">
            <ScrollReveal>
              <p>
                When I took over as GM at Marabu Restaurant in Miami, the labor cost was 34% of revenue.
                The industry benchmark for full-service is 28–32%. The owner was stressed. The staff was
                overworked. And the service scores were slipping.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p>
                Six months later, labor was at 28%. Service scores went from 3.9&#x2605; to 4.6&#x2605;.
                Annual savings: $180,000. Here's exactly how we did it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}><h2>The Problem: Labor Cost Isn't Just About Hours</h2></ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                Most operators think labor cost equals total hours times hourly rate. That's incomplete.
                At Marabu, we had five overlapping problems: overstaffing during slow periods,
                understaffing during rushes that forced overtime, role confusion, no-call-no-shows
                requiring last-minute coverage at premium rates, and no cross-training.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}><h2>Step 1: Map Your True Labor Curve (Week 1)</h2></ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="card">
                <p>
                  Before cutting anything, get data. We tracked covers per hour every day for two weeks,
                  labor dollars per cover, revenue per labor hour, overtime hours and reasons, and
                  no-call-no-show frequency. The insight: we were overstaffed 11am–2pm and understaffed
                  7–9pm. The dinner understaffing caused overtime that erased the lunch savings.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}><h2>Step 2: Build a Smart Schedule Template (Weeks 2–3)</h2></ScrollReveal>
            <ScrollReveal delay={400}>
              <p>
                We built schedules from covers, not gut feeling. Target labor percentage was 28%.
                Multiply expected revenue by 0.28 to get target labor dollars, then divide by
                average hourly rate to get required hours. We then broke it down by position:
                one server per 12–15 covers, one bartender per 30, one expo per 50.
                No one gets scheduled without a specific revenue justification.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={450}><h2>Step 3: Cross-Train Your Team (Weeks 4–6)</h2></ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="card">
                <p>
                  This was the biggest lever. After cross-training, every server could expo,
                  every runner could bus, and every bartender could serve tables. We reduced
                  minimum staffing by one body per shift without increasing individual workload.
                  When someone called out, we absorbed it internally instead of paying overtime or
                  emergency coverage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={550}><h2>Step 4: Fix the No-Call-No-Show Problem (Weeks 2–4)</h2></ScrollReveal>
            <ScrollReveal delay={600}>
              <p>
                At Marabu we averaged 2.5 no-shows per week — 130 per year. At $20/hour coverage
                cost that's over $5,200 in direct cost before you count the damage to team morale.
                We implemented a written three-strikes attendance policy, a self-service shift swap
                board, one on-call shift per day with a small standby fee, and a $50 monthly
                attendance bonus for zero unexcused absences. No-shows dropped from 2.5 to 0.8
                per week within 60 days.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={650}><h2>Step 5: Daily Pre-Shift Training (Ongoing)</h2></ScrollReveal>
            <ScrollReveal delay={700}>
              <p>
                Five minutes every shift. One minute on yesterday's wins and one thing to improve.
                Two minutes on menu focus. One minute on a service standard. One minute of individual
                recognition. Server error rate dropped 40%, meaning fewer comps, fewer remakes,
                and faster table turns.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={750}><h2>The Numbers: Before vs. After</h2></ScrollReveal>
            <ScrollReveal delay={800}>
              <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'var(--color-text-muted)' }}>Metric</th>
                      <th style={{ textAlign: 'center', padding: '0.5rem 0.75rem', color: 'var(--color-text-muted)' }}>Before</th>
                      <th style={{ textAlign: 'center', padding: '0.5rem 0.75rem', color: 'var(--color-text-muted)' }}>After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Labor Cost %', '34%', '28%'],
                      ['Annual Labor $', '~$720K', '~$540K'],
                      ['Google Rating', '3.9★', '4.6★'],
                      ['Server Error Rate', '~12%', '~7%'],
                      ['No-Call-No-Shows', '2.5/week', '0.8/week'],
                      ['Avg. Check', '$42', '$47'],
                    ].map(([metric, before, after]) => (
                      <tr key={metric} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-text)' }}>{metric}</td>
                        <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>{before}</td>
                        <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-accent)', textAlign: 'center', fontWeight: 600 }}>{after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={850}>
              <div className="mt-4 flex gap-4 flex-wrap">
                <Link to="/contact" className="btn btn-primary">Talk About Your Labor Model</Link>
                <Link to="/insights/what-a-fractional-gm-actually-does" className="btn btn-ghost">What a Fractional GM Does &rarr;</Link>
                <Link to="/insights" className="btn btn-ghost">&larr; Back to Insights</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
