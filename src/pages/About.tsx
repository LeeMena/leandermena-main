export default function About() {
  return (
    <div className="pt-16">
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(rgba(10,10,10,0.65),rgba(10,10,10,0.65)), url("/1.jpg") center/cover no-repeat fixed' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="section-kicker mb-2 block">Miami, Florida</span>
          <h1 className="font-display text-4xl md:text-5xl text-luxury-text font-medium">About Leander Mena</h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      <section className="py-20 bg-luxury-black">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <img
              src="/about.jpg"
              alt="Leander Mena — Miami hospitality and F&B operations leader"
              className="w-full rounded-lg object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2">
            <span className="section-kicker mb-4 block">Professional Profile</span>
            <h2 className="font-display text-3xl text-luxury-text mb-6">18+ Years in Miami Hospitality</h2>
            <div className="gold-divider mb-8" />
            <div className="space-y-5 text-luxury-muted leading-relaxed text-sm">
              <p>With more than 18 years in hospitality and food-and-beverage operations, I have led teams across restaurants, hotels, banquets, and catering throughout Miami. My experience spans pre-openings, day-to-day operations, and restructuring under pressure.</p>
              <p>I am comfortable both on the floor and behind the scenes — coaching service standards, managing schedules, working through P&amp;L details, and partnering with ownership to align financial targets with guest experience goals.</p>
              <p>My approach is direct and practical. I spend time understanding what is actually happening before recommending changes, and I stay involved long enough to make sure new systems take hold.</p>
            </div>
            <h3 className="font-sans font-semibold text-luxury-text tracking-widest uppercase text-xs mt-10 mb-5">Areas of Focus</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Leadership & Culture', desc: 'Building accountable, service-driven teams with clear expectations and consistent follow-through.' },
                { label: 'Operations Systems', desc: 'Installing service flows, sidework, and opening/closing procedures that keep shifts controlled.' },
                { label: 'Financial Discipline', desc: 'Managing labor, COGS, and controllables with a focus on both guest satisfaction and profitability.' },
                { label: 'Guest Experience', desc: 'Using feedback, reviews, and floor presence to continuously improve service and retention.' },
              ].map((a) => (
                <div key={a.label} className="luxury-card p-5">
                  <h4 className="font-sans font-semibold text-gold text-sm mb-2">{a.label}</h4>
                  <p className="text-luxury-muted text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
