import type { Metadata } from 'next';
import { getLocationDetail } from '@/lib/locationData';
import { LocationPageClient } from '@/components/shared/LocationPageClient';

const location = getLocationDetail('plumber-jurong')!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: 'https://reddotemergency.com/plumber-jurong' },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: 'https://reddotemergency.com/plumber-jurong',
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

export default function PlumberJurongPage() {
  return <LocationPageClient location={location} />;
}
