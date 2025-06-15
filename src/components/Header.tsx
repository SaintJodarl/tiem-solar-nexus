
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed IBUSA from navigation items
  const navigationItems = [
    {
      name: 'ABOUT US',
      href: '/about',
    },
    { name: 'SERVICES', href: '/services' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'BLOG', href: '/blog' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className={`h-20 sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300 ${isScrolled ? 'bg-accent' : 'bg-background/95'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px:8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — acts as home button */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" aria-label="TIEM Energy Home">
              <img
                src="/lovable-uploads/1d2fb112-5129-4d2a-b139-7d1a61a564a1.png"
                alt="TIEM Energy Logo"
                className="h-20 w-auto cursor-pointer"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={`text-foreground hover:text-primary transition-colors duration-200 font-medium text-xl pb-1 ${
                        isActiveLink(item.href) 
                          ? 'border-b-2 border-[#d20500] text-primary' 
                          : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center">
              {/* Get Solar Quote always points to our Funnell page */}
              <Link
                to="/get-quote"
                className="bg-[#d20500] text-white px-6 py-3 rounded-md font-medium hover:bg-[#b20000] transition-colors text-base"
                style={{ backgroundColor: "#d20500", color: "#fff" }}
              >
                Get Solar Quote
              </Link>
            </div>
            {/* Mobile menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <div className="w-4 h-4 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-current"></div>
                    <div className="w-full h-0.5 bg-current"></div>
                    <div className="w-full h-0.5 bg-current"></div>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className={`text-xl font-medium text-foreground hover:text-primary transition-colors ${
                          isActiveLink(item.href) ? 'text-primary border-l-2 border-primary pl-2' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <Link
                      to="/get-quote"
                      className="bg-[#d20500] text-white px-4 py-2 rounded-md font-medium hover:bg-[#b20000] transition-colors inline-block text-center w-full"
                      style={{ backgroundColor: "#d20500", color: "#fff" }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Solar Quote
                    </Link>
                    <div className="mt-4">
                      <p className="text-base text-muted-foreground mb-2">Contact us:</p>
                      <a href="tel:+2348063840230" className="text-primary font-medium text-base">
                        +234 806 384 0230
                      </a>
                      <br />
                      <a href="tel:+2348165539671" className="text-primary font-medium text-base">
                        +234 816 5539671
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
