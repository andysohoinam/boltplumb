import type { Metadata } from 'next';
import { getLocationDetail } from '@/lib/locationData';
import { LocationPageClient } from '@/components/shared/LocationPageClient';

const location = getLocationDetail('plumber-bukit-batok')!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: 'https://homeaspect.com.sg/plumber-bukit-batok' },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: 'https://homeaspect.com.sg/plumber-bukit-batok',
  },
};

export default function PlumberBukitBatokPage() {
  return <LocationPageClient location={location} />;
}
