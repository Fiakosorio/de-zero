import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
// Importamos los componentes que ya tenés
import Servicios from "./components/Servicios"; 
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
// Tus otras páginas existentes
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
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  const toggleDarkMode = () => setDarkMode(!darkMode);

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
      {/* Home con todo el contenido */}
      <Route path="/" element={<MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      
      {/* PÁGINAS INDEPENDIENTES: Cargamos el componente pero podés envolverlo en un Layout si querés */}
      <Route path="/servicios" element={<div className="pt-20"><Servicios /></div>} />
      <Route path="/portfolio" element={<div className="pt-20"><Portfolio /></div>} />
      <Route path="/blog" element={<div className="pt-20"><Blog /></div>} />

      {/* Rutas de detalle que ya tenías */}
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