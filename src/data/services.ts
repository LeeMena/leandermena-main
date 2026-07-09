export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  deliverables: string[];
  idealFor: string[];
  icon: string;
  cta: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'fractional-leadership',
    title: 'F&B Operations Consulting',
    subtitle: 'Monthly Retainer · On-Site + Remote',
    description: 'Senior operational leadership on a consulting basis: typically 2-4 days per week on-site, remainder remote. I step in as your interim Director of Operations or F&B Director, bringing 18+ years of proven systems to independent restaurants, hotel F&B programs, and multi-unit groups nationwide.',
    price: 'Starting at $7,000',
    priceNote: '/ month · 3-month minimum · $22,000/mo for full multi-unit oversight',
    features: [
      'On-site presence 2-4 days per week',
      'Weekly P&L review and action planning',
      'SOP development and implementation',
      'Team training and development programs',
      'Vendor negotiation and cost optimization',
      'Monthly board reporting and analytics'
    ],
    deliverables: [
      'Custom operations manual',
      'Training completion certificates',
      'Cost reduction analysis report',
      '30-60-90 day progress reviews',
      'Handover documentation'
    ],
    idealFor: [
      'Independent restaurants hitting growth plateaus',
      'Multi-concept groups experiencing operational drift',
      'Hotel management companies in transition',
      'Investor groups who acquired hospitality assets'
    ],
    icon: 'crown',
    cta: 'Schedule a Discovery Call',
    popular: true
  },
  {
    id: 'pre-opening-consulting',
    title: 'Pre-Opening Consulting',
    subtitle: 'Fixed-Scope Project · Construction to Opening Night',
    description: 'End-to-end pre-opening management for new restaurant and hotel F&B concepts anywhere in the U.S. From the first construction walkthrough to training your opening team and executing a flawless launch, delivered as a structured fixed-scope engagement.',
    price: 'From $35,000',
    priceNote: 'fixed-scope project · 3-6 month engagement · complex hotel F&B up to $75,000',
    features: [
      '120-day pre-opening roadmap creation',
      'Team recruitment and hiring support',
      'Complete SOP and training manual development',
      'Vendor selection and contract negotiation',
      'Menu development and costing analysis',
      'Soft opening and grand opening execution'
    ],
    deliverables: [
      'Complete operations manual',
      'Fully trained opening team',
      'Vendor contracts and price sheets',
      'Finalized menu with costed recipes',
      'Opening night run-of-show',
      '30-day post-opening support'
    ],
    idealFor: [
      'First-time restaurant owners',
      'Hotel developments adding F&B concepts',
      'Multi-unit expansions',
      'Concept rebranding and relaunches'
    ],
    icon: 'rocket',
    cta: 'Discuss Your Opening Timeline'
  },
  {
    id: 'operations-recovery',
    title: 'Operations Recovery',
    subtitle: 'Diagnostic + 90-Day Plan · Underperforming Assets',
    description: 'Diagnostic-intensive engagement for restaurants and hotels missing their targets. Starts with a structured on-site diagnostic, then moves into a clear 90-day turnaround plan with weekly accountability, available nationwide.',
    price: 'From $12,000',
    priceNote: 'diagnostic + 90-day plan · multi-unit recovery engagements quoted separately',
    features: [
      'Full operations diagnostic (5-7 days on-site)',
      'P&L deep-dive and variance analysis',
      'Labor model optimization',
      'Service standard reset and retraining',
      'Cost structure audit and reduction plan',
      'Revenue enhancement opportunities'
    ],
    deliverables: [
      'Diagnostic report with findings',
      '90-day turnaround action plan',
      'Weekly progress tracking dashboard',
      'Restructured labor model',
      'Monthly P&L improvement reports',
      'Sustainability playbook'
    ],
    idealFor: [
      'Properties missing revenue targets',
      'New acquisitions needing stabilization',
      'Concepts experiencing quality drift',
      'Leadership transition periods'
    ],
    icon: 'trending-up',
    cta: 'Get a Free Diagnostic Assessment'
  },
  {
    id: 'speaking-training',
    title: 'Speaking & Team Training',
    subtitle: 'Keynotes, Workshops & Leadership Development',
    description: 'High-impact speaking engagements and customized training programs for hospitality teams, industry conferences, and corporate leadership retreats.',
    price: '$3,500',
    priceNote: 'per session · travel additional',
    features: [
      'Customized keynote or workshop content',
      'Pre-event consultation and planning',
      'Interactive training materials',
      'Post-event resource package',
      'Optional follow-up coaching sessions',
      'Media and PR support available'
    ],
    deliverables: [
      'Custom presentation deck',
      'Participant workbook',
      'Recording (if permitted)',
      'Follow-up action items',
      'Impact measurement report'
    ],
    idealFor: [
      'Hospitality industry conferences',
      'Corporate leadership retreats',
      'Hotel group annual meetings',
      'Restaurant group team development days'
    ],
    icon: 'mic',
    cta: 'Book Leander to Speak'
  }
];
