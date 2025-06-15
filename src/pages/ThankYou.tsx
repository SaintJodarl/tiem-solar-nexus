
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
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #fff 0%, #fff 100%)" }}>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <div
            className="w-28 h-28 mb-6 rounded-full bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: "url('/lovable-uploads/f30c4dfb-0659-44b2-8867-b13d9a15decd.png')",
              border: `4px solid ${accentYellow}`,
            }}
          />
          <div className="bg-white/95 shadow-2xl rounded-lg w-full text-center py-14 px-6 animate-scale-in"
            style={{ boxShadow: "0px 6px 32px 2px rgba(0,0,0,0.12)" }}>
            <div className="text-6xl mb-6">✅</div>
            <h1 className="font-bold text-3xl mb-4" style={{ color: brandRed }}>
              Thank you! Your request has been received.
            </h1>
            <p className="mb-8 text-gray-800 text-xl leading-relaxed">
              Our team will be in touch shortly to discuss your solar energy needs and provide you with a customized quote.
            </p>
            <div className="flex flex-col gap-6 mt-8">
              <Button
                asChild
                className="w-full font-bold py-4 rounded-lg text-white text-xl animate-fade-in shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: "#25D366" }}
              >
                <a href="https://wa.link/zbnkvi" target="_blank" rel="noopener noreferrer">
                  🟢 Chat with a Consultant
                </a>
              </Button>
              <Button
                className="w-full font-bold py-4 rounded-lg text-white text-xl animate-fade-in shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: brandRed }}
                onClick={() => navigate("/products")}
              >
                🔴 See Our Products
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
