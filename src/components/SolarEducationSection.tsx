
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SolarEducationSection = () => {
  const faqs = [
    {
      question: 'How much can I save with solar energy?',
      answer: 'Most customers save 70-90% on their electricity bills. The exact savings depend on your current energy consumption, system size, and local electricity rates. Our free consultation will provide you with a personalized savings estimate.'
    },
    {
      question: 'How long do solar panels last?',
      answer: 'Quality solar panels typically last 25-30 years or more. Our panels come with a 25-year warranty and are designed to withstand Nigeria\'s climate conditions including harmattan, rain, and high temperatures.'
    },
    {
      question: 'What happens during power outages?',
      answer: 'With our battery backup systems, you\'ll continue to have power even during grid outages. The size of your battery bank determines how long you can run on stored solar energy during outages.'
    },
    {
      question: 'Is solar suitable for Nigeria\'s climate?',
      answer: 'Absolutely! Nigeria receives excellent solar radiation year-round, making it ideal for solar energy. Our systems are specifically designed to perform optimally in tropical climates with high temperatures and humidity.'
    },
    {
      question: 'What maintenance is required?',
      answer: 'Solar systems require minimal maintenance. Regular cleaning of panels and periodic system checks are usually sufficient. We provide comprehensive maintenance packages to keep your system running at peak performance.'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Got Questions About Solar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about solar energy and our installation process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our solar experts are here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="tel:+2348063840230">Talk to Our Experts</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarEducationSection;
