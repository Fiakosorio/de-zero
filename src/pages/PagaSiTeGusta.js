import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const PagaSiTeGusta = () => {
  const [monto, setMonto] = useState("");

  const handlePagar = () => {
    // Usamos un valor fijo si el monto es inválido, sino el monto ingresado
    let finalAmount = monto; 
    if (!monto || isNaN(monto) || Number(monto) <= 0) {
      finalAmount = "aporte-libre"; // Placeholder para el link de Mercado Pago
    }
    
    // ATENCIÓN: Enlace de ejemplo. Adaptalo a tu link real de Mercado Pago si lo usas.
    const enlacePersonal = `https://link.mercadopago.com.ar/dezer0?monto=${finalAmount}`; 

    alert(`Redirigiendo a Mercado Pago para un aporte de: ${finalAmount === 'aporte-libre' ? 'Monto Libre' : `$${finalAmount}`}`);
    // En producción, usar: window.open(enlacePersonal, "_blank");
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-cyan-500">
          ✨ El precio lo fijás vos: Pagá si te gustó el valor
        </h1>
        <p className="mb-8 text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Este modelo es exclusivo para nuestras <strong>Guías, Instructivos y Contenido de Aprendizaje (IA, Desarrollo Web, Automatización)</strong>. 
          Leé, aplicá y si el material te generó valor, hacé el aporte que te parezca justo.
        </p>

        {/* SECCIÓN DE APORTE */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-2xl border-t-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
            ¿Cuánto vale para vos el conocimiento?
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
            Ingresá el monto que consideres justo por la guía que acabás de usar:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="number"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              placeholder="Monto de Aporte (Ej: 500, 1000)"
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg w-full sm:w-1/2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-center focus:ring-cyan-500 focus:border-cyan-500"
              min="1"
            />
            <button
              onClick={handlePagar}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto shadow-md"
            >
              Aportar vía Mercado Pago 🚀
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            El pago se realiza por única vez a través de Mercado Pago.
          </p>
        </div>

        <div className="mt-12 text-left">
          <h3 className="text-2xl font-bold text-cyan-500 mb-4">¿Por qué hacemos esto?</h3>
          <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside ml-4">
            <li>
              <strong>Confianza:</strong> Queremos demostrar que nuestro material es útil <strong>antes</strong> de pedir algo a cambio.
            </li>
            <li>
              <strong>Compromiso:</strong> Solo invertís si creés que el conocimiento te va a hacer generar más plata o ahorrar tiempo.
            </li>
            <li>
              <strong>Sostenibilidad:</strong> Tu aporte nos permite seguir creando más guías, instructivos y proyectos open source.
            </li>
          </ul>
        </div>
        
        <div className="mt-12">
            <Link
                to="/#blog"
                className="text-lg text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
            >
                ← Volver al Blog
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PagaSiTeGusta;