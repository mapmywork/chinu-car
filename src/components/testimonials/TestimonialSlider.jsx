import React from 'react';
import { TESTIMONIALS } from '../../data/travelData';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSlider() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent block">
            Customer Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
            What Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Say</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full" />
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Trusted by hundreds of happy clients across Gurgaon and NCR for self-drive and chauffeur-driven experiences.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 24 } }}
            className="pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="bg-white rounded-3xl p-8 shadow-premium border border-silver/20 hover:border-accent/30 hover:shadow-glow flex flex-col h-full text-left space-y-6 relative overflow-hidden transition-all duration-300 group">
                  {/* Quote watermark */}
                  <Quote className="absolute right-6 top-6 w-12 h-12 text-accent/8 group-hover:text-accent/15 transition-colors duration-300" />

                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm text-gray-600 font-light leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center justify-between pt-4 border-t border-silver/20 mt-auto">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center shrink-0 shadow-glow">
                        <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                        <span className="text-[10px] text-gray-400">Verified Customer</span>
                      </div>
                    </div>
                    <div className="bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide">
                      5 ★
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
