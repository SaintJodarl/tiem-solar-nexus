
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  const productCategories = [
    'Solar Panels',
    'Solar Inverters',
    'Batteries',
    'All-in-One Systems',
    'Charge Controllers',
    'Mounting Systems',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'IBUSA', href: '/ibusa' },
    { name: 'Installation Services', href: '/services' },
    { name: 'Warranties', href: '/services' },
    { name: 'FAQs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/98861454-0199-48d1-887a-bcf914504dd1.png" 
              alt="TIEM Energy Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-background/80 text-base leading-relaxed">
              Leading provider of high-quality solar energy solutions across Nigeria. Empowering homes and businesses with reliable, affordable solar power.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+2348063840230" className="hover:text-accent transition-colors text-base">
                  +234 806 384 0230
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+2348165539671" className="hover:text-accent transition-colors text-base">
                  +234 816 553 9671
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@tiemenergy.com" className="hover:text-accent transition-colors text-base">
                  info@tiemenergy.com
                </a>
              </div>
            </div>
          </div>

          {/* Product Categories - now links to products page instead of store */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Product Categories</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link to="/products" className="text-background/80 hover:text-accent transition-colors text-base">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/80 hover:text-accent transition-colors text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Support & Services</h4>
            <ul className="space-y-2 text-background/80">
              <li className="text-base">Free Consultation</li>
              <li className="text-base">Installation Services</li>
              <li className="text-base">Maintenance & Repair</li>
              <li className="text-base">Warranty Support</li>
              <li className="text-base">Technical Support</li>
              <li className="text-base">24/7 Emergency Service</li>
            </ul>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors text-base"
              >
                💬 Contact Support
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/80 text-base">
            © {new Date().getFullYear()} TIEM Energy. All rights reserved.
          </div>
          <div className="flex gap-6 text-base">
            <Link to="/contact" className="text-background/80 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-background/80 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-background/80 hover:text-accent transition-colors">
              Warranty Terms
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-background/60 text-base">
          <p>Trusted by 500+ customers across Nigeria • 2MW+ solar capacity installed • 98% customer satisfaction rate</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
