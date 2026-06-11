import type { Metadata } from 'next';
import { getBlogArticle } from '@/lib/blogData';
import { BlogPageClient } from '@/components/shared/BlogPageClient';

const SLUG = 'hdb-plumbing-problems';
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

export default function HDBPlumbingProblemsPage() {
  return <BlogPageClient article={article} />;
}
