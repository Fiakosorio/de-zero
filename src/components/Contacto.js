import React from "react";

const Contacto = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors font-sans">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
            Hablemos de tu Proyecto
          </h2>
        </div>

        {/* Formulario configurado para Netlify */}
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          action="/gracias" 
          className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 space-y-6"
        >
          {/* Campo oculto obligatorio para que Netlify detecte el form en React */}
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Tu nombre" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Corporativo / Personal</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="ejemplo@correo.com" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">¿Qué tipo de solución necesitás?</label>
            <select name="service" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Seleccioná una opción</option>
              <option value="landing">Landing Page (Pack Arranque)</option>
              <option value="institucional">Sitio Institucional (Pack Profesional)</option>
              <option value="ecommerce">Tienda Online (Pack Negocio)</option>
              <option value="automatizacion">Automatización con IA / n8n</option>
              <option value="mantenimiento">Mantenimiento Mensual</option>
              <option value="otro">Otro / Consulta general</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Contame brevemente tu idea</label>
            <textarea 
              name="message" 
              required 
              rows="4" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="¿Cómo puedo ayudarte a escalar?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-xl shadow-xl transition-all active:scale-95 text-lg"
          >
            Enviar formulario de consulta
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
