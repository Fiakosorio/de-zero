import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DisenoWeb from "./pages/DisenoWeb";
import Automatizacion from "./pages/Automatizacion";
import Ecommerce from "./pages/Ecommerce";
import ContactoPage from "./pages/ContactoPage";
import PagaSiTeGusta from "./pages/PagaSiTeGusta";
import ErroresVentas from "./pages/ErroresVentas";
import ModelosSitios from "./pages/ModelosSitios";
import Politicas from "./pages/Politicas";
import Terminos from "./pages/Terminos";

function App() {
  // Lógica robusta para modo oscuro
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Aplica la clase al HTML directo
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/diseno-web" element={<DisenoWeb darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/automatizacion" element={<Automatizacion darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/ecommerce" element={<Ecommerce darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/contacto" element={<ContactoPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/blog/paga-si-te-gusta" element={<PagaSiTeGusta />} />
      <Route path="/blog/errores-ventas" element={<ErroresVentas />} />
      <Route path="/blog/modelos-sitios" element={<ModelosSitios />} />
      <Route path="/politicas" element={<Politicas />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  );
}

export default App;