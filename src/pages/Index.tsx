
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import UseCasesSection from '@/components/UseCasesSection';
import FeaturesSection from '@/components/FeaturesSection';
import CallsSection from '@/components/CallsSection';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <UseCasesSection />
      <FeaturesSection />
      <CallsSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
