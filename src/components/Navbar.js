// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { auth } from "../firebase/config";
import LoginPopup from "./LoginPopup";
import UserProfileMenu from "./UserProfileMenu";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "hero", label: "Inicio" },
    { to: "servicios", label: "Servicios" },
    { to: "portfolio", label: "Portfolio" },
    { to: "blog", label: "Blog" },
    { to: "contacto", label: "Contacto" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-500">de Zero</h1>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-6 text-cyan-500 font-semibold">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={closeMenu}
                className="cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Controles derecho */}
        <div className="flex items-center space-x-4">
          {/* Botón Modo */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-105 transition-transform duration-300"
            title={darkMode ? "Tema Claro" : "Tema Oscuro"}
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-gray-800" size={20} />
            )}
          </button>

          {/* Sesión */}
          {user ? (
            <UserProfileMenu
              user={user}
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          ) : (
            <LoginPopup />
          )}

          {/* Menú hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-cyan-500 focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 shadow-md">
          <ul className="space-y-4 text-cyan-500 font-semibold">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={closeMenu}
                  className="block cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
