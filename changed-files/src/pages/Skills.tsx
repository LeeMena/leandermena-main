import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const coreSkills = [
  {
    category: 'Operations & Pre-Opening Leadership',
    summary: 'I specialize in making pre-opening phases predictable, controlled, and on-budget — from construction coordination through opening night.',
    bullets: [
      'Led 5+ full pre-opening projects across Miami hotels and restaurants, delivering day-one readiness on time and within labor budget.',
      'Built opening SOPs, staffing plans, and training roadmaps from scratch — covering FOH, BOH, banquets, and service outlets.',
      'Coordinated directly with ownership, GMs, architects, vendors, and city agencies through the full pre-opening lifecycle.',
      'Executed high-profile grand openings including a 1,500-guest celebrity event at SLS Brickell.',
    ],
  },
  {
    category: 'Labor & Cost Control',
    summary: 'Labor is the single largest variable in F&B profitability. I build scheduling models and P&L disciplines that protect margins without cutting service.',
    bullets: [
      'Managed full P&L for a $9.1M dual-concept operation, maintaining prime costs within plan while growing margins year-over-year.',
      'Reduced FOH overtime by 23% at Plomo Tequila & Taco Bar through strategic labor scheduling and shift redesign.',
      'Centralized beverage purchasing at Accor/Pullman Miami Airport, delivering $180K+ in annual savings.',
      'Implemented daily flash reporting so operators could spot and correct cost variances in real time.',
    ],
  },
  {
    category: 'SOPs, Systems & Training',
    summary: 'Consistent operations come from written systems and teams that actually follow them. I build both.',
    bullets: [
      'Developed comprehensive FOH and BOH SOPs for restaurants, hotels, and catering operations across Miami.',
      'Designed structured training programs for servers, bartenders, supervisors, and banquet captains — with measurable milestones.',
      'Built F&B onboarding protocols that cut new-hire ramp time and reduced early turnover at multiple properties.',
      'Created opening, shift, and closing checklists that became the operational backbone of each venue.',
    ],
  },
  {
    category: 'P&L Management & Menu Engineering',
    summary: 'Numbers without context are noise. I translate P&L data into operational decisions that improve margin and guest experience simultaneously.',
    bullets: [
      'Drove Maska Indian Kitchen to $1.2M+ in year-one revenue through disciplined pricing, labor scheduling, and capital efficiency.',
      'Applied menu engineering principles — contribution margin analysis, item positioning, category mix — to increase check averages.',
      'Standardized portioning and recipe costing to stabilize COGS and reduce waste across multi-outlet operations.',
      'Developed off-premise delivery and takeout operations generating 24% of revenue with no margin dilution.',
    ],
  },
  {
    category: 'Multi-Unit & Multi-Concept Leadership',
    summary: 'Managing two concepts simultaneously requires systems that run without you. I build the infrastructure for that.',
    bullets: [
      'Simultaneously operated two distinct venues (Marabu + La Cervecería de Barrio) with 78 FTEs and $9.1M in combined revenue.',
      'Managed hotel F&B across multiple outlets: restaurant, bar, in-room dining, banquets, and private events.',
      'Led brand rebrand operations aligning F&B standards with elevated identity during Sofitel → Pullman transition.',
      'Coordinated with ownership groups, brand standards teams, and external partners across all active operations.',
    ],
  },
  {
    category: 'Hospitality Formats & Concepts',
    summary: 'Every format has different operating rhythms. I have led across all of them.',
    bullets: [
      'Full-service hotels and resort properties (banquets, outlets, IRD, events).',
      'Independent restaurants — upscale, casual, fast-casual, and bar-focused concepts.',
      'High-volume catering and event operations (weddings, corporate, celebrity events).',
      'Pre-opening phases for ground-up builds, rebrands, and concept pivots.',
    ],
  },
]

const outcomes = [
  { num: '$9.1M', label: 'Annual Revenue Managed (Dual Concept)' },
  { num: '$1.2M+', label: 'Year-One Revenue — Maska Indian Kitchen Pre-Opening' },
  { num: '$180K+', label: 'Annual Savings via Beverage Purchasing Centralization' },
  { num: '23%', label: 'FOH Overtime Reduction via Scheduling Redesign' },
  { num: '5+', label: 'Pre-Opening Projects Led in Miami' },
  { num: '18+', label: 'Years in Miami Hospitality Operations' },
]

const faqs = [
  {
    q: 'What types of properties do you typically help?',
    a: 'Hotels, independent restaurants, bar concepts, and multi-outlet F&B operations in Miami and South Florida. Pre-openings, operational turnarounds, and performance stabilization are my core focus.',
  },
  {
    q: 'How do you work with existing F&B teams?',
    a: 'I embed alongside your existing team — not as a replacement, but as an operating layer that builds systems, fills gaps, and elevates output. I work directly with GMs, chefs, and operators.',
  },
  {
    q: 'What does fractional F&B leadership actually mean?',
    a: 'You get senior F&B operational leadership — the kind that typically comes with a full-time executive hire — at a fraction of the cost and commitment. Scoped by project, retainer, or hours depending on what you need.',
  },
  {
    q: 'Do you only work in Miami?',
    a: 'Miami and South Florida are my home market, but I take select projects in other markets depending on scope and timeline. Contact me to discuss.',
  },
]

export default function Skills() {
  return (
    <>
      <SEO
        title="What Does a Fractional F&B Director Do? | Leander Mena"
        description="What a fractional F&B director actually does for restaurants and hotels: pre-opening leadership, labor and cost control, SOP development, P&L management, and team training — without the full-time executive salary."
        path="/skills"
        schemaType="profile"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: 'clamp(420px, 60vw, 680px)' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/services.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10" style={{ paddingTop: 'clamp(3rem, 10vw, 7rem)', paddingBottom: 'clamp(3rem, 10vw, 7rem)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Fractional Leadership, Explained</span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-4 lg:mb-6">
                What Does a Fractional F&B Director Do?
              </h1>
              <p className="text-[#d8d8d8] text-base lg:text-lg max-w-[52ch] mb-6 lg:mb-8 leading-relaxed">
                A fractional F&B director gives your restaurant or hotel executive-level operations leadership — pre-openings, labor control, SOPs, P&L accountability, training — for a fraction of a full-time salary. These are the specific levers I pull, built from 18+ years running real Miami venues.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">Hire Leander — Book a Discovery Call</Link>
                <Link to="/experience" className="btn btn-secondary">View Full Experience</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hidden lg:block">
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">By the Numbers</span>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {outcomes.slice(0, 4).map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc] leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">Core Skill Areas</span>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-bold text-[#e8e8e8] mb-10 max-w-[30ch]">
              What I Do — and How It Translates to Results
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {coreSkills.map((skill, i) => (
              <ScrollReveal key={skill.category} delay={i * 60}>
                <div className="role">
                  <div className="role-meta" style={{ paddingTop: 'var(--space-1)' }}>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#b8a080] block">{skill.category}</span>
                  </div>
                  <div>
                    <p className="text-[#cccccc] mb-3 leading-relaxed" style={{ fontSize: '0.95rem' }}>{skill.summary}</p>
                    <ul className="flex flex-col gap-2">
                      {skill.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-[#888888]" style={{ fontSize: '0.875rem' }}>
                          <span className="text-[#b8a080] mt-1 shrink-0">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section border-t border-[#2a2a2a]" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <ScrollReveal>
            <span className="kicker">Representative Results</span>
            <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#e8e8e8] mb-8">Outcomes From the Field</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <ScrollReveal key={o.label} delay={i * 60}>
                <div className="card text-center" style={{ padding: 'var(--space-6)' }}>
                  <strong className="block text-3xl font-extrabold text-[#d4b896] mb-1">{o.num}</strong>
                  <span className="text-xs text-[#888888] leading-snug">{o.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-[#2a2a2a]">
        <div className="container" style={{ maxWidth: '720px' }}>
          <ScrollReveal>
            <span className="kicker">Common Questions</span>
            <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#e8e8e8] mb-8">How This Works in Practice</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <div className="card" style={{ padding: 'var(--space-6)' }}>
                  <h3 className="text-sm font-bold text-[#e8e8e8] mb-2">{faq.q}</h3>
                  <p className="text-[#888888]" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-[#2a2a2a] text-center">
        <div className="container" style={{ maxWidth: '640px' }}>
          <ScrollReveal>
            <span className="kicker">Work Together</span>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-bold text-[#e8e8e8] mb-4">
              Ready to Stabilize Your F&B Operation?
            </h2>
            <p className="text-[#888888] mb-8 leading-relaxed">
              Whether you're opening a new concept, turning around a struggling operation, or building systems that scale — I can step in and run it with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              <Link to="/case-studies" className="btn btn-secondary">See Case Studies</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
