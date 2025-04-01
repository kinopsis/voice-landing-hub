
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-voice-purple">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su ordenador para mejorar su 
            experiencia en línea. Nos permiten, por ejemplo, recordar sus preferencias, analizar cómo funciona nuestro sitio web 
            y, en general, mejorar la experiencia del usuario.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">2. ¿Qué tipos de cookies utilizamos?</h2>
          <p>
            En VoiceAgent AI utilizamos los siguientes tipos de cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento básico del sitio web. Estas cookies 
              le permiten navegar por nuestro sitio y utilizar sus funciones, como acceder a áreas seguras.
            </li>
            <li>
              <strong>Cookies de preferencias:</strong> Estas cookies nos permiten recordar sus preferencias y personalizar 
              nuestro sitio web para proporcionarle funciones y contenidos mejorados.
            </li>
            <li>
              <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web, 
              reuniendo y proporcionando información sobre áreas visitadas, tiempo de permanencia en el sitio y cualquier 
              problema encontrado.
            </li>
            <li>
              <strong>Cookies de marketing:</strong> Se utilizan para rastrear a los visitantes en los sitios web con el fin 
              de mostrar anuncios relevantes para el usuario individual y sus intereses.
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">3. ¿Cómo y por qué utilizamos cookies?</h2>
          <p>
            Utilizamos cookies por varias razones, incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Para hacer que nuestro sitio web funcione correctamente</li>
            <li>Para mejorar la experiencia del usuario</li>
            <li>Para entender cómo se utiliza nuestro sitio web</li>
            <li>Para recordar sus preferencias</li>
            <li>Para mostrarle publicidad relevante</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">4. Control de cookies</h2>
          <p>
            Usted puede controlar y/o eliminar las cookies según lo desee. Puede eliminar todas las cookies que ya están en su 
            dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si lo hace, es 
            posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y 
            funcionalidades no funcionen.
          </p>
          <p>
            Para administrar las cookies en los principales navegadores:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos del sitio</li>
            <li>Firefox: Opciones &gt; Privacidad & Seguridad &gt; Cookies y datos del sitio</li>
            <li>Safari: Preferencias &gt; Privacidad</li>
            <li>Edge: Configuración &gt; Cookies y permisos del sitio</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. Cookies de terceros</h2>
          <p>
            Algunos de nuestros socios comerciales (por ejemplo, anunciantes) utilizan cookies en nuestro sitio. Sin embargo, 
            no tenemos acceso ni control sobre estas cookies. Esta política de cookies cubre el uso de cookies por parte de 
            VoiceAgent AI únicamente y no las cookies utilizadas por terceros.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">6. Almacenamiento local</h2>
          <p>
            Además de las cookies, utilizamos el almacenamiento local (LocalStorage/SessionStorage) para almacenar cierta 
            información en su dispositivo que nos ayuda a mejorar su experiencia. Esta información se almacena localmente en 
            su dispositivo y está sujeta a las mismas reglas de privacidad y protección que se aplican a las cookies.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">7. Actualización de nuestra política de cookies</h2>
          <p>
            Esta Política de Cookies puede cambiar de vez en cuando para reflejar, por ejemplo, cambios en las cookies que 
            utilizamos o por otros motivos operativos, legales o regulatorios. Por lo tanto, le recomendamos que revise esta 
            política regularmente para mantenerse informado sobre nuestro uso de cookies y tecnologías relacionadas.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">8. Legislación aplicable</h2>
          <p>
            Esta Política de Cookies se rige por las leyes de la República de Colombia, especialmente la Ley 1581 de 2012 y el 
            Decreto 1377 de 2013 sobre protección de datos personales, así como las directrices de la Superintendencia de 
            Industria y Comercio sobre cookies y tecnologías similares.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre nuestra Política de Cookies, por favor contacte con nosotros a:<br />
            Correo electrónico: cookies@voiceagent.ai<br />
            Dirección: Calle 100 #15-25, Bogotá, Colombia<br />
            Teléfono: +57 601 123 4567
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
