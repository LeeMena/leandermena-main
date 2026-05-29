export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'pre-opening-brickell',
    title: 'Pre-Opening: 120-Seat Restaurant, Brickell',
    category: 'Pre-Opening',
    challenge:
      'Ownership was 90 days from opening with no GM in place, incomplete staffing, and no training materials.',
    approach:
      'Embedded as interim pre-opening GM. Built the full staffing model, hired and trained FOH and BOH leadership, wrote all SOPs, and ran the soft-opening week.',
    result:
      'Opened on schedule. First 60 days hit labor and revenue targets. Ownership promoted internal GM from the opening team.',
    metrics: [
      { label: 'Days to opening', value: '87' },
      { label: 'Labor target hit', value: 'Month 1' },
      { label: 'Team members trained', value: '42' },
    ],
  },
  {
    id: 'labor-recovery-hotel',
    title: 'Labor Recovery: Hotel F&B Department',
    category: 'Operations Recovery',
    challenge:
      'Hotel F&B labor costs running 48% of revenue. Turnover at 110% annualized. Service quality declining with guest scores dropping.',
    approach:
      'Operational diagnostic in week one identified scheduling inefficiencies, unclear role ownership, and weak management accountability. Built corrective plan and embedded for 60 days.',
    result:
      'Labor cost reduced to 34% within 90 days. Annualized turnover dropped to 65%. Guest satisfaction scores recovered over the following quarter.',
    metrics: [
      { label: 'Labor cost reduction', value: '14 pts' },
      { label: 'Turnover improvement', value: '45%' },
      { label: 'Timeline', value: '90 days' },
    ],
  },
  {
    id: 'banquet-sop-rebuild',
    title: 'Banquet Department Rebuild: 500-Person Venue',
    category: 'Systems & SOPs',
    challenge:
      'Banquet team had no documented standards. Every event was executed differently. Client complaints increasing and repeat bookings declining.',
    approach:
      'Audited existing processes, interviewed team and clients, and built a complete banquet SOP system covering setup, service, breakdown, communication, and captain accountability.',
    result:
      'Consistent event execution from first use. Client complaint rate dropped 80% in three months. Venue saw 22% increase in repeat bookings within six months.',
    metrics: [
      { label: 'Complaint reduction', value: '80%' },
      { label: 'Repeat bookings', value: '+22%' },
      { label: 'SOPs documented', value: '34' },
    ],
  },
];
