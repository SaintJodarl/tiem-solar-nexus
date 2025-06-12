
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const IntroToSolarSection = () => {
  const benefits = [
    {
      icon: '☀️',
      title: 'Abundant Sunshine',
      description: 'Nigeria receives excellent solar radiation year-round',
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/solar-panel-1976848_640.jpg'
    },
    {
      icon: '💰',
      title: 'Cost Savings',
      description: 'Reduce electricity bills by up to 90%',
      image: 'https://cdn.pixabay.com/photo/2016/11/18/15/20/man-1838439_640.jpg'
    },
    {
      icon: '🌱',
      title: 'Environmental Impact',
      description: 'Clean, renewable energy for a sustainable future',
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/solar-panel-1976848_640.jpg'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Why Solar? Why Now?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With rising electricity tariffs and increasing fuel costs following subsidy removal, solar energy has become the smart, reliable, and cost-effective solution. Today's solar technology is more efficient and accessible than ever—making now the ideal time to switch to clean, sustainable power. Nigeria enjoys abundant sunshine, and even in cloudy conditions, modern solar systems continue to deliver dependable performance—keeping you powered, always.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroToSolarSection;
