import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { ChevronRight } from 'lucide-react';
import { FAQS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ - Singapore Emergency Plumbing Questions Answered',
  description:
    'Frequently asked questions about Homeaspect emergency plumbing services in Singapore. Response times, pricing, HDB services, service areas, and more.',
  alternates: { canonical: 'https://homeaspect.com.sg/faq' },
  openGraph: {
    title: 'FAQ - Singapore Emergency Plumbing Questions | Homeaspect',
    description: 'Common questions about emergency plumbing in Singapore answered. Response times, pricing, HDB and condo services.',
    url: 'https://homeaspect.com.sg/faq',
  },
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Header />

      <PageHero
        title="Frequently Asked Questions"
        description="Quick answers to the most common questions about our emergency plumbing services in Singapore."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <FAQAccordion showAll />
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-foreground mb-4">Still Need Help?</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Emergency Plumbing', href: '/emergency-plumbing' },
              { label: 'Our Services', href: '/services' },
              { label: 'Why Choose Us', href: '/why-homeaspect' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Blog & Guides', href: '/blog' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground hover:border-primary/20 hover:shadow-sm transition-all duration-200 flex items-center gap-1.5"
              >
                {link.label} <ChevronRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Still Have Questions?"
            subtext="Contact Homeaspect directly via WhatsApp. We are happy to answer any questions about our plumbing services."
            variant="compact"
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
