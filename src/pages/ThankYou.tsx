
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const brandRed = "#d20500";
const accentYellow = "#ffd901";

export default function ThankYou() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=3011&h=4016&q=80')",
          minHeight: "80vh"
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Company Logo */}
          <div
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-cover bg-center shadow-2xl border-4 animate-scale-in"
            style={{
              backgroundImage: "url('/lovable-uploads/f30c4dfb-0659-44b2-8867-b13d9a15decd.png')",
              borderColor: accentYellow,
            }}
          />
          
          {/* Main Content Card */}
          <div 
            className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 animate-fade-in"
            style={{ 
              boxShadow: "0px 10px 40px rgba(0,0,0,0.15)",
              border: `2px solid ${accentYellow}`
            }}
          >
            {/* Success Icon */}
            <div className="text-8xl mb-6 animate-bounce">✅</div>
            
            {/* Headline */}
            <h1 
              className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ color: brandRed }}
            >
              Thank you! Your request has been received.
            </h1>
            
            {/* Subtext */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Our team will be in touch shortly to discuss your solar energy needs and provide you with a customized quote.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto font-bold py-4 px-8 rounded-xl text-white text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#25D366" }}
              >
                <a 
                  href="https://wa.link/zbnkvi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  🟢 Chat with a Consultant
                </a>
              </Button>
              
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold py-4 px-8 rounded-xl text-white text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: brandRed }}
                onClick={() => navigate("/products")}
              >
                🔴 See Our Products
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm md:text-base">
                Questions? Call us at <span className="font-semibold" style={{ color: brandRed }}>+234 XXX XXX XXXX</span> or email <span className="font-semibold" style={{ color: brandRed }}>info@tiemenergy.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
