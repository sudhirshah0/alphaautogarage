import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GARAGE_INFO } from '../../data/garageInfo';

export const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/logo.png',
  schema
}) => {
  const fullTitle = title
    ? `${title} | ${GARAGE_INFO.name}`
    : `${GARAGE_INFO.name} | ${GARAGE_INFO.tagline}`;
  const metaDescription = description || GARAGE_INFO.description;

  const localBusinessSchema = schema || {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: GARAGE_INFO.name,
    image: 'https://alphaautogarage.com/logo.png',
    telephone: GARAGE_INFO.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: GARAGE_INFO.address.street,
      addressLocality: GARAGE_INFO.address.city,
      addressRegion: GARAGE_INFO.address.state,
      postalCode: GARAGE_INFO.address.zip,
      addressCountry: GARAGE_INFO.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0736,
      longitude: -118.4114
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:30',
        closes: '16:00'
      }
    ],
    sameAs: [
      GARAGE_INFO.social.facebook,
      GARAGE_INFO.social.instagram,
      GARAGE_INFO.social.youtube
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};
