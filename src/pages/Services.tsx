import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const offerings = [
  {
    kicker: 'Fractional leadership',
    title: 'Fractional F&B Director',
    body: 'For restaurants and hotel groups that need a veteran operator 2-4 days per week. Stabilize operations, build systems, and develop your team without the overhead of a full-time executive.',
    bullets: [
      'On-site leadership during peak service periods',
      'Weekly P&L review with ownership',
      'Manager coaching and accountability check-ins',
      'SOP compliance review and correction',
      'Scheduling review and labor cost monitoring',
      'Vendor relationship management and cost negotiation',
    ],
  },
  {
    kicker: 'New concept support',
    title: 'Pre-Opening & New Concept Builds',
    body: 'From construction walkthroughs to opening night — build the team, write SOPs, coordinate vendors, and create an operating backbone before doors open.',
    bullets: [
      'Staffing plan and org chart aligned to concept and budget',
      'Structured training programs that stick before opening week',
      'Friends-and-family and mock service events',
      'SOPs, checklists, and opening/closing procedures',
      'Vendor coordination and delivery scheduling',
      '30, 60, and 90-day post-opening audits',
    ],
  },
  {
    kicker: 'Performance recovery',
    title: 'Operations Recovery & Restructuring',
    body: 'When labor costs drift, service standards drop, or turnover hurts consistency — diagnose quickly and install systems that stick.',
    bullets: [
      'Rapid operational assessment within the first week',
      'Labor cost analysis and scheduling optimization',
      'Service standard recovery and floor coaching',
      'Manager development and accountability systems',
      'Guest experience monitoring and recovery protocols',
      'Financial discipline and controllable cost management',
    ],
  },
  {
    kicker: 'Banquet & catering',
    title: 'Banquet & Catering Operations',
    body: 'High-volume event leadership for hotels, venues, and catering groups across South Florida. Pre-opening setup, staffing models, and execution systems.',
    bullets: [
      'Banquet staffing models and event workflows',
      'Pre-opening setup for hotel F&B outlets',
      'Catering execution systems and quality control',
      'Event coordination and vendor management',
      'Revenue optimization for banquet operations',
    ],
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Fractional F&B leadership, pre-opening consulting, operations recovery, and banquet operations for Miami restaurants and hotels."
        path="/services"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[280px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Services.jpg"
            alt=""
            width="1400"
            height="600"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 py-16">
          <span className="kicker">Services</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Operational leadership, tailored to your stage.
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Every engagement is scoped to the specific gaps and goals of your operation.
            No retainers, no vague deliverables — just clear work and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-10">
            {offerings.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 100}>
                <div className="card">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#b8a080] mb-3 block">
                    {o.kicker}
                  </span>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-3">
                    {o.title}
                  </h2>
                  <p className="text-[#888888] max-w-[68ch] mb-6">{o.body}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#888888]">
                        <span className="text-[#b8a080] mt-0.5">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
