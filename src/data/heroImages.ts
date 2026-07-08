// Hero image data for all rotator slots.
// All Unsplash images are free for commercial use (Unsplash License).
// Local fallbacks in /public/images/ keep the site whole if CDN is unreachable.

export interface HeroImage {
  id: number;
  url: string;          // Unsplash CDN URL — 16:9 forced crop, w=1920
  fallback: string;     // Local asset path
  alt: string;
  photographer: string;
  unsplashHandle: string;
}

export const heroImages: HeroImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Upscale restaurant dining room with warm ambient lighting',
    photographer: 'Thomas Lefebvre',
    unsplashHandle: 'thomaslefebvre'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Modern restaurant interior with bar seating',
    photographer: 'Renate Vanaga',
    unsplashHandle: 'renatevanaga'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1552566626-52f8b828329b?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Fine dining table setting with white linens',
    photographer: 'Dan Gold',
    unsplashHandle: 'danielcgold'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/hotel.jpg',
    alt: 'Hotel F&B operations — open kitchen view',
    photographer: 'Bimo Luki',
    unsplashHandle: 'bimoluki'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/hotel.jpg',
    alt: 'Hotel lobby bar and lounge area',
    photographer: 'Suhyeon Choi',
    unsplashHandle: 'choisyeon'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Restaurant service — waiter presenting dishes tableside',
    photographer: 'Jessie Beck',
    unsplashHandle: 'jessiebeck'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Commercial kitchen — brigade in service',
    photographer: 'Alyson McPhee',
    unsplashHandle: 'alysonmcphee'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Plated dishes — precision food presentation',
    photographer: 'Brooke Lark',
    unsplashHandle: 'brookelark'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/hotel.jpg',
    alt: 'Resort pool bar and outdoor F&B service',
    photographer: 'Ishan @seefromthesky',
    unsplashHandle: 'seefromthesky'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Team training session in a hospitality setting',
    photographer: 'Annie Spratt',
    unsplashHandle: 'anniespratt'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/dining.jpg',
    alt: 'Pre-opening restaurant — empty dining room before launch',
    photographer: 'Naomi Ellsworth',
    unsplashHandle: 'naomie'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&h=1080&q=80',
    fallback: '/images/hotel.jpg',
    alt: 'Elegant banquet hall set for a large-scale event — chandeliers, white linens, round tables',
    photographer: 'Shawn Ang',
    unsplashHandle: 'shawnanggg'
  }
];
