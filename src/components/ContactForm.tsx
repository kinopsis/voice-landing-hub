
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo lo antes posible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">¿Listo para transformar la experiencia de tus clientes?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestro equipo está aquí para ayudarte a implementar agentes de voz con IA que ofrezcan resultados reales para tu negocio.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">¿Por qué contactarnos?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Obtén una demo personalizada adaptada a las necesidades de tu negocio</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Conoce nuestros planes de precios flexibles para empresas de todos los tamaños</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Discute la integración personalizada con tus sistemas existentes</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Recibe asesoramiento experto sobre la implementación de soluciones de voz con IA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Éxito del Cliente" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">Sara Jiménez</h4>
                  <p className="text-sm text-gray-600">Gerente de Éxito del Cliente</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Estamos comprometidos con tu éxito. Nuestro equipo proporciona apoyo y orientación continuos para asegurar que obtengas el máximo de nuestra tecnología de voz con IA."
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold font-display mb-6">Ponte en Contacto</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Tu Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de la Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Empresa S.A."
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      ¿Cómo podemos ayudarte?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tus necesidades y cómo podemos ayudarte..."
                      rows={4}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-voice-purple hover:bg-voice-purple/90 text-white py-6 rounded-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Te responderemos en menos de 24 horas
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
