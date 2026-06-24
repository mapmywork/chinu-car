import React, { useState } from 'react';
import { FLEET, CONTACT_INFO } from '../../data/travelData';
import { Phone, PhoneCall, Star, Fuel, Users, Shield, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const PREMIUM_IDS = ['s-class', 'fortuner', 'xuv700', 'scorpio-n', 'thar-roxx', 'thar-rwd'];

// Using images directly from travelData.js

function PremiumFleetCard({ vehicle }) {
  const waText = `Hello Chinnu Car Rentals!%0AI am interested in renting the *${vehicle.name}* (${vehicle.type}).%0APlease share availability and rates.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-primary rounded-3xl overflow-hidden group shadow-2xl border border-silver/10 hover:border-accent/40 transition-all duration-500 flex flex-col"
    >
      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-accent/30">
        ★ Premium
      </div>

      {/* Car Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-charcoal">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
          <span className="text-white text-xs font-semibold">{vehicle.type}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow text-white space-y-4">
        <div>
          <h3 className="text-xl font-black text-white leading-tight">{vehicle.name}</h3>
          <p className="text-silver text-xs mt-1">Ideal for: {vehicle.idealFor}</p>
        </div>

        {/* Features */}
        <div className="flex items-center gap-3 text-xs text-silver">
          <div className="flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-accent" />
            <span>Well Maintained</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <span>5 Star Rated</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2 mt-auto">
          <a
            href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-accent hover:bg-accent-light text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-glow hover:-translate-y-0.5 cursor-pointer"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Book Now</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

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
        <span className="absolute top-3 right-3 bg-white/90 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
          {vehicle.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <div>
          <h3 className="font-bold text-primary text-base leading-tight group-hover:text-accent transition-colors">{vehicle.name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">Ideal for: {vehicle.idealFor}</p>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-500">
          <Fuel className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>Well Maintained · Sanitized · Insured</span>
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
  const premiumFleet = FLEET.filter((v) => PREMIUM_IDS.includes(v.id));
  const standardFleet = FLEET.filter((v) => !PREMIUM_IDS.includes(v.id));

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

        {/* PREMIUM VEHICLES - Cinematic Carousel */}
        <div className="mb-20 hidden">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">Featured</span>
              <h3 className="text-2xl font-black text-primary mt-1">Signature Collection</h3>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-400">
              <span>Swipe to explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
            grabCursor
            centeredSlides
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            className="premium-fleet-swiper pb-12"
          >
            {premiumFleet.map((vehicle) => (
              <SwiperSlide key={vehicle.id}>
                <PremiumFleetCard vehicle={vehicle} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* STANDARD VEHICLES - Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Also Available</span>
            <h3 className="text-2xl font-black text-primary mt-1">Economy & Everyday</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {standardFleet.map((vehicle) => (
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
