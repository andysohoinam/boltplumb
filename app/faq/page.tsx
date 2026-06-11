import type { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { FAQS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ - Singapore Emergency Plumbing Questions Answered',
  description:
    'Frequently asked questions about Homeaspect emergency plumbing services in Singapore. Response times, pricing, service areas, and more.',
  alternates: { canonical: 'https://homeaspect.com.sg/faq' },
  openGraph: {
    title: 'FAQ - Singapore Emergency Plumbing Questions | Homeaspect',
    description: 'Common questions about emergency plumbing in Singapore answered.',
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

      <section className="py-16 sm:py-20 bg-secondary/50">
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
