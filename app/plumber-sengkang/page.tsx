import type { Metadata } from 'next';
import { getLocationDetail } from '@/lib/locationData';
import { LocationPageClient } from '@/components/shared/LocationPageClient';

const location = getLocationDetail('plumber-sengkang')!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: 'https://homeaspect.com.sg/plumber-sengkang' },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: 'https://homeaspect.com.sg/plumber-sengkang',
  },
};

export default function PlumberSengkangPage() {
  return <LocationPageClient location={location} />;
}
