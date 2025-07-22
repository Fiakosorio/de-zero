// src/pages/CotizarServicios.js
import React from "react";

const CotizarServicios = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-cyan-500">
          Cómo Cotizar Servicios Web sin Ahuyentar a Clientes
        </h1>
        <p className="mb-4 text-lg">
          En este artículo, te cuento cómo presentar tus precios de forma clara
          y profesional para que tus clientes entiendan el valor de lo que hacés.
        </p>
        <p className="mb-4">
          Muchos freelancers se enfrentan al dilema de cobrar barato o no cobrar
          nada. Pero la clave está en ofrecer paquetes que muestren beneficios
          concretos: velocidad de carga, diseño responsive, mantenimiento mensual
          opcional, etc.
        </p>
        <p className="mb-4">
          Además, es importante educar al cliente: no estás vendiendo un archivo .zip,
          estás resolviendo un problema. Comunicar eso con claridad puede marcar la
          diferencia entre cerrar un proyecto... o perderlo.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-10">
          Artículo adaptado de “Ideas de valor comercial 1.pdf”.
        </p>
      </div>
    </div>
  );
};

export default CotizarServicios;
