
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-4 md:px-8 lg:px-16 flex items-center justify-between bg-white/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold font-display">
          A<span className="text-voice-blue">VOZ</span>IA
        </h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#uses" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          Casos de Uso
        </a>
        <a href="#features" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          Características
        </a>
        <a href="#calls" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          Llamadas
        </a>
        <a href="#faq" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          FAQ
        </a>
        <a href="#contact" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          Contacto
        </a>
      </div>
      
      <div>
        <Button className="bg-voice-purple hover:bg-voice-purple/90 text-white rounded-lg">
          Comenzar
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
