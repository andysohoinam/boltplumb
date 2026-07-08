import type { Metadata } from 'next';
import { WhyHomeaspectContent } from '@/components/shared/WhyHomeaspectContent';

export const metadata: Metadata = {
  title: 'Why Choose Us | RedDot Emergency',
  description:
    'Discover why RedDot Emergency is Singapore&apos;s most trusted emergency plumbing service. 24/7 availability, transparent pricing, experienced team, and exceptional customer satisfaction.',
  alternates: { canonical: 'https://homeaspect.com.sg/why-homeaspect' },
  openGraph: {
    title: 'Why Choose Us | RedDot Emergency',
    description: 'Fastest response time, transparent pricing, and trusted by thousands of Singapore homeowners.',
    url: 'https://homeaspect.com.sg/why-homeaspect',
    images: [
      {
        url: '/reddot_emergency_plumbing_logo.jfif',
        width: 200,
        height: 200,
        alt: 'RedDot Emergency Plumbing Logo',
      },
    ],
  },
};

export default function WhyRedDotEmergencyPage() {
  return <WhyHomeaspectContent />;
}
