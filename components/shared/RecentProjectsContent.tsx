'use client';

import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';
import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { Button } from '@/components/ui/button';
import { projectCaseStudies, testimonials } from '@/lib/trustData';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';
import { MapPin, Wrench, CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function RecentProjectsContent() {
  // Get 12 case studies and 6 testimonials
  const caseStudies = projectCaseStudies.slice(0, 12);
  const featuredTestimonials = testimonials.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title="Recent Emergency Plumbing Projects"
        description="Real solutions delivered by RedDot Emergency. Explore our proven track record of successful plumbing repairs across Singapore homes and businesses."
        breadcrumbs={[{ label: 'Recent Projects' }]}
      />

      {/* Case Studies Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Our Recent Work</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Every project tells a story of how RedDot Emergency resolved urgent plumbing issues with expertise and care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((project) => (
              <div
                key={project.id}
                className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                {/* Location Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{project.location}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">{project.title}</h3>

                {/* Before/After Placeholders */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
                    <span className="text-xs text-muted-foreground font-medium">Before</span>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
                    <span className="text-xs text-muted-foreground font-medium">After</span>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Issue:</strong> {project.problem}
                  </p>
                </div>

                {/* Diagnosis */}
                <div className="flex gap-2 mb-4 text-sm text-foreground">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Diagnosis</p>
                    <p className="text-muted-foreground">{project.diagnosis}</p>
                  </div>
                </div>

                {/* Repair Process */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Solution:</strong> {project.repairProcess}
                  </p>
                </div>

                {/* Outcome */}
                <div className="flex gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Outcome</p>
                    <p className="text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Mid-Page */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-xl border border-primary/20 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Face a Plumbing Emergency?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers in Singapore. Get immediate assistance from RedDot Emergency.
            </p>
            <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Real feedback from satisfied customers who experienced RedDot Emergency's professional service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.name + testimonial.estate}
                className="bg-background rounded-xl border border-border p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.estate} &middot; {testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Explore More</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Learn more about our comprehensive plumbing services and how we can help you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/services">
              <Button variant="outline" className="w-full justify-start">
                Our Services
              </Button>
            </Link>
            <Link href="/emergency">
              <Button variant="outline" className="w-full justify-start">
                Emergency Plumbing
              </Button>
            </Link>
            <Link href="/why-homeaspect">
              <Button variant="outline" className="w-full justify-start">
                Why Choose RedDot Emergency
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="w-full justify-start">
                FAQ
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full justify-start">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      <WhatsAppFloat />

      <Footer />
    </div>
  );
}
