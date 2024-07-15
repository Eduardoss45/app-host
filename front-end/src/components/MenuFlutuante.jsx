import { Link } from "react-router-dom";

import "./MenuFlutuante.css";

const MenuFlutuante = ({ onLoginClick, onCadastroClick }) => {
  return (
    <div id="menu-flutuante">
      <Link to="/">
        <button onClick={onLoginClick}>Entrar</button>
      </Link>
      <div id="menu-line"></div>
      <Link to="/cadastro">
        <button onClick={onCadastroClick}>Cadastrar</button>
      </Link>
    </div>
  );
};

export default MenuFlutuante;
