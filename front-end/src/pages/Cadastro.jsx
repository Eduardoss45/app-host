import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import "./Cadastro.css";

const Cadastro = () => {

  return (
    <div id="page-row">
      <div id="left-arrow">
        <Link to="/">
          <button>
            <span>
              <FaArrowLeftLong />
            </span>
          </button>
        </Link>
      </div>
      <div id="page-col">
        <form>
          <h1>Criar Conta</h1>
          <div>
            <label>
              Nome legal
              <input type="text" name="user_name"  />
            </label>
          </div>
          <div>
            <label>
              Data de Nascimento
              <input type="date" name="user_age"  />
            </label>
          </div>
          <div>
            <label>
              Telefone
              <input type="text" name="telefone" />
            </label>
          </div>
          <div>
            <label>
              Endereço de email
              <input
                type="email"
                name="user_email"
              />
            </label>
          </div>
          <div>
            <label>
              Senha
              <input
                type="password"
                name="user_password"
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Criar conta" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
