import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://homeaspect.com.sg'),
  title: {
    default: 'Home | RedDot Emergency',
    template: '%s | RedDot Emergency',
  },
  description:
    'RedDot Emergency provides 24-hour emergency plumbing services in Singapore. Fast response for pipe leaks, toilet chokes, water heater repair, and more. WhatsApp us now at +65 8294 1906.',
  keywords: [
    'emergency plumber singapore',
    '24 hour plumber singapore',
    'plumbing services singapore',
    'emergency plumbing singapore',
    'plumber singapore',
    'toilet bowl choke repair singapore',
    'sink choke plumber singapore',
    'water leak repair singapore',
    'water pipe repair singapore',
    'HDB plumber singapore',
    'condo plumber singapore',
    'urgent plumber singapore',
    'same day plumber singapore',
    'water heater repair singapore',
    'pipe leak repair singapore',
    'floor trap choke singapore',
    'tap repair singapore',
    'basin replacement singapore',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://homeaspect.com.sg',
    siteName: 'RedDot Emergency',
    title: 'Home | RedDot Emergency',
    description:
      '24-hour emergency plumbing services in Singapore. Fast response, transparent pricing. WhatsApp +65 8294 1906.',
    images: [
      {
        url: '/reddot_emergency_plumbing_logo.jfif',
        width: 200,
        height: 200,
        alt: 'RedDot Emergency Plumbing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | RedDot Emergency',
    description:
      '24-hour emergency plumbing services in Singapore. Fast response, transparent pricing.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://homeaspect.com.sg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RedDot Emergency',
    description:
      '24-hour emergency plumbing services in Singapore. Fast response for pipe leaks, toilet chokes, water heater repair, and more.',
    url: 'https://homeaspect.com.sg',
    telephone: '+6582941906',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Singapore',
      addressCountry: 'SG',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    image: 'https://homeaspect.com.sg/reddot_emergency_plumbing_logo.jfif',
    sameAs: ['https://wa.me/6582941906'],
  };

  const emergencyServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: 'RedDot Emergency Emergency Plumbing',
    description: '24-hour emergency plumber in Singapore. Fast response within 30-60 minutes for burst pipes, toilet chokes, water leaks, and more.',
    telephone: '+6582941906',
    url: 'https://homeaspect.com.sg/emergency',
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
    availableService: {
      '@type': 'Service',
      serviceType: 'Emergency Plumbing Repair',
      areaServed: { '@type': 'Country', name: 'Singapore' },
    },
    openingHours: 'Mo-Su 00:00-23:59',
  };

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'RedDot Emergency',
    },
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '20',
    reviewCount: '20',
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RedDot Emergency',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '20',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Mr Tan' },
        datePublished: '2024-06-15',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Called RedDot Emergency at midnight when our toilet completely choked. They arrived in under 40 minutes and had the blockage cleared within the hour. Very professional and the price was exactly as quoted. Highly recommend for any HDB plumbing emergency.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Mdm Lim' },
        datePublished: '2024-07-22',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Water started leaking from a concealed pipe in our bedroom wall. RedDot Emergency detected the exact location without unnecessary hacking and repaired it neatly. Transparent pricing from start to finish. Will definitely use their service again.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Mr Wong' },
        datePublished: '2024-08-10',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Our water heater stopped working on a Sunday. WhatsApp them and got a reply immediately. Technician diagnosed a failed heating element and replaced it the same afternoon. Fair pricing for weekend service. Excellent response time.',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/reddot_emergency_plumbing_logo.jfif" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/reddot_emergency_plumbing_logo.jfif" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
