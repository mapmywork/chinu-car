import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import logoImg from '../../assets/company-logo.png';
import { CONTACT_INFO } from '../../data/travelData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Plans', href: '#plans' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center group space-x-2">
            <img src={logoImg} alt="Chinnu Car Rentals" className="h-16 w-auto object-contain drop-shadow-md bg-white rounded-lg p-1 transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent ${scrolled ? 'text-primary' : 'text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
              className="flex items-center space-x-2 text-sm font-semibold hover:text-accent transition-colors duration-200"
            >
              <div className="p-2 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className={`hidden md:inline ${scrolled ? 'text-primary' : 'text-white'}`}>
                {CONTACT_INFO.phones[0]}
              </span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20self%20drive%20car.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white hover:bg-accent hover:shadow-glow px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-silver/20 transition-all duration-300 flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-primary' : 'text-white'
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-silver/20 overflow-hidden shadow-premium"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-primary hover:bg-accent/10 hover:text-accent transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-silver/20 flex flex-col space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-primary hover:bg-accent/10 hover:text-accent transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: {CONTACT_INFO.phones[0]}</span>
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20self%20drive%20car.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white text-center py-3 rounded-full text-sm font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 shadow-premium"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
