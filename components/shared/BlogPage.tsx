'use client';

import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { MessageCircle, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';
import type { BlogArticle } from '@/lib/blogData';

interface BlogPageProps {
  article: BlogArticle;
}

export function BlogPage({ article }: BlogPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    author: { '@type': 'Organization', name: 'RedDot Emergency' },
    publisher: { '@type': 'Organization', name: 'RedDot Emergency', url: 'https://reddotemergency.com' },
  };

  return (
    <>
      <Header />

      <PageHero
        title={article.title}
        description={article.heroDescription}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: article.title },
        ]}
      />

      {/* Mid-content CTA */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">Have a plumbing issue? We respond fast across Singapore.</span>
          <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="whatsapp-gradient text-white border-0 gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </Button>
          </a>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(article.publishedDate).toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {article.category}
            </span>
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => (
              <section key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          {/* Mid-article CTA */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 my-12 text-center">
            <h3 className="font-semibold text-foreground mb-2">Need Professional Plumbing Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">RedDot Emergency provides 24/7 emergency plumbing services across Singapore. WhatsApp us for fast assistance.</p>
            <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="whatsapp-gradient text-white border-0 gap-2 cta-glow hover:opacity-90">
                <MessageCircle className="h-4 w-4" />
                WhatsApp RedDot Emergency
              </Button>
            </a>
          </div>

          {/* FAQs */}
          {article.faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {article.faqs.map(({ question, answer }) => (
                  <div key={question} className="border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">{question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Internal Links */}
          <div className="bg-secondary/50 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3">Related Pages</h3>
            <div className="flex flex-wrap gap-3">
              {article.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground hover:border-primary/20 hover:shadow-sm transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            variant="emergency"
            headline="Plumbing Problem? We Can Help."
            subtext="Contact RedDot Emergency now for fast, professional plumbing service anywhere in Singapore. Available 24/7."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
