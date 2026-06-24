import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../data/travelData';
import { Check, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const PLANS = [
  {
    id: 'daily',
    title: 'Daily Rental',
    subtitle: 'Perfect for quick needs',
    duration: '1–3 Days',
    highlight: false,
    features: [
      'Economy to Luxury Cars',
      'Self Drive or With Driver',
      'Flexible Pickup & Drop',
      'GPS Enabled Vehicles',
      'Fuel: Self or Prepaid',
      '24/7 Customer Support',
    ],
    cta: 'Book Daily Plan',
    badge: null,
  },
  {
    id: 'weekly',
    title: 'Weekly Rental',
    subtitle: 'Most popular choice',
    duration: '7 Days',
    highlight: true,
    features: [
      'All Daily Benefits',
      'Premium & SUV Access',
      'Priority Booking',
      'Free Roadside Assistance',
      'Flexible Mileage Plans',
      'Dedicated Account Manager',
    ],
    cta: 'Book Weekly Plan',
    badge: 'Most Popular',
  },
  {
    id: 'monthly',
    title: 'Monthly Rental',
    subtitle: 'Best value for regulars',
    duration: '30 Days',
    highlight: false,
    features: [
      'All Weekly Benefits',
      'Discounted Rates',
      'Car Swap Option',
      'Corporate Billing',
      'Unlimited Kilometers*',
      'Premium Vehicle Access',
    ],
    cta: 'Book Monthly Plan',
    badge: 'Best Value',
  },
  {
    id: 'custom',
    title: 'Custom Plan',
    subtitle: 'Tailored for you',
    duration: 'Your Timeline',
    highlight: false,
    features: [
      'Corporate Contracts',
      'Wedding Fleet Package',
      'Long-Term Discounts',
      'Multi-Vehicle Booking',
      'Airport Transfer Bundles',
      'Fully Customizable Terms',
    ],
    cta: 'Get Custom Quote',
    badge: 'Enterprise',
  },
];

export default function RentalPlans() {
  return (
    <section id="plans" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent block">
            Flexible Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Rental{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Plans</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-cyan-400 mx-auto rounded-full" />
          <p className="text-sm text-silver font-light leading-relaxed">
            Pick a plan that fits your schedule. From one-day joyrides to full monthly packages — we have got you covered.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-7 flex flex-col space-y-6 border transition-all duration-400 ${
                plan.highlight
                  ? 'bg-accent border-accent shadow-2xl shadow-accent/30 scale-[1.02]'
                  : 'bg-white/5 border-silver/10 hover:border-accent/30 hover:bg-white/10'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                  plan.highlight ? 'bg-white text-accent' : 'bg-accent text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Info */}
              <div className="space-y-1">
                <div className={`text-[10px] font-black uppercase tracking-widest ${plan.highlight ? 'text-white/70' : 'text-accent'}`}>
                  {plan.duration}
                </div>
                <h3 className={`text-xl font-black ${plan.highlight ? 'text-white' : 'text-white'}`}>
                  {plan.title}
                </h3>
                <p className={`text-xs ${plan.highlight ? 'text-white/70' : 'text-silver'}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-px ${plan.highlight ? 'bg-white/20' : 'bg-silver/10'}`} />

              {/* Features */}
              <ul className="space-y-2.5 flex-grow">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center space-x-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-white/20' : 'bg-accent/20'}`}>
                      <Check className={`w-2.5 h-2.5 ${plan.highlight ? 'text-white' : 'text-accent'}`} />
                    </div>
                    <span className={`text-xs ${plan.highlight ? 'text-white/90' : 'text-silver'}`}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals!%20I%20am%20interested%20in%20the%20*${encodeURIComponent(plan.title)}*.%20Please%20share%20details%20and%20pricing.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-2 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                  plan.highlight
                    ? 'bg-white text-accent hover:bg-gray-50 shadow-lg'
                    : 'bg-accent/20 text-white border border-accent/30 hover:bg-accent hover:border-accent'
                }`}
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>{plan.cta}</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-silver text-xs font-light">
            * All plans are subject to availability. Prices vary by vehicle category. Contact us for exact quotes.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
