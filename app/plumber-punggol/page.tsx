import type { Metadata } from 'next';
import { getLocationDetail } from '@/lib/locationData';
import { LocationPageClient } from '@/components/shared/LocationPageClient';

const location = getLocationDetail('plumber-punggol')!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: 'https://homeaspect.com.sg/plumber-punggol' },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: 'https://homeaspect.com.sg/plumber-punggol',
  },
};

export default function PlumberPunggolPage() {
  return <LocationPageClient location={location} />;
}
