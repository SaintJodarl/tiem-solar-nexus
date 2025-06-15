import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ContactSection from '@/components/ContactSection';
import { useToast } from '@/hooks/use-toast';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: '1kVA Solar Inverter',
      price: 750000,
      originalPrice: 850000,
      description: 'Perfect for small homes and apartments with basic power needs.',
      category: 'residential',
      features: ['Basic lighting', 'Phone charging', 'Small appliances'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978592/Fecicity_KVA_bc7lrl.jpg',
      tags: ['New Arrival'],
      inStock: true,
      rating: 4.5,
      specs: {
        power: '1kVA',
        batteryType: 'Lithium',
        warranty: '2 years',
        installation: 'Included'
      }
    },
    {
      id: 2,
      name: '2.5kVA Solar System',
      price: 1650000,
      description: 'Ideal for medium-sized homes with moderate power consumption.',
      category: 'residential',
      features: ['LED TV', 'Refrigerator', 'Fans', 'Lighting', 'Phone charging'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp',
      tags: ['Popular'],
      inStock: true,
      rating: 4.7,
      specs: {
        power: '2.5kVA',
        batteryType: 'Lithium',
        warranty: '3 years',
        installation: 'Included'
      }
    },
    {
      id: 3,
      name: 'Emerald Package - 3.5kVA',
      price: 3441750,
      originalPrice: 3800000,
      description: '3KVA with 2 batteries - Complete home solution',
      category: 'residential',
      features: ['6 Solar Panels (480W)', 'Energy-saving fridge', 'TV & Sound System', 'Fans & Decoders', 'Lights & Charging Points'],
      highlight: true,
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978592/Fecicity_KVA_bc7lrl.jpg',
      tags: ['Best Seller', 'Featured'],
      inStock: true,
      rating: 4.9,
      specs: {
        power: '3.5kVA',
        panels: 6,
        batteryType: 'Lithium',
        warranty: '5 years',
        installation: 'Included'
      }
    },
    {
      id: 4,
      name: '5kVA Solar System',
      price: 4500000,
      description: 'Perfect for larger homes and small businesses.',
      category: 'commercial',
      features: ['Multiple appliances', 'AC units', 'Business equipment'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp',
      tags: ['Commercial'],
      inStock: true,
      rating: 4.6,
      specs: {
        power: '5kVA',
        batteryType: 'Lithium',
        warranty: '5 years',
        installation: 'Included'
      }
    },
    {
      id: 5,
      name: '10kVA Solar System',
      price: 8500000,
      description: 'Commercial-grade system for businesses and large homes.',
      category: 'commercial',
      features: ['Industrial equipment', 'Multiple AC units', 'Commercial appliances'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp',
      tags: ['Industrial'],
      inStock: true,
      rating: 4.8,
      specs: {
        power: '10kVA',
        batteryType: 'Lithium',
        warranty: '7 years',
        installation: 'Included'
      }
    },
    {
      id: 6,
      name: '15kVA Solar System',
      price: 12000000,
      description: 'Heavy-duty commercial and industrial applications.',
      category: 'industrial',
      features: ['Factory equipment', 'Large commercial spaces', 'Industrial machinery'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp',
      tags: ['Industrial', 'Heavy Duty'],
      inStock: true,
      rating: 4.7,
      specs: {
        power: '15kVA',
        batteryType: 'Lithium',
        warranty: '10 years',
        installation: 'Professional Required'
      }
    },
    {
      id: 11,
      name: 'Solar Panels',
      price: 145000,
      originalPrice: 165000,
      description: 'High-performance Mono and Polycrystalline Solar Panels engineered for the Nigerian climate.',
      category: 'components',
      features: ['Mono & Polycrystalline options', '20–30+ years warranty', 'High efficiency even in low light', 'Exceptional PID resistance'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990453/Canadian-solar-panel_tgh2k2.jpg',
      tags: ['Popular', 'Energy Generation'],
      inStock: true,
      rating: 4.8,
      specs: {
        warranty: '25 years',
        efficiency: 'High',
        type: 'Mono & Poly',
        climate: 'Nigerian Optimized'
      }
    },
    {
      id: 12,
      name: 'Tubular Batteries',
      price: 280000,
      description: 'Durable tubular solar batteries designed for consistent energy storage and long-lasting performance.',
      category: 'components',
      features: ['Available in Lithium, Trojan & Newmax brands', 'Long life span (10+ years)', 'Dry-cell, deep-cycle technology', 'Ideal for solar backup systems'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990927/ba3_ho8tum.jpg',
      tags: ['Reliable', 'Long Life'],
      inStock: true,
      rating: 4.7,
      specs: {
        lifespan: '10+ years',
        type: 'Deep-cycle',
        brands: 'Lithium, Trojan, Newmax',
        technology: 'Dry-cell'
      }
    },
    {
      id: 13,
      name: 'Lithium Batteries (LiFePO₄)',
      price: 320000,
      originalPrice: 350000,
      description: 'Advanced LiFePO₄ batteries with Smart Battery Management System for unmatched safety and efficiency.',
      category: 'components',
      features: ['Available in 100Ah and 200Ah', 'Smart Battery Management System (BMS)', 'Lightweight, maintenance-free', 'High thermal stability & safety'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749897736/Batter_2_vzlmnd.jpg',
      tags: ['Advanced', 'Featured', 'BMS'],
      inStock: true,
      rating: 4.9,
      specs: {
        capacity: '100Ah - 200Ah',
        technology: 'LiFePO₄',
        management: 'Smart BMS',
        maintenance: 'Free'
      }
    },
    {
      id: 14,
      name: 'MPPT Charge Controllers',
      price: 95000,
      description: 'High-efficiency MPPT Charge Controllers that optimize solar panel performance and reduce energy loss.',
      category: 'components',
      features: ['Up to 98% conversion efficiency', 'Enables optimal solar panel performance', 'Compatible with inverters and battery banks', 'Compact & durable design'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990925/100a-mppt-charge-controller_rg2nlp.jpg',
      tags: ['Efficient', '98% Efficiency'],
      inStock: true,
      rating: 4.6,
      specs: {
        efficiency: '98%',
        compatibility: 'Universal',
        design: 'Compact',
        optimization: 'Maximum Power Point'
      }
    },
    {
      id: 15,
      name: 'Hybrid Inverters',
      price: 275000,
      originalPrice: 295000,
      description: 'Smart hybrid inverters offering seamless power experience with intelligent switching capabilities.',
      category: 'residential',
      features: ['1.2KVA to 10KVA range', 'Compatible with on-grid/off-grid systems', 'Smart energy management features', 'Growatt models available'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990424/h_inverter_ds1pya.webp',
      tags: ['Smart', 'Popular', 'Growatt'],
      inStock: true,
      rating: 4.8,
      specs: {
        range: '1.2KVA - 10KVA',
        compatibility: 'On/Off Grid',
        management: 'Smart Energy',
        brand: 'Growatt Available'
      }
    },
    {
      id: 16,
      name: 'All-in-One Solar System',
      price: 650000,
      originalPrice: 750000,
      description: 'Complete solar energy storage system combining high-efficiency technology with robust battery storage.',
      category: 'residential',
      features: ['Built-in 5kW solar inverter', 'Integrated 10.24kWh lithium battery', 'Plug-and-play design', 'Compact and space-saving'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990424/ess_d9kntw.webp',
      tags: ['Complete Solution', 'Best Seller', 'Plug & Play'],
      inStock: true,
      rating: 4.9,
      specs: {
        inverter: '5kW Built-in',
        battery: '10.24kWh Lithium',
        installation: 'Plug & Play',
        design: 'Space-saving'
      }
    },
    {
      id: 17,
      name: 'Rechargeable Solar Fans',
      price: 45000,
      description: 'Solar-powered fans providing hours of cooling comfort without needing grid electricity.',
      category: 'appliances',
      features: ['Up to 11 hours runtime after full charge', 'Solar-powered charging', 'Portable and efficient', 'Ideal for areas with unreliable power'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990426/Gennex_Solar_Fans-1_hhyias.png',
      tags: ['Portable', 'Eco-Friendly', '11hrs Runtime'],
      inStock: true,
      rating: 4.5,
      specs: {
        runtime: '11 hours',
        charging: 'Solar Powered',
        portability: 'Yes',
        efficiency: 'High'
      }
    },
    {
      id: 18,
      name: 'Monitoring Device',
      price: 85000,
      description: 'Solar monitoring gateway providing live performance updates and emergency control over your system.',
      category: 'components',
      features: ['Real-time performance tracking', 'Quick shutdown feature for safety', 'Easy integration with existing systems', 'Helps optimize solar system efficiency'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990824/solar-monitoring-systems_bxxpbi.png',
      tags: ['Smart', 'Safety', 'Real-time'],
      inStock: true,
      rating: 4.7,
      specs: {
        tracking: 'Real-time',
        safety: 'Quick Shutdown',
        integration: 'Easy',
        optimization: 'Efficiency'
      }
    },
    {
      id: 19,
      name: 'Solar Mounting Accessories',
      price: 25000,
      description: 'Complete set of solar panel mounting accessories for quick and secure installation.',
      category: 'accessories',
      features: ['Wide range: Rails, clamps, L-foot, splice bar, etc.', 'Durable and corrosion-resistant', 'Quick installation', 'Compatible with most solar panels'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990425/Solar-Mount-End-Clamps-600x428_i6g5vo.png',
      tags: ['Installation', 'Complete Set'],
      inStock: true,
      rating: 4.6,
      specs: {
        components: 'Rails, Clamps, L-foot',
        durability: 'Corrosion-resistant',
        installation: 'Quick',
        compatibility: 'Universal'
      }
    },
    {
      id: 20,
      name: 'MC4 Connectors',
      price: 15000,
      description: 'Weather-proof MC4 connectors providing secure connections for your solar wiring.',
      category: 'accessories',
      features: ['Models: BA21, BM21, BM31, CC4K, CC10K', 'Waterproof and weather-resistant', 'Secure and easy to install', 'Essential for safe solar connections'],
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749990425/MC4-Connectors-BM21-2_yja7oo.png',
      tags: ['Essential', 'Safety', 'Weatherproof'],
      inStock: true,
      rating: 4.5,
      specs: {
        models: 'BA21, BM21, BM31, CC4K, CC10K',
        protection: 'Waterproof',
        installation: 'Easy',
        safety: 'Secure Connections'
      }
    }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterBy === 'all' || product.category === filterBy;
      return matchesSearch && matchesFilter;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, sortBy, filterBy]);

  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl sm:text-8xl font-bold mb-6">Our Solar Products</h1>
          <p className="text-3xl max-w-3xl mx-auto">Discover Premium Solar Solutions Built for Nigeria. Explore our expertly crafted solar systems—designed to power your home or business reliably, efficiently, and affordably.</p>
          <div className="mt-8 flex justify-center">
            <Badge variant="secondary" className="text-2xl px-6 py-3">
              🛒 {cart.length} items in cart
            </Badge>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 text-xl py-6"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-48 text-xl py-6">
                  <Filter className="h-6 w-6 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-xl">All Categories</SelectItem>
                  <SelectItem value="residential" className="text-xl">Residential</SelectItem>
                  <SelectItem value="commercial" className="text-xl">Commercial</SelectItem>
                  <SelectItem value="industrial" className="text-xl">Industrial</SelectItem>
                  <SelectItem value="components" className="text-xl">Components</SelectItem>
                  <SelectItem value="appliances" className="text-xl">Appliances</SelectItem>
                  <SelectItem value="accessories" className="text-xl">Accessories</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-52 text-xl py-6">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name" className="text-xl">Name A-Z</SelectItem>
                  <SelectItem value="price-low" className="text-xl">Price: Low to High</SelectItem>
                  <SelectItem value="price-high" className="text-xl">Price: High to Low</SelectItem>
                  <SelectItem value="rating" className="text-xl">Highest Rated</SelectItem>
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
            {filteredAndSortedProducts.map((product) => <Card key={product.id} className={`hover:shadow-xl transition-all duration-300 ${product.highlight ? 'border-primary border-2 relative' : ''}`}>
                {product.highlight && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-lg font-medium">
                      Featured Package
                    </span>
                  </div>}
                
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.tags && (
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {product.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-lg px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xl">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-4xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-2xl text-muted-foreground line-through">₦{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  
                  {product.rating && (
                    <div className="mb-4 flex items-center gap-1">
                      <span className="text-yellow-500 text-xl">★</span>
                      <span className="text-lg font-medium">{product.rating}</span>
                      <span className="text-lg text-muted-foreground">(Reviews)</span>
                    </div>
                  )}
                  
                  {product.features && <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2 text-xl">Features:</h4>
                      <ul className="space-y-1 text-lg text-muted-foreground">
                        {product.features.slice(0, 3).map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>)}
                        {product.features.length > 3 && (
                          <li className="text-primary text-lg">+{product.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>}
                  
                  <div className="mb-4">
                    <span className="text-green-600 text-lg font-medium">✓ In Stock</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 text-lg py-6" 
                      variant="outline" 
                      asChild
                    >
                      <a href={`/product/${product.id}`}>
                        View Details
                      </a>
                    </Button>
                    <Button 
                      className="flex-1 text-lg py-6" 
                      onClick={() => addToCart(product)}
                      variant={product.highlight ? "default" : "outline"}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-4xl font-semibold text-muted-foreground mb-4">No products found</h3>
              <p className="text-muted-foreground text-2xl">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Cart Quick View */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button asChild size="lg" className="shadow-lg text-xl py-6 px-8">
            <a href="/cart">
              View Cart ({cart.length})
            </a>
          </Button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">Ready to Switch to Solar Energy?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-xl py-6 px-8">
              <a href="/services">See Our Services</a>
            </Button>

            <a
              href="tel:+2348063840230"
              className="px-8 py-6 text-xl font-medium rounded-md bg-white text-black border border-black hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              Speak to a Consultant
            </a>

            <a
              href="https://wa.me/2348063840230"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-6 text-xl font-medium rounded-md bg-white text-black border border-black hover:bg-yellow-400 hover:text-black transition duration-300"
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
