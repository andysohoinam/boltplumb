'use client';

import { BlogPage } from '@/components/shared/BlogPage';
import type { BlogArticle } from '@/lib/blogData';

export function BlogPageClient({ article }: { article: BlogArticle }) {
  return <BlogPage article={article} />;
}
