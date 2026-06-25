import React from 'react';
import { motion } from 'framer-motion';

import c2 from '../../assets/c2.jpeg';
import c3 from '../../assets/c3.jpeg';
import c4 from '../../assets/c4.jpeg';
import c5 from '../../assets/c5.jpeg';
import c6 from '../../assets/c6.jpeg';

const CUSTOMER_PHOTOS = [
  c2,
  c3,
  c4,
  c5,
  c6,
];
export default function TrustedByCustomers() {
  // Double the array to make the infinite scroll seamless
  const scrollItems = [...CUSTOMER_PHOTOS, ...CUSTOMER_PHOTOS];

  return (
    <section id="trusted" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent block">
            Our Community
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Customers
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full" />
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Join thousands of happy customers who have explored the world with our premium fleet.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex group">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Content */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-start">
          {scrollItems.map((photo, index) => (
            <div
              key={index}
              className="w-64 sm:w-80 h-48 sm:h-56 mx-3 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-silver/20"
            >
              <img
                src={photo}
                alt="Customer Moment"
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
