
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Mic, 
  BrainCircuit, 
  Workflow, 
  LineChart, 
  LayoutGrid, 
  Headphones,
  Check 
} from "lucide-react";

const FeaturesSection: React.FC = () => {
  const featureList = [
    "Natural conversation flow",
    "Emotion detection & response",
    "Personalized interactions",
    "Real-time learning",
    "Seamless handoff to humans",
    "Multilingual capabilities"
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced capabilities built on cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-10">
              <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-display mb-3">Advanced Natural Language Processing</h3>
              <p className="text-gray-600">
                Our AI voice agents understand context, detect sentiment, and maintain conversation history for truly natural interactions that feel human.
              </p>
            </div>
            
            <div className="mb-10">
              <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                <Workflow size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-display mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                Connect with your existing tools, CRM systems, and databases with our straightforward API and pre-built integrations.
              </p>
            </div>
            
            <div className="mb-10">
              <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-display mb-3">Detailed Analytics</h3>
              <p className="text-gray-600">
                Gain insights into customer interactions, common issues, and agent performance with comprehensive reporting tools.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {featureList.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-2 w-5 h-5 bg-voice-purple/10 rounded-full flex items-center justify-center text-voice-purple flex-shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button className="bg-voice-purple hover:bg-voice-purple/90 text-white px-6 py-5 rounded-lg font-medium">
                Explore All Features
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6 transform translate-y-8">
                  <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                    <Mic size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Voice Cloning</h3>
                  <p className="text-sm text-gray-600">Create custom voices that match your brand identity</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                    <LayoutGrid size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">No-Code Builder</h3>
                  <p className="text-sm text-gray-600">Design conversation flows without technical expertise</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                    <Headphones size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Channel</h3>
                  <p className="text-sm text-gray-600">Deploy across phone, web, mobile, and messaging platforms</p>
                </div>
                
                <div className="bg-gradient-to-r from-voice-purple to-voice-blue rounded-xl shadow-md p-6 text-white transform translate-y-8">
                  <h3 className="font-semibold mb-2">Customizable & Flexible</h3>
                  <p className="text-sm opacity-90">Tailor your voice agent to your exact business needs</p>
                  <Button variant="secondary" className="mt-4 bg-white text-voice-purple hover:bg-white/90">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-voice-purple/20 to-voice-blue/20 rounded-3xl blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
