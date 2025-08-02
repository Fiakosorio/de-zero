// src/components/LoginPopup.js
import React, { useState } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from "react-icons/fi";

const LoginPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  const [error, setError] = useState("");

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setIsRegistering(false);
    setForm({ email: "", password: "", displayName: "" });
    setError("");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        await updateProfile(userCredential.user, {
          displayName: form.displayName || "Usuario",
        });
      } else {
        await signInWithEmailAndPassword(auth, form.email, form.password);
      }
      togglePopup();
    } catch (err) {
      setError("Error de autenticación. Revisá tus datos.");
    }
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="ml-4 px-4 py-1 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
      >
        Iniciar Sesión
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl w-[90%] max-w-md p-6 shadow-xl">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-red-500"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-600 dark:text-cyan-400">
              {isRegistering ? "Registrarse" : "Iniciar Sesión"}
            </h2>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
              {isRegistering && (
                <div className="relative">
                  <FiUser className="absolute top-3 left-3 text-cyan-500" />
                  <input
                    type="text"
                    name="displayName"
                    value={form.displayName}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre o apodo"
                    className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              )}

              <div className="relative">
                <FiMail className="absolute top-3 left-3 text-cyan-500" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Correo electrónico"
                  className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="relative">
                <FiLock className="absolute top-3 left-3 text-cyan-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Contraseña"
                  className="pl-10 pr-10 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 cursor-pointer text-cyan-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1 accent-cyan-500" />
                  Recordarme
                </label>
                <a
                  href="#"
                  className="hover:underline hover:text-cyan-500 transition"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md transition"
              >
                {isRegistering ? "Crear cuenta" : "Iniciar Sesión"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
              {isRegistering ? "¿Ya tenés cuenta?" : "¿No tenés una cuenta?"}{" "}
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="font-bold hover:underline hover:text-cyan-500 transition"
              >
                {isRegistering ? "Iniciar Sesión" : "Registrarse"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;

