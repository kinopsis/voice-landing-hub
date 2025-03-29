
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, PhoneIncoming, PhoneOutgoing, Globe, Clock, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-voice-gray-light" id="calls">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Soluciones de Llamadas <span className="bg-clip-text text-transparent bg-card-gradient">Inbound y Outbound</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Optimiza la comunicación con tus clientes mediante nuestras avanzadas soluciones de agentes de voz para llamadas entrantes y salientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inbound Calls Card */}
          <Card className="overflow-hidden shadow-soft hover-scale transition-all bg-white">
            <CardHeader className="bg-gradient-to-r from-voice-purple/10 to-voice-blue/10 pb-8">
              <div className="bg-voice-purple text-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <PhoneIncoming size={24} />
              </div>
              <CardTitle className="text-2xl font-display">Llamadas Entrantes (Inbound)</CardTitle>
              <CardDescription>Responde automáticamente a consultas de clientes</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-voice-purple/10 text-voice-purple rounded-full p-1 mr-3 mt-0.5">
                    <Globe size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Compatibilidad con 18+ idiomas</p>
                    <p className="text-sm text-gray-600">Ideal para aplicaciones globales</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-voice-purple/10 text-voice-purple rounded-full p-1 mr-3 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Respuesta en ~800 ms</p>
                    <p className="text-sm text-gray-600">Gracias al modelo Turn-Taking, permitiendo interrupciones y conversaciones fluidas similares a las humanas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-voice-purple/10 text-voice-purple rounded-full p-1 mr-3 mt-0.5">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Seguimiento de métricas</p>
                    <p className="text-sm text-gray-600">Éxito de llamadas, latencia, sentimiento del usuario y estado de tareas</p>
                  </div>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-voice-purple hover:bg-voice-purple/90">
                Más información <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Outbound Calls Card */}
          <Card className="overflow-hidden shadow-soft hover-scale transition-all bg-white">
            <CardHeader className="bg-gradient-to-r from-voice-blue/10 to-voice-purple/10 pb-8">
              <div className="bg-voice-blue text-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <PhoneOutgoing size={24} />
              </div>
              <CardTitle className="text-2xl font-display">Llamadas Salientes (Outbound)</CardTitle>
              <CardDescription>Automatiza campañas de ventas y seguimiento</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-voice-blue/10 text-voice-blue rounded-full p-1 mr-3 mt-0.5">
                    <Globe size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Soporte multilingüe global</p>
                    <p className="text-sm text-gray-600">Expande tu alcance a mercados internacionales sin barreras de idioma</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-voice-blue/10 text-voice-blue rounded-full p-1 mr-3 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Integración con sistemas existentes</p>
                    <p className="text-sm text-gray-600">Facilitando despliegues en sistemas SIP existentes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-voice-blue/10 text-voice-blue rounded-full p-1 mr-3 mt-0.5">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Análisis avanzado</p>
                    <p className="text-sm text-gray-600">Monitoriza y optimiza tus campañas en tiempo real</p>
                  </div>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-voice-blue hover:bg-voice-blue/90">
                Más información <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallsSection;
