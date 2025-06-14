import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About TIEM Energy
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering a sustainable future with reliable solar energy solutions across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 border-l-4 border-primary pl-4">
                Who We Are
              </h2>
              <div className="h-1 w-24 bg-accent ml-4"></div>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>TIEM ENERGY</strong> - Empowering a sustainable future. At TIEM ENERGY, we're committed to delivering reliable, cost-effective solar energy solutions to homes and businesses across Nigeria. From seamless installations to expert support, we make the switch to solar effortless and rewarding. We are a community of people building a new energy system with rooftop solar at the cornerstone, helping people go solar and join together in Nigeria's renewable energy transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 border-l-4 border-primary pl-4">
                Our Story
              </h2>
              <div className="h-1 w-24 bg-accent ml-4"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded to solve Nigeria's unstable power problem, TIEM Energy was born from personal frustration with unreliable electricity supply. What began as a quest for energy independence evolved into a national mission to power homes and businesses sustainably and affordably. Over the years, we have grown from a small startup to a trusted solar provider, delivering clean energy solutions across Nigeria while building lasting relationships with our customers and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Expert Team in Action</h2>
              <p className="text-muted-foreground">Professional installation services across Nigeria</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted rounded-lg h-72 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src='https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749897589/Solarroof_2_jw2vg8.jpg'
                    alt='Expeert Team Installation'
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                  <p className="text-sm text-muted-foreground">Solar Panel Installation</p>
                </div>
              </div>
              <div className="bg-muted rounded-lg h-72 flex items-center justify-center">
                <div className="text-center">
                 <img
                    src='https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749897736/Batter_2_vzlmnd.jpg'
                    alt='Expeert Team Installation'
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                  <p className="text-sm text-muted-foreground">Battery System Setup</p>
                </div>
              </div>
              <div className="bg-muted rounded-lg h-72 flex items-center justify-center">
                <div className="text-center">
                 <img
                    src='https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749897912/WhatsApp_Image_2025-06-04_at_9.13.11_AM_aalgwq.jpg'
                    alt='Expeert Team Installation'
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                  <p className="text-sm text-muted-foreground">Complete Home Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#d20500] text-white p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 border-l-4 border-white pl-4">
                  Our Mission
                </h3>
                <div className="h-1 w-24 bg-[#ffd901] ml-4"></div>
              </div>
              <p className="text-white/90 leading-relaxed">
                We're a community of people building a new energy system with rooftop solar at the cornerstone. We help people go solar, join together, and reduce dependency on unstable power grids by delivering long-lasting solar inverter systems that empower communities across Nigeria.
              </p>
            </div>

            <div className="bg-[#ffd901] text-gray-900 p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 border-l-4 border-[#d20500] pl-4">
                  Our Vision
                </h3>
                <div className="h-1 w-24 bg-[#d20500] ml-4"></div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                We envision a clean, equitable energy system that directs control and benefits back to local communities, with solar on every roof and reliable, affordable power accessible to all Nigerians, creating a sustainable energy future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Core Values</h2>
              <div className="h-1 w-24 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌱</span> Sustainability
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Committed to clean, renewable energy that protects the environment and secures a better future for all.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚀</span> Innovation
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Leveraging cutting-edge solar tech and evolving strategies to deliver efficient and modern energy solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">😊</span> Customer Satisfaction
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our top priority is delighting customers through personalized service, top-tier equipment, and full post-installation support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🤝</span> Integrity
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Honest recommendations, transparent pricing, and unwavering reliability in everything we do.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏆</span> Excellence
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every project meets high professional standards—built to perform, last, and impress.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔄</span> Accountability
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We stand by our work. With responsive maintenance and real-time system tracking, you're never left in the dark.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar? Why Now? Section - Added from Homepage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Solar? Why Now?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With rising electricity tariffs and increasing fuel costs following subsidy removal, solar energy has become the smart, reliable, and cost-effective solution. Today's solar technology is more efficient and accessible than ever—making now the ideal time to switch to clean, sustainable power. Nigeria enjoys abundant sunshine, and even in cloudy conditions, modern solar systems continue to deliver dependable performance—keeping you powered, always.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749838888/subhomoy-chatterjee-giw7D9_Jh_4-unsplash_ogng52.jpg"
                    alt="Abundant Sunshine"
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Abundant Sunshine</h4>
                <p className="text-muted-foreground">Nigeria receives excellent solar radiation year-round</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749838824/istockphoto-1365317443-612x612_mupzah.png"
                    alt="Cost Savings"
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Cost Savings</h4>
                <p className="text-muted-foreground">Reduce electricity bills by up to 90%</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1749837767/markus-winkler-K-ES96_f-Ck-unsplash_losab9.jpg"
                    alt="Environmental Impact"
                    className="w-full h-48 mx-auto rounded-lg object-cover mb-4"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Environmental Impact</h4>
                <p className="text-muted-foreground">Clean, renewable energy for a sustainable future</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Strategy Behind Our Success</h2>
              <div className="h-1 w-24 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* 5-Year Strategic Plan */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <span className="text-2xl">🗺️</span> 5-Year Strategic Plan
                  </h3>
                  <div className="h-1 w-24 bg-primary"></div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Bold goals to position TIEM ENERGY as Nigeria's leading clean-energy solution provider.
                </p>
                <div className="space-y-2">
                  <p className="text-foreground font-semibold">Goal Highlights:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Expand to 5 Nigerian states</li>
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Power 50,000+ homes and businesses</li>
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Help reduce national grid dependency by 10%</li>
                  </ul>
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <span className="text-2xl">👥</span> Target Audience
                  </h3>
                  <div className="h-1 w-24 bg-primary"></div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our solar energy solutions are designed for:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Ages 25–60</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Homeowners in urban and rural areas</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Small and Medium Enterprises (SMEs)</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Corporate businesses</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> NGOs and Institutions across Nigeria</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* USP */}
              <div className="bg-background p-8 rounded-lg border">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <span className="text-2xl">💡</span> Unique Selling Proposition (USP)
                  </h3>
                  <div className="h-1 w-24 bg-primary"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">TIEM ENERGY delivers custom solar inverter systems tailored to your unique power needs. We combine: Expert consultation to assess and plan the right solution Professional installation using durable, high-performance components Ongoing support to ensure long-term efficiency and reliability Whether for homes, businesses, we provide reliable, scalable solar systems backed by trusted expertise and full-service care.
              </p>
              </div>

              {/* Key Advantages */}
              <div className="bg-background p-8 rounded-lg border">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <span className="text-2xl">🛠</span> Key Advantages
                  </h3>
                  <div className="h-1 w-24 bg-primary"></div>
                </div>
                <p className="text-muted-foreground mb-4 font-semibold">
                  Why Nigerians trust TIEM ENERGY:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">✅</span> Skilled technical & engineering team</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✅</span> Flexible packages to suit every budget</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✅</span> Transparent, honest pricing</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✅</span> Nationwide delivery & support</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✅</span> Durable, long-lasting system components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Switch to Solar Energy?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a free consultation and customized quote for your home or business. Our experts will design the perfect solar solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/products">See Packages</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+2348063840230">Speak to a Consultant</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
