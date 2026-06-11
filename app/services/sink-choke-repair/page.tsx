import type { Metadata } from 'next';
import { getServiceDetail, generateServiceMetadata } from '@/lib/serviceData';
import { ServiceDetailPageClient } from '@/components/shared/ServiceDetailPageClient';

export const metadata: Metadata = generateServiceMetadata('sink-choke-repair');

export default function SinkChokeRepairPage() {
  const service = getServiceDetail('sink-choke-repair')!;
  return <ServiceDetailPageClient service={service} />;
}
