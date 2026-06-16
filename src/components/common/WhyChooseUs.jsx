import { ShieldCheck, CircleDollarSign, CheckSquare, Compass, Car, Flame, Building2, HelpCircle, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const USPs = [
  {
    id: 1,
    title: 'Trusted Service',
    description: 'Highly rated by local authorities & private clients. Safety first, always.',
    icon: ShieldCheck
  },
  {
    id: 2,
    title: 'Affordable Pricing',
    description: 'Clear, upfront invoicing. No hidden charges or surprise taxes.',
    icon: CircleDollarSign
  },
  {
    id: 3,
    title: 'Custom Fleet Booking',
    description: 'Get precisely the vehicle layout you need, from comfortable sedans to large group cruisers.',
    icon: Layers
  },
  {
    id: 4,
    title: 'Rajasthan Specialists',
    description: 'Drivers who know every sand dune, palace route, and local food corner.',
    icon: Compass
  },
  {
    id: 5,
    title: 'Comfortable Vehicles',
    description: 'Clean, modern, air-conditioned fleet with sanitized seating layouts.',
    icon: Car
  },
  {
    id: 6,
    title: 'Family Friendly',
    description: 'Safe for senior citizens and children. Custom halts and breaks allowed.',
    icon: Flame
  },
  {
    id: 7,
    title: 'Corporate Solutions',
    description: 'Dedicated accounts for businesses with punctual executive transfers.',
    icon: CheckSquare
  },
  {
    id: 8,
    title: '24/7 Road Support',
    description: 'Dedicated operator line. Always active for roadside assistance and changes.',
    icon: HelpCircle
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      {/* Visual gold lines decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
            Our Key Advantages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
            Why Choose Professional Cab Service?
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            Dhan Singh's agency prioritizes safety, punctuality, and comfort above all else, ensuring that your journey in the desert kingdom is memorable and stress-free.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {USPs.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-gold/10 hover:border-gold shadow-sm hover:shadow-royal transition-all duration-300 text-left flex flex-col items-start space-y-4 group"
              >
                <div className="p-3 bg-primary/5 rounded-2xl text-gold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-primary-dark group-hover:text-gold transition-colors duration-200">
                    {usp.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
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
