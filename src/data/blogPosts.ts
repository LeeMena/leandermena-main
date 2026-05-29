export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'labor-cost-control-miami-restaurants',
    title: 'How Miami Restaurants Can Cut Labor Costs Without Cutting Staff',
    excerpt: 'Labor is your largest controllable cost. Here is the exact framework I use to reduce labor percentage without layoffs, schedule cuts, or lowering service standards.',
    category: 'Operations',
    date: '2026-05-01',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'b2',
    slug: 'miami-pre-opening-playbook',
    title: 'The Miami Pre-Opening Playbook: 120 Days to a Flawless Launch',
    excerpt: 'After leading 12+ pre-openings in Miami, I have built a repeatable roadmap. These are the 7 milestones every restaurant opening in Miami must hit.',
    category: 'Pre-Opening',
    date: '2026-04-15',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 'b3',
    slug: 'what-fractional-gm-does',
    title: 'What a Fractional GM Actually Does (And When You Need One)',
    excerpt: 'Most operators do not know fractional leadership exists until they are already in trouble. Here is how it works, what it costs, and when it makes sense.',
    category: 'Fractional Leadership',
    date: '2026-03-20',
    readTime: '6 min read',
  },
  {
    id: 'b4',
    slug: 'leander-mena-miami-hospitality',
    title: 'Building a Hospitality Career in Miami: 18 Years of Hard Lessons',
    excerpt: 'From banquet captain to fractional GM, here is what 18 years operating Miami restaurants and hotels taught me about leadership, systems, and survival.',
    category: 'Career & Leadership',
    date: '2026-02-10',
    readTime: '12 min read',
  },
];
