import { PlumbingAdviceContent } from '@/components/shared/PlumbingAdviceContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumbing Advice | RedDot Emergency',
  description: 'Expert plumbing tips and emergency guides from RedDot Emergency for Singapore homeowners. Learn how to identify leaks, prevent blockages, maintain water heaters, and handle plumbing emergencies.',
  alternates: { canonical: 'https://homeaspect.com.sg/plumbing-advice' },
  openGraph: {
    title: 'Plumbing Advice | RedDot Emergency',
    description: 'Expert plumbing tips and emergency guides from RedDot Emergency for Singapore homeowners. Learn how to identify leaks, prevent blockages, maintain water heaters, and handle plumbing emergencies.',
    url: 'https://homeaspect.com.sg/plumbing-advice',
    type: 'website',
    siteName: 'RedDot Emergency',
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

export default function PlumbingAdvicePage() {
  return <PlumbingAdviceContent />;
}
