import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DisenoWeb = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen font-sans transition-colors duration-500">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="pt-40 pb-20 container mx-auto px-6 max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter">
              Diseño Web que Funciona
            </h1>
            <p className="text-xl text-cyan-500 font-bold mb-8 italic">
              No vendemos humo. Vendemos resultados.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creamos sitios web con WordPress y potenciados con inteligencia artificial para que tu negocio se vea profesional y genere ventas reales.
            </p>
          </div>

          {/* Diferenciales */}
          <section className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">¿Qué hacemos diferente?</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-indigo-500 mb-1">Usamos IA para acelerar</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Entregamos en 7 días lo que otros tardan un mes. Optimizamos código y generamos contenido base.</p>
                </div>
                <div>
                    <h3 className="font-bold text-indigo-500 mb-1">WordPress sólido</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">El 43% de Internet lo usa. Estable, confiable y mantenible por cualquiera.</p>
                </div>
                <div>
                    <h3 className="font-bold text-indigo-500 mb-1">Diseño a medida</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sin plantillas genéricas. Pensado en tu cliente ideal y en qué lo hace comprar.</p>
                </div>
            </div>
          </section>

          {/* Para quién y Qué incluye */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">¿Para quién trabajamos?</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                    <li>Profesionales independientes (médicos, abogados)</li>
                    <li>Negocios locales (gyms, estudios, consultorios)</li>
                    <li>Emprendedores digitales</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Lo que incluye:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Diseño responsive (celular/PC)</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Velocidad optimizada</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> SEO básico incluido</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Formulario de contacto</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Capacitación básica</li>
                </ul>
            </div>
          </div>

          {/* Precios */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">Precios reales (Buenos Aires, 2026)</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Landing Page</h4>
                    <p className="text-3xl font-black text-cyan-500 my-3">$200.000</p>
                    <p className="text-xs text-gray-500">Lista en 7 días</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border-2 border-cyan-500 transform md:-translate-y-2">
                    <div className="text-center text-cyan-600 font-bold text-xs uppercase mb-2">Más popular</div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Sitio Institucional</h4>
                    <p className="text-3xl font-black text-cyan-500 my-3">$400.000</p>
                    <p className="text-xs text-gray-500">Listo en 12 días</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Rediseño</h4>
                    <p className="text-2xl font-black text-gray-400 my-3">Desde $220.000</p>
                    <p className="text-xs text-gray-500">Según complejidad</p>
                </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-6">Todos los precios incluyen IVA. Hosting y dominio no incluidos.</p>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">¿Arrancamos?</h3>
            <a href="https://wa.me/5491163721805" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition-transform hover:scale-105">
              Hablar por WhatsApp
            </a>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DisenoWeb;