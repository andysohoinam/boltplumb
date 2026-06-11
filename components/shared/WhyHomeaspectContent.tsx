'use client';

import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Wrench, Clock, Award, Heart, Star, CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';

export function WhyHomeaspectContent() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose RedDot Emergency over other plumbers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RedDot Emergency offers fast 30-60 minute emergency response, transparent pricing with no hidden fees, experienced technicians across all plumbing systems, and 24/7 availability including weekends and public holidays. We stand behind our work with a service warranty.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is RedDot Emergency available on weekends and holidays?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, RedDot Emergency is available 24/7, including all weekends and public holidays in Singapore. Plumbing emergencies don\'t wait for business hours, so neither do we.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes RedDot Emergency technicians experienced?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our team consists of certified plumbers with years of hands-on experience in residential plumbing. We specialize in HDB and condo systems, and our technicians undergo continuous training to stay current with best practices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does RedDot Emergency handle both HDB and condo plumbing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have extensive expertise in both HDB and private condominium plumbing systems. We understand the unique requirements and regulations for each type of residential property.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does RedDot Emergency ensure transparent pricing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide upfront quotes before starting any work, with no hidden fees. The price we quote is what you pay. We discuss the work needed and cost estimates with you before proceeding.',
        },
      },
    ],
  };

  const testimonials = [
    {
      name: 'Mrs Tan',
      area: 'Tampines',
      rating: 5,
      text: 'My toilet burst pipe flooded our master bedroom at 3 AM. RedDot Emergency arrived within 45 minutes and fixed everything professionally. The technician was courteous and explained what he was doing. No hidden charges. Highly recommended!',
    },
    {
      name: 'Mr Lim',
      area: 'Bedok',
      rating: 5,
      text: 'Kitchen sink was completely choked and backed up into the stove area. RedDot Emergency cleared it in 30 minutes flat. They were punctual, professional, and the pricing was transparent. Will definitely call them again.',
    },
    {
      name: 'Ms Wong',
      area: 'Jurong',
      rating: 5,
      text: 'Our water heater stopped working on a Sunday. Called RedDot Emergency expecting a long wait, but they arrived within an hour. Fixed it expertly and even gave us maintenance tips. Great service!',
    },
    {
      name: 'Mr Patel',
      area: 'Woodlands',
      rating: 5,
      text: 'Had a persistent leak in our bathroom pipes. The RedDot Emergency technician identified the root cause and fixed it properly instead of applying a quick band-aid solution. Very impressed with their integrity.',
    },
    {
      name: 'Mrs Lee',
      area: 'Punggol',
      rating: 5,
      text: 'Our HDB floor trap was causing foul odours. RedDot Emergency cleared it thoroughly and explained how to maintain it. The team was professional and efficient. Pricing was fair and upfront.',
    },
    {
      name: 'Mr Ng',
      area: 'Sengkang',
      rating: 5,
      text: 'Tap was dripping non-stop, wasting water. RedDot Emergency replaced it quickly with a quality fixture. Technician cleaned up after himself. Excellent customer service throughout the process.',
    },
    {
      name: 'Ms Chong',
      area: 'Hougang',
      rating: 5,
      text: 'Experienced a major pipe leak at 2 AM. Despite the late hour, RedDot Emergency responded promptly and professionally. They prevented water damage to our unit and neighbouring flats. Truly commendable service.',
    },
    {
      name: 'Mr Rajesh',
      area: 'Ang Mo Kio',
      rating: 5,
      text: 'Had our basin replaced. The technician was skillful, installed it perfectly, and the new basin looks fantastic. Service was quick and professional. Will recommend to all my friends.',
    },
    {
      name: 'Mrs Koh',
      area: 'Clementi',
      rating: 5,
      text: 'Our condo bathroom had a recurring choke issue. RedDot Emergency not only fixed it but also gave preventive maintenance advice. Transparent pricing and excellent follow-up made the experience seamless.',
    },
    {
      name: 'Mr Sulaiman',
      area: 'Bukit Batok',
      rating: 5,
      text: 'Called RedDot Emergency for an emergency water leak. They arrived quickly, diagnosed the problem accurately, and implemented a permanent solution. No pressure tactics, just honest and excellent work.',
    },
  ];

  const projects = [
    {
      title: 'Burst Kitchen Pipe Repair',
      before: 'Kitchen pipes burst behind the stove area, causing water to leak into cabinets and damage to stored items. Customer was worried about water seeping into the walls.',
      after: 'Located the burst section, replaced the damaged pipes with new copper piping, applied silicone sealant to prevent future leaks, and tested the system thoroughly.',
    },
    {
      title: 'HDB Toilet Cistern Replacement',
      before: 'Toilet cistern was constantly leaking water, causing high water bills. Attempts at temporary fixes kept failing within days.',
      after: 'Removed the faulty cistern, installed a new high-efficiency model, ensured proper water pressure and sealing, and provided maintenance tips for longevity.',
    },
    {
      title: 'Complete Floor Trap Clearing & Cleaning',
      before: 'Bathroom floor trap was severely clogged with hair, soap residue, and buildup. Water was pooling and foul odours were emanating from the trap.',
      after: 'High-pressure cleaned the floor trap, removed all blockages, disinfected the area, and provided preventive maintenance advice to avoid future clogs.',
    },
    {
      title: 'Water Heater Troubleshooting & Service',
      before: 'Water heater was producing only lukewarm water and making unusual noises. Customer was unsure if replacement was necessary.',
      after: 'Diagnosed a sediment buildup issue, performed thorough descaling and flushing, replaced the heating element, and restored full hot water functionality.',
    },
    {
      title: 'Condo Bathroom Sink Choke Resolution',
      before: 'Bathroom sink was draining very slowly and backing up. Previous attempts to clear it with plunger and chemical cleaners failed.',
      after: 'Used professional drain snake to remove deep blockage, cleaned the p-trap, flushed the entire system, and verified proper water flow and pressure.',
    },
  ];

  const valueProps = [
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
  ];

  return (
    <>
      <Header />

      <PageHero
        title="Why Choose RedDot Emergency"
        description="Singapore's most trusted emergency plumbing service backed by transparent pricing, rapid response, and thousands of satisfied customers."
        breadcrumbs={[{ label: 'Why RedDot Emergency' }]}
      />

      {/* Why Choose RedDot Emergency Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Value Propositions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six core reasons why RedDot Emergency stands out as Singapore's most trusted emergency plumber.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-xl p-6 group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
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

      {/* Emergency Response Commitment Section */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Emergency Response Commitment
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">24/7 Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      We are available day and night, 365 days a year. No waiting until Monday morning for your emergency to be addressed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Zap className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">30-60 Minute Response</h3>
                    <p className="text-sm text-muted-foreground">
                      Our technicians are strategically located across Singapore. We aim to arrive at your location within 30-60 minutes of your call.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Award className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Weekend & Holiday Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      Plumbing emergencies don't respect holidays. We maintain full service availability on all weekends, public holidays, and off-peak hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service Warranty</h3>
                    <p className="text-sm text-muted-foreground">
                      We stand behind our work. Every repair comes with our workmanship warranty, so you can trust the quality of the job done.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Round-the-clock availability</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30-60</div>
                  <div className="text-sm text-muted-foreground">Minute response time</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Weekend & holiday coverage</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">All SG</div>
                  <div className="text-sm text-muted-foreground">Areas covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced Team Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Experienced Plumbing Team
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every technician at RedDot Emergency is a certified plumber with multiple years of hands-on residential plumbing experience. We don't send apprentices to your home—our team brings genuine expertise and professionalism to every call.
                </p>
                <p>
                  Our technicians are continuously trained on the latest plumbing techniques, tools, and best practices. They stay current with Singapore's building regulations and are familiar with all major plumbing fixtures and systems used in our homes.
                </p>
                <p>
                  Beyond technical skills, our team is trained in customer service. We believe in clear communication, respecting your home, and taking the time to explain the problem and the solution in terms you understand.
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">What Our Technicians Specialize In:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>HDB and condominium plumbing systems</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Emergency pipe repairs and replacements</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Toilet, sink, and floor trap repairs and clearing</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Water heater repair and maintenance</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Preventive plumbing maintenance and inspections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 flex items-center justify-center min-h-80">
              <div className="text-center">
                <Wrench className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">Professional plumbing expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Plumbing Expertise Section */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Residential Plumbing Expertise
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                HDB Expertise
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We have extensive experience with HDB plumbing systems across all flat types—1-room to 5-room and executive maisonettes. We understand HDB regulations and work with town councils for compliant repairs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>All HDB flat configurations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Town council approved works</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Maintenance of aged pipes</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Condo Expertise
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Private condominiums require a different approach. We work with building management, respect condo regulations, and handle complex multi-unit plumbing configurations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Building management coordination</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Compliant installations and repairs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Shared utility responsiveness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Transparent Pricing You Can Trust
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              We believe in honest, upfront pricing with no surprises at checkout. Here's how our pricing works:
            </p>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">No Hidden Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    We quote the total cost upfront before starting any work. The price we quote is what you pay—nothing more.
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Upfront Quotes</h3>
                  <p className="text-sm text-muted-foreground">
                    After diagnosing the problem, we provide a detailed quote explaining what needs to be done and the cost involved.
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <Award className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quality Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    We use quality plumbing materials and tools for lasting solutions. Your investment protects your home long-term.
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <MessageCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Payment After Completion</h3>
                  <p className="text-sm text-muted-foreground">
                    You only pay after the job is completed to your satisfaction. We accept cash, PayNow, bank transfer, and cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section with Testimonials */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Customer Satisfaction Speaks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thousands of Singapore homeowners trust RedDot Emergency for their plumbing emergencies. Here are real testimonials from satisfied customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.area}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Projects Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Before & After Project Examples
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real plumbing problems we have solved for Singapore homeowners.
            </p>
          </div>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-4">
                      {project.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-red-600 mb-1">
                          Before:
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.before}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-600 mb-1">
                          After:
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.after}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-lg p-8 flex items-center justify-center min-h-64">
                    <div className="text-center">
                      <div className="text-5xl mb-2">📸</div>
                      <p className="text-muted-foreground text-sm">
                        Project image placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <div className="space-y-4">
            {[
              {
                q: 'Why should I choose RedDot Emergency over other plumbers?',
                a: 'RedDot Emergency offers fast 30-60 minute emergency response, transparent pricing with no hidden fees, experienced technicians across all plumbing systems, and 24/7 availability including weekends and public holidays. We stand behind our work with a service warranty.',
              },
              {
                q: 'Is RedDot Emergency available on weekends and holidays?',
                a: 'Yes, RedDot Emergency is available 24/7, including all weekends and public holidays in Singapore. Plumbing emergencies don\'t wait for business hours, so neither do we.',
              },
              {
                q: 'What makes RedDot Emergency technicians experienced?',
                a: 'Our team consists of certified plumbers with years of hands-on experience in residential plumbing. We specialize in HDB and condo systems, and our technicians undergo continuous training to stay current with best practices.',
              },
              {
                q: 'Does RedDot Emergency handle both HDB and condo plumbing?',
                a: 'Yes, we have extensive expertise in both HDB and private condominium plumbing systems. We understand the unique requirements and regulations for each type of residential property.',
              },
              {
                q: 'How does RedDot Emergency ensure transparent pricing?',
                a: 'We provide upfront quotes before starting any work, with no hidden fees. The price we quote is what you pay. We discuss the work needed and cost estimates with you before proceeding.',
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-card border border-border rounded-xl p-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors">
                  {item.q}
                  <span className="ml-4 text-primary group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services"
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                Our Services
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore all our emergency plumbing services
              </p>
            </Link>
            <Link
              href="/emergency-plumbing"
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                Emergency Plumbing
              </h3>
              <p className="text-sm text-muted-foreground">
                24/7 emergency response availability
              </p>
            </Link>
            <Link
              href="/faq"
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                FAQ
              </h3>
              <p className="text-sm text-muted-foreground">
                Common plumbing questions answered
              </p>
            </Link>
            <Link
              href="/contact"
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                Contact Us
              </h3>
              <p className="text-sm text-muted-foreground">
                Get in touch with our team
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            headline="Ready to Experience RedDot Emergency?"
            subtext="Join thousands of Singapore homeowners who trust us with their plumbing emergencies. One message away from professional, honest service."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
