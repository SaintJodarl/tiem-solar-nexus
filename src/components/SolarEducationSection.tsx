
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
      question: 'Is solar power reliable in Nigeria with our weather conditions?',
      answer: 'Yes. Nigeria’s climate is ideal for solar power. With over 300 days of strong sunlight each year, you’re tapping into a constant, natural power source. Our panels are designed for hot climates like ours—they’re efficient, resilient to heat, and still generate energy on cloudy days. Plus, the system stores unused power in batteries so you’re never left in the dark. It’s a smart, long-term solution to unreliable electricity.'
    },
    {
      question: 'Will solar power run my appliances like ACs, fridges, and freezers?',
      answer: 'Yes, we carefully assess your energy requirements and install systems capable of powering everything from lighting and fans to heavy-duty appliances like, freezers, refrigerators, ACs, and water pumps. We match the system capacity to your actual usage for reliable performance.'
    },
    {
      question: ' Isn’t solar installation expensive upfront?',
      answer: 'Our packages are designed to be budget-friendly and deliver long-term savings. Once installed, your system helps you cut down drastically on fuel and electricity bills, paying for itself over time. We also offer flexible system sizes to fit your budget and power needs.'
    },
    {
      question: 'What if something goes wrong after installation, Who handles maintenance?',
      answer: 'We offer full end-to-end support—including installation, system monitoring, and ongoing maintenance. Every system is backed by a comprehensive warranty, and our local technicians are available for on-site support when needed. Youu are not just buying a product,you are gaining a long-term energy partner.'
    },
    {
      question: 'I live in a rented apartment or plan to relocate. Is solar still for me?',
      answer: 'Definitely. We offer compact and portable solar solutions that can be uninstalled and moved to a new location with ease. Whether you’re renting or relocating, your solar investment remains useful and transferable.'
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
