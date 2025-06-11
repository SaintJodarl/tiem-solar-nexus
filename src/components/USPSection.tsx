
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const USPSection = () => {
  const usps = [
    {
      title: 'High-Quality Solar Products',
      description: 'Premium solar panels, inverters, and batteries from trusted international brands with proven track records',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=300&h=200&fit=crop'
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive prices with flexible payment options to make solar energy accessible to all Nigerians',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=200&fit=crop'
    },
    {
      title: 'Custom Solar Solutions',
      description: 'Tailored solar systems designed specifically for Nigerian climate and energy consumption patterns',
      image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=300&h=200&fit=crop'
    },
    {
      title: 'Expert Installation',
      description: 'Professional installation by certified technicians with ongoing maintenance and support services',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop'
    },
    {
      title: 'Local Support',
      description: 'Dedicated customer support team available via phone, WhatsApp, and email for all your needs',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
    },
    {
      title: 'Warranty Protection',
      description: 'Comprehensive warranty coverage on all products with quick replacement and repair services',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose TIEM Energy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering the best solar energy solutions with unmatched quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <img
                    src={usp.image}
                    alt={usp.title}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {usp.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {usp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Switch to Solar Energy?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a free consultation and customized quote for your home or business. Our experts will design the perfect solar solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348063840230" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors text-base">
              Speak to a Consultant
            </a>
            <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 transition-colors text-base">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
