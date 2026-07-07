import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const roles = [
  {
    meta: 'Opening General Manager',
    title: 'Maska Indian Kitchen + Bar - Miami',
    body: 'Built the opening team, vendor relationships, service standards, and operational systems for a Miami concept led by a Michelin-starred chef.',
    skills: ['Pre-Opening', 'Team Building', 'SOP Development', 'Vendor Management'],
  },
  {
    meta: 'Director of Banquets - Pre-Opening',
    title: 'SBE | SLS Brickell - Miami',
    body: 'Created staffing models, event workflows, and banquet execution systems for a luxury urban hotel before first guest arrival.',
    skills: ['Banquet Operations', 'Staffing Models', 'Pre-Opening', 'Luxury Hotels'],
  },
  {
    meta: 'General Manager',
    title: 'Marabu Cuban Coal Fire - Miami',
    body: 'Led labor optimization, service consistency improvements, and guest-experience recovery for a high-volume Miami restaurant.',
    skills: ['Labor Cost Control', 'Service Recovery', 'P&L Management', 'Team Training'],
  },
  {
    meta: 'Banquet Manager',
    title: 'Viceroy Miami - Miami, Fl',
    body: 'Managed F&B operations across restaurant, pool, and banquet outlets at an iconic Miami Beach luxury property.',
    skills: ['Hotel F&B', 'Multi-Outlet', 'Luxury Hospitality', 'Guest Experience'],
  },
]

const areas = [
  { label: 'Leadership & Culture', desc: 'Building accountable, service-driven teams with clear expectations and follow-through.' },
  { label: 'Operations Systems', desc: 'Installing service flows and procedures that keep shifts controlled and consistent.' },
  { label: 'Financial Discipline', desc: 'Managing labor, COGS, and controllables with a focus on profitability and guest satisfaction.' },
  { label: 'Guest Experience', desc: 'Using feedback, reviews, and floor presence to continuously improve service and retention.' },
]

export default function Profile() {
  return (
    <>
      <SEO
        title="Profile"
        description="Full professional profile for Leander Mena - 18 years in Miami F&B and hospitality operations."
        path="/profile"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Professional Profile</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Leander Mena
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            18 years of F&B and hospitality operations leadership across Miami.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start mb-12">
            <ScrollReveal>
              <img
                src="/images/about.jpg"
                width="1400"
                height="900"
                loading="lazy"
                alt="Leander Mena"
                className="w-full rounded-xl shadow-md object-cover aspect-[3/4]"
                loading="lazy"
              />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2 className="font-display text-2xl font-bold text-[#e8e8e8] mb-4">About</h2>
              <div className="flex flex-col gap-4 text-[#888888] max-w-[68ch]">
                <p>
                  With more than 18 years in hospitality and food-and-beverage operations, I have
                  led teams across restaurants, hotels, banquets, and catering throughout Miami.
                  My experience spans pre-openings, day-to-day operations, and restructuring under pressure.
                </p>
                <p>
                  I am comfortable both on the floor and behind the scenes - coaching service
                  standards, managing schedules, working through P&L details, and partnering with
                  ownership to align financial targets with guest experience goals.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-6">Selected Experience</h3>
            <div className="flex flex-col gap-8 mb-12">
              {roles.map((r, i) => (
                <ScrollReveal key={r.title} delay={i * 100}>
                  <div className="role">
                    <span className="role-meta">{r.meta}</span>
                    <h2 className="font-display text-xl font-bold text-[#e8e8e8] mb-2">{r.title}</h2>
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
          </ScrollReveal>

          <ScrollReveal>
            <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-6">Areas of Focus</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {areas.map((a) => (
                <div key={a.label} className="card">
                  <h4 className="text-sm font-bold text-[#e8e8e8] mb-2">{a.label}</h4>
                  <p className="text-sm text-[#888888]">{a.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="text-center">
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
