import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terminos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 text-gray-900 dark:text-white tracking-tighter">
          TÉRMINOS Y CONDICIONES
        </h1>
        <p className="text-sm text-gray-500 mb-8 italic">Última actualización: 14 de enero de 2026</p>
        
        <div className="space-y-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          <p>Al contratar los servicios de **De Zero**, aceptás los siguientes términos:</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 underline decoration-cyan-500/30">1. Servicios ofrecidos</h2>
            <p>De Zero ofrece desarrollo de páginas web, diseño digital y soluciones de automatización. Los detalles específicos de cada proyecto se acuerdan por escrito antes de comenzar.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 underline decoration-cyan-500/30">2. Proceso de trabajo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Entregamos un borrador para tu aprobación antes de finalizar</li>
              <li>Tenés derecho a 2 rondas de cambios incluidas</li>
              <li>Cambios adicionales se cobran aparte según complejidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 underline decoration-cyan-500/30">3. Plazos de entrega</h2>
            <p>Los plazos acordados se cumplen salvo demoras del cliente (falta de contenido, aprobaciones pendientes) o causas de fuerza mayor.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 underline decoration-cyan-500/30">4. Forma de pago</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>50% al iniciar el proyecto</li>
              <li>50% al entregar la versión final</li>
              <li>Modalidad "Paga si te gusta" aplica solo en proyectos acordados previamente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 underline decoration-cyan-500/30">5. Propiedad intelectual</h2>
            <p>Una vez completado el pago, el cliente es dueño total del sitio web y su contenido. De Zero puede usar el proyecto en su portfolio.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 underline decoration-cyan-500/30">6. Garantía</h2>
            <p>Ofrecemos 30 días de soporte técnico gratuito posterior a la entrega para corrección de errores (no incluye cambios de diseño o contenido nuevo).</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terminos;