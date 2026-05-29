import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import CTABanner from '../components/CTABanner';
import { services } from '../data/services';

export default function Services() {
  return (
    <Layout seo={{
      title: 'Hospitality Consulting Services | Leander Mena Miami',
      description: 'Fractional GM, pre-opening leadership, operations recovery, and strategic advisory for Miami restaurants and hotel F&B.',
    }}>
      <section className="pt-40 pb-24 bg-luxury-black">
        <div className="container-luxury">
          <span className="eyebrow">Services</span>
          <h1 className="font-display text-5xl md:text-7xl text-luxury-text mb-6 max-w-3xl">
            Miami Hospitality Consulting Services
          </h1>
          <p className="text-lg text-luxury-muted max-w-2xl">
            Fractional GM services, pre-opening builds, and operations recovery for Miami restaurants and hotel F&B teams.
          </p>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <article key={service.id} className="border border-luxury-border p-8 hover:border-gold/40 transition-colors">
              <span className="eyebrow">{service.duration}</span>
              <h2 className="font-serif text-3xl text-luxury-text mb-2">{service.title}</h2>
              <p className="text-gold/70 text-sm italic mb-4">{service.tagline}</p>
              <p className="text-luxury-muted mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-luxury-muted">
                    <CheckCircle size={14} className="text-gold/60 mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-luxury-muted/60 border-t border-luxury-border/30 pt-4">
                Best for: {service.ideal}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Let's Talk About Your Operation"
        subtitle="Every engagement starts with a direct 30-minute conversation."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
      />
    </Layout>
  );
}
