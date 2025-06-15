
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Shield, Truck, Clock, ArrowLeft, CreditCard, Smartphone, Building, Bitcoin } from 'lucide-react';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Delivery Address
    address: '',
    city: '',
    state: '',
    postalCode: '',
    
    // Payment & Preferences
    paymentMethod: '',
    installationDate: '',
    specialInstructions: '',
    
    // Agreements
    agreeToTerms: false,
    subscribeNewsletter: false
  });
  
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: 'Emerald Package - 3.5kVA',
      price: 3441750,
      quantity: 1
    }
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    const requiredFields = {
      firstName: 'First name is required',
      lastName: 'Last name is required',
      email: 'Email is required',
      phone: 'Phone number is required',
      address: 'Address is required',
      city: 'City is required',
      state: 'State is required',
      paymentMethod: 'Payment method is required'
    };
    
    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!formData[field].trim()) {
        newErrors[field] = message;
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Terms agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Order submitted:', formData);
      setOrderPlaced(true);
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your order. We'll contact you within 24 hours."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="text-6xl mb-6">✅</div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Order Confirmed!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for choosing TIEM Energy! We've received your order and will contact you within 24 hours to arrange installation.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
                  <ul className="text-sm text-green-700 space-y-1 text-left">
                    <li>• Our team will call you within 24 hours to confirm details</li>
                    <li>• We'll schedule a convenient installation date</li>
                    <li>• Our certified engineers will handle the complete setup</li>
                    <li>• You'll receive training on operating your new solar system</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <Button asChild>
                    <a href="/products">Continue Shopping</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/">Return Home</a>
                  </Button>
                </div>
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Secure Checkout</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete your solar energy purchase with confidence
          </p>
          <div className="mt-6">
            <Button variant="secondary" asChild>
              <a href="/cart">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-green-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <Shield className="h-5 w-5" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Truck className="h-5 w-5" />
              <span>Free Installation</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Clock className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className={errors.firstName ? 'border-red-500' : ''}
                        />
                        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className={errors.lastName ? 'border-red-500' : ''}
                        />
                        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 XXX XXX XXXX"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Installation Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your complete address"
                        className={`min-h-[80px] ${errors.address ? 'border-red-500' : ''}`}
                      />
                      {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          className={errors.city ? 'border-red-500' : ''}
                        />
                        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="State"
                          className={errors.state ? 'border-red-500' : ''}
                        />
                        {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="Postal Code"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method *</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <Button
                        type="button"
                        variant={formData.paymentMethod === 'card' ? 'default' : 'outline'}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                        className="p-4 h-auto"
                      >
                        <div className="text-center">
                          <CreditCard className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm">Debit/Credit Card</div>
                        </div>
                      </Button>
                      <Button
                        type="button"
                        variant={formData.paymentMethod === 'bank' ? 'default' : 'outline'}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'bank' }))}
                        className="p-4 h-auto"
                      >
                        <div className="text-center">
                          <Building className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm">Bank Transfer</div>
                        </div>
                      </Button>
                      <Button
                        type="button"
                        variant={formData.paymentMethod === 'mobile' ? 'default' : 'outline'}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'mobile' }))}
                        className="p-4 h-auto"
                      >
                        <div className="text-center">
                          <Smartphone className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm">Mobile Money</div>
                        </div>
                      </Button>
                      <Button
                        type="button"
                        variant={formData.paymentMethod === 'crypto' ? 'default' : 'outline'}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'crypto' }))}
                        className="p-4 h-auto"
                      >
                        <div className="text-center">
                          <Bitcoin className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm">Cryptocurrency</div>
                        </div>
                      </Button>
                    </div>
                    {errors.paymentMethod && <p className="text-sm text-red-500 mt-2">{errors.paymentMethod}</p>}
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="installationDate">Preferred Installation Date</Label>
                      <Input
                        id="installationDate"
                        name="installationDate"
                        type="date"
                        value={formData.installationDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialInstructions">Special Instructions</Label>
                      <Textarea
                        id="specialInstructions"
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleInputChange}
                        placeholder="Any special requirements or instructions for installation..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Newsletter */}
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked)}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-5">
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> *
                      </Label>
                    </div>
                    {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) => handleCheckboxChange('subscribeNewsletter', checked)}
                      />
                      <Label htmlFor="subscribeNewsletter" className="text-sm leading-5">
                        Subscribe to our newsletter for solar energy tips and special offers
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Place Order - ₦${subtotal.toLocaleString()}`}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₦{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Installation:</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Warranty:</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span className="text-primary">₦{subtotal.toLocaleString()}</span>
                    </div>
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

export default Checkout;
