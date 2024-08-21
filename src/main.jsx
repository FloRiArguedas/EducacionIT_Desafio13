import React from "react"; // Corazon de react
import ReactDOM from "react-dom/client"; // Un adapatador para gestionar el DOM
import * as bootstrap from "bootstrap"; /* javascript bootstrap */
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import InicioApp from "./InicioApp";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import NoEncontrada from "./pages/NoEncontrada";
import Efectos from "./pages/Efectos";
import Navbar from "./components/Navbar";


ReactDOM.createRoot(document.getElementById("root"))
.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<InicioApp />} />
      <Route path= '/efectos' element={<Efectos />}/>
      <Route path= '/nosotros' element={<Nosotros />}/>
      <Route path= '/contacto' element={<Contacto />}/>
      <Route path= '*' element={<NoEncontrada />}/>
           
    </Routes>
  </BrowserRouter>
)
