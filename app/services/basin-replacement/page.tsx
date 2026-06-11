import type { Metadata } from 'next';
import { getServiceDetail, generateServiceMetadata } from '@/lib/serviceData';
import { ServiceDetailPageClient } from '@/components/shared/ServiceDetailPageClient';

export const metadata: Metadata = generateServiceMetadata('basin-replacement');

export default function BasinReplacementPage() {
  const service = getServiceDetail('basin-replacement')!;
  return <ServiceDetailPageClient service={service} />;
}
