import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours."
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Speak with our solar experts today for a FREE consultation and a tailored quote designed to meet your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Your full name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
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
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Tell us about your solar energy needs..." 
                    className="min-h-[120px]" 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact info sections remain the same */}
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a href="tel:+2348063840230" className="block text-primary hover:underline">
                        +234 806 384 0230
                      </a>
                      <a href="tel:+2348165539671" className="block text-primary hover:underline">
                        +234 816 553 9671
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@tiemenergy.com" className="text-primary hover:underline">
                      info@tiemenergy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749839392/american-public-power-association-fm5_vCUa-Bc-unsplash_dxqbjl.jpg"
                    alt="Customer service representative"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-3">Quick Response Guarantee</h4>
                <p className="text-muted-foreground mb-4">We respond to all inquiries within minutes during business hours and provide free consultations for all potential customers.</p>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="tel:+2348063840230">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
