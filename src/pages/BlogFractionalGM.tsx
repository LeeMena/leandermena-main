import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function BlogFractionalGM() {
  return (
    <>
      <SEO
        title="What a Fractional F&B Director Actually Does"
        description="Not a consultant with a binder. Here is what the fractional F&B director role looks like in practice and why Miami operators are using it."
        path="/insights/what-a-fractional-gm-actually-does"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Fractional Operations</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            What a Fractional F&B Director Actually Does
          </h1>
          <p className="text-[#555555] text-sm">March 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-[68ch] flex flex-col gap-6 text-[#888888]">
            <p>
              The title sounds like a workaround. It isn't. A fractional F&B director is a
              full-capability operator who works with your business on a defined schedule —
              typically two to four days per week — instead of full-time. The work is the same.
              The overhead is not.
            </p>
            <p>
              Most operators who call me are not looking for advice. They are looking for someone
              to show up, assess what is actually happening on the floor and in the numbers, and
              fix it. That is what this role does.
            </p>
            <h2 className="font-display text-xl font-bold text-[#e8e8e8] mt-4">
              What the role looks like in practice
            </h2>
            <p>
              On a typical engagement I am on-site during peak service periods, in the office for
              weekly P&L review with ownership, and running manager coaching sessions built around
              what I am actually seeing. I am not writing reports about problems. I am fixing them
              in real time.
            </p>
            <p>
              Labor gets restructured. Schedules get rebuilt against actual sales curves. SOPs get
              rewritten so they reflect how the operation actually runs, not how it was supposed to
              run at opening. Vendors get renegotiated. The floor gets coached.
            </p>
            <h2 className="font-display text-xl font-bold text-[#e8e8e8] mt-4">
              Why operators use it
            </h2>
            <p>
              A full-time F&B director in Miami costs $90,000 to $130,000 per year in salary alone
              before benefits, payroll taxes, and the six to twelve months it takes to find and
              onboard the right person. A fractional engagement delivers the same operational
              capability at a fraction of that cost — and it starts in days, not months.
            </p>
            <p>
              The model works best for independent operators, ownership groups managing two to five
              units, and hotel F&B departments that need senior leadership without the full-time
              budget to support it.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn btn-primary">
                Talk About Your Operation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
