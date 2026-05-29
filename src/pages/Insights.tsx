import Layout from '../components/Layout';
import CTABanner from '../components/CTABanner';
import { blogPosts } from '../data/blogPosts';

export default function Insights() {
  return (
    <Layout seo={{
      title: 'Hospitality Insights | Leander Mena Miami',
      description: 'Practical articles on restaurant operations, labor cost control, pre-opening strategy, and F&B leadership from Leander Mena.',
    }}>
      <section className="pt-40 pb-24 bg-luxury-black">
        <div className="container-luxury">
          <span className="eyebrow">Insights</span>
          <h1 className="font-display text-5xl md:text-7xl text-luxury-text mb-6 max-w-3xl">
            Practical Thinking from the Floor
          </h1>
          <p className="text-lg text-luxury-muted max-w-2xl">
            Articles on restaurant operations, labor discipline, pre-opening strategy, and hospitality leadership written from 18+ years of experience.
          </p>
        </div>
      </section>

      <section className="section-padding bg-luxury-dark">
        <div className="container-luxury grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border border-luxury-border p-8 hover:border-gold/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <span className="eyebrow" style={{ margin: 0 }}>{post.category}</span>
                <span className="text-[11px] text-luxury-muted/50">{post.readTime} read</span>
              </div>
              <h2 className="font-serif text-2xl text-luxury-text mb-3">{post.title}</h2>
              <p className="text-sm text-luxury-muted leading-relaxed mb-6">{post.excerpt}</p>
              <p className="text-xs text-luxury-muted/40">{post.date}</p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Want to Talk Through a Specific Challenge?"
        subtitle="These articles come from real situations. If something resonates, the next step is a conversation."
        primaryCta={{ label: 'Book a Discovery Call', href: '/book' }}
      />
    </Layout>
  );
}



