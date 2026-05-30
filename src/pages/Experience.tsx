import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const roles = [
  {
    venue: 'Maska Indian Kitchen | Bar',
    title: 'Opening General Manager',
    period: '2023',
    body: 'Built the opening team, vendor relationships, service standards, and operational systems for a Miami concept led by a Michelin-starred chef. Managed all pre-opening logistics from staffing through opening night.',
    link: '/pre-opening',
  },
  {
    venue: 'SLS Brickell',
    title: 'Director of Banquets - Pre-Opening Team',
    period: '2022',
    body: 'Created staffing models, event workflows, and banquet execution systems for a luxury urban hotel before first guest arrival. Coordinated with F&B leadership on vendor setup and revenue projections.',
    link: '/services',
  },
  {
    venue: 'Marabu Restaurant | Cuban Coal Fire',
    title: 'General Manager',
    period: '2021',
    body: 'Led labor optimization, service consistency improvements, and guest-experience recovery for a high-volume Miami restaurant. Reduced labor cost by 4 points within 60 days.',
    link: '/insights/labor-cost-control-miami-restaurants',
  },
  {
    venue: 'Butler Hospitality',
    title: 'Regional Manager',
    period: '2019–2021',
    body: 'Provided fractional F&B leadership across multiple Miami restaurant and hotel clients. Engagements included pre-opening builds, operations recovery, and ongoing management support.',
    link: '/services',
  },
  {
    venue: 'La Cerveceria de Barrio',
    title: 'General Manager',
    period: '2017–2019',
    body: 'Managed daily operations, team development, and financial performance for a high-volume concept. Oversaw scheduling, vendor relationships, and compliance for a 200+ cover restaurant.',
    link: '/insights/labor-cost-control-miami-restaurants',
  },
]

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Leander Mena's Miami hospitality career - GM, pre-opening director, and F&B consultant across restaurants, hotels, and catering operations."
        path="/experience"
        schemaType="experience"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a] min-h-[280px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact.jpg"
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
          <span className="kicker">Career History</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Experience
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            18+ years leading restaurants, hotels, banquets, and catering operations across Miami.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-6">
            {roles.map((r, i) => (
              <ScrollReveal key={r.venue} delay={i * 80}>
                <div className="role">
                  <div className="role-meta">{r.period}</div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#b8a080] mb-1 block">
                      {r.venue}
                    </span>
                    <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">{r.title}</h2>
                    <p className="text-[#888888] max-w-[62ch] mb-3">{r.body}</p>
                    <Link to={r.link} className="text-xs text-[#b8a080] hover:text-[#d4b896] transition-colors">
                      Related →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn btn-primary">
              Work Together
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
