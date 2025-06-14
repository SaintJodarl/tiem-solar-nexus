
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost8 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild>
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Financing & Investment
                </span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                How to Finance Your Solar System in Nigeria Without Breaking the Bank
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
                alt="Solar Financing Options"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Solar systems are a great long-term investment—but the upfront cost can be intimidating. Fortunately, you don't need to pay all at once. There are multiple financing options in Nigeria that make going solar easier and more affordable.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">1. Solar Loans</h3>
                <p className="text-blue-700">
                  Several banks and fintech providers offer personal or green loans for solar installations. These loans often have flexible repayment terms and interest rates as low as 9% annually.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">2. Lease-to-Own (Solar Leasing)</h3>
                <p className="text-blue-700">
                  Pay monthly over a period (e.g., 12–36 months) while using the system. At the end of the lease, you own it outright.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">3. Pay-As-You-Go (PAYG)</h3>
                <p className="text-blue-700">
                  Ideal for smaller systems. You pay a small amount upfront and continue payments via USSD or mobile app.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">4. Cooperative Financing</h3>
                <p className="text-blue-700">
                  Join a community or cooperative group to enjoy group discounts and pooled financing.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">5. Vendor-Based Installment Plans</h3>
                <p className="text-blue-700">
                  Some solar companies (like ours) offer direct payment plans with 0% or low interest.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Tips for Choosing a Financing Plan</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Calculate your total cost over time</li>
                <li>Ask about maintenance and warranty during the payment period</li>
                <li>Make sure your system is insured if it's not fully paid for</li>
              </ul>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Worried About Costs? Let's Talk Financing
                </h3>
                <p className="text-muted-foreground mb-6">
                  We help customers find the right plan for their needs. Reach out to explore flexible payment options that work for your budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Explore Financing</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/products">View Systems</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  solar financing Nigeria, pay-as-you-go solar, solar loans Nigeria, lease solar panels, affordable solar systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost8;
