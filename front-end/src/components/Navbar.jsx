import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle, FaHotel } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import logo from "../image/logo.png";
import "./Navbar.css";

import MenuFlutuante from "./MenuFlutuante";
import SearchBar from "./SearchBar";
import PainelFlutuanteLogin from "./PainelFlutuanteLogin";

const Navbar = ({ onSearch }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginPainelVisible, setIsLoginPainelVisible] = useState(false);
  const [isSearchbarVisible, setIsSearchbarVisible] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    checkAuth();
    resetPage();
  }, [location.pathname]);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        try {
          const response = await axios.post(
            "http://localhost:8000/token/refresh/",
            {
              refresh: localStorage.getItem("refreshToken"),
            }
          );
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);

          console.log("Refresh Token:", localStorage.getItem("refreshToken"));
          console.log("Access Token:", localStorage.getItem("token"));
          
          setIsAuthenticated(true);
        } catch (error) {
          console.log("Erro ao renovar token:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleLoginClick = () => {
    setIsLoginPainelVisible(true);
    setIsMenuVisible(false);
    setIsSearchbarVisible(true);
  };

  const handleCadastroClick = () => {
    setIsLoginPainelVisible(false);
    setIsMenuVisible(false);
    setIsSearchbarVisible(false);
  };

  const closeLoginPainel = () => {
    setIsLoginPainelVisible(false);
    setIsSearchbarVisible(true);
  };

  const openCadastro = () => {
    setIsSearchbarVisible(false);
    setIsLoginPainelVisible(false);
  };

  const resetPage = () => {
    setIsSearchbarVisible(location.pathname === "/");
    setIsLoginPainelVisible(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    resetPage();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
  };

  return (
    <>
      <header>
        <div id="top-row">
          <Link to="/">
            <img id="logo" src={logo} alt="logo da apphost" />
          </Link>
          <nav id="nav-btn">
            <button className="btn navegacao">
              <span>
                <MdHotel />
                Reservas
              </span>
            </button>
            <button className="btn navegacao">
              <span>
                <FaHotel />
                Hospedar
              </span>
            </button>
            <div id="box-relativo">
              <button className="btn menu" onClick={toggleMenu}>
                <span id="hanb">
                  <CiMenuBurger />
                </span>
                <span id="user">
                  <FaUserCircle />
                </span>
              </button>
              {isMenuVisible && (
                <MenuFlutuante
                  onLoginClick={handleLoginClick}
                  onCadastroClick={handleCadastroClick}
                  isAuthenticated={isAuthenticated}
                  onLogout={handleLogout}
                />
              )}
            </div>
          </nav>
        </div>
        {isSearchbarVisible && (
          <div id="bottom-row">
            <SearchBar onSearch={onSearch} />
          </div>
        )}
      </header>
      {isLoginPainelVisible && (
        <>
          <div className="backdrop" onClick={closeLoginPainel}></div>
          <PainelFlutuanteLogin
            closeLoginPainel={closeLoginPainel}
            openCadastro={openCadastro}
            onLoginSuccess={handleLoginSuccess}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
