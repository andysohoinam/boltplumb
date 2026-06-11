import type { Metadata } from 'next';
import { getServiceDetail, generateServiceMetadata } from '@/lib/serviceData';
import { ServiceDetailPageClient } from '@/components/shared/ServiceDetailPageClient';

export const metadata: Metadata = generateServiceMetadata('pipe-leak-repair');

export default function PipeLeakRepairPage() {
  const service = getServiceDetail('pipe-leak-repair')!;
  return <ServiceDetailPageClient service={service} />;
}
