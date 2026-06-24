import React from 'react';
import { SERVICES, CONTACT_INFO } from '../../data/travelData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent block">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Premium</span> Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full" />
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            From daily self-drive rentals to luxury corporate travel — we have a service built for every need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-premium border border-silver/20 hover:border-accent/30 hover:shadow-glow flex flex-col group transition-all duration-400"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-black text-lg leading-tight">{srv.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <p className="text-sm text-gray-500 font-light leading-relaxed flex-grow">
                  {srv.description}
                </p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals!%20I%20am%20interested%20in%20your%20*${encodeURIComponent(srv.title)}*%20service.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-black tracking-widest uppercase text-accent hover:text-primary transition-colors group/link"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
