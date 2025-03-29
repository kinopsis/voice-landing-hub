
import React from 'react';
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PlanesSection: React.FC = () => {
  return (
    <section id="planes" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Planes y Precios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecciona el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <Table className="w-full bg-white">
            <TableCaption>Todos los precios están en USD y se facturan mensualmente</TableCaption>
            <TableHeader className="bg-voice-purple/5">
              <TableRow>
                <TableHead className="w-1/4 font-bold text-lg text-gray-700">Características</TableHead>
                <TableHead className="w-1/4 font-bold text-lg text-gray-700">Starter</TableHead>
                <TableHead className="w-1/4 font-bold text-lg text-gray-700">Pymes</TableHead>
                <TableHead className="w-1/4 font-bold text-lg text-gray-700">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Minutos Incluidos</TableCell>
                <TableCell>300 min/mes (entrantes + salientes)</TableCell>
                <TableCell>1000 min/mes (entrantes + salientes)</TableCell>
                <TableCell>Personalizado (+10,000 min, entrantes + salientes)</TableCell>
              </TableRow>
              <TableRow className="bg-voice-purple/5">
                <TableCell className="font-medium">Precio Mensual (USD)</TableCell>
                <TableCell className="font-bold">$79</TableCell>
                <TableCell className="font-bold">$209</TableCell>
                <TableCell className="font-bold">Contáctenos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Precio por minuto adicional (USD)</TableCell>
                <TableCell>$0.22</TableCell>
                <TableCell>$0.19</TableCell>
                <TableCell>Personalizado</TableCell>
              </TableRow>
              <TableRow className="bg-voice-purple/5">
                <TableCell className="font-medium">Motor de Voz</TableCell>
                <TableCell>ElevenLabs (18+ idiomas)</TableCell>
                <TableCell>ElevenLabs + PlayHT/OpenAI</TableCell>
                <TableCell>Elección de motor (personalizable)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">LLM (Modelo de Lenguaje)</TableCell>
                <TableCell>Claude 3.5 Haiku</TableCell>
                <TableCell>Claude 3.5 Haiku o GPT-4o mini</TableCell>
                <TableCell>GPT-4 Turbo, Claude 3 Opus o modelos propios</TableCell>
              </TableRow>
              <TableRow className="bg-voice-purple/5">
                <TableCell className="font-medium">Integraciones</TableCell>
                <TableCell>Custom SIP Provider*</TableCell>
                <TableCell>Custom SIP Provider + Zapier</TableCell>
                <TableCell>Custom SIP Provider avanzado + APIs personalizadas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Baja Latencia</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500" size={18} />
                    <span>1000ms – 1200ms</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500" size={18} />
                    <span>700ms – 1000ms</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500" size={18} />
                    <span>~500ms + SLA garantizado</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="bg-voice-purple/5">
                <TableCell className="font-medium">Soporte</TableCell>
                <TableCell>Email (horario laboral)</TableCell>
                <TableCell>Soporte prioritario (24/5)</TableCell>
                <TableCell>Manager dedicado + soporte técnico 24/7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Usuarios/Agentes</TableCell>
                <TableCell>1 usuario</TableCell>
                <TableCell>Hasta 5 usuarios</TableCell>
                <TableCell>Usuarios ilimitados</TableCell>
              </TableRow>
              <TableRow className="bg-voice-purple/5">
                <TableCell className="font-medium">Base de Conocimiento</TableCell>
                <TableCell>1 base (hasta 100 documentos)</TableCell>
                <TableCell>5 bases (hasta 500 documentos)</TableCell>
                <TableCell>Bases ilimitadas + actualización automática</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Panel de Análisis</TableCell>
                <TableCell>Métricas básicas</TableCell>
                <TableCell>Métricas avanzadas</TableCell>
                <TableCell>Dashboard personalizado + BI</TableCell>
              </TableRow>
              <TableRow className="bg-voice-purple/5">
                <TableCell className="font-medium">Seguridad</TableCell>
                <TableCell>Encriptación básica (TLS/SSL)</TableCell>
                <TableCell>SOC 2 Tipo 2</TableCell>
                <TableCell>SOC 2 Tipo 2, HIPAA, GDPR</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">* Requiere configuración adicional. Consulta con nuestro equipo para más detalles.</p>
          <div className="mt-8">
            <a 
              href="#contacto" 
              className="bg-voice-purple hover:bg-voice-purple/90 text-white font-bold py-3 px-8 rounded-full inline-block transition-all"
            >
              Solicitar Demostración
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanesSection;
