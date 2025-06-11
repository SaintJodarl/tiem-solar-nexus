
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const IntroToSolarSection = () => {
  const benefits = [
    {
      icon: '☀️',
      title: 'Abundant Sunshine',
      description: 'Nigeria receives excellent solar radiation year-round'
    },
    {
      icon: '💰',
      title: 'Cost Savings',
      description: 'Reduce electricity bills by up to 90%'
    },
    {
      icon: '🌱',
      title: 'Environmental Impact',
      description: 'Clean, renewable energy for a sustainable future'
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
            With Nigeria's abundant sunshine and rising electricity costs, solar energy offers the perfect solution for reliable, affordable power. Solar technology has never been more efficient or accessible, making now the ideal time to make the switch to clean, sustainable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1508615039623-a25605d2b022' : index === 1 ? '1579621970563-ebec7560ff3e' : '1518495973542-4542c06a5843'}?w=300&h=200&fit=crop`}
                    alt={benefit.title}
                    className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
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
