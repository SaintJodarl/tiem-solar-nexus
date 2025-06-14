
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    powerConsumption: '',
    installLocation: '',
    timeframe: '',
    solarPackage: '',
    budgetRange: '',
    installationLocation: '',
    buildingType: '',
    appliances: '',
    contactMethod: [],
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === 'contactMethod') {
      setFormData(prev => ({
        ...prev,
        contactMethod: checked 
          ? [...(prev.contactMethod as string[]), value]
          : (prev.contactMethod as string[]).filter(method => method !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted regarding your solar quote request.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Here you would send the data to info@tiemenergy.com
    setTimeout(() => {
      console.log('Quote request submitted to info@tiemenergy.com:', formData);
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your request. We'll get back to you within 24 hours with your free quote."
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        powerConsumption: '',
        installLocation: '',
        timeframe: '',
        solarPackage: '',
        budgetRange: '',
        installationLocation: '',
        buildingType: '',
        appliances: '',
        contactMethod: [],
        consent: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const benefits = [
    'Uninterrupted Power Supply',
    'Up to 70% Energy Savings',
    'Flexible Financing Options',
    'High-Efficiency Panels',
    'Fast & Professional Installation',
    'Continuous Support & Maintenance'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Form */}
      <section className="min-h-screen" style={{ background: 'linear-gradient(135deg, #d20500 0%, #ffd901 100%)' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen items-center">
            {/* Left Side - Hero Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Unlock Energy Freedom with Reliable Solar Power Solutions!
              </h1>
              
              <div className="space-y-4 text-lg lg:text-xl mb-6">
                <p>Tired of blackouts, rising energy costs, and unstable electricity? With a complete Solar Power System—Panel, Inverter & Battery—you take full control of your energy supply. Enjoy lower monthly bills and the confidence that comes with clean, reliable, and renewable power—right from your rooftop.</p>

                <p>At TIEM Energy, we deliver innovative products, tailored solutions, and expert services across the entire energy value chain—making solar both affordable and accessible.</p>

                <p>Ready to break free from power challenges?</p>
                <p>Fill out the form to get started on your journey to energy independence.</p>
              </div>
              
              {/* Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-white mr-3">✅</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-3 mr-4">
                    <span style={{ color: '#d20500' }}>📞</span>
                  </div>
                  <div>
                    <div className="font-bold">+2348063840230</div>
                    <div className="font-bold">+2348165539671</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-3 mr-4">
                    <span style={{ color: '#d20500' }}>✉️</span>
                  </div>
                  <div>
                    <div>info@tiemenergy.com</div>
                    <div>isupport@tiemenergy.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                <h2 className="text-center mb-6 text-2xl font-bold" style={{ color: '#d20500' }}>Request A Quote</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal & Contact Info */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Personal & Contact Info</h3>
                    
                    <input
                      type="text"
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name*"
                      required
                      style={{ borderColor: '#d20500' }}
                    />
                    
                    <input
                      type="email"
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email Address*"
                      required
                      style={{ borderColor: '#d20500' }}
                    />
                    
                    <input
                      type="tel"
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone Number*"
                      required
                      style={{ borderColor: '#d20500' }}
                    />
                    
                    <select
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="powerConsumption"
                      name="powerConsumption"
                      value={formData.powerConsumption}
                      onChange={handleInputChange}
                      style={{ borderColor: '#d20500' }}
                    >
                      <option value="">Daily/Monthly Power Consumption?</option>
                      <option value="low">Low Usage</option>
                      <option value="medium">Medium Usage</option>
                      <option value="heavy">Heavy Usage</option>
                      <option value="not-sure">I'm Not Sure</option>
                    </select>
                  </div>

                  {/* Installation Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Installation Details</h3>
                    
                    <select
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="installLocation"
                      name="installLocation"
                      value={formData.installLocation}
                      onChange={handleInputChange}
                      style={{ borderColor: '#d20500' }}
                    >
                      <option value="">Where Do You Want to Install Solar System?</option>
                      <option value="home">Home</option>
                      <option value="business">Business</option>
                      <option value="organization">Organization (e.g., School, Church, Mosque)</option>
                    </select>
                    
                    <select
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      style={{ borderColor: '#d20500' }}
                    >
                      <option value="">How Soon Do You Want to Install?</option>
                      <option value="immediately">Immediately</option>
                      <option value="this-month">This Month</option>
                      <option value="next-month">Next Month</option>
                      <option value="information">I Just Need Information</option>
                    </select>
                    
                    <select
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="solarPackage"
                      name="solarPackage"
                      value={formData.solarPackage}
                      onChange={handleInputChange}
                      style={{ borderColor: '#d20500' }}
                    >
                      <option value="">Select Your Preferred Solar Package</option>
                      <option value="residential">Residential (Home Use)</option>
                      <option value="commercial">Commercial (Business Use)</option>
                      <option value="industrial">Industrial (Large-Scale Systems)</option>
                      <option value="not-sure">Not Sure Yet – Need Expert Opinion</option>
                    </select>
                    
                    <select
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      style={{ borderColor: '#d20500' }}
                    >
                      <option value="">Select Your Estimated Budget Range</option>
                      <option value="under-500k">Under ₦500,000</option>
                      <option value="500k-1m">₦500,000 – ₦1,000,000</option>
                      <option value="1m-2m">₦1,000,000 – ₦2,000,000</option>
                      <option value="2m-5m">₦2,000,000 – ₦5,000,000</option>
                      <option value="above-5m">Above ₦5,000,000</option>
                      <option value="flexible">Flexible Budget – I Want the Best Solution</option>
                    </select>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Additional Details</h3>
                    
                    <textarea
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="installationLocation"
                      name="installationLocation"
                      value={formData.installationLocation}
                      onChange={handleInputChange}
                      placeholder="Installation Location (City/Town, State)"
                      rows={2}
                      style={{ borderColor: '#d20500' }}
                    />
                    
                    <select
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="buildingType"
                      name="buildingType"
                      value={formData.buildingType}
                      onChange={handleInputChange}
                      style={{ borderColor: '#d20500' }}
                    >
                      <option value="">Building Type</option>
                      <option value="bungalow">Bungalow</option>
                      <option value="story-building">Story Building</option>
                      <option value="shop">Shop / Store</option>
                      <option value="remote">Remote Location (e.g., Factory, Farm, Rural Area, Project Site)</option>
                    </select>
                    
                    <textarea
                      className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                      id="appliances"
                      name="appliances"
                      value={formData.appliances}
                      onChange={handleInputChange}
                      placeholder="List Your Electronics/Appliances/Gadgets"
                      rows={3}
                      style={{ borderColor: '#d20500' }}
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Preferred Contact Method</h3>
                    <div className="flex flex-wrap gap-4">
                      {['Phone (Call/SMS)', 'Email', 'WhatsApp', 'All'].map((method) => (
                        <div key={method} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`contact-${method}`}
                            name="contactMethod"
                            value={method.toLowerCase()}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                          />
                          <label htmlFor={`contact-${method}`} className="text-sm">{method}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="text-sm">
                      I agree to be contacted regarding my solar quote request.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full font-bold py-3 text-black rounded-lg transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#ffd901' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'SUBMIT'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Here Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#d20500' }}>Find Us Here</h2>
            <p className="text-lg text-gray-600">Visit our office for in-person consultations and support</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4233121208436!2d3.3205566!3d6.594454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d94a47a52b7%3A0x42521bc1293780e2!2s10%20Toyin%20Crescent%2C%20Iju%20Ishaga%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1718386780000!5m2!1sen!2sng"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TIEM Energy Office Location"
                  className="w-full"
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">📍</span>
                  <h3 className="text-xl font-semibold" style={{ color: '#d20500' }}>Our Office Location</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  10, Toyin Crescent via Iju Ishaga, Agege, Lagos State, Nigeria
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  <div className="flex items-center">
                    <span className="mr-2">🕒</span>
                    <span className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span className="text-sm text-gray-600">+234 806 384 0230</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
