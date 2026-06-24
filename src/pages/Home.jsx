import React from 'react';
import Hero from '../components/hero/Hero';
import TrustBar from '../components/common/TrustBar';
import FleetSection from '../components/fleet/FleetSection';
import Services from '../components/services/Services';
import WhyChooseUs from '../components/common/WhyChooseUs';
import RentalPlans from '../components/booking/RentalPlans';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import ContactSection from '../components/contact/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col antialiased">
      <Hero />
      <TrustBar />
      <FleetSection />
      <Services />
      <WhyChooseUs />
      <RentalPlans />
      <TestimonialSlider />
      <ContactSection />
    </div>
  );
}
