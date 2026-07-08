import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { MessageCircle, Phone, Clock, MapPin, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | RedDot Emergency',
  description:
    'Contact RedDot Emergency for 24-hour emergency plumbing services in Singapore. WhatsApp +65 8294 1906 or call for fast response.',
  alternates: { canonical: 'https://reddotemergency.com/contact' },
  openGraph: {
    title: 'Contact | RedDot Emergency',
    description: 'WhatsApp or call RedDot Emergency for 24-hour emergency plumbing. Fast response across Singapore.',
    url: 'https://reddotemergency.com/contact',
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

export default function ContactPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Contact RedDot Emergency"
        description="Get in touch for fast, reliable plumbing service anywhere in Singapore. We are available 24/7."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact Options */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_FULL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-14 w-14 whatsapp-gradient rounded-xl flex items-center justify-center mb-5">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">WhatsApp</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The fastest way to reach us. Send a message with your plumbing issue and location, and we will respond promptly.
              </p>
              <div className="text-accent font-semibold text-lg">+65 8294 1906</div>
            </a>

            {/* Phone */}
            <a
              href="tel:+6582941906"
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Call Us</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                For urgent emergencies, calling gets you immediate assistance. Available 24 hours, 7 days a week.
              </p>
              <div className="text-primary font-semibold text-lg">+65 8294 1906</div>
            </a>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <Clock className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Operating Hours</h3>
              <p className="text-sm text-muted-foreground">24 hours, 7 days a week<br />Including public holidays</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <MapPin className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
              <p className="text-sm text-muted-foreground">All areas in Singapore<br />HDB, condos, and private estates</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <MessageCircle className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
              <p className="text-sm text-muted-foreground">30-60 minutes average<br />Fast dispatch across Singapore</p>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real feedback from homeowners across Singapore who trusted RedDot Emergency with their plumbing emergencies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'Ariel T.',
                area: 'Tampines',
                rating: 5,
                text: 'Called RedDot Emergency at 11pm when my toilet choked completely. They arrived within 45 minutes and cleared the blockage on the spot. Very professional and no hidden charges. Highly recommend for any HDB plumbing issue.',
              },
              {
                name: 'Maruf K.',
                area: 'Jurong',
                rating: 5,
                text: 'Water heater stopped working on a Sunday morning. WhatsApp them and got a reply in minutes. Technician came the same day, diagnosed the fault, and replaced the unit by afternoon. Fair pricing too.',
              },
              {
                name: 'Catherine L.',
                area: 'Bedok',
                rating: 5,
                text: 'Had a persistent kitchen sink choke that DIY methods could not fix. RedDot Emergency cleared it in under 30 minutes. The plumber also gave me tips on preventing future clogs. Honest and knowledgeable.',
              },
              {
                name: 'Ivan T.',
                area: 'Woodlands',
                rating: 5,
                text: 'Pipe burst in my bathroom at 2am. I was panicking but RedDot Emergency picked up my call immediately and dispatched someone within the hour. They stopped the leak and repaired the pipe properly. Lifesavers.',
              },
              {
                name: 'David W.',
                area: 'Sengkang',
                rating: 5,
                text: 'Engaged RedDot Emergency to replace my bathroom basin and tap. Clean installation, no mess left behind, and the pricing was exactly as quoted. Will use them again for any plumbing work.',
              },
              {
                name: 'Esther C.',
                area: 'Clementi',
                rating: 5,
                text: 'Floor trap in my bathroom kept causing water to pool. Previous plumber could not solve it permanently but RedDot Emergency did a thorough deep clearing and the drain has been flowing perfectly since. Very impressed.',
              },
              {
                name: 'Jason C.',
                area: 'Ang Mo Kio',
                rating: 5,
                text: 'My kitchen tap was dripping for weeks and the water bill was creeping up. RedDot Emergency replaced the cartridge in 20 minutes. Quick, affordable, and the plumber was very courteous throughout.',
              },
              {
                name: 'Jimmy C.',
                area: 'Punggol',
                rating: 5,
                text: 'Excellent service from start to finish. Got a quote via WhatsApp before the technician came, so there were no surprises. They fixed a leaking pipe under my sink neatly and even helped clean up afterwards.',
              },
              {
                name: 'Kian C.',
                area: 'Hougang',
                rating: 5,
                text: 'Second time using RedDot Emergency and they remain consistent. Fast response, transparent pricing, and quality work. This time it was a water heater replacement in my HDB flat. Done within 2 hours with proper safety checks.',
              },
            ].map((review) => (
              <div key={review.name} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-primary/20 mb-2" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.area}</div>
                  </div>
                  <MapPin className="h-4 w-4 text-primary/40" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Form Alternative */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Satisfied Customers</h2>
            <p className="text-muted-foreground mb-6">
              Click the button below to open WhatsApp with a pre-filled message. Tell us about your plumbing issue and we will get back to you right away.
            </p>
            <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="whatsapp-gradient text-white border-0 gap-2 px-10 cta-glow hover:opacity-90">
                <MessageCircle className="h-5 w-5" />
                WhatsApp RedDot Emergency Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            variant="emergency"
            headline="Plumbing Problem? Let Us Help."
            subtext="One WhatsApp message or phone call is all it takes. RedDot Emergency is standing by 24/7."
          />
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-foreground mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Emergency Plumbing', href: '/emergency' },
              { label: 'Our Services', href: '/services' },
              { label: 'Why Choose RedDot Emergency', href: '/why-homeaspect' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Blog & Guides', href: '/blog' },
            ].map((link) => (
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

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
