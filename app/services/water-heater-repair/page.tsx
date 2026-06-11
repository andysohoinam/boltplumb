import type { Metadata } from 'next';
import { getServiceDetail, generateServiceMetadata } from '@/lib/serviceData';
import { ServiceDetailPageClient } from '@/components/shared/ServiceDetailPageClient';

export const metadata: Metadata = generateServiceMetadata('water-heater-repair');

export default function WaterHeaterRepairPage() {
  const service = getServiceDetail('water-heater-repair')!;
  return <ServiceDetailPageClient service={service} />;
}
