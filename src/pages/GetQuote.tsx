
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const GetQuote: React.FC = () => {
  // same fields as src/pages/Contact.tsx formData
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    powerConsumption: "",
    installLocation: "",
    timeframe: "",
    solarPackage: "",
    budgetRange: "",
    installationLocation: "",
    buildingType: "",
    appliances: "",
    contactMethod: [] as string[],
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim())
      newErrors.email = "Email address is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.powerConsumption)
      newErrors.powerConsumption = "Please select your power consumption";
    if (!formData.installLocation)
      newErrors.installLocation = "Please select installation location";
    if (!formData.timeframe)
      newErrors.timeframe = "Please select your timeframe";
    if (!formData.solarPackage)
      newErrors.solarPackage = "Please select a solar package";
    if (!formData.budgetRange)
      newErrors.budgetRange = "Please select your budget range";
    if (!formData.installationLocation.trim())
      newErrors.installationLocation = "Installation location is required";
    if (!formData.buildingType)
      newErrors.buildingType = "Please select building type";
    if (!formData.appliances.trim())
      newErrors.appliances = "Please list your appliances";
    if (formData.contactMethod.length === 0)
      newErrors.contactMethod = "Please select at least one contact method";
    if (!formData.consent)
      newErrors.consent =
        "Please agree to be contacted regarding your quote request";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === "contactMethod") {
      setFormData((prev) => ({
        ...prev,
        contactMethod: checked
          ? [...prev.contactMethod, value]
          : prev.contactMethod.filter((method) => method !== value),
      }));
      if (errors.contactMethod) {
        setErrors((prev) => ({
          ...prev,
          contactMethod: "",
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Quote Request Sent Successfully! 🎉",
        description:
          "Thank you for your request. We'll get back to you within 24 hours with your free quote.",
      });
      setIsSubmitting(false);
      // Redirect to thank you page
      navigate("/thank-you");
    }, 1000);
  };

  // Reuse BRAND COLORS
  const brandRed = "#d20500";
  const accentYellow = "#ffd901";
  const benefits = [
    "Uninterrupted Power Supply",
    "Up to 70% Energy Savings",
    "Flexible Financing Options",
    "High-Efficiency Panels",
    "Fast & Professional Installation",
    "Continuous Support & Maintenance",
  ];
  return (
    <div className="min-h-screen font-sans" style={{ background: `linear-gradient(135deg, ${brandRed} 0%, ${accentYellow} 100%)` }}>
      <Header />
      <section>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen items-center">
            {/* Left - Hero Pitch */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-playfair" style={{ color: "#fff" }}>
                Take Control of Your Power — Get A <span className="text-[#ffd901]">Free Solar Quote</span> Today!
              </h1>
              <div className="space-y-4 text-lg mb-6">
                <p>
                  Say goodbye to blackouts and rising energy costs. Our tailored solar systems give you reliable, affordable power — installed fast, supported forever.
                </p>
                <p>
                  Ready to unlock true energy independence? Start your personalized quote now!
                </p>
              </div>
              {/* Trust/benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center">
                    <span className="mr-3 text-white text-2xl">✅</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right - Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                <h2 className="mb-6 text-center text-2xl font-bold" style={{ color: brandRed }}>Request A Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: brandRed }}>
                      Personal & Contact Info
                    </h3>
                    <div>
                      <input
                        type="text"
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.fullName ? 'border-red-500' : ''}`}
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name*"
                        required
                        style={{ borderColor: errors.fullName ? "#ef4444" : brandRed }}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.email ? 'border-red-500' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email Address*"
                        required
                        style={{ borderColor: errors.email ? "#ef4444" : brandRed }}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.phone ? 'border-red-500' : ''}`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number*"
                        required
                        style={{ borderColor: errors.phone ? "#ef4444" : brandRed }}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <select
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.powerConsumption ? 'border-red-500' : ''}`}
                        id="powerConsumption"
                        name="powerConsumption"
                        value={formData.powerConsumption}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: errors.powerConsumption ? "#ef4444" : brandRed }}
                      >
                        <option value="">Daily/Monthly Power Consumption?*</option>
                        <option value="low">Low Usage</option>
                        <option value="medium">Medium Usage</option>
                        <option value="heavy">Heavy Usage</option>
                        <option value="not-sure">I'm Not Sure</option>
                      </select>
                      {errors.powerConsumption && <p className="text-red-500 text-sm mt-1">{errors.powerConsumption}</p>}
                    </div>
                  </div>
                  {/* Installation Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: brandRed }}>
                      Installation Details
                    </h3>
                    <div>
                      <select
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.installLocation ? 'border-red-500' : ''}`}
                        id="installLocation"
                        name="installLocation"
                        value={formData.installLocation}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: errors.installLocation ? "#ef4444" : brandRed }}
                      >
                        <option value="">Where Do You Want to Install Solar System?*</option>
                        <option value="home">Home</option>
                        <option value="business">Business</option>
                        <option value="organization">Organization (e.g., School, Church, Mosque)</option>
                      </select>
                      {errors.installLocation && <p className="text-red-500 text-sm mt-1">{errors.installLocation}</p>}
                    </div>
                    <div>
                      <select
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.timeframe ? 'border-red-500' : ''}`}
                        id="timeframe"
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: errors.timeframe ? "#ef4444" : brandRed }}
                      >
                        <option value="">How Soon Do You Want to Install?*</option>
                        <option value="immediately">Immediately</option>
                        <option value="this-month">This Month</option>
                        <option value="next-month">Next Month</option>
                        <option value="information">I Just Need Information</option>
                      </select>
                      {errors.timeframe && <p className="text-red-500 text-sm mt-1">{errors.timeframe}</p>}
                    </div>
                    <div>
                      <select
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.solarPackage ? 'border-red-500' : ''}`}
                        id="solarPackage"
                        name="solarPackage"
                        value={formData.solarPackage}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: errors.solarPackage ? "#ef4444" : brandRed }}
                      >
                        <option value="">Select Your Preferred Solar Package*</option>
                        <option value="residential">Residential (Home Use)</option>
                        <option value="commercial">Commercial (Business Use)</option>
                        <option value="industrial">Industrial (Large-Scale Systems)</option>
                        <option value="not-sure">Not Sure Yet – Need Expert Opinion</option>
                      </select>
                      {errors.solarPackage && <p className="text-red-500 text-sm mt-1">{errors.solarPackage}</p>}
                    </div>
                    <div>
                      <select
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.budgetRange ? 'border-red-500' : ''}`}
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: errors.budgetRange ? "#ef4444" : brandRed }}
                      >
                        <option value="">Select Your Estimated Budget Range*</option>
                        <option value="under-500k">Under ₦500,000</option>
                        <option value="500k-1m">₦500,000 – ₦1,000,000</option>
                        <option value="1m-2m">₦1,000,000 – ₦2,000,000</option>
                        <option value="2m-5m">₦2,000,000 – ₦5,000,000</option>
                        <option value="above-5m">Above ₦5,000,000</option>
                        <option value="flexible">Flexible Budget – I Want the Best Solution</option>
                      </select>
                      {errors.budgetRange && <p className="text-red-500 text-sm mt-1">{errors.budgetRange}</p>}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: brandRed }}>
                      Additional Details
                    </h3>
                    <div>
                      <textarea
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.installationLocation ? 'border-red-500' : ''}`}
                        id="installationLocation"
                        name="installationLocation"
                        value={formData.installationLocation}
                        onChange={handleInputChange}
                        placeholder="Installation Location (City/Town, State)*"
                        rows={2}
                        required
                        style={{ borderColor: errors.installationLocation ? "#ef4444" : brandRed }}
                      />
                      {errors.installationLocation && <p className="text-red-500 text-sm mt-1">{errors.installationLocation}</p>}
                    </div>
                    <div>
                      <select
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.buildingType ? 'border-red-500' : ''}`}
                        id="buildingType"
                        name="buildingType"
                        value={formData.buildingType}
                        onChange={handleInputChange}
                        required
                        style={{ borderColor: errors.buildingType ? "#ef4444" : brandRed }}
                      >
                        <option value="">Building Type*</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="story-building">Story Building</option>
                        <option value="shop">Shop / Store</option>
                        <option value="remote">Remote Location (e.g., Factory, Farm, Rural Area, Project Site)</option>
                      </select>
                      {errors.buildingType && <p className="text-red-500 text-sm mt-1">{errors.buildingType}</p>}
                    </div>
                    <div>
                      <textarea
                        className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.appliances ? 'border-red-500' : ''}`}
                        id="appliances"
                        name="appliances"
                        value={formData.appliances}
                        onChange={handleInputChange}
                        placeholder="List Your Electronics/Appliances/Gadgets*"
                        rows={3}
                        required
                        style={{ borderColor: errors.appliances ? "#ef4444" : brandRed }}
                      />
                      {errors.appliances && <p className="text-red-500 text-sm mt-1">{errors.appliances}</p>}
                    </div>
                  </div>
                  {/* Preferred Contact Method */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg" style={{ color: brandRed }}>Preferred Contact Method*</h3>
                    <div className="flex flex-wrap gap-4">
                      {["Phone (Call/SMS)", "Email", "WhatsApp", "All"].map((method) => (
                        <div key={method} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`contact-${method}`}
                            name="contactMethod"
                            value={method.toLowerCase()}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                            required={formData.contactMethod.length === 0}
                          />
                          <label htmlFor={`contact-${method}`} className="text-sm">{method}</label>
                        </div>
                      ))}
                    </div>
                    {errors.contactMethod && <p className="text-red-500 text-sm mt-1">{errors.contactMethod}</p>}
                  </div>
                  {/* Consent */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="text-sm">
                      I agree to be contacted regarding my solar quote request.*
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                  <button
                    type="submit"
                    className="w-full font-bold py-3 text-black rounded-lg"
                    style={{ backgroundColor: accentYellow, color: brandRed }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "SUBMIT"}
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
export default GetQuote;
