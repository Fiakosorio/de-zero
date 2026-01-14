import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErroresVentas = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-50 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-3xl">
        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border-2 border-transparent hover:border-cyan-500 transition-all duration-300">
          <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm">Ventas</span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-8 text-gray-900 dark:text-white leading-tight">
            3 errores que están matando las ventas de tu web
          </h1>
          
          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 space-y-6">
            <p>Inversión en una web y no pasa nada. Cero consultas, cero ventas. ¿El problema? Casi siempre es uno de estos tres.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Error 1: Tu web tarda años en cargar</h2>
            <p>Si tu sitio tarda más de 3 segundos en cargar, el 40% de la gente se va antes de ver algo. Ojo con las imágenes sin optimizar y los hostings baratos.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Error 2: Tu web no se ve en el celular</h2>
            <p>El 70% de tus visitas vienen desde el celu. Si tenés que hacer zoom para leer, tu web está rota comercialmente.</p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Error 3: No hay forma fácil de contactarte</h2>
            <p>La gente no quiere formularios de 10 campos. Quiere un botón de WhatsApp que funcione al toque.</p>

            <p className="font-bold text-gray-900 dark:text-white text-xl text-center py-6 border-t border-gray-100 dark:border-gray-700">
              ¿Querés que revise tu web gratis? Mandame el link por WhatsApp.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErroresVentas;