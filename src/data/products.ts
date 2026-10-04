export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'template' | 'playbook' | 'course' | 'toolkit';
  image: string;
  features: string[];
  badge?: string;
  // Real reviews only. Add { rating, reviewCount } once genuine customer
  // reviews exist -- do not populate with placeholder numbers.
  rating?: number;
  reviewCount?: number;
  includes: string[];
  // 'available' renders a Buy button and requires checkoutUrl.
  // 'waitlist' renders an honest "In Development / Join the Waitlist" state
  // and routes to /contact for email capture.
  status: 'available' | 'waitlist';
  // Required when status === 'available'. Gumroad / Lemon Squeezy / Stripe link.
  checkoutUrl?: string;
  // Optional honest ship estimate shown on waitlist cards, e.g. 'Fall 2026'.
  expected?: string;
}

// ORDER MATTERS: available products render first. Do not sort this array
// in the view layer -- the catalog is intentionally ordered for conversion.
export const products: Product[] = [
  {
    id: 'pre-opening-playbook',
    title: 'Pre-Opening Playbook',
    subtitle: 'From Construction to Opening Night',
    description: 'The exact system I used to open Maska Indian Kitchen + Bar with a Michelin-starred chef and multiple hotel properties. A 120-day roadmap with week-by-week checklists and fillable templates. The full paid version of the free 90-Day Blueprint overview.',
    price: 197,
    originalPrice: 297,
    category: 'playbook',
    image: '/images/products/pre-opening-playbook.png',
    features: [
      '120-day pre-opening timeline',
      'Vendor negotiation scripts',
      'Team hiring & training framework',
      'Menu development workflow',
      'Inspection readiness checklist',
      'Marketing launch sequence'
    ],
    badge: 'Available Now',
    includes: ['120-day roadmap PDF', 'Editable checklists', 'Vendor contact templates', 'Vendor negotiation scripts'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/ypudd'
  },
  {
    id: 'sop-core-collection',
    title: 'F&B SOP Core Collection',
    subtitle: '25 Standard Operating Procedures',
    description: 'The core SOP library for restaurant and hotel F&B teams: front of house, bar, kitchen, management controls, and events. Each SOP is written to be adopted as is or edited to fit your venue.',
    price: 97,
    category: 'template',
    image: '/images/products/sop-core-collection.png',
    features: [
      '25 SOPs across five departments',
      'Front of house service standards',
      'Bar and beverage procedures',
      'Kitchen and food safety protocols',
      'Manager logs and labor controls',
      'Banquet and event execution'
    ],
    badge: 'Available Now',
    includes: ['PDF', 'Editable Word file', 'EPUB for e-readers', 'Instant download'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/fsbjtn'
  },
  {
    id: 'financial-model',
    title: 'F&B Startup Financial Model',
    subtitle: 'Budget, P&L, Scenarios & Cash Runway',
    description: 'A ready-to-fill financial model for a new restaurant or hotel F&B outlet. Enter your assumptions once and the startup budget, monthly P&L, scenarios, and 12-month cash runway calculate automatically.',
    price: 79,
    category: 'toolkit',
    image: '/images/products/financial-model.png',
    features: [
      'Startup budget builder',
      'Monthly steady-state P&L',
      'Downside, base, and upside scenarios',
      '12-month cash runway',
      'Built-in model check',
      'Works in Excel, Google Sheets, and Numbers'
    ],
    badge: 'Available Now',
    includes: ['Excel workbook', 'Start Here guide tab', 'Instant download'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/oxozmc'
  },
  {
    id: 'kitchen-cost-control',
    title: 'Kitchen Cost Control Toolkit',
    subtitle: 'Recipe Costing, Inventory, Waste & Purchasing',
    description: 'The tools I use to get food and beverage cost under control: recipe costing, inventory pars, waste tracking, vendor bid comparison, and a purchase order register, paired with the receiving and inventory SOPs.',
    price: 67,
    category: 'toolkit',
    image: '/images/products/kitchen-cost-control.png',
    features: [
      'Recipe costing sheet',
      'Inventory counts and pars',
      'Waste log',
      'Vendor bid comparison',
      'Purchase order register',
      'Receiving and inventory SOPs'
    ],
    badge: 'Available Now',
    includes: ['Excel workbook', '2 SOPs in PDF and Word', 'EPUB for e-readers', 'Instant download'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/zdxriw'
  },
  {
    id: 'labor-performance-toolkit',
    title: 'Labor & Daily Performance Toolkit',
    subtitle: 'Labor Plan, Daily Flash, Training & Hiring',
    description: 'Plan labor with employer burden included, track sales, labor, and covers every day, and keep training and hiring organized. Includes the pre-shift, manager log, and labor control SOPs.',
    price: 57,
    category: 'toolkit',
    image: '/images/products/labor-performance-toolkit.png',
    features: [
      'Labor plan with employer burden',
      'Daily flash report',
      'Training matrix',
      'Hiring pipeline tracker',
      'Pre-shift and manager log SOPs',
      'Labor control SOP'
    ],
    badge: 'Available Now',
    includes: ['Excel workbook', '3 SOPs in PDF and Word', 'EPUB for e-readers', 'Instant download'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/gldspt'
  },
  {
    id: 'food-safety-kit',
    title: 'Food Safety & Inspection Kit',
    subtitle: '7 Kitchen SOPs + Monitoring Logs',
    description: 'Seven kitchen and inspection-readiness SOPs with matching food safety monitoring logs, so your team runs the same safe process every shift and is ready when the inspector walks in.',
    price: 47,
    category: 'template',
    image: '/images/products/food-safety-kit.png',
    features: [
      '7 kitchen and food safety SOPs',
      'Inspection readiness procedure',
      'Food safety parameter sheet',
      'Monitoring logs',
      'Editable for your venue',
      'Verify against your local code'
    ],
    badge: 'Available Now',
    includes: ['PDF', 'Editable Word file', 'Excel logs', 'EPUB for e-readers'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/ivxrbo'
  },
  {
    id: 'foh-bar-standards',
    title: 'FOH & Bar Service Standards',
    subtitle: '10 Service SOPs for Restaurant & Hotel Teams',
    description: 'Six front of house and four bar SOPs that define how your team greets, serves, and closes out every guest. Use them to train new hires and hold the standard on busy nights.',
    price: 47,
    category: 'template',
    image: '/images/products/foh-bar-standards.png',
    features: [
      '6 front of house SOPs',
      '4 bar and beverage SOPs',
      'Step-by-step service sequence',
      'Training-ready format',
      'Restaurant and hotel ready',
      'Editable for your venue'
    ],
    badge: 'Available Now',
    includes: ['PDF', 'Editable Word file', 'EPUB for e-readers', 'Instant download'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/bwpke'
  },
  {
    id: 'banquet-events-kit',
    title: 'Banquet & Events Operations Kit',
    subtitle: '4 Event SOPs + Guest Recovery Log',
    description: 'Four SOPs that take a banquet or private event from BEO to final reconciliation, plus a guest recovery log for documenting service issues, what was offered, and the follow-up.',
    price: 47,
    category: 'playbook',
    image: '/images/products/banquet-events-kit.png',
    features: [
      '4 banquet and event SOPs',
      'BEO to reconciliation workflow',
      'Event setup and execution',
      'Guest recovery log',
      'Hotel and restaurant ready',
      'Editable for your venue'
    ],
    badge: 'Available Now',
    includes: ['PDF', 'Editable Word file', 'Excel log', 'EPUB for e-readers'],
    status: 'available',
    checkoutUrl: 'https://menaconsulting.gumroad.com/l/jnecos'
  }
];

// Products the catalog no longer displays. Kept here so the copy is not lost
// if any is built later; not exported into `products`, so nothing renders.
export const archivedProducts: Product[] = [
  {
    id: 'sop-master-collection',
    title: 'F&B SOP Master Collection',
    subtitle: '50+ Standard Operating Procedures',
    description: 'The complete SOP library I have built and refined across 18+ years in Miami hospitality. Covering opening/closing procedures, service standards, food safety protocols, and team training modules.',
    price: 297,
    originalPrice: 497,
    category: 'template',
    image: '/products/sop-collection.jpg',
    features: [
      '50+ customizable SOP templates',
      'Opening & closing checklists',
      'Food safety & HACCP protocols',
      'Service standard scripts',
      'Training module frameworks',
      'Digital download + updates'
    ],
    includes: ['PDF + Word formats', 'Digital download', 'Lifetime updates', 'Private community access'],
    status: 'waitlist',
    expected: 'Next release'
  },
  {
    id: 'banquet-operations-blueprint',
    title: 'Banquet Operations Blueprint',
    subtitle: 'Events, Catering & Large-Scale Service',
    description: 'Complete banquet and catering operations system developed at SLS Brickell and other luxury properties. Event planning templates, BEO workflows, and service execution guides.',
    price: 247,
    category: 'playbook',
    image: '/products/banquet-blueprint.jpg',
    features: [
      'BEO template library',
      'Event setup guides',
      'Catering menu engineering',
      'Staff deployment charts',
      'Client communication scripts',
      'Post-event analysis framework'
    ],
    includes: ['PDF + Canva templates', 'Event calculators', 'Client proposal templates', 'Video training'],
    status: 'waitlist'
  },
  {
    id: 'labor-optimization-toolkit',
    title: 'Labor Optimization Toolkit',
    subtitle: 'Scheduling, Cost Control & Compliance',
    description: 'Advanced labor management tools including scheduling templates, labor cost calculators, and compliance trackers that helped reduce labor costs by 15-22% at multiple properties.',
    price: 147,
    category: 'toolkit',
    image: '/products/labor-toolkit.jpg',
    features: [
      'Smart scheduling templates',
      'Labor cost calculator',
      'Overtime tracking system',
      'Break compliance checklists',
      'Performance scorecards',
      'Budget variance analysis'
    ],
    includes: ['Excel + Google Sheets', 'Video tutorials', 'ROI calculator', 'Email support'],
    status: 'waitlist'
  },
  {
    id: 'revenue-recovery-system',
    title: 'Revenue Recovery System',
    subtitle: 'Turn Around Underperforming Operations',
    description: 'A diagnostic and action framework for operations that are missing targets. Includes P&L analysis templates, cost reduction playbooks, and revenue optimization strategies.',
    price: 347,
    originalPrice: 497,
    category: 'course',
    image: '/products/revenue-recovery.jpg',
    features: [
      'Operations diagnostic framework',
      'P&L analysis templates',
      'Cost reduction playbook',
      'Revenue optimization guide',
      '30-60-90 day action plan',
      'Stakeholder presentation templates'
    ],
    includes: ['6 video modules', 'Workbook PDF', 'Analysis templates', '1:1 consultation discount'],
    status: 'waitlist'
  },
  {
    id: 'menu-engineering-masterclass',
    title: 'Menu Engineering Masterclass',
    subtitle: 'Data-Driven Menu Design & Pricing',
    description: 'Learn the science behind profitable menu design. From matrix analysis to psychological pricing, this course teaches you to engineer menus that drive both revenue and guest satisfaction.',
    price: 127,
    category: 'course',
    image: '/products/menu-masterclass.jpg',
    features: [
      'Menu matrix analysis method',
      'Psychological pricing strategies',
      'Category management system',
      'Seasonal menu planning',
      'Costing & margin optimization',
      'Digital menu best practices'
    ],
    includes: ['4 video modules', 'Menu analysis toolkit', 'Pricing calculator', 'Certificate of completion'],
    status: 'waitlist'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category);
};

export const availableProducts = (): Product[] =>
  products.filter(p => p.status === 'available');
