import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogPreOpening() {
  return (
    <>
      <SEO
        title="The Miami Pre-Opening Playbook"
        description="A practical framework for opening restaurants and hotel F&B programs in Miami on time and on budget."
        path="/insights/miami-pre-opening-playbook"
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
              The Miami Pre-Opening Playbook
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              A practical framework for opening restaurants and hotel F&amp;B programs in Miami on time and on budget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Miami is one of the most competitive restaurant markets in the United States.
                Real estate costs are high, labor is tight, and the guest has seen everything.
                Opening here without a disciplined pre-opening process is expensive.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                I have led five restaurant and hotel F&amp;B pre-openings in Miami. The framework
                below is what I use. It is built around a 120-day timeline with clear milestones
                and deliverables at each phase.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>Phase 1: Foundation (Days 1–30)</h2>
              <p>
                The first 30 days are about infrastructure. Business entity, permits, liquor
                license application, lease review, insurance, and the beginning of vendor
                outreach. This phase also includes the first version of the organizational chart
                and the hiring plan. Most operators start hiring too late and too fast. The
                right sequence is: define the roles, write the job descriptions, build the
                training plan, then hire.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Phase 2: Build (Days 31–75)</h2>
              <p>
                This phase runs concurrently with construction. Vendor contracts are finalized.
                Management hires are complete and working. The menu is developed and costed.
                The POS is configured. The training program is written. Recruiting for hourly
                staff begins no later than day 60. In Miami, high-quality FOH candidates get
                multiple offers — if you post too late, you lose them to concepts that planned ahead.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Phase 3: Train (Days 76–105)</h2>
              <p>
                The 30 days before opening are for training, not logistics. If logistics are
                still unresolved at day 76, the opening date needs to move or the pre-opening
                budget needs to expand. Training phase includes full team onboarding, menu
                knowledge testing, service sequence rehearsal, and multiple full-service
                simulations before friends-and-family night.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>Phase 4: Launch (Days 106–120)</h2>
              <p>
                Soft open with controlled covers. Identify the gaps. Fix them before full
                public opening. The soft open is not a marketing event — it is a diagnostic.
                Use it accordingly. Full opening follows with the team already operating at
                a standard, not still learning it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Opening in Miami in the next 6 months?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I lead pre-openings end-to-end or step in at any phase to get an opening back on track.
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
