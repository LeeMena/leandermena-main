import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogPreOpening() {
  return (
    <>
      <SEO
        title="The Miami Pre-Opening Playbook"
        description="What the first 90 days before opening should look like and the mistakes that cause most new concepts to stumble in week one."
        path="/insights/miami-pre-opening-playbook"
        type="article"
        schemaType="article"
        article={{
          headline: 'The Miami Pre-Opening Playbook',
          datePublished: '2024-01-01',
          dateModified: '2026-05-30',
        }}
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/Playbook (1).jpg"
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
          <span className="kicker">Pre-Opening</span>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[26ch] mb-4">
            The Miami Pre-Opening Playbook
          </h1>
          <p className="text-[#d8d8d8] text-lg max-w-[52ch] leading-relaxed">January 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Most openings fail in the last thirty days before the doors open. Not because the
                concept is wrong or the team is bad — but because the operational foundation was
                never built. Menus get finalized too late. Training happens in a rush. SOPs get
                skipped entirely. And on opening night, everything the guest experiences reflects
                that chaos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>The 90-day window</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="card">
                <p>
                  Ninety days out is when operations work should start in parallel with the
                  construction and design process. Staffing plans, training sequences, SOP
                  development, vendor onboarding, and service rehearsals all need time to develop
                  properly. Trying to compress that work into two weeks before opening is where
                  most of the damage happens.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>What a structured opening looks like</h2>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div className="card">
                <p>
                  A structured pre-opening has a staffing plan built before the first hire is made.
                  It has a training sequence that moves from classroom to floor in stages, with
                  assessments at each step. It has friends-and-family events that are treated like
                  real service — not a party. It has post-opening audits at 30, 60, and 90 days
                  that measure performance against targets and adjust systems before problems compound.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                The goal is not a perfect opening night. The goal is a team that knows what to do
                when things go wrong — because they will.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="mt-4 flex gap-4 flex-wrap">
                <Link to="/contact" className="btn btn-primary">Start a Pre-Opening Conversation</Link>
                <Link to="/pre-opening" className="btn btn-ghost">Pre-Opening Services →</Link>
                <Link to="/insights" className="btn btn-ghost">← Back to Insights</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
