import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-4 text-gray-900 dark:text-white tracking-tighter">
          Casos <span className="text-cyan-500">Reales</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Resultados comprobables. Negocios que hoy venden más gracias a su web.
        </p>

        {/* GALERÍA DE PROYECTOS - GRID DE 2 COLUMNAS */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          
          {/* CASO 1: SPA */}
          <div className="group bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2070" 
                 alt="Spa Web" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                 PROYECTO REAL
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Centro de Estética & Spa</h3>
              <p className="text-cyan-500 font-bold text-sm mb-4 uppercase tracking-wider">Landing Page + Sistema de Turnos</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Diseño minimalista enfocado en la relajación visual. Implementación de botón de WhatsApp directo para agendar masajes y tratamientos. Aumentó un 40% las consultas desde Instagram.
              </p>
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">Entregado en 7 días</span>
                <a href="#contacto" className="text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline">Ver Demo →</a>
              </div>
            </div>
          </div>

          {/* CASO 2: ARQUITECTURA */}
          <div className="group bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700">
             <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070" 
                 alt="Arquitectura Web" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                 PROYECTO REAL
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Estudio de Arquitectura</h3>
              <p className="text-cyan-500 font-bold text-sm mb-4 uppercase tracking-wider">Sitio Institucional + Portfolio</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Web elegante y visual para mostrar obras y proyectos. Galería de imágenes de alta calidad optimizada para cargar rápido en celulares. Estructura SEO para aparecer en búsquedas locales.
              </p>
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">Entregado en 10 días</span>
                <a href="#contacto" className="text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline">Ver Demo →</a>
              </div>
            </div>
          </div>

          {/* CASO 3: DENTISTA (ODONTOLOGÍA) */}
          <div className="group bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700">
             <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2070" 
                 alt="Consultorio Dental" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                 PROYECTO REAL
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Clínica Odontológica</h3>
              <p className="text-cyan-500 font-bold text-sm mb-4 uppercase tracking-wider">Turnos Online + Google Maps</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                El cliente perdía pacientes por no poder atender el teléfono. Implementamos reserva de turnos online 24/7 y posicionamiento en mapas. La agenda se llenó sola en el primer mes.
              </p>
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">Entregado en 8 días</span>
                <a href="#contacto" className="text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline">Ver Demo →</a>
              </div>
            </div>
          </div>

          {/* CASO 4: AGENCIA MARKETING */}
          <div className="group bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700">
             <div className="h-64 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                 alt="Agencia Marketing" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                 PROYECTO REAL
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Agencia Growth Marketing</h3>
              <p className="text-cyan-500 font-bold text-sm mb-4 uppercase tracking-wider">Sitio Corporativo + Blog</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Necesitaban credibilidad para vender servicios high-ticket. Pasaron de parecer freelancers a una agencia consolidada. Diseño moderno, oscuro y enfocado en conversión B2B.
              </p>
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">Entregado en 15 días</span>
                <a href="#contacto" className="text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline">Ver Demo →</a>
              </div>
            </div>
          </div>

        </div>

        {/* CTA FINAL */}
        <div className="text-center">
          <a href="#contacto" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform shadow-lg hover:bg-indigo-700">
            Quiero una web así
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;