import React from "react";

const Contacto = () => {
  return (
    <section id="contacto" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 dark:text-white text-gray-900">¿Hablamos de tu <span className="text-cyan-500">Proyecto?</span></h2>
        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Nombre" className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white border border-gray-100 dark:border-gray-700 outline-none" required />
            <input type="text" placeholder="WhatsApp (Ej: +54 9...)" className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white border border-gray-100 dark:border-gray-700 outline-none" required />
          </div>
          <select className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white border border-gray-100 dark:border-gray-700 outline-none">
            <option>Seleccioná el tipo de web</option>
            <option>Landing page simple</option>
            <option>Sitio institucional</option>
            <option>Tienda online</option>
            <option>No estoy seguro</option>
          </select>
          <textarea placeholder="Contanos tu idea en 2 líneas" rows="3" className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white border border-gray-100 dark:border-gray-700 outline-none"></textarea>
          <button className="bg-cyan-500 text-white font-bold py-5 rounded-2xl shadow-lg hover:bg-cyan-600 transition-all">
            Pedir Presupuesto Sin Compromiso
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;

