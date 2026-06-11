import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://homeaspect.com.sg'),
  title: {
    default: 'Homeaspect - Emergency Plumber Singapore | 24 Hour Plumbing Services',
    template: '%s | Homeaspect - Singapore Emergency Plumber',
  },
  description:
    'Homeaspect provides 24-hour emergency plumbing services in Singapore. Fast response for pipe leaks, toilet chokes, water heater repair, and more. WhatsApp us now at +65 9677 3465.',
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
    siteName: 'Homeaspect',
    title: 'Homeaspect - Emergency Plumber Singapore | 24 Hour Plumbing Services',
    description:
      '24-hour emergency plumbing services in Singapore. Fast response, transparent pricing. WhatsApp +65 9677 3465.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homeaspect - Emergency Plumber Singapore',
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
    name: 'Homeaspect',
    description:
      '24-hour emergency plumbing services in Singapore. Fast response for pipe leaks, toilet chokes, water heater repair, and more.',
    url: 'https://homeaspect.com.sg',
    telephone: '+6596773465',
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
    image: 'https://homeaspect.com.sg/og-image.jpg',
    sameAs: ['https://wa.me/6596773465'],
  };

  const emergencyServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: 'Homeaspect Emergency Plumbing',
    description: '24-hour emergency plumber in Singapore. Fast response within 30-60 minutes for burst pipes, toilet chokes, water leaks, and more.',
    telephone: '+6596773465',
    url: 'https://homeaspect.com.sg/emergency-plumbing',
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

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyServiceSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
