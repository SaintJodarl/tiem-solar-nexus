
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Free consultation to understand your energy needs and budget',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749838888/photo-1707155465540-f9e8208d83db_e1nzu6.jpg'
    },
    {
      number: '02',
      title: 'Site Survey',
      description: 'Professional site assessment and solar potential evaluation',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749846488/Site_Survey_p0zbfz.png'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Customized system design and transparent pricing proposal',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749846775/How-Does-A-Hybrid-Inverter-Work-1_ejd4bd.webp'
    },
    {
      number: '04',
      title: 'Installation',
      description: 'Professional installation by certified technicians',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749838823/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash_cwmh6i.jpg'
    },
    {
      number: '05',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and 24/7 customer support',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749847011/Maintenance_Support_ngvtjj.jpg'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures you get the perfect solar solution with minimal hassle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow relative">
              <CardHeader>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl">
                  →
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348063840230" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors text-lg">
              Start Your Solar Journey
            </a>
            <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 transition-colors text-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
