// src/components/Navbar.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import LoginPopup from "./LoginPopup";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "hero", label: "Inicio" },
    { to: "servicios", label: "Servicios" },
    { to: "portfolio", label: "Portfolio" },
    { to: "blog", label: "Blog" },
    { to: "contacto", label: "Contacto" }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-500">de Zero</h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-cyan-500 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <ul className={`lg:flex space-x-6 text-cyan-500 font-semibold hidden`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer relative hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                <span className="after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-500 dark:after:bg-cyan-400 after:transition-all after:duration-500 hover:after:w-full">
                  {label}
                </span>
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 text-white bg-cyan-500 dark:bg-cyan-600 rounded-full transition-all duration-300 hover:scale-105"
            title="Cambiar tema"
          >
            {darkMode ? "☀ Claro" : "🌙 Oscuro"}
          </button>
          <LoginPopup />
        </div>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-4 shadow-md">
          {navLinks.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={closeMenu}
              className="block text-cyan-600 dark:text-cyan-400 font-semibold hover:underline cursor-pointer"
            >
              {label}
            </ScrollLink>
          ))}

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 text-white bg-cyan-500 dark:bg-cyan-600 rounded-full transition"
            >
              {darkMode ? "☀ Claro" : "🌙 Oscuro"}
            </button>
            <LoginPopup />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
