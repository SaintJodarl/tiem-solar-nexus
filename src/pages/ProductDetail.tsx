
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Star, Shield, Truck, Zap } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  // This would typically come from a context or API
  const products = [{
    id: 1,
    name: '1kVA Solar Inverter',
    price: 750000,
    originalPrice: 850000,
    description: 'Perfect for small homes and apartments with basic power needs. This compact and efficient solar inverter provides reliable power backup for essential appliances.',
    category: 'residential',
    features: ['Basic lighting', 'Phone charging', 'Small appliances', 'LED TV', 'Fan operation'],
    image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749844370/Growatt_5_ztwzea.webp',
    gallery: [
      'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749844370/Growatt_5_ztwzea.webp',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop'
    ],
    tags: ['New Arrival'],
    inStock: true,
    rating: 4.5,
    reviews: 24,
    specs: {
      power: '1kVA (1000W)',
      batteryType: 'Lithium Ion',
      batteryCapacity: '100Ah',
      solarPanels: '2 x 200W Monocrystalline',
      warranty: '2 years comprehensive',
      installation: 'Free installation included',
      dimensions: '45cm x 30cm x 15cm',
      weight: '15kg'
    },
    benefits: [
      'Reduces electricity bills by up to 80%',
      'Silent operation',
      'Zero emissions',
      'Low maintenance requirements',
      'Grid-tie capability'
    ]
  }];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const addToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.name} added to your cart.`
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="mb-6">
            <a href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </a>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg h-96 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.tags && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              {product.gallery && product.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.gallery.map((image, index) => (
                    <div key={index} className="h-20 overflow-hidden rounded border cursor-pointer hover:border-primary">
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <Badge variant={product.inStock ? "secondary" : "destructive"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">
                  ₦{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">
                    Save ₦{(product.originalPrice - product.price).toLocaleString()}
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground text-lg">{product.description}</p>

              <div className="flex items-center gap-4 py-4 border-y">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm">Free Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label htmlFor="quantity" className="font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={addToCart}
                    disabled={!product.inStock}
                  >
                    Add to Cart - ₦{(product.price * quantity).toLocaleString()}
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://wa.link/zbnkvi" target="_blank" rel="noopener noreferrer">
                      WhatsApp Order
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features & Benefits</TabsTrigger>
                <TabsTrigger value="installation">Installation & Support</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b">
                          <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Features & Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">What it Powers:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-1">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="installation" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Installation & Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Professional Installation Included</h4>
                      <p className="text-muted-foreground">
                        Our certified engineers will handle the complete installation process, ensuring optimal performance and safety compliance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What's Included:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Site assessment and system design</li>
                        <li>Professional installation by certified engineers</li>
                        <li>System testing and commissioning</li>
                        <li>User training and documentation</li>
                        <li>2-year comprehensive warranty</li>
                        <li>24/7 technical support</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
