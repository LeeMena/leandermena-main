import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const areas = [
  {
    label: 'Leadership & Culture',
    desc: 'Building accountable, service-driven teams with clear expectations and consistent follow-through.',
  },
  {
    label: 'Operations Systems',
    desc: 'Installing service flows, sidework, and opening/closing procedures that keep shifts controlled.',
  },
  {
    label: 'Financial Discipline',
    desc: 'Managing labor, COGS, and controllables with a focus on both guest satisfaction and profitability.',
  },
  {
    label: 'Guest Experience',
    desc: 'Using feedback, reviews, and floor presence to continuously improve service and retention.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Leander Mena — 18+ years in Miami hospitality. F&B operations leader for restaurants, hotels, banquets, and catering."
        path="/about"
        schemaType="about"
      />

      <section className="relative overflow-hidden border-b border-[#2a2a2a]" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/aboutme.jpg"
            alt=""
            width="1400"
            height="900"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)' }} />
        </div>
        <div className="container relative z-10 py-[clamp(6rem,13vw,11rem)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <span className="kicker">Miami, Florida</span>
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white max-w-[20ch] mb-6">
                About Leander Mena
              </h1>
              <p className="text-[#d8d8d8] text-lg max-w-[52ch] mb-8 leading-relaxed">
                18+ years opening, stabilizing, and leading hospitality operations across Miami.
                F&B leadership without the full-time overhead.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
                <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#0a0a0a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-xl p-8 shadow-xl">
                <span className="kicker">Professional Profile</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  18+ Years in Miami Hospitality
                </h3>
                <p className="text-sm text-[#cccccc] mb-6">
                  Restaurants, hotels, banquets, and catering throughout Miami. Pre-openings,
                  day-to-day operations, and restructuring under pressure.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-[#3a3a3a] pt-6">
                  {[
                    { num: '18+', label: 'Years Experience' },
                    { num: '$12M+', label: 'Revenue Optimized' },
                    { num: '500+', label: 'Team Members Trained' },
                    { num: '40+', label: 'Properties Operated' },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <strong className="text-2xl font-extrabold text-[#d4b896]">{s.num}</strong>
                      <span className="text-xs text-[#cccccc]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start mb-12">
            <ScrollReveal>
              <img
                src="/images/about.jpg"
                alt="Leander Mena"
                width="220"
                height="293"
                className="w-full rounded-xl shadow-md object-cover aspect-[3/4]"
                loading="lazy"
              />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <span className="text-xs font-bold tracking-widest uppercase text-[#888888] mb-6 block">
                Professional Profile
              </span>
              <h2 className="font-display text-2xl font-bold text-[#e8e8e8] mb-4">
                18+ Years in Miami Hospitality
              </h2>
              <div className="flex flex-col gap-4 text-[#888888] max-w-[68ch]">
                <p>
                  With more than 18 years in hospitality and food-and-beverage operations, I have
                  led teams across restaurants, hotels, banquets, and catering throughout Miami. My
                  experience spans pre-openings, day-to-day operations, and restructuring under pressure.
                </p>
                <p>
                  I am comfortable both on the floor and behind the scenes — coaching service
                  standards, managing schedules, working through P&amp;L details, and partnering with
                  ownership to align financial targets with guest experience goals.
                </p>
                <p>
                  My approach is direct and practical. I spend time understanding what is actually
                  happening before recommending changes, and I stay involved long enough to make sure
                  new systems take hold.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h3 className="font-display text-xl font-bold text-[#e8e8e8] mb-6">Areas of Focus</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {areas.map((a) => (
                <div key={a.label} className="card">
                  <h4 className="text-sm font-bold text-[#e8e8e8] mb-2">{a.label}</h4>
                  <p className="text-sm text-[#888888]">{a.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
            <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  )
}
