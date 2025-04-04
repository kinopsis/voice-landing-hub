
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import UseCasesSection from '@/components/UseCasesSection';
import FeaturesSection from '@/components/FeaturesSection';
import CallsSection from '@/components/CallsSection';
import PlanesSection from '@/components/PlanesSection';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Efecto para cargar el script de Appointify
  useEffect(() => {
    // Configuración del chatbot
    window.chatpilotConfig = {
      chatbotId: "80585ff662294f0c90a8c07da9d81181",
      domain: "https://appointify.ai",
      
    };

    // Crear y añadir el script
    const script = document.createElement('script');
    script.src = "https://appointify.ai/embed.min.js";
    script.charset = "utf-8";
    script.defer = true;
    document.body.appendChild(script);

    // Limpiar al desmontar
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-0 h-0 overflow-hidden">
        {/* Iframe oculto para el chatbot */}
        <iframe
          title="Appointify Chatbot"
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      </div>
      <HeroSection />
      <UseCasesSection />
      <FeaturesSection />
      <CallsSection />
      <PlanesSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
