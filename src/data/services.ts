export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  ideal: string;
}

export const services: Service[] = [
  {
    id: 'fractional-gm',
    title: 'Fractional General Manager',
    tagline: 'Senior operational leadership, without the full-time overhead.',
    description:
      'Embedded part-time GM support for restaurants and hotel F&B teams that need experienced day-to-day leadership during growth, transition, or instability.',
    deliverables: [
      'Weekly on-site presence',
      'Labor structure review',
      'Management accountability systems',
      'Service standard enforcement',
      'Owner reporting and KPI tracking',
    ],
    duration: '3â€“6 month engagements',
    ideal: 'Independent operators and ownership groups between GMs or scaling rapidly.',
  },
  {
    id: 'pre-opening',
    title: 'Pre-Opening Leadership',
    tagline: 'From blank floor plan to opening night â€” built right.',
    description:
      'End-to-end pre-opening support for restaurants, hotel F&B, banquets, and catering concepts. Staffing plans, SOPs, training, and opening-week oversight.',
    deliverables: [
      'Staffing model and hiring support',
      'SOP and training manual development',
      'Soft-opening execution',
      'Opening-week on-site leadership',
      'Post-launch stabilization',
    ],
    duration: '60â€“120 days pre-opening',
    ideal: 'New restaurant and hotel F&B concepts opening in Miami.',
  },
  {
    id: 'operations-recovery',
    title: 'Operations Recovery',
    tagline: 'Diagnose the real problem. Fix it fast.',
    description:
      'Rapid intervention for restaurants and hotel F&B teams experiencing declining performance, high turnover, inconsistent service, or cost control failures.',
    deliverables: [
      'Operational diagnostic (week 1)',
      'Priority action plan',
      'Labor and cost review',
      'Team re-alignment and coaching',
      'Systems rebuild where needed',
    ],
    duration: '30â€“90 day recovery sprints',
    ideal: 'Operators facing underperformance, ownership pressure, or brand inconsistency.',
  },
  {
    id: 'advisory',
    title: 'Strategic Advisory',
    tagline: 'Senior perspective when you need it, not when it is convenient.',
    description:
      "Monthly retainer advisory for owners and executives who want a trusted operator's perspective on decisions, expansion, concept development, or team performance.",
    deliverables: [
      'Monthly strategy sessions',
      'On-call advisory access',
      'Concept and menu feedback',
      'Expansion and hiring guidance',
      'Confidential second opinion',
    ],
    duration: 'Monthly retainer',
    ideal: 'Owners and GMs who want a senior sounding board without a full engagement.',
  },
];

