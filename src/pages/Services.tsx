import SEO from '@/components/SEO'
import ScrollReveal from '@/components/ScrollReveal'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Pre-Opening Leadership',
    description: 'Full-cycle pre-opening management from concept finalization through grand opening. SOPs, staffing, training, vendor negotiations, and launch execution.',
    tags: ['Concept Buildout', 'SOP Development', 'Team Hiring', 'Vendor Setup', 'Launch Execution'],
  },
  {
    title: 'Fractional F&B Director',
    description: 'Embedded part-time operations leadership for independent restaurants and hotel F&B programs that need senior-level guidance without a full-time hire.',
    tags: ['P&L Oversight', 'Menu Engineering', 'Labor Modeling', 'Vendor Relations', 'Brand Consistency'],
  },
  {
    title: 'Operations Recovery',
    description: 'Rapid-response turnaround engagements for struggling operations. Diagnose the real problems, prioritize the highest-leverage fixes, and stabilize the business.',
    tags: ['Cost Audit', 'Team Reset', 'Guest Experience', 'Revenue Recovery', 'Process Rebuild'],
  },
  {
    title: 'Advisory & Consulting',
    description: 'Project-based consulting for owners, investors, and developers evaluating new concepts, underperforming units, or operational blind spots.',
    tags: ['Concept Review', 'Financial Modeling', 'Operator Coaching', 'Due Diligence', 'Strategy'],
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="F&B operations consulting services: pre-opening leadership, fractional F&B director, operations recovery, and advisory."
        path="/services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/services.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 40%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(5rem,11vw,9rem)]">
          <ScrollReveal>
            <span className="kicker">What I Do</span>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[22ch] mb-6">
              F&B Operations Services
            </h1>
            <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
              Embedded consulting engagements built around the real problems operators face — from first concept to full recovery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
              <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="card h-full" style={{ padding: 'var(--space-6)' }}>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-3">{s.title}</h2>
                  <p className="text-[#888888] mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{s.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {s.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-full)', background: 'rgba(180,144,96,0.12)', color: 'var(--color-primary)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn btn-primary">Start the Conversation</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  )
}
