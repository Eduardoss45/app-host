import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle, FaHotel } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

import logo from "../image/logo.png";
import "./Navbar.css";

import MenuFlutuante from "./MenuFlutuante"; // Importe o componente
import SearchBar from "./SearchBar"; // Importe o componente
import PainelFlutuanteLogin from "./PainelFlutuanteLogin"; // Importe o componente

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
  };

  const resetPage = () => {
    setIsSearchbarVisible(true);
    setIsLoginPainelVisible(false);
  };

  // Função para lidar com o sucesso do login
  const handleLoginSuccess = () => {
    // Lógica para o que fazer após um login bem-sucedido
    console.log("Login bem-sucedido!"); // Exemplo: exibir uma mensagem de sucesso
  };

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
            onLoginSuccess={handleLoginSuccess} // Passando onLoginSuccess para PainelFlutuanteLogin
          />
        </>
      )}
    </>
  );
};

export default Navbar;
