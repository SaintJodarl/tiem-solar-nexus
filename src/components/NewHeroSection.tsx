
import React from 'react';
import { Button } from '@/components/ui/button';

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/46921667-e72c-478b-836b-a6b70f717c00.png')`
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Power Life on
            <span className="block">Your Terms</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay Ahead of Outages — Choose Reliable Solar Energy That Works.
          </p>

          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-12 py-4 text-lg rounded-lg"
            asChild
          >
            <a href="#contact">
              GET QUOTE
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
