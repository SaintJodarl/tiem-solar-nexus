
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Powering Homes and Businesses Across Nigeria
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              TIEM Energy is Nigeria's trusted solar energy provider, delivering reliable and sustainable power solutions to homes, businesses, and institutions across the country. With years of experience and a commitment to excellence, we make solar energy accessible and affordable for everyone.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified engineers and technicians ensures every installation meets the highest standards of quality and performance, backed by comprehensive warranties and ongoing support.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2017/11/03/15/24/solar-panel-2917547_640.jpg"
              alt="TIEM Energy team and solar installation in Nigeria"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
