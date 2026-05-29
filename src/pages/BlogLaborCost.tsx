import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function BlogLaborCost() {
  return (
    <>
      <SEO
        title="Labor Cost Control in Miami Restaurants"
        description="Scheduling and productivity systems used across 18+ years to keep labor cost in line without sacrificing service in Miami restaurants."
        path="/blog/labor-cost"
      />

      <article>
        <header className="page-header">
          <div className="container">
            <span className="kicker">Operations</span>
            <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
              Labor Cost Control in Miami Restaurants
            </h1>
            <p className="text-[#888888] text-lg max-w-[54ch]">
              Labor cost is the most controllable major expense in a restaurant — and the one most
              often managed reactively.
            </p>
          </div>
        </header>

        <section className="content-body">
          <ScrollReveal>
            <h2>Start With the Schedule as a Budget Tool</h2>
            <p>
              Most operators write schedules based on who's available. The better approach is to
              write the schedule based on projected revenue — then work backwards to a labor cost
              target. If your labor cost target is 28% and projected weekly revenue is $60,000, your
              weekly labor budget is $16,800.
            </p>

            <h2>Productivity Metrics That Actually Matter</h2>
            <ul>
              <li>
                <strong>Revenue per labor hour</strong> — total weekly revenue divided by total hours worked.
              </li>
              <li>
                <strong>Covers per server</strong> — how many guests each front-of-house team member handles per shift.
              </li>
              <li>
                <strong>Kitchen labor as a percentage of food revenue</strong> — separate from front-of-house for cleaner analysis.
              </li>
            </ul>

            <h2>Scheduling Disciplines That Reduce Waste</h2>
            <p>
              Most labor cost problems come from the same few places: early clock-ins, late cut
              decisions, and over-staffing during shoulder periods.
            </p>
            <ul>
              <li>Set a hard rule on clock-in windows — no earlier than 7 minutes before scheduled time</li>
              <li>Designate one manager per shift as the cut decision-maker</li>
              <li>Review the prior week's labor report every Monday before writing the next schedule</li>
              <li>Build in a swing position for Friday and Saturday rather than defaulting to full staff</li>
            </ul>

            <h2>Training Reduces Labor Cost</h2>
            <p>
              Well-trained staff work faster, make fewer mistakes, and require less supervision.
              The time invested in proper onboarding and ongoing coaching pays back in productivity
              every shift.
            </p>

            <div className="mt-10 p-6 bg-[#111111] border border-[#2a2a2a] rounded-xl">
              <p className="text-[#888888] mb-4">
                Struggling with labor cost in your Miami restaurant?
              </p>
              <Link to="/contact" className="btn btn-primary">
                Discuss your operations
              </Link>
              <Link to="/services" className="btn btn-secondary ml-3">
                View services
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </>
  )
}
