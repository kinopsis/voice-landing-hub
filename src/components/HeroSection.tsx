
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Sparkles, BarChart3 } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center relative overflow-hidden bg-hero-pattern">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-voice-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-voice-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100">
              <span className="mr-2 text-xs font-medium text-voice-purple">NEW</span>
              <span className="text-xs">Voice AI for your business</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Transform Customer Experience with{' '}
              <span className="bg-clip-text text-transparent bg-card-gradient">AI Voice Agents</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Create lifelike voice assistants that engage your customers with natural conversations, 24/7 availability, and seamless integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-voice-purple hover:bg-voice-purple/90 text-white px-8 py-6 rounded-lg font-medium text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-voice-purple text-voice-purple hover:bg-voice-purple/10 px-8 py-6 rounded-lg font-medium text-lg">
                View Demo
              </Button>
            </div>
            
            <div className="mt-10 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p>Trusted by 300+ companies worldwide</p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl p-6 animate-float">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-voice-purple rounded-full flex items-center justify-center text-white mr-4">
                    <Mic size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">VoiceAgent Assistant</h3>
                    <p className="text-sm text-gray-500">Online and ready</p>
                  </div>
                </div>
                <div className="mt-4 bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Hello! I'm your AI voice assistant. How can I help you today?</p>
                </div>
                <div className="mt-3 bg-voice-purple/10 rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-sm">I need help setting up my account.</p>
                </div>
                <div className="mt-3 bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm">I'd be happy to help you set up your account! Let me guide you through the process step by step...</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-voice-purple/10 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-voice-purple" />
                  </div>
                  <div className="w-8 h-8 bg-voice-blue/10 rounded-lg flex items-center justify-center">
                    <BarChart3 size={16} className="text-voice-blue" />
                  </div>
                </div>
                <div className="text-xs text-gray-400">Powered by VoiceAgent</div>
              </div>
            </div>
            <div className="absolute -z-10 top-6 left-6 right-6 bottom-6 bg-gradient-to-r from-voice-purple to-voice-blue rounded-xl blur-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
