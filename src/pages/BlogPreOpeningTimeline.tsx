import SEO from '@/components/SEO'
import RelatedArticles from '@/components/RelatedArticles'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogPreOpeningTimeline() {
  return (
    <>
      <SEO
        title="The Pre-Opening Timeline Most Operators Get Wrong"
        description="Why most restaurant pre-openings run behind and the 120-day framework that fixes it."
        path="/insights/pre-opening-timeline"
        image="https://www.leandermena.com/images/og/blog-pre-opening.jpg"
        imageAlt="Dining room prepared in the weeks before a restaurant opening"
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
              The Pre-Opening Timeline Most Operators Get Wrong
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              Why most restaurant pre-openings run behind and the 120-day framework that fixes it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Most pre-openings run behind. Not because operators are disorganized, but because
                the timeline is wrong from the start. The common mistake is working backward from
                the opening date to set deadlines, rather than working forward from what each phase
                of preparation actually requires.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                I have led pre-openings that ran on time and ones that ran behind. The difference
                is almost never budget. It is sequencing and buffer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The Mistake: Compressing the Timeline to Hit a Date</h2>
              <p>
                When an opening date is set by the owner or investor before the operational
                team is engaged, the pre-opening timeline gets compressed to fit. Vendor setup
                that requires 60 days gets allocated 30. Training that needs 3 weeks gets 10 days.
                The result is a team that arrives underprepared, systems that are not tested, and
                an opening night that functions as the first real training session in front of
                paying guests.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>What 120 Days Actually Covers</h2>
              <p>
                A 120-day pre-opening timeline is not padded. It is exactly what the work requires.
                Days 120 to 90 cover infrastructure: vendor contracts, POS setup, management hiring.
                Days 90 to 45 cover people: staff hiring, training material development, recipe
                costing. Days 45 to 14 cover operations: full training execution, systems testing,
                soft opening preparation. Days 14 to 0 cover calibration: soft opens, feedback
                loops, real-time coaching before full public opening.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>The Buffer Problem</h2>
              <p>
                Every phase in a pre-opening has dependencies. Things cannot start until
                something else is complete. Vendor contracts must be signed before training menus
                are costed. Management must be hired before training materials are finalized.
                Staff cannot be trained on systems that are not yet configured. A 90-day timeline
                assumes everything goes right. A 120-day timeline assumes things go wrong and
                builds in recovery time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>When You Are Already Behind</h2>
              <p>
                If you are reading this at 60 days out and the foundation work is not done,
                the options are: push the date, add resources, or accept a compromised opening.
                Pushing the date is almost always the right call when the alternative is opening
                underprepared. The financial cost of a delayed opening is real. The financial
                cost of a failed first 30 days is larger.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Where are you in your pre-opening timeline?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I can assess your current position and build a realistic path to opening day,
                  whether you are at 120 days or 45. Let's talk.
                </p>
                <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      <RelatedArticles currentSlug="pre-opening-timeline" />
      </article>
    </>
  )
}
