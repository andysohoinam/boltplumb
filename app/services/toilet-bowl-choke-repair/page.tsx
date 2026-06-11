import type { Metadata } from 'next';
import { getServiceDetail, generateServiceMetadata } from '@/lib/serviceData';
import { ServiceDetailPageClient } from '@/components/shared/ServiceDetailPageClient';

export const metadata: Metadata = generateServiceMetadata('toilet-bowl-choke-repair');

export default function ToiletBowlChokeRepairPage() {
  const service = getServiceDetail('toilet-bowl-choke-repair')!;
  return <ServiceDetailPageClient service={service} />;
}
