import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import "./Hospedar.css";

const Hospedar = () => {
  const location = useLocation();
  const path = location.pathname;

  let headerText = "Nome da aba";
  let showIcon = true;

  if (path === "/hospedar/anuncio") {
    headerText = "Seus anúncios";
    showIcon = true;
  } else if (path === "/hospedar/registro") {
    headerText = "Suas reservas";
    showIcon = false; // Esconder o ícone para essa rota
  }

  return (
    <div id="hospedar">
      <div id="menu-hospedar">
        <div id="menu-hospedar-rotas">
          <span id="rota-saida">
            <NavLink to="/">
              <FaArrowLeftLong />
            </NavLink>
          </span>
          <div id="rotas-aninhadas">
            <NavLink
              to="anuncio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button>
                <span>Anúncios</span>
              </button>
            </NavLink>
            <NavLink
              to="registro"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button>
                <span>Reservas</span>
              </button>
            </NavLink>
          </div>
        </div>
        <div id="hospedar-info">
          <h1>{headerText}</h1>
          {showIcon && (
            <span>
              <NavLink to="/cadastro/acomodacoes">
                <IoAddCircle />
              </NavLink>
            </span>
          )}
        </div>
      </div>
      <div>
        <Outlet /> {/* Renderiza conteúdo com base na URL aninhada */}
      </div>
    </div>
  );
};

export default Hospedar;
