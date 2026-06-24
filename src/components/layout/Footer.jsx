import React from 'react';
import { CONTACT_INFO, SERVICES, FLEET } from '../../data/travelData';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import logoImg from '../../assets/company-logo.png';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

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
    <footer className="bg-primary text-silver-light border-t-2 border-silver/20 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Accent Ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logoImg} alt="Chinnu Car Rentals" className="h-16 w-auto object-contain drop-shadow-md bg-white rounded-lg p-1" />
            </div>
            <p className="text-sm text-silver leading-relaxed font-light">
              Premium self-drive car rentals in Gurgaon. Choose from economy, SUV, premium and luxury vehicles. Drive your dream car today.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.cleanPhones[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal hover:bg-[#25D366] hover:text-white flex items-center justify-center border border-silver/20 hover:border-[#25D366] transition-all duration-300"
              >
                <FaWhatsapp className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-charcoal hover:bg-[#1877F2] hover:text-white flex items-center justify-center border border-silver/20 hover:border-[#1877F2] transition-all duration-300"
              >
                <FaFacebookF className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-charcoal hover:bg-[#E1306C] hover:text-white flex items-center justify-center border border-silver/20 hover:border-[#E1306C] transition-all duration-300"
              >
                <FaInstagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-charcoal hover:bg-[#FF0000] hover:text-white flex items-center justify-center border border-silver/20 hover:border-[#FF0000] transition-all duration-300"
              >
                <FaYoutube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-sans text-lg font-semibold text-secondary relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, '#services')}
                    className="text-sm hover:text-accent transition-colors duration-200 flex items-center group font-light"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Fleet */}
          <div className="space-y-6">
            <h3 className="font-sans text-lg font-semibold text-secondary relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Premium Fleet
            </h3>
            <ul className="space-y-3">
              {FLEET.filter(car => car.premium).slice(0, 5).map((car) => (
                <li key={car.id}>
                  <a
                    href="#fleet"
                    onClick={(e) => handleScrollTo(e, '#fleet')}
                    className="text-sm hover:text-accent transition-colors duration-200 flex items-center group font-light"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{car.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-sans text-lg font-semibold text-secondary relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm font-light text-silver">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${CONTACT_INFO.cleanPhones[idx]}`} className="hover:text-accent text-secondary font-medium">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent text-secondary truncate block max-w-[200px] sm:max-w-none">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 pt-2 text-silver text-xs">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Verified Trusted Rental Partner</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="mt-16 pt-8 border-t border-silver/20 flex flex-col md:flex-row items-center justify-between text-xs text-silver font-light space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Chinnu Car Rentals. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#plans" onClick={(e) => handleScrollTo(e, '#plans')} className="hover:text-accent transition-colors">Rental Plans</a>
            <a href="#fleet" onClick={(e) => handleScrollTo(e, '#fleet')} className="hover:text-accent transition-colors">Fleet</a>
            <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-accent transition-colors">Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
