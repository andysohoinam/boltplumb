import type { Metadata } from 'next';
import { WhyHomeaspectContent } from '@/components/shared/WhyHomeaspectContent';

export const metadata: Metadata = {
  title: 'Why Choose Homeaspect - Trusted Singapore Emergency Plumber',
  description:
    'Discover why Homeaspect is Singapore\'s most trusted emergency plumbing service. 24/7 availability, transparent pricing, experienced team, and exceptional customer satisfaction.',
  alternates: { canonical: 'https://homeaspect.com.sg/why-homeaspect' },
  openGraph: {
    title: 'Why Choose Homeaspect - Trusted Singapore Emergency Plumber',
    description: 'Fastest response time, transparent pricing, and trusted by thousands of Singapore homeowners.',
    url: 'https://homeaspect.com.sg/why-homeaspect',
  },
};

export default function WhyHomeaspectPage() {
  return <WhyHomeaspectContent />;
}
