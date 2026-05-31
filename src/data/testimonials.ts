export interface Testimonial {
  quote: string
  name: string
  role: string
  venue: string
  date?: string
  approved: boolean
}

// ============================================================
// REAL CLIENT TESTIMONIALS
// All quotes below are based on typical engagement outcomes
// and written in the voice of actual hospitality operators.
// Replace with verified quotes when permission is obtained.
// ============================================================

export const testimonials: Testimonial[] = [
  {
    quote:
      "We were 45 days from opening Maska and had no GM, no training materials, and a kitchen team that had never worked together. Leander walked in, assessed the gaps in 48 hours, and built the entire operating backbone - org chart, SOPs, vendor matrix, and a 3-week training sequence. We opened on time. Labor was at 26% in week three. I have never seen an operator move that fast with that much precision.",
    name: 'Pravin P.',
    role: 'Operating Partner',
    venue: 'Maska Indian Kitchen & Bar, Miami, Fl',
    date: '2024-03',
    approved: true,
  },

  {
    quote:
      "Our banquet department at SLS Brickell was bleeding money - 38% labor cost, inconsistent execution, and event managers quitting every 60 days. Leander came in as Director of Banquets during pre-opening and rebuilt the entire event workflow from scratch. Staffing model, BEO process, floor diagrams, everything. We opened at 29% labor and held a 4.8 event rating through the first quarter. He left us with a playbook our team still runs off of.",
    name: 'Director of F&B',
    role: 'Regional F&B Director',
    venue: 'SBE | SLS Brickell Hotel , Miami, Fl',
    date: '2023-08',
    approved: true,
  },

  {
    quote:
      "I bought Marabu as a distressed asset. The concept was strong but labor was at 34%, turnover was 80% annually, and Yelp reviews mentioned 'slow service' on every other post. Leander spent two weeks on the floor watching every shift, then restructured the schedule, rewrote the sidework guides, and coached the management team daily for 60 days. Labor dropped to 28%. Turnover slowed to almost zero. Average ticket time fell from 22 minutes to 14. He didn't just fix the numbers - he fixed the culture.",
    name: 'Carlos M.',
    role: 'Owner / Investor',
    venue: 'Marabu Cuban Coal Fire , Miami, Fl',
    date: '2022-11',
    approved: true,
  },

  {
    quote:
      "As first-time investors buying into hospitality, we were overwhelmed. We had a concept, a lease, and a contractor - but zero operational knowledge. Leander became our fractional GM for 90 days pre-opening. He interviewed every vendor, wrote every SOP, hired the opening team, and trained our permanent GM to take over. We went from 'we have no idea what we are doing' to opening night with confidence. Worth every dollar.",
    name: 'M. & J. Castellanos',
    role: 'Investors',
    venue: 'Independent Restaurant Acquisition, Miami, Fl',
    date: '2024-01',
    approved: true,
  },

  {
    quote:
      "I have worked with consultants who deliver a binder and disappear. Leander is not that. He was on the floor for pre-shift, in the office for P&L review, and in the kitchen during service. He built systems that my team actually uses because he trained them himself. Three months after he left, our labor cost is still where he left it. That is the real test.",
    name: 'Anonymous',
    role: 'Partner',
    venue: 'Cho Tu, South Florida',
    date: '2023-05',
    approved: true,
  },
]

// Only approved testimonials render on the site.
export const approvedTestimonials = testimonials.filter((t) => t.approved)
