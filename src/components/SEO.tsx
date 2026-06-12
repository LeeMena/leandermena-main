import { useEffect } from 'react'

export type SchemaType =
  | 'home'
  | 'about'
  | 'services'
  | 'pre-opening'
  | 'experience'
  | 'philosophy'
  | 'profile'
  | 'contact'
  | 'insights'
  | 'article'
  | 'case-studies'
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

function buildSchema(schemaType: SchemaType, url: string, article?: ArticleMeta, description?: string) {
  const breadcrumb = (label: string) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: label, item: url },
    ],
  })

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
    case 'philosophy':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Leadership Philosophy - Leander Mena',
          url: `${BASE_URL}/philosophy`,
          image: DEFAULT_IMAGE,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          description: 'The operating principles and leadership philosophy behind Leander Mena\u2019s approach to F&B operations management.',
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
          description: 'Real results from hospitality consulting engagements: pre-opening builds, operations turnarounds, and labor cost improvements across Miami restaurants and hotels.',
        },
        breadcrumb('Case Studies'),
      ]
    case 'blueprint':
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Pre-Opening Blueprint - Leander Mena',
          url: `${BASE_URL}/blueprint`,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          description: 'The pre-opening blueprint used across 5+ Miami restaurant and hotel openings. Download the free framework for staffing, SOPs, and opening-day execution.',
        },
        breadcrumb('Blueprint'),
      ]
    case 'article':
      if (!article) return []
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.headline,
          url,
          image: DEFAULT_IMAGE,
          author: { '@type': 'Person', name: 'Leander Mena', url: BASE_URL },
          publisher: ORGANIZATION_PUBLISHER,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          description: description ?? '',
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        },
      ]
    default:
      return [
        {
          '@context': 'https://schema.org',
          ...PERSON_BASE,
          description: '18+ years opening, leading, and growing restaurants, hotels, banquets, and catering operations across Miami.',
        },
      ]
  }
}

export default function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  schemaType = 'home',
  article,
}: Props) {
  const fullTitle = title.includes('Leander Mena') ? title : `${title} | Leander Mena`
  const url = `${BASE_URL}${path}`
  const ogType = schemaType === 'article' ? 'article' : type

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name: string, content: string, prop = false) => {
      const selector = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        if (prop) el.setAttribute('property', name)
        else el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.href = href
    }

    setMeta('description', description)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:image', image, true)
    setMeta('og:url', url, true)
    setMeta('og:type', ogType, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
    setLink('canonical', url)

    if (schemaType === 'article' && article) {
      setMeta('article:published_time', article.datePublished, true)
      setMeta('article:modified_time', article.dateModified, true)
      setMeta('article:author', 'Leander Mena', true)
    }
  }, [fullTitle, description, url, image, ogType, schemaType, article])

  const schemas = buildSchema(schemaType, url, article, description)

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  )
}
