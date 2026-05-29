import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Users, Award } from 'lucide-react';
import Layout from '../components/Layout';
import CTABanner from '../components/CTABanner';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const stats = [
  { icon: <Clock size={18} />, value: '18+', label: 'Years Experience' },
  { icon: <TrendingUp size={18} />, value: '$12M+', label: 'Revenue Optimized' },
  { icon: <Users size={18} />, value: '500+', label: 'Team Members Trained' },
  { icon: <Award size={18} />, value: '40+', label: 'Properties Operated' },
];

export default function Home() {
  return (
    <Layout seo={{
      title: 'Leander Mena | Fractional F&B Leadership & Hospitality Consulting | Miami',
      description: 'Fractional F&B operations leadership for Miami restaurants, hotels & new openings. 18+ years opening, stabilizing, and scaling hospitality operations.',
    }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,160,128,0.08)_0%,_transparent_65%)]" />
        <div className="container-luxury relative z-10 pt-32 pb-20 text-center">
          <span className="eyebrow">Miami, Florida</span>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-luxury-text mb-6 leading-none tracking-wide">
            Leander Mena
          </h1>
          <div className="divider-gold mb-6" />
          <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-luxury-muted mb-6">
            Hospitality & Food-and-Beverage Operations
          </p>
          <p className="font-serif text-lg md:text-xl text-luxury-muted/80 italic max-w-2xl mx-auto mb-10 leading-relaxed">
            18+ years opening, leading, and growing restaurants, hotels, banquets, and catering operations across Miami — now available as fractional leadership.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="btn-primary flex items-center gap-2">
              Book a Discovery Call <ArrowRight size={14} />
            </Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 border border-luxury-border/40 bg-luxury-card/20">
                <div className="text-gold mb-3 flex justify-center">{s.icon}</div>
                <p className="font-serif text-3xl text-luxury-text mb-1">{s.value}</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-luxury-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-luxury-black">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="eyebrow">Consulting Services</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">Operational Leadership, On Demand</h2>
            <p className="text-luxury-muted max-w-2xl mx-auto">Four engagement models designed for where you are — pre-opening, recovery, fractional GM, or advisory.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.id} className="card-luxury">
                <h3 className="font-serif text-xl text-luxury-text mb-2">{s.title}</h3>
                <p className="text-xs text-gold/70 mb-3">{s.tagline}</p>
                <p className="text-sm text-luxury-muted">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="eyebrow">Client Results</span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-text mb-4">Measurable Impact, Real Words</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote key={t.id} className="card-luxury">
                <p className="font-serif text-lg text-luxury-text/90 italic leading-relaxed mb-6">"{t.quote}"</p>
                <footer className="border-t border-luxury-border/40 pt-4">
                  <p className="text-sm font-medium text-luxury-text">{t.author}</p>
                  <p className="text-xs text-luxury-muted">{t.title} &mdash; {t.property}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary inline-flex items-center gap-2">
              Read Case Studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Build Something That Runs Well"
        subtitle="Whether you're 90 days from opening or trying to fix a difficult quarter, the next step is simple."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </Layout>
  );
}
