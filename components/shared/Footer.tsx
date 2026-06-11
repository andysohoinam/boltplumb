import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_FULL_LINK, SERVICE_AREAS, SERVICES, COMPANY_NAME } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/reddot_emergency_plumbing_logo.jfif"
                alt="RedDot Emergency Plumbing Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg text-white tracking-tight">RedDot</span>
                <span className="text-[10px] font-semibold text-primary tracking-widest uppercase">Emergency</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Singapore&apos;s trusted 24-hour emergency plumbing service. Fast response, transparent pricing, experienced technicians.
            </p>
            <div className="space-y-3">
              <a
                href={WHATSAPP_FULL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whatsapp-gradient text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Areas */}
          <div>
            <h3 className="font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+6596773465" className="hover:text-white transition-colors">+65 9677 3465</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 shrink-0" />
                24 Hours, 7 Days
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Singapore-wide coverage
              </li>
            </ul>

            <h3 className="font-semibold text-base mb-3">Service Areas</h3>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_AREAS.slice(0, 10).map((area) => (
                <span
                  key={area}
                  className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
              <span className="text-xs text-white/40 px-2 py-1">+ more</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <Link href="/faq" className="hover:text-white/60 transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
