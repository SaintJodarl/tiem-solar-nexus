import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactSection from '@/components/ContactSection';
const Products = () => {
  const products = [{
    name: '1kVA Solar Inverter',
    price: '₦750,000',
    description: 'Perfect for small homes and apartments with basic power needs.',
    features: ['Basic lighting', 'Phone charging', 'Small appliances']
  }, {
    name: '2.5kVA Solar System',
    price: '₦1,650,000',
    description: 'Ideal for medium-sized homes with moderate power consumption.',
    features: ['LED TV', 'Refrigerator', 'Fans', 'Lighting', 'Phone charging']
  }, {
    name: 'Emerald Package - 3.5kVA',
    price: '₦3,441,750.00',
    description: '3KVA with 2 batteries - Complete home solution',
    features: ['6 Solar Panels (480W)', 'Energy-saving fridge', 'TV & Sound System', 'Fans & Decoders', 'Lights & Charging Points'],
    highlight: true
  }, {
    name: '5kVA Solar System',
    price: 'Contact for Price',
    description: 'Perfect for larger homes and small businesses.',
    features: ['Multiple appliances', 'AC units', 'Business equipment']
  }, {
    name: '10kVA Solar System',
    price: '₦8,500,000',
    description: 'Commercial-grade system for businesses and large homes.',
    features: ['Industrial equipment', 'Multiple AC units', 'Commercial appliances']
  }, {
    name: '15kVA Solar System',
    price: 'Contact for Price',
    description: 'Heavy-duty commercial and industrial applications.',
    features: ['Factory equipment', 'Large commercial spaces', 'Industrial machinery']
  }, {
    name: '20kVA Solar System',
    price: 'Contact for Price',
    description: 'Large-scale commercial and industrial installations.',
    features: ['Manufacturing facilities', 'Large offices', 'Industrial complexes']
  }, {
    name: '30kVA Solar System',
    price: 'Contact for Price',
    description: 'Enterprise-level solar power solutions.',
    features: ['Large manufacturing', 'Corporate facilities', 'Industrial estates']
  }, {
    name: 'Installation & Maintenance',
    price: 'Contact for Price',
    description: 'Professional installation and ongoing maintenance services.',
    features: ['Expert installation', 'Regular maintenance', 'Technical support']
  }, {
    name: 'Energy Consultation',
    price: 'Contact for Price',
    description: 'Free consultation to determine your energy needs.',
    features: ['Site assessment', 'Load calculation', 'System recommendation']
  }, {
    name: 'Custom Industrial Solutions',
    price: 'Contact for Price',
    description: 'Tailored solar solutions for unique industrial requirements.',
    features: ['Custom design', 'Scalable systems', 'Industrial-grade components']
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Solar Products</h1>
          <p className="text-xl max-w-3xl mx-auto">PremDiscover Premium Solar Solutions Built for Nigeria
Explore our expertly crafted solar systems—designed to power your home or business reliably, efficiently, and continously and affordably.</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${product.highlight ? 'border-primary border-2 relative' : ''}`}>
                {product.highlight && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Featured Package
                    </span>
                  </div>}
                
                <div className="relative overflow-hidden rounded-t-lg h-48 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    [Product Image Placeholder]
                  </p>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  
                  {product.features && <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {product.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>)}
                      </ul>
                    </div>}
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" variant={product.highlight ? "default" : "outline"} asChild>
                      <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">
                        {product.highlight ? 'I WANT THIS PACKAGE' : 'Learn More'}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 bg-primary text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ready to Switch to Solar Energy?</h2>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" variant="secondary" asChild>
        <a href="/services">See Our Services</a>
      </Button>

      <a
        href="tel:+2348063840230"
        className="px-4 py-2 text-base font-medium rounded-md bg-white text-black border border-black hover:bg-yellow-400 hover:text-black transition duration-300"
      >
        Speak to a Consultant
      </a>

      <a
        href="https://wa.me/2348063840230"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-base font-medium rounded-md bg-white text-black border border-black hover:bg-yellow-400 hover:text-black transition duration-300"
      >
        WhatsApp Us
      </a>
    </div>
  </div>
</section>

      <ContactSection />
      <Footer />
    </div>;
};
export default Products;
