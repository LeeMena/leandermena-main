export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  stars: 5 | 4
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Leander came in three weeks before our soft opening and completely rebuilt our training program. We opened on time, under budget, and our first Yelp reviews were 5 stars across the board.',
    name: 'Carlos M.',
    role: 'Owner',
    company: 'Independent Restaurant Group, Miami',
    stars: 5,
  },
  {
    id: '2',
    quote:
      'We had tried two GMs before engaging Leander fractionally. Within 60 days our labor cost dropped 4 points and the team actually wanted to show up. That\'s rare.',
    name: 'Rachel T.',
    role: 'Managing Partner',
    company: 'Multi-Unit F&B Group, South Florida',
    stars: 5,
  },
  {
    id: '3',
    quote:
      'Our banquet program was bleeding money. Leander\'s systems gave us visibility we never had. We booked 40% more events the following quarter and actually made margin on them.',
    name: 'David R.',
    role: 'Director of F&B',
    company: 'Full-Service Hotel, Miami Beach',
    stars: 5,
  },
  {
    id: '4',
    quote:
      'The pre-opening playbook Leander delivered became our permanent operating bible. Two years later we still run every new hire through it.',
    name: 'Mariana V.',
    role: 'Co-Founder',
    company: 'Concept Restaurant Group, Brickell',
    stars: 5,
  },
  {
    id: '5',
    quote:
      'Most consultants hand you a deck and disappear. Leander was on the floor with us every day until we had traction. That\'s the difference.',
    name: 'James K.',
    role: 'Owner & Operator',
    company: 'Boutique Hotel F&B, Wynwood',
    stars: 5,
  },
]

// Alias for Home.tsx import - all testimonials are approved
export const approvedTestimonials = testimonials
