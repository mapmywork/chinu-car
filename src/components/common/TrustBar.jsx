import React from 'react';
import { motion } from 'framer-motion';
import { Car, Calendar, Clock, Zap, Shield, Star } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Calendar, label: 'Daily Rental', color: 'text-blue-500' },
  { icon: Clock, label: 'Weekly Rental', color: 'text-indigo-500' },
  { icon: Zap, label: 'Monthly Rental', color: 'text-cyan-500' },
  { icon: Car, label: 'Self Drive', color: 'text-accent' },
  { icon: Star, label: 'Premium Fleet', color: 'text-yellow-500' },
  { icon: Shield, label: 'Quick Booking', color: 'text-green-500' },
];

export default function TrustBar() {
  return (
    <section className="bg-primary py-5 border-b border-silver/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto gap-4 no-scrollbar">
          {TRUST_ITEMS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center space-x-2.5 shrink-0 px-4 py-2 rounded-full border border-silver/10 hover:border-accent/40 hover:bg-white/5 transition-all duration-300 cursor-default group"
            >
              <item.icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-xs font-semibold text-silver-light tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
