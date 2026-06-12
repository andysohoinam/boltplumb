'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_FULL_LINK } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/reddot_emergency_plumbing_logo.jfif"
              alt="RedDot Emergency Plumbing Logo"
              width={600}
              height={600}
              className="h-[600px] w-[600px] object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-foreground tracking-tight">
                RedDot
              </span>
              <span className="text-[10px] font-semibold text-primary tracking-widest uppercase">
                Emergency
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+6596773465">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 whatsapp-gradient text-white border-0 hover:opacity-90">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4 flex gap-3">
            <a href="tel:+6596773465" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full gap-2 whatsapp-gradient text-white border-0">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
