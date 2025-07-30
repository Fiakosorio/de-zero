// src/pages/CotizarServicios.js
import React from "react";

const CotizarServicios = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-cyan-500 mb-6">
          💡 Cómo Cotizar Servicios Web sin Ahuyentar a tus Clientes
        </h1>
        <p className="text-lg mb-4">
          En <strong>de Zero</strong> entendemos que el precio es parte del valor, pero **no lo es todo**. Presentar tu propuesta con claridad y seguridad genera más confianza que simplemente tirar un número.
        </p>

        <div className="text-left space-y-4 my-10">
          <h2 className="text-2xl font-semibold text-cyan-600">🎯 Estrategia</h2>
          <p>
            Cotizá en base a paquetes: Landing Page, Web Corporativa, eCommerce... Mostrá los beneficios que el cliente obtiene:
            velocidad, posicionamiento SEO, diseño adaptativo, soporte técnico.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-600">📊 Educá al cliente</h2>
          <p>
            No vendés un archivo .zip, ofrecés **una solución a medida** para su negocio. Mostrá ejemplos, resultados o beneficios concretos.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-600">🤝 Confianza</h2>
          <p>
            Sé transparente. Mostrá precios desde, tiempos estimados y qué incluye cada entrega. Eso genera seguridad en el cliente.
          </p>
        </div>

        <div className="bg-cyan-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
          <p className="text-lg font-semibold mb-2">💸 Podés apoyar nuestro trabajo con un aporte libre:</p>
          <a
            href="https://link.mercadopago.com.ar/dezer0m0nt0libr3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition"
          >
            Aportar vía Mercado Pago
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          Artículo adaptado de la serie “Ideas de Valor Comercial” – de Zero™.
        </p>
      </div>
    </section>
  );
};

export default CotizarServicios;
