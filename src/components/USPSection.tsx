
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const USPSection = () => {
  const usps = [
    {
      icon: '🎓',
      title: 'Certified Engineers',
      description: 'Licensed professionals with proven track record in solar installations',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749897210/istockphoto-1665924983-612x612_j4bznw.webp'
    },
    {
      icon: '⚡',
      title: 'Quality Equipment',
      description: 'Premium solar panels and components from trusted global manufacturers',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749970710/Solar_Prod_q4rr8x.avif'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive rates with flexible payment plans for all budgets',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749837751/allison-saeng-HrFCxo0Go5Y-unsplash_yiv4sp.jpg'
    },
    {
      icon: '🇳🇬',
      title: 'Local Expertise',
      description: 'Deep understanding of Nigerian climate and energy requirements',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749838824/2148894014_tg2suc.jpg'
    },
    {
      icon: '🛡️',
      title: 'Comprehensive Warranty',
      description: '25-year panel warranty and 5-year installation guarantee',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749837748/award_ribbon_check_mark_with_stars_gradient_style_lfcbmf.jpg'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749837750/247-hours-open-helpline-yellow-template-design_1017-54495_e6idgj.jpg'
    }
  ];

  const [imageErrors, setImageErrors] = React.useState<{[key: number]: boolean}>({});

  const handleImageError = (index: number, title: string, imageUrl: string) => {
    console.log(`Failed to load image for ${title}:`, imageUrl);
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

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
              <div className="h-48 overflow-hidden relative">
                {imageErrors[index] && usp.title === 'Local Expertise' ? (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-600 mb-2">🌍</div>
                      <div className="text-lg font-semibold text-gray-700">Climate Optimized</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={usp.image}
                    alt={usp.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={() => handleImageError(index, usp.title, usp.image)}
                  />
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{usp.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{usp.title}</h3>
                </div>
                <p className="text-muted-foreground text-base">{usp.description}</p>
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
