import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { AlertTriangle, Clock, Phone, MessageCircle, Shield, BadgeCheck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK, EMERGENCY_SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Emergency Plumber Singapore - 24 Hour Fast Response',
  description:
    'RedDot Emergency provides 24-hour emergency plumbing services in Singapore. Fast response within 30-60 minutes for burst pipes, water leaks, toilet chokes, and more. WhatsApp +65 9677 3465 now.',
  alternates: { canonical: 'https://homeaspect.com.sg/emergency-plumbing' },
  openGraph: {
    title: 'Emergency Plumber Singapore - 24 Hour Fast Response | RedDot Emergency',
    description: '24-hour emergency plumbing in Singapore. 30-60 min response. WhatsApp now.',
    url: 'https://homeaspect.com.sg/emergency-plumbing',
  },
};

export default function EmergencyPlumbingPage() {
  return (
    <>
      <Header />

      <PageHero
        title="Emergency Plumber Singapore"
        description="Fast response plumbing emergencies across Singapore. Available 24 hours, 7 days a week. One WhatsApp message away."
        breadcrumbs={[{ label: 'Emergency Plumbing' }]}
      />

      {/* Emergency Banner */}
      <section className="bg-destructive/5 border-b border-destructive/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="emergency-pulse h-3 w-3 bg-destructive rounded-full" />
              <span className="font-semibold text-foreground">Plumbing emergency? Do not wait. Contact us now.</span>
            </div>
            <div className="flex gap-3">
              <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="whatsapp-gradient text-white border-0 gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Now
                </Button>
              </a>
              <a href="tel:+6596773465">
                <Button size="sm" variant="outline" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Counts as Emergency with Photos */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Is a Plumbing Emergency?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A plumbing emergency is any situation that requires immediate professional attention to prevent property damage, health hazards, or major disruption to your daily life. If you are unsure whether your issue qualifies as an emergency, it is always safer to contact us.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Burst or Leaking Pipes', desc: 'Active water leaks that can cause structural damage, mould growth, or flooding' },
                  { title: 'Severe Toilet Chokes', desc: 'Complete blockage that renders the toilet unusable, especially in single-toilet homes' },
                  { title: 'Water Heater Failure', desc: 'No hot water, leaking units, or electrical issues with your water heater' },
                  { title: 'Sink or Drain Overflow', desc: 'Water backing up into sinks, showers, or floor drains' },
                  { title: 'Gas Leak from Pipes', desc: 'Any suspected gas leak near plumbing fixtures — contact us and ventilate the area' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="h-10 w-10 bg-destructive/10 rounded-lg flex items-center justify-center shrink-0">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-0.5">{title}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/15206136/pexels-photo-15206136/free-photo-of-leaking-pipe-fixed-with-plastic.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Burst pipe water leak emergency in Singapore home"
                  title="Emergency pipe leak requiring urgent plumber in Singapore"
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-destructive/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    <AlertTriangle className="h-3 w-3" />
                    Emergency
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.pexels.com/photos/4239074/pexels-photo-4239074.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Blocked toilet emergency in Singapore bathroom"
                    title="Emergency toilet choke repair in Singapore"
                    width={400}
                    height={250}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                    sizes="25vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.pexels.com/photos/34295406/pexels-photo-34295406.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Dripping bathroom faucet indicating water heater failure"
                    title="Emergency water heater failure - no hot water"
                    width={400}
                    height={250}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                    sizes="25vw"
                  />
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">Why Fast Response Matters</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Water damage can begin within minutes. A small pipe leak can release hundreds of litres of water per hour, damaging walls, floors, and personal belongings. Mould can begin to grow within 24-48 hours.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our rapid response minimises damage and reduces repair costs. The sooner we arrive, the sooner we stop the water and start the fix.
                </p>
              </div>

              <div className="hero-gradient rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Average Response Time</span>
                </div>
                <div className="text-4xl font-bold mb-1">30-60 min</div>
                <p className="text-white/70 text-sm">Across Singapore, any time of day or night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Cards with Photos */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Emergency Service Capabilities</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our emergency team handles every type of urgent plumbing issue across Singapore.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMERGENCY_SERVICES.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    title={service.title + ' - Emergency Plumbing Singapore'}
                    width={600}
                    height={350}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-destructive/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      <AlertTriangle className="h-3 w-3" />
                      24/7
                    </span>
                  </div>
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-semibold">{service.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">How Emergency Service Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Getting emergency plumbing help is simple. Three steps and we are on our way.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Contact Us',
                description: 'WhatsApp or call us with your plumbing issue. Describe the problem and your location in Singapore.',
                icon: MessageCircle,
              },
              {
                step: '2',
                title: 'Get a Quick Quote',
                description: 'We assess the situation and provide an upfront cost estimate before dispatching a technician.',
                icon: Shield,
              },
              {
                step: '3',
                title: 'Problem Solved',
                description: 'Our technician arrives fast, fixes the issue professionally, and ensures everything works before leaving.',
                icon: BadgeCheck,
              },
            ].map(({ step, title, description, icon: Icon }) => (
              <div key={step} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-colors duration-300">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="inline-flex items-center justify-center h-10 w-10 bg-primary text-white rounded-full text-lg font-bold mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Features */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/8186482/pexels-photo-8186482.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Singapore HDB residential buildings where RedDot Emergency provides emergency plumbing"
                title="RedDot Emergency emergency plumber serving Singapore HDB and condo areas"
                width={800}
                height={500}
                className="w-full h-80 object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Emergency Response Guarantee</h2>
              <div className="space-y-4">
                {[
                  { title: 'Response within 30-60 minutes', desc: 'Our technicians are strategically positioned across Singapore for rapid deployment.' },
                  { title: 'Available weekends and public holidays', desc: 'Plumbing emergencies do not follow business hours. Neither do we.' },
                  { title: 'All emergency plumbing issues handled', desc: 'From burst pipes to severe chokes, we come prepared for every situation.' },
                  { title: 'HDB and condo specialists', desc: 'We know the specific requirements for all Singapore property types.' },
                  { title: 'Fully equipped service vehicles', desc: 'Our technicians arrive with the tools and parts needed for immediate repairs.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-0.5">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            variant="emergency"
            headline="Plumbing Emergency? We Are On Our Way."
            subtext="Do not wait for the problem to get worse. WhatsApp RedDot Emergency now for fast, professional emergency plumbing anywhere in Singapore."
          />
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-foreground mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Our Services', href: '/services' },
              { label: 'Why Choose RedDot Emergency', href: '/why-homeaspect' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Blog & Guides', href: '/blog' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground hover:border-primary/20 hover:shadow-sm transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
