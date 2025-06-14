
import React from 'react';
import { Button } from '@/components/ui/button';

const SolarInvestmentSection = () => {
  return (
    <section className="py-20 bg-primary/10 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=1200&h=600&fit=crop')`
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            SOLAR is a Long-Term Investment
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose TIEM Energy for reliable solar solutions that deliver lasting value. Our systems are designed for durability, high efficiency, and long-term energy independence—helping you save more, reduce stress, and enjoy a better standard of living for you and your family.
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
