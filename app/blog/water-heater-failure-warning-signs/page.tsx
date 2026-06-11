import type { Metadata } from 'next';
import { getBlogArticle } from '@/lib/blogData';
import { BlogPageClient } from '@/components/shared/BlogPageClient';

const SLUG = 'water-heater-failure-warning-signs';
const article = getBlogArticle(SLUG)!;

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.metaDescription,
  alternates: { canonical: `https://homeaspect.com.sg/blog/${SLUG}` },
  openGraph: {
    title: article.metaTitle,
    description: article.metaDescription,
    url: `https://homeaspect.com.sg/blog/${SLUG}`,
    type: 'article',
  },
};

export default function WaterHeaterFailureWarningSigsPage() {
  return <BlogPageClient article={article} />;
}
