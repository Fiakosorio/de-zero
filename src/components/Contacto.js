// src/components/Contacto.js
import React from "react";

const Contacto = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-cyan-500">
          Contacto
        </h2>
        <form
          action="mailto:juanmosorio1982@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje..."
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;

