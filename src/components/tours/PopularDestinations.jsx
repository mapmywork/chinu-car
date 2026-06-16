import React from 'react';
import { DESTINATIONS, CONTACT_INFO } from '../../data/travelData';
import { MapPin, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PopularDestinations() {
  const triggerWhatsAppTour = (destName) => {
    const textPayload = `Hello Dhan Singh (Professional Cab Service),%0AI am planning a trip to *${destName}* and would like to customize a Rajasthan Tour Package. Please share the itinerary and pricing.`;
    const waUrl = `https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${textPayload}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
            Royal Rajasthan Wonders
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
            Popular Rajasthan Experiences
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            Delve into Rajasthan's rich historical legacies, vibrant desert culture, wildlife sanctuaries, and serene lake views. Select a location to request a customized tour.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-stone-50 rounded-3xl overflow-hidden shadow-royal border border-gold/10 flex flex-col h-full group"
            >
              {/* Card Image Container */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Visual Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
                {/* Location indicator Tag */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1.5 text-white">
                  <MapPin className="w-4 h-4 text-gold fill-gold/20" />
                  <span className="font-serif text-xl font-bold tracking-wide">{dest.name}</span>
                </div>
                {/* Subtitle tag */}
                <span className="absolute top-4 right-4 bg-primary text-gold text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-md border border-gold/20">
                  {dest.tagline}
                </span>
              </div>

              {/* Card Content Details */}
              <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                  {dest.description}
                </p>

                {/* Popular Sightseeing Attractions */}
                <div className="space-y-2 flex-grow">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-dark block">
                    Popular Attractions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popularAttractions.map((att, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-white border border-stone-200 text-stone-600 px-2 py-0.5 rounded-md flex items-center"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 mr-1 text-gold" />
                        {att}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Button Action */}
                <button
                  onClick={() => triggerWhatsAppTour(dest.name)}
                  className="w-full text-center py-3 bg-white hover:bg-gold hover:text-primary-dark text-primary border border-gold/40 hover:border-gold rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Customize {dest.name} Tour</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
