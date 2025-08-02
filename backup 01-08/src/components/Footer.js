// src/components/Footer.js
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaFileDownload,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white pt-10 pb-6 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Sección de navegación */}
        <div>
          <h3 className="font-semibold mb-2 text-cyan-500">Enlaces útiles</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contacto
              </a>
            </li>
            <li>
              <a href="/politica" className="hover:underline">
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div>
          <h3 className="font-semibold mb-2 text-cyan-500">Redes Sociales</h3>
          <div className="flex space-x-4 text-cyan-500 text-lg">
            <a
              href="https://github.com/Fiakosorio"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jmosorio-1982"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:juanmosorio1982@gmail.com" title="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://fiakosorio.github.io/CV-Responsive/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver CV"
            >
              <FaFileDownload />
            </a>
          </div>
        </div>

        {/* Marca y derechos */}
        <div>
          <h3 className="font-semibold mb-2 text-cyan-500">de Zero</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Todos los derechos reservados. <br />
            Sitio creado desde cero por Juan Manuel Osorio.
          </p>
        </div>
      </div>

      {/* Botón Scroll Up */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-4 z-50 bg-cyan-500 hover:bg-cyan-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-xl transition-transform duration-300"
        title="Volver arriba"
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
