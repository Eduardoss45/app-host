import useCadastro from "../hooks/useCadastro"; // Importa o hook de cadastro
import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

import "./Cadastro.css";

const Cadastro = ({ resetPage }) => {
  const { formData, loading, error, success, handleChange, handleSubmit } =
    useCadastro("http://localhost:8000/register/");

  return (
    <div id="page-row">
      <div id="left-arrow">
        <Link to="/" onClick={resetPage}>
          <span>
            <FaArrowLeftLong />
          </span>
        </Link>
      </div>
      <div id="page-col">
        <form onSubmit={handleSubmit}>
          <h1>Criar Conta</h1>
          <div>
            <label>
              Username
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Data de Nascimento
              <input
                type="date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Telefone
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Endereço de email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              value={loading ? "Aguarde..." : "Criar conta"}
              disabled={loading}
            />
          </div>
          {error && (
            <p className="error-message">
              Erro ao cadastrar o usuário: {error.message}
            </p>
          )}
          {success && (
            <p className="success-message">Usuário cadastrado com sucesso!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
