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
                Every restaurant opening is a project management problem before it is an
                operations problem. The operators who open on time and on budget approach
                pre-opening as a sequenced process with clear milestones. The ones who struggle
                treat it as a checklist to be completed when time allows.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                This is the framework I use when leading pre-openings in Miami - built from
                leading openings for independent concepts, hotel outlets, and multi-unit groups.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>Phase 1: Infrastructure (120-90 Days Out)</h2>
              <p>
                Vendor selection, contract execution, and supply chain setup. POS configuration
                and reporting structure. Leadership hiring and compensation structure finalized.
                This phase creates the operational infrastructure that everything else runs on.
                Delays here cascade into every subsequent phase.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Phase 2: People (90-45 Days Out)</h2>
              <p>
                Full hiring complete. Training materials written and production-ready. Management
                team in place and aligned on standards. The people phase is where most pre-openings
                fall behind. Hiring takes longer than expected, training materials are not ready
                when staff arrive, and the management team is still being assembled when training
                should already be underway.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>Phase 3: Operations (45-14 Days Out)</h2>
              <p>
                Training in full execution. Menu and recipe costing finalized. Par levels calculated
                and initial orders placed. Systems tested under real conditions - not theoretical.
                This is where problems surface and get resolved before opening night rather than
                during it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>Phase 4: Opening (14-0 Days)</h2>
              <p>
                Soft opening with controlled covers. Team calibration and feedback loops. Management
                observation and real-time coaching. The opening phase is not a celebration - it is
                the most important training period in the restaurant's life. Treat it that way.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Opening in Miami in the next 6-12 months?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I lead pre-openings end-to-end. Let's talk about where you are in the process
                  and what you need to get to a clean opening.
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
