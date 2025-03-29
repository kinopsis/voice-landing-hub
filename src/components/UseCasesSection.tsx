
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
      title: "Customer Support",
      description: "Provide 24/7 voice support that handles common inquiries, troubleshooting, and escalations to human agents when needed."
    },
    {
      icon: <Calendar size={24} />,
      title: "Appointment Scheduling",
      description: "Let customers book, modify, or cancel appointments through natural voice conversations without waiting on hold."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Sales Assistance",
      description: "Guide customers through product selection, answer questions, and complete purchases with voice-based recommendations."
    },
    {
      icon: <HelpCircle size={24} />,
      title: "FAQ & Information",
      description: "Deliver instant answers to common questions about your business, products, services, and policies."
    },
    {
      icon: <Globe size={24} />,
      title: "Multilingual Support",
      description: "Communicate with customers in multiple languages to expand your global reach and accessibility."
    },
    {
      icon: <Shield size={24} />,
      title: "Account Security",
      description: "Handle secure account verification and password resets while maintaining strong security protocols."
    }
  ];

  return (
    <section id="uses" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Versatile Use Cases</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI voice agents adapt to various business needs across industries
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
