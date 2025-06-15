
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ContactSection from '@/components/ContactSection';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Solar Panels',
      description: 'High-performance Mono and Polycrystalline Solar Panels engineered for the Nigerian climate.',
      category: 'energy-generation',
      features: ['Mono & Polycrystalline options', '20–30+ years warranty', 'High efficiency even in low light', 'Exceptional PID resistance', 'Lower heat loss and operating temperatures'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990453/Canadian-solar-panel_tgh2k2.jpg',
      tags: ['Popular'],
      rating: 4.8,
      detailedDescription: 'Our high-performance Mono and Polycrystalline Solar Panels deliver maximum power in compact designs. Engineered for the Nigerian climate, they provide efficient output even in low-light conditions. These panels offer industry-leading warranties and are perfect for both residential and commercial use.'
    },
    {
      id: 2,
      name: 'Tubular Batteries',
      description: 'Durable tubular solar batteries designed for consistent energy storage and long-lasting performance.',
      category: 'energy-storage',
      features: ['Available in Lithium, Trojan & Newmax brands', 'Long life span (10+ years)', 'Dry-cell, deep-cycle technology', 'Ideal for solar backup systems'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990927/ba3_ho8tum.jpg',
      tags: ['Reliable'],
      rating: 4.7,
      detailedDescription: 'Our tubular solar batteries are designed for durability and consistent energy storage. They provide long-lasting performance and are available in various capacities to suit your specific energy needs—perfect for homes, offices, and industrial setups.'
    },
    {
      id: 3,
      name: 'Lithium Batteries (LiFePO₄)',
      description: 'Advanced LiFePO₄ batteries with Smart Battery Management System for unmatched safety and efficiency.',
      category: 'energy-storage',
      features: ['Available in 100Ah and 200Ah', 'Smart Battery Management System (BMS)', 'Lightweight, maintenance-free', 'High thermal stability & safety'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749897736/Batter_2_vzlmnd.jpg',
      tags: ['Advanced', 'Featured'],
      rating: 4.9,
      detailedDescription: 'These LiFePO₄ batteries provide unmatched safety and efficiency. With built-in BMS, they prevent overcharging, overheating, and deep discharge. Ideal for advanced solar setups, they offer stable, long-term performance with minimal maintenance.'
    },
    {
      id: 4,
      name: 'MPPT Charge Controllers',
      description: 'High-efficiency MPPT Charge Controllers that optimize solar panel performance and reduce energy loss.',
      category: 'power-management',
      features: ['Up to 98% conversion efficiency', 'Enables optimal solar panel performance', 'Compatible with inverters and battery banks', 'Compact & durable design'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990925/100a-mppt-charge-controller_rg2nlp.jpg',
      tags: ['Efficient'],
      rating: 4.6,
      detailedDescription: 'Boost your system\'s efficiency with our MPPT Charge Controllers. They track the ideal operating voltage of your panels, delivering more power and reducing energy loss—perfect for off-grid and hybrid systems.'
    },
    {
      id: 5,
      name: 'Hybrid Inverters',
      description: 'Smart hybrid inverters offering seamless power experience with intelligent switching capabilities.',
      category: 'power-management',
      features: ['1.2KVA to 10KVA range', 'Compatible with on-grid/off-grid systems', 'Smart energy management features', 'Growatt models available'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990424/h_inverter_ds1pya.webp',
      tags: ['Smart', 'Popular'],
      rating: 4.8,
      detailedDescription: 'Our hybrid inverters offer a seamless power experience, combining utility and solar energy with intelligent switching. Suitable for homes and commercial use, they deliver reliable performance in diverse power environments.'
    },
    {
      id: 6,
      name: 'All-in-One Solar System',
      description: 'Complete solar energy storage system combining high-efficiency technology with robust battery storage.',
      category: 'complete-systems',
      features: ['Built-in 5kW solar inverter', 'Integrated 10.24kWh lithium battery', 'Plug-and-play design', 'Compact and space-saving'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990424/ess_d9kntw.webp',
      tags: ['Complete Solution', 'Best Seller'],
      rating: 4.9,
      detailedDescription: 'This All-in-One Solar Energy Storage System combines high-efficiency solar technology with robust battery storage in a single, easy-to-install unit. Ideal for users looking to go off-grid or reduce dependency on public power supply.'
    },
    {
      id: 7,
      name: 'Rechargeable Solar Fans',
      description: 'Solar-powered fans providing hours of cooling comfort without needing grid electricity.',
      category: 'appliances',
      features: ['Up to 11 hours runtime after full charge', 'Solar-powered charging', 'Portable and efficient', 'Ideal for areas with unreliable power'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990426/Gennex_Solar_Fans-1_hhyias.png',
      tags: ['Portable', 'Eco-Friendly'],
      rating: 4.5,
      detailedDescription: 'Stay cool with our solar rechargeable fans, designed for all-day use and powered directly by sunlight. When fully charged, they provide hours of cooling comfort at night without needing grid electricity.'
    },
    {
      id: 8,
      name: 'Monitoring Device',
      description: 'Solar monitoring gateway providing live performance updates and emergency control over your system.',
      category: 'monitoring',
      features: ['Real-time performance tracking', 'Quick shutdown feature for safety', 'Easy integration with existing systems', 'Helps optimize solar system efficiency'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990824/solar-monitoring-systems_bxxpbi.png',
      tags: ['Smart', 'Safety'],
      rating: 4.7,
      detailedDescription: 'Our solar monitoring gateway provides live performance updates and emergency control over your system. With built-in safety features, it ensures optimal operation and long-term reliability.'
    },
    {
      id: 9,
      name: 'Solar Mounting Accessories',
      description: 'Complete set of solar panel mounting accessories for quick and secure installation.',
      category: 'accessories',
      features: ['Wide range: Rails, clamps, L-foot, splice bar, etc.', 'Durable and corrosion-resistant', 'Quick installation', 'Compatible with most solar panels'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990425/Solar-Mount-End-Clamps-600x428_i6g5vo.png',
      tags: ['Installation'],
      rating: 4.6,
      detailedDescription: 'We offer a complete set of solar panel mounting accessories to simplify your installation process. Designed for strength and flexibility, they support various roof types and configurations.'
    },
    {
      id: 10,
      name: 'MC4 Connectors',
      description: 'Weather-proof MC4 connectors providing secure connections for your solar wiring.',
      category: 'accessories',
      features: ['Models: BA21, BM21, BM31, CC4K, CC10K', 'Waterproof and weather-resistant', 'Secure and easy to install', 'Essential for safe solar connections'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990425/MC4-Connectors-BM21-2_yja7oo.png',
      tags: ['Essential', 'Safety'],
      rating: 4.5,
      detailedDescription: 'Our MC4 connectors provide secure, weather-proof connections for your solar wiring. With various models available, they fit most installations and ensure efficient current flow without risk of short-circuiting.'
    }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterBy === 'all' || product.category === filterBy;
      return matchesSearch && matchesFilter;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, sortBy, filterBy]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Our Solar Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of premium solar solutions designed for Nigerian homes and businesses.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="energy-generation">Energy Generation</SelectItem>
                  <SelectItem value="energy-storage">Energy Storage</SelectItem>
                  <SelectItem value="power-management">Power Management</SelectItem>
                  <SelectItem value="complete-systems">Complete Systems</SelectItem>
                  <SelectItem value="appliances">Appliances</SelectItem>
                  <SelectItem value="monitoring">Monitoring</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.tags && (
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {product.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
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
                  {product.rating && (
                    <div className="mb-4 flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{product.rating}</span>
                      <span className="text-muted-foreground">(Reviews)</span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-primary text-sm">+{product.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <a href="/get-quote">Get Quote</a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="/contact">Learn More</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ready to Go Solar?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/get-quote">Get Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Products;
