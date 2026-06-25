import React, { useState } from 'react';
import { FLEET, CONTACT_INFO } from '../../data/travelData';
import { Phone, PhoneCall, Star, Fuel, Users, Shield, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';


const PREMIUM_IDS = ['thar', 'thar-roxx', 'xuv700', 'scorpio-s11', 'scorpio-n', 'verna', 'creta'];

// Using images directly from travelData.js


function StandardFleetCard({ vehicle }) {
  const waText = `Hello Chinnu Car Rentals!%0AI am interested in renting the *${vehicle.name}* (${vehicle.type}).%0APlease share availability and rates.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden group shadow-premium border border-silver/20 hover:border-accent/30 hover:shadow-glow transition-all duration-400 flex flex-col"
    >
      {/* Car Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {PREMIUM_IDS.includes(vehicle.id) && (
          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
            ★ Premium
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
          {vehicle.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-bold text-primary text-base leading-tight group-hover:text-accent transition-colors">{vehicle.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5">Ideal for: {vehicle.idealFor}</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-accent font-black text-lg">₹{vehicle.price}</span>
            <span className="text-gray-400 text-[10px] block">/ Day</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
          <div className="flex items-center gap-1.5">
            <Fuel className="w-3 h-3 text-accent" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3 h-3 text-accent" />
            <span>{vehicle.seatingCapacity}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <Shield className="w-3 h-3 text-accent" />
            <span>{vehicle.transmission} · Sanitized · Insured</span>
          </div>
        </div>

        <div className="flex gap-2 pt-1 mt-auto">
          <a
            href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary hover:bg-accent text-white text-[11px] font-bold uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
            className="bg-gray-100 hover:bg-accent/10 text-gray-600 hover:text-accent border border-gray-200 text-[11px] font-bold py-2.5 px-3 rounded-xl flex items-center justify-center transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FleetSection() {

  const waText = `Hello Chinnu Car Rentals!%0AI am looking for a custom fleet requirement. Please share details.`;

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent block">
            Premium Fleet Showcase
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Complete Fleet
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full" />
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Every vehicle is professionally maintained, sanitized, and fully insured — ready to deliver your perfect drive.
          </p>
        </motion.div>

        {/* FLEET GRID */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FLEET.map((vehicle) => (
              <StandardFleetCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>

        {/* Custom Fleet Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-silver/10 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="flex items-center space-x-5">
            <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20 shrink-0">
              <PhoneCall className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h4 className="text-xl font-black text-white">Looking for a Custom Fleet?</h4>
              <p className="text-sm text-silver mt-1 font-light leading-relaxed">
                Corporate delegations, airport transfers, weddings — we handle multi-vehicle logistics with ease. Call us now.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
              className="bg-secondary text-primary hover:bg-gray-100 font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all shadow-premium"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all shadow-lg"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
