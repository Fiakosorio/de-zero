import React from "react";
import { Link } from "react-router-dom"; 

const CotizarServicios = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-cyan-500 mb-6">
          ✨ Transparencia Total: Así Definimos el Valor de tu Proyecto
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          En <strong>de Zero</strong>, no cotizamos por horas, sino por el <strong>valor real</strong> que tu web generará para tu negocio. Nuestra metodología es clara, profesional y 100% transparente.
        </p>

        <div className="text-left space-y-8 my-10">
          
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-3 text-cyan-600 dark:text-cyan-400 border-b border-cyan-500/30 pb-2">
              1. Definición Clara del Alcance
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>El Punto Clave:</strong> Nunca te vamos a cobrar un extra por algo que no acordamos al inicio. <br />Definimos claramente qué incluye el paquete de servicio (Web Básica, Negocio, Venta) y qué queda <strong>afuera</strong>. ¡Cero sorpresas al final!
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-3 text-cyan-600 dark:text-cyan-400 border-b border-cyan-500/30 pb-2">
              2. El Foco está en la Solución
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Nuestro precio se basa en la <strong>solución</strong> que te vamos a entregar para tu problema de negocio (más clientes, mejor imagen, más ventas). <br />Te presentamos un abanico de paquetes funcionales para que elijas la solución que mejor se adapte a tu necesidad y presupuesto.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-3 text-cyan-600 dark:text-cyan-400 border-b border-cyan-500/30 pb-2">
              3. Propuesta Formal y Detallada
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Te enviamos una cotización formal que incluye todo, detallando:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>✅ El objetivo a lograr.</li>
                <li>✅ El paquete de servicios elegido.</li>
                <li>✅ Los tiempos de entrega estimados (sin vueltas).</li>
                <li>✅ El valor final de la inversión.</li>
              </ul>
            </p>
          </div>
        </div>

        <p className="text-2xl font-extrabold mt-10 text-red-500 dark:text-red-400 border-t pt-5 border-gray-300 dark:border-gray-700">
          El precio es una consecuencia de la estrategia, no el punto de partida.
        </p>

        <div className="mt-12 text-center">
            <Link
                to="/"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-full cursor-pointer transition shadow-md hover:shadow-lg"
            >
                Quiero que me cotices una web →
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CotizarServicios;