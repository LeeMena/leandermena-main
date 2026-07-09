import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const skillData = {
  summary: 'I specialize in making pre-opening phases predictable, controlled, and on-budget, from construction coordination through soft open and full launch. Every system I build is designed to be owned by your team after I leave.',
  bullets: [
    'Built opening SOPs, staffing plans, and training roadmaps from scratch, covering FOH, BOH, banquets, and service outlets.',
    'Managed 40+ hires across pre-opening phases, including sourcing, screening, onboarding, and certification.',
    'Negotiated vendor contracts, established supply chain relationships, and implemented cost control frameworks before opening week.',
    'Coordinated with construction, ownership, and brand teams to align physical space, permits, and operational readiness.',
  ],
  preopening: [
    { skill: 'Pre-Opening Planning & Execution', level: 98 },
    { skill: 'SOP Development', level: 97 },
    { skill: 'Staffing & Hiring Plans', level: 95 },
    { skill: 'Training Program Design', level: 94 },
    { skill: 'Vendor Sourcing & Negotiation', level: 93 },
    { skill: 'Opening Week Management', level: 96 },
  ],
  training: [
    'Designed structured training programs for servers, bartenders, supervisors, and banquet captains, with measurable milestones.',
    'Built learning paths by role, covering product knowledge, service sequence, POS operation, and safety compliance.',
    'Developed manager training protocols focused on scheduling, floor management, shift reporting, and team accountability.',
  ],
  menu: [
    'Applied menu engineering principles (contribution margin analysis, item positioning, category mix) to increase check averages.',
    'Priced menus with full cost-build methodology, factoring in yield, waste, and target food cost by category.',
    'Collaborated with chefs on menu development from an operational and financial perspective, not just culinary.',
  ],
  operations: [
    { skill: 'P&L Management & Reporting', level: 96 },
    { skill: 'Labor Scheduling & Cost Control', level: 97 },
    { skill: 'Menu Engineering & Costing', level: 93 },
    { skill: 'Inventory & Purchasing Systems', level: 91 },
    { skill: 'POS Configuration & Reporting', level: 89 },
    { skill: 'Health & Safety Compliance', level: 94 },
  ],
  formats: [
    'Independent restaurants, upscale, casual, fast-casual, and bar-focused concepts.',
    'Hotel F&B programs, all-day dining, specialty restaurants, lobby bars, and in-room dining.',
    'Banquet and catering operations, from 50-person private dinners to 1,000+ person convention events.',
    'Multi-outlet hotel operations, coordinating across F&B, events, and rooms divisions.',
  ],
  stats: [
    { num: '18+', label: 'Years in F&B Operations' },
    { num: '5', label: 'Pre-Openings Led' },
    { num: '$9.1M', label: 'Annual Revenue Managed' },
    { num: '$1.2M+', label: 'Year-One Revenue, Maska Indian Kitchen Pre-Opening' },
  ],
  faq: [
    {
      q: 'Do you work with restaurants outside Miami?',
      a: 'My network and market knowledge are deepest in Miami and South Florida, built from 18+ years operating here. That said, I take pre-opening and consulting engagements in other markets when the project is the right fit. Reach out and let’s talk through the specifics.',
    },
    {
      q: 'How do you typically engage with a new client?',
      a: 'I embed alongside your existing team, not as a replacement, but as an operating layer that builds systems, fills gaps, and elevates the team already in place. Most engagements start with a scoping call to understand your operation, then a proposed scope and timeline.',
    },
    {
      q: 'What’s the difference between ongoing consulting and pre-opening support?',
      a: 'You get senior F&B operational leadership (the kind that typically comes with a full-time executive hire) at a fraction of the cost. For pre-opening, that means GM-level oversight from groundbreaking to launch. For ongoing consulting, it means operational leadership scoped to your needs.',
    },
  ],
}

function Bar({ level }: { level: number }) {
  return (
    <div style={{ height: '4px', background: 'var(--color-surface-dynamic)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${level}%`, background: 'var(--color-primary)', borderRadius: 'var(--radius-full)' }} />
    </div>
  )
}

export default function Skills() {
  return (
    <>
      <SEO
        title="Hospitality & F&B Operations Skills | Leander Mena"
        description="Detailed skill set in pre-opening leadership, labor and cost control, SOP development, P&L management, and team training for Miami hotels and restaurants | Leander Mena."
        path="/skills"
        schemaType="profile"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '380px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/kitchen.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(10,10,10,0.92) 40%,rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
          <span className="kicker">Skills</span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[26ch] mb-4">
            Hospitality &amp; F&amp;B Operations Skills | Miami, FL
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Pre-opening leadership, cost control, team development, and operational systems built from 18+ years in Miami F&amp;B.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">What I Do</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">What I Do and How It Translates to Results</h2>
            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{skillData.summary}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {skillData.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  <span className="text-[#b8a080] mt-1 shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Pre-Opening Skills */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-default)' }}>
          <ScrollReveal>
            <span className="kicker">Pre-Opening</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-6">Pre-Opening Leadership</h2>
            <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {skillData.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    <span className="text-[#b8a080] mt-1 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {skillData.preopening.map((s) => (
                  <div key={s.skill}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{s.skill}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{s.level}%</span>
                    </div>
                    <Bar level={s.level} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Training */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">Team Development</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-4">Training &amp; Team Development</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {skillData.training.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  <span className="text-[#b8a080] mt-1 shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Engineering */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">Menu Strategy</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-4">Menu Engineering &amp; Costing</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {skillData.menu.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  <span className="text-[#b8a080] mt-1 shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Operations skills */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-default)' }}>
          <ScrollReveal>
            <span className="kicker">Operations</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-6">Operations &amp; Financial Management</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '560px' }}>
              {skillData.operations.map((s) => (
                <div key={s.skill}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{s.skill}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{s.level}%</span>
                  </div>
                  <Bar level={s.level} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Formats */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">Formats</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-4">Venue Types &amp; Formats</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {skillData.formats.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  <span className="text-[#b8a080] mt-1 shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '1.5rem' }}>
              {skillData.stats.map((s) => (
                <div key={s.label} className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                  <div className="font-display" style={{ fontSize: 'clamp(1.75rem,3vw,2.25rem)', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.4rem', letterSpacing: '0.04em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">FAQ</span>
            <h2 className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold mb-6">Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skillData.faq.map((f, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.q}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="kicker">Work Together</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Ready to Put These Skills to Work?</h2>
            <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>Whether you’re opening a new concept, turning around a struggling operation, or building systems that scale, I can step in and run it.</p>
            <Link to="/contact" className="btn btn-primary">Start the Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
