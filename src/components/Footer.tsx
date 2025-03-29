
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-voice-dark-purple text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-display bg-clip-text text-transparent bg-card-gradient mb-6">
              AVOZIA
            </h3>
            <p className="text-gray-300 mb-6">
              Transformando experiencias de cliente con tecnología avanzada de voz IA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Carreras</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Prensa</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentación</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Centro de Ayuda</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Referencia API</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Comunidad</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="text-gray-300">
                Calle IA 123<br />
                Madrid, España 28001
              </li>
              <li>
                <a href="mailto:hola@avozia.com" className="text-gray-300 hover:text-white transition-colors">hola@avozia.com</a>
              </li>
              <li>
                <a href="tel:+34915555555" className="text-gray-300 hover:text-white transition-colors">+34 91 555 55 55</a>
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
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
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
