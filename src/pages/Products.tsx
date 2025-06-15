
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

  const products = [{
    id: 1,
    name: '1kVA Solar Inverter',
    price: 750000,
    originalPrice: 850000,
    description: 'Perfect for small homes and apartments with basic power needs.',
    category: 'residential',
    features: ['Basic lighting', 'Phone charging', 'Small appliances'],
    image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749844370/Growatt_5_ztwzea.webp',
    tags: ['New Arrival'],
    inStock: true,
    rating: 4.5,
    specs: {
      power: '1kVA',
      batteryType: 'Lithium',
      warranty: '2 years',
      installation: 'Included'
    }
  }, {
    id: 2,
    name: '2.5kVA Solar System',
    price: 1650000,
    description: 'Ideal for medium-sized homes with moderate power consumption.',
    category: 'residential',
    features: ['LED TV', 'Refrigerator', 'Fans', 'Lighting', 'Phone charging'],
    image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749845097/Complete-Solar-System-3kw-off-Grid-Solar-Energy-System_q7vb24.avif',
    tags: ['Popular'],
    inStock: true,
    rating: 4.7,
    specs: {
      power: '2.5kVA',
      batteryType: 'Lithium',
      warranty: '3 years',
      installation: 'Included'
    }
  }, {
    id: 3,
    name: 'Emerald Package - 3.5kVA',
    price: 3441750,
    originalPrice: 3800000,
    description: '3KVA with 2 batteries - Complete home solution',
    category: 'residential',
    features: ['6 Solar Panels (480W)', 'Energy-saving fridge', 'TV & Sound System', 'Fans & Decoders', 'Lights & Charging Points'],
    highlight: true,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
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
  }, {
    id: 4,
    name: '5kVA Solar System',
    price: 4500000,
    description: 'Perfect for larger homes and small businesses.',
    category: 'commercial',
    features: ['Multiple appliances', 'AC units', 'Business equipment'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    tags: ['Commercial'],
    inStock: true,
    rating: 4.6,
    specs: {
      power: '5kVA',
      batteryType: 'Lithium',
      warranty: '5 years',
      installation: 'Included'
    }
  }, {
    id: 5,
    name: '10kVA Solar System',
    price: 8500000,
    description: 'Commercial-grade system for businesses and large homes.',
    category: 'commercial',
    features: ['Industrial equipment', 'Multiple AC units', 'Commercial appliances'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    tags: ['Industrial'],
    inStock: true,
    rating: 4.8,
    specs: {
      power: '10kVA',
      batteryType: 'Lithium',
      warranty: '7 years',
      installation: 'Included'
    }
  }, {
    id: 6,
    name: '15kVA Solar System',
    price: 12000000,
    description: 'Heavy-duty commercial and industrial applications.',
    category: 'industrial',
    features: ['Factory equipment', 'Large commercial spaces', 'Industrial machinery'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
    tags: ['Industrial', 'Heavy Duty'],
    inStock: false,
    rating: 4.7,
    specs: {
      power: '15kVA',
      batteryType: 'Lithium',
      warranty: '10 years',
      installation: 'Professional Required'
    }
  }];

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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Solar Products</h1>
          <p className="text-xl max-w-3xl mx-auto">Discover Premium Solar Solutions Built for Nigeria. Explore our expertly crafted solar systems—designed to power your home or business reliably, efficiently, and affordably.</p>
          <div className="mt-8 flex justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
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
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
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
            {filteredAndSortedProducts.map((product) => <Card key={product.id} className={`hover:shadow-xl transition-all duration-300 ${product.highlight ? 'border-primary border-2 relative' : ''} ${!product.inStock ? 'opacity-75' : ''}`}>
                {product.highlight && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
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
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
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
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₦{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">₦{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  
                  {product.rating && (
                    <div className="mb-4 flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">(Reviews)</span>
                    </div>
                  )}
                  
                  {product.features && <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {product.features.slice(0, 3).map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>)}
                        {product.features.length > 3 && (
                          <li className="text-primary text-sm">+{product.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>}
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      variant="outline" 
                      asChild
                    >
                      <a href={`/product/${product.id}`}>
                        View Details
                      </a>
                    </Button>
                    <Button 
                      className="flex-1" 
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      variant={product.highlight ? "default" : "outline"}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Cart Quick View */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button asChild size="lg" className="shadow-lg">
            <a href="/cart">
              View Cart ({cart.length})
            </a>
          </Button>
        </div>
      )}

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
