const roles = [
  {
    title: 'General Manager — Marabu Restaurant / V&E Hospitality',
    meta: 'Miami, FL · La Cerveceria de Barrio concept',
    body: 'Led full restaurant general management including P&L oversight, labor management, vendor relationships, guest experience strategy, revenue growth, and front-of-house team development for a high-volume Miami concept.',
  },
  {
    title: 'Miami Market Operations — Butler Hospitality',
    meta: 'Miami, FL',
    body: 'Managed Miami market hotel partner operations for Butler Hospitality, overseeing multi-property F&B delivery, brand standards, staffing, and guest satisfaction across hotel accounts.',
  },
  {
    title: 'Opening General Manager — Maska Indian Kitchen + Bar',
    meta: 'Miami, FL · Michelin Star Chef concept',
    body: 'Led full pre-opening build of an upscale Indian restaurant. Recruited and trained the complete opening team, established SOPs, coordinated vendor onboarding, and managed the launch into the Miami dining market.',
  },
  {
    title: 'Director of Banquets — SLS Hotels / SLS Brickell',
    meta: 'Miami, FL · Pre-opening support',
    body: 'Provided pre-opening banquet operations leadership for SLS Brickell, building event execution systems, staffing models, catering menus, and service standards for a luxury urban hotel property.',
  },
  {
    title: 'Banquet Manager — Accor / Sofitel Miami → Pullman Miami Airport',
    meta: 'Miami, FL · Rebranding transition',
    body: "Managed banquet and event operations through Accor's rebranding transition from Sofitel Miami to Pullman Miami Airport, maintaining service continuity and team performance throughout the property conversion.",
  },
  {
    title: 'Banquet Manager — Viceroy Hotel',
    meta: 'Miami, FL',
    body: "Oversaw banquet and event execution for a luxury Miami hotel, managing large-scale corporate events, catering coordination, banquet staffing, and cost controls while maintaining Viceroy's high service standards.",
  },
  {
    title: 'Catering Coordinator — The Palms Hotel & Spa',
    meta: 'Miami Beach, FL',
    body: 'Coordinated catering operations and event services at a Miami Beach boutique luxury hotel, supporting event planning, client relations, F&B logistics, and on-site event execution.',
  },
  {
    title: 'Food & Beverage Operations — InterContinental Miami',
    meta: 'Miami, FL',
    body: "Supported food-and-beverage operations at one of Miami's premier full-service hotels, contributing to outlet management, team service, banquet support, and daily F&B standards.",
  },
]

const skills = [
  'Pre-Opening Leadership', 'P&L Management', 'Cost Control', 'Labor Scheduling',
  'Revenue Management', 'Menu Engineering', 'Vendor Negotiation', 'SOP Development',
  'Staff Training', 'Guest Experience', 'Multi-Unit Operations', 'Banquet & Event Execution',
  'Catering Management', 'Corporate Events', 'Fine Dining', 'Guest Recovery',
  'Rebranding Support', 'Regulatory Compliance', 'Team Building',
]

export default function Experience() {
  return (
    <div className="pt-16">
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.85)), url("/dining.jpg") center/cover no-repeat' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="section-kicker mb-2 block">18+ Years · Miami, Florida</span>
          <h1 className="font-display text-4xl md:text-5xl text-luxury-text">Restaurant &amp; Hotel Operations Experience</h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      <section className="py-20 bg-luxury-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10 mb-16">
            {roles.map((r) => (
              <div key={r.title} className="border-l-2 border-gold/30 pl-7">
                <h2 className="font-display text-xl text-luxury-text mb-1">{r.title}</h2>
                <p className="text-gold text-xs tracking-wide uppercase mb-3">{r.meta}</p>
                <p className="text-luxury-muted text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="luxury-card p-8">
            <h3 className="font-sans font-semibold text-luxury-text tracking-widest uppercase text-xs mb-5">Key Skills Across Career</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1 bg-luxury-dark border border-luxury-border rounded text-luxury-muted text-xs">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
