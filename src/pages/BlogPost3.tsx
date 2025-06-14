
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost3 = () => {
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
                  Tips & Benefits
                </span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                The Ultimate Guide to Residential Solar Power in Nigeria (2025 Edition)
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=400&fit=crop"
                alt="Residential Solar in Nigeria"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nigeria is blessed with abundant sunshine—averaging over 5 hours of sunlight per day in many regions. Yet, power outages remain a daily reality for millions. That's why more Nigerians are turning to residential solar systems as a reliable, cost-effective alternative.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Why Solar Makes Sense in Nigeria</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>High Sunlight Availability:</strong> Ideal for solar generation.</li>
                <li><strong>Unstable Grid Supply:</strong> Frequent blackouts make solar a necessity, not a luxury.</li>
                <li><strong>Rising Energy Costs:</strong> Solar offers long-term savings and independence.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Components of a Residential Solar System</h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Solar Panels:</strong> Capture sunlight and convert it into electricity.</li>
                <li><strong>Inverter:</strong> Converts DC electricity into usable AC.</li>
                <li><strong>Battery Storage (Optional):</strong> Stores energy for night use or outages.</li>
                <li><strong>Mounting & Wiring:</strong> Safely attaches the system to your home.</li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Cost Considerations (2025)</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Entry-level Systems:</strong> ~₦500,000–₦1 million for basic lighting and device charging.</li>
                <li><strong>Mid-range Systems:</strong> ₦1–₦2 million for TV, fridge, fans, etc.</li>
                <li><strong>Full-Home Systems:</strong> ₦3 million+ for air conditioning, water pumps, and full automation.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">How to Choose the Right Installer</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Check reviews, portfolios, and certifications.</li>
                <li>Request site visits and multiple quotes.</li>
                <li>Prioritize after-sales support and warranties.</li>
              </ul>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Power Your Home, Your Way
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us design a custom solar system that fits your needs and budget. Start with a free energy assessment today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Free Assessment</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/products">View Systems</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  residential solar Nigeria, solar power costs Nigeria, home solar installation, 2025 solar guide
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

export default BlogPost3;
