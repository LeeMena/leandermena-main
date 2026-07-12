// Landscape hero imagery served from the Unsplash CDN with forced 16:9 crops.
// All photos are under the Unsplash License (free for commercial use, no
// attribution required; photographer credit kept here and in alt text as a
// courtesy). The `fallback` is a repo-local asset used if the CDN image is
// ever removed by its contributor.
//
// URL pattern: base + ?fm=jpg&w=<w>&h=<h>&fit=crop&crop=edges&q=80&auto=format

const params = (w: number, h: number) =>
  `?fm=jpg&w=${w}&h=${h}&fit=crop&crop=edges&q=80&auto=format`

export interface HeroImage {
  url: string
  fallback: string
  credit: string
  alt: string
}

// Optional ambient background video for the home hero. Leave null and the
// hero shows the static heroImages.home photo (current behavior). To enable:
//   1. Drop a short, muted, looping clip at public/videos/home-hero.mp4
//      (see public/videos/README.md for recommended specs).
//   2. Set this to '/videos/home-hero.mp4'.
// The static photo above stays as the video's poster + fallback, and
// visitors with prefers-reduced-motion always get the still image.
export const homeHeroVideo: string | null = null

export const heroImages: Record<string, HeroImage> = {
  home: {
    url: '/images/landing-hero.jpg',
    fallback: '/images/landing-hero.jpg',
    credit: '',
    alt: 'Upscale restaurant dining room with warm ambient lighting',
  },
  // Warm, refined restaurant interior with pendant lighting
  about: {
    url: `https://images.unsplash.com/photo-1521917441209-e886f0404a7b${params(1920, 1080)}`,
    fallback: '/images/aboutme.jpg',
    credit: 'Photo: Sebastian Schuppik, Unsplash',
    alt: 'Warm, refined restaurant dining room with tables and pendant lighting',
  },
  // Moody hotel lounge/lobby bar, warm amber pendant light (the brief's
  // premium pick; distinct from the home hero and from blog card imagery)
  services: {
    url: `https://images.unsplash.com/photo-1552566626-2d907dab0dff${params(1920, 1080)}`,
    fallback: '/images/services.jpg',
    credit: 'Photo: Nick Karvounis, Unsplash',
    alt: 'Dimly lit upscale hotel lounge with warm amber pendant lighting',
  },
  // Softly-lit dining room with guests: opening-night energy
  preOpening: {
    url: `https://images.unsplash.com/photo-1567745219000-b99afacf5ef6${params(1920, 1080)}`,
    fallback: '/images/pre-opening.jpg',
    credit: 'Photo: Kristian Angelo, Unsplash',
    alt: 'Softly lit restaurant dining room full of guests on a busy evening',
  },
  // Refined dining room, white-set tables: the after-state of a turnaround
  caseStudies: {
    url: `https://images.unsplash.com/photo-1583354608715-177553a4035e${params(1920, 1080)}`,
    fallback: '/images/fnb-manager.jpg',
    credit: 'Photo: Klara Kulikova, Unsplash',
    alt: 'Polished restaurant dining room with white-set tables and warm lighting',
  },
  // Plated fine-dining dish, dark background
  products: {
    url: `https://images.unsplash.com/photo-1414235077428-338989a2e8c0${params(1600, 900)}`,
    fallback: '/images/dining.jpg',
    credit: 'Photo: Jay Wennington, Unsplash',
    alt: 'Elegantly plated fine-dining dish against a dark background',
  },
  // Warm upscale bar with counter and stools
  industries: {
    url: `https://images.unsplash.com/photo-1687945512099-400cbe94460c${params(1920, 1080)}`,
    fallback: '/images/dining.jpg',
    credit: 'Photo: ASR Design Studio, Unsplash',
    alt: 'Upscale bar with counter seating and warm backlighting',
  },
  // People dining in a warm restaurant: service culture / training
  miami: {
    url: `https://images.unsplash.com/photo-1559329007-40df8a9345d8${params(1920, 1080)}`,
    fallback: '/images/dining.jpg',
    credit: 'Photo: K8, Unsplash',
    alt: 'Guests dining in a warm, busy restaurant',
  },
  // Elegant banquet hall: chandeliers, white linens, round tables
  banquet: {
    url: `https://images.unsplash.com/photo-1519167758481-83f550bb49b3${params(1920, 1080)}`,
    fallback: '/images/dining.jpg',
    credit: 'Photo: Shawn Ang, Unsplash',
    alt: 'Elegant banquet hall set for a large-scale event with chandeliers, white linens, and round tables',
  },
}
