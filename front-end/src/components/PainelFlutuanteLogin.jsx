import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { IoMdClose } from "react-icons/io";

import "./PainelFlutuanteLogin.css";

const PainelFlutuanteLogin = ({ closeLoginPainel, onLoginSuccess, openCadastro }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        username: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      onLoginSuccess();
      closeLoginPainel();
    } catch (err) {
      setError("Credenciais inválidas");
    }
  };
  return (
    <div id="painel-flutuante">
      <div id="painel-login">
        <div id="top-painel">
          <IoMdClose onClick={closeLoginPainel} />
          Entrar ou Cadastrar-se
        </div>
        <div id="form-login">
          <h1>Bem-vindo ao App Host</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              id="btn-submit-login"
              type="submit"
              value="Log in"
              onClick={handleLogin}
            />
          </div>
          <p>
            Não possui conta? <Link to="/cadastro" onClick={openCadastro}>Criar</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PainelFlutuanteLogin;
