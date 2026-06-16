import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CONTACT_INFO } from '../../data/travelData';
import { Phone, Mail, MapPin, User, Calendar, MessageSquare, CheckCircle, Smartphone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [subRef, setSubRef] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      service: 'Cab Booking',
      travelDate: '',
      message: ''
    }
  });

  const onSubmit = (data) => {
    const ref = 'PCS-MSG-' + Math.floor(100 + Math.random() * 900);
    setSubRef(ref);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = (data) => {
    const textPayload = `Hello Dhan Singh (Professional Cab Service),%0A%0AI have an inquiry regarding your services:%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Service:* ${data.service}%0A*Date:* ${data.travelDate}%0A*Message:* ${data.message}%0A%0APlease let me know. Thank you!`;
    const waUrl = `https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${textPayload}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
            Plan Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
            Connect With Dhan Singh
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            Have questions about local tariffs, travel distances, fleet options, or custom itineraries? Send us a message or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-gold/15 shadow-sm space-y-6">
              
              <div className="border-b border-stone-200/50 pb-4">
                <span className="text-[10px] font-semibold text-gold uppercase tracking-wider block">
                  Proprietor
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mt-0.5">
                  {CONTACT_INFO.owner}
                </h3>
                <p className="text-xs text-stone-500 font-light">
                  Managing Director, {CONTACT_INFO.name}
                </p>
              </div>

              {/* Direct Details */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-primary/5 rounded-xl text-gold shrink-0 mt-0.5">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block font-light uppercase">Call Numbers</span>
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${CONTACT_INFO.cleanPhones[idx]}`}
                        className="hover:text-gold text-primary-dark font-semibold text-sm sm:text-base block mt-0.5"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-primary/5 rounded-xl text-gold shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block font-light uppercase">Email Address</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-gold text-primary-dark font-semibold text-sm block mt-0.5 break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-primary/5 rounded-xl text-gold shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block font-light uppercase">Office Address</span>
                    <span className="text-stone-600 text-xs sm:text-sm leading-relaxed block mt-0.5">
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Chat CTA */}
              <div className="pt-2 border-t border-stone-200/50 flex flex-wrap gap-3">
                <a
                  href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                  className="royal-gradient text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl hover:shadow-gold transition-all duration-300 flex items-center space-x-1.5"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Dhan%20Singh%20(Professional%20Cab%20Service),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20taxi%20service.%20Please%20share%20details%20and%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp Operator</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-gold/15 shadow-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit((data) => {
                      onSubmit(data);
                      // also direct user to WhatsApp message
                      handleWhatsAppRedirect(data);
                    })}
                    className="space-y-4 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium text-stone-600 mb-1.5">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                          <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full text-sm py-3 pl-10 pr-4 rounded-xl border border-stone-200 bg-white text-charcoal outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                            {...register('name', { required: 'Name is required' })}
                          />
                        </div>
                        {errors.name && <p className="text-rose-500 text-[10px] mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-medium text-stone-600 mb-1.5">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                          <input
                            type="tel"
                            placeholder="Enter phone"
                            className="w-full text-sm py-3 pl-10 pr-4 rounded-xl border border-stone-200 bg-white text-charcoal outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                            {...register('phone', {
                              required: 'Phone is required',
                              pattern: { value: /^[0-9+\s-]{10,15}$/, message: 'Invalid phone format' }
                            })}
                          />
                        </div>
                        {errors.phone && <p className="text-rose-500 text-[10px] mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service */}
                      <div>
                        <label className="block text-xs font-medium text-stone-600 mb-1.5">
                          Service Needed
                        </label>
                        <select
                          className="w-full text-sm py-3 px-4 rounded-xl border border-stone-200 bg-white text-charcoal outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold cursor-pointer"
                          {...register('service')}
                        >
                          <option value="Cab Booking">Cab Booking</option>
                          <option value="Fleet Booking">Fleet Booking</option>
                          <option value="Tour Package">Rajasthan Tour Package</option>
                          <option value="Airport Transfer">Airport Transfer</option>
                        </select>
                      </div>

                      {/* Travel Date */}
                      <div>
                        <label className="block text-xs font-medium text-stone-600 mb-1.5">
                          Travel Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                          <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full text-sm py-3 pl-10 pr-4 rounded-xl border border-stone-200 bg-white text-charcoal outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                            {...register('travelDate', { required: 'Date is required' })}
                          />
                        </div>
                        {errors.travelDate && <p className="text-rose-500 text-[10px] mt-1">{errors.travelDate.message}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-stone-600 mb-1.5">
                        Special Instructions / Message
                      </label>
                      <textarea
                        rows="4"
                        placeholder="Write details like number of passengers, choice of vehicle, travel route, etc."
                        className="w-full text-sm py-3 px-4 rounded-xl border border-stone-200 bg-white text-charcoal outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                        {...register('message')}
                      ></textarea>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary-dark text-gold py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                      >
                        <MessageSquare className="w-4 h-4 animate-pulse" />
                        <span>Send Booking Inquiry</span>
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl font-bold text-primary-dark">
                        Inquiry Received!
                      </h4>
                      <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
                        Thank you for contacting us. Your message reference is **{subRef}**. Dhan Singh has been notified of your details.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
                      <a
                        href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                        className="w-full royal-gradient text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 hover:shadow-gold transition-all"
                      >
                        <Phone className="w-4 h-4 text-gold" />
                        <span>Call Operator</span>
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          reset();
                        }}
                        className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all"
                      >
                        Send Another
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
