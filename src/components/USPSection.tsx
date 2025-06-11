
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const USPSection = () => {
  const usps = [
    {
      icon: '🎓',
      title: 'Certified Engineers',
      description: 'Licensed professionals with proven track record in solar installations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      icon: '⚡',
      title: 'Quality Equipment',
      description: 'Premium solar panels and components from trusted global manufacturers',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive rates with flexible payment plans for all budgets',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop'
    },
    {
      icon: '🇳🇬',
      title: 'Local Expertise',
      description: 'Deep understanding of Nigerian climate and energy requirements',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
    },
    {
      icon: '🛡️',
      title: 'Comprehensive Warranty',
      description: '25-year panel warranty and 5-year installation guarantee',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            WHY YOU SHOULD CHOOSE TIEM ENERGY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference that expertise, quality, and dedication make in your solar journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={usp.image}
                  alt={usp.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{usp.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{usp.title}</h3>
                </div>
                <p className="text-muted-foreground">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="#contact">Get a Free Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
