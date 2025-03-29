
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
    "Flujo de conversación natural",
    "Detección y respuesta emocional",
    "Interacciones personalizadas",
    "Aprendizaje en tiempo real",
    "Transferencia perfecta a humanos",
    "Capacidades multilingües"
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Características Potentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capacidades avanzadas construidas sobre tecnología de IA de vanguardia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-10">
              <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-display mb-3">Procesamiento Avanzado de Lenguaje Natural</h3>
              <p className="text-gray-600">
                Nuestros agentes de voz con IA comprenden el contexto, detectan sentimientos y mantienen un historial de conversación para interacciones verdaderamente naturales que se sienten humanas.
              </p>
            </div>
            
            <div className="mb-10">
              <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                <Workflow size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-display mb-3">Integración Perfecta</h3>
              <p className="text-gray-600">
                Conecta con tus herramientas existentes, sistemas CRM y bases de datos con nuestra API directa e integraciones prediseñadas.
              </p>
            </div>
            
            <div className="mb-10">
              <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-2xl font-semibold font-display mb-3">Análisis Detallado</h3>
              <p className="text-gray-600">
                Obtén información sobre las interacciones con los clientes, problemas comunes y rendimiento de los agentes con herramientas completas de informes.
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
                Explorar Todas las Características
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
                  <h3 className="font-semibold mb-2">Clonación de Voz</h3>
                  <p className="text-sm text-gray-600">Crea voces personalizadas que coincidan con la identidad de tu marca</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                    <LayoutGrid size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Constructor Sin Código</h3>
                  <p className="text-sm text-gray-600">Diseña flujos de conversación sin experiencia técnica</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
                    <Headphones size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Canal</h3>
                  <p className="text-sm text-gray-600">Implementa en teléfono, web, móvil y plataformas de mensajería</p>
                </div>
                
                <div className="bg-gradient-to-r from-voice-purple to-voice-blue rounded-xl shadow-md p-6 text-white transform translate-y-8">
                  <h3 className="font-semibold mb-2">Personalizable y Flexible</h3>
                  <p className="text-sm opacity-90">Adapta tu agente de voz a tus necesidades empresariales exactas</p>
                  <Button variant="secondary" className="mt-4 bg-white text-voice-purple hover:bg-white/90">
                    Saber Más
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
