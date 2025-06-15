import React, { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FunnelTestimonials from "@/components/FunnelTestimonials";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';

const brandRed = "#d20500";
const accentYellow = "#ffd901";

const solarPackages = [
  {
    price: "₦12,000",
    period: "per month",
    image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp",
    components: ["X2 Solar Panels", "X1 Inverter", "X1 Battery", "X1 Controller"],
    whatYouCanPower: ["LED Lights", "Fans", "Phone Charging", "Small TV"],
    warranty: "2 Years Full Warranty",
    maintenance: "Free maintenance for 1 year",
    installation: "1-2 days installation"
  },
  {
    price: "₦24,000",
    period: "per month",
    image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp",
    components: ["X4 Solar Panels", "X1 Inverter", "X2 Batteries", "X1 Controller"],
    whatYouCanPower: ["All lights", "Multiple fans", "TV", "Refrigerator", "Laptop"],
    warranty: "3 Years Full Warranty",
    maintenance: "Free maintenance for 2 years",
    installation: "2-3 days installation"
  },
  {
    price: "₦36,000",
    period: "per month",
    image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp",
    components: ["X6 Solar Panels", "X1 Inverter", "X2 Batteries", "X1 Controller"],
    whatYouCanPower: ["Whole house basics", "AC (small)", "Washing machine", "Multiple appliances"],
    warranty: "5 Years Full Warranty",
    maintenance: "Free maintenance for 3 years",
    installation: "3-4 days installation"
  },
  {
    price: "₦48,000",
    period: "per month",
    image: "https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749978623/Mercury-3.5kva-Solar-Hybrid-Inverter-MPPT-8x-Solar-Panels-1_ppqaxv.webp",
    components: ["X8 Solar Panels", "X2 Inverters", "X4 Batteries", "X1 Controller"],
    whatYouCanPower: ["Entire house", "Multiple ACs", "All appliances", "Commercial use"],
    warranty: "7 Years Full Warranty",
    maintenance: "Free maintenance for 5 years",
    installation: "4-5 days installation"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Book Consult",
    description: "Complete a short questionnaire below to speak to a solar specialist"
  },
  {
    step: "02", 
    title: "Site Survey",
    description: "A visit to the proposed site will be carried out to put space and environmental factors into consideration."
  },
  {
    step: "03",
    title: "Energy Audit", 
    description: "Estimation of energy needs is measured and this is the basis for our calculation as regarding system sizing."
  },
  {
    step: "04",
    title: "Installation",
    description: "Get a price quote to design, schedule and install your solar panel system."
  }
];

const faqs = [
  {
    q: "How long does installation take?",
    a: "Most home installations take 1–3 days depending on the complexity and size of the system."
  },
  {
    q: "Is there a payment plan or financing available?",
    a: "Yes! We offer flexible payment plans and financing to help every customer go solar."
  },
  {
    q: "How do I know which system is right for me?",
    a: "Our team will provide a personalized recommendation based on your energy needs and location."
  },
  {
    q: "What happens if there is a problem after installation?",
    a: "We offer full technical support and maintenance so you have peace of mind."
  },
  {
    q: "Will solar really eliminate my electricity bills?",
    a: "In most cases, solar will drastically reduce or eliminate your power bills—ask us for a tailored estimate."
  }
];

export default function GetQuote() {
  const formRef = useRef<HTMLDivElement>(null);
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
    contactMethod: [] as string[],
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.powerConsumption) {
      newErrors.powerConsumption = 'Please select your power consumption';
    }

    if (!formData.installLocation) {
      newErrors.installLocation = 'Please select installation location';
    }

    if (!formData.timeframe) {
      newErrors.timeframe = 'Please select your timeframe';
    }

    if (!formData.solarPackage) {
      newErrors.solarPackage = 'Please select a solar package';
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select your budget range';
    }

    if (!formData.installationLocation.trim()) {
      newErrors.installationLocation = 'Installation location is required';
    }

    if (!formData.buildingType) {
      newErrors.buildingType = 'Please select building type';
    }

    if (!formData.appliances.trim()) {
      newErrors.appliances = 'Please list your appliances';
    }

    if (formData.contactMethod.length === 0) {
      newErrors.contactMethod = 'Please select at least one contact method';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please agree to be contacted regarding your quote request';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === 'contactMethod') {
      setFormData(prev => ({
        ...prev,
        contactMethod: checked 
          ? [...prev.contactMethod, value]
          : prev.contactMethod.filter(method => method !== value)
      }));
      
      // Clear error when user selects a method
      if (errors.contactMethod) {
        setErrors(prev => ({
          ...prev,
          contactMethod: ''
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
      
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Here you would send the data to info@tiemenergy.com
    setTimeout(() => {
      console.log('Quote request submitted to info@tiemenergy.com:', formData);
      toast({
        title: "Quote Request Sent Successfully! 🎉",
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
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans" style={{ background: "linear-gradient(135deg, #fff 0%, #fff 100%)" }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 flex flex-col items-center justify-center" style={{ background: `linear-gradient(135deg, ${brandRed} 0%, ${accentYellow} 100%)` }}>
        <div className="max-w-4xl text-center text-white mx-auto">
          <h1 className="font-bold text-4xl md:text-6xl mb-6 drop-shadow-lg animate-fade-in">
            FINALLY! A SOLAR SYSTEM THAT POWERS YOUR WHOLE HOUSE
          </h1>
          <p className="mb-8 text-xl md:text-2xl font-medium animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Cut your electricity bills, enjoy 24/7 light, and get your custom solar quote in minutes!
          </p>
          <Button
            size="lg"
            className="bg-white text-[#d20500] font-bold px-8 py-4 rounded-full shadow-md hover:scale-105 hover:bg-[#ffd901] border-2 border-white transition-all animate-fade-in"
            style={{ color: brandRed, background: "#fff" }}
            onClick={handleScrollToForm}
          >
            GET A QUOTE
          </Button>
        </div>
      </section>

      {/* Solar Packages Section */}
      <section className="py-20 px-4" style={{ backgroundColor: accentYellow }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-center mb-16" style={{ color: brandRed }}>
            Choose Your Solar Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solarPackages.map((pkg, index) => (
              <Card key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <img 
                      src={pkg.image}
                      alt="Solar System"
                      className="w-full h-32 object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold" style={{ color: brandRed }}>
                    {pkg.price} <span className="text-lg font-normal text-gray-600">{pkg.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="power">
                        <AccordionTrigger className="text-sm font-semibold">What you can power</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1">
                            {pkg.whatYouCanPower.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <Check className="h-4 w-4" style={{ color: brandRed }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="components">
                        <AccordionTrigger className="text-sm font-semibold">System Components</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1">
                            {pkg.components.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <Check className="h-4 w-4" style={{ color: brandRed }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="warranty">
                        <AccordionTrigger className="text-sm font-semibold">Warranty</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">{pkg.warranty}</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="maintenance">
                        <AccordionTrigger className="text-sm font-semibold">Maintenance</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">{pkg.maintenance}</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="installation">
                        <AccordionTrigger className="text-sm font-semibold">Installation Schedule</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm">{pkg.installation}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <Button 
                      className="w-full mt-4 font-bold"
                      style={{ backgroundColor: brandRed }}
                      onClick={handleScrollToForm}
                    >
                      BOOK NOW →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-4xl mb-6" style={{ color: brandRed }}>
                ABOUT TIEM SOLAR ENERGY
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a local solar contractor in Lagos Nigeria for 5 years, we know how to navigate the whole solar process as good or better than any other contractor in Nigeria. We also consistently deliver in less than half the time of our competitors. We will maintain our work as long as the manufacturer warrantees the equipment.
              </p>
              <Button
                size="lg"
                className="font-bold px-8 py-4 rounded-lg text-white"
                style={{ backgroundColor: "#22c55e" }}
                onClick={handleScrollToForm}
              >
                BOOK NOW
              </Button>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/46921667-e72c-478b-836b-a6b70f717c00.png"
                alt="Solar Panel"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solar Applications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/46921667-e72c-478b-836b-a6b70f717c00.png"
                alt="Solar Panel Applications"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-bold text-4xl mb-6" style={{ color: brandRed }}>
                OUR RELIABLE, RUGGED & DURABLE SOLAR PANELS CAN BE USED TO POWER YOUR:
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homes, schools, shopping malls, businesses hospitals, schools. Our solar panels are also designed to power factories, airports and office buildings, and agricultural equipment, and more.
              </p>
              <Button
                size="lg"
                className="font-bold px-8 py-4 rounded-lg text-white"
                style={{ backgroundColor: "#22c55e" }}
                onClick={handleScrollToForm}
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-4" style={{ backgroundColor: brandRed }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-bold text-4xl mb-16 text-white">
            FOUR EASY STEPS TO GOING SOLAR TODAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: accentYellow }}>
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/90 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            className="font-bold px-8 py-4 rounded-lg"
            style={{ backgroundColor: accentYellow, color: brandRed }}
            onClick={handleScrollToForm}
          >
            BOOK SOLAR EVALUATION
          </Button>
        </div>
      </section>

      {/* Comprehensive Quote Form Section */}
      <section ref={formRef} id="quote-form" className="py-16 px-4 bg-white" style={{ scrollMarginTop: 90 }}>
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center mb-6 text-3xl font-bold" style={{ color: '#d20500' }}>Request A Quote</h2>
            
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal & Contact Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Personal & Contact Info</h3>
                  
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
                      style={{ borderColor: errors.fullName ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.email ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.phone ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.powerConsumption ? '#ef4444' : '#d20500' }}
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
                  <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Installation Details</h3>
                  
                  <div>
                    <select
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-yellow-400 ${errors.installLocation ? 'border-red-500' : ''}`}
                      id="installLocation"
                      name="installLocation"
                      value={formData.installLocation}
                      onChange={handleInputChange}
                      required
                      style={{ borderColor: errors.installLocation ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.timeframe ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.solarPackage ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.budgetRange ? '#ef4444' : '#d20500' }}
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
                  <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Additional Details</h3>
                  
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
                      style={{ borderColor: errors.installationLocation ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.buildingType ? '#ef4444' : '#d20500' }}
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
                      style={{ borderColor: errors.appliances ? '#ef4444' : '#d20500' }}
                    />
                    {errors.appliances && <p className="text-red-500 text-sm mt-1">{errors.appliances}</p>}
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg" style={{ color: '#d20500' }}>Preferred Contact Method*</h3>
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
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#f7f7fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-3xl text-center mb-8" style={{ color: brandRed }}>
            CHECK OUT WHAT CLIENTS SAY
          </h2>
          <FunnelTestimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-3xl text-center mb-8" style={{ color: brandRed }}>
            Frequently Asked Questions
          </h2>
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="bg-[#f7f7fa] rounded-lg animate-fade-in" style={{ animationDelay: `${0.1 * idx}s` }}>
                <AccordionTrigger className="flex justify-between items-center p-4 text-lg font-semibold text-[#222] w-full [&>svg]:text-[#d20500]">
                  <span>{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="p-4 text-gray-700 border-t text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
}
