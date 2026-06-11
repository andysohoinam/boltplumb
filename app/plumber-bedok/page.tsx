import type { Metadata } from 'next';
import { getLocationDetail } from '@/lib/locationData';
import { LocationPageClient } from '@/components/shared/LocationPageClient';

const location = getLocationDetail('plumber-bedok')!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: 'https://homeaspect.com.sg/plumber-bedok' },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: 'https://homeaspect.com.sg/plumber-bedok',
  },
};

export default function PlumberBedokPage() {
  return <LocationPageClient location={location} />;
}
