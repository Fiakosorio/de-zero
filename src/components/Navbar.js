// src/components/Navbar.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "hero", label: "Inicio" },
    { to: "servicios", label: "Servicios" },
    { to: "portfolio", label: "Portfolio" },
    { to: "blog", label: "Blog" },
    { to: "contact", label: "Contacto" }, 
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 w-full transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
             <ScrollLink 
                to="hero" 
                smooth={true} 
                className="text-2xl font-bold text-cyan-500 cursor-pointer"
             >
                de Zero
             </ScrollLink>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300 font-medium items-center">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-cyan-500 transition-colors"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Controles derechos (Tema + CTA) */}
        <div className="flex items-center space-x-4">
          {/* Botón Tema */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform duration-300 text-gray-800 dark:text-yellow-400"
            title={darkMode ? "Cambiar a Tema Claro" : "Cambiar a Tema Oscuro"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Botón de Acción (CTA) - Reemplaza al Login */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
            className="hidden md:block bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-full font-semibold cursor-pointer transition shadow-md hover:shadow-lg"
          >
            Pedir Presupuesto
          </ScrollLink>

          {/* Menú hamburguesa (Móvil) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-cyan-500 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Desplegable Móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 shadow-md absolute w-full left-0 border-t dark:border-gray-700">
          <ul className="space-y-4 text-center">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={closeMenu}
                  className="block text-gray-700 dark:text-gray-200 hover:text-cyan-500 text-lg py-2"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
            {/* Botón CTA en Móvil */}
            <li>
                <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                onClick={closeMenu}
                className="block bg-cyan-600 text-white py-3 rounded-md font-bold mt-4"
                >
                Pedir Presupuesto
                </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
