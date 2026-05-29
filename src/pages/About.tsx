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
        description="Leander Mena â€” 18+ years in Miami hospitality. F&B operations leader for restaurants, hotels, banquets, and catering."
        path="/about"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Miami, Florida</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            About Leander Mena
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            Professional profile and operational philosophy from 18+ years in Miami hospitality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-start mb-12">
            <ScrollReveal>
              <img
                src="/images/about.jpg"
                alt="Leander Mena"
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
                  I am comfortable both on the floor and behind the scenes â€” coaching service
                  standards, managing schedules, working through P&L details, and partnering with
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

          <div className="mt-10 text-center">
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

