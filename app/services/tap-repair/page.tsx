import type { Metadata } from 'next';
import { getServiceDetail, generateServiceMetadata } from '@/lib/serviceData';
import { ServiceDetailPageClient } from '@/components/shared/ServiceDetailPageClient';

export const metadata: Metadata = generateServiceMetadata('tap-repair');

export default function TapRepairPage() {
  const service = getServiceDetail('tap-repair')!;
  return <ServiceDetailPageClient service={service} />;
}
