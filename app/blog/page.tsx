import type { Metadata } from 'next';
import { blogArticles } from '@/lib/blogData';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | RedDot Emergency',
  description: 'Expert plumbing tips, guides, and maintenance advice for Singapore homeowners. Learn about pipe leaks, toilet chokes, water heaters, and HDB plumbing.',
  alternates: { canonical: 'https://reddotemergency.com/blog' },
  openGraph: {
    title: 'Blog | RedDot Emergency',
    description: 'Expert plumbing advice for Singapore homeowners. Tips on pipe leaks, toilet chokes, water heaters, and more.',
    url: 'https://reddotemergency.com/blog',
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

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Plumbing Tips & Guides"
        description="Expert plumbing tips, guides, and maintenance advice for Singapore homeowners. Stay informed and prevent plumbing emergencies."
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(blogArticles).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {article.heroDescription}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {new Date(article.publishedDate).toLocaleDateString('en-SG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Need Professional Plumbing Help?"
            subtext="Our blog provides helpful tips, but nothing beats professional service. Contact RedDot Emergency for fast, reliable plumbing assistance."
          />
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
