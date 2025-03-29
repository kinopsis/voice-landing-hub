
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Respuestas a las dudas más comunes sobre agentes de voz con IA
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium text-left">
              ¿Qué tan natural suena la voz del agente IA?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Nuestros agentes utilizan la tecnología más avanzada de síntesis de voz, logrando un sonido extremadamente natural con entonación, pausas y expresiones que emulan el habla humana. La mayoría de usuarios no pueden distinguir entre nuestros agentes y una persona real.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium text-left">
              ¿Puede el agente entender diferentes acentos e idiomas?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Sí, nuestros agentes están entrenados para comprender y responder en más de 18 idiomas, así como reconocer diferentes acentos y dialectos. Esto permite atender eficazmente a una audiencia global y diversa.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium text-left">
              ¿Cómo se integra con mis sistemas existentes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              AVOZIA ofrece diversas opciones de integración mediante APIs modernas y conexión a sistemas SIP tradicionales. Nuestro equipo puede asesorarle para lograr una implementación sin fricciones con sus sistemas CRM, centralitas telefónicas y software de gestión.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium text-left">
              ¿Qué sucede cuando el agente no puede resolver un problema?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Los agentes están programados para identificar situaciones que requieren intervención humana. Cuando esto ocurre, pueden transferir la llamada a un agente humano, programar una devolución de llamada o escalar el caso según las reglas que usted defina, asegurando que ninguna consulta quede sin resolver.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium text-left">
              ¿Qué métricas puedo monitorizar con los agentes de voz?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Nuestra plataforma ofrece analíticas detalladas incluyendo tasas de éxito de llamadas, duración, sentimiento del cliente, tasa de resolución al primer contacto, puntos de fricción comunes y conversiones. Todas estas métricas pueden integrarse con sus herramientas de BI existentes.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-medium text-left">
              ¿Cómo se manejan los datos y la privacidad?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              AVOZIA cumple con las regulaciones de protección de datos como GDPR y CCPA. Todos los datos de llamadas se cifran y almacenan de forma segura. Ofrecemos opciones para eliminar datos automáticamente tras su procesamiento y configurar políticas de retención personalizadas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
