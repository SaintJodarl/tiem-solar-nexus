
import React from 'react';
import { Button } from '@/components/ui/button';

const SolarInvestmentSection = () => {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            SOLAR is a Long-Term Investment
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Go solar with TIEM Energy. Our energy solutions deliver reliable power for years to come.
          </p>

          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 text-lg"
            asChild
          >
            <a href="/products">
              BROWSE PACKAGES
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolarInvestmentSection;
