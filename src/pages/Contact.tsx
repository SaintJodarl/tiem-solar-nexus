
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: '',
    installFor: '',
    timeframe: '',
    powerConsumption: '',
    buildingType: '',
    location: '',
    comments: '',
    consent: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted regarding your solar quote request.",
        variant: "destructive"
      });
      return;
    }
    console.log('Quote request submitted:', formData);
    toast({
      title: "Quote Request Sent!",
      description: "Thank you for your request. We'll get back to you within 24 hours with your free quote."
    });
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      contactMethod: '',
      installFor: '',
      timeframe: '',
      powerConsumption: '',
      buildingType: '',
      location: '',
      comments: '',
      consent: false
    });
  };

  const features = [
    'Energy Independence',
    'Massive Cost Savings',
    'Reliable During Outages',
    'Eco-Friendly & Sustainable',
    'Low Maintenance, High Durability',
    'Increase Property Value'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Break Free from the National Grid—Take Control with Solar Energy
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              You don't have to depend solely on the national grid. Say goodbye to blackouts and unstable supply—harness the power of dependable solar energy for lasting independence. We offer products, solutions, and services across the entire solar energy value chain. We support our customers with affordable and reliable energy systems. Learn more by contacting us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-2">
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span>📞 +2348063840230</span>
                <span>📞 +2348165539671</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <span>✉️ info@tiemenergy.com</span>
                <span>✉️ isupport@tiemenergy.com</span>
              </div>
              <p>📍 10, Toyin Crescent via Iju Ishaga, Agege, Lagos State.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Request A Quote</CardTitle>
                <CardDescription>
                  Fill out the form below to get your free solar energy quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal & Contact Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal & Contact Info</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleInputChange} 
                        placeholder="Enter your full name"
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="Enter your email address"
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Your Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel"
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="+234 XXX XXX XXXX"
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                      <Select onValueChange={(value) => handleSelectChange('contactMethod', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Methods</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Installation Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Installation Details</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="installFor">Who Do You Want to Install the System For?</Label>
                      <Select onValueChange={(value) => handleSelectChange('installFor', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select installation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="organization">Organization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeframe">How Soon Do You Want to Install?</Label>
                      <Select onValueChange={(value) => handleSelectChange('timeframe', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="this-month">This Month</SelectItem>
                          <SelectItem value="next-month">Next Month</SelectItem>
                          <SelectItem value="information">I Just Need Information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="powerConsumption">Daily/Monthly Power Consumption?</Label>
                      <Select onValueChange={(value) => handleSelectChange('powerConsumption', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select power consumption level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low Usage</SelectItem>
                          <SelectItem value="medium">Medium Usage</SelectItem>
                          <SelectItem value="heavy">Heavy Usage</SelectItem>
                          <SelectItem value="not-sure">I'm Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="buildingType">Building Type</Label>
                      <Select onValueChange={(value) => handleSelectChange('buildingType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select building type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bungalow">Bungalow</SelectItem>
                          <SelectItem value="story-building">Story Building</SelectItem>
                          <SelectItem value="shop-store">Shop / Store</SelectItem>
                          <SelectItem value="remote-location">Remote Location (e.g., Farm, Village, Project Site)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Additional Details (Optional)</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location / Address (City, Town, State)</Label>
                      <Input 
                        id="location" 
                        name="location" 
                        value={formData.location} 
                        onChange={handleInputChange} 
                        placeholder="Enter your location"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comments">Additional Comments or Requirements</Label>
                      <Textarea 
                        id="comments" 
                        name="comments" 
                        value={formData.comments} 
                        onChange={handleInputChange} 
                        placeholder="Tell us about any specific requirements or questions you have..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="consent" 
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked === true }))}
                    />
                    <Label htmlFor="consent" className="text-sm">
                      I agree to be contacted regarding my solar quote request.
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#ffd901] hover:bg-[#d20500] text-black hover:text-white font-bold py-3 text-lg"
                  >
                    SEND My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
