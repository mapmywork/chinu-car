import React from 'react';
import { CONTACT_INFO, SERVICES, DESTINATIONS } from '../../data/travelData';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.png';

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-charcoal text-stone-300 border-t-2 border-gold/30 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Golden Ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Professional Cab Service"
                className="h-12 w-auto object-contain bg-white px-3 py-1.5 rounded-2xl shadow-md border border-gold/15"
              />
            </div>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              Premium cab services, premium fleet rentals, and customized holiday tour packages across royal Rajasthan. Experience comfort with our trusted chauffeurs.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#25D366] hover:text-white flex items-center justify-center border border-stone-700 hover:border-[#25D366] transition-all duration-300"
              >
                <FaWhatsapp className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#1877F2] hover:text-white flex items-center justify-center border border-stone-700 hover:border-[#1877F2] transition-all duration-300"
              >
                <FaFacebookF className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#E1306C] hover:text-white flex items-center justify-center border border-stone-700 hover:border-[#E1306C] transition-all duration-300"
              >
                <FaInstagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#FF0000] hover:text-white flex items-center justify-center border border-stone-700 hover:border-[#FF0000] transition-all duration-300"
              >
                <FaYoutube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    className="text-sm hover:text-gold transition-colors duration-200 flex items-center group font-light"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Popular Tours
            </h3>
            <ul className="space-y-3">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <a
                    href="#experiences"
                    onClick={(e) => handleScrollTo(e, '#experiences')}
                    className="text-sm hover:text-gold transition-colors duration-200 flex items-center group font-light"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{dest.name} Tour ({dest.tagline})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm font-light text-stone-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${CONTACT_INFO.cleanPhones[idx]}`} className="hover:text-gold text-white font-medium">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold text-white truncate block max-w-[200px] sm:max-w-none">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 pt-2 text-stone-400 text-xs">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>GST Registered • Dhan Singh (Owner)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="mt-16 pt-8 border-t border-stone-850 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 font-light space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Professional Cab Service Jodhpur. All Rights Reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Designed for Premium Rajasthan Travel with</span>
            <Heart className="w-3 h-3 text-gold fill-gold animate-beat" />
            <span>by Dhan Singh</span>
          </div>
          <div className="flex space-x-6">
            <a href="#booking" onClick={(e) => handleScrollTo(e, '#booking')} className="hover:text-gold transition-colors">Book Cab</a>
            <a href="#fleet" onClick={(e) => handleScrollTo(e, '#fleet')} className="hover:text-gold transition-colors">Fleet</a>
            <a href="#experiences" onClick={(e) => handleScrollTo(e, '#experiences')} className="hover:text-gold transition-colors">Tours</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
