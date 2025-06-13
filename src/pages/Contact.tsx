
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
      
      {/* Hero Contact Section */}
      <section className="min-h-screen" style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #689F38 100%)' }}>
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            {/* Left Side - Hero Content */}
            <div className="col-lg-6 text-white p-5">
              <div className="mb-3">
                <small className="text-uppercase fw-bold opacity-75">Improving The Performance Of Solar Energy.</small>
              </div>
              
              <h1 className="display-4 fw-bold mb-4">
                Discover Independence Through Using The Power Of Solar Panels!
              </h1>
              
              <p className="lead mb-4">
                We offer products, solutions, and services across the entire energy value chain. We support our customers with affordable energy systems. Learn more by contact us
              </p>
              
              {/* Feature List */}
              <div className="row mb-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <span className="text-white me-2">✅</span>
                      <span>{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="bg-white rounded-circle p-2 me-3">
                      <span className="text-success">📞</span>
                    </div>
                    <div>
                      <div className="fw-bold">+2348063840230</div>
                      <div className="fw-bold">+2348165539671</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-white rounded-circle p-2 me-3">
                      <span className="text-success">✉️</span>
                    </div>
                    <div>
                      <div>info@tiemenergy.com</div>
                      <div>isupport@tiemenergy.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mb-4">
                <h5 className="mb-3">Find Us Here</h5>
                <div className="bg-white rounded-3 p-2">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDEwJzQ4LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%" 
                    height="200" 
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TIEM Energy Office Location"
                  ></iframe>
                  <p className="text-dark text-center mt-2 mb-0 small">
                    📍 10, Toyin Crescent via Iju Ishaga, Agege, Lagos State.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Compact Quote Form */}
            <div className="col-lg-6 p-4">
              <div className="bg-white rounded-4 shadow-lg p-4">
                <h2 className="text-center mb-4 fw-bold text-dark">Request A Quote</h2>
                
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                  {/* Top Row - Installation Details */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="installFor"
                          name="installFor"
                          value={formData.installFor}
                          onChange={handleInputChange}
                        >
                          <option value="">Choose...</option>
                          <option value="local-contractor">Local contractor</option>
                          <option value="home">Home</option>
                          <option value="business">Business</option>
                        </select>
                        <label htmlFor="installFor">Who will be install system?</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="timeframe"
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleInputChange}
                        >
                          <option value="">Choose...</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="immediately">Immediately</option>
                          <option value="this-month">This Month</option>
                        </select>
                        <label htmlFor="timeframe">System completed by?</label>
                      </div>
                    </div>
                  </div>

                  {/* Second Row - Usage & System Type */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="powerConsumption"
                          name="powerConsumption"
                          value={formData.powerConsumption}
                          onChange={handleInputChange}
                          placeholder="1254 kWh"
                        />
                        <label htmlFor="powerConsumption">Monthly electric usage in kWh?</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="buildingType"
                          name="buildingType"
                          value={formData.buildingType}
                          onChange={handleInputChange}
                        >
                          <option value="">Choose...</option>
                          <option value="off-grid">OffGrid</option>
                          <option value="on-grid">OnGrid</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                        <label htmlFor="buildingType">Solar system type?</label>
                      </div>
                    </div>
                  </div>

                  {/* Third Row - Placement & Roof */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="solarPlacement"
                          name="solarPlacement"
                          value={formData.solarPlacement}
                          onChange={handleInputChange}
                          placeholder="Huge Farm"
                        />
                        <label htmlFor="solarPlacement">Solar panels place?</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="roofMaterial"
                          name="roofMaterial"
                          value={formData.roofMaterial}
                          onChange={handleInputChange}
                          placeholder="Comp shingle"
                        />
                        <label htmlFor="roofMaterial">Materials on your roof?</label>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter Mail Address"
                          required
                        />
                        <label htmlFor="email">Your Email Address</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter Phone Number"
                          required
                        />
                        <label htmlFor="phone">Your Phone Number</label>
                      </div>
                    </div>
                  </div>

                  {/* Contact Method Checkboxes */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Preferred Contact Method</label>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="contactAll"
                          name="contactMethod"
                          value="all"
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="contactAll">All</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="contactEmail"
                          name="contactMethod"
                          value="email"
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="contactEmail">Email</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="contactPhone"
                          name="contactMethod"
                          value="phone"
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="contactPhone">Phone</label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn w-100 fw-bold py-3 text-white"
                    style={{ 
                      backgroundColor: '#8BC34A',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#689F38';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#8BC34A';
                    }}
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

      <Footer />
    </div>
  );
};

export default Contact;
