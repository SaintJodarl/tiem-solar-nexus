
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const brandRed = "#d20500";
const accentYellow = "#ffd901";

const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col" style={{ background: `linear-gradient(135deg, ${brandRed} 0%, ${accentYellow} 100%)` }}>
      <Header />
      <main className="flex-1 flex justify-center items-center px-4">
        <div className="bg-white/95 shadow-2xl rounded-lg max-w-md w-full text-center py-14 px-6 mt-16 mb-12"
             style={{boxShadow:"0px 6px 32px 2px rgba(0,0,0,0.12)"}}>
          <div className="text-4xl mb-5">✅</div>
          <h1 className="font-bold text-2xl mb-2" style={{color: brandRed}}>Thank you!</h1>
          <p className="mb-6 text-gray-800 text-lg">
            Your request has been received. Our team will be in touch shortly.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://wa.link/zbnkvi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-bold py-3 rounded-lg text-white text-lg transition"
              style={{ backgroundColor: "#25D366" }}
            >
              🟢 Chat with a Consultant
            </a>
            <button
              className="w-full font-bold py-3 rounded-lg text-white text-lg"
              style={{ backgroundColor: brandRed }}
              onClick={() => navigate("/products")}
            >
              🔴 See Our Products
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
