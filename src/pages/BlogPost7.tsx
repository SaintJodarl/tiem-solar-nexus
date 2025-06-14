
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost7 = () => {
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
                  Solar Installation & Safety
                </span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                The Truth About Rooftop Solar Panels: Are They Safe for Your Home?
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop"
                alt="Rooftop Solar Safety"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                There's growing interest in rooftop solar—but also some concern, especially after the Nigerian government warned about unsafe installations. So, is rooftop solar safe for your home? The answer is yes—if done right.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Why Rooftop Solar Safety Matters</h2>
              <p className="text-muted-foreground mb-4">A poorly installed system can cause:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Roof damage</li>
                <li>Leaks and structural issues</li>
                <li>Electrical fires</li>
                <li>Equipment failure</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">What Makes Rooftop Solar Safe?</h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">1. Professional Structural Assessment</h3>
                <p className="text-green-700">
                  Before installation, an expert should assess your roof's condition, angle, and load capacity.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">2. Quality Mounting Systems</h3>
                <p className="text-green-700">
                  Top-tier racking systems protect your roof and ensure panels stay in place, even during high winds.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">3. Proper Waterproofing</h3>
                <p className="text-green-700">
                  Experienced installers use sealants and flashing to prevent leaks and water damage.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">4. Electrical Compliance</h3>
                <p className="text-green-700">
                  All wiring should follow national safety standards and use approved materials.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-3">5. Fire Safety Measures</h3>
                <p className="text-green-700">
                  Solar systems should include fuses, breakers, and proper insulation to prevent electrical hazards.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">How to Ensure a Safe Installation</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Hire only licensed, reputable installers</li>
                <li>Request documentation and safety certifications</li>
                <li>Ensure post-installation inspections are done</li>
              </ul>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Worried About Rooftop Safety?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We follow strict engineering and safety protocols for every install. Book a free roof evaluation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Free Roof Evaluation</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/services">Safety Standards</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  rooftop solar safety, solar panel installation risks, Nigeria solar warning, solar roof damage, safe solar systems
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

export default BlogPost7;
