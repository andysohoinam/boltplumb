'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { BadgeCheck, CheckCircle, MessageCircle, AlertTriangle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';
import type { ServiceDetail } from '@/lib/serviceData';

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'RedDot Emergency',
      telephone: '+6596773465',
      areaServed: { '@type': 'Country', name: 'Singapore' },
    },
    areaServed: { '@type': 'Country', name: 'Singapore' },
    serviceType: 'Emergency Plumbing',
  };

  return (
    <>
      <Header />

      <PageHero
        title={service.title}
        description={service.heroDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Quick CTA bar */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">Need {service.title.toLowerCase()}? We respond fast.</span>
          <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="whatsapp-gradient text-white border-0 gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </Button>
          </a>
        </div>
      </div>

      {/* Overview with Image */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{service.overview}</p>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  title={service.title + ' - RedDot Emergency Singapore'}
                  width={800}
                  height={500}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="hero-gradient rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-3">Quick Contact</h3>
                <p className="text-white/70 text-sm mb-4">Get fast {service.title.toLowerCase()} service anywhere in Singapore.</p>
                <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer" className="block mb-3">
                  <Button className="w-full whatsapp-gradient text-white border-0 gap-2 cta-glow hover:opacity-90">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="tel:+6596773465" className="block">
                  <Button variant="outline" className="w-full gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Call +65 9677 3465
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues with Photos */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Common Issues We Handle</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.commonIssues.map(({ title, description }, index) => (
              <div key={title} className="bg-card border border-border rounded-xl overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.issueImages[index]}
                    alt={`${title} - ${service.title} Singapore`}
                    title={title + ' - RedDot Emergency Singapore'}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <h3 className="absolute bottom-3 left-3 text-white font-semibold flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-white/80" />
                    {title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Common Causes of {service.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.commonCauses.map(({ title, description }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Warning Signs to Watch For</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.warningSigns.map(({ title, description }) => (
              <div key={title} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5">
                <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-content CTA */}
      <div className="bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Experiencing {service.title.toLowerCase()} issues?</h3>
            <p className="text-sm text-muted-foreground">Do not wait for the problem to get worse. Contact RedDot Emergency now.</p>
          </div>
          <div className="flex gap-3">
            <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="whatsapp-gradient text-white border-0 gap-2 cta-glow hover:opacity-90">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </Button>
            </a>
            <a href="tel:+6596773465">
              <Button variant="outline" className="gap-2">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Risks of Delaying Repair */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-destructive/5 border border-destructive/10 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Risks of Delaying {service.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{service.delayRisks}</p>
          </div>
        </div>
      </section>

      {/* Our Process with Photos */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Repair Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map(({ step, description }, index) => (
              <div key={step} className="relative group">
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.processImages[index]}
                    alt={`Step ${index + 1}: ${step} - ${service.title}`}
                    title={`Step ${index + 1}: ${step}`}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors" />
                  <div className="absolute top-3 left-3 h-9 w-9 bg-white rounded-full flex items-center justify-center text-primary font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose RedDot Emergency for {service.title}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.whyUs.map(({ title, description }) => (
              <div key={title} className="flex gap-4 items-start">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HDB Note */}
      {service.hdbNote && (
        <section className="py-10 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">HDB Plumbing Compliance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.hdbNote}</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map(({ question, answer }) => (
              <div key={question} className="border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">{question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-foreground mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {service.internalLinks.map((link) => (
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

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            variant="emergency"
            headline={`Need ${service.title}?`}
            subtext={`Contact RedDot Emergency now for fast, professional ${service.title.toLowerCase()} service anywhere in Singapore. We respond within 30-60 minutes.`}
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
