import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import CTABanner from '../components/CTABanner';

export default function About() {
  return (
    <Layout seo={{
      title: 'About Leander Mena | Miami Hospitality Consultant',
      description: 'Leander Mena is a Miami-based hospitality operator with 18+ years in restaurant, hotel F&B, banquet, and pre-opening leadership.',
    }}>
      <section className="relative pt-40 pb-24 bg-luxury-black">
        <div className="container-luxury">
          <span className="eyebrow">About</span>
          <h1 className="font-display text-5xl md:text-7xl text-luxury-text mb-6 max-w-3xl">
            Built by real operations, not theory.
          </h1>
          <div className="divider-gold mb-8" style={{ marginLeft: 0 }} />
          <p className="text-lg text-luxury-muted max-w-2xl leading-relaxed">
            Leander Mena is a Miami-based hospitality and F&B operator with 18+ years of leadership across restaurants, hotels, banquets, catering, and multi-outlet operations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">The Profile</span>
            <h2 className="font-serif text-4xl text-luxury-text mb-6">Operator First</h2>
            <p className="text-luxury-muted leading-relaxed mb-6">
              His work sits at the intersection of service standards, team accountability, and commercial discipline. That combination makes him especially valuable during openings, turnarounds, and leadership transitions — when operators need someone who has been on the floor, not just in the boardroom.
            </p>
            <p className="text-luxury-muted leading-relaxed mb-8">
              Leander has led staffing builds from zero, rebuilt underperforming departments, developed management teams, and created systems that make businesses easier to run day after day.
            </p>
            <Link to="/book" className="btn-primary inline-flex items-center gap-2">
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Focus', value: 'Restaurants, hotels, banquets, catering, multi-outlet F&B' },
              { label: 'Specialties', value: 'Pre-openings, labor control, SOP development, team leadership' },
              { label: 'Location', value: 'Miami, Florida — available for South Florida engagements' },
              { label: 'Engagement types', value: 'Fractional GM, pre-opening, recovery sprint, advisory retainer' },
            ].map((item) => (
              <div key={item.label} className="border border-luxury-border/50 p-5">
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">{item.label}</p>
                <p className="text-luxury-muted text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Discuss Your Property?"
        subtitle="Every engagement starts with a direct conversation about what you are facing and where the most leverage is."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
      />
    </Layout>
  );
}
