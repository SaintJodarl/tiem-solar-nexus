
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FeaturedProducts = () => {
  const [cart, setCart] = useState<number[]>([]);
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: 'Premium 540W Solar Panel',
      description: 'High-efficiency monocrystalline solar panel with 25-year warranty',
      price: '₦145,000',
      originalPrice: '₦165,000',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      badge: 'Best Seller',
      rating: 4.9,
    },
    {
      id: 2,
      name: '5KVA Hybrid Inverter',
      description: 'Smart hybrid inverter with MPPT charge controller built-in',
      price: '₦275,000',
      originalPrice: '₦295,000',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749844370/Growatt_5_ztwzea.webp',
      badge: 'Featured',
      rating: 4.8,
    },
    {
      id: 3,
      name: '200Ah Lithium Battery',
      description: 'Long-life LiFePO4 battery with 6000+ cycle life',
      price: '₦320,000',
      originalPrice: '₦350,000',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749844789/LI-WALL-24V-200AH-lithium-battery-02_sg1pu4.jpg',
      badge: 'New',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Complete 3KW System',
      description: 'All-in-one solar system perfect for 2-bedroom apartments',
      price: '₦650,000',
      originalPrice: '₦750,000',
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749845097/Complete-Solar-System-3kw-off-Grid-Solar-Energy-System_q7vb24.avif',
      badge: 'Bundle Deal',
      rating: 4.7,
    },
  ];

  const addToCart = (productId: number, productName: string) => {
    setCart([...cart, productId]);
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Solar Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked premium solar products offering the best value for Nigerian homes and businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden">
              <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
              
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-medium">
                    Save ₦{parseInt(product.originalPrice.replace('₦', '').replace(',', '')) - parseInt(product.price.replace('₦', '').replace(',', ''))}
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground line-clamp-1">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2">
                  {product.description}
                </CardDescription>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex text-accent text-sm">
                    {'★'.repeat(Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 hover:bg-[#ffd901] hover:text-black" 
                    onClick={() => addToCart(product.id, product.name)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
