
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
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
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Quote request submitted:', formData);
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your request. We'll get back to you within 24 hours with your free quote."
      });
      
      // Reset form
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
      setIsSubmitting(false);
    }, 1000);
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
      
      {/* Hero Contact Section */}
      <section className="min-h-screen d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #d20500 0%, #ffd901 100%)' }}>
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            {/* Left Side - Hero Content */}
            <div className="col-lg-6 text-white p-5">
              <div className="mb-3">
                <small className="text-uppercase fw-bold opacity-75">Improving The Performance Of Solar Energy.</small>
              </div>
              
              <h1 className="display-4 fw-bold mb-4">
                Break Free from the National Grid—Take Control with Solar Energy
              </h1>
              
              <p className="lead mb-4">
                You don't have to depend solely on the national grid. Say goodbye to blackouts and unstable supply—harness the power of dependable solar energy for lasting independence. We offer products, solutions, and services across the entire solar energy value chain. We support our customers with affordable and reliable energy systems. Learn more by contacting us.
              </p>
              
              {/* Feature List */}
              <div className="row mb-5">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2">✅</span>
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-telephone-fill me-2"></i>
                    <div>
                      <div>📞 +2348063840230</div>
                      <div>📞 +2348165539671</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-fill me-2"></i>
                    <div>
                      <div>✉️ info@tiemenergy.com</div>
                      <div>✉️ isupport@tiemenergy.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  <span>📍 10, Toyin Crescent via Iju Ishaga, Agege, Lagos State.</span>
                </div>
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div className="col-lg-6 p-5">
              <div className="bg-white rounded-4 shadow-lg p-4">
                <h2 className="text-center mb-4 fw-bold text-dark">Request A Quote</h2>
                
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                  {/* Personal & Contact Info */}
                  <div className="mb-4">
                    <h5 className="text-muted mb-3">Personal & Contact Info</h5>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            required
                          />
                          <label htmlFor="fullName">Full Name *</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Your Phone Number"
                            required
                          />
                          <label htmlFor="phone">Your Phone Number *</label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email Address"
                          required
                        />
                        <label htmlFor="email">Your Email Address *</label>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <select
                        className="form-select"
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleInputChange}
                      >
                        <option value="">Choose...</option>
                        <option value="all">All Methods</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                      <label htmlFor="contactMethod">Preferred Contact Method</label>
                    </div>
                  </div>

                  {/* Installation Details */}
                  <div className="mb-4">
                    <h5 className="text-muted mb-3">Installation Details</h5>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="installFor"
                            name="installFor"
                            value={formData.installFor}
                            onChange={handleInputChange}
                          >
                            <option value="">Choose...</option>
                            <option value="home">Home</option>
                            <option value="business">Business</option>
                            <option value="organization">Organization</option>
                          </select>
                          <label htmlFor="installFor">Who will be install system?</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="timeframe"
                            name="timeframe"
                            value={formData.timeframe}
                            onChange={handleInputChange}
                          >
                            <option value="">Choose...</option>
                            <option value="immediately">Immediately</option>
                            <option value="this-month">This Month</option>
                            <option value="next-month">Next Month</option>
                            <option value="information">I Just Need Information</option>
                          </select>
                          <label htmlFor="timeframe">System completed by?</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="powerConsumption"
                            name="powerConsumption"
                            value={formData.powerConsumption}
                            onChange={handleInputChange}
                          >
                            <option value="">Choose...</option>
                            <option value="low">Low Usage</option>
                            <option value="medium">Medium Usage</option>
                            <option value="heavy">Heavy Usage</option>
                            <option value="not-sure">I'm Not Sure</option>
                          </select>
                          <label htmlFor="powerConsumption">Monthly electric usage in kWh?</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="buildingType"
                            name="buildingType"
                            value={formData.buildingType}
                            onChange={handleInputChange}
                          >
                            <option value="">Choose...</option>
                            <option value="bungalow">Bungalow</option>
                            <option value="story-building">Story Building</option>
                            <option value="shop-store">Shop / Store</option>
                            <option value="remote-location">Remote Location</option>
                          </select>
                          <label htmlFor="buildingType">Solar system type?</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="mb-4">
                    <h5 className="text-muted mb-3">Additional Details (Optional)</h5>
                    
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Location / Address"
                      />
                      <label htmlFor="location">Location / Address (City, Town, State)</label>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        placeholder="Additional Comments"
                        style={{ height: '100px' }}
                      ></textarea>
                      <label htmlFor="comments">Additional Comments or Requirements</label>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="consent">
                      I agree to be contacted regarding my solar quote request.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn w-100 fw-bold py-3"
                    style={{ 
                      backgroundColor: '#ffd901', 
                      color: '#000',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d20500';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffd901';
                      e.currentTarget.style.color = '#000';
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'SEND My Free Quote'}
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
