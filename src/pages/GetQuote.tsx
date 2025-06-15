
import React, { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const brandRed = "#d20500";
const accentYellow = "#ffd901";

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
        <div className="max-w-2xl text-center text-white mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 drop-shadow-lg animate-fade-in">
            Ready to Save on Power? <span style={{ color: accentYellow }}>Go Solar Today!</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl font-medium animate-fade-in" style={{ animationDelay: "0.15s" }}>
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
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
      </section>

      {/* Form Section */}
      <section ref={formRef} id="funnel-form" className="relative py-16 px-4 bg-white flex flex-col items-center justify-center" style={{ scrollMarginTop: 90 }}>
        <div className="max-w-2xl w-full">
          <h2 className="font-bold text-3xl mb-6 text-center" style={{ color: brandRed }}>
            Get Your Free Solar Quote
          </h2>
          <div className="rounded-2xl shadow-lg p-6 bg-white animate-scale-in">
            {/* Embedded ContactForm (same as Contact Page) */}
            <ContactSection
              redirectToThankYou={"/thank-you"}
              ctaText="Get My Quote"
              ctaColor={brandRed}
              accentColor={accentYellow}
              hideTitle
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#f7f7fa]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl text-center mb-8" style={{ color: brandRed }}>
            What Our Clients Say
          </h2>
          <Testimonials
            limit={3}
            animateOnScroll
            cardColor="#fff"
            textColor="#222"
            accentColor={accentYellow}
            brandRed={brandRed}
          />
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
                <AccordionTrigger className="flex justify-between items-center p-4 text-lg font-semibold text-[#222] w-full">
                  <span>{item.q}</span>
                  <ChevronDown className="ml-2 h-5 w-5 text-[#d20500]" />
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
