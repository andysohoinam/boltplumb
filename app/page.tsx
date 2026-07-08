import Image from 'next/image';
import type { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { CTASection } from '@/components/shared/CTASection';
import { ServiceGrid } from '@/components/shared/ServiceCard';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { MessageCircle, Phone, Shield, Clock, BadgeCheck, ChevronRight, AlertTriangle, Star, MapPin, CheckCircle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WHATSAPP_FULL_LINK, SERVICE_AREAS, TRUST_ITEMS, EMERGENCY_SERVICES, LOCATION_SLUGS } from '@/lib/constants';
import { testimonials } from '@/lib/trustData';

export const metadata: Metadata = {
  title: 'Home | RedDot Emergency',
  description:
    'RedDot Emergency provides 24-hour emergency plumbing services in Singapore. Fast response for burst pipes, toilet chokes, water leaks, and more. WhatsApp +65 8294 1906 now.',
  alternates: {
    canonical: 'https://homeaspect.com.sg',
  },
  openGraph: {
    title: 'Home | RedDot Emergency',
    description:
      '24-hour emergency plumbing services in Singapore. Fast response for burst pipes, toilet chokes, water leaks. WhatsApp +65 8294 1906.',
    url: 'https://homeaspect.com.sg',
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

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMi0ydi0ySDI2djJoOHptLTItMnYtMmgtNHYyaDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <div className="emergency-pulse inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="h-2 w-2 bg-red-400 rounded-full" />
                24/7 EMERGENCY PLUMBER IN SINGAPORE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
                Fast Emergency Plumbing,{" "}
                <span className="text-white/80">When You Need It Most</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
                Burst pipe? Toilet choke? Water leak? RedDot Emergency responds fast across Singapore. Experienced technicians, transparent pricing, no hidden fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="whatsapp-gradient text-white border-0 gap-2 text-lg px-8 py-6 cta-glow hover:opacity-90 w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Now
                  </Button>
                </a>
                <a href="tel:+6582941906">
                  <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto">
                    <Phone className="h-5 w-5" />
                    Call +65 8294 1906
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> 30-60 min response
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4" /> Licensed &amp; experienced
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/15206136/pexels-photo-15206136/free-photo-of-leaking-pipe-fixed-with-plastic.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Water leaking from pipe in Singapore home requiring emergency plumber"
                  title="Emergency pipe leak in Singapore home - RedDot Emergency responds fast"
                  width={800}
                  height={600}
                  className="w-full h-[420px] object-cover"
                  priority
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                    <div className="h-10 w-10 whatsapp-gradient rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Available 24/7</p>
                      <p className="text-xs text-muted-foreground">Fast response across Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block - E-E-A-T Signals */}
      <section className="py-12 sm:py-16 border-b border-border bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              { icon: MapPin, title: 'Singapore-Wide Coverage', desc: 'All HDB estates, condos, and landed properties across every district' },
              { icon: Clock, title: 'Fast Emergency Response', desc: '30-60 minute average response time, 24 hours a day, 7 days a week' },
              { icon: Wrench, title: 'Residential Specialists', desc: 'HDB and condo plumbing experts with years of Singapore-specific experience' },
              { icon: Shield, title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden fees. Know the cost before work begins' },
              { icon: MessageCircle, title: 'WhatsApp Support', desc: 'Reach us instantly via WhatsApp at +65 8294 1906 for fast assistance' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Our Plumbing Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive plumbing solutions for HDB flats, condos, and private residences across Singapore.
            </p>
          </div>
          <ServiceGrid />
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg" className="gap-2">
                View All Services <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Section with Photos */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <AlertTriangle className="h-3.5 w-3.5" />
              PLUMBING EMERGENCY?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Don&apos;t Wait Until It Gets Worse
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A small leak can cause significant water damage within hours. Our emergency plumbing team is on standby 24/7.
            </p>
          </div>

          {/* Emergency Service Cards with Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                      Emergency
                    </span>
                  </div>
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-semibold text-base">
                    {service.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="whatsapp-gradient text-white border-0 gap-2 cta-glow hover:opacity-90">
                <MessageCircle className="h-5 w-5" />
                Get Emergency Help Now
              </Button>
            </a>
            <a href="tel:+6582941906">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-5 w-5" />
                Call +65 8294 1906
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trusted Across Singapore */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Trusted Across Singapore
              </h2>
              <p className="text-muted-foreground max-w-xl mb-6">
                RedDot Emergency is the plumbing service Singapore homeowners rely on. From mature HDB estates in the east to newer developments in the north, our technicians are locally positioned for rapid response. We understand the plumbing challenges unique to each neighbourhood — aging pipes in older towns, modern system complexity in new BTO estates, and condo-specific requirements islandwide.
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => {
                  const slug = `plumber-${area.toLowerCase().replace(/\s+/g, '-')}`;
                  const hasPage = ['tampines', 'bedok', 'jurong', 'woodlands', 'sengkang', 'punggol', 'yishun', 'hougang', 'ang-mo-kio', 'bukit-batok'].includes(area.toLowerCase().replace(/\s+/g, '-'));
                  return hasPage ? (
                    <Link
                      key={area}
                      href={`/${slug}`}
                      className="bg-secondary text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Plumber {area}
                    </Link>
                  ) : (
                    <span
                      key={area}
                      className="bg-secondary text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      Plumber {area}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/8186482/pexels-photo-8186482.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Singapore HDB residential buildings where RedDot Emergency provides plumbing services"
                title="RedDot Emergency serves all Singapore HDB and condo areas"
                width={800}
                height={500}
                className="w-full h-80 object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm font-semibold text-foreground">All HDB &amp; Condo Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common plumbing questions.
            </p>
          </div>
          <FAQAccordion />
          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" className="gap-2">
                View All FAQs <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real feedback from Singapore homeowners who trusted RedDot Emergency with their plumbing emergencies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((review) => (
              <div key={review.name + review.estate} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.estate} &middot; {review.service}</div>
                  </div>
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/why-homeaspect">
              <Button variant="outline" className="gap-2">
                See Why Customers Choose Us <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Ready to Fix Your Plumbing Issue?"
            subtext="Contact RedDot Emergency today for fast, reliable plumbing service anywhere in Singapore. One message is all it takes."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
