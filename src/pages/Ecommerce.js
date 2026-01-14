import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Ecommerce = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen font-sans transition-colors duration-500">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="pt-40 pb-20 container mx-auto px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter">
              E-commerce que Vende
            </h1>
            <p className="text-xl text-cyan-500 font-bold mb-8 italic">
              No vendemos carritos de compra. Vendemos sistemas que convierten visitas en ventas.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Montamos tu tienda online con WooCommerce o la plataforma que mejor se adapte a tu negocio.
            </p>
          </div>

          {/* Comparativa Plataformas */}
          <section className="mb-20 grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border-t-4 border-indigo-500 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">WooCommerce</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Vendés productos + servicios</li>
                <li>• Querés control total</li>
                <li>• Pensás escalar el negocio</li>
                <li>• Necesitás integraciones custom</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border-t-4 border-green-500 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">Shopify</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Solo vendés productos físicos</li>
                <li>• Querés algo "plug & play"</li>
                <li>• No querés preocuparte por hosting</li>
                <li>• Presupuesto permite suscripción</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border-t-4 border-blue-500 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">Tienda Nube</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Arrancás con poco presupuesto</li>
                <li>• Necesitás algo hoy mismo</li>
                <li>• Vendés a nivel local (Arg/Latam)</li>
              </ul>
            </div>
            <p className="col-span-full text-center text-gray-500 text-sm mt-4 font-bold">
              Decisión final: la tomamos juntos según tu caso.
            </p>
          </section>

          {/* Lo que incluye */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">Lo que incluye un e-commerce</h3>
              <ul className="space-y-3">
                {[
                  "Instalación y configuración completa",
                  "Diseño responsive (perfecto en mobile)",
                  "Carga de hasta 30 productos",
                  "Pasarela de pago configurada",
                  "Sistema de envíos (Correo Arg, OCA...)",
                  "Emails transaccionales",
                  "Panel de administración propio",
                  "Capacitación en vivo",
                  "30 días de soporte post-lanzamiento"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 font-bold mr-3 mt-1">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
               <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
                 <h4 className="font-bold text-indigo-500 mb-3">Integraciones</h4>
                 <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                        <strong>Pagos:</strong> Mercado Pago, Todo Pago, Stripe, Transferencia, Efectivo.
                    </div>
                    <div>
                        <strong>Envíos:</strong> Correo Argentino, Andreani, OCA, Moto, Retiro.
                    </div>
                    <div className="col-span-2">
                        <strong>Gestión:</strong> Facturación AFIP, Analytics, Pixel, WhatsApp, Telegram/Slack.
                    </div>
                 </div>
               </div>
               
               <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
                 <h4 className="font-bold text-indigo-500 mb-3">Funcionalidades</h4>
                 <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <strong>Básicas:</strong> Carrito, Cupones, Búsqueda, Filtros.
                 </p>
                 <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Avanzadas:</strong> Productos variables, Digitales, Membresías, Puntos/Fidelidad, Recuperación de carrito.
                 </p>
               </div>
            </div>
          </div>

          {/* Precios E-commerce */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">Precios E-commerce (Buenos Aires, 2026)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Tienda Básica */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-cyan-500 transition-all">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">Tienda Básica</h4>
                <div className="text-3xl font-black text-cyan-500 my-4">$450.000</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Hasta 30 productos</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Listo en 15 días</p>
              </div>
              {/* Tienda Profesional */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border-2 border-indigo-500 transform md:-translate-y-4">
                <div className="text-xs font-bold text-indigo-500 uppercase mb-2 text-center">Recomendado</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">Tienda Profesional</h4>
                <div className="text-4xl font-black text-indigo-500 my-4">$650.000</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Hasta 100 productos + integraciones avanzadas</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Listo en 20 días</p>
              </div>
              {/* Tienda Completa */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border-2 border-transparent hover:border-cyan-500 transition-all">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">Tienda Completa</h4>
                <div className="text-3xl font-black text-cyan-500 my-4">Desde $850.000</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Productos ilimitados + automatizaciones</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Listo en 30 días</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-6">
              Incluye diseño, desarrollo, carga de productos y capacitación. No incluye hosting.
            </p>
          </section>

          {/* Mantenimiento */}
          <section className="mb-20 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl">
             <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Mantenimiento Mensual</h3>
             <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                    <p className="font-black text-xl text-gray-900 dark:text-white">Plan Esencial</p>
                    <p className="text-cyan-500 font-bold text-lg my-2">$40.000/mes</p>
                    <p className="text-sm text-gray-500">Seguridad, Backups, Soporte email.</p>
                </div>
                <div className="text-center p-4 border-l border-r border-slate-200 dark:border-slate-700">
                    <p className="font-black text-xl text-gray-900 dark:text-white">Plan Crecimiento</p>
                    <p className="text-cyan-500 font-bold text-lg my-2">$75.000/mes</p>
                    <p className="text-sm text-gray-500">Monitoreo 24/7, Velocidad, Soporte prioritario.</p>
                </div>
                <div className="text-center p-4">
                    <p className="font-black text-xl text-gray-900 dark:text-white">Plan Escalado</p>
                    <p className="text-cyan-500 font-bold text-lg my-2">$120.000/mes</p>
                    <p className="text-sm text-gray-500">Reportes, Consultoría, Desarrollo mensual.</p>
                </div>
             </div>
          </section>
          
          {/* Realidad sin filtro */}
          <section className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Realidad sin filtro</h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 font-bold mb-2">Un e-commerce NO es "hacer un sitio y listo".</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Necesitás fotos decentes, descripciones que vendan, logística resuelta y atención al cliente.
            </p>
            <p className="font-bold text-gray-900 dark:text-white">
              Nosotros hacemos la tienda. El resto es tuyo. Si tenés los productos, nosotros armamos la tienda.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center mt-16">
            <a href="https://wa.me/5491163721805" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition-transform hover:scale-105">
              Hablar por WhatsApp
            </a>
            <p className="mt-4 text-gray-500">hola@dezero.com.ar</p>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Ecommerce;