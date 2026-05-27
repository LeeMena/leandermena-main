const pillars = [
  {
    number: '01',
    title: 'Clarity & Communication',
    body: 'Teams perform best when they know what is expected, what success looks like, and what happens when standards slip. I build communication systems — pre-shifts, check-ins, and documented expectations — that reduce confusion and increase accountability without adding bureaucracy.',
  },
  {
    number: '02',
    title: 'Systems Before Heroics',
    body: 'A well-run operation should not depend on any single person having a great day. I design processes, checklists, and workflows that let your average performer do above-average work consistently. Systems are the product.',
  },
  {
    number: '03',
    title: 'Guest Experience as a Business Metric',
    body: 'Guest satisfaction is not a soft measure — it drives return visits, reviews, and referrals, all of which show up in revenue. I connect service standards directly to financial outcomes so that ownership and operators are aligned on what matters.',
  },
  {
    number: '04',
    title: 'Respect for the Work',
    body: 'Hospitality is hard, physical, and relentless. I take it seriously. That means showing up on the floor, doing the unglamorous work alongside the team, and never asking anyone to do something I would not do myself.',
  },
]

export default function Philosophy() {
  return (
    <div className="pt-16">
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(rgba(10,10,10,0.72),rgba(10,10,10,0.72)), url("/philosophy.jpg") center/cover no-repeat' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <span className="section-kicker mb-2 block">Leadership Philosophy</span>
          <h1 className="font-display text-4xl md:text-5xl text-luxury-text">How I Think About Operations</h1>
          <div className="gold-divider mt-4" />
        </div>
      </section>

      <section className="py-20 bg-luxury-black">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-luxury-muted text-lg leading-relaxed mb-16 max-w-2xl">
            These are not mission-statement buzzwords. They are the principles that show up
            in how I run a shift, structure a training, and give feedback to a manager.
          </p>
          <div className="space-y-12">
            {pillars.map((p) => (
              <div key={p.number} className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-2">
                  <span className="font-display text-5xl text-luxury-border leading-none">{p.number}</span>
                </div>
                <div className="md:col-span-10 luxury-card p-8">
                  <h2 className="font-display text-2xl text-luxury-text mb-4">{p.title}</h2>
                  <p className="text-luxury-muted leading-relaxed text-sm">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
