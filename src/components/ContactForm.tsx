
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    telefono: '',
    email: '',
    empresa: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Guardar en la base de datos
      // Usando casting para evitar errores de tipos
      const { error } = await supabase
        .from('contactos')
        .insert({
          telefono: formData.telefono,
          email: formData.email,
          empresa: formData.empresa || null,
          mensaje: formData.mensaje || null
        }) as any;
        
      if (error) throw error;
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo lo antes posible.",
      });
      
      // Limpiar formulario
      setFormData({
        telefono: '',
        email: '',
        empresa: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al procesar tu solicitud. Por favor, intenta de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 123 456"
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
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de la Empresa
                    </label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Empresa S.A."
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      ¿Cómo podemos ayudarte?
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
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
