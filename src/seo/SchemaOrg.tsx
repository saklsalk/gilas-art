import { SITE_URL } from '../constants'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Gila's Art",
  description:
    'Home art classes for children and adults in Berlin Schöneberg. Drawing, painting, crafts and sculpture.',
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berlin',
    addressRegion: 'Schöneberg',
    postalCode: '10823',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.4893,
    longitude: 13.3531,
  },
  areaServed: {
    '@type': 'City',
    name: 'Berlin',
  },
  priceRange: '€€',
  knowsLanguage: ['en', 'de', 'ru', 'he'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Art Classes',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private Art Lessons',
          description: 'One-on-one art lessons for children and adults',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Group Art Classes',
          description: 'Small group art classes for children and adults',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Art Project Assistance',
          description: 'Help with school art projects and portfolios',
        },
      },
    ],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gila Gilad',
  jobTitle: 'Art Pedagogue & Art Therapist',
  knowsAbout: [
    'Drawing',
    'Painting',
    'Sculpture',
    'Crafts',
    'Art Education',
    'Art Therapy',
    'Pedagogy',
  ],
  knowsLanguage: ['English', 'German', 'Russian', 'Hebrew'],
  worksFor: {
    '@type': 'LocalBusiness',
    name: "Gila's Art",
  },
}

const educationalOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: "Gila's Art",
  description: 'Art education for children and adults in Berlin Schöneberg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berlin',
    addressRegion: 'Schöneberg',
    addressCountry: 'DE',
  },
  teaches: ['Drawing', 'Painting', 'Sculpture', 'Crafts'],
}

export function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationalOrgSchema),
        }}
      />
    </>
  )
}
