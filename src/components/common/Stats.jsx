import React from 'react';
import { motion } from 'framer-motion';
import { Users, Car, ShieldAlert, Award } from 'lucide-react';

const statsData = [
  {
    id: 1,
    value: '1,000+',
    label: 'Happy Travelers',
    description: 'Families, couples & corporates',
    icon: Users
  },
  {
    id: 2,
    value: '15+',
    label: 'Fleet Vehicles',
    description: 'Sedans, SUVs & luxury cruisers',
    icon: Car
  },
  {
    id: 3,
    value: '24/7',
    label: 'Customer Support',
    description: 'Always available on road',
    icon: ShieldAlert
  },
  {
    id: 4,
    value: '100%',
    label: 'Satisfaction',
    description: 'Highly rated 5-star services',
    icon: Award
  }
];

export default function Stats() {
  return (
    <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/90 backdrop-blur-md border border-gold/20 shadow-royal rounded-2xl md:rounded-3xl p-6 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gold/10">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`flex flex-col items-center text-center p-4 ${
                idx > 1 ? 'pt-6 lg:pt-4' : 'pt-4'
              } lg:pl-6 lg:pr-6`}
            >
              <div className="bg-primary/5 p-3 rounded-full mb-3 text-gold">
                <Icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <span className="font-serif text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
                {stat.value}
              </span>
              <span className="font-semibold text-sm md:text-base text-charcoal mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-stone-500 mt-0.5 leading-relaxed font-light">
                {stat.description}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
