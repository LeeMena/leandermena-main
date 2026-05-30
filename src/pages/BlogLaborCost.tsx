import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogLaborCost() {
  return (
    <>
      <SEO
        title="Labor Cost Control for Miami Restaurants"
        description="Labor is your biggest controllable cost. Here is how to bring it under control without cutting service quality or burning out your team."
        path="/insights/labor-cost-control-miami-restaurants"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/Labor (1).jpg"
            alt=""
            width="1400"
            height="600"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(5rem,11vw,9rem)]">
          <span className="kicker">Labor & Finance</span>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[26ch] mb-4">
            Labor Cost Control for Miami Restaurants
          </h1>
          <p className="text-[#d8d8d8] text-lg max-w-[52ch] leading-relaxed">November 2023</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Labor is the largest controllable cost in any restaurant or hotel F&B operation.
                It is also the one most operators manage reactively — cutting hours when the
                month looks bad, adding them back when it gets busy, and wondering why the
                percentage never stabilizes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>The real problem is the schedule</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="card">
                <p>
                  Most labor problems are scheduling problems. Schedules built on habit rather than
                  sales curves, positions staffed because they have always been staffed that way,
                  and managers who add coverage when they are nervous rather than when the numbers
                  justify it. The result is labor that drifts to 32, 34, 38 percent and stays there.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Building schedules against sales</h2>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div className="card">
                <p>
                  The fix starts with trailing sales data — not last week, but the last eight to
                  twelve weeks by day part. You build the schedule to match that curve, with defined
                  thresholds for when to add or cut positions based on actual covers, not gut feel.
                  Managers stop making staffing decisions and start executing a system.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                When the schedule is built correctly and managers are held to it, labor typically
                moves three to five points in the first thirty days. Not because anyone worked
                harder — but because the hours finally match the revenue.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="mt-4 flex gap-4 flex-wrap">
                <Link to="/contact" className="btn btn-primary">Talk About Your Labor Cost</Link>
                <Link to="/insights" className="btn btn-ghost">← Back to Insights</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
