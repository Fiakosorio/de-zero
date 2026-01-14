import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactoPage = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen font-sans transition-colors duration-500">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="pt-40 pb-20 container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter">
              Hablemos de tu Proyecto
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Dejá de perder tiempo y empezá a vender online.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              No mandamos propuestas genéricas. Hablamos, entendemos tu negocio y te decimos si podemos ayudarte o no.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Cómo trabajamos */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cómo trabajamos</h2>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
                    <span className="text-cyan-600 dark:text-cyan-300 font-bold text-xs">1</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Primera conversación (gratis)</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">30 min por videollamada o WhatsApp. Vemos si tiene sentido.</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
                    <span className="text-cyan-600 dark:text-cyan-300 font-bold text-xs">2</span>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Propuesta clara</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Qué hacemos, cuánto cuesta, cuándo lo tenés. Sin letra chica.</p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
                    <span className="text-cyan-600 dark:text-cyan-300 font-bold text-xs">3</span>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Arrancamos</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">50% al inicio, 50% al final. Si no te convence el resultado, no pagás el resto.</p>
                </li>
              </ol>
            </div>

            {/* Datos de contacto */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Formas de contacto</h2>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-indigo-500">WhatsApp (la más rápida)</h4>
                        <a href="https://wa.me/5491163721805" target="_blank" rel="noopener noreferrer" className="text-xl font-black text-gray-900 dark:text-white hover:text-green-500 transition-colors">
                            11 6372 1805
                        </a>
                        <p className="text-xs text-gray-500">Lun a Vie, 9-19hs</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-indigo-500">Email</h4>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">hola@dezero.com.ar</p>
                        <p className="text-xs text-gray-500">Respondo en menos de 24hs</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-indigo-500">Ubicación</h4>
                        <p className="text-gray-900 dark:text-white">Buenos Aires, Argentina</p>
                        <p className="text-xs text-gray-500">Remoto total (o café en CABA)</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Preguntas Frecuentes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Preguntas frecuentes rápidas</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">¿Cuánto tarda?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Landing: 7 días. Sitio: 10-15 días. E-commerce: 15-30 días.</p>
                </div>
                <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">¿Incluyen hosting?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">No, pero te recomiendo opciones desde $3.000/mes.</p>
                </div>
                <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">¿Puedo pagar en cuotas?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sí, con Mercado Pago hasta 12 cuotas.</p>
                </div>
                <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">¿Qué pasa si no me gusta?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hacemos cambios hasta que estés conforme (máx 2 rondas sin costo).</p>
                </div>
            </div>
          </section>

          {/* CTA Final */}
          <div className="text-center bg-indigo-600 rounded-3xl p-10 text-white shadow-xl">
            <h3 className="text-3xl font-black mb-4">Mandame un mensaje ahora</h3>
            <p className="text-xl opacity-90 mb-8">No vendo humo. Vendo resultados.</p>
            <a href="https://wa.me/5491163721805" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-indigo-600 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-transform hover:scale-105">
                Enviar WhatsApp
            </a>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactoPage;