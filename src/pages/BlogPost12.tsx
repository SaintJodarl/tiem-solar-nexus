
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost12 = () => {
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
                  Environmental Impact
                </span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                How Solar Energy Helps Fight Climate Change & Build a Sustainable Future
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop"
                alt="Solar Energy Climate Impact"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We often talk about solar in terms of cost savings—but its impact goes far beyond money. By choosing solar, you're joining a global movement to combat climate change and build a cleaner, more sustainable future.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">The Climate Crisis: A Quick Snapshot</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Greenhouse gases from fossil fuels are heating the planet, causing extreme weather, sea-level rise, and ecological disruption. In Nigeria, we're already seeing effects like prolonged droughts and flooding.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">How Solar Energy Helps</h2>
              
              <div className="space-y-6 mb-8">
                <div className="p-4 bg-green-50 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-2">1. Zero Emissions</h3>
                  <p className="text-green-700">Solar panels generate electricity without burning fuel—cutting your carbon footprint instantly.</p>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-2">2. Reduces Air Pollution</h3>
                  <p className="text-green-700">Cleaner air means better health outcomes in cities and towns.</p>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-2">3. Promotes Energy Justice</h3>
                  <p className="text-green-700">Solar decentralizes power, giving access to energy in underserved areas.</p>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-2">4. Supports Sustainable Jobs</h3>
                  <p className="text-green-700">The solar industry creates eco-friendly jobs for engineers, technicians, and sales teams.</p>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-2">5. Protects Natural Resources</h3>
                  <p className="text-green-700">Solar reduces the need to burn coal, gas, or diesel, preserving ecosystems and biodiversity.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Your Role in the Solution</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Reduce dependence on fossil fuels</li>
                <li>Inspire your community</li>
                <li>Encourage local governments to support renewable energy policies</li>
              </ul>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Be Part of the Green Energy Revolution
                </h3>
                <p className="text-muted-foreground mb-6">
                  Go solar and take a real step toward protecting our environment and future generations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Join the Revolution</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/about">Our Mission</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  solar energy climate change, sustainable energy Nigeria, clean energy solutions, carbon footprint reduction, eco-friendly power
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

export default BlogPost12;
