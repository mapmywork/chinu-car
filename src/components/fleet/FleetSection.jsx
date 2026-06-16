import React from 'react';
import { FLEET, CONTACT_INFO } from '../../data/travelData';
import { Users, Briefcase, Wind, Check, PhoneCall, Car, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FleetSection() {
  const triggerWhatsAppFleet = (vehicleName) => {
    const textPayload = `Hello Dhan Singh (Professional Cab Service),%0AI am interested in booking the *${vehicleName}* for my trip. Please share the rates and availability.`;
    const waUrl = `https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${textPayload}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="fleet" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
            Our Premium Travel Fleet
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
            Explore Our Available Vehicles
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            Choose from our curated fleet of premium sedans, luxury SUVs, and spacious cruisers. Every vehicle is thoroughly cleaned, fully air-conditioned, and driven by our highly experienced, professional operators.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-royal border border-gold/10 flex flex-col h-full group hover:border-gold/30 hover:shadow-gold-sm transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-60 overflow-hidden shrink-0 bg-stone-100">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category tag overlay */}
                <span className="absolute top-4 right-4 bg-gold text-primary-dark text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md">
                  {vehicle.type}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow text-left space-y-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary-dark leading-tight group-hover:text-gold transition-colors duration-200">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-light mt-1 italic">
                    Best for: {vehicle.idealFor}
                  </p>
                </div>

                {/* Technical Specs Tags */}
                <div className="grid grid-cols-3 gap-2 bg-stone-50 p-3 rounded-2xl border border-stone-100 text-stone-600">
                  <div className="flex flex-col items-center justify-center text-center space-y-1">
                    <Users className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-[10px] font-medium leading-none">{vehicle.capacity}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center space-y-1 border-x border-stone-200">
                    <Briefcase className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-[10px] font-medium leading-none">{vehicle.luggage}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center space-y-1">
                    <Wind className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-[10px] font-medium leading-none text-center truncate w-full px-1" title={vehicle.ac}>
                      AC
                    </span>
                  </div>
                </div>

                {/* Premium Features Checklist */}
                <div className="space-y-2 flex-grow">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                    Premium Inclusions:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] text-stone-600 flex items-center space-x-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="font-light leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Booking Action */}
                <div className="pt-5 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block font-light">Rate starting at</span>
                    <span className="text-base font-bold text-primary">{vehicle.pricePerKm}</span>
                  </div>
                  <button
                    onClick={() => triggerWhatsAppFleet(vehicle.name)}
                    className="royal-gradient text-white hover:shadow-gold px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer flex items-center space-x-1.5 border border-gold/30 hover:border-gold"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Book Cab</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Custom Corporate/Wedding Fleet Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-gold/20 p-6 sm:p-8 rounded-3xl shadow-royal flex flex-col md:flex-row items-center justify-between text-left space-y-6 md:space-y-0"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3.5 bg-primary/5 rounded-2xl text-gold shrink-0 border border-gold/15">
              <Car className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-primary-dark">
                Planning a Wedding or Group Event?
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed mt-1">
                We specialize in executing multi-vehicle logistics for corporate delegations, large tour groups, and luxury destination weddings in Rajasthan. Talk to Dhan Singh to design your travel layout.
              </p>
            </div>
          </div>
          <a
            href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
            className="bg-white hover:bg-gold hover:text-primary-dark text-primary border border-gold/40 hover:border-gold px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase shrink-0 flex items-center space-x-2 transition-all duration-300 shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-gold" />
            <span>Call Dhan Singh</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
