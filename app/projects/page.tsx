import { Metadata } from 'next';
import RecentProjectsContent from '@/components/shared/RecentProjectsContent';

export const metadata: Metadata = {
  title: 'Projects | RedDot Emergency',
  description: 'Explore real case studies of emergency plumbing projects solved by RedDot Emergency in Singapore. See our proven track record and customer outcomes.',
  alternates: { canonical: 'https://reddotemergency.com/projects' },
  openGraph: {
    title: 'Projects | RedDot Emergency',
    description: 'Real plumbing case studies and solutions from RedDot Emergency. See how we handle emergency plumbing issues across Singapore.',
    url: 'https://reddotemergency.com/projects',
    type: 'website',
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

export default function ProjectsPage() {
  return <RecentProjectsContent />;
}
