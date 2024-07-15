import SearchBar from "./SearchBar";
import MenuFlutuante from "./MenuFlutuante";
import PainelFlutuanteLogin from "./PainelFlutuanteLogin";

import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle, FaHotel } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

import logo from "../image/logo.png";

import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginPainelVisible, setIsLoginPainelVisible] = useState(false);
  const [isSearchbarVisible, setIsSearchbarVisible] = useState(true);

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
  }
  
  const resetPage = () => {
    setIsSearchbarVisible(true);
    setIsLoginPainelVisible(false);
  }

  return (
    <>
      <header>
        <div id="top-row">
          <Link to="/" onClick={resetPage}>
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
          />
        </>
      )}
    </>
  );
};

export default Navbar;
