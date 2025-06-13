
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: [],
    installFor: '',
    timeframe: '',
    powerConsumption: '',
    buildingType: '',
    solarPlacement: '',
    roofMaterial: '',
    location: '',
    comments: '',
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
    
    setTimeout(() => {
      console.log('Quote request submitted:', formData);
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your request. We'll get back to you within 24 hours with your free quote."
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactMethod: [],
        installFor: '',
        timeframe: '',
        powerConsumption: '',
        buildingType: '',
        solarPlacement: '',
        roofMaterial: '',
        location: '',
        comments: '',
        consent: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const benefits = [
    'Reliability & Performance',
    '50% More Energy Output', 
    'Solar Material Financing',
    'Built Using N-type Mono',
    'In-Time Manufacturing',
    '24/7 Customer Support'
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
              <div className="mb-3">
                <small className="text-uppercase font-bold opacity-75">Improving The Performance Of Solar Energy.</small>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Discover Independence Through Using The Power Of Solar Panels!
              </h1>
              
              <p className="text-lg lg:text-xl mb-6">
                We offer products, solutions, and services across the entire energy value chain. We support our customers with affordable energy systems. Learn more by contact us
              </p>
              
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
                  {/* Installation Details */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <select
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="installFor"
                        name="installFor"
                        value={formData.installFor}
                        onChange={handleInputChange}
                        style={{ borderColor: '#d20500' }}
                      >
                        <option value="">Who will install system?</option>
                        <option value="local-contractor">Local contractor</option>
                        <option value="home">Home</option>
                        <option value="business">Business</option>
                      </select>
                    </div>
                    <div>
                      <select
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="timeframe"
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleInputChange}
                        style={{ borderColor: '#d20500' }}
                      >
                        <option value="">System completed by?</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="immediately">Immediately</option>
                        <option value="this-month">This Month</option>
                      </select>
                    </div>
                  </div>

                  {/* Usage & System Type */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="powerConsumption"
                        name="powerConsumption"
                        value={formData.powerConsumption}
                        onChange={handleInputChange}
                        placeholder="Monthly electric usage in kWh?"
                        style={{ borderColor: '#d20500' }}
                      />
                    </div>
                    <div>
                      <select
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="buildingType"
                        name="buildingType"
                        value={formData.buildingType}
                        onChange={handleInputChange}
                        style={{ borderColor: '#d20500' }}
                      >
                        <option value="">Solar system type?</option>
                        <option value="off-grid">OffGrid</option>
                        <option value="on-grid">OnGrid</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>

                  {/* Placement & Roof */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="solarPlacement"
                        name="solarPlacement"
                        value={formData.solarPlacement}
                        onChange={handleInputChange}
                        placeholder="Solar panels place?"
                        style={{ borderColor: '#d20500' }}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="roofMaterial"
                        name="roofMaterial"
                        value={formData.roofMaterial}
                        onChange={handleInputChange}
                        placeholder="Materials on your roof?"
                        style={{ borderColor: '#d20500' }}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <input
                        type="email"
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email Address"
                        required
                        style={{ borderColor: '#d20500' }}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        required
                        style={{ borderColor: '#d20500' }}
                      />
                    </div>
                  </div>

                  {/* Contact Method Checkboxes */}
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-3" style={{ color: '#d20500' }}>Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="contactAll"
                          name="contactMethod"
                          value="all"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="contactAll" className="text-sm">All</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="contactEmail"
                          name="contactMethod"
                          value="email"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="contactEmail" className="text-sm">Email</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="contactPhone"
                          name="contactMethod"
                          value="phone"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor="contactPhone" className="text-sm">Phone</label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full font-bold py-3 text-black rounded-lg transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#ffd901' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDEwJzQ4LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
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
