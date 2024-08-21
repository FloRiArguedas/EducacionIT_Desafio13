import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../constants/menuItems";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Desafio 13
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {
              menuItems.map( (item, idx) => (
                <li className="nav-item" key={idx}>
                  <NavLink className="nav-link active" to={item.ruta}>
                   {item.nombre}
                </NavLink>
              </li>
              ))  
            }


            {/* <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/efectos">
                Efectos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contáctenos
              </NavLink>
            </li>
             */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
