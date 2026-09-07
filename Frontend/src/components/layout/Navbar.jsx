import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { Button } from '../common/Button';

export const Navbar = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Claims', href: '#claims' },
    { name: 'Partners', href: '#partners' },
    { name: 'About Us', href: '#about-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'py-2.5 sm:py-3 shadow-md border-b border-slate-200/80' : 'py-3 sm:py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo Only (Text Removed as Requested) */}
          <a href="#hero" className="flex items-center shrink-0 group">
            <img 
              src={CONTACT_INFO.logoUrl} 
              alt={CONTACT_INFO.companyName} 
              className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links (Single Line - No Wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#082F61] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Get Quote Button: Transparent BG, Primary Border, Primary Fill on Hover */}
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => onOpenQuoteModal()}
              className="whitespace-nowrap"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden"
            >
              Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="text-xs font-bold text-[#082F61] uppercase tracking-wider px-4">
              Direct Contact Lines
            </div>
            <div className="grid grid-cols-1 gap-2 px-2">
              {CONTACT_INFO.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.raw}`}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#082F61]"
                >
                  <span>{phone.label}</span>
                  <span className="font-bold text-[#082F61]">{phone.number}</span>
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              fullWidth
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
            >
              Get a Free Quote Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
