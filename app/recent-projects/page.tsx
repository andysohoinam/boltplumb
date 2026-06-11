import { Metadata } from 'next';
import RecentProjectsContent from '@/components/shared/RecentProjectsContent';

export const metadata: Metadata = {
  title: 'Recent Emergency Plumbing Projects Singapore | RedDot Emergency',
  description: 'Explore real case studies of emergency plumbing projects solved by RedDot Emergency in Singapore. See our proven track record and customer outcomes.',
  alternates: { canonical: 'https://homeaspect.com.sg/recent-projects' },
  openGraph: {
    title: 'Recent Emergency Plumbing Projects Singapore | RedDot Emergency',
    description: 'Real plumbing case studies and solutions from RedDot Emergency. See how we handle emergency plumbing issues across Singapore.',
    url: 'https://homeaspect.com.sg/recent-projects',
    type: 'website',
    images: [
      {
        url: 'https://homeaspect.com.sg/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RedDot Emergency Recent Projects',
      },
    ],
  },
};

export default function RecentProjectsPage() {
  return <RecentProjectsContent />;
}
