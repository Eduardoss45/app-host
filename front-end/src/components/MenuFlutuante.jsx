import "./MenuFlutuante.css";

const MenuFlutuante = ({ onLoginClick }) => {
  return (
    <div id="menu-flutuante">
      <a href="#" onClick={onLoginClick}>
        Entrar
      </a>
      <div id="menu-line"></div>
      <a href="#">Cadastrar</a>
    </div>
  );
};

export default MenuFlutuante;
