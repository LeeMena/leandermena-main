import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function BlogTraining() {
  return (
    <>
      <SEO
        title="Building a Training Program That Works"
        description="Why most restaurant training fails and how to build one that actually sticks and improves performance."
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
              Why most restaurant training fails and how to build one that actually sticks and improves performance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <div className="prose-article">
            <ScrollReveal>
              <p>
                Most restaurant training programs do not work. Not because the content is wrong,
                but because the delivery model is wrong. Information is transferred, but behavior
                does not change. The training is considered complete when the material has been
                covered, not when the skill has been demonstrated.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p>
                Here is what separates training programs that produce consistent execution from
                ones that become binders on a shelf.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2>The Core Problem: Coverage vs. Competency</h2>
              <p>
                Most training programs are designed around coverage: here is the menu, here are
                the steps of service, here is the POS. Completion is measured by whether the
                material was presented, not whether the trainee can perform the skill under
                real conditions. This produces staff who have been trained but not prepared.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2>Competency-Based Training</h2>
              <p>
                A competency-based program is structured differently. Each skill has a defined
                observable standard. The trainee is assessed against that standard, not against
                a checklist of topics covered. Training is not complete until the standard is
                met. This requires more work to design but produces dramatically better results
                because it forces clarity about what good performance actually looks like.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h2>The Trainer Is the Weakest Link</h2>
              <p>
                Most restaurant training fails at the trainer level. Your best server is often
                not your best trainer. Training requires patience, communication skill, and the
                ability to demonstrate and observe simultaneously. Investing in trainer
                development, teaching your trainers how to train, produces more improvement
                than any content upgrade.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2>Reinforcement Is Not Optional</h2>
              <p>
                Initial training sets the baseline. Reinforcement determines whether the baseline
                holds. Pre-shift conversations, observation and feedback during service, and regular
                recalibration on standards are what separate teams that maintain quality from teams
                that drift. Build reinforcement into the schedule as a non-negotiable management
                activity, not something that happens when there is time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <h2>What a Working Training Program Looks Like</h2>
              <p>
                A training program that works has written competency standards for every role,
                a structured onboarding sequence with defined progression milestones, trained
                trainers who are assessed and developed, a reinforcement calendar built into
                management schedules, and a feedback loop that identifies where the program
                is not working and fixes it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Is your training producing consistent execution?</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  I build training programs from the competency standard up, including trainer
                  development and the reinforcement structure that makes them hold. Let's talk.
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
