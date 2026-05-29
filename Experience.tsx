import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const roles = [
  {
    meta: 'Opening General Manager',
    title: 'Maska Indian Kitchen + Bar — Miami',
    body: 'Built the full opening team, vendor relationships, service standards, and operating systems for a concept led by a Michelin-starred chef.',
    skills: ['Pre-Opening', 'Team Building', 'SOP Development', 'Vendor Management'],
  },
  {
    meta: 'Director of Banquets — Pre-Opening',
    title: 'SLS Brickell — Miami',
    body: 'Created staffing models, event workflows, and banquet execution systems for a luxury urban hotel before first guest arrival.',
    skills: ['Banquet Operations', 'Staffing Models', 'Pre-Opening', 'Luxury Hotels'],
  },
  {
    meta: 'General Manager',
    title: 'Marabu Restaurant | Coal Fire Cuban Cuisine — Miami',
    body: 'Led labor optimization, service consistency, and guest-experience improvement for a high-volume Miami restaurant.',
    skills: ['Labor Cost Control', 'Service Recovery', 'P&L Management', 'Team Training'],
  },
  {
    meta: 'General Manager',
    title: 'Viceroy Miami — Miami Beach',
    body: 'Managed F&B operations across restaurant, pool, and banquet outlets at an iconic Miami Beach luxury property.',
    skills: ['Hotel F&B', 'Multi-Outlet', 'Luxury Hospitality', 'Guest Experience'],
  },
]

const skills = [
  'Restaurant Operations',
  'Hotel F&B Management',
  'Pre-Opening GM',
  'Banquet Operations',
  'Catering Management',
  'P&L Management',
  'Labor Cost Control',
  'SOP Development',
  'Team Training',
  'Guest Experience',
  'Vendor Management',
  'Fractional Leadership',
]

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="18+ years of restaurant, hotel, banquet, and catering operations experience across Miami. Michelin concepts, luxury hotels, and independent restaurants."
        path="/experience"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Restaurant & Hotel Operations Experience</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            18+ Years · Miami, Florida
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Selected roles that demonstrate the breadth of operational leadership across
            restaurants, hotels, and catering in South Florida.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-8 mb-12">
            {roles.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 100}>
                <div className="role">
                  <span className="role-meta">{r.meta}</span>
                  <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">
                    {r.title}
                  </h2>
                  <p className="text-[#888888] max-w-[62ch] mb-4">{r.body}</p>
                  <div className="skills-wall">
                    {r.skills.map((s) => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-4">
              Key Skills Across Career
            </h3>
            <div className="skills-wall">
              {skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-10 text-center">
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
