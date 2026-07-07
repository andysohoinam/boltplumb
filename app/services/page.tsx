import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { ServiceGrid } from '@/components/shared/ServiceCard';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK, LOCATION_SLUGS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Plumbing Services Singapore - Full Range of Residential Plumbing',
  description:
    'RedDot Emergency provides comprehensive plumbing services in Singapore including toilet choke repair, pipe leak repair, water heater repair, sink unblocking, and more. WhatsApp +65 8294 1906.',
  alternates: { canonical: 'https://homeaspect.com.sg/services' },
  openGraph: {
    title: 'Plumbing Services Singapore - RedDot Emergency',
    description: 'Comprehensive residential plumbing services across Singapore. Toilet chokes, pipe leaks, water heaters, and more.',
    url: 'https://homeaspect.com.sg/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Our Plumbing Services"
        description="Comprehensive plumbing solutions for HDB flats, condos, and private residences across Singapore. Every service backed by transparent pricing and experienced technicians."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Additional Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Beyond our core services, RedDot Emergency also handles these plumbing needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Water Pipe Replacement', desc: 'Full replacement of old or damaged water supply pipes with approved materials.' },
              { title: 'HDB Plumbing Services', desc: 'HDB-compliant plumbing repairs, replacements, and installations.' },
              { title: 'Condo Plumbing Services', desc: 'Plumbing services for private condominium units, including management-approved works.' },
              { title: 'Running Toilet Repair', desc: 'Fix toilets that run continuously, wasting water and increasing bills.' },
              { title: 'Shower Fixture Repair', desc: 'Repair or replacement of shower heads, mixers, and diverter valves.' },
              { title: 'General Plumbing Maintenance', desc: 'Preventative plumbing checks and maintenance to avoid future emergencies.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Plumbers Across Singapore</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Local plumbing experts in your neighbourhood. Fast response wherever you are.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LOCATION_SLUGS.map((slug) => {
              const areaName = slug.replace('plumber-', '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md hover:border-primary/20 transition-all duration-200"
                >
                  <span className="font-medium text-foreground text-sm">Plumber {areaName}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Not sure which service you need? WhatsApp us and we will advise.</span>
          <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="whatsapp-gradient text-white border-0 gap-2 cta-glow hover:opacity-90">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>

      {/* Helpful Links */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-foreground mb-4">Helpful Resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Emergency Plumbing', href: '/emergency' },
              { label: 'Why Choose RedDot Emergency', href: '/why-homeaspect' },
              { label: 'FAQ', href: '/faq' },
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
            headline="Need Plumbing Service? Contact Us Now"
            subtext="Whether it is an emergency or a scheduled repair, RedDot Emergency is ready to help. WhatsApp us for fast, professional plumbing service."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
