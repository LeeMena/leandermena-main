import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Fractional F&B Operations Director',
    price: 'Starting at $3,500 / month',
    best: 'Restaurants, hotel groups, and multi-concept operators needing senior leadership without a full-time executive.',
    items: [
      'Weekly on-site operational leadership during key services.',
      'P&L review and cost-structure optimization.',
      'Labor systems and productivity standards.',
      'Vendor review and manager coaching.',
    ],
  },
  {
    title: 'Pre-Opening Consulting',
    price: 'Starting at $8,500 per project',
    best: 'Teams moving from construction and design into training, soft opening, and launch.',
    items: [
      'Hiring timeline, org chart, and staffing plan.',
      'Vendor sourcing and SOP creation.',
      'Training schedule and soft-opening execution.',
      '30/60/90-day post-opening performance audits.',
    ],
  },
  {
    title: 'Operations Recovery & Restructuring',
    price: 'Starting at $5,500',
    best: 'Properties where guest experience and team confidence have slipped and need to be reset.',
    items: [
      'Three-day operational diagnostic.',
      'Written action plan with priorities and timelines.',
      'SOP rewrites and targeted retraining.',
      'Guest experience recovery strategy.',
    ],
  },
  {
    title: 'SOP & Training System Development',
    price: 'Starting at $2,500 per system',
    best: 'Multi-location operators or teams preparing for growth who need documented standards.',
    items: [
      'Custom manuals for FOH, BOH, banquet, and catering.',
      'Opening and closing checklists.',
      'Pre-shift templates and service standards.',
      'Leadership handoff training and documentation.',
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-16">
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(rgba(10,10,10,0.72),rgba(10,10,10,0.72)), url("/contact-banner.jpg") center/cover no-repeat' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="section-kicker mb-2 block">Miami Hospitality Consulting Services</span>
          <h1 className="font-display text-4xl md:text-5xl text-luxury-text">Consulting Services</h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      <section className="py-20 bg-luxury-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-luxury-muted text-lg leading-relaxed mb-14 max-w-2xl">
            Each service is built around a different moment: launch, stabilization, recovery, or documentation.
            The goal is always the same — calm operations, clear standards, and a guest experience that feels intentional.
          </p>
          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.title} className="luxury-card p-8 hover:border-gold/40 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <h2 className="font-display text-2xl text-luxury-text">{s.title}</h2>
                  <span className="text-gold font-sans text-sm font-semibold whitespace-nowrap">{s.price}</span>
                </div>
                <p className="text-luxury-muted text-sm italic mb-5">Best for: {s.best}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 text-luxury-muted text-sm">
                      <span className="text-gold mt-0.5 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-gold">Request Availability →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
