// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import ModelosSitios from "./pages/ModelosSitios";
import PagaSiTeGusta from "./pages/PagaSiTeGusta";
import WhatsAppBot from "./components/WhatsAppBot"
import CotizarServicios from "./pages/CotizarServicios";
import MarkdownPage from "./pages/MarkdownPage";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`font-sans ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
              />
            }
          />
          <Route path="/blog/modelos-sitios" element={<ModelosSitios />} />
          <Route path="/blog/paga-si-te-gusta" element={<PagaSiTeGusta />} />
          <Route path="/blog/markdown-page" element={<MarkdownPage />} />
          <Route path="/blog/md/:file" element={<MarkdownPage />} />
          <Route path="/blog/cotizar-servicios" element={<CotizarServicios />} />
        </Routes>
        <WhatsAppBot />


        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/5491163721805?text=Hola!%20Estoy%20interesado%20en%20crear%20una%20página%20web%20con%20de%20Zero.%20Quisiera%20saber%20más%20sobre%20los%20modelos%20de%20sitio%20web%2C%20cotizaciones%20y%20cómo%20funciona%20tu%20sistema%20%F0%9F%A4%93"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-4 z-50 bg-[#25D366] w-16 h-16 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
          title="Escribime por WhatsApp"
        >
          <img
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            className="w-9 h-9"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default App;
