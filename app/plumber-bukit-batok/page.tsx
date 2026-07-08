import type { Metadata } from 'next';
import { getLocationDetail } from '@/lib/locationData';
import { LocationPageClient } from '@/components/shared/LocationPageClient';

const location = getLocationDetail('plumber-bukit-batok')!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: 'https://reddotemergency.com/plumber-bukit-batok' },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: 'https://reddotemergency.com/plumber-bukit-batok',
    images: [
      {
        url: '/reddot_emergency_plumbing_logo.jfif',
        width: 200,
        height: 200,
        alt: 'RedDot Emergency Plumbing Logo',
      },
    ],
  },
};

export default function PlumberBukitBatokPage() {
  return <LocationPageClient location={location} />;
}
