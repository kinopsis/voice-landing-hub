
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TerminosServicio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-voice-purple">Términos y Condiciones del Servicio</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introducción</h2>
          <p>
            Bienvenido a VoiceAgent AI. Estos Términos y Condiciones rigen el uso de nuestro sitio web, productos y servicios 
            ofrecidos por VoiceAgent AI. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos términos.
            Si no está de acuerdo con estos términos, por favor no utilice nuestros servicios.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Definiciones</h2>
          <p>
            <strong>"Plataforma":</strong> Se refiere al sitio web, aplicaciones, servicios y herramientas operadas por VoiceAgent AI.<br />
            <strong>"Usuario":</strong> Cualquier persona que acceda, navegue o utilice la Plataforma.<br />
            <strong>"Servicios":</strong> Soluciones de asistentes virtuales con inteligencia artificial y análisis de llamadas.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Uso Autorizado</h2>
          <p>
            Al utilizar nuestros servicios, usted confirma que:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Es mayor de 18 años o cuenta con la autorización de sus padres o tutores.</li>
            <li>Utilizará los servicios de acuerdo con estos términos y todas las leyes aplicables.</li>
            <li>Proporcionará información precisa y actualizada durante el registro y uso del servicio.</li>
            <li>Mantendrá la confidencialidad de sus credenciales de acceso.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Suscripciones y Pagos</h2>
          <p>
            VoiceAgent AI ofrece diferentes planes de suscripción. Al suscribirse a nuestros servicios:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acepta pagar las tarifas correspondientes según el plan seleccionado.</li>
            <li>Autoriza los cargos recurrentes según la frecuencia establecida (mensual o anual).</li>
            <li>Comprende que puede haber ajustes de precios, los cuales serán notificados con anticipación.</li>
            <li>Podrá cancelar su suscripción según las políticas de cancelación vigentes.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Propiedad Intelectual</h2>
          <p>
            Todo el contenido, incluyendo pero no limitado a logos, textos, gráficos, y software, es propiedad de VoiceAgent AI 
            y está protegido por las leyes de propiedad intelectual colombianas e internacionales.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitación de Responsabilidad</h2>
          <p>
            En la medida permitida por la ley, VoiceAgent AI no será responsable por daños indirectos, incidentales, especiales, 
            consecuentes o punitivos, ni por pérdida de beneficios o ingresos, ya sea directa o indirectamente, ni por pérdida de 
            datos, uso, buena voluntad u otras pérdidas intangibles.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Protección de Datos Personales</h2>
          <p>
            El tratamiento de datos personales está sujeto a lo establecido en nuestra Política de Privacidad de acuerdo con la 
            Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Ley Aplicable y Jurisdicción</h2>
          <p>
            Estos Términos se rigen por las leyes de la República de Colombia. Cualquier controversia será sometida a la 
            jurisdicción de los tribunales competentes de Colombia.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">9. Modificaciones a los Términos</h2>
          <p>
            VoiceAgent AI se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán 
            efectivas una vez publicadas en la Plataforma. El uso continuado de los Servicios después de dichas modificaciones 
            constituye su aceptación de los nuevos términos.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">10. Contacto</h2>
          <p>
            Si tiene preguntas sobre estos Términos, puede contactarnos a través de:<br />
            Correo electrónico: legal@voiceagent.ai<br />
            Dirección: Calle 100 #15-25, Bogotá, Colombia
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TerminosServicio;
