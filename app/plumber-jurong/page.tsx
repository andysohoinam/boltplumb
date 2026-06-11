import type { Metadata } from 'next';
import { getLocationDetail } from '@/lib/locationData';
import { LocationPageClient } from '@/components/shared/LocationPageClient';

const location = getLocationDetail('plumber-jurong')!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: 'https://homeaspect.com.sg/plumber-jurong' },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: 'https://homeaspect.com.sg/plumber-jurong',
  },
};

export default function PlumberJurongPage() {
  return <LocationPageClient location={location} />;
}
