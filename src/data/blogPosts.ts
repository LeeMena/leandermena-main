export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'labor-cost-control-miami-restaurants',
    title: 'Labor Cost Control for Miami Restaurants',
    excerpt:
      'Labor cost problems usually begin before payroll is processed. They start in unclear roles, weak schedules, and service models that require too many people to produce inconsistent results.',
    category: 'Operations',
    readTime: '5 min',
    date: 'May 2026',
  },
  {
    id: '2',
    slug: 'miami-pre-opening-playbook',
    title: 'Miami Pre-Opening Playbook',
    excerpt:
      'Opening a restaurant in Miami demands more than good design and a strong concept. The real work is turning vision into a team, a system, and a launch plan that survives the first ninety days.',
    category: 'Pre-Opening',
    readTime: '6 min',
    date: 'April 2026',
  },
  {
    id: '3',
    slug: 'what-fractional-gm-does',
    title: 'What a Fractional GM Does',
    excerpt:
      'A fractional GM gives an operator access to experienced leadership without committing to a full-time executive hire. In hospitality, that matters most when the business needs immediate structure and momentum.',
    category: 'Leadership',
    readTime: '4 min',
    date: 'March 2026',
  },
  {
    id: '4',
    slug: 'sop-systems-that-stick',
    title: 'Building SOPs Your Team Will Actually Follow',
    excerpt:
      'Most SOP failures are not writing failures. They are implementation failures. The difference between an SOP binder that collects dust and one that changes how a team operates is how it is introduced.',
    category: 'Systems',
    readTime: '5 min',
    date: 'February 2026',
  },
];
