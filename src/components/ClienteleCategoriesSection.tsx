
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ClienteleCategoriesSection = () => {
  const categories = [
    {
      title: 'Homeowners',
      description: 'Residential solar solutions for urban and rural homes',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749896115/2148960273_2_idsbru.jpg'
    },
    {
      title: 'Businesses', 
      description: 'Commercial solar systems for SMEs and large enterprises',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749837767/raimond-klavins-F6CXfZdVKW8-unsplash_rjgpqa.jpg'
    },
    {
      title: 'Institutions',
      description: 'Educational institutions and community organizations',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749838823/fine-shot-YX8F3Gb5zv0-unsplash_qyylzo.jpg'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who Do We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TIEM Energy provides tailored solar solutions for various client categories across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{category.title}</h4>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleCategoriesSection;
