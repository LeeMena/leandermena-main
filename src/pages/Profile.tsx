import ScrollReveal from '@/components/ScrollReveal'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

const competencies = [
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

const roles = [
  {
    meta: 'Opening GM',
    title: 'Maska Indian Kitchen + Bar — Miami',
    body: 'Built the full opening team, vendor relationships, service standards, and operating systems for a concept led by a Michelin-starred chef.',
  },
  {
    meta: 'Director of Banquets — Pre-Opening',
    title: 'SLS Brickell — Miami',
    body: 'Created staffing models, event workflows, and banquet execution systems before first guest arrival at a luxury urban hotel.',
  },
  {
    meta: 'General Manager',
    title: 'Marabu Restaurant | Coal Fire Cuban Cuisine — Miami',
    body: 'Led labor optimization, service consistency, and guest-experience improvement for a high-volume Miami concept.',
  },
  {
    meta: 'General Manager',
    title: 'Viceroy Miami',
    body: 'Managed F&B operations across restaurant, pool, and banquet outlets at an iconic Miami Beach luxury property.',
  },
]

export default function Profile() {
  return (
    <>
      <SEO
        title="Profile"
        description="Leander Mena — Miami hospitality and F&B operations leader. 18+ years opening, stabilizing, and scaling restaurants, hotels, banquets, and catering."
        path="/profile"
      />

      <section className="page-header">
        <div className="container">
          <span className="kicker">Leander Mena — Miami Hospitality & F&B Operations Leader</span>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-[#e8e8e8] max-w-[36ch] mb-3">
            Miami, Florida
          </h1>
          <p className="text-[#888888] text-lg max-w-[54ch]">
            18+ years opening, stabilizing, and scaling restaurants, hotels, banquets, and
            catering operations across South Florida.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start mb-12">
            <ScrollReveal>
              <img
                src="/about.jpg"
                alt="Leander Mena"
                className="w-full rounded-xl shadow-md object-cover aspect-[3/4]"
                loading="lazy"
              />
              <div className="mt-4 text-center">
                <p className="font-display text-lg font-bold text-[#e8e8e8]">Leander Mena</p>
                <p className="text-sm text-[#888888]">Miami, Florida</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-[#888888] max-w-[68ch] mb-6">
                Leander Mena is a Miami-based hospitality and food-and-beverage operations leader
                with more than 18 years of experience opening, leading, and stabilizing restaurants,
                hotels, banquets, and catering operations across South Florida.
              </p>
              <p className="text-[#888888] max-w-[68ch] mb-6">
                He has served as General Manager, Director of Banquets, and Fractional Operations
                Leader for properties ranging from independent Miami restaurants to luxury hotel
                groups. His work spans pre-opening builds, operations recovery, labor cost control,
                SOP development, and team training.
              </p>
              <p className="text-[#888888] max-w-[68ch] mb-8">
                Leander Mena is available for fractional F&B leadership engagements, pre-opening
                consulting, and project-based operations support across Miami and South Florida.
              </p>

              <h3 className="font-display text-lg font-bold text-[#e8e8e8] mb-4">Core Competencies</h3>
              <div className="skills-wall mb-10">
                {competencies.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>

              <h3 className="font-display text-lg font-bold text-[#e8e8e8] mb-4">Selected Roles</h3>
              <div className="flex flex-col gap-6">
                {roles.map((r) => (
                  <div key={r.title} className="role">
                    <span className="role-meta">{r.meta}</span>
                    <h4 className="text-base font-bold text-[#e8e8e8] mb-1">{r.title}</h4>
                    <p className="text-sm text-[#888888]">{r.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
            <Link to="/experience" className="btn btn-secondary ml-3">
              Full Career History
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
