import { Link } from 'react-router-dom'

export default function PreOpening() {
  return (
    <div className="pt-16">
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(rgba(10,10,10,0.72),rgba(10,10,10,0.72)), url("/contact-banner.jpg") center/cover no-repeat' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="section-kicker mb-2 block">Pre-Opening Restaurant &amp; Hotel F&amp;B — Miami</span>
          <h1 className="font-display text-4xl md:text-5xl text-luxury-text">Pre-Opening F&amp;B Operations</h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      <section className="py-20 bg-luxury-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-luxury-muted text-lg leading-relaxed mb-12">
            Openings are where expectations are highest and tolerance for mistakes is lowest.
            My role is to help you move from construction and design into a calm, organized opening
            where the team is genuinely ready to serve guests on day one.
          </p>

          <h2 className="font-display text-2xl text-luxury-text mb-6">What I Cover</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {[
              { label: 'Staffing & Org Design', desc: 'Aligning headcount, positions, and schedules with the concept, forecast, and budget.' },
              { label: 'Training Programs', desc: 'Sequencing classroom, menu, and floor training so information sticks before opening week.' },
              { label: 'Service Rehearsals', desc: 'Friends-and-family and mock service events that expose real issues before paying guests arrive.' },
              { label: 'SOPs & Standards', desc: 'Checklists, sidework guides, and opening/closing procedures teams can actually follow.' },
              { label: 'Vendor Coordination', desc: 'Working with your F&B vendors to ensure product is right, priced correctly, and delivered on time.' },
              { label: 'Post-Opening Audits', desc: '30, 60, and 90-day check-ins to measure performance against targets and adjust systems as needed.' },
            ].map((item) => (
              <div key={item.label} className="luxury-card p-6">
                <h3 className="font-sans font-semibold text-gold text-sm mb-2">{item.label}</h3>
                <p className="text-luxury-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl text-luxury-text mb-4">How I Work with Development Teams</h2>
          <p className="text-luxury-muted leading-relaxed text-sm mb-4">
            I slot in alongside ownership, brand, and design as the operations voice — translating the concept
            into service flows, staffing plans, and standards that can be executed in a real room by a real team.
          </p>
          <p className="text-luxury-muted leading-relaxed text-sm mb-10">
            Whether this is your first opening or one of many, I right-size the support around the project,
            timeline, and the internal team you already have in place.
          </p>

          <Link to="/contact" className="btn-gold">Start a Pre-Opening Conversation →</Link>
        </div>
      </section>
    </div>
  )
}
