
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost9 = () => {
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
                  Policy & Regulation
                </span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Understanding Net Metering and Energy Storage in Nigeria
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop"
                alt="Net Metering and Energy Storage"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                As solar adoption grows in Nigeria, so does the need to understand two key concepts that maximize your system's value: net metering and energy storage. While the policies are still evolving, knowing how these systems work can help you plan smarter.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">What Is Net Metering?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Net metering is a billing system where you can export excess electricity from your solar system back to the grid and receive credit for it. This reduces your electricity bill or offsets your night-time usage.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Current Status in Nigeria</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While some mini-grid operators and industrial estates support net metering-like setups, widespread national policy is still in development. However, progress is happening—especially in Lagos and Abuja, where pilot programs are underway.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">What Is Energy Storage?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Energy storage involves using solar batteries to store excess power generated during the day for use at night or during outages. This is especially critical in Nigeria's unstable grid environment.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Types of Solar Batteries</h2>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">1. Lithium-ion Batteries</h3>
                  <p className="text-muted-foreground">Longer lifespan, faster charging, higher cost.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">2. Lead-Acid Batteries</h3>
                  <p className="text-muted-foreground">Affordable, but shorter lifespan and lower depth of discharge.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">3. Saltwater & Flow Batteries</h3>
                  <p className="text-muted-foreground">Emerging, eco-friendly options with specific use cases.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Why Energy Storage Matters in Nigeria</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Provides power during blackouts</li>
                <li>Reduces generator dependency</li>
                <li>Enables complete off-grid living</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Which Is Right for You?</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>If you're in a location with potential net metering laws, grid-tied systems may be beneficial.</li>
                <li>For rural areas or homes with frequent blackouts, batteries are a better choice.</li>
              </ul>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Optimize Your Solar Setup
                </h3>
                <p className="text-muted-foreground mb-6">
                  We'll help you choose the best system with or without storage—and guide you on grid connection options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Optimize My System</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/products">View Storage Options</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  net metering Nigeria, solar battery storage, off-grid vs grid-tied, solar energy Nigeria, energy storage systems
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

export default BlogPost9;
