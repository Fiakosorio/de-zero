import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagaSiTeGusta = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-50 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-3xl">
        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border-2 border-transparent hover:border-cyan-500 transition-all duration-300">
          <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm">Confianza</span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-8 text-gray-900 dark:text-white leading-tight">
            Paga si te gusta - Mi modelo de confianza
          </h1>
          
          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 space-y-6">
            <p>Arrancás un negocio y el primer obstáculo es meter guita sin saber si el resultado va a ser bueno. Te prometen "la mejor web", pero hasta que no pagás todo, no ves nada. Conozco esa sensación porque la viví. Por eso trabajo distinto.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cómo funciona mi modelo</h2>
            <ul className="space-y-4">
              <li><strong>Hablamos de tu proyecto</strong> — Me contás qué necesitás, te digo si puedo hacerlo.</li>
              <li><strong>Te mando un presupuesto claro</strong> — Sin sorpresas, sin letra chica.</li>
              <li><strong>Arranco el trabajo</strong> — Sí, sin cobrar nada todavía.</li>
              <li><strong>Te voy mostrando avances</strong> — No espero a terminar todo para que veas algo.</li>
              <li><strong>Entrego la versión final</strong> — Revisás todo, probás todo.</li>
              <li><strong>Si te gusta, pagás</strong> — Si no te convence al 100%, no pagás.</li>
            </ul>

            <h3 className="text-xl font-bold text-red-500 uppercase">¿Y si alguien me caga?</h3>
            <p>Puede pasar. Hasta ahora no me pasó, pero sé que algún día va a pasar. Y está bien, es parte del juego. Prefiero perder 1 de cada 20 proyectos antes que obligar a alguien a pagar por algo que no le sirve.</p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Aplica para:</h4>
              <p className="text-sm">Landing pages, sitios institucionales, rediseños y proyectos de hasta 15 días.</p>
            </div>

            <p className="font-bold text-gray-900 dark:text-white text-xl text-center py-6">
              ¿Te copa trabajar así? Escribime por WhatsApp y charlamos de tu proyecto sin compromiso.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PagaSiTeGusta;