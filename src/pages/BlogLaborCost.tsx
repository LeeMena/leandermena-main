import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function BlogLaborCost() {
  return (
    <>
      <SEO
        title="Labor Cost Control for Miami Restaurants"
        description="Labor is your biggest controllable cost. Here is how to bring it under control without cutting service quality or burning out your team."
        path="/insights/labor-cost-control-miami-restaurants"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Labor & Finance</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Labor Cost Control for Miami Restaurants
          </h1>
          <p className="text-[#555555] text-sm">November 2023</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-[68ch] flex flex-col gap-6 text-[#888888]">
            <p>
              Labor is the largest controllable cost in any restaurant or hotel F&B operation.
              It is also the one most operators manage reactively — cutting hours when the
              month looks bad, adding them back when it gets busy, and wondering why the
              percentage never stabilizes.
            </p>
            <h2 className="font-display text-xl font-bold text-[#e8e8e8] mt-4">
              The real problem is the schedule
            </h2>
            <p>
              Most labor problems are scheduling problems. Schedules built on habit rather than
              sales curves, positions staffed because they have always been staffed that way,
              and managers who add coverage when they are nervous rather than when the numbers
              justify it. The result is labor that drifts to 32, 34, 38 percent and stays there.
            </p>
            <h2 className="font-display text-xl font-bold text-[#e8e8e8] mt-4">
              Building schedules against sales
            </h2>
            <p>
              The fix starts with trailing sales data — not last week, but the last eight to
              twelve weeks by day part. You build the schedule to match that curve, with defined
              thresholds for when to add or cut positions based on actual covers, not gut feel.
              Managers stop making staffing decisions and start executing a system.
            </p>
            <p>
              When the schedule is built correctly and managers are held to it, labor typically
              moves three to five points in the first thirty days. Not because anyone worked
              harder — but because the hours finally match the revenue.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn btn-primary">
                Talk About Your Labor Cost
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
