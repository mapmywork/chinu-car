import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../data/travelData';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

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
    { name: 'Services', href: '#services' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of navbar
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center group">
            <img
              src={logo}
              alt="Professional Cab Service"
              className="h-12 sm:h-14 w-auto object-contain bg-white px-3 py-1.5 rounded-2xl shadow-md border border-gold/15 transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-charcoal-light' : 'text-primary-dark lg:text-white hover:text-gold'
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
              className="flex items-center space-x-2 text-sm font-semibold text-primary hover:text-gold transition-colors duration-200"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className={`hidden md:inline ${scrolled ? 'text-charcoal-light' : 'text-white'}`}>
                {CONTACT_INFO.phones[0]}
              </span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Dhan%20Singh%20(Professional%20Cab%20Service),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20taxi%20service.%20Please%20share%20details%20and%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="royal-gradient text-white hover:shadow-gold px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold/40 hover:border-gold transition-all duration-300 flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-gold animate-bounce" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-charcoal-light' : 'text-primary-dark lg:text-white'
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
            className="lg:hidden bg-warm-white/95 border-b border-gold/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-charcoal hover:bg-gold/10 hover:text-primary transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gold/10 flex flex-col space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-charcoal hover:bg-gold/10"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call: {CONTACT_INFO.phones[0]}</span>
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Dhan%20Singh%20(Professional%20Cab%20Service),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20taxi%20service.%20Please%20share%20details%20and%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="royal-gradient text-white text-center py-3 rounded-full text-sm font-semibold tracking-wider uppercase border border-gold/30 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-gold" />
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
