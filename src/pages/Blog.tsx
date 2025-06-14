
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Solar Technology',
    'Solar Basics & Guides', 
    'Tips & Benefits',
    'Solar Installation & Safety',
    'Financing & Investment',
    'Policy & Regulation',
    'Business & Commercial Use',
    'Environmental Impact'
  ];

  const blogPosts = [
    {
      title: 'The Evolution of Solar Panel Technology: From Humble Beginnings to High Efficiency',
      teaser: 'Explore the fascinating journey of solar panel development from early photovoltaic cells to today\'s high-efficiency modules.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      date: 'December 2024',
      category: 'Solar Technology',
      readingTime: '5 min read',
      keywords: 'solar panel evolution, high-efficiency solar panels, types of solar panels, monocrystalline vs polycrystalline, solar power history',
      cta: 'Ready to upgrade to high-efficiency solar panels? Contact us today for a free consultation!'
    },
    {
      title: 'What Does a Solar Energy Consultant Really Do? (And Why You Might Need One)',
      teaser: 'Discover the role of solar consultants and how they can help you make the best decisions for your solar investment.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      date: 'December 2024',
      category: 'Solar Basics & Guides',
      readingTime: '5 min read',
      keywords: 'solar energy consultant, solar planning, custom solar system, energy audit, solar cost savings',
      cta: 'Need expert solar consultation? Let\'s help you go solar the smart way!'
    },
    {
      title: 'The Ultimate Guide to Residential Solar Power in Nigeria (2025 Edition)',
      teaser: 'Complete guide covering everything you need to know about residential solar systems in Nigeria\'s unique environment.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop',
      date: 'November 2024',
      category: 'Tips & Benefits',
      readingTime: '5 min read',
      keywords: 'residential solar Nigeria, solar power costs Nigeria, home solar installation, 2025 solar guide',
      cta: 'Ready to start your solar journey in Nigeria? Contact us today for a free consultation!'
    },
    {
      title: 'How to Make Your Home More Energy Efficient Before Going Solar',
      teaser: 'Learn practical steps to reduce your energy consumption before installing solar panels for maximum efficiency.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      date: 'November 2024',
      category: 'Solar Basics & Guides',
      readingTime: '5 min read',
      keywords: 'energy-efficient home, reduce energy consumption, pre-solar tips, home energy savings, Nigeria',
      cta: 'Want to optimize your home before going solar? Let\'s help you go solar the smart way!'
    },
    {
      title: '15 Powerful Benefits of Installing Solar Panels at Home',
      teaser: 'Comprehensive list of advantages that make solar panels a smart investment for Nigerian homeowners.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
      date: 'October 2024',
      category: 'Tips & Benefits',
      readingTime: '5 min read',
      keywords: 'benefits of solar panels, solar power Nigeria, why go solar, residential solar benefits, save money with solar',
      cta: 'Ready to enjoy these solar benefits? Contact us today for a free consultation!'
    },
    {
      title: 'Avoid These 7 Common Mistakes When Choosing a Solar Installer in Nigeria',
      teaser: 'Critical mistakes to avoid when selecting a solar installation company to ensure quality and value.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      date: 'October 2024',
      category: 'Solar Installation & Safety',
      readingTime: '5 min read',
      keywords: 'choosing solar installer, installation mistakes, certified solar companies Nigeria',
      cta: 'Choose the right installer from the start. Contact us today for a free consultation!'
    },
    {
      title: 'The Truth About Rooftop Solar Panels: Are They Safe for Your Home?',
      teaser: 'Address common safety concerns and myths about rooftop solar panel installations.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      date: 'September 2024',
      category: 'Solar Installation & Safety',
      readingTime: '5 min read',
      keywords: 'rooftop solar safety, structural integrity solar, solar panel risks',
      cta: 'Concerned about solar safety? Let\'s help you go solar the smart way with proper installation!'
    },
    {
      title: 'How to Finance Your Solar System in Nigeria Without Breaking the Bank',
      teaser: 'Explore financing options and payment plans that make solar energy accessible for Nigerian families.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop',
      date: 'September 2024',
      category: 'Financing & Investment',
      readingTime: '5 min read',
      keywords: 'solar financing Nigeria, pay-as-you-go solar, solar loans and leases',
      cta: 'Explore flexible financing options. Contact us today for a free consultation!'
    },
    {
      title: 'Understanding Net Metering and Energy Storage in Nigeria',
      teaser: 'Learn about net metering policies and battery storage solutions for optimal energy management.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      date: 'August 2024',
      category: 'Policy & Regulation',
      readingTime: '5 min read',
      keywords: 'net metering Nigeria, energy storage systems, excess power credit',
      cta: 'Want to maximize your solar investment with storage? Contact us today for a free consultation!'
    },
    {
      title: 'Solar for Small Businesses: A Smart Investment in Unstable Grid Regions',
      teaser: 'How small businesses can benefit from solar energy in areas with unreliable electricity supply.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop',
      date: 'August 2024',
      category: 'Business & Commercial Use',
      readingTime: '5 min read',
      keywords: 'solar for business, power backup SME Nigeria, reduce power outages',
      cta: 'Ready to power your business with solar? Let\'s help you go solar the smart way!'
    },
    {
      title: 'From Grid-Tied to Off-Grid: Which Solar System Is Best for You?',
      teaser: 'Compare different solar system types to determine the best solution for your specific needs.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      date: 'July 2024',
      category: 'Solar Basics & Guides',
      readingTime: '5 min read',
      keywords: 'grid-tied vs off-grid, hybrid solar system Nigeria, best solar setup',
      cta: 'Not sure which system is right for you? Contact us today for a free consultation!'
    },
    {
      title: 'How Solar Energy Helps Fight Climate Change & Build a Sustainable Future',
      teaser: 'Explore the environmental benefits of solar energy and its role in creating a sustainable future.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop',
      date: 'July 2024',
      category: 'Environmental Impact',
      readingTime: '5 min read',
      keywords: 'solar energy and climate change, green energy Nigeria, sustainable living solar',
      cta: 'Be part of the sustainable future. Contact us today for a free consultation!'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Solar Energy Blog & Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert insights, guides, and latest updates on solar energy in Nigeria. Stay informed and make smart solar decisions.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Browse by Category</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {post.readingTime}
                  </div>
                </div>

                <CardHeader className="flex-grow">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl font-bold text-foreground line-clamp-2 mb-3">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3 mb-4">
                    {post.teaser}
                  </CardDescription>
                  
                  {/* SEO Keywords Display */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground/70 italic">
                      Keywords: {post.keywords}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-primary/10 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-primary">
                      {post.cta}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex gap-2">
                    <Button className="flex-1" variant="outline" size="sm">
                      Read More
                    </Button>
                    <Button className="flex-1" size="sm" asChild>
                      <a href="/contact">Get Quote</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Back to All Posts */}
          {selectedCategory !== 'All' && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory('All')}
                className="px-8"
              >
                ← Back to All Posts
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  📧 Stay Updated with Solar Insights
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Subscribe to our newsletter for the latest solar energy news, tips, and exclusive offers delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
                    required
                  />
                  <Button className="px-8">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Join 5,000+ Nigerians already getting solar insights weekly
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links to Services */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto p-8 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started with Solar?
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground mb-6">
                  Don't just read about solar energy – experience it! Our experts are ready to help you design the perfect solar solution for your needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/contact">Get Free Quote</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/services">Our Services</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/products">View Products</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
