
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactSection from '@/components/ContactSection';

const Projects = () => {
  const projects = [
    {
      name: '2.5kVA Solar System – Ogba',
      description: 'Installed for a family: 1 inverter, 2 batteries, 4 solar panels. Reliable power during outages.',
      location: 'Ogba, Lagos State',
      capacity: '2.5kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841681/2..5KVA_nouewt.jpg'
    },
    {
      name: '5kVA Commercial Setup – Agege',
      description: 'Small business solution with backup power for shop operations and lighting.',
      location: 'Agege, Lagos State',
      capacity: '5kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841849/5KVA_wownjw.jpg'
    },
    {
      name: '10kVA Industrial System – Yaba',
      description: 'Medium-scale industrial installation for textile manufacturing facility.',
      location: 'Yaba, Lagos State',
      capacity: '10kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841915/10KVA_pswc4r.jpg'
    },
    {
      name: '3.5kVA Residential – Ibadan',
      description: 'Complete home solution for medical practitioner with critical power needs.',
      location: 'Ibadan, Oyo State',
      capacity: '3.5kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749841679/3.5KVA_jxaatm.jpg'
    },
    {
      name: '20kVA Factory Setup – Ojodu Berger',
      description: 'Large-scale solar installation for textile customization factory.',
      location: 'Ojodu Berger, Lagos',
      capacity: '20kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749991921/WhatsApp_Image_2025-06-04_at_9.08.22_AM_2_mxtih4.jpg'
    },
    {
      name: '1kVA Apartment Solution – Olambe',
      description: 'Compact solar system for studio apartment with basic power needs.',
      location: 'Olambe, Ogun State',
      capacity: '1kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749991912/WhatsApp_Image_2025-06-04_at_9.13.11_AM_kclj0l.jpg'
    },
    {
      name: '7.5kVA Office Complex – Akute',
      description: 'Commercial office building with reliable solar backup power system.',
      location: 'Akute, Ogun State',
      capacity: '7.5kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749991904/WhatsApp_Image_2025-06-04_at_9.13.09_AM_szope3.jpg'
    },
    {
      name: '15kVA Hospital Installation – Ota',
      description: 'Critical power backup for medical facility with 24/7 operation requirements.',
      location: 'Ota, Ogun State',
      capacity: '15kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749991902/WhatsApp_Image_2025-06-04_at_9.12.58_AM_xorscw.jpg'
    },
    {
      name: '5kVA School Project – Ifako',
      description: 'Educational institution solar installation for classrooms and administrative offices.',
      location: 'Ifako, Lagos State',
      capacity: '5kVA',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749991899/WhatsApp_Image_2025-06-04_at_9.12.58_AM_1_oijqqk.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Solar Projects in Action</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Powering over 20 homes & businesses across Nigeria
          </p>
          <div className="flex justify-center items-center gap-8 text-lg">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">20+</span>
              <span>Completed Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">150kW+</span>
              <span>Total Capacity Installed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">5</span>
              <span>States Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Project Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real solar installations delivered across Nigeria, powering homes and businesses with reliable clean energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {project.name}
                    </CardTitle>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-medium">
                      {project.capacity}
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-primary">📍</span>
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                  </div>
                  
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">
                      Get Similar Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Project Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏠</div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Homes Powered</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏢</div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Businesses Served</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-3xl font-bold text-primary mb-2">150kW</div>
                <p className="text-muted-foreground">Total Capacity</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🌍</div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <p className="text-muted-foreground">States Covered</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ready to Switch to Solar Energy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied customers and start your solar journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/products">See Packages</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white text-primary" asChild>
              <a href="tel:+2348063840230">Speak to a Consultant</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white text-primary" asChild>
              <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Projects;
