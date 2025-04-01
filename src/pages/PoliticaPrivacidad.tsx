
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-voice-purple">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introducción</h2>
          <p>
            VoiceAgent AI (en adelante "nosotros", "nuestro", "la Compañía") se compromete a proteger la privacidad de 
            sus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y 
            protegemos su información personal de acuerdo con la Ley 1581 de 2012, el Decreto 1377 de 2013, y demás normas 
            que las modifiquen o complementen en la República de Colombia.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. Responsable del Tratamiento</h2>
          <p>
            VoiceAgent AI, con domicilio en Calle 100 #15-25, Bogotá, Colombia, es responsable del tratamiento de los 
            datos personales que usted nos proporciona.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. Datos Personales que Recolectamos</h2>
          <p>
            Podemos recopilar los siguientes tipos de información personal:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Información de identificación personal (nombre, apellido, documento de identidad)</li>
            <li>Información de contacto (correo electrónico, número de teléfono, dirección)</li>
            <li>Información de pago (datos de tarjetas de crédito, información bancaria)</li>
            <li>Datos de uso del servicio (transcripciones, grabaciones de llamadas, análisis)</li>
            <li>Información técnica (dirección IP, cookies, datos de navegación)</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Finalidades del Tratamiento</h2>
          <p>
            Utilizamos sus datos personales para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gestionar la relación contractual y proporcionar nuestros servicios</li>
            <li>Procesar pagos y administrar su cuenta</li>
            <li>Mejorar y personalizar nuestros servicios</li>
            <li>Enviar comunicaciones relacionadas con el servicio</li>
            <li>Cumplir con obligaciones legales y requerimientos de autoridades competentes</li>
            <li>Prevenir fraudes y garantizar la seguridad de nuestra plataforma</li>
            <li>Realizar análisis estadísticos y estudios de mercado</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Base Legal para el Tratamiento</h2>
          <p>
            Tratamos sus datos personales con base en:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La ejecución de un contrato cuando utiliza nuestros servicios</li>
            <li>Su consentimiento explícito</li>
            <li>Nuestros intereses legítimos como empresa, siempre que no prevalezcan sus derechos</li>
            <li>El cumplimiento de obligaciones legales</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Tiempo de Conservación</h2>
          <p>
            Conservaremos sus datos personales mientras mantenga una relación con nosotros y durante el tiempo necesario 
            para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Transferencias Internacionales</h2>
          <p>
            Sus datos pueden ser transferidos y procesados en países distintos a Colombia, donde pueden existir leyes 
            de protección de datos diferentes. En tales casos, implementamos medidas de seguridad adecuadas para garantizar 
            la protección de sus datos de acuerdo con esta política.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Derechos del Titular de los Datos</h2>
          <p>
            De acuerdo con la Ley 1581 de 2012, usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conocer, actualizar y rectificar sus datos personales</li>
            <li>Solicitar prueba de la autorización otorgada</li>
            <li>Ser informado sobre el uso que se ha dado a sus datos personales</li>
            <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
            <li>Revocar la autorización y/o solicitar la supresión de sus datos</li>
            <li>Acceder gratuitamente a sus datos personales</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">9. Seguridad de la Información</h2>
          <p>
            Implementamos medidas técnicas, administrativas y físicas diseñadas para proteger sus datos personales 
            contra pérdida, acceso no autorizado, divulgación, alteración o destrucción.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">10. Cambios en la Política de Privacidad</h2>
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre 
            disponible en nuestra plataforma con la fecha de última actualización.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">11. Contacto</h2>
          <p>
            Para ejercer sus derechos o si tiene preguntas sobre esta Política de Privacidad, puede contactarnos a través de:<br />
            Correo electrónico: privacidad@voiceagent.ai<br />
            Dirección: Calle 100 #15-25, Bogotá, Colombia<br />
            Teléfono: +57 601 123 4567
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
