import Layout from '../components/Layout';
import CTABanner from '../components/CTABanner';

export default function Philosophy() {
  return (
    <Layout seo={{
      title: 'Leadership Philosophy | Leander Mena',
      description: "Leander Mena's approach to hospitality operations: disciplined systems, strong culture, guest-centered execution, and measurable performance.",
    }}>
      <section className="pt-40 pb-24 bg-luxury-black">
        <div className="container-luxury">
          <span className="eyebrow">Philosophy</span>
          <h1 className="font-display text-5xl md:text-7xl text-luxury-text mb-6 max-w-3xl">
            Great operations are built on clarity, accountability, and culture.
          </h1>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <blockquote className="font-serif text-2xl md:text-3xl text-gold/90 italic max-w-3xl mb-16 leading-relaxed">
            "When operations become simpler for the team, the guest experience becomes stronger, faster, and more reliable."
          </blockquote>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Systems over chaos', desc: 'Documented standards, clean workflows, and practical SOPs reduce friction and make execution repeatable.' },
              { title: 'People drive performance', desc: 'Hiring, training, coaching, and accountability shape the guest experience more than any technology or menu.' },
              { title: 'Guest experience with discipline', desc: 'Service excellence matters most when it is supported by labor control, prep discipline, and clear communication.' },
              { title: 'Results that can be measured', desc: 'Every operational improvement should connect to retention, consistency, profitability, or speed to opening.' },
            ].map((item) => (
              <div key={item.title} className="border border-luxury-border/50 p-8">
                <h3 className="font-serif text-2xl text-luxury-text mb-4">{item.title}</h3>
                <p className="text-luxury-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start a Conversation"
        subtitle="Philosophy in action means showing up, diagnosing the real situation, and making changes that last."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
      />
    </Layout>
  );
}
