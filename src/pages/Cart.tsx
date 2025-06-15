import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Emerald Package - 3.5kVA',
      price: 3441750,
      originalPrice: 3800000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      inStock: true,
      savings: 358250
    },
    {
      id: 2,
      name: '2.5kVA Solar System',
      price: 1650000,
      quantity: 1,
      image: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749845097/Complete-Solar-System-3kw-off-Grid-Solar-Energy-System_q7vb24.avif',
      inStock: true
    }
  ]);
  
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const { toast } = useToast();

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    toast({
      title: "Cart Updated",
      description: "Item quantity has been updated."
    });
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart."
    });
  };

  const applyCoupon = () => {
    // Mock coupon validation
    const validCoupons = {
      'SOLAR10': { discount: 0.1, type: 'percentage', description: '10% off your order' },
      'SAVE50K': { discount: 50000, type: 'fixed', description: '₦50,000 off your order' },
      'NEWUSER': { discount: 0.15, type: 'percentage', description: '15% off for new users' }
    };

    if (validCoupons[couponCode.toUpperCase()]) {
      setAppliedCoupon({
        code: couponCode.toUpperCase(),
        ...validCoupons[couponCode.toUpperCase()]
      });
      toast({
        title: "Coupon Applied!",
        description: `${validCoupons[couponCode.toUpperCase()].description} has been applied.`
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is not valid.",
        variant: "destructive"
      });
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    toast({
      title: "Coupon Removed",
      description: "Coupon has been removed from your order."
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((sum, item) => sum + ((item.savings || 0) * item.quantity), 0);
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percentage') {
      discount = subtotal * appliedCoupon.discount;
    } else {
      discount = appliedCoupon.discount;
    }
  }
  
  const total = subtotal - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <ShoppingBag className="h-32 w-32 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-4xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6 text-xl">
                  Looks like you haven't added any solar products to your cart yet.
                </p>
                <Button asChild size="lg" className="text-xl py-6">
                  <a href="/products">Continue Shopping</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl sm:text-8xl font-bold mb-6">Your Cart</h1>
          <p className="text-3xl max-w-3xl mx-auto">
            Review your selected solar products before checkout
          </p>
          <div className="mt-6">
            <Button variant="secondary" asChild size="lg" className="text-xl py-6">
              <a href="/products">
                <ArrowLeft className="h-6 w-6 mr-2" />
                Continue Shopping
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Cart Items ({cartItems.length})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-2xl">{item.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-primary font-bold text-2xl">₦{item.price.toLocaleString()}</p>
                          {item.originalPrice && (
                            <p className="text-xl text-muted-foreground line-through">
                              ₦{item.originalPrice.toLocaleString()}
                            </p>
                          )}
                        </div>
                        {item.savings && (
                          <p className="text-xl text-green-600">You save ₦{item.savings.toLocaleString()}</p>
                        )}
                        <p className={`text-xl ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-lg p-3"
                        >
                          <Minus className="h-6 w-6" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-20 text-center text-xl py-3"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-lg p-3"
                        >
                          <Plus className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-2xl">₦{(item.price * item.quantity).toLocaleString()}</p>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="mt-2 text-lg py-3"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Coupon Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Discount Code</CardTitle>
                </CardHeader>
                <CardContent>
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div>
                        <p className="font-medium text-green-800 text-xl">Coupon Applied: {appliedCoupon.code}</p>
                        <p className="text-lg text-green-600">{appliedCoupon.description}</p>
                      </div>
                      <Button variant="outline" size="sm" onClick={removeCoupon} className="text-lg py-3">
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="text-xl py-6"
                      />
                      <Button onClick={applyCoupon} disabled={!couponCode.trim()} className="text-lg px-6">
                        Apply
                      </Button>
                    </div>
                  )}
                  <div className="mt-3 text-lg text-muted-foreground">
                    <p>Try these codes: SOLAR10, SAVE50K, NEWUSER</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-3xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-xl">
                    <span>Subtotal:</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-green-600 text-xl">
                      <span>Product Savings:</span>
                      <span>-₦{totalSavings.toLocaleString()}</span>
                    </div>
                  )}
                  
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600 text-xl">
                      <span>Coupon Discount ({appliedCoupon.code}):</span>
                      <span>-₦{discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-xl">
                    <span>Installation:</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  
                  <div className="flex justify-between text-xl">
                    <span>Delivery:</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-2xl">
                      <span>Total:</span>
                      <span className="text-primary">₦{total.toLocaleString()}</span>
                    </div>
                    {(totalSavings + discount) > 0 && (
                      <p className="text-lg text-green-600 text-right">
                        Total Savings: ₦{(totalSavings + discount).toLocaleString()}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Button className="w-full text-xl py-6" size="lg" asChild>
                      <a href="/checkout">Proceed to Checkout</a>
                    </Button>
                    <Button variant="outline" className="w-full text-xl py-6" asChild>
                      <a href="/products">Continue Shopping</a>
                    </Button>
                  </div>
                  
                  <div className="text-center pt-4 border-t">
                    <p className="text-lg text-muted-foreground mb-2">Need help with your order?</p>
                    <Button variant="outline" size="sm" asChild className="text-lg py-3">
                      <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">
                        WhatsApp Support
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
