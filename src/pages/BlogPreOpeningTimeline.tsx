import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogPreOpeningTimeline() {
  return (
    <>
      <SEO
        title="Pre-Opening Timeline: From Permits to First Service — Miami | Leander Mena"
        description="A week-by-week 90-day pre-opening timeline for Miami restaurants and hotel F&B. Staffing, SOPs, training, soft-open, and opening-night readiness."
        path="/insights/pre-opening-timeline"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/pre-opening.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Pre-Opening</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              The Pre-Opening Timeline Most Operators Get Wrong
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              A 90-day framework from permits to first service, built from real Miami openings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                A successful restaurant opening is not an event. It is a 90-day operational
                build that starts before the first guest walks in. Most openings go wrong not
                because the concept is bad or the team is unqualified, but because the operational
                work is compressed into the final two weeks. This timeline is the framework I use for
                every pre-opening engagement in Miami.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Phase 1: Foundation (Days 90 to 61)</h2>
              <p>
                This phase is about infrastructure. Permits, licenses, vendor contracts, POS
                configuration, and the staffing plan. In Miami, the City of Miami BTR and Florida
                DBPR alcohol license both require lead time. Applications submitted in week one
                of this phase rarely cause delays. Applications submitted in week eight almost
                always do.
              </p>
              <p>
                The staffing plan built in this phase is not a hiring list. It is a model: how
                many covers per daypart, what positions are needed at each volume tier, what the
                labor cost target is, and what the training timeline requires. Hiring before
                this model exists means hiring the wrong number of people at the wrong time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>Phase 2: Build (Days 60 to 31)</h2>
              <p>
                Hiring happens here, not earlier. The training program, service standards, and
                SOPs need to exist before the first hire joins, otherwise you are training people
                on a system that is still being written. Every hire in this phase should know
                their role-specific training track before their start date.
              </p>
              <p>
                Vendor relationships are confirmed and tested in this phase. The first full
                kitchen walkthrough with the culinary team happens here. POS is live and tested
                by management before any front-of-house staff touch it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Phase 3: Rehearsal (Days 30 to 8)</h2>
              <p>
                Training is complete, systems are live, and the team is running simulations.
                A structured soft-open sequence: internal family meal service first, then
                invite-only friends and family, then a limited public soft open with reduced
                covers and extended ticket times. Each service has a structured debrief within
                two hours of close.
              </p>
              <p>
                Most of the operational problems that surface during a rocky opening were visible
                during soft-open and ignored. The debrief process exists to capture them while
                there is still time to fix them.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Phase 4: Open (Days 7 to 1)</h2>
              <p>
                No new systems, no major changes. The week before opening is for refinement,
                not reinvention. Final permitting checks, confirmed vendor delivery schedules,
                full team briefing on opening-week covers and reservation flow, and a clear
                management communication plan for the first service.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>The Post-Open Audit (Day 30)</h2>
              <p>
                Thirty days after opening, a structured audit against the original plan. Labor
                cost versus projection, cover counts versus forecast, staff retention versus
                the 30-day target, and a guest feedback review. This is when the operation
                stops being a pre-opening and starts being a running business. The operators
                who do this audit honestly are the ones who catch problems before they become
                expensive habits.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Opening a restaurant or hotel F&amp;B outlet in Miami?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I lead pre-opening builds from permit stage through the 30-day post-open audit.
                  Let's talk about your timeline.
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
