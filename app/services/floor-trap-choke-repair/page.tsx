import type { Metadata } from 'next';
import { getServiceDetail, generateServiceMetadata } from '@/lib/serviceData';
import { ServiceDetailPageClient } from '@/components/shared/ServiceDetailPageClient';

export const metadata: Metadata = generateServiceMetadata('floor-trap-choke-repair');

export default function FloorTrapChokeRepairPage() {
  const service = getServiceDetail('floor-trap-choke-repair')!;
  return <ServiceDetailPageClient service={service} />;
}
