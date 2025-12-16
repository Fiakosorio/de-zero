// src/pages/ModelosSitios.js
import React from "react";
import { Link } from "react-router-dom"; 

const ModelosSitios = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-extrabold mb-4 text-cyan-500 text-center">
          💰 Paquetes Web "Llave en Mano" para tu Negocio
        </h1>
        <p className="mb-10 text-xl text-gray-600 dark:text-gray-300 text-center">
          Tu web lista para vender en tiempo récord. Olvidate de las sorpresas y de aprender código.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
            
            {/* PAQUETE 1: BÁSICO */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-xl border-t-4 border-cyan-500 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-cyan-500">Pack Despegue</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  La base para arrancar. Una web con 5 secciones y formulario.
                </p>
                <ul className="list-disc list-inside text-sm mb-4 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Estructura Profesional y Rápida</li>
                    <li>Diseño Adaptable (Mobile Ready)</li>
                    <li>Formulario de Contacto Directo</li>
                </ul>
              </div>
              <div className="text-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">USD 150</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Pago único (Hosting aparte)</p>
              </div>
            </div>

            {/* PAQUETE 2: CORPORATIVO */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-xl border-t-4 border-blue-500 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-blue-500">Pack Negocio</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Presencia completa para PyMES. Ideal para servicios y marca personal.
                </p>
                <ul className="list-disc list-inside text-sm mb-4 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Incluye todo el Pack Despegue +</li>
                    <li>Sección Portfolio/Galería</li>
                    <li>Integración con WhatsApp/Maps</li>
                    <li>Página Autoadministrable</li>
                </ul>
              </div>
              <div className="text-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">USD 350</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Pago único (Hosting aparte)</p>
              </div>
            </div>
            
            {/* PAQUETE 3: E-COMMERCE */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-xl border-t-4 border-green-500 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-green-500">Pack Venta Rápida</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  La tienda online completa para empezar a facturar de inmediato.
                </p>
                <ul className="list-disc list-inside text-sm mb-4 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Incluye todo el Pack Negocio +</li>
                    <li>Sistema de Carrito y Catálogo</li>
                    <li>Pasarela de Pago (Mercado Pago, etc.)</li>
                    <li>Carga inicial de hasta 10 productos</li>
                </ul>
              </div>
              <div className="text-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">Desde USD 500</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Pago único (Hosting aparte)</p>
              </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <Link
                to="/#contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-full cursor-pointer transition shadow-md hover:shadow-lg"
            >
                Quiero mi paquete web →
            </Link>
        </div>

        <p className="mt-10 text-md text-gray-700 dark:text-gray-300">
          <strong>Nota:</strong> Estos precios son estimados. El servicio incluye la instalación, diseño y carga de contenido inicial. Los costos de dominio y hosting son responsabilidad del cliente. Todos los sitios son <strong>autoadministrables</strong> para que puedas cargar tus propios contenidos fácilmente.
        </p>
      </div>
    </div>
  );
};

export default ModelosSitios;