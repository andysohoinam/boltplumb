'use client';

import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { CheckCircle, MessageCircle, MapPin, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';
import type { LocationDetail } from '@/lib/locationData';

interface LocationPageProps {
  location: LocationDetail;
}

export function LocationPage({ location }: LocationPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <Header />

      <PageHero
        title={`Plumber ${location.area} - 24 Hour Emergency Plumbing`}
        description={location.heroDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: `Plumber ${location.area}` },
        ]}
      />

      {/* Quick CTA bar */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">Need a plumber in {location.area}? We respond within 30-60 minutes.</span>
          <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="whatsapp-gradient text-white border-0 gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </Button>
          </a>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Emergency Plumber in {location.area}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{location.overview}</p>
            </div>
            <div className="space-y-6">
              <div className="hero-gradient rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-3">Quick Contact</h3>
                <p className="text-white/70 text-sm mb-4">Fast plumbing service in {location.area} and nearby areas.</p>
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
              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nearby Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyAreas.map((area) => (
                    <span key={area} className="bg-card text-foreground text-sm px-3 py-1.5 rounded-lg border border-border">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Plumbing Issues */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Common Plumbing Issues in {location.area}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {location.commonPlumbingIssues.map(({ title, description }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Coverage */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">24/7 Emergency Plumbing in {location.area}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{location.emergencyInfo}</p>
              <div className="space-y-3">
                {[
                  'Response within 30-60 minutes',
                  'Available weekends and public holidays',
                  'All emergency plumbing issues handled',
                  'HDB and condo specialists',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-center">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-gradient rounded-2xl p-8 text-white text-center">
              <div className="emergency-pulse inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <span className="h-2 w-2 bg-red-400 rounded-full" />
                24/7 EMERGENCY
              </div>
              <h3 className="text-2xl font-bold mb-3">Plumbing Emergency in {location.area}?</h3>
              <p className="text-white/70 text-sm mb-6">Do not wait. Contact us now for fast emergency response.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="whatsapp-gradient text-white border-0 gap-2 cta-glow hover:opacity-90">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Now
                  </Button>
                </a>
                <a href="tel:+6596773465">
                  <Button variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Plumbing Services in {location.area}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: 'toilet-bowl-choke-repair', name: 'Toilet Bowl Choke Repair' },
              { slug: 'pipe-leak-repair', name: 'Pipe Leak Repair' },
              { slug: 'water-heater-repair', name: 'Water Heater Repair' },
              { slug: 'sink-choke-repair', name: 'Sink Choke Repair' },
              { slug: 'floor-trap-choke-repair', name: 'Floor Trap Choke Clearing' },
              { slug: 'tap-repair', name: 'Tap Repair & Replacement' },
              { slug: 'basin-replacement', name: 'Basin Replacement' },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <span className="font-semibold text-foreground text-sm">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Plumbing FAQs - {location.area}
          </h2>
          <div className="space-y-6">
            {location.faqs.map(({ question, answer }) => (
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
            {location.internalLinks.map((link) => (
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
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            variant="emergency"
            headline={`Need a Plumber in ${location.area}?`}
            subtext={`Homeaspect provides fast, professional plumbing service in ${location.area} and nearby areas. Contact us now for same-day assistance.`}
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
