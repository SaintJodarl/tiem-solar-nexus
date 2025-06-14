
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Evolution of Solar Panel Technology: From Humble Beginnings to High Efficiency',
      teaser: 'Explore the fascinating journey of solar panel development from early photovoltaic cells to today\'s high-efficiency modules.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      date: 'December 2024',
      category: 'Technology'
    },
    {
      title: 'What Does a Solar Energy Consultant Really Do? (And Why You Might Need One)',
      teaser: 'Discover the role of solar consultants and how they can help you make the best decisions for your solar investment.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      date: 'December 2024',
      category: 'Consultation'
    },
    {
      title: 'The Ultimate Guide to Residential Solar Power in Nigeria (2025 Edition)',
      teaser: 'Complete guide covering everything you need to know about residential solar systems in Nigeria\'s unique environment.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      date: 'November 2024',
      category: 'Solar Guide'
    },
    {
      title: 'How to Make Your Home More Energy Efficient Before Going Solar',
      teaser: 'Learn practical steps to reduce your energy consumption before installing solar panels for maximum efficiency.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      date: 'November 2024',
      category: 'Energy Efficiency'
    },
    {
      title: '15 Powerful Benefits of Installing Solar Panels at Home',
      teaser: 'Comprehensive list of advantages that make solar panels a smart investment for Nigerian homeowners.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      date: 'October 2024',
      category: 'Benefits'
    },
    {
      title: 'Avoid These 7 Common Mistakes When Choosing a Solar Installer in Nigeria',
      teaser: 'Critical mistakes to avoid when selecting a solar installation company to ensure quality and value.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      date: 'October 2024',
      category: 'Installation'
    },
    {
      title: 'The Truth About Rooftop Solar Panels: Are They Safe for Your Home?',
      teaser: 'Address common safety concerns and myths about rooftop solar panel installations.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      date: 'September 2024',
      category: 'Safety'
    },
    {
      title: 'How to Finance Your Solar System in Nigeria Without Breaking the Bank',
      teaser: 'Explore financing options and payment plans that make solar energy accessible for Nigerian families.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      date: 'September 2024',
      category: 'Financing'
    },
    {
      title: 'Understanding Net Metering and Energy Storage in Nigeria',
      teaser: 'Learn about net metering policies and battery storage solutions for optimal energy management.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
      date: 'August 2024',
      category: 'Technology'
    },
    {
      title: 'Solar for Small Businesses: A Smart Investment in Unstable Grid Regions',
      teaser: 'How small businesses can benefit from solar energy in areas with unreliable electricity supply.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      date: 'August 2024',
      category: 'Business'
    },
    {
      title: 'From Grid-Tied to Off-Grid: Which Solar System Is Best for You?',
      teaser: 'Compare different solar system types to determine the best solution for your specific needs.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      date: 'July 2024',
      category: 'Solar Guide'
    },
    {
      title: 'How Solar Energy Helps Fight Climate Change & Build a Sustainable Future',
      teaser: 'Explore the environmental benefits of solar energy and its role in creating a sustainable future.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      date: 'July 2024',
      category: 'Environment'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert insights, guides, and latest updates on solar energy in Nigeria
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest solar energy news, guides, and insights for Nigerian homeowners and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl font-bold text-foreground line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {post.teaser}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Button className="w-full" variant="outline">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  📧 Stay Updated
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Subscribe to our newsletter for the latest solar energy news, tips, and exclusive offers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
                  />
                  <Button className="px-8">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Solar Guide', 'Technology', 'Business', 'Installation', 'Maintenance', 'Policy', 'Case Study', 'Environment'].map((category, index) => (
              <Button key={index} variant="outline" className="h-16 text-lg">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
