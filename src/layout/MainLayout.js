// src/layout/MainLayout.js
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

const MainLayout = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Portfolio />
      <Blog />
      <Contacto />
      <Footer />
    </>
  );
};

export default MainLayout;
