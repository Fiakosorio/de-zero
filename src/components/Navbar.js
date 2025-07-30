// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import LoginPopup from "./LoginPopup";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-500">de Zero</h1>
        <ul className="flex space-x-6 text-cyan-500 font-semibold">
          {[
            { to: "hero", label: "Inicio" },
            { to: "servicios", label: "Servicios" },
            { to: "portfolio", label: "Portfolio" },
            { to: "blog", label: "Blog" },
            { to: "contacto", label: "Contacto" }
          ].map(({ to, label }) => (
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

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 text-white bg-cyan-500 dark:bg-cyan-600 rounded-full transition-all duration-300 hover:scale-105"
            title="Cambiar tema"
          >
            {darkMode ? "☀ Claro" : "🌙 Oscuro"}
          </button>

          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                ¡Bienvenido, {user.displayName?.toUpperCase() || "USUARIO"} 👋
              </span>
              <button
                onClick={handleLogout}
                className="text-sm px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full transition"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <LoginPopup />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
