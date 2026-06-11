import type { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { ServiceGrid } from '@/components/shared/ServiceCard';

export const metadata: Metadata = {
  title: 'Plumbing Services Singapore - Full Range of Residential Plumbing',
  description:
    'Homeaspect provides comprehensive plumbing services in Singapore including toilet choke repair, pipe leak repair, water heater repair, sink unblocking, and more. WhatsApp +65 9677 3465.',
  alternates: { canonical: 'https://homeaspect.com.sg/services' },
  openGraph: {
    title: 'Plumbing Services Singapore - Homeaspect',
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
              Beyond our core services, Homeaspect also handles these plumbing needs.
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

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Need Plumbing Service? Contact Us Now"
            subtext="Whether it is an emergency or a scheduled repair, Homeaspect is ready to help. WhatsApp us for fast, professional plumbing service."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
