import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { BadgeCheck, CheckCircle, Zap, Shield, Wrench, Clock, Award, Heart } from 'lucide-react';
import { ABOUT_IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About RedDot Emergency - Trusted Singapore Emergency Plumber',
  description:
    'Learn about RedDot Emergency, Singapore\'s trusted 24-hour emergency plumbing service. Experienced technicians, transparent pricing, and fast response across all areas.',
  alternates: { canonical: 'https://homeaspect.com.sg/about' },
  openGraph: {
    title: 'About RedDot Emergency - Trusted Singapore Emergency Plumber',
    description: 'Singapore\'s trusted 24-hour emergency plumbing service. Experienced technicians, transparent pricing.',
    url: 'https://homeaspect.com.sg/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHero
        title="About RedDot Emergency"
        description="Singapore's trusted emergency plumbing partner. Reliable, fast, and committed to solving your plumbing problems."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Our Story with Photo */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Built on Reliability and Trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  RedDot Emergency was founded with a straightforward mission: give Singapore homeowners access to plumbing help that actually shows up on time, does the job right, and charges fairly.
                </p>
                <p>
                  We understand the stress of a plumbing emergency. Water damage can escalate quickly, and waiting hours for a plumber who never arrives only makes things worse. That is why we built our service around speed and accountability.
                </p>
                <p>
                  Every technician on our team is experienced, equipped, and committed to solving your issue efficiently. Whether it is a burst pipe at 2 AM or a stubborn toilet choke on a Sunday afternoon, RedDot Emergency is ready to respond.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={ABOUT_IMAGES.team}
                  alt={ABOUT_IMAGES.teamAlt}
                  title="RedDot Emergency professional plumbing team at work in Singapore"
                  width={800}
                  height={500}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Plumber's hands installing pipe fitting with professional tools"
                    title="Experienced plumbing work"
                    width={400}
                    height={250}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.pexels.com/photos/1599790/pexels-photo-1599790.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Bathroom at night showing 24/7 emergency plumbing availability"
                    title="24/7 emergency plumbing availability"
                    width={400}
                    height={250}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Photos */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">What We Stand For</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values guide every service call and every interaction with our customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Speed',
                description: 'Plumbing emergencies cannot wait. We prioritize fast dispatch and rapid resolution so your home returns to normal as quickly as possible.',
                icon: Zap,
              },
              {
                title: 'Integrity',
                description: 'Transparent pricing with no hidden fees. We quote before we start, and you only pay for the work that needs to be done.',
                icon: Shield,
              },
              {
                title: 'Expertise',
                description: 'Our technicians bring years of hands-on experience with HDB and condo plumbing systems. We get it right the first time.',
                icon: Wrench,
              },
              {
                title: 'Reliability',
                description: 'When we say we are coming, we show up. Our team is available around the clock, every day of the year.',
                icon: Clock,
              },
              {
                title: 'Quality',
                description: 'We use proper tools and materials for every job. Temporary fixes are not in our vocabulary — we solve problems properly.',
                icon: Award,
              },
              {
                title: 'Customer First',
                description: 'Your satisfaction drives our service. We listen, communicate clearly, and follow up to make sure the issue is fully resolved.',
                icon: Heart,
              },
            ].map(({ title, description, icon: Icon }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6 group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="h-14 w-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: '24/7', label: 'Availability' },
                { value: '30-60', label: 'Min Response' },
                { value: '1000+', label: 'Jobs Completed' },
                { value: 'All', label: 'SG Areas Covered' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Singapore Trusts RedDot Emergency</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'HDB Specialists', desc: 'Experienced with all HDB plumbing configurations and regulations' },
              { title: 'Condo Approved', desc: 'We work with condo management for compliant plumbing repairs' },
              { title: 'Workmanship Warranty', desc: 'We stand behind every repair with a service warranty' },
              { title: 'No Hidden Fees', desc: 'Upfront pricing with transparent quotes before any work begins' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3 items-start bg-card border border-border rounded-xl p-5">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Need a Plumber You Can Trust?"
            subtext="RedDot Emergency is one WhatsApp message away. Fast, honest, and experienced plumbing service across Singapore."
          />
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-foreground mb-4">Learn More</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Our Services', href: '/services' },
              { label: 'Emergency Plumbing', href: '/emergency' },
              { label: 'Why Choose Us', href: '/why-homeaspect' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Contact Us', href: '/contact' },
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
