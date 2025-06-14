
import React from 'react';
import { Button } from '@/components/ui/button';

const ReadyToJoinSection = () => {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Growing Family of Satisfied Customers?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step toward reliable, affordable solar energy today!.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#d20500] hover:bg-[#d20500]/90 text-white font-semibold px-8 py-3 text-lg"
              asChild
            >
              <a href="/products">See Packages</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#d20500] text-[#d20500] hover:bg-[#d20500] hover:text-white font-semibold px-8 py-3 text-lg"
              asChild
            >
              <a href="tel:+2348063840230">Speak to a Consultant</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToJoinSection;
