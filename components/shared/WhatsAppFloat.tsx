'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';

export function WhatsAppFloat() {
  return (
    <>
      {/* Desktop floating button */}
      <a
        href={WHATSAPP_FULL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 whatsapp-gradient text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cta-glow group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-semibold text-sm">WhatsApp Us</span>
      </a>

      {/* Mobile floating button */}
      <a
        href={WHATSAPP_FULL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden whatsapp-gradient text-white p-4 rounded-full shadow-lg animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-border px-4 py-3 flex gap-3">
        <a
          href={WHATSAPP_FULL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 whatsapp-gradient text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-semibold text-sm shadow-md"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Now
        </a>
        <a
          href="tel:+6582941906"
          className="flex-1 bg-primary text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-semibold text-sm shadow-md"
        >
          <span>Call Now</span>
        </a>
      </div>
    </>
  );
}
