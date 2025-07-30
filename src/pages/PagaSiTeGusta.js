// src/pages/PagaSiTeGusta.js
import React, { useState } from "react";

const PagaSiTeGusta = () => {
  const [monto, setMonto] = useState("");

  const handlePagar = () => {
    if (!monto || isNaN(monto) || Number(monto) <= 0) {
      alert("Por favor ingresá un monto válido.");
      return;
    }

    const enlacePersonal = "https://link.mercadopago.com.ar/dezer0m0nt0libr3";
    alert("Redirigiendo a Mercado Pago...");
    window.open(enlacePersonal, "_blank");
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-cyan-500">
          Pagá si te gusta 💸
        </h1>
        <p className="mb-6 text-lg leading-relaxed">
          En <strong>de Zero</strong> creemos en relaciones de confianza. Si te
          gustó el contenido, diseño o la ayuda que te brindamos, podés hacer
          una contribución libre. Vos elegís el valor.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contribución voluntaria</h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="number"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              placeholder="Ingresá un monto ($)"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md w-full sm:w-1/2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-center"
            />
            <button
              onClick={handlePagar}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition w-full sm:w-auto"
            >
              Ir a Pagar
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            El pago se realiza a través de Mercado Pago. Podés ingresar el monto
            que consideres justo por nuestro trabajo.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-cyan-500 mb-2">¿Por qué lo hacemos así?</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Creemos que si te damos algo valioso, vas a querer apoyarlo. Esta modalidad es ideal para freelancers, pequeños negocios, o proyectos en etapa de validación. Si te interesa implementar algo similar para tu web, contactanos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagaSiTeGusta;


