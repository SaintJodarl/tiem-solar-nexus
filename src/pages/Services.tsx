
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ContactSection from '@/components/ContactSection';

const Services = () => {
  const services = [
    {
      title: 'Consultation',
      description: 'Free solar energy needs assessment',
      price: 'FREE',
      features: [
        'Site evaluation',
        'Energy consumption analysis',
        'Custom system design',
        'ROI calculation'
      ],
      popular: false
    },
    {
      title: 'Installation',
      description: 'Professional solar system installation',
      price: 'Included in Package',
      features: [
        'Expert installation team',
        'Quality components',
        'Safety compliance',
        'System testing'
      ],
      popular: true
    },
    {
      title: 'Maintenance',
      description: 'Ongoing system maintenance and support',
      price: 'Unique to Project Scope',
      features: [
        'Regular system checks',
        'Performance monitoring',
        'Cleaning services',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We assess your energy needs and site conditions'
    },
    {
      step: '2',
      title: 'System Design',
      description: 'Custom solar solution designed for your requirements'
    },
    {
      step: '3',
      title: 'Installation',
      description: 'Professional installation by certified technicians'
    },
    {
      step: '4',
      title: 'Monitoring & Support',
      description: 'Ongoing maintenance and performance monitoring'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Solar Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solar energy solutions from consultation to maintenance
          </p>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Service Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete solar energy solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${service.popular ? 'border-primary border-2' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{service.price}</div>
                </CardHeader>

                <CardContent className="text-center">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant={service.popular ? "default" : "outline"} asChild>
                    <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              OUR BENEFITS<br />
              <span className="text-2xl font-normal">Why Choose TIEM ENERGY</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-foreground mb-2">Quality Equipment</h4>
                <p className="text-muted-foreground">Premium solar components with international certifications</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="text-xl font-bold text-foreground mb-2">Expert Installation</h4>
                <p className="text-muted-foreground">Certified technicians with years of experience</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-foreground mb-2">Cost Savings</h4>
                <p className="text-muted-foreground">Reduce electricity bills by up to 90%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              HOW WE WORK — Proven Solar Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
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
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:+2348063840230">Speak to a Consultant</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
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

export default Services;
