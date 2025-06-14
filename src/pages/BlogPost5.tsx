
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost5 = () => {
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
                15 Powerful Benefits of Installing Solar Panels at Home
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=400&fit=crop"
                alt="Solar Panel Benefits"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                If you're considering going solar, the benefits go far beyond reducing your electricity bill. Here are 15 reasons why installing solar panels at home is one of the best decisions you can make—especially in Nigeria.
              </p>

              <div className="grid gap-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">1. Drastically Lower Electricity Bills</h3>
                  <p className="text-muted-foreground">Solar reduces or eliminates your reliance on grid power.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">2. Energy Independence</h3>
                  <p className="text-muted-foreground">Say goodbye to power outages and fuel generator hassles.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">3. Long-Term Savings</h3>
                  <p className="text-muted-foreground">Solar panels last 25+ years, offering decades of free energy.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">4. Increase Property Value</h3>
                  <p className="text-muted-foreground">Homes with solar systems are often more attractive to buyers.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">5. Protect Against Tariff Hikes</h3>
                  <p className="text-muted-foreground">Lock in your energy costs and avoid rising utility rates.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">6. Eco-Friendly Living</h3>
                  <p className="text-muted-foreground">Solar is 100% clean energy with no greenhouse gas emissions.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">7. Quiet Operation</h3>
                  <p className="text-muted-foreground">No noise pollution compared to diesel or petrol generators.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">8. Low Maintenance</h3>
                  <p className="text-muted-foreground">Solar systems require minimal upkeep and no fuel.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">9. Smart Technology Integration</h3>
                  <p className="text-muted-foreground">Modern systems come with apps to monitor performance in real time.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">10. Sustainable Investment</h3>
                  <p className="text-muted-foreground">Solar pays you back—and helps the planet at the same time.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">11. Scalable Systems</h3>
                  <p className="text-muted-foreground">Start small and expand your system as needed.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">12. Reliable Performance</h3>
                  <p className="text-muted-foreground">Top-tier solar panels can withstand heat, wind, and rain.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">13. Battery Storage Options</h3>
                  <p className="text-muted-foreground">Use energy at night or during outages.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">14. Boost Business from Home</h3>
                  <p className="text-muted-foreground">Power your work-from-home setup, appliances, and devices reliably.</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-2">15. Be a Role Model</h3>
                  <p className="text-muted-foreground">Show your community how clean energy can transform lives.</p>
                </div>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Experience These Benefits for Yourself
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to get a customized solar plan that fits your energy goals and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Custom Plan</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/products">View Products</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  benefits of solar panels, solar power Nigeria, why go solar, residential solar benefits, save money with solar
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

export default BlogPost5;
