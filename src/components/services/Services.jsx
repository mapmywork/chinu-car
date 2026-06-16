import React from 'react';
import { SERVICES } from '../../data/travelData';
import { Compass, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
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
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
            Complete Travel Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
            Our Premium Travel Services
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            Dhan Singh's Professional Cab Service provides a comprehensive ecosystem of transport, hospitality, and sightseeing services optimized for comfort, transparency, and luxury.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-royal border border-gold/10 flex flex-col h-full group"
            >
              {/* Card Image Container */}
              <div className="relative h-60 overflow-hidden shrink-0">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
                {/* Card Tag Badge */}
                <span className="absolute top-4 right-4 bg-gold text-primary-dark text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                  {srv.tag}
                </span>
              </div>

              {/* Card Content Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow text-left space-y-4">
                <h3 className="font-serif text-xl font-bold text-primary-dark group-hover:text-gold transition-colors duration-200">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed flex-grow">
                  {srv.description}
                </p>

                {/* Card CTA */}
                <div className="pt-2">
                  <a
                    href="#booking"
                    onClick={(e) => handleScrollTo(e, '#booking')}
                    className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider uppercase text-primary group-hover:text-gold transition-colors duration-200"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
