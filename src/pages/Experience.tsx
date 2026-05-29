import Layout from '../components/Layout';
import CTABanner from '../components/CTABanner';

const stats = [
  { value: '18+', label: 'Years in Hospitality' },
  { value: '40+', label: 'Properties Operated' },
  { value: '500+', label: 'Team Members Trained' },
  { value: '$12M+', label: 'Revenue Impact' },
];

export default function Experience() {
  return (
    <Layout seo={{
      title: 'Restaurant & Hotel Operations Experience | Leander Mena Miami',
      description: '18-year track record in Miami hospitality: pre-opening leadership, hotel F&B, banquet operations, restaurant management, and labor optimization.',
    }}>
      <section className="pt-40 pb-24 bg-luxury-black">
        <div className="container-luxury">
          <span className="eyebrow">Experience</span>
          <h1 className="font-display text-5xl md:text-7xl text-luxury-text mb-6 max-w-3xl">
            Hospitality Operations Experience — Miami
          </h1>
          <p className="text-lg text-luxury-muted max-w-2xl">
            18+ years leading service, labor, revenue, and opening initiatives across independent restaurants, luxury hotels, banquet operations, and multi-outlet F&B teams.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="border border-luxury-border/40 p-6 text-center">
                <p className="font-serif text-4xl text-gold mb-2">{s.value}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-luxury-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <span className="eyebrow">Core Strengths</span>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Pre-Opening Strategy', desc: 'Staffing models, SOP development, training systems, soft-opening execution, and launch-week leadership.' },
              { title: 'Labor & Cost Control', desc: 'Scheduling structure, role clarity, accountability systems, and financial rhythm that protect margins without hurting culture.' },
              { title: 'Banquet & Event Operations', desc: 'Captain accountability, event SOP systems, setup and service standards, and consistent execution across high-volume events.' },
              { title: 'Team Development', desc: 'Manager coaching, training systems, performance frameworks, and building teams that do not depend on the owner to function.' },
              { title: 'Hotel F&B Leadership', desc: 'Multi-outlet coordination, rooms integration, banquet alignment, and revenue discipline across complex hotel F&B environments.' },
              { title: 'Operations Recovery', desc: 'Rapid diagnostic, priority action planning, and embedded execution support for underperforming restaurants and F&B departments.' },
            ].map((item) => (
              <div key={item.title} className="border border-luxury-border/50 p-6">
                <h3 className="font-serif text-xl text-luxury-text mb-3">{item.title}</h3>
                <p className="text-sm text-luxury-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Discuss an Engagement"
        subtitle="Every engagement starts with a direct conversation about your property and what needs to change."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
      />
    </Layout>
  );
}
