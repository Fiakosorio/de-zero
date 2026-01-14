import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Politicas = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-300">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Política de Privacidad</h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p><strong>Última actualización: Diciembre 2025</strong></p>
          <p>En <strong>De Zero</strong>, respetamos tu información personal. Esta política describe cómo manejamos los datos que nos brindás.</p>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. Qué información recopilamos</h3>
          <p>Solo solicitamos datos básicos a través de nuestro formulario de contacto (Nombre, Email y Mensaje) con la única finalidad de poder responder a tu consulta comercial.</p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. Uso de la información</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder a tus pedidos de presupuesto.</li>
            <li>Enviarte la información solicitada sobre nuestros servicios.</li>
            <li>Nunca venderemos ni compartiremos tu email con terceros.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. Cookies</h3>
          <p>Este sitio puede utilizar cookies técnicas para asegurar el correcto funcionamiento de la navegación. No utilizamos cookies de rastreo invasivas sin tu consentimiento.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Politicas;