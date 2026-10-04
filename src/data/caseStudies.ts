export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  approach: string;
  results: {
    metric: string;
    label: string;
  }[];
  services: string[];
  duration: string;
  testimonial: string;
  image: string;
  slug: string;
}

// Every fact here comes from the resume (the master source) or public records
// about the property. No testimonials are shown until real, attributable ones exist.
export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    client: 'Maska Indian Kitchen + Bar',
    industry: 'Restaurant Opening / Michelin-Chef Concept',
    title: "Opening a Michelin-Starred Chef's Restaurant from Ground Zero",
    challenge: 'Open Maska Indian Kitchen + Bar, a 7,000 sq. ft., 140-seat modern Indian restaurant in Midtown Miami led by Chef Hemant Mathur, America\'s first Michelin-starred Indian chef, with no existing team, vendors, or systems in place.',
    approach: 'As opening General Manager, built the operation from the ground up: hiring and training, purchasing controls, vendor relationships, inventory pars, front- and back-of-house procedures, service standards, and the opening-readiness timeline. After opening, launched Cho:Tu Indian Street Food next door as a fast-casual and off-premise concept run from Maska\'s kitchen.',
    results: [
      { metric: 'Jan 2019', label: 'Opened on schedule in Midtown' },
      { metric: '140', label: 'Seats across 7,000 sq. ft.' },
      { metric: '2', label: 'Concepts run from one kitchen' }
    ],
    services: ['Pre-Opening', 'Team Hiring & Training', 'SOP Development'],
    duration: 'Opening General Manager',
    testimonial: '',
    image: '/images/pre-opening.jpg',
    slug: 'maska-indian-kitchen'
  },
  {
    id: '2',
    client: 'V&E Hospitality Group',
    industry: 'Multi-Concept Restaurant Group',
    title: 'Running Two Restaurants at Once for V&E Hospitality',
    challenge: 'V&E Hospitality needed one leader to run two very different restaurants at the same time: Marab\u00fa Cuban Coal Fire & Grill at Brickell City Centre, and La Cervecer\u00eda de Barrio in Miami Beach, while growing sales without eroding margins.',
    approach: 'Shared staff, prep, and purchasing across both concepts with the culinary team; tightened labor deployment and prime cost control; and built an off-premise program that grew alongside dine-in service instead of competing with it.',
    results: [
      { metric: '2', label: 'Restaurants run at once' },
      { metric: '2', label: 'Neighborhoods: Brickell and Miami Beach' },
      { metric: 'New', label: 'Off-premise program built' }
    ],
    services: ['Multi-Unit Operations', 'Labor & Prime Cost Control', 'Off-Premise Growth'],
    duration: 'General Manager, Dual Concept',
    testimonial: '',
    image: '/images/labor.jpg',
    slug: 've-hospitality-turnaround'
  },
  {
    id: '3',
    client: 'SLS Brickell',
    industry: 'Luxury Lifestyle Hotel Opening',
    title: 'Building a Luxury Hotel Banquet Department Before Opening Day',
    challenge: 'SLS Brickell, a 124-room Philippe Starck hotel by sbe with 58,000 sq. ft. of indoor and outdoor event space, needed a banquet department built from nothing before its October 2016 opening.',
    approach: 'As Director of Banquet Operations on the opening team, built the department\'s workflows, staffing, training, service standards, and event-execution procedures, then held banquet service to sbe\'s luxury lifestyle brand standards across the ballroom, terraces, and private-event spaces.',
    results: [
      { metric: '1,800', label: 'Guests at the grand opening' },
      { metric: '58,000', label: 'Sq. ft. of event space brought online' },
      { metric: 'Oct 2016', label: 'Hotel opening' }
    ],
    services: ['Pre-Opening', 'Banquet Operations', 'Team Training'],
    duration: 'Director of Banquet Operations, Opening Team',
    testimonial: '',
    image: '/images/dining.jpg',
    slug: 'sls-brickell-banquets'
  },
  {
    id: '4',
    client: 'Butler Hospitality',
    industry: 'Hotel In-Room Dining',
    title: 'Hotel Room-Service Delivery Across 5,000+ Rooms',
    challenge: 'Butler Hospitality delivered in-room dining to partner hotels from central kitchens, and its Miami market needed fast, consistent service across properties in Downtown, Brickell, and South Beach.',
    approach: 'As Local Area Operations Manager, ran staffing, order fulfillment, and hotel integrations, and brought new hotel partners online with menu builds, property-management-system order workflows, vendor setup, and field training for staff.',
    results: [
      { metric: '5,000+', label: 'Partner hotel rooms served' },
      { metric: '< 30 min', label: 'Delivery standard' },
      { metric: '3', label: 'Miami neighborhoods covered' }
    ],
    services: ['Multi-Property Operations', 'In-Room Dining', 'Partner Onboarding'],
    duration: 'Local Area Operations Manager',
    testimonial: '',
    image: '/images/fnb-manager.jpg',
    slug: 'butler-hospitality-scale'
  }
];
