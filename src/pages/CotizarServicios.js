// src/pages/CotizarServicios.js
import React from "react";

const CotizarServicios = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-cyan-500 mb-6">
          💰 Cómo Cotizar Servicios Web sin Ahuyentar a tus Clientes
        </h1>
        <p className="text-lg mb-4">
          En <strong>de Zero</strong> entendemos que el precio es parte del
          valor, pero <strong>no lo es todo</strong>. Presentar tu propuesta con
          claridad y seguridad genera más confianza que simplemente tirar un
          número.
        </p>

        <div className="text-left space-y-4 my-10">
          <h2 className="text-2xl font-semibold text-cyan-600">
            🎯 Estrategia
          </h2>
          <p>
            Cotizamos en base a paquetes: Landing Page, Web Corporativa,
            eCommerce... Mostramos los beneficios que el cliente obtiene:
            velocidad, posicionamiento SEO, diseño adaptativo, soporte técnico.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-600">
            📊 Educamos al cliente
          </h2>
          <p>
            No vendemos un archivo .zip, ofrecemos{" "}
            <strong>una solución a medida</strong> para su negocio. Mostramos
            ejemplos, resultados y beneficios concretos.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-600">🤝 Confianza</h2>
          <p>
            Somos transparentes. Mostramos precios desde, tiempos estimados y
            qué incluye cada entrega. Brindamos seguridad al cliente.
          </p>
        </div>

        <div className="min-h-screen px-4 py-12 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-teal-400">
              💡 Escuchar tus proyectos para poder inspirar
            </h1>

            <img
              src="https://images.unsplash.com/photo-1657697071046-1eef624e96e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="cotizar servicios"
              className="w-full rounded-xl shadow-lg mb-10"
            />

            <p className="mb-6 text-lg leading-relaxed">
              Cotizar correctamente tus servicios es un arte que combina
              comunicación, claridad y profesionalismo. A continuación, te
              compartimos consejos clave para que puedas cotizar sin miedo a
              perder clientes:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-base leading-relaxed">
              <li>
                📌 Escuchamos primero qué necesita el cliente y hacemos
                preguntas inteligentes.
              </li>
              <li>
                💡 No damos precios por impulso: analizamos el alcance del
                trabajo.
              </li>
              <li>
                📊 Ofrecemos opciones escalonadas si es posible (básico,
                intermedio, premium).
              </li>
              <li>
                📝 Enviamos tu cotización de forma clara, profesional y
                personalizada.
              </li>
              <li>
                ⏱️ Incluímos tiempos estimados, revisiones y condiciones claras.
              </li>
            </ul>

            <p className="text-lg font-semibold text-center mt-10 text-teal-300">
              Recordá: No vendo solo mi tiempo, sino mi experiencia. Valorate, y
              los demás también lo harán.
            </p>
          </div>
        </div>
        <div className="bg-cyan-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
          <p className="text-lg font-semibold mb-2">
            💸 Podés apoyar nuestro trabajo con un aporte libre:
          </p>
          <a
            href="https://link.mercadopago.com.ar/dezer0m0nt0libr3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition"
          >
            Aportar vía Mercado Pago
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
            Artículo adaptado de la serie “Ideas de Valor Comercial” – de Zero™.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CotizarServicios;
