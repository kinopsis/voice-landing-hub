
import React from 'react';
import { Linkedin, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-voice-dark-purple text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-display bg-clip-text text-transparent bg-card-gradient mb-6">
              AVOZIA
            </h3>
            <p className="text-gray-300 mb-6">
              Transformando experiencias de cliente con tecnología avanzada de voz IA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="text-gray-300">
              Medellin, Colombia<br />
              </li>
              <li>
                <a href="mailto:hola@avozia.com" className="text-gray-300 hover:text-white transition-colors">ventas@avozia.com</a>
              </li>
              <li>
                <a href="tel:+573174930481" className="text-gray-300 hover:text-white transition-colors">+573174930481</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AVOZIA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="/terminos-servicio" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="/politica-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="/politica-cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
