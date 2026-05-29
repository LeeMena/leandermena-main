import Layout from '../components/Layout';
import CTABanner from '../components/CTABanner';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <Layout seo={{
      title: 'Case Studies | Leander Mena Miami Hospitality Consulting',
      description: 'Real results from Miami restaurant and hotel F&B consulting engagements: pre-openings, labor recovery, and operations rebuilds.',
    }}>
      <section className="pt-40 pb-24 bg-luxury-black">
        <div className="container-luxury">
          <span className="eyebrow">Case Studies</span>
          <h1 className="font-display text-5xl md:text-7xl text-luxury-text mb-6 max-w-3xl">
            Results That Come From Being on the Floor
          </h1>
          <p className="text-lg text-luxury-muted max-w-2xl">
            Selected engagement results across pre-opening builds, operations recovery, and systems development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury space-y-10">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="border border-luxury-border p-8 md:p-12">
              <span className="eyebrow">{cs.category}</span>
              <h2 className="font-serif text-3xl text-luxury-text mb-8">{cs.title}</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">Challenge</p>
                  <p className="text-sm text-luxury-muted leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">Approach</p>
                  <p className="text-sm text-luxury-muted leading-relaxed">{cs.approach}</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">Result</p>
                  <p className="text-sm text-luxury-muted leading-relaxed">{cs.result}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 border-t border-luxury-border/40 pt-6">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-serif text-2xl text-gold">{m.value}</p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-luxury-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="See What's Possible for Your Property"
        subtitle="Every situation is different. Let's talk about yours."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
      />
    </Layout>
  );
}

