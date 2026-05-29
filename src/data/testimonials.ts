export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  result?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Marco Villanueva',
    role: 'Owner',
    company: 'Brickell Modern Kitchen',
    quote: 'Leander walked in during our worst quarter and turned it around in 60 days. Labor costs dropped 4 points, ticket times improved, and the team actually stayed. I wish I had called him sooner.',
    result: '4-point labor cost reduction in 60 days',
  },
  {
    id: 't2',
    name: 'Sofia Reyes',
    role: 'General Manager',
    company: 'Wynwood Boutique Hotel',
    quote: 'Our F&B program was bleeding money and nobody could explain why. Leander diagnosed the problem in his first week and built a system our team has followed ever since. Revenue per cover is up 22%.',
    result: '22% increase in revenue per cover',
  },
  {
    id: 't3',
    name: 'James Thornton',
    role: 'Managing Director',
    company: 'South Beach Holdings',
    quote: 'We brought Leander in for a new opening and he delivered on every milestone. Opened on time, under budget, and with a team that was genuinely ready.',
    result: 'On-time, under-budget grand opening',
  },
  {
    id: 't4',
    name: 'Adriana Castillo',
    role: 'Director of Operations',
    company: 'Coral Gables Resort',
    quote: 'The training program Leander built for our banquet team elevated the entire department. Guest scores improved from 3.8 to 4.6 within a single quarter.',
    result: 'Guest scores from 3.8 to 4.6 in 90 days',
  },
  {
    id: 't5',
    name: 'Rafael Montes',
    role: 'CEO',
    company: 'Taste Collective Miami',
    quote: 'Leander does not give you a report and leave. He gets in the weeds with your team, fixes the real problems, and makes sure the improvements stick.',
  },
];
