import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/hero/Hero';
import Stats from '../components/common/Stats';
import Services from '../components/services/Services';
import PopularDestinations from '../components/tours/PopularDestinations';
import FleetSection from '../components/fleet/FleetSection';
import WhyChooseUs from '../components/common/WhyChooseUs';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/layout/Footer';
import FloatingCTA from '../components/common/FloatingCTA';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-warm-white antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Statistics Section */}
      <Stats />

      {/* Services Grid Section */}
      <Services />

      {/* Popular experiences Section */}
      <PopularDestinations />

      {/* Premium Fleet Section */}
      <FleetSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Client Testimonials slider */}
      <TestimonialSlider />

      {/* Contact information and Booking inquiry form */}
      <ContactSection />

      {/* Site Footer */}
      <Footer />

      {/* Sticky Bottom Actions & Desktop CTA Badges */}
      <FloatingCTA />
    </div>
  );
}
