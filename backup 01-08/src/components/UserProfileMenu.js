import React, { useState, useRef, useEffect } from "react";
import { auth } from "../firebase/config";
import { FiLogOut, FiUser, FiSettings } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const UserProfileMenu = ({ user, toggleDarkMode, darkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    auth.signOut();
    setShowMenu(false);
  };

  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative ml-4 z-50" ref={menuRef}>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="cursor-pointer flex items-center space-x-2 hover:opacity-90 transition"
      >
        <img
          src={user?.photoURL || "https://i.pravatar.cc/150?img=3"}
          alt="Avatar"
          className="w-9 h-9 rounded-md object-cover border-2 border-cyan-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://i.pravatar.cc/150?img=3";
          }}
        />
        <span className="text-cyan-500 font-semibold hidden sm:inline">
          {user?.displayName || "Usuario"}
        </span>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-xl p-4"
          >
            <p className="font-bold mb-2">👋 ¡Hola, {user?.displayName || "Usuario"}!</p>
            <p className="text-sm mb-3 text-gray-600 dark:text-gray-400">
              Plan actual: <b className="text-cyan-500">Freemium</b>
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm cursor-pointer hover:text-cyan-600">
                <FiUser /> Ver perfil
              </li>
              <li className="flex items-center gap-2 text-sm cursor-pointer hover:text-cyan-600">
                <FiSettings /> Editar datos
              </li>
              <li className="flex items-center gap-2 text-sm cursor-pointer hover:text-cyan-600">
                <BsStars /> Cambiar plan
              </li>
              <li
                className="flex items-center gap-2 text-sm cursor-pointer text-red-500 hover:text-red-600 mt-3"
                onClick={handleLogout}
              >
                <FiLogOut /> Cerrar sesión
              </li>
            </ul>

            {/* Toggle modo oscuro con framer-motion */}
            <div
              onClick={toggleDarkMode}
              className="mt-4 flex items-center justify-center gap-2 cursor-pointer text-sm hover:text-cyan-500 transition"
            >
              {darkMode ? "🌙 Tema Oscuro" : "☀️ Tema Claro"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileMenu;
