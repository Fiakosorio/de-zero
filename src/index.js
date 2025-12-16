// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
// Importamos HashRouter, es más seguro para GitHub Pages
import { HashRouter } from "react-router-dom"; 
import './index.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Quitamos el BrowserRouter que estaba causando problemas de path
  <HashRouter> 
    <App />
  </HashRouter>
);