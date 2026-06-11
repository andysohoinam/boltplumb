'use client';

import { LocationPage } from '@/components/shared/LocationPage';
import type { LocationDetail } from '@/lib/locationData';

export function LocationPageClient({ location }: { location: LocationDetail }) {
  return <LocationPage location={location} />;
}
