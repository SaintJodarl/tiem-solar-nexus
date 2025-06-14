
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Optimized for Nigerian Climate',
      description: 'Our solar solutions are engineered to withstand Nigeria\'s unique weather patterns, ensuring maximum efficiency year-round.',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749838880/ovinuchi-ejiohuo-Qe9S79-5iD0-unsplash_ntnmzy.jpg'
    },
    {
      title: 'Cutting-Edge Technology Integration',
      description: 'We utilize the latest solar inverter technologies and smart energy management systems for optimal power output and monitoring.',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749850998/Cutting_Edgee_abnu35.jpg'
    },
    {
      title: 'End-to-End Project Management',
      description: 'From initial consultation to final installation and ongoing maintenance, we manage every step seamlessly to ensure your satisfaction.',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749851173/project_management_black-people-arproject-management-site-african-_stfvzx.webp'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Nigerians Trust TIEM Energy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the growing number of homes and businesses across Nigeria choosing TIEM Energy for reliable, cost-saving, and expertly delivered solar solutions. Experience the confidence of partnering with a brand that prioritizes performance, durability, and your long-term energy freedom.
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
