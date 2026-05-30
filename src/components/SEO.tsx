import { useEffect } from 'react'

interface Props {
  title: string
  description: string
  path?: string
  image?: string
  type?: string
}

export default function SEO({
  title,
  description,
  path = '',
  image = 'https://www.leandermena.com/images/aboutme.jpg',
  type = 'website',
}: Props) {
  const fullTitle = `${title} | Leander Mena — Miami F&B Operations`
  const url = `https://www.leandermena.com${path}`

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
    setMeta('description', description)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:image', image, true)
    setMeta('og:url', url, true)
    setMeta('og:type', type, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
  }, [fullTitle, description, url, image, type])

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Leander Mena',
    jobTitle: 'Fractional F&B Operations Leader',
    description:
      '18+ years opening, leading, and growing restaurants, hotels, banquets, and catering operations across Miami.',
    url: 'https://www.leandermena.com',
    image: 'https://www.leandermena.com/images/aboutme.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/in/leandermena',
    ],
    knowsAbout: [
      'Restaurant Operations',
      'Hotel F&B Management',
      'Pre-Opening Consulting',
      'Banquet Operations',
      'Labor Cost Control',
      'SOP Development',
    ],
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  )
}
