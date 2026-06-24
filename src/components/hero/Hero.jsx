import React, { useState } from 'react';
import { Phone, MessageSquare, Car, ChevronDown, Calendar, User, Settings } from 'lucide-react';
import { CONTACT_INFO } from '../../data/travelData';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const CAR_CATEGORIES = [
  'Economy (Swift, Punch)',
  'Compact SUV (Tata Punch)',
  'Premium Automatic (Taisor)',
  'Mileage Champion (Fronx CNG)',
  'Family MPV (Ertiga)',
  'Adventure SUV (Thar RWD)',
  'Luxury Adventure (Thar Roxx)',
  'Premium SUV (Scorpio N)',
  'SUV (Scorpio S11)',
  'Luxury SUV (XUV700)',
  'Flagship SUV (Fortuner)',
  'Ultra Luxury (Mercedes S-Class)',
];

export default function Hero() {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [category, setCategory] = useState('');
  const [driveType, setDriveType] = useState('self-drive');
  const [phone, setPhone] = useState('');

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    const text = `Hello Chinnu Car Rentals!%0A%0AI would like to check availability:%0A*Pickup Date:* ${pickupDate || 'Not specified'}%0A*Return Date:* ${returnDate || 'Not specified'}%0A*Category:* ${category || 'Not specified'}%0A*Drive Type:* ${driveType === 'self-drive' ? 'Self Drive' : 'With Driver'}%0A*Phone:* ${phone || 'Not specified'}%0A%0APlease confirm availability. Thank you!`;
    window.open(`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${text}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          alt="Premium Highway Drive"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 gradient-overlay" />
        {/* Blue accent glow */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/60 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-7 text-white space-y-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md"
            >
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-white text-xs font-semibold tracking-wide">
                Gurgaon's Premium Self Drive Rental Service
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Drive Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Dream Car
                </span>
                Today
              </h1>
              <p className="text-xl font-bold text-accent-light tracking-widest uppercase">
                {CONTACT_INFO.name}
              </p>
            </div>

            {/* Taglines */}
            <div className="space-y-1">
              <p className="text-lg text-white/80 font-light italic">Freedom To Drive · Drive Luxury. Drive Freedom.</p>
              <p className="text-sm text-white/60">
                Choose from economy, SUV, premium and luxury vehicles. Self drive or chauffeur-driven options available.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="bg-accent hover:bg-accent-light text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-2xl transition-all duration-300 shadow-glow hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Now
              </a>
              <a
                href="#fleet"
                onClick={(e) => handleScrollTo(e, '#fleet')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-2xl border border-white/25 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                Explore Fleet
              </a>
              <a
                href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-4 py-4 rounded-2xl transition-all backdrop-blur-sm flex items-center justify-center hover:-translate-y-0.5"
                title="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals!%20I%20would%20like%20to%20book%20a%20car.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/20 hover:bg-[#25D366] text-white border border-[#25D366]/40 px-4 py-4 rounded-2xl transition-all flex items-center justify-center hover:-translate-y-0.5"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              </a>
            </div>

            {/* Scroll hint */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="hidden lg:flex items-center space-x-2 text-white/40 text-xs"
            >
              <ChevronDown className="w-4 h-4" />
              <span>Scroll to explore our fleet</span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Booking Widget */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-premium border border-white/60 animate-float">
              {/* Widget Header */}
              <div className="mb-6 flex items-center space-x-3">
                <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20">
                  <Car className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">Check Availability</p>
                  <h3 className="text-lg font-bold text-primary">Book Your Car</h3>
                </div>
              </div>

              <form onSubmit={handleCheckAvailability} className="space-y-4">
                {/* Drive Type Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setDriveType('self-drive')}
                    className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${driveType === 'self-drive' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}
                  >
                    Self Drive
                  </button>
                  <button
                    type="button"
                    onClick={() => setDriveType('with-driver')}
                    className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${driveType === 'with-driver' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}
                  >
                    With Driver
                  </button>
                </div>

                {/* Pickup Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full text-sm py-3.5 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                {/* Return Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Return Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      min={pickupDate || new Date().toISOString().split('T')[0]}
                      className="w-full text-sm py-3.5 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                {/* Car Category */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Car Category</label>
                  <div className="relative">
                    <Settings className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-sm py-3.5 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Category</option>
                      {CAR_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Phone Number</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full text-sm py-3.5 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl transition-all duration-300 shadow-premium hover:shadow-glow flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-400 group-hover:text-white transition-colors" />
                  <span>Check Availability</span>
                </button>
              </form>

              {/* Trust note */}
              <p className="text-center text-xs text-gray-400 mt-4">
                🔒 Free booking · No credit card required · Instant confirmation
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
