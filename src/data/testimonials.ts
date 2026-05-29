export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  property: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Leander came in during the most chaotic stretch of our pre-opening and turned the whole operation around. By opening night, the team was trained, the systems were working, and service was consistent.',
    author: 'Marco R.',
    title: 'Owner',
    property: 'Miami Restaurant Group',
  },
  {
    id: '2',
    quote:
      'We had labor costs that were bleeding us. Leander identified the structural problems in the first week and had a plan implemented within thirty days. We hit budget the following month.',
    author: 'Diana L.',
    title: 'Director of Operations',
    property: 'South Florida Hotel F&B',
  },
  {
    id: '3',
    quote:
      'The SOPs he built for our banquet department are still in use two years later. That is the difference between a consultant and an operator.',
    author: 'Carlos M.',
    title: 'General Manager',
    property: 'Miami Banquet & Events Venue',
  },
  {
    id: '4',
    quote:
      'Honest, direct, and focused on what actually matters. No unnecessary complexity, just the right moves at the right time.',
    author: 'Priya S.',
    title: 'Ownership Group',
    property: 'Multi-Concept Operator, Miami',
  },
  {
    id: '5',
    quote:
      'He coached our management team through a difficult transition and left them stronger than when he arrived. That is the real outcome.',
    author: 'James T.',
    title: 'VP Operations',
    property: 'Miami Luxury Hotel',
  },
];
