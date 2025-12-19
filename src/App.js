// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Quitamos TechStack de acá porque lo vamos a mover a MainLayout
import MainLayout from "./layout/MainLayout";
import ModelosSitios from "./pages/ModelosSitios";
import PagaSiTeGusta from "./pages/PagaSiTeGusta";
import CotizarServicios from "./pages/CotizarServicios";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
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
          {/* Rutas secundarias */}
          <Route path="/blog/modelos-sitios" element={<ModelosSitios />} />
          <Route path="/blog/paga-si-te-gusta" element={<PagaSiTeGusta />} />
          <Route path="/blog/cotizar-servicios" element={<CotizarServicios />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;