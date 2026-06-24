import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CONTACT_INFO } from '../../data/travelData';
import { Calendar, MapPin, Phone, User, Settings, CheckCircle2, PhoneCall } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm({ embedded = false }) {
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      pickup: '',
      destination: '',
      travelDate: '',
      serviceType: 'Cab Booking'
    }
  });

  const onSubmit = (data) => {
    // Generate simulated booking reference & rate estimate
    const refId = 'PCS-' + Math.floor(100000 + Math.random() * 900000);
    let estimatedPrice = 'Requesting Quote...';

    if (data.serviceType === 'Cab Booking') {
      estimatedPrice = '₹11 - ₹17 per km (Taxes incl.)';
    } else if (data.serviceType === 'Fleet Booking') {
      estimatedPrice = 'Starting at ₹11/km (Dzire, Crysta, Urbania)';
    } else if (data.serviceType === 'Tour Package') {
      estimatedPrice = 'Starting at ₹4,999/person';
    } else if (data.serviceType === 'Airport Transfer') {
      estimatedPrice = '₹799 onwards (Flat Fare)';
    }

    const details = {
      ...data,
      refId,
      estimatedPrice
    };

    setBookingDetails(details);
    setShowModal(true);
  };

  const triggerWhatsAppRedirect = () => {
    if (!bookingDetails) return;
    const { name, phone, pickup, destination, travelDate, serviceType, refId, estimatedPrice } = bookingDetails;

    const textPayload = `Hello Dhan Singh (Professional Cab Service),%0A%0AI would like to book a trip! Here are my inquiry details:%0A%0A*Ref:* ${refId}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${serviceType}%0A*Route:* ${pickup} to ${destination}%0A*Date:* ${travelDate}%0A*Est. Price:* ${estimatedPrice}%0A%0APlease confirm availability. Thank you!`;

    const waUrl = `https://wa.me/${CONTACT_INFO.cleanPhones[0]}?text=${textPayload}`;
    window.open(waUrl, '_blank');
    setShowModal(false);
    reset();
  };

  return (
    <>
      <div className={`relative ${embedded ? 'w-full' : 'glass-card-dark p-6 sm:p-8 rounded-3xl shadow-royal'}`}>
        {!embedded && (
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold block">
              Instant Booking Inquiry
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1">
              Get an Instant Quote
            </h3>
            <p className="text-xs text-stone-300 font-light mt-1.5 leading-relaxed">
              Fill in your tour details and Dhan Singh will connect with you in under 5 minutes.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          {/* Name Field */}
          <div>
            <label className={`block text-xs font-medium ${embedded ? 'text-charcoal' : 'text-stone-300'} mb-1.5`}>
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <input
                type="text"
                placeholder="Enter full name"
                className={`w-full text-sm py-3 pl-10 pr-4 rounded-xl border outline-none transition-all ${embedded
                    ? 'bg-stone-50 border-stone-200 text-charcoal focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold'
                    : 'bg-primary-dark/40 border-stone-700 text-white placeholder-stone-500 focus:bg-primary-dark/60 focus:border-gold'
                  }`}
                {...register('name', { required: 'Name is required' })}
              />
            </div>
            {errors.name && <p className="text-rose-500 text-[10px] mt-1 font-medium">{errors.name.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className={`block text-xs font-medium ${embedded ? 'text-charcoal' : 'text-stone-300'} mb-1.5`}>
              Contact Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <input
                type="tel"
                placeholder="Enter mobile number"
                className={`w-full text-sm py-3 pl-10 pr-4 rounded-xl border outline-none transition-all ${embedded
                    ? 'bg-stone-50 border-stone-200 text-charcoal focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold'
                    : 'bg-primary-dark/40 border-stone-700 text-white placeholder-stone-500 focus:bg-primary-dark/60 focus:border-gold'
                  }`}
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: { value: /^[0-9+\s-]{10,15}$/, message: 'Invalid phone format' }
                })}
              />
            </div>
            {errors.phone && <p className="text-rose-500 text-[10px] mt-1 font-medium">{errors.phone.message}</p>}
          </div>

          {/* Service Dropdown */}
          <div>
            <label className={`block text-xs font-medium ${embedded ? 'text-charcoal' : 'text-stone-300'} mb-1.5`}>
              Service Type
            </label>
            <div className="relative">
              <Settings className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <select
                className={`w-full text-sm py-3 pl-10 pr-4 rounded-xl border outline-none transition-all appearance-none cursor-pointer ${embedded
                    ? 'bg-stone-50 border-stone-200 text-charcoal focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold'
                    : 'bg-primary-dark/40 border-stone-700 text-stone-300 focus:bg-primary-dark/60 focus:border-gold'
                  }`}
                {...register('serviceType', { required: 'Please select a service' })}
              >
                <option value="Cab Booking" className="text-charcoal bg-white">Cab Booking</option>
                <option value="Fleet Booking" className="text-charcoal bg-white">Fleet Booking</option>
                <option value="Tour Package" className="text-charcoal bg-white">Rajasthan Tour Package</option>
                <option value="Airport Transfer" className="text-charcoal bg-white">Airport Transfer</option>
              </select>
            </div>
          </div>

          {/* Pickup and Destination (Side-by-side or stacked) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs font-medium ${embedded ? 'text-charcoal' : 'text-stone-300'} mb-1.5`}>
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                <input
                  type="text"
                  placeholder="e.g. Jodhpur Airport"
                  className={`w-full text-sm py-3 pl-10 pr-4 rounded-xl border outline-none transition-all ${embedded
                      ? 'bg-stone-50 border-stone-200 text-charcoal focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold'
                      : 'bg-primary-dark/40 border-stone-700 text-white placeholder-stone-500 focus:bg-primary-dark/60 focus:border-gold'
                    }`}
                  {...register('pickup', { required: 'Pickup is required' })}
                />
              </div>
              {errors.pickup && <p className="text-rose-500 text-[10px] mt-1 font-medium">{errors.pickup.message}</p>}
            </div>

            <div>
              <label className={`block text-xs font-medium ${embedded ? 'text-charcoal' : 'text-stone-300'} mb-1.5`}>
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                <input
                  type="text"
                  placeholder="e.g. Jaisalmer Dunes"
                  className={`w-full text-sm py-3 pl-10 pr-4 rounded-xl border outline-none transition-all ${embedded
                      ? 'bg-stone-50 border-stone-200 text-charcoal focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold'
                      : 'bg-primary-dark/40 border-stone-700 text-white placeholder-stone-500 focus:bg-primary-dark/60 focus:border-gold'
                    }`}
                  {...register('destination', { required: 'Destination is required' })}
                />
              </div>
              {errors.destination && <p className="text-rose-500 text-[10px] mt-1 font-medium">{errors.destination.message}</p>}
            </div>
          </div>

          {/* Travel Date */}
          <div>
            <label className={`block text-xs font-medium ${embedded ? 'text-charcoal' : 'text-stone-300'} mb-1.5`}>
              Travel Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className={`w-full text-sm py-3 pl-10 pr-4 rounded-xl border outline-none transition-all ${embedded
                    ? 'bg-stone-50 border-stone-200 text-charcoal focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold'
                    : 'bg-primary-dark/40 border-stone-700 text-stone-300 focus:bg-primary-dark/60 focus:border-gold'
                  }`}
                {...register('travelDate', { required: 'Travel date is required' })}
              />
            </div>
            {errors.travelDate && <p className="text-rose-500 text-[10px] mt-1 font-medium">{errors.travelDate.message}</p>}
          </div>

          {/* CTA Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 gold-gradient hover:shadow-gold text-primary-dark text-sm font-bold tracking-wider uppercase py-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
          >
            {isSubmitting ? 'Processing...' : 'Get Instant Quote'}
          </button>
        </form>
      </div>

      {/* Confirmation & Quotation Success Modal */}
      <AnimatePresence>
        {showModal && bookingDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl glass-modal text-left overflow-hidden"
            >
              {/* Ribbon Accent */}
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-primary to-gold"></div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-50 text-green-600 rounded-full border border-green-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary-dark">
                    Quotation Prepared!
                  </h4>
                  <p className="text-xs text-stone-500">
                    Booking Reference: <span className="font-semibold text-gold-dark">{bookingDetails.refId}</span>
                  </p>
                </div>
              </div>

              {/* Inquiry Summary details */}
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-100 space-y-3 mb-6">
                <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/50 pb-2">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-primary">{bookingDetails.serviceType}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/50 pb-2">
                  <span className="text-stone-500">Name:</span>
                  <span className="font-semibold text-charcoal">{bookingDetails.name}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/50 pb-2">
                  <span className="text-stone-500">Phone:</span>
                  <span className="font-medium text-charcoal">{bookingDetails.phone}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/50 pb-2">
                  <span className="text-stone-500">Travel Route:</span>
                  <span className="font-medium text-charcoal text-right">
                    {bookingDetails.pickup} → {bookingDetails.destination}
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/50 pb-2">
                  <span className="text-stone-500">Travel Date:</span>
                  <span className="font-medium text-charcoal">{bookingDetails.travelDate}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm pt-1">
                  <span className="text-gold-dark font-medium">Estimated Pricing:</span>
                  <span className="font-bold text-green-700 bg-green-50 px-2.5 py-0.5 rounded text-xs">
                    {bookingDetails.estimatedPrice}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed font-light mb-6">
                Please click the button below to send this request directly to **Dhan Singh** on WhatsApp. Our representative will confirm vehicle availability and final billing immediately.
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={triggerWhatsAppRedirect}
                  className="bg-[#25D366] hover:bg-[#20ba56] text-white py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-green-500/20"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Send on WhatsApp</span>
                </button>
                <a
                  href={`tel:${CONTACT_INFO.cleanPhones[0]}`}
                  className="royal-gradient text-white py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all hover:shadow-gold cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-gold" />
                  <span>Call Dhan Singh</span>
                </a>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full text-center text-xs text-stone-400 hover:text-stone-600 transition-colors mt-4 block"
              >
                Close & Edit Details
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
