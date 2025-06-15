
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsOverviewSection = () => {
  const projects = [
    {
      title: "2.5kVA Solar Install – Ogba",
      location: "Ogba, Lagos State",
      description: "Residential solar system for 3-bedroom home",
      image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841681/2..5KVA_nouewt.jpg"
    },
    {
      title: "5kVA Commercial Setup – Agege",
      location: "Agege, Lagos State",
      description: "Business solar solution for retail store",
      image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841849/5KVA_wownjw.jpg"
    },
    {
      title: "10kVA Enterprise System – Yaba",
      location: "Yaba, Lagos State", 
      description: "Large-scale solar installation for office complex",
      image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841915/10KVA_pswc4r.jpg"
    },
    {
      title: "3.5kVA Home Solution – Ibadan",
      location: "Ibadan, Oyo State",
      description: "Complete solar package for family residence",
      image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841679/3.5KVA_jxaatm.jpg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Projects at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed energy solutions for homes and businesses across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-primary font-medium mb-2">
                  {project.location}
                </CardDescription>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverviewSection;
