import { useEffect } from 'react'

export type SchemaType =
  | 'home'
  | 'about'
  | 'services'
  | 'pre-opening'
  | 'experience'
  | 'skills'
  | 'philosophy'
  | 'profile'
  | 'contact'
  | 'insights'
  | 'article'
  | 'case-studies'
  | 'case-study-detail'
  | 'blueprint'

interface ArticleMeta {
  datePublished: string
  dateModified: string
  headline: string
}

interface Props {
  title: string
  description: string
  path?: string
  image?: string
  type?: string
  schemaType?: SchemaType
  article?: ArticleMeta
  caseStudy?: {
    client: string
    slug: string
    results: { metric: string; label: string }[]
  }
}

const BASE_URL = 'https://www.leandermena.com'
const DEFAULT_IMAGE = `${BASE_URL}/images/about.jpg`

const PERSON_BASE = {
  '@type': 'Person',
  name: 'Leander Mena',
  jobTitle: 'Fractional F&B Operations Leader',
  url: BASE_URL,
  image: DEFAULT_IMAGE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  sameAs: ['https://www.linkedin.com/in/leandermena'],
  knowsAbout: [
    'Restaurant Operations',
    'Hotel F&B Management',
    'Pre-Opening Consulting',
    'Banquet Operations',
    'Labor Cost Control',
    'SOP Development',
  ],
}

const ORGANIZATION_PUBLISHER = {
  '@type': 'Organization',
  name: 'Leander Mena',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/favicon.svg`,
    width: 512,
    height: 512,
  },
}

const SERVICES_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a fractional F&B leader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fractional F&B leader is an experienced Food & Beverage executive who works with your operation on a part-time or project basis, delivering senior-level leadership without the cost of a full-time hire. You get the strategy, systems, and execution expertise of a seasoned GM or F&B Director, engaged only for the hours and duration you actually need.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does fractional F&B consulting cost in Miami?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fractional F&B consulting engagements are scoped to the specific project or retainer. Pre-opening consulting typically runs 3-5 months. Fractional leadership retainers are structured monthly. Every engagement begins with a discovery conversation to define scope, timeline, and investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you only work with Miami restaurants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary market is Miami and South Florida, but remote advisory and project-based engagements are available for operations outside the area. Contact to discuss your specific situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a pre-opening consulting engagement last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most pre-opening engagements run 90-120 days, beginning 3-4 months before target opening date. The timeline covers concept alignment, SOP development, hiring and training, vendor onboarding, and opening-day execution. Projects with longer construction timelines can be structured to match.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of venues do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Engagements span independent restaurants, hotel F&B programs, multi-concept groups, banquet and catering operations, and food-tech hospitality companies. From a 40-seat neighborhood restaurant to a 500-person hotel banquet program.',
      },
    },
  ],
}

function buildSchema(schemaType: SchemaType, url: string, article?: ArticleMeta, description?: string, caseStudy?: Props['caseStudy']) {
  const breadcrumb = (label: string, parentPath?: string, parentLabel?: string) => {
    const items: object[] = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ]
    if (parentPath && parentLabel) {
      items.push({ '@type': 'ListItem', position: 2, name: parentLabel, item: `${BASE_URL}${parentPath}` })
      items.push({ '@type': 'ListItem', position: 3, name: label, item: url })
    } else {
      items.push({ '@type': 'ListItem', position: 2, name: label, item: url })
    }
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    }
  }

  switch (schemaType) {
    case 'home':
      return [
        {
          '@context': 'https://schema.org',
          ...PERSON_BASE,
          description: '18+ years opening, leading, and growing restaurants, hotels, banquets, and catering operations across Miami.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Leander Mena - F&B Operations',
          url: BASE_URL,
          image: DEFAULT_IMAGE,
          description: 'Fractional F&B Director and pre-opening consultant serving Miami restaurants and hotels.',
          address: PERSON_BASE.address,
          areaServed: [
            { '@type': 'City', name: 'Miami', sameAs: 'https://www.wikidata.org/wiki/Q8654' },
            { '@type': 'State', name: 'Florida' },
          ],
          priceRange: '$$$$',
          sameAs: PERSON_BASE.sameAs,
        },
      ]
    case 'about':
      return [
        {
          '@context': 'https://schema.org',
          ...PERSON_BASE,
          description: 'Leander Mena is a Miami-based fractional F&B operations leader with 18+ years of experience opening and managing restaurants, hotels, and hospitality venues.',
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Fractional F&B Director',
            occupationLocation: PERSON_BASE.address,
            estimatedSalary: [],
            description: 'Pre-opening consulting, operations leadership, and team development for Miami hospitality brands.',
          },
        },
        breadcrumb('About'),
      ]
    case 'services':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Fractional F&B Operations & Consulting',
          provider: { ...PERSON_BASE },
          serviceType: 'Food and Beverage Operations Consulting',
          areaServed: PERSON_BASE.address,
          url: `${BASE_URL}/services`,
          description: 'Fractional F&B Director services for Miami restaurants and hotels including operations leadership, menu development, team training, and financial oversight.',
        },
        SERVICES_FAQ,
        breadcrumb('Services'),
      ]
    case 'pre-opening':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Restaurant & Hotel Pre-Opening Consulting',
          provider: { ...PERSON_BASE },
          serviceType: 'Pre-Opening F&B Consulting',
          areaServed: PERSON_BASE.address,
          url: `${BASE_URL}/pre-opening`,
          description: 'End-to-end pre-opening consulting for new restaurants and hotel F&B programs in Miami: concept development, SOP creation, staff hiring and training, and opening-day execution.',
        },
        breadcrumb('Pre-Opening'),
      ]
    case 'experience':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Leander Mena - Career Experience',
          url: `${BASE_URL}/experience`,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          description: 'Career history of Leander Mena across Miami hospitality: restaurant groups, hotel F&B, banquet operations, and pre-opening projects.',
        },
        breadcrumb('Experience'),
      ]
    case 'skills':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          name: 'Hospitality & F&B Operations Skills | Leander Mena',
          url: `${BASE_URL}/skills`,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          description: 'Core skill set in pre-opening leadership, labor cost control, SOP development, P&L management, and team training for Miami hotels and restaurants.',
          mainEntity: {
            '@context': 'https://schema.org',
            ...PERSON_BASE,
            description: 'Leander Mena is a Miami-based fractional F&B operations leader with 18+ years of experience opening and managing restaurants and hotels.',
            hasCredential: [
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Pre-Opening Leadership' },
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Labor & Cost Control' },
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'SOP Development & Training' },
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'P&L Management' },
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Multi-Unit Operations' },
            ],
          },
        },
        breadcrumb('Skills'),
      ]
    case 'philosophy':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Leadership Philosophy - Leander Mena',
          url: `${BASE_URL}/philosophy`,
          image: DEFAULT_IMAGE,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          description: 'The operating principles and leadership philosophy behind Leander Mena’s approach to F&B operations management.',
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/philosophy` },
        },
        breadcrumb('Philosophy'),
      ]
    case 'contact':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Leander Mena - F&B Operations',
          url: `${BASE_URL}/contact`,
          image: DEFAULT_IMAGE,
          description: 'Contact Leander Mena for fractional F&B consulting, pre-opening projects, and operations leadership engagements in Miami.',
          address: PERSON_BASE.address,
          areaServed: [
            { '@type': 'City', name: 'Miami' },
            { '@type': 'State', name: 'Florida' },
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish'],
          },
          sameAs: PERSON_BASE.sameAs,
        },
        breadcrumb('Contact'),
      ]
    case 'insights':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Insights - Leander Mena',
          url: `${BASE_URL}/insights`,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          publisher: ORGANIZATION_PUBLISHER,
          description: 'Hospitality and F&B operations insights from Leander Mena: pre-opening, fractional GM models, labor cost control, and Miami restaurant strategy.',
        },
        breadcrumb('Insights'),
      ]
    case 'case-studies':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Case Studies - Leander Mena',
          url: `${BASE_URL}/case-studies`,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          description: 'Real results from F&B consulting engagements: revenue recovered, openings stabilized, and teams rebuilt across Miami hospitality.',
        },
        breadcrumb('Case Studies'),
      ]
    case 'case-study-detail':
      if (!caseStudy) return []
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${caseStudy.client} - F&B Operations Case Study`,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          publisher: ORGANIZATION_PUBLISHER,
          url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
          image: DEFAULT_IMAGE,
          description: `F&B operations case study for ${caseStudy.client}: ${caseStudy.results.map(r => `${r.metric} ${r.label}`).join(', ')}.`,
        },
        breadcrumb(caseStudy.client, '/case-studies', 'Case Studies'),
      ]
    case 'blueprint':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Pre-Opening Blueprint',
          description: 'A battle-tested pre-opening checklist and timeline for restaurant and hotel F&B programs. Built from 18+ years of Miami hospitality openings.',
          brand: { '@type': 'Brand', name: 'Leander Mena' },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
        breadcrumb('Pre-Opening Blueprint'),
      ]
    case 'profile':
      return [
        {
          '@context': 'https://schema.org',
          ...PERSON_BASE,
          description: description || 'Leander Mena is a Miami-based fractional F&B operations leader.',
        },
        breadcrumb('Profile'),
      ]
    case 'article':
      if (!article) return []
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.headline,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          publisher: ORGANIZATION_PUBLISHER,
          url,
          image: DEFAULT_IMAGE,
          description,
        },
        breadcrumb(article.headline, '/insights', 'Insights'),
      ]
    default:
      return []
  }
}

export default function SEO({ title, description, path = '/', image, type = 'website', schemaType, article, caseStudy }: Props) {
  const url = `${BASE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE

  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
      if (!el) {
        el = document.createElement('link')
        el.rel = rel
        document.head.appendChild(el)
      }
      el.href = href
    }

    setMeta('description', description)
    setMeta('robots', 'index, follow')
    setLink('canonical', url)

    setMeta('og:type', type, true)
    setMeta('og:url', url, true)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:image', ogImage, true)
    setMeta('og:locale', 'en_US', true)
    setMeta('og:site_name', 'Leander Mena', true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:url', url)
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', ogImage)

    if (schemaType) {
      const schemas = buildSchema(schemaType, url, article, description, caseStudy)
      if (schemas && schemas.length) {
        const existing = document.querySelectorAll('script[data-schema]')
        existing.forEach(el => el.remove())
        schemas.forEach((schema, i) => {
          const script = document.createElement('script')
          script.type = 'application/ld+json'
          script.setAttribute('data-schema', String(i))
          script.textContent = JSON.stringify(schema)
          document.head.appendChild(script)
        })
      }
    }
  }, [title, description, url, ogImage, type, schemaType, article, caseStudy])

  return null
}
