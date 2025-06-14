
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost6 = () => {
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
                Avoid These 7 Common Mistakes When Choosing a Solar Installer in Nigeria
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit=crop"
                alt="Solar Installation Mistakes"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Investing in solar is a smart move—but choosing the wrong installer can turn a great idea into a frustrating, expensive mistake. Nigeria's solar market is growing fast, and unfortunately, so is the number of unqualified or unprofessional installers.
              </p>

              <p className="text-muted-foreground mb-8">
                Here are 7 common mistakes to avoid when selecting a solar provider in Nigeria.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">1. Ignoring Certifications and Credentials</h3>
                <p className="text-red-700">
                  Make sure the installer is certified by relevant authorities and has verifiable experience. Always ask for previous client references and completed projects.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">2. Choosing Based on Price Alone</h3>
                <p className="text-red-700">
                  Cheap doesn't always mean good. A low quote may mean poor-quality components, sloppy workmanship, or zero after-sales support.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">3. No Site Assessment</h3>
                <p className="text-red-700">
                  An installer who gives you a quote without inspecting your home may be cutting corners. Site assessments are critical for proper system design.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">4. Not Checking Warranty Terms</h3>
                <p className="text-red-700">
                  Avoid installers who don't offer panel and inverter warranties (at least 10–25 years). Check what's covered—and what's not.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">5. Lack of Customization</h3>
                <p className="text-red-700">
                  A one-size-fits-all approach is a red flag. Your solar needs should be assessed based on your energy usage, roof structure, and budget.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">6. Overlooking After-Sales Support</h3>
                <p className="text-red-700">
                  What happens if your system underperforms? Choose an installer with responsive customer service and a maintenance plan.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">7. Not Understanding the Contract</h3>
                <p className="text-red-700">
                  Always read the fine print. Ensure the agreement covers installation timelines, payment terms, warranties, and support.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Looking for a Trusted Solar Partner?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We pride ourselves on transparent service, expert installation, and long-term customer care. Contact us today to get started the right way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Trusted Service</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/projects">View Our Work</a>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  solar installer Nigeria, solar installation mistakes, best solar company, solar panel warranty, how to choose solar provider
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

export default BlogPost6;
