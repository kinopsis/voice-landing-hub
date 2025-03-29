
import React from 'react';
import { Phone, Calendar, ShoppingCart, HelpCircle, Globe, Shield } from "lucide-react";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
      <div className="w-12 h-12 bg-voice-purple/10 rounded-lg flex items-center justify-center text-voice-purple mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold font-display mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <Phone size={24} />,
      title: "Atención al Cliente",
      description: "Proporciona soporte de voz 24/7 que gestiona consultas comunes, resolución de problemas y escalaciones a agentes humanos cuando es necesario."
    },
    {
      icon: <Calendar size={24} />,
      title: "Programación de Citas",
      description: "Permite a los clientes reservar, modificar o cancelar citas a través de conversaciones de voz naturales sin esperar en línea."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Asistencia de Ventas",
      description: "Guía a los clientes en la selección de productos, responde preguntas y completa compras con recomendaciones basadas en voz."
    },
    {
      icon: <HelpCircle size={24} />,
      title: "FAQ e Información",
      description: "Entrega respuestas instantáneas a preguntas comunes sobre tu negocio, productos, servicios y políticas."
    },
    {
      icon: <Globe size={24} />,
      title: "Soporte Multilingüe",
      description: "Comunícate con clientes en múltiples idiomas para expandir tu alcance global y accesibilidad."
    },
    {
      icon: <Shield size={24} />,
      title: "Seguridad de Cuentas",
      description: "Maneja verificaciones seguras de cuentas y restablecimientos de contraseñas manteniendo fuertes protocolos de seguridad."
    }
  ];

  return (
    <section id="uses" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Casos de Uso Versátiles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestros agentes de voz con IA se adaptan a diversas necesidades empresariales en todos los sectores
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
