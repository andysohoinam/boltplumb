import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_FULL_LINK } from '@/lib/constants';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  variant?: 'default' | 'emergency' | 'compact';
}

export function CTASection({
  headline = 'Need Emergency Plumbing Help?',
  subtext = 'Our technicians are ready to assist 24/7. Contact us now for fast, reliable plumbing service.',
  variant = 'default',
}: CTASectionProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 sm:p-8 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{headline}</h3>
        <p className="text-muted-foreground text-sm mb-5">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="whatsapp-gradient text-white border-0 gap-2 w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </Button>
          </a>
          <a href="tel:+6582941906">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Call +65 9677 3465
            </Button>
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'emergency') {
    return (
      <div className="hero-gradient rounded-2xl p-8 sm:p-12 text-center text-white">
        <div className="emergency-pulse inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <span className="h-2 w-2 bg-red-400 rounded-full" />
          24/7 EMERGENCY SERVICE
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{headline}</h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="whatsapp-gradient text-white border-0 gap-2 text-base px-8 cta-glow hover:opacity-90">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </Button>
          </a>
          <a href="tel:+6582941906">
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone className="h-5 w-5" />
              Call +65 9677 3465
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">{headline}</h2>
      <p className="text-white/80 mb-8 max-w-lg mx-auto">{subtext}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={WHATSAPP_FULL_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="whatsapp-gradient text-white border-0 gap-2 text-base px-8 cta-glow hover:opacity-90">
            <MessageCircle className="h-5 w-5" />
            WhatsApp Now
          </Button>
        </a>
        <a href="tel:+6582941906">
          <Button size="lg" variant="outline" className="gap-2 text-base px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Phone className="h-5 w-5" />
            Call +65 9677 3465
          </Button>
        </a>
      </div>
    </div>
  );
}
