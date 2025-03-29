
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-4 md:px-8 lg:px-16 flex items-center justify-between bg-white/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold font-display bg-clip-text text-transparent bg-card-gradient">
          VoiceAgent
        </h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#uses" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          Use Cases
        </a>
        <a href="#features" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          Features
        </a>
        <a href="#contact" className="text-voice-gray-dark hover:text-voice-purple transition-colors font-medium">
          Contact
        </a>
      </div>
      
      <div>
        <Button className="bg-voice-purple hover:bg-voice-purple/90 text-white rounded-lg">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
