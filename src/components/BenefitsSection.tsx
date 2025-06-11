
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Optimized for Nigerian Climate',
      description: 'Our solar solutions are engineered to withstand Nigeria\'s unique weather patterns, ensuring maximum efficiency year-round.',
      image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=300&h=200&fit=crop'
    },
    {
      title: 'Cutting-Edge Technology Integration',
      description: 'We utilize the latest solar inverter technologies and smart energy management systems for optimal power output and monitoring.',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6834?w=300&h=200&fit=crop'
    },
    {
      title: 'End-to-End Project Management',
      description: 'From initial consultation to final installation and ongoing maintenance, we manage every step seamlessly to ensure your satisfaction.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Benefits of Patronizing TIEM Energy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why hundreds of Nigerian homes and businesses choose TIEM Energy for their solar power needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Growing Family of Satisfied Customers?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a free consultation and customized quote for your home or business. Our experts will design the perfect solar solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348063840230" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors">
              See Packages
            </a>
            <a href="https://wa.link/k395rj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 transition-colors">
              Get Solar Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
