
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost2 = () => {
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
                What Does a Solar Energy Consultant Really Do? (And Why You Might Need One)
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop"
                alt="Solar Energy Consultant"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When considering solar power for your home or business, the options can be overwhelming. That's where a solar energy consultant comes in—a professional who guides you through every step of your solar journey, much like a financial advisor helps you manage your money.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Who Is a Solar Energy Consultant?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A solar energy consultant is a trained expert who assesses your property's energy needs, analyzes potential savings, and recommends the best system for your goals and budget.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Key Roles of a Solar Consultant</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Site Assessment:</strong> Evaluate your roof space, sun exposure, and electrical setup.</li>
                <li><strong>Energy Audit:</strong> Analyze your current electricity usage to right-size your system.</li>
                <li><strong>Custom System Design:</strong> Recommend the ideal panel type, inverter, and battery setup.</li>
                <li><strong>Cost-Benefit Analysis:</strong> Show you your payback period, ROI, and financing options.</li>
                <li><strong>Installation Coordination:</strong> Work with engineers and installers to ensure top-quality implementation.</li>
                <li><strong>After-Sales Support:</strong> Help with system monitoring, warranties, and performance troubleshooting.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Why You Should Consider One</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Avoid costly mistakes from poor system sizing or cheap installations.</li>
                <li>Save time and money by leveraging their expertise and supplier network.</li>
                <li>Gain peace of mind knowing your solar investment is optimized from day one.</li>
              </ul>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Going Solar? Talk to a Pro First
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our certified consultants ensure you get the best results with zero guesswork. Contact us today for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Free Consultation</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/services">Our Services</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  solar energy consultant, solar planning, custom solar system, energy audit, solar cost savings
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

export default BlogPost2;
