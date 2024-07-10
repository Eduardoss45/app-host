import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle, FaHotel } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

import SearchBar from "./SearchBar";
import MenuFlutuante from "./MenuFlutuante";
import PainelFlutuanteLogin from "./PainelFlutuanteLogin";

import logo from "../image/logo.png";

import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginPainelVisible, setIsLoginPainelVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleLoginClick = () => {
    setIsLoginPainelVisible(true);
    setIsMenuVisible(false);
  };

  const closeLoginPainel = () => {
    setIsLoginPainelVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const onLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <header>
        <div id="top-row">
          <img id="logo" src={logo} alt="logo da apphost" />
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
                <MenuFlutuante onLoginClick={handleLoginClick} />
              )}
            </div>
          </nav>
        </div>
        <div id="bottom-row">
          <SearchBar onSearch={onSearch} />
        </div>
      </header>
      {isLoginPainelVisible && (
        <>
          <div className="backdrop" onClick={closeLoginPainel}></div>
          <PainelFlutuanteLogin
            closeLoginPainel={closeLoginPainel}
            onLoginSuccess={onLoginSuccess}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
