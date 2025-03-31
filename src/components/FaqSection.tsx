
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium text-left">
              Notas Adicionales sobre Latencia y Rendimiento
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p className="mb-4">La latencia se mide desde la recepción de la consulta hasta la respuesta completa del agente de voz.</p>
              
              <ol className="list-decimal pl-5 mb-4 space-y-2">
                <li>Los rangos pueden variar según el proveedor SIP y la ubicación geográfica del usuario final.</li>
                <li>Enterprise incluye monitoreo proactivo para mantener la latencia dentro del SLA.</li>
              </ol>
              
              <h4 className="font-semibold mb-2 mt-4">Diferenciación por Velocidad</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-medium">Plan</TableHead>
                      <TableHead className="font-medium">Caso de Uso Recomendado</TableHead>
                      <TableHead className="font-medium">Ejemplo de Aplicación</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Starter</TableCell>
                      <TableCell>Respuestas automatizadas no urgentes</TableCell>
                      <TableCell>Recordatorios de citas, encuestas simples</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pymes</TableCell>
                      <TableCell>Interacciones conversacionales</TableCell>
                      <TableCell>Soporte técnico, ventas asistidas por IA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Enterprise</TableCell>
                      <TableCell>Operaciones críticas en tiempo real</TableCell>
                      <TableCell>Telemedicina, transacciones financieras</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
