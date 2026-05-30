export interface CaseStudy {
  id: string;
  title: string;
  property: string;
  location: string;
  category: string;
  challenge: string;
  approach: string;
  results: string[];
  timeframe: string;
  badge?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'maska-pre-opening',
    title: 'Pre-Opening: Michelin-Chef Concept',
    property: 'Maska Indian Kitchen + Bar',
    location: 'Miami, FL',
    category: 'Pre-Opening',
    challenge: 'Launch a high-concept Indian fine-dining concept with a Michelin-starred consulting chef, from raw construction to opening night with zero prior market presence.',
    approach: 'Built a 120-day pre-opening roadmap covering staffing, SOP development, menu costing, staff training, and soft-opening execution. Led vendor negotiations and coordinated FOH/BOH alignment.',
    results: [
      'Opened on schedule with full staff and SOPs in place',
      'Achieved 4.7-star opening week rating across platforms',
      'Labor cost held within 1.2% of target on opening month',
      'Zero health code violations at initial inspection',
    ],
    timeframe: '120 days',
    badge: 'Featured',
  },
  {
    id: 'sls-brickell-banquet',
    title: 'Banquet Revenue Optimization',
    property: 'SLS Brickell',
    location: 'Miami, FL',
    category: 'Revenue Recovery',
    challenge: 'Banquet and catering operations were underperforming against revenue targets with high labor variance and inconsistent service standards across large events.',
    approach: 'Rebuilt the BEO workflow, redesigned staff deployment charts, implemented post-event review scorecards, and retrained service staff on execution standards.',
    results: [
      '31% improvement in banquet revenue per event',
      'Labor variance reduced from 18% to 6% overage',
      'Client satisfaction scores up 22 points',
      'Repeat booking rate increased 40% in Q4',
    ],
    timeframe: '90 days',
    badge: 'Case Study',
  },
  {
    id: 'hotel-fb-recovery',
    title: 'Hotel F&B Turnaround',
    property: 'Independent Boutique Hotel',
    location: 'Miami Beach, FL',
    category: 'Operations Recovery',
    challenge: 'Hotel F&B outlet facing 28% food cost overruns, high turnover, and declining guest scores. Ownership under pressure to improve or close the outlet.',
    approach: 'Rapid 30-day diagnostic identified root causes: improper portioning, no par-level system, and management accountability gaps. Built corrective systems and retraining program.',
    results: [
      'Food cost dropped from 38% to 29% in 60 days',
      'Staff turnover reduced by 55% in 90 days',
      'Guest satisfaction scores recovered to property average',
      'Outlet retained and profitable within one quarter',
    ],
    timeframe: '90 days',
    badge: 'Turnaround',
  },
  {
    id: 'la-cerveceria-scale',
    title: 'Multi-Unit Scaling',
    property: 'La Cerveceria de Barrio',
    location: 'Miami, FL',
    category: 'Fractional GM',
    challenge: 'Rapid multi-location expansion created operational inconsistency across units. No standardized training, no unified SOP library, and growing labor cost variance between locations.',
    approach: 'Developed a unified operations manual, location-specific SOP adaptations, and a cross-unit management accountability system. Embedded part-time GM support during expansion phase.',
    results: [
      'SOPs deployed across all locations within 45 days',
      'Labor cost variance reduced to under 2% between units',
      'Management retention improved 60% year-over-year',
      'Concept recognized for consistency in local press',
    ],
    timeframe: '6 months',
    badge: 'Multi-Unit',
  },
];
