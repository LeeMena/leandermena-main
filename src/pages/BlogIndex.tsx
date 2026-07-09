import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

const posts = [
  {
    slug: 'labor-cost-control-caribbean',
    title: 'Labor Cost Control in Caribbean Restaurants',
    excerpt: 'How resort and independent restaurant operators in the Dominican Republic, Jamaica, Barbados, and the Bahamas manage labor costs in seasonal markets.',
    category: 'Labor Cost',
    date: 'July 9, 2026',
    readTime: '8 min read',
    image: '/images/blog-labor-cost.jpg',
  },
  {
    slug: 'labor-cost-control-latin-america',
    title: 'Labor Cost Control in Latin America',
    excerpt: 'How restaurant operators in Mexico City, Cancun, Bogota, and Buenos Aires manage labor costs across currency risk and high-turnover markets.',
    category: 'Labor Cost',
    date: 'July 9, 2026',
    readTime: '8 min read',
    image: '/images/blog-labor-cost.jpg',
  },
  {
    slug: 'labor-cost-control-europe-restaurants',
    title: 'Labor Cost Control for European Restaurants',
    excerpt: 'How restaurant operators in London, Paris, and Amsterdam manage labor costs under Europe wage floors, predictive scheduling rules, and mandatory benefit structures.',
    category: 'Labor Cost',
    date: 'July 9, 2026',
    readTime: '8 min read',
    image: '/images/blog-labor-cost.jpg',
  },
  {
    slug: 'labor-cost-control-us-restaurants',
    title: 'Labor Cost Control for U.S. Restaurants',
    excerpt: 'How restaurant operators in New York, Chicago, Los Angeles, and Miami can bring labor costs under control without sacrificing service quality.',
    category: 'Labor Cost',
    date: 'July 9, 2026',
    readTime: '8 min read',
    image: '/images/blog-labor-cost.jpg',
  },
  {
    slug: 'building-training-program-that-works',
    title: 'Building a Training Program That Actually Works',
    excerpt: 'Most restaurant training programs are manuals no one reads. Here is how to build one that changes behavior, reduces turnover, and raises service scores.',
    category: 'Operations',
    date: 'June 10, 2026',
    readTime: '7 min read',
    image: '/images/blog-training.jpg',
  },
  {
    slug: 'miami-restaurant-labor-market-2026',
    title: 'Miami Restaurant Labor Market 2026',
    excerpt: 'Wage floors, retention tactics, and scheduling models for Miami operators navigating a competitive hospitality labor market.',
    category: 'Labor Cost',
    date: 'June 5, 2026',
    readTime: '6 min read',
    image: '/images/blog-miami-labor.jpg',
  },
  {
    slug: 'hotel-fb-why-your-restaurant-underperforms',
    title: 'Hotel F&B: Why Your Restaurant Underperforms',
    excerpt: 'Hotel restaurants fail when they are run as amenities instead of businesses. Here is what changes when you treat them like standalone operations.',
    category: 'Hotel F&B',
    date: 'May 28, 2026',
    readTime: '7 min read',
    image: '/images/blog-hotel-fb.jpg',
  },
  {
    slug: 'reduce-labor-cost-without-cutting-service',
    title: 'Reduce Labor Cost Without Cutting Service',
    excerpt: 'Cutting headcount is the wrong first move. Here are the scheduling, cross-training, and tracking levers that actually move the number.',
    category: 'Labor Cost',
    date: 'May 20, 2026',
    readTime: '8 min read',
    image: '/images/blog-labor-cost.jpg',
  },
  {
    slug: 'labor-cost-control-miami-restaurants',
    title: 'Labor Cost Control for Miami Restaurants',
    excerpt: 'The specific wage, scheduling, and staffing patterns that keep labor cost under control in Miami full-service restaurants.',
    category: 'Labor Cost',
    date: 'May 10, 2026',
    readTime: '7 min read',
    image: '/images/blog-labor-cost.jpg',
  },
  {
    slug: 'real-cost-of-bad-pre-opening',
    title: 'The Real Cost of a Bad Pre-Opening',
    excerpt: 'A failed opening does not just lose money on day one. It sets a reputation ceiling that is very hard to raise. Here is what actually goes wrong.',
    category: 'Pre-Opening',
    date: 'April 30, 2026',
    readTime: '6 min read',
    image: '/images/blog-pre-opening.jpg',
  },
  {
    slug: 'miami-pre-opening-playbook',
    title: 'Miami Pre-Opening Playbook',
    excerpt: 'The sequence, timeline, and decision points for opening a restaurant in Miami, based on 18 years and 40+ properties.',
    category: 'Pre-Opening',
    date: 'April 15, 2026',
    readTime: '9 min read',
    image: '/images/blog-pre-opening.jpg',
  },
  {
    slug: 'pre-opening-timeline',
    title: 'Pre-Opening Timeline: What to Do and When',
    excerpt: 'A week-by-week breakdown of the 16 weeks before opening day, with the tasks that move the needle and the ones that can wait.',
    category: 'Pre-Opening',
    date: 'April 1, 2026',
    readTime: '8 min read',
    image: '/images/blog-pre-opening.jpg',
  },
  {
    slug: 'why-fractional-leadership-works',
    title: 'Why Fractional Leadership Works for Independent Restaurants',
    excerpt: 'Senior operations leadership on a part-time basis is not a compromise. For the right operator at the right stage, it is the most efficient structure available.',
    category: 'Fractional Leadership',
    date: 'March 20, 2026',
    readTime: '6 min read',
    image: '/images/blog-fractional-leadership.jpg',
  },
  {
    slug: 'what-a-fractional-gm-actually-does',
    title: 'What a Fractional GM Actually Does',
    excerpt: 'The title sounds like a compromise. The function is not. Here is what a fractional general manager delivers and what it costs relative to a full-time hire.',
    category: 'Fractional Leadership',
    date: 'March 10, 2026',
    readTime: '5 min read',
    image: '/images/blog-fractional-gm.jpg',
  },
]

const categories = ['All', 'Labor Cost', 'Pre-Opening', 'Operations', 'Hotel F&B', 'Fractional Leadership']

import { useState } from 'react'

export default function BlogIndex() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      <SEO
        title="Insights | Leander Mena"
        description="Practical F&B operations content on labor cost, pre-opening, hotel restaurants, and fractional leadership from Leander Mena."
        path="/insights"
        schemaType="insights"
      />
      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-2">Insights</h1>
          <p className="text-neutral-400 mb-10">Practical content on F&B operations, labor cost, and leadership.</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-amber-400 text-black'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map(post => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group block bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-400 transition-colors"
              >
                <div className="h-48 bg-neutral-800 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">{post.category}</span>
                  <h2 className="mt-2 text-lg font-semibold leading-snug group-hover:text-amber-400 transition-colors">{post.title}</h2>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-neutral-500">{post.date} &bull; {post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
