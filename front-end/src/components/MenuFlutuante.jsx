import { Link } from "react-router-dom";

import "./MenuFlutuante.css";

const MenuFlutuante = ({
  onLoginClick,
  onCadastroClick,
  isAuthenticated,
  onLogout,
}) => {

  return (
    <div id="menu-flutuante">
      {isAuthenticated && (
        <>
          <Link to="/favoritos">
            <button onClick={onLoginClick}>Favoritos</button>
          </Link>
          <div id="menu-line"></div>
          <Link to="/perfil">
            <button onClick={onCadastroClick}>Conta</button>
          </Link>
          <div id="menu-line"></div>
          <Link to="/">
            <button onClick={onLogout}>Sair</button>
          </Link>
        </>
      )}
      {!isAuthenticated && (
        <>
          <Link to="/">
            <button onClick={onLoginClick}>Entrar</button>
          </Link>
          <div id="menu-line"></div>
          <Link to="/cadastro">
            <button onClick={onCadastroClick}>Cadastrar</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MenuFlutuante;
