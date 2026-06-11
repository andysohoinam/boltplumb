'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/constants';

interface FAQAccordionProps {
  items?: typeof FAQS;
  showAll?: boolean;
}

export function FAQAccordion({ items = FAQS, showAll = false }: FAQAccordionProps) {
  const displayItems = showAll ? items : items.slice(0, 5);

  return (
    <Accordion type="single" collapsible className="w-full">
      {displayItems.map((faq, index) => (
        <AccordionItem key={index} value={`faq-${index}`}>
          <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
