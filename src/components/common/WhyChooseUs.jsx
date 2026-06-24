import React from 'react';
import { ShieldCheck, CircleDollarSign, Car, Zap, Clock, Users, Star, Phone, CarFront, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const USPs = [
  { title: 'Self Drive Available', description: 'Freedom to drive at your own schedule and pace.', icon: CarFront, color: 'bg-blue-50 text-accent border-blue-100' },
  { title: 'Luxury Fleet', description: 'Mercedes S-Class, Fortuner, XUV700 and more.', icon: Star, color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  { title: 'Daily Rental', description: 'Flexible daily plans starting from just one day.', icon: Car, color: 'bg-green-50 text-green-600 border-green-100' },
  { title: 'Weekly Rental', description: 'Save more with our curated weekly packages.', icon: Clock, color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  { title: 'Monthly Rental', description: 'Best value for long-term requirements.', icon: CircleDollarSign, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { title: 'Quick Booking', description: 'Book instantly via WhatsApp or phone call.', icon: Zap, color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { title: 'Well Maintained Cars', description: 'Every car is serviced, sanitized, and insured.', icon: ShieldCheck, color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { title: '24/7 Support', description: 'Round the clock assistance for all your needs.', icon: Phone, color: 'bg-red-50 text-red-600 border-red-100' },
  { title: 'Premium Gurgaon Service', description: 'Serving Gurgaon & NCR with pride since day one.', icon: MapPin, color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { title: 'Group & Family Travel', description: 'MPVs and SUVs for groups up to 7 passengers.', icon: Users, color: 'bg-pink-50 text-pink-600 border-pink-100' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent/3 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-400/3 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent block">
            Why Chinnu Car Rentals
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
            The Smart{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Choice</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full" />
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Gurgaon's most trusted self-drive car rental service, with a premium fleet and unmatched customer care.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {USPs.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-silver/20 hover:border-accent/30 shadow-premium hover:shadow-glow transition-all duration-300 flex flex-col items-start space-y-3 group cursor-default"
              >
                <div className={`p-2.5 rounded-xl border ${usp.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-primary text-sm leading-snug group-hover:text-accent transition-colors">
                    ✓ {usp.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
