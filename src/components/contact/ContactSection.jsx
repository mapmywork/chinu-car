import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CONTACT_INFO, FLEET } from '../../data/travelData';
import { Phone, Mail, MapPin, User, Calendar, MessageSquare, CheckCircle, Smartphone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      vehicle: '',
      duration: 'Daily Rental',
      pickupDate: '',
      message: ''
    }
  });

  const onSubmit = (data) => {
    const textPayload = `Hello Chinnu Car Rentals!%0A%0AI would like to book a car:%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Vehicle:* ${data.vehicle || 'Not specified'}%0A*Rental Duration:* ${data.duration}%0A*Pickup Date:* ${data.pickupDate}%0A*Message:* ${data.message || 'No additional notes'}%0A%0APlease confirm availability. Thank you!`;
    const waUrl = `https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${textPayload}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/3 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
            Book Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Car Today</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto rounded-full" />
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Reach out for bookings, availability checks, or custom fleet requirements. We respond within minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-primary rounded-3xl p-8 border border-silver/10 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />

              <div className="border-b border-silver/20 pb-5 relative">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest block">
                  Contact Us
                </span>
                <h3 className="text-2xl font-black text-white mt-1">{CONTACT_INFO.name}</h3>
                <p className="text-xs text-silver font-light mt-0.5">{CONTACT_INFO.tagline}</p>
              </div>

              <div className="space-y-5 relative">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20 shrink-0">
                    <Smartphone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] text-silver block font-light uppercase tracking-wider">Phone</span>
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <a key={idx} href={`tel:${CONTACT_INFO.cleanPhones[idx]}`}
                        className="hover:text-accent text-white font-bold text-base block mt-0.5 transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20 shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] text-silver block font-light uppercase tracking-wider">Email</span>
                    <a href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-accent text-white font-semibold text-sm block mt-0.5 break-all transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20 shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] text-silver block font-light uppercase tracking-wider">Address</span>
                    <span className="text-silver text-xs leading-relaxed block mt-0.5">{CONTACT_INFO.address}</span>
                  </div>
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="pt-4 border-t border-silver/20 flex flex-col sm:flex-row gap-3 relative">
                <a href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                  className="flex-1 bg-accent hover:bg-accent-light text-white text-xs font-bold tracking-widest uppercase px-5 py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-glow">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=Hello%20Chinnu%20Car%20Rentals!%20I%20would%20like%20to%20book%20a%20car.`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold tracking-widest uppercase px-5 py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-premium border border-silver/20 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1234567890!2d77.0735!3d28.4945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d6a7b5b9c3%3A0x123456789!2sUdyog+Vihar%2C+Sector+18%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chinnu Car Rentals Location"
              />
            </div>
          </motion.div>

          {/* RIGHT: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-gray-50 rounded-3xl p-8 border border-silver/20 shadow-premium">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 text-left"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-black text-primary">Send Booking Inquiry</h3>
                      <p className="text-xs text-gray-400 font-light mt-1">Fill in your details and we'll respond via WhatsApp instantly.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                          <input type="text" placeholder="Enter full name"
                            className="w-full text-sm py-3.5 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                            {...register('name', { required: 'Name is required' })} />
                        </div>
                        {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                          <input type="tel" placeholder="+91 XXXXX XXXXX"
                            className="w-full text-sm py-3.5 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                            {...register('phone', { required: 'Phone is required', pattern: { value: /^[0-9+\s-]{10,15}$/, message: 'Invalid phone' } })} />
                        </div>
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Vehicle */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Preferred Vehicle</label>
                        <select className="w-full text-sm py-3.5 px-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                          {...register('vehicle')}>
                          <option value="">Any / Not Sure</option>
                          {FLEET.map((car) => (
                            <option key={car.id} value={car.name}>{car.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* Duration */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Rental Duration</label>
                        <select className="w-full text-sm py-3.5 px-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                          {...register('duration')}>
                          <option>Daily Rental</option>
                          <option>Weekly Rental</option>
                          <option>Monthly Rental</option>
                          <option>Custom Duration</option>
                        </select>
                      </div>
                    </div>

                    {/* Pickup Date */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Pickup Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                        <input type="date" min={new Date().toISOString().split('T')[0]}
                          className="w-full text-sm py-3.5 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                          {...register('pickupDate', { required: 'Pickup date is required' })} />
                      </div>
                      {errors.pickupDate && <p className="text-red-500 text-[10px] mt-1">{errors.pickupDate.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Message</label>
                      <textarea rows={4} placeholder="Any special requirements, preferred pickup location, or questions..."
                        className="w-full text-sm py-3.5 px-4 rounded-xl border border-gray-200 bg-white text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                        {...register('message')} />
                    </div>

                    {/* Submit */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button type="submit" disabled={isSubmitting}
                        className="sm:col-span-2 bg-primary hover:bg-accent text-white py-4 rounded-xl text-xs font-black tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-premium hover:shadow-glow">
                        <FaWhatsapp className="w-4 h-4 text-green-400" />
                        <span>{isSubmitting ? 'Sending...' : 'Book Now'}</span>
                      </button>
                      <a href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                        className="bg-gray-100 hover:bg-gray-200 text-primary py-4 rounded-xl text-xs font-black tracking-widest uppercase flex items-center justify-center space-x-2 transition-all">
                        <Phone className="w-4 h-4 text-accent" />
                        <span>Call</span>
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-black text-primary">Booking Sent!</h4>
                      <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                        Your inquiry has been sent to Chinnu Car Rentals on WhatsApp. We'll confirm availability shortly!
                      </p>
                    </div>
                    <button onClick={() => { setSubmitted(false); reset(); }}
                      className="bg-primary hover:bg-accent text-white py-3.5 px-8 rounded-xl font-black text-xs tracking-widest uppercase transition-all cursor-pointer">
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
