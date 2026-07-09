import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'
import { heroImages } from '@/data/heroImages'

export default function PreOpening() {
  return (
    <>
      <SEO
        title="Restaurant & Hotel Pre-Opening Consultant | Leander Mena"
        description="Open on time and on budget. A pre-opening consultant who builds your org chart, SOPs, vendor matrix, training, and soft-launch plan - on-site and remote, nationwide."
        path="/pre-opening"
        schemaType="pre-opening"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImages.preOpening.url}), url(${heroImages.preOpening.fallback})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)' }} />
        <div className="container relative z-10" style={{ paddingBlock: 'clamp(4rem,9vw,7rem)' }}>
          <span className="kicker">Pre-Opening</span>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[24ch] mb-4">
            Pre-Opening Consulting That Gets You Open On Time, On Budget
          </h1>
          <p className="text-[#b8b8b8] text-base max-w-[52ch] leading-relaxed">
            Systems, staffing, and operating infrastructure built before opening night, not after. On-site and remote, nationwide.
          </p>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Leander Mena is a <strong style={{ color: 'var(--color-text)' }}>restaurant and hotel pre-opening consultant</strong> with hands-on GM experience launching independent restaurants and hotel F&amp;B programs, covering every phase from construction coordination through soft open and full launch. Engagements run on-site and remote, anywhere in the U.S.
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Pre-opening engagements cover the full scope of launch infrastructure: staffing plans and hiring roadmaps, vendor sourcing and contract negotiation, SOP development, FOH and BOH training programs, POS configuration, cost control frameworks, and opening-week contingency planning. Every system is built to be owned and operated by your team after the engagement ends.
          </p>
          <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            With 5 pre-openings led across Miami, including a Michelin-starred chef partnership and a luxury hotel F&amp;B program, the playbook is refined and repeatable.
          </p>
        </div>
      </section>

      {/* What's covered */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <span className="kicker">Scope</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-8">What Pre-Opening Covers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.25rem' }}>
              {[
                { title: 'Staffing & Hiring Plans', desc: 'Org charts, role definitions, hiring timelines, and onboarding schedules built for your concept and cover count.' },
                { title: 'Vendor Sourcing & Negotiation', desc: 'Supplier identification, contract review, and cost benchmarking across food, beverage, linen, smallwares, and equipment.' },
                { title: 'SOP Development', desc: 'Opening and closing procedures, service standards, kitchen protocols, and management checklists built from scratch.' },
                { title: 'Training Programs', desc: 'FOH and BOH training curricula, role-specific learning paths, and a pre-opening training calendar.' },
                { title: 'Cost Control & Labor Models', desc: 'Prime cost targets, labor scheduling templates, and food cost control systems in place before day one.' },
                { title: 'Opening Week Execution', desc: 'On-site GM-level leadership through soft open, friends-and-family, and grand opening, with real-time adjustments.' },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Track record */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)' }}>
          <ScrollReveal>
            <span className="kicker">Track Record</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-6">Concepts Launched</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { name: 'Maska Indian Kitchen + Bar', note: 'Michelin-starred chef partnership · Midtown Miami · $1.2M+ year one' },
                { name: 'Plomo Tequila & Taco Bar', note: '300-cover peak days · Miami' },
                { name: 'La Cervecería de Barrio', note: 'Launch GM · V&E Hospitality · Miami' },
                { name: 'SLS Brickell Hotel Miami', note: 'Director of Banquets & Events pre-opening · SBE' },
                { name: 'Additional hotel F&B programs', note: 'Marriott, Conrad, InterContinental, Hyatt properties across Miami' },
              ].map((c, i) => (
                <div key={i} style={{ padding: '1rem 0', borderBottom: '1px solid var(--color-border)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 600 }}>{c.name}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{c.note}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: 'var(--content-narrow)', textAlign: 'center' }}>
          <ScrollReveal>
            <span className="kicker">Start the project</span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">Opening Something in Miami?</h2>
            <p className="section-intro" style={{ marginInline: 'auto', marginBottom: '2rem' }}>Tell me your concept, timeline, and where you are in the process. I’ll tell you what pre-opening support makes sense.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Start the Conversation</Link>
              <Link to="/blueprint" className="btn btn-secondary">Download the Blueprint</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
