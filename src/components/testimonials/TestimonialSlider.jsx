import React from 'react';
import { TESTIMONIALS } from '../../data/travelData';
import { Star, Quote, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSlider() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50 border-t border-gold/15 relative overflow-hidden">
      {/* Visual Ambient Gold Gradient */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
            Reviews &amp; Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
            What Our Travelers Say About Us
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            Read stories of travelers, couples, and corporate companies who explored Rajasthan with Dhan Singh's Professional Cab Service.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }}
            className="pb-16"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="glass-card bg-white p-8 rounded-3xl shadow-royal border border-gold/15 flex flex-col justify-between h-full text-left space-y-6 relative overflow-hidden group">
                  {/* Quote icon watermark */}
                  <Quote className="absolute right-6 top-6 w-12 h-12 text-gold/10 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Profile Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <div>
                      <h4 className="font-serif font-bold text-primary-dark text-sm sm:text-base">
                        {t.name}
                      </h4>
                      <span className="text-[10px] text-stone-400 block font-light">
                        {t.city}
                      </span>
                    </div>

                    {/* Service tag */}
                    <span className="text-[10px] bg-primary/5 text-primary border border-primary/15 px-2.5 py-1 rounded-lg font-semibold flex items-center space-x-1">
                      <Award className="w-3 h-3 text-gold" />
                      <span>{t.service}</span>
                    </span>
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
