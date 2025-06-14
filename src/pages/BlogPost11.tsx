
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost11 = () => {
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
                  Solar Basics & Guides
                </span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                From Grid-Tied to Off-Grid: Which Solar System Is Best for You?
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop"
                alt="Solar System Types"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When switching to solar, one of the biggest decisions you'll make is choosing the right type of system: grid-tied, off-grid, or hybrid. Each has its pros and cons depending on your location, goals, and budget.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">1. Grid-Tied Solar Systems</h2>
                <ul className="list-disc pl-6 space-y-1 text-blue-700 mb-4">
                  <li>Connected to the public electricity grid</li>
                  <li>No battery storage</li>
                  <li>Lower cost due to fewer components</li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">Pros:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-green-600 text-sm">
                      <li>Less expensive</li>
                      <li>Good for areas with stable grid</li>
                      <li>Potential for net metering</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">Cons:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-red-600 text-sm">
                      <li>No backup during outages</li>
                      <li>Dependent on local grid reliability</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-orange-800 mb-4">2. Off-Grid Solar Systems</h2>
                <ul className="list-disc pl-6 space-y-1 text-orange-700 mb-4">
                  <li>Completely independent from the grid</li>
                  <li>Uses batteries for storage</li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">Pros:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-green-600 text-sm">
                      <li>Total energy independence</li>
                      <li>Ideal for rural areas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">Cons:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-red-600 text-sm">
                      <li>Higher upfront cost</li>
                      <li>Battery maintenance required</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">3. Hybrid Solar Systems</h2>
                <ul className="list-disc pl-6 space-y-1 text-purple-700 mb-4">
                  <li>Combines solar, grid, and batteries</li>
                  <li>Offers flexibility and backup power</li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">Pros:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-green-600 text-sm">
                      <li>Works during blackouts</li>
                      <li>Maximizes power usage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">Cons:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-red-600 text-sm">
                      <li>More complex and expensive</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Which One Should You Choose?</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li><strong>Urban area with grid access?</strong> Go for grid-tied or hybrid.</li>
                <li><strong>Remote location or frequent blackouts?</strong> Choose off-grid or hybrid.</li>
                <li><strong>Budget-conscious but want some backup?</strong> Consider a small hybrid system to start.</li>
              </ul>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Help Deciding?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We'll assess your energy needs and recommend the best setup for your home or business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get System Recommendation</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/products">Compare Systems</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  grid-tied vs off-grid, hybrid solar system Nigeria, best solar setup
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

export default BlogPost11;
