import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

export default function BlogPreOpening() {
  return (
    <>
      <SEO
        title="The Miami Pre-Opening Playbook"
        description="What the first 90 days before opening should look like and the mistakes that cause most new concepts to stumble in week one."
        path="/insights/miami-pre-opening-playbook"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Pre-Opening</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            The Miami Pre-Opening Playbook
          </h1>
          <p className="text-[#555555] text-sm">January 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-[68ch] flex flex-col gap-6 text-[#888888]">
            <p>
              Most openings fail in the last thirty days before the doors open. Not because the
              concept is wrong or the team is bad — but because the operational foundation was
              never built. Menus get finalized too late. Training happens in a rush. SOPs get
              skipped entirely. And on opening night, everything the guest experiences reflects
              that chaos.
            </p>
            <h2 className="font-display text-xl font-bold text-[#e8e8e8] mt-4">
              The 90-day window
            </h2>
            <p>
              Ninety days out is when operations work should start in parallel with the
              construction and design process. Staffing plans, training sequences, SOP
              development, vendor onboarding, and service rehearsals all need time to develop
              properly. Trying to compress that work into two weeks before opening is where
              most of the damage happens.
            </p>
            <h2 className="font-display text-xl font-bold text-[#e8e8e8] mt-4">
              What a structured opening looks like
            </h2>
            <p>
              A structured pre-opening has a staffing plan built before the first hire is made.
              It has a training sequence that moves from classroom to floor in stages, with
              assessments at each step. It has friends-and-family events that are treated like
              real service — not a party. It has post-opening audits at 30, 60, and 90 days
              that measure performance against targets and adjust systems before problems compound.
            </p>
            <p>
              The goal is not a perfect opening night. The goal is a team that knows what to do
              when things go wrong — because they will.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn btn-primary">
                Start a Pre-Opening Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
