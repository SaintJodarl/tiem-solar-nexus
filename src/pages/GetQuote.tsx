import React, { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FunnelContactSection from "@/components/FunnelContactSection";
import FunnelTestimonials from "@/components/FunnelTestimonials";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
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

      {/* Form Section */}
      <section ref={formRef} id="funnel-form" className="relative py-16 px-4 bg-white flex flex-col items-center justify-center" style={{ scrollMarginTop: 90 }}>
        <div className="max-w-2xl w-full">
          <h2 className="font-bold text-3xl mb-6 text-center" style={{ color: brandRed }}>
            Get Your Free Solar Quote
          </h2>
          <div className="rounded-2xl shadow-lg p-6 bg-white animate-scale-in">
            <FunnelContactSection />
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
