'use client';

import { ServiceDetailPage } from '@/components/shared/ServiceDetailPage';
import type { ServiceDetail } from '@/lib/serviceData';

export function ServiceDetailPageClient({ service }: { service: ServiceDetail }) {
  return <ServiceDetailPage service={service} />;
}
