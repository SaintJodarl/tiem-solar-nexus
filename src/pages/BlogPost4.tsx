
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost4 = () => {
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
                How to Make Your Home More Energy Efficient Before Going Solar
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
                alt="Energy Efficient Home"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Going solar is one of the smartest ways to cut energy bills—but to truly maximize your investment, it's best to optimize your home's energy efficiency first. A more energy-efficient home requires fewer solar panels, which means lower upfront costs and faster returns.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Why Energy Efficiency Matters</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Think of it this way: Why pour clean water into a leaking bucket? If your home wastes energy, you'll need a larger—and more expensive—solar system to meet your needs.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Simple Steps to Reduce Energy Waste</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">1. Seal Air Leaks</h3>
              <p className="text-muted-foreground mb-4">
                Gaps around windows, doors, and attic hatches allow air to escape. Use weather stripping and caulking to plug leaks.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">2. Upgrade Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Switch from incandescent bulbs to LED lighting, which uses up to 80% less energy.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">3. Use Energy-Efficient Appliances</h3>
              <p className="text-muted-foreground mb-4">
                Look for appliances with energy ratings or inverter technology. They run more efficiently and consume less power.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">4. Insulate Properly</h3>
              <p className="text-muted-foreground mb-4">
                Roof and wall insulation helps maintain indoor temperature, reducing the need for cooling or heating.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">5. Install Smart Power Strips</h3>
              <p className="text-muted-foreground mb-4">
                They cut off power to devices that aren't in use, reducing phantom energy loss.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">6. Monitor Your Usage</h3>
              <p className="text-muted-foreground mb-8">
                Smart meters and energy monitors can reveal where your energy is going—so you can reduce waste strategically.
              </p>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Start with Energy Savings—Then Go Solar
                </h3>
                <p className="text-muted-foreground mb-6">
                  We provide energy audits alongside solar consultations to help you get the best value from your system. Book yours today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Book Energy Audit</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/services">Our Services</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  energy-efficient home, reduce energy consumption, pre-solar tips, home energy savings, Nigeria
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

export default BlogPost4;
