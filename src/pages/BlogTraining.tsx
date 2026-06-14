import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogTraining() {
  return (
    <>
      <SEO
        title="How to Build a Restaurant Training Program That Works"
        description="A practical guide to building a restaurant training program that reduces turnover, improves consistency, and scales with your team in Miami."
        path="/insights/building-training-program-that-works"
        type="article"
        schemaType="article"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog-training.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <ScrollReveal>
            <span className="kicker">Training</span>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4">
              Building a Training Program That Works
            </h1>
            <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
              Why most restaurant training fails — and how to build one that actually sticks and improves performance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Most restaurant training is broken. It is a 2-day shadow shift followed by a
                sink-or-swim first week. The new hire makes mistakes in front of guests, gets
                frustrated, and quits or gets fired within 30 days. The manager blames the hire.
                The hire blames the training. The cycle repeats.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                I have built training programs for independent restaurants, hotel F&amp;B outlets,
                and multi-unit groups in Miami. The ones that work share the same structure.
                The ones that fail share the same gaps.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The 4 Pillars of a Training Program That Holds</h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h3>1. Role-Specific, Not Generic</h3>
              <p>
                A server and a barback do not need the same training document. Generic onboarding
                binders get ignored because they are not relevant to the person reading them.
                Every role needs its own track: what you need to know, what you need to be able
                to do, and how you will be evaluated before you are cleared to solo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h3>2. Structured Observation Before Solo Shifts</h3>
              <p>
                Shadow shifts without a checklist are not training, they are observation. Every
                shadow shift needs a structured checklist the trainer signs off on. The new hire
                should not be cleared for solo until they have demonstrated competency on each item,
                not just been present for a set number of days.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h3>3. A 30-Day Check-In That Actually Happens</h3>
              <p>
                The 30-day check-in is the single highest-leverage retention tool available to
                managers. Most concepts either skip it or treat it as a formality. Done right,
                it catches misalignment before it becomes a resignation. The structure is simple:
                what is going well, what is hard, what do you need from us. Then you listen and act.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <h3>4. Training That Connects to Standards</h3>
              <p>
                Staff do not follow standards they do not know exist. Every training program needs
                a direct line from onboarding content to the operational standards they are being
                held to. If you have an SOP for table turns, that SOP should be in the training.
                If you have a service sequence, new hires should be tested on it before they hit
                the floor.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h2>What Good Looks Like: A Real Example</h2>
              <p>
                At a 120-seat independent concept in Wynwood, I rebuilt the front-of-house training
                program from scratch during pre-opening. The previous approach was two shadow shifts
                and a verbal overview of the menu. We replaced it with a 5-day structured track:
                day one orientation and tour, day two product knowledge and menu testing, day three
                shadow with checklist, day four supervised solo with manager sign-off, day five
                evaluated solo shift with feedback session.
              </p>
              <p>
                Turnover in the first 90 days dropped compared to the owner's previous concept.
                The GM cited the training structure as the primary reason. Staff knew what was
                expected before they were ever evaluated on it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <h2>The Common Gaps</h2>
              <p>
                In every underperforming training program I have seen, the problem is one of three things:
                the content exists but is not used, the trainer is inconsistent, or there is no
                accountability mechanism at the end of training. Fixing any one of these will improve
                outcomes. Fixing all three transforms retention.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Need a training program built from scratch?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I work with Miami restaurants and hotel F&amp;B teams to build training programs
                  that reduce turnover and create consistent guest experiences.
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
