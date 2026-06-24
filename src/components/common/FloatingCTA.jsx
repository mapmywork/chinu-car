import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../../data/travelData';
import { Phone, ArrowUp, CalendarDays } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBookNowScroll = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
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
    <>
      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-silver/20 py-3 px-4 flex items-center justify-between shadow-2xl space-x-3">
        {/* Call Now Button */}
        <a
          href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
          className="flex-1 bg-secondary text-primary font-bold text-[10px] py-3 rounded-xl border border-silver/30 uppercase tracking-wider flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-4 h-4 text-accent" />
          <span>Call Now</span>
        </a>

        {/* Book Now Scroll Button */}
        <a
          href="#contact"
          onClick={handleBookNowScroll}
          className="flex-1 bg-primary text-secondary font-bold text-[10px] py-3 rounded-xl border border-silver/20 uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md"
        >
          <CalendarDays className="w-4 h-4 text-accent" />
          <span>Book Now</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20self%20drive%20car.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white font-bold text-[10px] py-3 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md shadow-green-500/10 cursor-pointer"
        >
          <FaWhatsapp className="w-4.5 h-4.5" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating Actions */}
      <div className="hidden lg:flex flex-col space-y-3.5 fixed bottom-8 right-8 z-45">
        <AnimatePresence>
          {/* Scroll to Top Trigger */}
          {showScrollTop && (
            <motion.button
              key="scroll-top"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="bg-secondary hover:bg-accent text-primary hover:text-white p-3.5 rounded-full shadow-premium border border-silver/20 hover:border-accent transition-all duration-300 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Book Now Badge */}
        <motion.a
          href="#contact"
          onClick={handleBookNowScroll}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-primary text-secondary border border-silver/30 p-3.5 rounded-full shadow-premium flex items-center justify-center hover:scale-105 transition-transform group"
          title="Quick Booking Form"
        >
          <CalendarDays className="w-5 h-5 text-accent group-hover:text-secondary transition-colors" />
        </motion.a>

        {/* Floating Dial Badge */}
        <motion.a
          href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-secondary text-primary hover:text-accent border border-silver/20 p-3.5 rounded-full shadow-premium flex items-center justify-center hover:scale-105 transition-transform"
          title="Call Chinnu Car Rentals"
        >
          <Phone className="w-5 h-5 text-accent" />
        </motion.a>

        {/* Floating WhatsApp Badge */}
        <motion.a
          href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20self%20drive%20car.`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#25D366] hover:bg-[#20ba56] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center hover:scale-115 transition-transform cursor-pointer relative"
          title="Chat on WhatsApp"
        >
          <span className="absolute -top-1.5 -left-1.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
          </span>
          <FaWhatsapp className="w-5.5 h-5.5" />
        </motion.a>
      </div>
    </>
  );
}
