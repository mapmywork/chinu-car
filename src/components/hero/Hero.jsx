import React from 'react';
import { Phone, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../../data/travelData';
import BookingForm from '../booking/BookingForm';
import { motion } from 'framer-motion';
import bg1 from '../../assets/bg1.png';

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
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
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-20 lg:py-0 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg1}
          alt="Luxury Rajasthan Desert Road"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.8]"
        />
        {/* Warm golden and royal blue gradient overlay */}
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left text-white space-y-6"
          >
            {/* Trusted badge */}
            <div className="inline-flex items-center space-x-2 bg-gold/20 border border-gold/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="text-gold text-xs font-semibold tracking-wider flex items-center">
                ★★★★★ <span className="ml-1.5 text-white font-medium">Trusted Travel Partner</span>
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Explore Rajasthan With
                <span className="block font-serif text-gold mt-1.5 font-normal italic">
                  Comfort &amp; Luxury
                </span>
              </h1>
              <p className="font-semibold text-lg sm:text-xl text-gold-light tracking-wide uppercase">
                {CONTACT_INFO.name}
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
              Reliable cab services, premium fleet vehicles, and customized Rajasthan tour packages for families, couples, and corporate travelers. Enjoy transparent pricing and experienced local guides.
            </p>

            {/* Quick trust badges */}
            <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
              <div className="flex items-center space-x-2.5 text-stone-200">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm font-medium">100% Secure Bookings</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-200">
                <Compass className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Local Rajasthan Experts</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#booking"
                onClick={(e) => handleScrollTo(e, '#booking')}
                className="gold-gradient hover:shadow-gold text-primary-dark font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all duration-300"
              >
                Book Cab
              </a>
              <a
                href="#fleet"
                onClick={(e) => handleScrollTo(e, '#fleet')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-300"
              >
                Explore Fleet
              </a>
              <a
                href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                className="p-3.5 bg-primary/20 hover:bg-primary text-white border border-primary/30 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                title="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Dhan%20Singh%20(Professional%20Cab%20Service),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20taxi%20service.%20Please%20share%20details%20and%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-[#25D366]/20 hover:bg-[#25D366] text-white border border-[#25D366]/30 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                title="WhatsApp Chat"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366] hover:text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="booking"
            className="lg:col-span-5 w-full"
          >
            <BookingForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
