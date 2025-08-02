// src/pages/ModelosSitios.js
import React from "react";

const ModelosSitios = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-cyan-500">
          Modelos de Sitio Web y Costos Transparentes
        </h1>

        <p className="mb-4 text-lg">
          Cada cliente tiene necesidades diferentes, por eso en <strong>de Zero</strong> ofrecemos soluciones web personalizadas según el tipo de proyecto. A continuación, te presento los modelos más comunes de sitios web que desarrollamos:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-cyan-500 mb-2">Sitio Básico</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Ideal para emprendedores o negocios pequeños que necesitan una presencia online. Incluye inicio, servicios, contacto y redes sociales.
          </p>
          <p className="mt-2 font-bold">Desde USD 150</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-cyan-500 mb-2">Sitio Corporativo</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Pensado para empresas o marcas que necesitan comunicar profesionalismo. Integra blog, galería, formularios, equipo y optimización SEO.
          </p>
          <p className="mt-2 font-bold">Desde USD 350</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-cyan-500 mb-2">Tienda Online</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Para quienes desean vender productos o servicios. Incluye catálogo, carrito de compras, pasarela de pago y soporte técnico inicial.
          </p>
          <p className="mt-2 font-bold">Desde USD 500</p>
        </div>

        <div className="text-center mt-10">
          <img
            src={process.env.PUBLIC_URL + "/modelo-web-ejemplo.png"}
            alt="Ejemplo visual de estructura web"
            className="mx-auto w-full max-w-xl rounded shadow-md"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            *Imagen referencial. Todos los diseños se adaptan a tus necesidades.
          </p>
        </div>

        <p className="mt-10 text-md text-gray-700 dark:text-gray-300">
          Si estás listo para desarrollar tu sitio web, podemos agendar una llamada gratuita para evaluar tus objetivos, tu marca y tus preferencias visuales. También puedo ayudarte a diseñar tu logotipo y definir la identidad visual de tu negocio desde cero.
        </p>
      </div>
    </div>
  );
};

export default ModelosSitios;
