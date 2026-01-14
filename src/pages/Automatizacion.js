import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Automatizacion = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen font-sans transition-colors duration-500">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="pt-40 pb-20 container mx-auto px-6 max-w-5xl">
          
          {/* Encabezado: Valor sobre Técnica */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white tracking-tighter">
              Automatización de Procesos
            </h1>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 font-bold mb-8">
              No vendo horas de configuración. Vendo tiempo de vida para vos.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conectamos tus herramientas (WhatsApp, Email, Excel, CRM) para que trabajen solas. Desde que un cliente completa un formulario hasta que recibe su factura, <strong>todo automático.</strong>
            </p>
          </div>

          {/* CASO REAL: El gancho de venta */}
          <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border-l-8 border-green-500 shadow-xl mb-20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase">Caso Real: Estudio Contable</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>El Problema:</strong> Un empleado cargaba manualmente 200 facturas/mes desde emails al sistema. <br/>
                  <span className="text-red-500 font-bold">Pérdida: 100 horas/mes de trabajo humano.</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>La Solución (n8n):</strong> Email con PDF → Extrae datos (OCR) → Carga en sistema → Notifica al contador.<br/>
                  <span className="text-green-500 font-bold text-lg">Resultado: Se hace solo en segundos. El empleado ahora hace tareas de verdad.</span>
                </p>
              </div>
              <div className="md:text-right">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-bold px-6 py-3 rounded-xl inline-block">
                  Ahorro anual estimado:<br/>
                  <span className="text-3xl font-black">$10.200.000 ARS</span>
                </div>
              </div>
            </div>
          </section>

          {/* PRECIOS ACTUALIZADOS (Realistas) */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">Inversión en Automatización</h2>
            <div className="grid md:grid-cols-3 gap-6">
                
                {/* Simple */}
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border-2 border-transparent hover:border-indigo-500 transition-all shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Automatización Simple</h3>
                    <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 my-4">$180.000</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Conecta 2 apps y eliminá tareas repetitivas.</p>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
                        <li>• Formulario web → Email</li>
                        <li>• Slack → Google Sheets</li>
                        <li>• Notificación de pagos</li>
                    </ul>
                    <a href="https://wa.me/5491163721805?text=Me%20interesa%20la%20Automatización%20Simple" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white dark:bg-gray-700 text-indigo-600 dark:text-white font-bold rounded-xl text-center border border-indigo-200 dark:border-gray-600 hover:bg-indigo-50 dark:hover:bg-gray-600">Empezar</a>
                </div>

                {/* Avanzada */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border-2 border-indigo-600 shadow-2xl transform md:-translate-y-4">
                    <div className="text-xs font-bold text-indigo-600 uppercase mb-2 text-center tracking-widest">Lo más pedido</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Automatización Avanzada</h3>
                    <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 my-4">$450.000</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Lógica condicional, filtros y múltiples pasos.</p>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
                        <li>• Venta → Factura → CRM</li>
                        <li>• Gestión de Turnos completa</li>
                        <li>• Filtrado de Leads con IA</li>
                    </ul>
                    <a href="https://wa.me/5491163721805?text=Me%20interesa%20la%20Automatización%20Avanzada" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-indigo-600 text-white font-bold rounded-xl text-center hover:bg-indigo-700">Cotizar Ahora</a>
                </div>

                {/* Sistema */}
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border-2 border-transparent hover:border-indigo-500 transition-all shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sistema Integrado</h3>
                    <div className="flex items-baseline">
                        <span className="text-lg text-gray-500 mr-1">Desde</span>
                        <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400 my-4">$1.200.000</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Tu negocio funcionando en piloto automático.</p>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
                        <li>• E-commerce 100% autónomo</li>
                        <li>• Dashboard de gestión integral</li>
                        <li>• Integración APIs custom</li>
                    </ul>
                    <a href="https://wa.me/5491163721805?text=Necesito%20un%20Sistema%20Integrado" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white dark:bg-gray-700 text-indigo-600 dark:text-white font-bold rounded-xl text-center border border-indigo-200 dark:border-gray-600 hover:bg-indigo-50 dark:hover:bg-gray-600">Agendar Reunión</a>
                </div>
            </div>
          </section>

          {/* MANTENIMIENTO MENSUAL - El Negocio Real */}
          <section className="bg-slate-100 dark:bg-slate-800/50 p-10 rounded-3xl mb-16">
             <div className="text-center mb-8">
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white">Mantenimiento Mensual</h3>
                 <p className="text-gray-600 dark:text-gray-400">Para que vos duermas tranquilo y tus sistemas no fallen nunca.</p>
             </div>
             <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 border-r border-slate-200 dark:border-slate-700 last:border-0">
                    <p className="font-bold text-gray-900 dark:text-white">Plan Básico</p>
                    <p className="text-cyan-600 font-black text-xl my-2">$80.000/mes</p>
                    <p className="text-xs text-gray-500">Monitoreo y corrección de errores.</p>
                </div>
                <div className="p-4 border-r border-slate-200 dark:border-slate-700 last:border-0">
                    <p className="font-bold text-gray-900 dark:text-white">Plan Estándar</p>
                    <p className="text-cyan-600 font-black text-xl my-2">$180.000/mes</p>
                    <p className="text-xs text-gray-500">Ajustes menores + Soporte 24hs.</p>
                </div>
                <div className="p-4">
                    <p className="font-bold text-gray-900 dark:text-white">Plan Premium</p>
                    <p className="text-cyan-600 font-black text-xl my-2">$350.000/mes</p>
                    <p className="text-xs text-gray-500">Desarrollo continuo y consultoría.</p>
                </div>
             </div>
          </section>

          {/* n8n vs Make */}
          <section className="bg-white dark:bg-gray-900 border-2 border-slate-100 dark:border-slate-800 p-8 rounded-2xl mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">¿Por qué uso n8n?</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-indigo-600 mb-2">Libertad Total</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">A diferencia de Zapier o Make, n8n no te cobra por cada paso que ejecuta tu automatización. Si tu negocio escala, tus costos no se disparan.</p>
                </div>
                <div>
                    <h3 className="font-bold text-indigo-600 mb-2">Privacidad de Datos</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Podemos alojar las automatizaciones en servidores propios. Tus datos y los de tus clientes no pasan por manos de terceros.</p>
                </div>
            </div>
          </section>

          {/* CTA Final */}
          <div className="text-center">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">¿Automatizamos tu negocio?</h3>
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

export default Automatizacion;