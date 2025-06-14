
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost1 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Back to Blog Button */}
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

      {/* Blog Post Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Solar Technology
                </span>
                <span className="text-muted-foreground text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                The Evolution of Solar Panel Technology: From Humble Beginnings to High Efficiency
              </h1>
              
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop"
                alt="Solar Panel Technology Evolution"
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Solar panel technology has come a long way from its modest beginnings. Once bulky and inefficient, today's solar panels are sleek, powerful, and capable of transforming the way we power our homes and businesses. Understanding this evolution not only builds appreciation for the technology but also highlights why now is the best time to invest in solar power.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">The Early Days: From Discovery to Function</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The journey of solar panels began in 1839 when French physicist Alexandre Edmond Becquerel discovered the photovoltaic effect—the process by which sunlight can be converted into electricity. However, it wasn't until 1954 that Bell Labs developed the first practical silicon solar cell, boasting an efficiency of about 6%.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Key Milestones in Solar Technology</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>1970s – 1980s:</strong> Solar gained traction during the oil crisis. Governments and scientists began exploring alternative energy seriously.</li>
                <li><strong>1990s:</strong> Introduction of grid-tied systems made solar more practical for homeowners.</li>
                <li><strong>2000s – Present:</strong> Advances in materials, manufacturing, and inverter technology have made solar cheaper and more efficient than ever.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Types of Solar Panels Today</h2>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
                <li><strong>Monocrystalline Panels</strong> – High efficiency and sleek appearance. Ideal for limited roof space.</li>
                <li><strong>Polycrystalline Panels</strong> – Cost-effective with slightly lower efficiency.</li>
                <li><strong>Thin-Film Panels</strong> – Flexible and lightweight but generally lower in performance.</li>
                <li><strong>N-type Monocrystalline & Bifacial Panels</strong> – The latest innovation, offering superior performance and longer lifespan.</li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Efficiency: Then vs Now</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today's best solar panels reach over 22% efficiency—nearly four times the early panels. Improved manufacturing techniques and better materials have played a huge role in this transformation.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">What This Means for You</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Investing in solar power today means getting cutting-edge technology at a more affordable cost. You can generate more electricity in less space, enjoy a quicker return on investment, and rest assured that you're using a product backed by decades of innovation.
              </p>

              {/* CTA Section */}
              <div className="bg-primary/10 p-8 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Upgrade to High-Efficiency Solar Panels?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We offer the latest solar technology tailored to your needs. Contact us today to find the perfect solar solution for your home or business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Free Consultation</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/products">View Our Products</a>
                  </Button>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                <p className="text-sm text-muted-foreground">
                  solar panel evolution, high-efficiency solar panels, types of solar panels, monocrystalline vs polycrystalline, solar power history
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

export default BlogPost1;
